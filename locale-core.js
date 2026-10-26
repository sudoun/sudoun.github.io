export function chooseLocale(saved, preferred = []) {
  if (saved === 'zh' || saved === 'en') return saved;
  const first = preferred.find(value => typeof value === 'string' && value.length);
  return /^zh(?:-|$)/i.test(first || 'zh') ? 'zh' : 'en';
}

export function formatMessage(message, values = {}) {
  return message.replace(/\{(\w+)\}/g, (match, key) => String(values[key] ?? match));
}
