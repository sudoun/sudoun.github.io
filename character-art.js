// A local glyph atlas keeps the animation independent of fonts, images and WebGL.
export function createCharacterArt(stage) {
  const panel = stage.closest('.exhibit-panel');
  const gallery = document.querySelector('#gallery');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width:800px)');
  const canvas = document.createElement('canvas');
  canvas.className = 'character-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  const ctx = canvas.getContext('2d', {alpha: false});
  if (!ctx) return;
  stage.prepend(canvas);
  const atlas = document.createElement('canvas');
  const ink = atlas.getContext('2d');
  const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:+*/=<>[]{}#';
  const colors = ['#f3f3ef', '#e8ff57'];
  const cell = 24;
  atlas.width = glyphs.length * cell;
  atlas.height = cell * 2;
  ink.font = '16px ui-monospace,Consolas,monospace';
  ink.textAlign = 'center';
  ink.textBaseline = 'middle';
  for (let row = 0; row < 2; row++) {
    ink.fillStyle = colors[row];
    for (let i = 0; i < glyphs.length; i++) ink.fillText(glyphs[i], i * cell + 12, row * cell + 12);
  }
  let width = 0, height = 0, points = [], frame = 0, timer = 0, resizeTimer = 0;
  let elapsed = 0, previous = 0, lastPaint = 0, running = false, scrolling = false, sleeping = false;
  let pointer = {x: -1000, y: -1000, until: 0};
  let seed = 23;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const ease = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const available = () => panel.classList.contains('is-current') && !document.hidden &&
    !document.querySelector('dialog[open],#gallery-glass:not([hidden])') &&
    (!gallery.dataset.targetPanel || gallery.dataset.targetPanel === panel.id);
  const allowed = () => available() && !scrolling && !reduced.matches &&
    !document.body.classList.contains('motion-paused') && !navigator.connection?.saveData;

  function layout() {
    const rect = stage.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width)); height = Math.max(1, Math.round(rect.height));
    // Crisp type on retina phones, capped at 2 rather than multiplying by DPR 3.
    const dpr = Math.min(compact.matches ? 2 : 1.5, devicePixelRatio || 1);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const mask = document.createElement('canvas'); mask.width = width; mask.height = height;
    const maskInk = mask.getContext('2d', {willReadFrequently: true});
    const size = Math.min(width / 3.25, height / 2.12);
    const top = (height - size * 1.92) / 2;
    maskInk.font = '900 ' + size + 'px Arial,Helvetica,sans-serif';
    maskInk.textBaseline = 'top'; maskInk.fillStyle = '#fff';
    maskInk.fillText("LET'S", width * .025, top);
    maskInk.fillText('TALK.', width * .025, top + size * .96);
    const pixels = maskInk.getImageData(0, 0, width, height).data;
    let candidates = [];
    const step = compact.matches ? 6 : 7;
    for (let y = step; y < height; y += step) for (let x = step; x < width; x += step)
      if (pixels[(y * width + x) * 4 + 3] > 130) candidates.push({x, y});
    const limit = compact.matches ? 720 : 1900;
    const stride = Math.max(1, Math.ceil(candidates.length / limit));
    seed = 23;
    points = candidates.filter((_, i) => i % stride === 0).map(({x, y}) => ({
      x, y, ox: 12 + random() * (width - 24), oy: 12 + random() * (height - 24),
      phase: random() * Math.PI * 2, lag: random() * .25,
      glyph: Math.floor(random() * glyphs.length), row: y > top + size ? 1 : 0
    }));
    // The temporary mask is discarded; frame rendering only copies cached sprites.
    mask.width = mask.height = 0;
    canvas.dataset.particles = String(points.length);
    canvas.dataset.fpsLimit = compact.matches ? '24' : '30';
    canvas.dataset.resolutionScale = String(dpr);
  }

  function draw(time, still = false) {
    const phase = time % 12;
    const spread = still ? 0 : phase < .9 ? 0 : phase < 2.2 ? ease((phase - .9) / 1.3) : phase < 2.9 ? 1 : phase < 5.2 ? 1 - ease((phase - 2.9) / 2.3) : 0;
    ctx.fillStyle = '#141414'; ctx.fillRect(0, 0, width, height);
    const stamp = 10;
    const tick = Math.floor(time * 9);
    const interactive = !still && time < pointer.until;
    for (let i = 0; i < points.length; i++) {
      const p = points[i], amount = ease(Math.min(1, spread * (1 + p.lag)));
      let x = p.x + (p.ox - p.x) * amount + Math.sin(time * .65 + p.phase) * 9 * amount;
      let y = p.y + (p.oy - p.y) * amount + Math.cos(time * .7 + p.phase) * 9 * amount;
      if (interactive) {
        const dx = x - pointer.x, dy = y - pointer.y, distance = Math.hypot(dx, dy);
        const force = ease(1 - distance / (compact.matches ? 70 : 105)) * ease((pointer.until - time) / .4) * 36;
        if (distance > .1) { x += dx / distance * force; y += dy / distance * force; }
      }
      const glyph = amount > .08 ? (p.glyph + tick + (i % 5)) % glyphs.length : p.glyph;
      ctx.globalAlpha = 1 - amount * (i % 4 === 0 ? .2 : .5);
      ctx.drawImage(atlas, glyph * cell, p.row * cell, cell, cell, x - stamp / 2, y - stamp / 2, stamp, stamp);
    }
    ctx.globalAlpha = 1;
    canvas.dataset.effectTime = time.toFixed(3);
    canvas.dataset.assembly = (1 - spread).toFixed(3);
  }

  function stop() {
    running = false; sleeping = false; previous = 0;
    cancelAnimationFrame(frame); clearTimeout(timer);
    canvas.dataset.effectState = 'paused';
  }
  function tick(now) {
    if (!running) return;
    if (!allowed()) { stop(); return; }
    elapsed += previous ? Math.min(.1, (now - previous) / 1000) : 0; previous = now;
    const interval = 1000 / (compact.matches ? 24 : 30);
    if (now - lastPaint >= interval) {
      draw(elapsed); lastPaint = now;
      const phase = elapsed % 12;
      if (phase >= 5.2 && elapsed >= pointer.until) {
        // The assembled word is completely still. Sleep through its hold.
        previous = 0; sleeping = true;
        const delay = (12 - phase) * 1000;
        timer = setTimeout(() => { sleeping = false; elapsed = Math.floor(elapsed / 12 + 1) * 12; frame = requestAnimationFrame(tick); }, delay);
        return;
      }
    }
    frame = requestAnimationFrame(tick);
  }
  function play() {
    if (running || !allowed()) return;
    if (!width) { layout(); draw(elapsed, true); }
    stage.dataset.characterReady = 'true';
    canvas.dataset.effectState = 'playing'; running = true; previous = 0;
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    stop();
    if (!available()) return;
    if (reduced.matches || navigator.connection?.saveData) { delete stage.dataset.characterReady; return; }
    if (document.body.classList.contains('motion-paused')) {
      if (!width) layout();
      draw(elapsed, true); stage.dataset.characterReady = 'true';
      return;
    }
    if (!scrolling) play();
  }
  function disturb(event) {
    if (!allowed() || event.target.closest('button,a')) return;
    const rect = stage.getBoundingClientRect();
    pointer = {x: event.clientX - rect.left, y: event.clientY - rect.top, until: elapsed + .85};
    if (sleeping || !running) { stop(); play(); }
  }
  function replay() {
    if (!allowed()) return;
    stop(); elapsed = 1.35; pointer.until = 0; play();
  }
  stage.addEventListener('pointermove', event => { if (event.pointerType === 'mouse') disturb(event); });
  stage.addEventListener('pointerup', event => { if (event.pointerType !== 'mouse' && !event.target.closest('button,a')) replay(); });
  stage.querySelector('.character-replay')?.addEventListener('click', replay);
  function onScroll() {
    scrolling = true; stop(); clearTimeout(timer);
    timer = setTimeout(() => { scrolling = false; sync(); }, 220);
  }
  gallery.addEventListener('scroll', onScroll, {passive: true});
  window.addEventListener('scroll', onScroll, {passive: true});
  document.addEventListener('gallery:target', event => { if (event.detail?.id === panel.id) sync(); else stop(); });
  document.addEventListener('gallery:change', sync);
  document.addEventListener('gallery:settled', () => { scrolling = false; sync(); });
  document.addEventListener('motion:change', sync);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  navigator.connection?.addEventListener?.('change', sync);
  for (const dialog of document.querySelectorAll('dialog')) new MutationObserver(sync).observe(dialog, {attributes: true, attributeFilter: ['open']});
  new ResizeObserver(() => {
    stop(); clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { width = 0; if (available()) sync(); }, 100);
  }).observe(stage);
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', sync);
  sync();
}
