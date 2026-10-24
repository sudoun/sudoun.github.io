import { safePublicUrl, buildInterestSummary, buildMailto } from "./site-core.js";
import "./gallery.js";
import "./sculpture.js";
import "./work-demos.js";

const profile = window.PERSONAL_SITE || {};
const catalog = window.DALE_PRODUCTS || { products: [] };
const products = Array.isArray(catalog.products) ? catalog.products : [];
const form = document.querySelector("#contact-form");
const details = document.querySelector("#contact-details");
const dialog = document.querySelector("#product-dialog");
const contactDialog = document.querySelector("dialog#contact");
const formStatus = document.querySelector("#form-status");
let selectedProduct = null;

const contactType = form?.elements.namedItem("type");
if (contactType) {
  products.forEach((product) => {
    if ([...contactType.options].some((option) => option.value === product.name)) return;
    contactType.add(new Option(product.name, product.name));
  });
}

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
  if (dialog?.open) dialog.close();
  details.open = true;
  const type = form.elements.namedItem("type");
  if (productName && [...type.options].some((option) => option.value === productName)) type.value = productName;
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

const mailAvailable = Boolean(buildMailto(profile.email, "Hello", ""));
if (mailAvailable && form) {
  document.querySelector("#contact-submit").textContent = "打开邮件，继续聊聊 ↗";
  document.querySelector("#contact-help").textContent = "填写后会打开你的邮件应用，由你确认后发送。";
}
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const summary = buildInterestSummary({
    name: data.get("name"),
    product: data.get("type"),
    problem: data.get("problem")
  }, profile.name || "Dale Anfer");
  document.querySelector("#summary-output").hidden = false;
  document.querySelector("#summary-text").value = summary;
  const mailto = buildMailto(profile.email, "关于 " + data.get("type"), summary);
  if (mailto) {
    formStatus.textContent = "邮件内容已准备好，请在邮件应用中确认发送。";
    window.location.href = mailto;
    return;
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(summary);
    formStatus.textContent = "已生成并复制，可粘贴到你与 Dale 的对话中。";
  } catch {
    formStatus.textContent = "摘要已生成，请复制下方文字。";
    const output = document.querySelector("#summary-text");
    output.focus();
    output.select();
  }
});
