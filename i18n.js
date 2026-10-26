import {chooseLocale, formatMessage} from './locale-core.js';

// Original HTML is the Chinese fallback; translations never fetch another file.
const english = {
  skip: 'Skip to the gallery', home: 'Dale Anfer home', selectPage: 'Choose a gallery page',
  nav: 'Main navigation', work: 'Work', contact: 'Contact', hello: 'Hello ↗',
  galleryRole: 'Project gallery', galleryLabel: 'Introduction and artwork for eight projects',
  explore: 'Explore the work', torus: 'Donut', mug: 'Coffee mug',
  morphInitial: 'A donut and a handled mug each have one through-hole.',
  morphControl: 'A continuous donut-to-mug deformation. Drag to rotate; click to change shape.',
  morphInfo: 'About homeomorphism', morphNote: 'A donut and a handled mug can deform continuously while retaining one through-hole.',
  morphExample: 'Classic example ↗', morphProgress: 'Donut-to-mug deformation progress',
  pauseMorph: 'Pause morph',
  morphLoading: 'A still preview appears first; the animation follows.',
  artError: 'The artwork could not load. You can still open the project below.',
  live: 'ONLINE · Try it', private: 'Personal project · Not released', alpha: 'In development · Not released',
  slidefetchBody: 'Paste a course link to find indexed slides and notes.\nSpend less time searching, and more time learning.',
  sodaBody: 'Pick a flavor. Add a little fizz.\nLeave some curiosity in your glass.',
  facedropBody: 'Every clue brings the answer closer.\nGuess the person, or create a puzzle of your own.',
  nearstageBody: 'Make a good live show your next night out.\nDiscover, save and add it to your calendar.',
  rubikBody: 'Find your next move across six faces.\nRotate the board, read the position and start a new game.',
  quantBody: 'Review experiments and methods. Follow the evidence.\nGive every research decision a traceable source.',
  filmBody: 'From a storyboard to a little film.\nConnect images, rhythm and light into a story.',
  marginBody: 'A local-first AI reading companion.\nKeep your reading, thinking and sources connected.',
  slidefetchAction: 'Open SlideFetch', sodaAction: 'Mix a drink', facedropAction: 'Take a guess',
  nearstageAction: 'Find a live show', rubikAction: 'Make your move', learn: 'About the project', marginAction: 'About Margin',
  quantSubtitle: 'Quant research', endingBody: 'For projects or collaboration, say hello.', replay: 'Scatter and reassemble the letters',
  workIndex: 'Index', workIndexOpen: 'Open the project index', scroll: 'Scroll / drag', prev: 'Previous page', next: 'Next page',
  close: 'Close ×', closeIndex: 'Close the project index', closeProduct: 'Close project details', closeContact: 'Close the contact window',
  indexLabel: 'Project list', preview: '{name} artwork preview',
  contactHelp: 'Leave your email so we can get in touch.', yourEmail: 'Your email', submit: 'Leave your email ↗', privacy: 'Your email is used only for replies and contact.',
  artSlidefetch: 'Floating pages and blue threads form a spiral archive', artSoda: 'A lime, clear soda glass, bubbles and ripples',
  artFacedrop: 'A face assembled from ceramic fragments', artNearstage: 'A miniature cream-colored city around a red stage',
  artRubik: 'A cube chessboard with ivory pieces', artQuant: 'Green glass archives, stone forms and copper evidence trails',
  artFilm: 'Film strips and warm-lit windows create a nighttime story', artMargin: 'Book pages, green highlights and paper annotations',
  siteDescription: 'A playground of independent projects, interactive experiments and original artwork.'
};
// Fixed copy is tagged once. Dynamic copy has paired messages to preserve state.
const messages = {
  motionReduced: ['已减少动效', 'Reduced motion'], motionReducedLabel: ['系统已设置减少动效', 'Reduced motion is enabled in your system'],
  motionPlay: ['播放动效 ↗', 'Play motion ↗'], motionPause: ['暂停动效 Ⅱ', 'Pause motion Ⅱ'],
  motionPlayLabel: ['播放动态效果', 'Play animated effects'], motionPauseLabel: ['暂停动态效果', 'Pause animated effects'],
  morphPause: ['暂停变形', 'Pause morph'], morphPlay: ['自动播放', 'Auto-play'],
  morphMissing: ['静态预览 · 动画暂未加载', 'Still preview · Animation unavailable'],
  morphNo3d: ['静态预览 · 浏览器未启用 3D', 'Still preview · 3D is unavailable'],
  morphHint: ['拖动转动 · 点击变形 ↗', 'Drag to rotate · Click to morph ↗'],
  morphTorus: ['甜甜圈', 'Donut'], morphMug: ['咖啡杯', 'Coffee mug'], morphBetween: ['连续变形中', 'Deforming continuously'],
  statementTorus: ['甜甜圈，中央是一个通孔。', 'The donut has a through-hole at its center.'],
  statementMug: ['杯腔有底，通孔在杯把。', 'The cup has a closed base; the through-hole is in its handle.'],
  statementBetween: ['拉伸外形，通孔仍在。', 'The shape stretches while the through-hole remains.'],
  morphAria: ['同胚形变。{statement}拖动旋转视角，点击切换形状。', 'Homeomorphic deformation. {statement} Drag to rotate; click to change shape.'],
  liveShort: ['在线', 'Live'], privateShort: ['未开放', 'Not released'],
  liveIndex: ['在线作品 ↗', 'Live project ↗'], alphaIndex: ['开发中 · 未开放', 'In development · Not released'], privateIndex: ['个人项目 · 未开放', 'Personal project · Not released'],
  destination: ['前往 {name} ↗', 'Visit {name} ↗'], author: ['联系作者 ↗', 'Contact the maker ↗'],
  liveDetail: ['可以前往产品网站，了解更多功能与使用方式。', 'Visit the project website to learn more and try it.'],
  alphaDetail: ['开发中，暂未开放。', 'In development. Not publicly available yet.'],
  privateDetail: ['个人项目，暂未开放。', 'Personal project. Not publicly available yet.'],
  contactOffline: ['网络已断开，邮箱会保留，请联网后重试。', 'You are offline. Your email is kept here; reconnect and try again.'],
  contactUnavailable: ['联系入口暂未就绪，请稍后再试。', 'Contact is temporarily unavailable. Please try again later.'],
  contactSending: ['正在提交…', 'Submitting…'], contactSuccess: ['邮箱已提交，感谢联系。', 'Email submitted. Thanks for getting in touch.'],
  contactFailure: ['暂时无法提交，邮箱仍保留在输入框中，请稍后重试。', 'Unable to submit. Your email is still in the field; please try again later.'],
  submit: ['留下邮箱 ↗', 'Leave your email ↗'], contactSubject: ['新的联系邮箱', 'New contact email'], otherContact: ['其他联系', 'General contact'],
  coverName: ["Hello, I'm Dale.", "Hello, I'm Dale."], contactName: ['联系', 'Contact'],
  preview: ['{name} 作品预览', '{name} artwork preview'],
  tagFirst: ['把好奇心，', 'Turning curiosity'], tagSecond: ['变成小小世界。', 'into little worlds.']
};
const productEnglish = {
  slidefetch: ['SlideFetch', 'Find learning materials from a course link', 'Paste a YouTube or Bilibili course link to find indexed slides and lecture notes.'],
  soda: ['Soda Lab', 'Add a little fizz to your curiosity', 'A 3D soda lab where you can mix flavors, add ice and rotate the glass.'],
  facedrop: ['FaceDrop', 'Every clue brings the answer closer', 'Guess a person from gradually revealed clues, try the three-minute mode, or create puzzles with local photos.'],
  nearstage: ['Nearstage', 'Discover great live music nearby', 'Find shows by city, explore artists and calendars, and save the events you want to see.'],
  rubik: ['Rubik Chess', 'Unfold the game across six faces', 'Explore chess on a three-dimensional board. Rotate the view to read all six faces and play against AI or a friend.'],
  quant: ['Million', 'Give every research decision a traceable source', 'A quantitative research workspace for finding experiments, reviewing reports and validation gates, and tracing research records.'],
  film: ['AI Clip', 'From a storyboard to a little film', 'Local film and animation production, with original shorts, storyboard organization and frame-by-frame review.'],
  margin: ['Margin', 'Make a book your own', 'A local-first AI reading companion with source-grounded answers and synchronized reading and listening.']
};
let saved;
try { saved = localStorage.getItem('dale-language'); } catch { /* Storage is optional. */ }
let locale = chooseLocale(saved, navigator.languages || [navigator.language]);
const originals = new WeakMap();
export const getLocale = () => locale;
export function t(key, values) {
  const pair = messages[key];
  return formatMessage(pair ? pair[locale === 'zh' ? 0 : 1] : english[key] || key, values);
}
export function productCopy(product) {
  if (locale !== 'en') return product;
  const copy = productEnglish[product.id];
  return copy ? {...product, name: copy[0], tagline: copy[1], description: copy[2]} : product;
}
function remember(node, attribute) {
  let values = originals.get(node);
  if (!values) { values = {}; originals.set(node, values); }
  if (!(attribute in values)) {
    if (attribute === 'text') { const copy = node.cloneNode(true); for (const br of copy.querySelectorAll('br')) br.replaceWith('\n'); values[attribute] = copy.textContent; }
    else values[attribute] = node.getAttribute(attribute);
  }
  return values[attribute];
}
function apply() {
  if (!document.querySelector('#language-toggle')) return;
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.locale = locale;
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const original = remember(node, 'text');
    node.textContent = locale === 'zh' ? original : english[node.dataset.i18n];
  }
  for (const attribute of ['aria-label', 'aria-roledescription', 'alt', 'title', 'content']) {
    for (const node of document.querySelectorAll('[data-i18n-' + attribute + ']')) {
      const original = remember(node, attribute);
      node.setAttribute(attribute, locale === 'zh' ? original : english[node.getAttribute('data-i18n-' + attribute)]);
    }
  }
  for (const node of document.querySelectorAll('[data-locale-lang]')) node.lang = document.documentElement.lang;
  const tag = document.querySelector('.hero-introduction > p');
  tag.querySelector('span').textContent = t('tagFirst'); tag.querySelector('em').textContent = t('tagSecond');
  const near = document.querySelector('#nearstage-title');
  near.firstChild.textContent = locale === 'zh' ? '近场' : 'Nearstage'; near.querySelector('span').hidden = locale === 'en';
  for (const panel of document.querySelectorAll('.exhibit-panel')) {
    if (panel.id === 'about') panel.dataset.panelName = t('contactName');
    if (panel.dataset.projectId) panel.dataset.panelName = productCopy(window.DALE_PRODUCTS.products.find(p => p.id === panel.dataset.projectId)).name;
  }
  const current = document.querySelector('.exhibit-panel.is-current');
  if (current) document.querySelector('#gallery-current').textContent = current.dataset.panelName;
  const toggle = document.querySelector('#language-toggle');
  toggle.textContent = locale === 'zh' ? 'EN' : '中';
  toggle.lang = locale === 'zh' ? 'en' : 'zh-CN';
  toggle.setAttribute('aria-label', locale === 'zh' ? 'Switch to English' : '切换为中文');
  toggle.title = toggle.getAttribute('aria-label');
  toggle.hidden = false;
}
export function setLocale(next) {
  if (!['zh', 'en'].includes(next)) return;
  const current = document.querySelector('.exhibit-panel.is-current');
  const offset = current?.getBoundingClientRect().top;
  locale = next;
  try { localStorage.setItem('dale-language', locale); } catch { /* Manual switching still works. */ }
  apply();
  if (current && matchMedia('(max-width:800px)').matches) window.scrollBy({top:current.getBoundingClientRect().top-offset,behavior:'instant'});
  document.dispatchEvent(new CustomEvent('locale:change', {detail: {locale}}));
}
// Optional renderers use this tiny bridge, avoiding another translation bundle.
window.SITE_I18N = {t, getLocale};
apply();
document.querySelector('#language-toggle')?.addEventListener('click', () => setLocale(locale === 'zh' ? 'en' : 'zh'));
window.addEventListener('storage', event => { if (event.key === 'dale-language' && ['zh', 'en'].includes(event.newValue) && event.newValue !== locale) setLocale(event.newValue); });
