import { safePublicUrl } from "./site-core.js";

const catalog = window.DALE_PRODUCTS?.products || [];
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const saveData = navigator.connection?.saveData === true;
const player = document.querySelector("#demo-player");
const fullVideo = document.querySelector("#demo-player-video");
const demos = [];
const STATIC_HOLD_MS = 1100;
const slowNetwork = () => saveData || /(^|-)2g$|^3g$/.test(navigator.connection?.effectiveType || "");
let neighborTimer;

function warmNext(demo) {
  clearTimeout(neighborTimer);
  if (slowNetwork()) return;
  neighborTimer = setTimeout(() => {
    if (!demo.eligible || document.hidden || document.querySelector("dialog[open]")) return;
    const next = demos[demos.indexOf(demo) + 1];
    if (next) requestPoster(next, "low");
  }, 450);
}
function requestPoster(demo, priority = "high") {
  const poster = demo.stage.querySelector("img[data-src]");
  if (!poster) return;
  poster.fetchPriority = priority;
  if (demo.posterRequested) return;
  demo.posterRequested = true;
  demo.posterPending = true;
  poster.decoding = "async";
  const finish = async () => {
    try { await poster.decode(); demo.posterReady = true; }
    catch { demo.posterFailed = true; }
    demo.posterPending = false;
    demo.stage.dataset.posterReady = String(demo.posterReady);
    sync();
    if (demo.eligible && demo.product.autoplay === false) warmNext(demo);
  };
  poster.addEventListener("load", finish, { once: true });
  poster.addEventListener("error", () => { demo.posterPending = false; demo.posterFailed = true; sync(); }, { once: true });
  poster.src = poster.dataset.src;
}

function resetIntro(demo) {
  clearTimeout(demo.introTimer);
  demo.introTimer = null;
  demo.staticUntil = 0;
  demo.stage.classList.remove("has-film");
}

function globallyPaused() {
  return !reduced.matches && document.body.classList.contains("motion-paused");
}
function updateControls(demo) {
  const playing = !demo.video.paused && demo.video.readyState >= 2;
  const loading = !demo.userPaused && (demo.posterPending || (!demo.video.paused && demo.video.readyState < 2));
  demo.stage.dataset.playback = demo.failed ? "error" : loading ? "loading" : playing ? "playing" : "paused";
  const label = demo.failed ? "演示不可用" : playing ? "暂停" : "播放";
  demo.toggle.textContent = loading && !demo.failed ? "动效加载中…" : (playing ? "Ⅱ  " : "▶  ") + label + (demo.failed ? "" : "预览");
  demo.toggle.setAttribute("aria-label", (playing ? "暂停" : "播放") + demo.product.name + "操作演示");
  demo.toggle.setAttribute("aria-pressed", String(playing));
  demo.toggle.disabled = demo.failed || globallyPaused();
  demo.toggle.title = globallyPaused() ? "请用底部的播放动效按钮恢复" : "";
}
function sync() {
  const modalOpen = Boolean(document.querySelector("dialog[open]"));
  const targetPanel = document.querySelector("#gallery")?.dataset.targetPanel;
  for (const demo of demos) {
    const eligible = demo.visible && demo.panel.classList.contains("is-current")
      && (!targetPanel || demo.panel.id === targetPanel) && !document.hidden && !modalOpen;
    if (!eligible && demo.eligible) resetIntro(demo);
    demo.eligible = eligible;
    const poster = demo.stage.querySelector("img[data-src]");
    if (eligible && poster) requestPoster(demo);
    if (eligible && (demo.posterReady || demo.posterFailed) && !demo.staticUntil) {
      demo.staticUntil = performance.now() + STATIC_HOLD_MS;
      demo.introTimer = setTimeout(() => { demo.introTimer = null; sync(); }, STATIC_HOLD_MS + 30);
    }
    const shouldPlay = eligible && !demo.failed && !demo.userPaused && !globallyPaused()
      && (demo.posterReady || demo.posterFailed || demo.manual)
      && (demo.manual || (demo.staticUntil && performance.now() >= demo.staticUntil))
      && ((demo.product.autoplay !== false && !reduced.matches && !slowNetwork() && !demo.blocked) || demo.manual);
    if (shouldPlay) {
      if (!demo.video.getAttribute("src")) {
        demo.video.poster = poster?.getAttribute("src") || demo.product.preview;
        demo.video.src = demo.product.demo;
        demo.video.load();
      }
      if (demo.video.paused && !demo.pending) {
        demo.pending = true;
        demo.video.play().catch((error) => {
          if (error.name !== "AbortError") { demo.blocked = true; demo.manual = false; }
        }).finally(() => { demo.pending = false; updateControls(demo); });
      }
    } else if (!demo.video.paused) demo.video.pause();
    updateControls(demo);
  }
}

