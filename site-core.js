export function clampGalleryIndex(index, count) {
  if (count <= 0) return 0;
  const numeric = Number(index);
  return Math.max(0, Math.min(count - 1, Number.isFinite(numeric) ? Math.round(numeric) : 0));
}

export function safePublicUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value.trim());
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return "";
    return url.href;
  } catch {
    return "";
  }
}

export function buildInterestSummary({ name, product, problem }, owner = "Dale Anfer") {
  const clean = (value, max) => String(value || "").trim().slice(0, max);
  return [
    "你好，" + clean(owner, 80) + "：",
    "",
    "我是" + (clean(name, 80) ? " " + clean(name, 80) : "一位访客") + "，想聊聊「" + clean(product, 100) + "」。",
    "",
    clean(problem, 1000)
  ].join("\n");
}

export function buildMailto(email, subject, body) {
  if (typeof email !== "string" || !/^[^\s@<>,;:]+@[^\s@<>,;:]+\.[^\s@<>,;:]+$/.test(email)) return "";
  return "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}
