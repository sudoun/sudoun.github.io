import { clampGalleryIndex } from "./site-core.js";
import { createGalleryGlass } from "./gallery-glass.js";

const gallery = document.querySelector("#gallery");
if (gallery) {
  const panels = [...gallery.querySelectorAll(".exhibit-panel")];
  const position = document.querySelector("#gallery-position");
  const previous = document.querySelector("#gallery-prev");
  const next = document.querySelector("#gallery-next");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stacked = window.matchMedia("(max-width: 800px)");
  const glass = createGalleryGlass();
  let active = 0;
  let renderedIndex = -1;
  let scrollFrame = 0;
  let dragging = null;
  let targetIndex = null;
  let scrollEndTimer;
  let suppressDragClick = false;
  let wheelGoal=null,wheelFrame=0,wheelLast=0,wheelStarted=0;
  function stopWheel(){cancelAnimationFrame(wheelFrame);wheelFrame=0;wheelGoal=null;wheelLast=0;}
  function stepWheel(now){
    wheelFrame=0;
    if(wheelGoal===null)return;
    if(document.hidden||stacked.matches||reducedMotion.matches||document.body.classList.contains('motion-paused')||document.querySelector('dialog[open]')){stopWheel();return;}
    const current=gallery.scrollLeft,gap=wheelGoal-current;
    if(Math.abs(gap)<1.25||now-wheelStarted>280){gallery.scrollTo({left:wheelGoal,behavior:'instant'});stopWheel();return;}
    const dt=Math.min(32,wheelLast?now-wheelLast:16);wheelLast=now;
    gallery.scrollTo({left:current+gap*(1-Math.exp(-dt/45)),behavior:'instant'});
    wheelFrame=requestAnimationFrame(stepWheel);
  }
  function softenWheel(delta){
    const current=gallery.scrollLeft;
    if(wheelGoal===null||Math.sign(delta)!==Math.sign(wheelGoal-current))wheelGoal=current;
    wheelGoal=Math.max(0,Math.min(gallery.scrollWidth-gallery.clientWidth,wheelGoal+delta));wheelStarted=performance.now();
    if(!wheelFrame)wheelFrame=requestAnimationFrame(stepWheel);
  }
  window.addEventListener('blur',stopWheel);window.addEventListener('pagehide',stopWheel);window.addEventListener('resize',stopWheel);
  document.addEventListener('motion:change',stopWheel);reducedMotion.addEventListener('change',stopWheel);


  const indexDialog = document.querySelector("#work-index");
  const indexList = document.querySelector("#work-index-list");
  if (indexDialog && indexList) {
    const catalog = window.DALE_PRODUCTS?.products || [];
    const prototypePreviews = { margin: "assets/reading-garden.svg" };
    function previewProduct(product) {
      const image = document.querySelector("#index-preview-image");
      image.srcset=product.previewSrcset||"";
      image.sizes="(max-width:800px) 300px, 42vw";
      image.src = product.preview || prototypePreviews[product.id];
      image.alt = product.name + " 作品预览";
      document.querySelector("#index-preview-name").textContent = product.name;
      document.querySelector("#index-preview-status").textContent = product.url ? "在线作品 ↗" : product.id === "film" ? "影视制作 / 本地项目" : product.status === "ALPHA" ? "Alpha / 正在打磨" : "本地研究项目";
    }
    catalog.forEach((product, order) => {
      const panel = panels.find((panel) => panel.dataset.projectId === product.id);
      if (!panel) return;
      const row = document.createElement("a");
      row.className = "index-row";
      row.href = "#" + panel.id;
      row.dataset.galleryJump = "";
      const number = document.createElement("span");
      number.textContent = String(order + 1).padStart(2, "0");
      const title = document.createElement("span");
      title.textContent = product.name;
      const stage = document.createElement("small");
      stage.textContent = product.url ? "在线" : product.id === "film" ? "影视" : product.status === "ALPHA" ? "开发中" : "研究";
      const arrow = document.createElement("b");
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");
      row.append(number, title, stage, arrow);
      row.addEventListener("pointerenter", () => previewProduct(product));
      row.addEventListener("focus", () => previewProduct(product));
      indexList.append(row);
    });
    document.querySelector("[data-index-open]").addEventListener("click", () => {
      if (!document.querySelector("#index-preview-image").getAttribute("src") && catalog[0]) previewProduct(catalog[0]);
      indexDialog.showModal();
    });
    document.querySelector(".index-close").addEventListener("click", () => indexDialog.close());
    indexDialog.addEventListener("click", (event) => {
      if (event.target !== indexDialog) return;
      const bounds = indexDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) indexDialog.close();
    });
  }

  function goTo(index, smooth = true) {
    stopWheel();
    const target = clampGalleryIndex(index, panels.length);
    targetIndex = target;
    gallery.dataset.targetPanel = panels[target].id;
    if (smooth) history.replaceState(null, "", "#" + panels[target].id);
    const behavior = smooth && !reducedMotion.matches ? "smooth" : "instant";
    if (behavior === "instant") glass.reset();
    else glass.arm(active);
    document.dispatchEvent(new CustomEvent("gallery:target", { detail: { id: panels[target].id } }));
    if (stacked.matches) {
      // The cover includes the identity header; deep links must not crop it away.
      if (target === 0) window.scrollTo({ top: 0, behavior });
      else panels[target].scrollIntoView({ behavior, block: "start" });
    } else {
      gallery.scrollTo({
        left: Math.max(0, panels[target].offsetLeft - (gallery.clientWidth - panels[target].offsetWidth) / 2),
        behavior
      });
    }
  }
  function updatePosition() {
    const root = stacked.matches ? { left: 0, top: 0, width: innerWidth, height: innerHeight } : gallery.getBoundingClientRect();
    const rectangles = panels.map(panel => panel.getBoundingClientRect());
    let distance = Infinity;
    panels.forEach((panel, index) => {
      const rect = rectangles[index];
      const relative = stacked.matches ? 0 : Math.max(-1, Math.min(1, (rect.left + rect.width / 2 - root.left - root.width / 2) / root.width));
      panel.style.setProperty("--panel-distance", reducedMotion.matches ? "0" : relative.toFixed(3));
      const nextDistance = stacked.matches
        ? Math.abs(rect.top + rect.height / 2 - root.height / 2)
        : Math.abs(rect.left + rect.width / 2 - root.left - root.width / 2);
      if (nextDistance < distance) {
        active = index;
        distance = nextDistance;
      }
    });
    glass.render(rectangles, stacked.matches, root);
    if (active !== renderedIndex) {
      position.value = String(active);
      previous.disabled = active === 0;
      next.disabled = active === panels.length - 1;
      document.querySelector("#gallery-count").textContent = String(active + 1).padStart(2, "0") + " / " + String(panels.length).padStart(2, "0");
      document.querySelector("#gallery-current").textContent = panels[active].dataset.panelName;
      document.querySelectorAll(".exhibit-header [data-gallery-jump]").forEach((link) => {
        const current = link.hash === "#products" ? Boolean(panels[active].dataset.projectId) : link.hash === "#" + panels[active].id;
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      renderedIndex = active;
      panels.forEach((panel, index) => panel.classList.toggle("is-current", index === active));
      document.dispatchEvent(new CustomEvent("gallery:change", { detail: { id: panels[active].id } }));
    }
    scrollFrame = 0;
  }
  function queuePosition(event) {
    if (event?.type === "resize") glass.reset();
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updatePosition);
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      updatePosition();
      if (targetIndex !== null && active !== targetIndex) return;
      targetIndex = null;
      delete gallery.dataset.targetPanel;
      document.dispatchEvent(new Event("gallery:settled"));
    }, 160);
  }
  gallery.addEventListener("scroll", queuePosition, { passive: true });
  window.addEventListener("scroll", queuePosition, { passive: true });
  window.addEventListener("resize", queuePosition, { passive: true });
  let hintedPanel, touchY;
  function hintAdjacent(direction) {
    const panel=panels[clampGalleryIndex(active+direction,panels.length)];
    if(panel?.id!==hintedPanel){hintedPanel=panel.id;document.dispatchEvent(new CustomEvent("gallery:target",{detail:{id:panel.id}}));}
  }
  window.addEventListener("wheel", event => {
    if(event.ctrlKey||document.querySelector("dialog[open]"))return;
    glass.arm(active);
    const delta=stacked.matches?event.deltaY:Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;
    if(delta)hintAdjacent(Math.sign(delta));
  }, { passive: true });
  window.addEventListener("touchstart", event=>{touchY=event.touches[0]?.clientY;},{passive:true});
  window.addEventListener("touchmove", event=>{
    glass.arm(active);const y=event.touches[0]?.clientY;
    if(stacked.matches&&Math.abs(touchY-y)>6)hintAdjacent(Math.sign(touchY-y));
  }, { passive: true });
  window.addEventListener("keydown", event => {
    if (["PageUp", "PageDown", "ArrowUp", "ArrowDown", "Home", "End", " "].includes(event.key)) glass.arm(active);
  });
  previous.addEventListener("click", () => goTo((targetIndex ?? active) - 1));
  next.addEventListener("click", () => goTo((targetIndex ?? active) + 1));
  document.querySelector("[data-next-panel]")?.addEventListener("click", () => goTo(1));
  position.max = String(panels.length - 1);
  position.addEventListener("input", () => goTo(Number(position.value)));

  document.querySelectorAll("[data-gallery-jump]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const index = panels.findIndex((panel) => "#" + panel.id === link.hash);
      if (index < 0) return;
      event.preventDefault();
      if (indexDialog?.open) indexDialog.close();
      history.replaceState(null, "", link.hash);
      goTo(index);
      if (link.closest("#work-index")) gallery.focus({ preventScroll: true });
    });
  });
  function restoreHash() {
    const index = panels.findIndex((panel) => "#" + panel.id === location.hash);
    if (index >= 0) goTo(index, false);
    updatePosition();
  }
  window.addEventListener("hashchange", restoreHash);
  gallery.addEventListener("wheel", (event) => {
    if (!event.ctrlKey) { targetIndex = null; delete gallery.dataset.targetPanel; }
    if (stacked.matches || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.target.closest("input,textarea,select")) { stopWheel(); return; }
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? gallery.clientWidth : 1);
    const canScroll = delta > 0
      ? gallery.scrollLeft < gallery.scrollWidth - gallery.clientWidth - 2
      : gallery.scrollLeft > 2;
    if (!canScroll) return;
    event.preventDefault();
    targetIndex = null;
    delete gallery.dataset.targetPanel;
    // Small/fractional input follows the hand directly; discrete mouse-wheel
    // steps get a short, bounded settle and never snap to another work.
    if(reducedMotion.matches||document.body.classList.contains('motion-paused')||Math.abs(delta)<40||!Number.isInteger(event.deltaY)){stopWheel();gallery.scrollLeft+=delta;}
    else softenWheel(delta);
  }, { passive: false });
  gallery.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest("input,textarea,select,button,a")) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    goTo(event.key === "Home" ? 0 : event.key === "End" ? panels.length - 1 : (targetIndex ?? active) + (event.key === "ArrowRight" ? 1 : -1));
  });
  gallery.addEventListener("pointerdown", (event) => {
    stopWheel();
    targetIndex = null;
    delete gallery.dataset.targetPanel;
    const control = event.target.closest("button,a,input,textarea,select,summary");
    if (stacked.matches || event.pointerType !== "mouse" || event.button !== 0 || (control && !control.matches(".work-preview"))) return;
    targetIndex = null;
    delete gallery.dataset.targetPanel;
    dragging = { id: event.pointerId, x: event.clientX, left: gallery.scrollLeft, moved: false };
  });
  gallery.addEventListener("pointermove", (event) => {
    if (!dragging || dragging.id !== event.pointerId) return;
    const delta = event.clientX - dragging.x;
    if (Math.abs(delta) > 6 && !dragging.moved) {
      dragging.moved = true;
      gallery.setPointerCapture(event.pointerId);
      gallery.classList.add("is-dragging");
    }
    if (dragging.moved) {
      event.preventDefault();
      glass.arm(active);
      hintAdjacent(delta<0?1:-1);
      gallery.scrollLeft = dragging.left - delta;
    }
  });
  function stopDragging() {
    if (!dragging) return;
    const pointerId = dragging.id;
    if (dragging.moved) {
      suppressDragClick = true;
      setTimeout(() => { suppressDragClick = false; }, 0);
    }
    dragging = null;
    if (gallery.hasPointerCapture(pointerId)) gallery.releasePointerCapture(pointerId);
    gallery.classList.remove("is-dragging");
  }
  gallery.addEventListener("pointerup", stopDragging);
  gallery.addEventListener("pointercancel", stopDragging);
  gallery.addEventListener("lostpointercapture", stopDragging);
  window.addEventListener("pointerup", stopDragging);
  window.addEventListener("blur", stopDragging);
  gallery.addEventListener("click", (event) => {
    if (!suppressDragClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressDragClick = false;
  }, true);
  gallery.querySelectorAll(".work-preview,.work-preview img").forEach((element) => { element.draggable = false; });

  gallery.addEventListener("pointermove", (event) => {
    if (reducedMotion.matches || stacked.matches || dragging || document.body.classList.contains("motion-paused")) return;
    const panel = event.target.closest(".live-work-panel");
    if (!panel) return;
    const bounds = panel.getBoundingClientRect();
    panel.style.setProperty("--scene-x", ((event.clientX - bounds.left) / bounds.width - .5).toFixed(3));
    panel.style.setProperty("--scene-y", ((event.clientY - bounds.top) / bounds.height - .5).toFixed(3));
  });
  const highlight = document.querySelector("#highlight-toggle");
  highlight?.addEventListener("click", () => {
    const selected = highlight.getAttribute("aria-pressed") !== "true";
    highlight.setAttribute("aria-pressed", String(selected));
    highlight.innerHTML = selected ? "已经记下这句话 <span>✓</span>" : "试着留一道划线 <span>＋</span>";
    document.querySelector(".reader-concept").classList.toggle("is-highlighted", selected);
  });
  const frameNotes = ["用字幕找到正在讨论的主题。", "把重要画面留作笔记的证据。", "让观点与具体时间点保持联系。", "从上次的位置继续学习。"];
  const scrubber = document.querySelector("#frame-scrubber");
  scrubber?.addEventListener("input", () => {
    const value = Number(scrubber.value);
    const seconds = Math.round(value / 100 * 720);
    const index = Math.min(frameNotes.length - 1, Math.floor(value / 25));
    document.querySelector("#frame-time").textContent = String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
    document.querySelector("#frame-note-index").textContent = String(index + 1).padStart(2, "0");
    document.querySelector("#frame-note").textContent = frameNotes[index];
    document.querySelector(".frame-geometry").style.setProperty("--frame-shift", (value - 40) * .5 + "%");
  });
  // Restore before video observers start, so deep links skip other work media.
  restoreHash();
  gallery.dataset.ready = "true";
}