for (const stage of document.querySelectorAll("[data-work-demo]")) {
  const product = catalog.find((item) => item.id === stage.dataset.workDemo);
  if (!product?.demo || !/^assets\/works\/[a-z0-9-]+\.webm$/.test(product.demo)) continue;
  const video = document.createElement("video");
  video.className = "work-film";
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "none";
  video.tabIndex = -1;
  video.setAttribute("aria-hidden", "true");
  stage.append(video);

  const toolbar = document.createElement("div");
  toolbar.className = "demo-toolbar";
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.dataset.demoToggle = product.id;
  const expand = document.createElement("button");
  expand.type = "button";
  expand.className = "demo-expand";
  expand.dataset.demoExpand = product.id;
  expand.textContent = "放大演示 ↗";
  expand.setAttribute("aria-label", "放大观看" + product.name + "动态演示");
  toolbar.append(toggle, expand);
  const panel = stage.closest(".exhibit-panel");
  const destination = panel.querySelector("[data-work-link]");
  const actions = document.createElement("div");
  actions.className = "work-actions";
  destination.before(actions);
  actions.append(toolbar, destination);
  if (destination.hasAttribute("data-demo-open")) destination.addEventListener("click", () => openPlayer(demo));
  const description = document.createElement("p");
  description.className = "sr-only";
  description.textContent = (product.demoNote || (product.demoType ? "项目创意动态预览，无声循环。" : "原站操作实录，无声循环。")) + product.demoDescription;
  stage.append(description);
  const fallback = document.createElement("p");
  fallback.className = "demo-fallback";
  fallback.setAttribute("role", "status");
  fallback.hidden = true;
  fallback.textContent = product.url ? "演示暂不可播放，仍可通过下方入口打开原站。" : "演示暂不可播放，封面仍可查看，请稍后重试。";
  stage.append(fallback);

  const demo = { stage, product, video, toggle, panel, visible: false, eligible: false, staticUntil: 0, introTimer: null,
    posterRequested: false, posterPending: false, posterReady: false, posterFailed: false,
    userPaused: false, manual: false, blocked: false, failed: false, pending: false };
  demos.push(demo);
  toggle.addEventListener("click", () => {
    if (!video.paused) { demo.userPaused = true; demo.manual = false; }
    else { demo.userPaused = false; demo.manual = true; demo.blocked = false; }
    sync();
  });
  expand.addEventListener("click", () => openPlayer(demo));
  video.addEventListener("playing", () => {
    const reveal = () => {
      if (demo.eligible && !video.paused && !demo.failed) stage.classList.add("has-film");
    };
    if (!stage.classList.contains("has-film")) {
      if (video.requestVideoFrameCallback) video.requestVideoFrameCallback(reveal);
      else requestAnimationFrame(reveal);
    }
    updateControls(demo);
    warmNext(demo);
  });
  video.addEventListener("pause", () => updateControls(demo));
  video.addEventListener("error", () => {
    demo.failed = true;
    stage.classList.remove("has-film");
    fallback.hidden = false;
    updateControls(demo);
  });
  updateControls(demo);
}

function openPlayer(demo) {
  if (!player || !fullVideo) return;
  document.querySelector("#demo-player-title").textContent = demo.product.name;
  document.querySelector("#demo-player-description").textContent = demo.product.demoDescription;
  const destination = document.querySelector("#demo-player-destination");
  const productUrl = safePublicUrl(demo.product.url);
  destination.hidden = !productUrl;
  if (productUrl) destination.href = productUrl;
  else destination.removeAttribute("href");
  document.querySelector("#demo-player-note").textContent = demo.product.demoNote || "本站展示操作片段，完整功能以原站为准。";
  document.querySelector("#demo-player-error").hidden = true;
  fullVideo.poster = demo.stage.querySelector("img")?.getAttribute("src") || demo.product.preview;
  fullVideo.muted = true;
  fullVideo.src = demo.product.demo;
  fullVideo.currentTime = demo.video.currentTime;
  player.showModal();
  sync();
  fullVideo.play().catch(() => { /* Native controls allow explicit playback. */ });
}
if (player && fullVideo) {
  document.querySelector("[data-demo-close]").addEventListener("click", () => player.close());
  player.addEventListener("close", () => {
    fullVideo.pause();
    fullVideo.removeAttribute("src");
    fullVideo.load();
    sync();
  });
  player.addEventListener("click", (event) => {
    if (event.target !== player) return;
    const rect = player.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) player.close();
  });
  fullVideo.addEventListener("error", () => { if (fullVideo.getAttribute("src")) document.querySelector("#demo-player-error").hidden = false; });
}
const visibility = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const demo = demos.find((item) => item.panel === entry.target);
    if (demo) demo.visible = entry.isIntersecting && entry.intersectionRatio > .25;
  }
  sync();
}, { threshold: [0, .25, .5, .75] });
demos.forEach((demo) => visibility.observe(demo.panel));
const changes = new MutationObserver(sync);
changes.observe(document.body, { attributes: true, attributeFilter: ["class"] });
document.querySelectorAll("dialog").forEach((dialog) => changes.observe(dialog, { attributes: true, attributeFilter: ["open"] }));
document.addEventListener("gallery:change", sync);
document.addEventListener("gallery:target", event => {
  const demo = demos.find(item => item.panel.id === event.detail?.id);
  if (demo) requestPoster(demo);
});
document.addEventListener("gallery:settled", sync);
document.addEventListener("work:poster-ready", sync);
document.addEventListener("visibilitychange", () => { if (document.hidden) fullVideo?.pause(); sync(); });
reduced.addEventListener("change", sync);
const initialDemo = demos.find(demo => demo.panel.classList.contains("is-current"));
if (initialDemo) requestPoster(initialDemo);
window.addEventListener("pagehide", () => { demos.forEach((demo) => { resetIntro(demo); demo.eligible = false; demo.video.pause(); }); fullVideo?.pause(); });
window.addEventListener("pageshow", sync);
