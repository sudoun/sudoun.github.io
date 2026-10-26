import { safePublicUrl } from "./site-core.js";
import "./gallery.js";
import "./work-art.js";
import {initializeEmailContact,warmContactConnection} from "./contact-email.js";

// Global motion controls stay available even when WebGL has not been loaded.
const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
const motionToggle = document.querySelector("#motion-toggle");
let motionPaused = motionPreference.matches;
function updateMotion() {
  document.body.classList.toggle("motion-paused", motionPaused);
  motionToggle.setAttribute("aria-pressed", String(motionPaused));
  motionToggle.disabled = motionPreference.matches;
  motionToggle.textContent = motionPreference.matches ? "已减少动效" : motionPaused ? "播放动效 ↗" : "暂停动效 Ⅱ";
  motionToggle.setAttribute("aria-label", motionPreference.matches ? "系统已设置减少动效" : motionPaused ? "播放动态效果" : "暂停动态效果");
  document.dispatchEvent(new Event("motion:change"));
}
motionToggle.addEventListener("click", () => { motionPaused = !motionPaused; updateMotion(); });
motionPreference.addEventListener("change", () => { motionPaused = motionPreference.matches; updateMotion(); });
updateMotion();

// Compile WebGL only when the cover is selected, after the page can paint.
const cover = document.querySelector(".cover-panel");
if (cover?.querySelector("#kinetic-sculpture")) {
  let queued = false;
  function startSculpture() {
    if (queued || !cover.classList.contains("is-current") || document.hidden || document.querySelector('dialog[open]')) return;
    queued = true;
    setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(() => {
      if (!cover.classList.contains("is-current") || document.hidden || document.querySelector('dialog[open]')) { queued = false; return; }
      const sculptureModule = document.documentElement.dataset.sculptureModule || "./homeomorphism.js";
      import(sculptureModule).catch(() => {
        queued = false;
        const hint=document.querySelector('#morph-hint');if(hint)hint.textContent='静态预览 · 动画暂未加载';
      });
    })), 1100);
  }
  document.addEventListener("gallery:change", startSculpture);
  document.addEventListener("visibilitychange", startSculpture);
  document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('close',startSculpture));
  startSculpture();
}

const profile = window.PERSONAL_SITE || {};
const catalog = window.DALE_PRODUCTS || { products: [] };
const products = Array.isArray(catalog.products) ? catalog.products : [];
const form = document.querySelector("#contact-form");
const details = document.querySelector("#contact-details");
const dialog = document.querySelector("#product-dialog");
const contactDialog = document.querySelector("dialog#contact");
const formStatus = document.querySelector("#form-status");
let selectedProduct = null;

document.querySelectorAll("[data-profile-name]").forEach((element) => {
  if (profile.name) element.textContent = profile.name;
});
const featured = products.find((product) => product.id === catalog.featuredProductId) || products[0];
document.querySelectorAll("[data-featured-name]").forEach((element) => {
  if (featured) element.textContent = featured.name;
});
document.querySelectorAll("[data-social]").forEach((link) => {
  const href = safePublicUrl(profile.links?.[link.dataset.social]);
  if (!href) return;
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.hidden = false;
});
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

function openContact(productName) {
  if (!details || !form) return;
  warmContactConnection(profile);
  if (dialog?.open) dialog.close();
  details.open = true;
  form.dataset.product = productName || "";
  if (formStatus) formStatus.textContent = "";
  if (contactDialog && !contactDialog.open) contactDialog.showModal();
}
document.querySelectorAll("[data-contact-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (contactDialog) event.preventDefault();
    openContact();
  });
});
if (location.hash === "#contact") openContact();
window.addEventListener('hashchange',()=>{if(location.hash==='#contact')openContact();});

document.querySelectorAll("[data-product-open]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedProduct = products.find((product) => product.id === button.dataset.productOpen);
    if (!selectedProduct || !dialog) return;
    document.querySelector("#dialog-title").textContent = selectedProduct.name;
    document.querySelector("#dialog-category").textContent = selectedProduct.category;
    document.querySelector("#dialog-tagline").textContent = selectedProduct.tagline;
    document.querySelector("#dialog-description").textContent = selectedProduct.description;
    const publicUrl = safePublicUrl(selectedProduct.url);
    document.querySelector("#dialog-stage").textContent = publicUrl
      ? "可以前往产品网站，了解更多功能与使用方式。"
      : selectedProduct.status === "ALPHA"
        ? "还在认真打磨的 Alpha 版本，尚未开放公开体验。如果你也遇到类似的问题，很想听听你的想法。"
        : "这是一个仍在探索中的产品原型，尚未开放公开体验。欢迎分享你的使用场景和建议。";
    const destination = document.querySelector("#product-destination");
    destination.textContent = publicUrl ? "前往 " + selectedProduct.name + " ↗" : "聊聊这个产品 ↗";
    destination.href = publicUrl || "#contact";
    if (publicUrl) {
      destination.target = "_blank";
      destination.rel = "noopener noreferrer";
    } else {
      destination.removeAttribute("target");
      destination.removeAttribute("rel");
    }
    dialog.showModal();
  });
});
document.querySelector("#product-destination")?.addEventListener("click", (event) => {
  if (selectedProduct && !safePublicUrl(selectedProduct.url)) {
    if (contactDialog) event.preventDefault();
    openContact(selectedProduct.name);
  }
});
document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
document.querySelector(".contact-close")?.addEventListener("click", () => contactDialog.close());
contactDialog?.addEventListener("click", (event) => {
  if (event.target !== contactDialog) return;
  const rect = contactDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) contactDialog.close();
});
dialog?.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

initializeEmailContact(form, profile);
