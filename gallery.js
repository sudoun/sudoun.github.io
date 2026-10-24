import { clampGalleryIndex } from "./site-core.js";

const gallery = document.querySelector("#gallery");
if (gallery) {
  const panels = [...gallery.querySelectorAll(".exhibit-panel")];
  const position = document.querySelector("#gallery-position");
  const previous = document.querySelector("#gallery-prev");
  const next = document.querySelector("#gallery-next");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stacked = window.matchMedia("(max-width: 800px)");
  let active = 0;
  let renderedIndex = -1;
  let scrollFrame = 0;
  let dragging = null;
  let targetIndex = null;
  let scrollEndTimer;
  let suppressDragClick = false;

  const indexDialog = document.querySelector("#work-index");
  const indexList = document.querySelector("#work-index-list");
  if (indexDialog && indexList) {
    const catalog = window.DALE_PRODUCTS?.products || [];
    const prototypePreviews = { margin: "assets/reading-garden.svg", "portfolio-schema": "assets/local-desk.svg", frameread: "assets/local-desk.svg" };
    function previewProduct(product) {
      const image = document.querySelector("#index-preview-image");
      image.src = product.preview || prototypePreviews[product.id];
      image.alt = product.name + " 作品预览";
      document.querySelector("#index-preview-name").textContent = product.name;
      document.querySelector("#index-preview-status").textContent = product.url ? "在线作品 ↗" : "开发中 / 交互示意";
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
      stage.textContent = product.url ? "在线" : "开发中";
      const arrow = document.createElement("b");
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");
      row.append(number, title, stage, arrow);
      row.addEventListener("pointerenter", () => previewProduct(product));
      row.addEventListener("focus", () => previewProduct(product));
      indexList.append(row);
    });
    document.querySelector("[data-index-open]").addEventListener("click", () => indexDialog.showModal());
    document.querySelector(".index-close").addEventListener("click", () => indexDialog.close());
    indexDialog.addEventListener("click", (event) => {
      if (event.target !== indexDialog) return;
      const bounds = indexDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) indexDialog.close();
    });
  }

  function goTo(index, smooth = true) {
    const target = clampGalleryIndex(index, panels.length);
    targetIndex = target;
    const behavior = smooth && !reducedMotion.matches ? "smooth" : "auto";
    if (stacked.matches) {
      panels[target].scrollIntoView({ behavior, block: "start" });
    } else {
      gallery.scrollTo({
        left: Math.max(0, panels[target].offsetLeft - (gallery.clientWidth - panels[target].offsetWidth) / 2),
        behavior
      });
    }
  }
  function updatePosition() {
    const root = stacked.matches ? { left: 0, top: 0, width: innerWidth, height: innerHeight } : gallery.getBoundingClientRect();
    let distance = Infinity;
    panels.forEach((panel, index) => {
      const rect = panel.getBoundingClientRect();
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
  function queuePosition() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updatePosition);
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => { targetIndex = null; }, 160);
  }
  gallery.addEventListener("scroll", queuePosition, { passive: true });
  window.addEventListener("scroll", queuePosition, { passive: true });
  window.addEventListener("resize", queuePosition, { passive: true });
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
  window.addEventListener("load", restoreHash, { once: true });
  window.addEventListener("hashchange", restoreHash);
  gallery.addEventListener("wheel", (event) => {
    if (stacked.matches || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.target.closest("input,textarea,select")) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? gallery.clientWidth : 1);
    const canScroll = delta > 0
      ? gallery.scrollLeft < gallery.scrollWidth - gallery.clientWidth - 2
      : gallery.scrollLeft > 2;
    if (!canScroll) return;
    event.preventDefault();
    targetIndex = null;
    gallery.scrollLeft += delta;
  }, { passive: false });
  gallery.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest("input,textarea,select,button,a")) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    goTo(event.key === "Home" ? 0 : event.key === "End" ? panels.length - 1 : (targetIndex ?? active) + (event.key === "ArrowRight" ? 1 : -1));
  });
  gallery.addEventListener("pointerdown", (event) => {
    const control = event.target.closest("button,a,input,textarea,select");
    if (stacked.matches || event.pointerType !== "mouse" || event.button !== 0 || (control && !control.matches(".work-preview"))) return;
    targetIndex = null;
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
  highlight.addEventListener("click", () => {
    const selected = highlight.getAttribute("aria-pressed") !== "true";
    highlight.setAttribute("aria-pressed", String(selected));
    highlight.innerHTML = selected ? "已经记下这句话 <span>✓</span>" : "试着留一道划线 <span>＋</span>";
    document.querySelector(".reader-concept").classList.toggle("is-highlighted", selected);
  });
  const demoThemes = { blue: "#8da9f4", coral: "#ee947d", yellow: "#eff56b" };
  document.querySelectorAll("[data-demo-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("#portfolio-concept").style.setProperty("--demo-accent", demoThemes[button.dataset.demoTheme]);
      document.querySelectorAll("[data-demo-theme]").forEach((choice) => choice.setAttribute("aria-pressed", String(choice === button)));
    });
  });
  const frameNotes = ["用字幕找到正在讨论的主题。", "把重要画面留作笔记的证据。", "让观点与具体时间点保持联系。", "从上次的位置继续学习。"];
  const scrubber = document.querySelector("#frame-scrubber");
  scrubber.addEventListener("input", () => {
    const value = Number(scrubber.value);
    const seconds = Math.round(value / 100 * 720);
    const index = Math.min(frameNotes.length - 1, Math.floor(value / 25));
    document.querySelector("#frame-time").textContent = String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
    document.querySelector("#frame-note-index").textContent = String(index + 1).padStart(2, "0");
    document.querySelector("#frame-note").textContent = frameNotes[index];
    document.querySelector(".frame-geometry").style.setProperty("--frame-shift", (value - 40) * .5 + "%");
  });
  updatePosition();
  gallery.dataset.ready = "true";
}
