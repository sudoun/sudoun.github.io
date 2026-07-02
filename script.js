const profile = {
  name: "Dale Anfer",
  initials: "D",
  title: "Personal Technical Blog",
  availability: "Statistics / Data Analysis / Explainable Modeling",
  location: "Personal technical blog",
  email: "",
  tagline:
    "I write technical notes on reading data structure, spotting anomalies and definition gaps, and turning analysis into clear explanations.",
  bio:
    "I am looking for internship opportunities related to Human Resources and HR Analytics. I am interested in using data to support people management, with strengths in structured thinking and data sensitivity: cleaning HR data, recognizing distributional patterns, diagnosing anomalies, capturing underlying issues, and turning the analysis into clear, reviewable outputs for organizational decisions.",
  contact:
    "Personal technical writing in statistics, data analysis, and explainable modeling.",
  links: [
    { label: "GitHub", href: "https://github.com/sudoun" }
  ]
};

const archivedPosts = [];

const siteContent = window.siteContent || {};
const siteLayout = window.siteLayout || {};
const writingSettings = window.personalWritingSettings || {};
const publicSlugs = new Set(writingSettings.publicSlugs || []);
const posts = (window.personalWritingPosts || []).filter((post) => publicSlugs.has(post.slug));
const defaultSectionOrder = ["intro", "writing", "about"];

const zhProfile = {
  ...profile,
  title: "个人技术博客",
  availability: "统计学习 / 数据分析 / 可解释建模",
  location: "个人技术博客",
  tagline: "记录我如何理解数据结构、识别异常与口径差异，并把分析过程整理成清晰的技术笔记。",
  bio: "我正在寻找人力资源（HR/HR Analytics）相关的实习机会。我致力于用数据赋能人力资源管理，核心优势在于出色的结构化思维与数据敏感度：能快速对人力数据进行清洗、分布特征识别及异常诊断，精准捕捉底层问题，并转化为清晰、可复核的分析输出，为组织决策提供数据支撑。",
  contact: "个人技术写作：统计学习、数据分析和可解释建模。",
  links: [
    { label: "GitHub", href: "https://github.com/sudoun" }
  ]
};

const archivedZhPosts = {};

const uiText = {
  en: {
    htmlLang: "en",
    metaDescription: "Dale Anfer's personal technical blog for statistics, data analysis, robust estimation, EDA, and explainable modeling notes.",
    titleSuffix: "Personal Technical Blog",
    brand: "notes",
    navWork: "Work",
    navImplementation: "Implementation",
    navWriting: "Writing",
    navAbout: "About",
    switchLabel: "中文",
    switchAria: "Switch to Chinese",
    writingEyebrow: "Published writing",
    writingTitle: "Data Analysis and Statistics Essays",
    writingSubtitle: "Two essays: one explains robust estimation, the other shows an HR Analytics EDA workflow.",
    writingToolsLabel: "Published notes",
    searchLabel: "Search writing",
    searchPlaceholder: "Search writing",
    postCount: "{count} posts",
    openPost: "Open",
    aboutEyebrow: "About",
    aboutTitle: "Internship Direction and Core Strength",
    footerLabel: "Personal technical blog",
    primaryWork: "Read Essays",
    primaryProjects: "GitHub Profile",
    fitPanelKicker: "Writing index",
    fitPanelTitle: "Public technical notes",
    fitTargetLabel: "Topics",
    fitTargetValue: "Robust estimation, EDA, data definitions, modeling assumptions",
    fitEvidenceLabel: "Method",
    fitEvidenceValue: "Explain reasoning through examples, code, tables, and charts",
    fitGithubLabel: "GitHub",
    fitGithubValue: "github.com/sudoun",
    workEyebrow: "Public writing",
    workTitle: "Selected Essays",
    workSubtitle: "The homepage focuses on reviewed essays and analysis notes.",
    hrProjectKicker: "Public writing",
    hrProjectTitle: "Data Analysis Articles",
    hrProjectSummary: "Reviewed technical notes that show data audit, modeling assumptions, visualization interpretation, and explainable conclusions.",
    hrFactModelLabel: "Model",
    hrFactModelValue: "Raw observations -> fields, checks, assumptions, and explainable decisions",
    hrFactStackLabel: "Stack",
    hrFactStackValue: "Python, pandas, visualization, mathematical notation, technical writing",
    hrFactStatusLabel: "Status",
    hrFactStatusValue: "Published articles only; private drafts and local materials stay offline",
    hrWorkflowLink: "View workflow",
    implementationKicker: "Writing process",
    implementationTitle: "From raw observation to reviewable explanation",
    implementationSubtitle: "Public notes show the analysis path, assumptions, and interpretation boundaries.",
    implementationFlowBrowser: "Observe",
    implementationFlowApi: "Audit",
    implementationFlowStore: "Structure",
    implementationFlowScore: "Interpret",
    implementationFlowReview: "Explain",
    implementationCaptureTitle: "Observation",
    implementationCaptureText: "Start from raw variables, definitions, missingness, abnormal values, and uncertainty before making claims.",
    implementationBackendTitle: "Data audit",
    implementationBackendText: "Check structure, duplicates, missing cells, field roles, and data quality caveats before visualization.",
    implementationDecisionTitle: "Interpretation",
    implementationDecisionText: "Separate descriptive patterns from causal claims and keep assumptions visible.",
    implementationWorkspaceTitle: "Output",
    implementationWorkspaceText: "Turn analysis into readable notes, tables, figures, and concise explanations.",
    snapshotRole: "Robust estimation",
    snapshotRoleValue: "Understand estimators through outliers, tail risk, and assumption boundaries",
    snapshotTools: "EDA notes",
    snapshotToolsValue: "Check fields, missingness, duplicates, and definitions before interpreting distributions",
    snapshotFocus: "Reproducible explanation",
    snapshotFocusValue: "Connect code, tables, charts, and conclusions in one analysis trail",
    tocTitle: "Contents",
    keyTakeaways: "Key Takeaways",
    shortNote: "Short note",
    noPosts: "",
    noPublicPosts: "",
    copy: "Copy",
    copied: "Copied",
    closeArticle: "Close article",
    all: "All",
    categories: {
      Learning: "Learning",
      "Game Theory": "Game Theory",
      "Optimal Transport": "Optimal Transport",
      "GPU Systems": "GPU Systems",
      "ML Systems": "ML Systems",
      Diffusion: "Diffusion",
      "Financial ML": "Financial ML",
      RAG: "RAG",
      "CS Foundations": "CS Foundations",
      "Math Foundations": "Math Foundations",
      Research: "Research",
      Career: "Career",
      "HR Operations": "HR Operations",
      "Survey Analysis": "Survey Analysis",
      "Information Modeling": "Information Modeling",
      "Optimization Modeling": "Optimization Modeling",
      Systems: "Systems",
      Engineering: "Engineering",
      Reliability: "Reliability",
      Frontend: "Frontend"
    }
  },
  zh: {
    htmlLang: "zh-CN",
    metaDescription: "Dale Anfer 的个人技术博客，记录统计学习、数据分析、EDA、稳健估计和可解释建模笔记。",
    titleSuffix: "个人技术博客",
    brand: "notes",
    navWork: "项目",
    navImplementation: "实现",
    navWriting: "写作",
    navAbout: "关于",
    switchLabel: "EN",
    switchAria: "Switch to English",
    writingEyebrow: "公开写作",
    writingTitle: "数据分析与统计文章",
    writingSubtitle: "两篇文章：一篇解释稳健估计，一篇展示 HR Analytics EDA 流程。",
    writingToolsLabel: "公开笔记",
    searchLabel: "搜索写作",
    searchPlaceholder: "搜索写作",
    postCount: "{count} 篇文章",
    openPost: "阅读",
    aboutEyebrow: "关于",
    aboutTitle: "实习方向与核心优势",
    footerLabel: "个人技术博客",
    primaryWork: "阅读文章",
    primaryProjects: "GitHub 主页",
    fitPanelKicker: "写作索引",
    fitPanelTitle: "公开技术笔记",
    fitTargetLabel: "主题",
    fitTargetValue: "稳健估计、EDA、数据口径、建模假设",
    fitEvidenceLabel: "方法",
    fitEvidenceValue: "从例子、代码、表格和图表中解释判断过程",
    fitGithubLabel: "GitHub",
    fitGithubValue: "github.com/sudoun",
    workEyebrow: "公开写作",
    workTitle: "精选文章",
    workSubtitle: "主页聚焦已经审核的公开文章和数据分析笔记。",
    hrProjectKicker: "公开写作",
    hrProjectTitle: "数据分析文章",
    hrProjectSummary: "用公开技术文章展示数据审计、建模假设、图表解释和可复核结论。",
    hrFactModelLabel: "模型",
    hrFactModelValue: "原始观察 → 字段、检查、假设和可解释判断",
    hrFactStackLabel: "技术",
    hrFactStackValue: "Python、pandas、可视化、数学符号、技术写作",
    hrFactStatusLabel: "状态",
    hrFactStatusValue: "只发布已审核文章，私人草稿和本地材料不公开",
    hrWorkflowLink: "查看工作流",
    implementationKicker: "写作过程",
    implementationTitle: "从原始观察到可复核解释",
    implementationSubtitle: "公开文章展示分析路径、假设边界和解释过程。",
    implementationFlowBrowser: "观察",
    implementationFlowApi: "审计",
    implementationFlowStore: "结构化",
    implementationFlowScore: "解释",
    implementationFlowReview: "表达",
    implementationCaptureTitle: "观察",
    implementationCaptureText: "先看变量、定义、缺失、异常值和不确定性，再进入解释。",
    implementationBackendTitle: "数据审计",
    implementationBackendText: "在可视化前检查结构、重复、缺失、字段角色和数据质量限制。",
    implementationDecisionTitle: "解释",
    implementationDecisionText: "区分描述性模式和因果判断，并把假设写清楚。",
    implementationWorkspaceTitle: "输出",
    implementationWorkspaceText: "把分析整理成可读的笔记、表格、图表和简洁说明。",
    snapshotRole: "稳健估计",
    snapshotRoleValue: "用异常值、尾部风险和假设边界理解估计器",
    snapshotTools: "EDA 笔记",
    snapshotToolsValue: "先检查字段、缺失、重复和口径，再解释分布",
    snapshotFocus: "可复现解释",
    snapshotFocusValue: "把代码、表格、图表和结论放在同一条分析链路里",
    tocTitle: "目录",
    keyTakeaways: "要点",
    shortNote: "短文",
    noPosts: "",
    noPublicPosts: "",
    copy: "复制",
    copied: "已复制",
    closeArticle: "关闭文章",
    all: "全部",
    categories: {
      Learning: "学习",
      "Game Theory": "博弈论",
      "Optimal Transport": "最优传输",
      "GPU Systems": "GPU 系统",
      "ML Systems": "机器学习系统",
      Diffusion: "扩散模型",
      "Financial ML": "金融机器学习",
      RAG: "RAG",
      "CS Foundations": "CS 基础",
      "Math Foundations": "数学基础",
      Research: "研究",
      Career: "求职",
      "HR Operations": "HR 运营",
      "Survey Analysis": "问卷分析",
      "Information Modeling": "信息建模",
      "Optimization Modeling": "优化建模",
      Statistics: "统计学",
      Systems: "系统",
      Engineering: "工程",
      Reliability: "可靠性",
      Frontend: "前端"
    }
  }
};

const zhPosts = window.zhPersonalWritingPosts || {};

const postGrid = document.querySelector("#postGrid");
const postSearch = document.querySelector("#postSearch");
const postFilters = document.querySelector("#postFilters");
const postCount = document.querySelector("#postCount");
const linkList = document.querySelector("#linkList");
const dialog = document.querySelector("#articleDialog");
const closeDialog = document.querySelector("#closeDialog");
const themeToggle = document.querySelector("#themeToggle");
const languageToggle = document.querySelector("#languageToggle");

let activeCategory = "All";
let activePostSlug = "";
let currentLang = localStorage.getItem("notes-lang") || writingSettings.defaultLanguage || "zh";
if (!["en", "zh"].includes(currentLang)) {
  currentLang = "zh";
}

function formatDate(dateString) {
  const locale = currentLang === "zh" ? "zh-CN" : "en";
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${dateString}T00:00:00`));
}

function siteLang(lang = currentLang) {
  return siteContent[lang] || {};
}

function text(key) {
  const override = siteLang().ui?.[key] ?? siteLang("en").ui?.[key];
  return override || uiText[currentLang][key] || uiText.en[key] || key;
}

function activeProfile() {
  const base = currentLang === "zh" ? zhProfile : profile;
  const override = siteLang().profile || {};
  const github = override.github || base.links.find((link) => link.label === "GitHub")?.href || "https://github.com/sudoun";
  const email = override.email || base.email || "";
  const links = [
    { label: "GitHub", href: github },
    ...(email ? [{ label: currentLang === "zh" ? "邮箱" : "Email", text: email }] : []),
    ...base.links.filter((link) => link.label !== "GitHub")
  ];
  return {
    ...base,
    ...override,
    links
  };
}

function activePost(post) {
  if (currentLang !== "zh") {
    return post;
  }
  const override = zhPosts[post.slug];
  if (!override) {
    return post;
  }
  return {
    ...post,
    ...override,
    body: post.body.map((block, index) => mergeLocalizedBlock(block, override.body?.[index]))
  };
}

function mergeLocalizedBlock(block, overrideBlock) {
  if (!overrideBlock) {
    return block;
  }
  if (!block || typeof block !== "object") {
    return typeof overrideBlock === "string" ? overrideBlock : { text: overrideBlock.text || String(block || "") };
  }
  const merged = {
    ...block,
    ...overrideBlock
  };
  if (Array.isArray(block.cells) && Array.isArray(overrideBlock.cells)) {
    merged.cells = block.cells.map((cell, index) => {
      const cellOverride = overrideBlock.cells[index];
      return cellOverride && typeof cell === "object" ? { ...cell, ...cellOverride } : cell;
    });
  }
  return merged;
}

function applySiteLayout() {
  const main = document.querySelector("#top");
  if (!main) return;

  const seen = new Set();
  const order = Array.isArray(siteLayout.sectionOrder) ? siteLayout.sectionOrder : defaultSectionOrder;
  [...order, ...defaultSectionOrder].forEach((id) => {
    if (seen.has(id)) return;
    const section = document.querySelector(`#${id}`);
    if (section && section.parentElement === main) {
      main.appendChild(section);
      seen.add(id);
    }
  });
}

function applyBlockOffsets() {
  const offsets = siteLayout.blockOffsets || {};
  Object.entries(offsets).forEach(([id, value]) => {
    const element = document.getElementById(id);
    const x = Number(value?.x || 0);
    const y = Number(value?.y || 0);
    if (!element || !Number.isFinite(x) || !Number.isFinite(y)) return;
    element.classList.add("layout-offset-block");
    element.style.setProperty("--layout-offset-x", `${x}px`);
    element.style.setProperty("--layout-offset-y", `${y}px`);
  });
}

function applyHiddenTextBlocks() {
  document.querySelectorAll(".layout-hidden-block").forEach((element) => {
    element.classList.remove("layout-hidden-block");
  });
  const hidden = Array.isArray(siteLayout.hiddenTextBlocks) ? siteLayout.hiddenTextBlocks : [];
  hidden.forEach((id) => {
    document.getElementById(id)?.classList.add("layout-hidden-block");
  });
}

function syncWritingVisibility() {
  const hasPublishedWriting = posts.length > 0;
  const navWriting = document.querySelector("#navWriting");
  const writingSection = document.querySelector("#writing");
  if (navWriting) {
    navWriting.hidden = !hasPublishedWriting;
  }
  if (writingSection) {
    writingSection.hidden = !hasPublishedWriting;
  }
}

function getScopedPosts() {
  return posts;
}

function getCategories() {
  return ["All", ...new Set(getScopedPosts().map((post) => post.category))];
}

function categoryLabel(category) {
  if (category === "All") {
    return text("all");
  }
  return uiText[currentLang].categories[category] || category;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value, fallback = "section") {
  const slug = String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
  return slug || fallback;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function applyProfile() {
  const p = activeProfile();
  syncWritingVisibility();
  document.documentElement.lang = text("htmlLang");
  document.title = `${p.name} | ${text("titleSuffix")}`;
  document.querySelector("meta[name='description']")?.setAttribute("content", text("metaDescription"));
  setText("#profileName", p.name);
  setText("#availability", p.availability);
  setText("#tagline", p.tagline);
  setText("#bio", p.bio);
  setText("#footerName", p.name);
  setText(".brand-mark", p.initials);
  setText(".brand-text", text("brand"));
  setText("#navWork", text("navWork"));
  setText("#navImplementation", text("navImplementation"));
  setText("#navWriting", text("navWriting"));
  setText("#navAbout", text("navAbout"));
  setText("#writing .eyebrow", text("writingEyebrow"));
  setText("#writing-title", text("writingTitle"));
  setText("#writingSubtitle", text("writingSubtitle"));
  setText("#searchLabel", text("searchLabel"));
  setText("#about .eyebrow", text("aboutEyebrow"));
  setText("#about-title", text("aboutTitle"));
  setText(".site-footer span:last-child", text("footerLabel"));
  setText("#tocTitle", text("tocTitle"));
  setText("#primaryWorkLink", text("primaryWork"));
  setText("#primaryProjectsLink", text("primaryProjects"));
  setText("#fitPanelKicker", text("fitPanelKicker"));
  setText("#fitPanelTitle", text("fitPanelTitle"));
  setText("#fitTargetLabel", text("fitTargetLabel"));
  setText("#fitTargetValue", text("fitTargetValue"));
  setText("#fitEvidenceLabel", text("fitEvidenceLabel"));
  setText("#fitEvidenceValue", text("fitEvidenceValue"));
  setText("#fitGithubLabel", text("fitGithubLabel"));
  setText("#fitGithubValue", text("fitGithubValue"));
  setText("#workEyebrow", text("workEyebrow"));
  setText("#work-title", text("workTitle"));
  setText("#workSubtitle", text("workSubtitle"));
  setText("#hrProjectKicker", text("hrProjectKicker"));
  setText("#hrProjectTitle", text("hrProjectTitle"));
  setText("#hrProjectSummary", text("hrProjectSummary"));
  setText("#hrFactModelLabel", text("hrFactModelLabel"));
  setText("#hrFactModelValue", text("hrFactModelValue"));
  setText("#hrFactStackLabel", text("hrFactStackLabel"));
  setText("#hrFactStackValue", text("hrFactStackValue"));
  setText("#hrFactStatusLabel", text("hrFactStatusLabel"));
  setText("#hrFactStatusValue", text("hrFactStatusValue"));
  setText("#hrWorkflowLink", text("hrWorkflowLink"));
  setText("#implementationKicker", text("implementationKicker"));
  setText("#implementationTitle", text("implementationTitle"));
  setText("#implementationSubtitle", text("implementationSubtitle"));
  setText("#implementationFlowBrowser", text("implementationFlowBrowser"));
  setText("#implementationFlowApi", text("implementationFlowApi"));
  setText("#implementationFlowStore", text("implementationFlowStore"));
  setText("#implementationFlowScore", text("implementationFlowScore"));
  setText("#implementationFlowReview", text("implementationFlowReview"));
  setText("#implementationCaptureTitle", text("implementationCaptureTitle"));
  setText("#implementationCaptureText", text("implementationCaptureText"));
  setText("#implementationBackendTitle", text("implementationBackendTitle"));
  setText("#implementationBackendText", text("implementationBackendText"));
  setText("#implementationDecisionTitle", text("implementationDecisionTitle"));
  setText("#implementationDecisionText", text("implementationDecisionText"));
  setText("#implementationWorkspaceTitle", text("implementationWorkspaceTitle"));
  setText("#implementationWorkspaceText", text("implementationWorkspaceText"));
  setText("#snapshotRole", text("snapshotRole"));
  setText("#snapshotRoleValue", text("snapshotRoleValue"));
  setText("#snapshotTools", text("snapshotTools"));
  setText("#snapshotToolsValue", text("snapshotToolsValue"));
  setText("#snapshotFocus", text("snapshotFocus"));
  setText("#snapshotFocusValue", text("snapshotFocusValue"));
  closeDialog.setAttribute("aria-label", text("closeArticle"));

  const writingTools = document.querySelector(".writing-tools");
  if (writingTools) {
    writingTools.setAttribute("aria-label", text("writingToolsLabel"));
  }

  if (postSearch) {
    postSearch.placeholder = text("searchPlaceholder");
  }

  if (postFilters) {
    postFilters.setAttribute("aria-label", text("writingToolsLabel"));
  }

  if (languageToggle) {
    languageToggle.textContent = text("switchLabel");
    languageToggle.setAttribute("aria-label", text("switchAria"));
  }

  const githubHref = p.github || "https://github.com/sudoun";
  const fitGithub = document.querySelector("#fitGithubValue");
  if (fitGithub) {
    fitGithub.href = githubHref;
  }
  const primaryProjects = document.querySelector("#primaryProjectsLink");
  if (primaryProjects) {
    primaryProjects.href = githubHref;
  }
  const hrWorkflow = document.querySelector("#hrWorkflowLink");
  if (hrWorkflow) {
    hrWorkflow.href = "#workflow";
  }

  if (linkList) {
    linkList.innerHTML = p.links
      .map((link) => {
        const value = link.text || link.href;
        return link.href
          ? `<a href="${link.href}">${link.label}</a>`
          : `<span><b>${link.label}</b>${value}</span>`;
      })
      .join("");
  }
}

function renderFilters() {
  const categories = getCategories();
  if (!categories.includes(activeCategory)) {
    activeCategory = "All";
  }

  postFilters.innerHTML = categories
    .map(
      (category) => `
        <button type="button" role="tab" aria-selected="${category === activeCategory}" data-category="${category}">
          ${categoryLabel(category)}
        </button>
      `
    )
    .join("");
}

function getFilteredPosts() {
  const query = postSearch.value.trim().toLowerCase();

  return getScopedPosts().filter((basePost) => {
    const post = activePost(basePost);
    const matchesCategory = activeCategory === "All" || basePost.category === activeCategory;
    const haystack = [post.title, post.summary, post.category, post.series || "", ...post.tags, ...(post.takeaways || [])]
      .join(" ")
      .toLowerCase();
    return matchesCategory && haystack.includes(query);
  });
}

function updatePostCount(count) {
  if (postCount) {
    postCount.textContent = text("postCount").replace("{count}", String(count));
  }
}

function renderPosts() {
  const filteredPosts = getFilteredPosts();
  updatePostCount(filteredPosts.length);

  if (!filteredPosts.length) {
    postGrid.innerHTML = renderEmptyWritingState();
    return;
  }

  postGrid.innerHTML = filteredPosts
    .map((basePost, index) => {
      const post = activePost(basePost);
      const metaItems = [post.series, formatDate(post.date), post.readingTime, post.level || text("shortNote")]
        .filter(Boolean)
        .map((item) => `<span>${escapeHTML(item)}</span>`)
        .join("");
      const titleControl = post.articlePath
        ? `
            <a class="post-title-button" href="${escapeHTML(post.articlePath)}">
              <span>${escapeHTML(post.title)}</span>
              <em>${text("openPost")}</em>
            </a>
          `
        : `
            <button class="post-title-button" type="button" data-post="${escapeHTML(post.slug)}">
              <span>${escapeHTML(post.title)}</span>
              <em>${text("openPost")}</em>
            </button>
          `;
      return `
        <article class="post-row">
          <div class="post-index" aria-hidden="true">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <em>${escapeHTML(categoryLabel(basePost.category))}</em>
          </div>
          <div class="post-content">
            <div class="meta-row">${metaItems}</div>
            ${titleControl}
            <p class="post-summary">${escapeHTML(post.summary)}</p>
            ${renderProjectMetrics(post.metrics)}
            ${renderProjectPreview(post.cover, post.title)}
            ${renderTakeawayPreview(post.takeaways)}
            <div class="tag-list" aria-label="Post tags">
              ${post.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderEmptyWritingState() {
  return `
    <section class="empty-writing-card" aria-label="${escapeHTML(text("writingTitle"))}">
      <p class="empty-state">${escapeHTML(text("noPublicPosts"))}</p>
    </section>
  `;
}

function renderProjectMetrics(metrics = []) {
  if (!metrics.length) {
    return "";
  }
  return `
    <dl class="project-metrics">
      ${metrics
        .map(
          (metric) => `
            <div>
              <dt>${escapeHTML(metric.label)}</dt>
              <dd>${escapeHTML(metric.value)}</dd>
            </div>
          `
        )
        .join("")}
    </dl>
  `;
}

function renderProjectPreview(src, title) {
  if (!src) {
    return "";
  }
  return `
    <figure class="project-preview" aria-label="Project output preview">
      <img src="${escapeHTML(src)}" alt="${escapeHTML(`${title} output preview`)}" loading="lazy">
    </figure>
  `;
}

function renderTakeawayPreview(takeaways = []) {
  if (!takeaways.length) {
    return "";
  }
  return `
    <ul class="takeaway-preview">
      ${takeaways.slice(0, 2).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}

function openPost(slug) {
  activePostSlug = slug;
  renderDialogPost(slug);
  document.body.classList.add("dialog-open");
  dialog.showModal();
  const url = new URL(window.location.href);
  url.searchParams.set("post", slug);
  window.history.replaceState({}, "", url);
}

function openPostFromURL() {
  const slug = new URLSearchParams(window.location.search).get("post");
  if (slug && posts.some((post) => post.slug === slug)) {
    openPost(slug);
  }
}

function renderDialogPost(slug) {
  const basePost = posts.find((item) => item.slug === slug);
  if (!basePost) {
    return;
  }
  const post = activePost(basePost);

  setText("#dialogMeta", [post.category, post.series, formatDate(post.date), post.readingTime].filter(Boolean).join(" / "));
  setText("#dialogTitle", post.title);
  setText("#dialogSummary", post.summary);
  const tocItems = getPostHeadings(post);
  document.querySelector("#dialogToc").innerHTML = renderToc(tocItems);
  document.querySelector("#dialogBody").innerHTML = [
    renderTakeaways(post.takeaways),
    ...post.body.map((block, index) => renderArticleBlock(block, index))
  ].join("");
  initializeInteractiveBlocks();
  typesetMath();
}

function getPostHeadings(post) {
  return post.body
    .map((block, index) => ({ block, index }))
    .filter((item) => typeof item.block === "object" && item.block.type === "heading")
    .map((item) => ({
      id: slugify(item.block.text, `section-${item.index}`),
      text: item.block.text
    }));
}

function renderToc(items) {
  if (!items.length) {
    return `<p class="toc-empty">${text("shortNote")}</p>`;
  }
  return items
    .map((item) => `<a href="#${item.id}">${escapeHTML(item.text)}</a>`)
    .join("");
}

function renderTakeaways(takeaways = []) {
  if (!takeaways.length) {
    return "";
  }
  return `
    <section class="article-takeaways" aria-label="Key takeaways">
      <h3>${text("keyTakeaways")}</h3>
      <ul>
        ${takeaways.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderArticleBlock(block, index) {
  if (typeof block === "string") {
    return `<p>${escapeHTML(block)}</p>`;
  }

  const type = block.type || "paragraph";
  if (type === "lead") {
    return `<p class="article-lead">${escapeHTML(block.text || "")}</p>`;
  }
  if (type === "heading") {
    const id = slugify(block.text || `section-${index}`, `section-${index}`);
    return `<h3 id="${id}">${escapeHTML(block.text || "")}</h3>`;
  }
  if (type === "notebook") {
    return renderNotebookBlock(block, index);
  }
  if (type === "code") {
    return renderCodeBlock(block, index);
  }
  if (type === "math") {
    return renderMathBlock(block);
  }
  if (type === "interactive") {
    return renderInteractiveBlock(block);
  }
  if (type === "image") {
    return renderImageBlock(block);
  }
  if (type === "callout") {
    return `
      <aside class="callout">
        <strong>${escapeHTML(block.title || "Note")}</strong>
        <p>${escapeHTML(block.text || "")}</p>
      </aside>
    `;
  }
  if (type === "checklist") {
    return `
      <ul class="article-checklist">
        ${(block.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
      </ul>
    `;
  }
  if (type === "table") {
    return renderTable(block);
  }
  if (type === "references") {
    return renderReferencesBlock(block);
  }
  if (type === "list") {
    return `
      <ul>
        ${(block.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
      </ul>
    `;
  }
  return `<p>${escapeHTML(block.text || "")}</p>`;
}

function renderNotebookBlock(block, index) {
  const cells = block.cells || [];
  return `
    <section class="notebook-block" aria-label="${escapeHTML(block.title || "Notebook-style analysis")}">
      <div class="notebook-header">
        <div>
          <strong>${escapeHTML(block.title || "Notebook-style analysis")}</strong>
          ${block.subtitle ? `<p>${escapeHTML(block.subtitle)}</p>` : ""}
        </div>
        <span>${escapeHTML(block.kernel || "analysis")}</span>
      </div>
      <div class="notebook-cells">
        ${cells.map((cell, cellIndex) => renderNotebookCell(cell, `${index}-${cellIndex}`, cellIndex)).join("")}
      </div>
    </section>
  `;
}

function renderNotebookCell(cell, key, cellIndex) {
  const type = cell.type || cell.kind || "markdown";
  const label = cell.label || (type === "code" ? "In" : type === "output" ? "Out" : "Note");
  const number = Number.isFinite(Number(cell.executionCount)) ? cell.executionCount : cellIndex + 1;
  let content = "";

  if (type === "markdown" || type === "paragraph" || type === "text") {
    content = `<p>${escapeHTML(cell.text || "")}</p>`;
  } else if (type === "code") {
    content = renderCodeBlock(cell, `nb-${key}`);
  } else if (type === "output") {
    content = renderNotebookOutput(cell);
  } else if (type === "table") {
    content = renderTable(cell);
  } else if (type === "math") {
    content = renderMathBlock(cell);
  } else if (type === "list") {
    content = `<ul>${(cell.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  } else if (type === "callout") {
    content = `
      <aside class="callout">
        <strong>${escapeHTML(cell.title || "Note")}</strong>
        <p>${escapeHTML(cell.text || "")}</p>
      </aside>
    `;
  } else {
    content = `<p>${escapeHTML(cell.text || "")}</p>`;
  }

  return `
    <article class="notebook-cell notebook-cell-${escapeHTML(type)}">
      <div class="notebook-prompt" aria-hidden="true">
        <b>${escapeHTML(label)}</b><span>[${escapeHTML(String(number))}]</span>
      </div>
      <div class="notebook-cell-body">${content}</div>
    </article>
  `;
}

function renderNotebookOutput(cell) {
  if (cell.columns || cell.rows) {
    return renderTable(cell);
  }
  if (Array.isArray(cell.items)) {
    return `
      <div class="notebook-output">
        ${cell.items.map((item) => `<p>${escapeHTML(item)}</p>`).join("")}
      </div>
    `;
  }
  return `<pre class="notebook-output">${escapeHTML(cell.text || cell.value || "")}</pre>`;
}

function renderImageBlock(block) {
  const alt = block.alt || block.caption || "";
  return `
    <figure class="article-figure">
      <img src="${escapeHTML(block.src || "")}" alt="${escapeHTML(alt)}" loading="lazy">
      ${block.caption ? `<figcaption>${escapeHTML(block.caption)}</figcaption>` : ""}
    </figure>
  `;
}

function renderMathBlock(block) {
  return `
    <figure class="math-block">
      <div>\\[${escapeHTML(block.formula || "")}\\]</div>
      ${block.caption ? `<figcaption>${escapeHTML(block.caption)}</figcaption>` : ""}
    </figure>
  `;
}

function renderInteractiveBlock(block) {
  return `
    <section class="interactive-block" data-widget="${escapeHTML(block.widget || "")}">
      <div class="interactive-header">
        <strong>${escapeHTML(block.title || "Interactive review")}</strong>
        <span>${currentLang === "zh" ? "可交互" : "interactive"}</span>
      </div>
      <div class="interactive-stage"></div>
      <div class="interactive-controls"></div>
      ${block.caption ? `<p class="interactive-caption">${escapeHTML(block.caption)}</p>` : ""}
    </section>
  `;
}

function renderCodeBlock(block, index) {
  const code = block.code || "";
  return `
    <figure class="code-block">
      <figcaption>
        <span>${escapeHTML(block.file || block.language || "code")}</span>
        <button type="button" data-copy-code="${index}">${text("copy")}</button>
      </figcaption>
      <pre><code data-code-index="${index}" class="language-${escapeHTML(block.language || "text")}">${escapeHTML(code)}</code></pre>
    </figure>
  `;
}

function renderTable(block) {
  const columns = block.columns || [];
  const rows = block.rows || [];
  return `
    <div class="article-table-wrap">
      <table class="article-table">
        <thead>
          <tr>${columns.map((column) => `<th>${escapeHTML(column)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderReferencesBlock(block) {
  return `
    <section class="article-references">
      <h3>${escapeHTML(block.title || "Source trail")}</h3>
      <ul>
        ${(block.items || [])
          .map(
            (item) => `
              <li>
                <a href="${escapeHTML(item.href || "#")}" target="_blank" rel="noreferrer">${escapeHTML(item.label || item.href || "Reference")}</a>
                ${item.note ? `<span>${escapeHTML(item.note)}</span>` : ""}
              </li>
            `
          )
          .join("")}
      </ul>
    </section>
  `;
}

function initializeInteractiveBlocks() {
  document.querySelectorAll(".interactive-block").forEach((block) => {
    const widget = block.dataset.widget;
    if (widget === "potential-descent") {
      mountPotentialDescent(block);
    }
    if (widget === "ot-split") {
      mountOTSplit(block);
    }
    if (widget === "gpu-tiling") {
      mountGPUTiling(block);
    }
    if (widget === "garch-volatility") {
      mountGarchVolatility(block);
    }
    if (widget === "normal-form-game") {
      mountNormalFormGame(block);
    }
    if (widget === "game-mixed-support") {
      mountGameMixedSupport(block);
    }
    if (widget === "game-multiplicative-weights") {
      mountGameMultiplicativeWeights(block);
    }
    if (widget === "game-poa-smoothness") {
      mountGamePoASmoothness(block);
    }
    if (widget === "game-critical-payment") {
      mountGameCriticalPayment(block);
    }
    if (widget === "sinkhorn-scaling") {
      mountSinkhornScaling(block);
    }
    if (widget === "flash-attention") {
      mountFlashAttention(block);
    }
    if (widget === "ddpm-schedule") {
      mountDDPMSchedule(block);
    }
    if (widget === "tfidf-search") {
      mountTfidfSearch(block);
    }
    if (widget === "matrix-stride") {
      mountMatrixStride(block);
    }
    if (widget === "bst-successor") {
      mountBSTSuccessor(block);
    }
    if (widget === "dependency-inversion") {
      mountDependencyInversion(block);
    }
    if (widget === "graph-representation") {
      mountGraphRepresentation(block);
    }
    if (widget === "cuda-coalescing") {
      mountCudaCoalescing(block);
    }
    if (widget === "nn-pipeline") {
      mountNNPipeline(block);
    }
    if (widget === "autoencoder-compression") {
      mountAutoencoderCompression(block);
    }
    if (widget === "stirling-approx") {
      mountStirlingApprox(block);
    }
    if (widget === "arma-response") {
      mountARMAResponse(block);
    }
    if (widget === "time-series-diagnostics") {
      mountTimeSeriesDiagnostics(block);
    }
    if (widget === "histogram-atomics") {
      mountHistogramAtomics(block);
    }
    if (widget === "cmake-pipeline") {
      mountCMakePipeline(block);
    }
    if (widget === "linear-regression-fit") {
      mountLinearRegressionFit(block);
    }
    if (widget === "matrix-vector-dot") {
      mountMatrixVectorDot(block);
    }
    if (widget === "outer-measure-cover") {
      mountOuterMeasureCover(block);
    }
    if (widget === "martingale-walk") {
      mountMartingaleWalk(block);
    }
    if (widget === "bellman-backup") {
      mountBellmanBackup(block);
    }
    if (widget === "compiler-pipeline") {
      mountCompilerPipeline(block);
    }
    if (widget === "topology-neighborhood") {
      mountTopologyNeighborhood(block);
    }
    if (widget === "dfa-automaton") {
      mountDFAAutomaton(block);
    }
    if (widget === "visual-encoding") {
      mountVisualEncoding(block);
    }
    if (widget === "dimensionality-map-lab") {
      mountDimensionalityMapLab(block);
    }
    if (widget === "moderation-threshold") {
      mountModerationThreshold(block);
    }
    if (widget === "tensor-contraction") {
      mountTensorContraction(block);
    }
    if (widget === "systems-boundary") {
      mountSystemsBoundary(block);
    }
    if (widget === "computer-system-execution") {
      mountComputerSystemExecution(block);
    }
    if (widget === "classification-boundary") {
      mountClassificationBoundary(block);
    }
    if (widget === "classification-bayes-boundary") {
      mountClassificationBayesBoundary(block);
    }
    if (widget === "classification-complexity-error") {
      mountClassificationComplexityError(block);
    }
    if (widget === "classification-svm-margin") {
      mountClassificationSVMMargin(block);
    }
    if (widget === "classification-tree-split") {
      mountClassificationTreeSplit(block);
    }
    if (widget === "cantor-diagonal") {
      mountCantorDiagonal(block);
    }
    if (widget === "infinity-cardinality-map") {
      mountInfinityCardinalityMap(block);
    }
    if (widget === "monge-pushforward") {
      mountMongePushforward(block);
    }
    if (widget === "parallel-speedup") {
      mountParallelSpeedup(block);
    }
    if (widget === "parallel-cache-simd") {
      mountParallelCacheSIMD(block);
    }
    if (widget === "architecture-throughput-calculator") {
      mountArchitectureThroughputCalculator(block);
    }
    if (widget === "simd-branch-mask-lab") {
      mountSIMDBranchMaskLab(block);
    }
    if (widget === "latency-hiding-thread-lab") {
      mountLatencyHidingThreadLab(block);
    }
    if (widget === "bandwidth-latency-pipeline") {
      mountBandwidthLatencyPipeline(block);
    }
    if (widget === "ispc-assignment-map") {
      mountISPCAssignmentMap(block);
    }
    if (widget === "spmd-reduction-lab") {
      mountSPMDReductionLab(block);
    }
    if (widget === "diffusion-pipeline") {
      mountDiffusionPipeline(block);
    }
    if (widget === "quantization-affine-map") {
      mountQuantizationAffineMap(block);
    }
    if (widget === "quantization-range-calibration") {
      mountQuantizationRangeCalibration(block);
    }
    if (widget === "quantization-ste-lab") {
      mountQuantizationSTELab(block);
    }
    if (widget === "rl-experience-loop") {
      mountRLExperienceLoop(block);
    }
    if (widget === "imitation-distribution-shift") {
      mountImitationDistributionShift(block);
    }
    if (widget === "imitation-action-modes") {
      mountImitationActionModes(block);
    }
    if (widget === "dagger-aggregation-loop") {
      mountDaggerAggregationLoop(block);
    }
    if (widget === "rl-objective-marginal-lab") {
      mountRLObjectiveMarginalLab(block);
    }
    if (widget === "rl-value-q-lab") {
      mountRLValueQLab(block);
    }
    if (widget === "rl-algorithm-tradeoff-map") {
      mountRLAlgorithmTradeoffMap(block);
    }
    if (widget === "rl-policy-gradient-estimator-lab") {
      mountRLPolicyGradientEstimatorLab(block);
    }
    if (widget === "rl-importance-sampling-lab") {
      mountRLImportanceSamplingLab(block);
    }
    if (widget === "rl-natural-gradient-lab") {
      mountRLNaturalGradientLab(block);
    }
    if (widget === "rl-critic-baseline-lab") {
      mountRLCriticBaselineLab(block);
    }
    if (widget === "rl-nstep-gae-lab") {
      mountRLNStepGAELab(block);
    }
    if (widget === "rl-actor-critic-replay-lab") {
      mountRLActorCriticReplayLab(block);
    }
    if (widget === "rl-bellman-backup-lab") {
      mountRLBellmanBackupLab(block);
    }
    if (widget === "rl-fitted-q-target-lab") {
      mountRLFittedQTargetLab(block);
    }
    if (widget === "rl-exploration-policy-lab") {
      mountRLExplorationPolicyLab(block);
    }
    if (widget === "rl-dqn-stability-lab") {
      mountRLDQNStabilityLab(block);
    }
    if (widget === "rl-double-q-overestimation-lab") {
      mountRLDoubleQOverestimationLab(block);
    }
    if (widget === "rl-continuous-q-max-lab") {
      mountRLContinuousQMaxLab(block);
    }
    if (widget === "rl-policy-iteration-surrogate-lab") {
      mountRLPolicyIterationSurrogateLab(block);
    }
    if (widget === "rl-trpo-kl-bound-lab") {
      mountRLTRPOKLBoundLab(block);
    }
    if (widget === "rl-fisher-natural-step-lab") {
      mountRLFisherNaturalStepLab(block);
    }
    if (widget === "rl-cem-shooting-lab") {
      mountRLCEMShootingLab(block);
    }
    if (widget === "rl-mcts-uct-lab") {
      mountRLMCTSUCTLab(block);
    }
    if (widget === "rl-lqr-riccati-lab") {
      mountRLLQRRiccatiLab(block);
    }
    if (widget === "rl-model-error-rollout-lab") {
      mountRLModelErrorRolloutLab(block);
    }
    if (widget === "rl-ensemble-uncertainty-lab") {
      mountRLEnsembleUncertaintyLab(block);
    }
    if (widget === "rl-latent-dynamics-lab") {
      mountRLLatentDynamicsLab(block);
    }
    if (widget === "rl-pathwise-gradient-lab") {
      mountRLPathwiseGradientLab(block);
    }
    if (widget === "rl-short-rollout-dyna-lab") {
      mountRLShortRolloutDynaLab(block);
    }
    if (widget === "rl-successor-features-lab") {
      mountRLSuccessorFeaturesLab(block);
    }
    if (widget === "rl-bandit-exploration-lab") {
      mountRLBanditExplorationLab(block);
    }
    if (widget === "rl-pseudocount-bonus-lab") {
      mountRLPseudoCountBonusLab(block);
    }
    if (widget === "rl-deep-exploration-lab") {
      mountRLDeepExplorationLab(block);
    }
    if (widget === "rl-info-theory-exploration-lab") {
      mountRLInfoTheoryExplorationLab(block);
    }
    if (widget === "rl-skewfit-goal-lab") {
      mountRLSkewFitGoalLab(block);
    }
    if (widget === "rl-diayn-skill-lab") {
      mountRLDIAYNSkillLab(block);
    }
    if (widget === "rl-offline-stitching-lab") {
      mountRLOfflineStitchingLab(block);
    }
    if (widget === "rl-offline-importance-weight-lab") {
      mountRLOfflineImportanceWeightLab(block);
    }
    if (widget === "rl-lstd-lspi-lab") {
      mountRLLSTDLSPILab(block);
    }
    if (widget === "rl-offline-policy-constraint-lab") {
      mountRLOfflinePolicyConstraintLab(block);
    }
    if (widget === "rl-cql-pessimism-lab") {
      mountRLCQLPessimismLab(block);
    }
    if (widget === "rl-offline-model-penalty-lab") {
      mountRLOfflineModelPenaltyLab(block);
    }
    if (widget === "rl-theory-concentration-lab") {
      mountRLTheoryConcentrationLab(block);
    }
    if (widget === "rl-simulation-lemma-lab") {
      mountRLSimulationLemmaLab(block);
    }
    if (widget === "rl-fqi-error-ledger-lab") {
      mountRLFQIErrorLedgerLab(block);
    }
    if (widget === "rl-elbo-decomposition-lab") {
      mountRLELBODecompositionLab(block);
    }
    if (widget === "rl-gradient-estimator-lab") {
      mountRLGradientEstimatorLab(block);
    }
    if (widget === "rl-vae-latent-plane-lab") {
      mountRLVAELatentPlaneLab(block);
    }
    if (widget === "rl-control-backward-message-lab") {
      mountRLControlBackwardMessageLab(block);
    }
    if (widget === "rl-soft-temperature-policy-lab") {
      mountRLSoftTemperaturePolicyLab(block);
    }
    if (widget === "rl-sac-update-cycle-lab") {
      mountRLSACUpdateCycleLab(block);
    }
    if (widget === "rl-irl-reward-ambiguity-lab") {
      mountRLIRLRewardAmbiguityLab(block);
    }
    if (widget === "rl-maxent-irl-gradient-lab") {
      mountRLMaxEntIRLGradientLab(block);
    }
    if (widget === "rl-irl-gan-game-lab") {
      mountRLIRLGANGameLab(block);
    }
    if (widget === "rl-pomdp-history-state-lab") {
      mountRLPOMDPHistoryStateLab(block);
    }
    if (widget === "rlhf-preference-reward-lab") {
      mountRLHFPreferenceRewardLab(block);
    }
    if (widget === "lm-rl-timestep-tradeoff-lab") {
      mountLMRLTimeStepTradeoffLab(block);
    }
    if (widget === "rl-transfer-randomization-lab") {
      mountRLTransferRandomizationLab(block);
    }
    if (widget === "rl-goal-context-transfer-lab") {
      mountRLGoalContextTransferLab(block);
    }
    if (widget === "rl-meta-rnn-exploration-lab") {
      mountRLMetaRNNExplorationLab(block);
    }
    if (widget === "rl-maml-adaptation-lab") {
      mountRLMAMLAdaptationLab(block);
    }
    if (widget === "rl-meta-inference-perspectives-lab") {
      mountRLMetaInferencePerspectivesLab(block);
    }
    if (widget === "rl-open-sample-complexity-lab") {
      mountRLOpenSampleComplexityLab(block);
    }
    if (widget === "rl-supervision-signal-mixer-lab") {
      mountRLSupervisionSignalMixerLab(block);
    }
    if (widget === "rl-real-world-formulation-lab") {
      mountRLRealWorldFormulationLab(block);
    }
    if (widget === "rl-offline-data-recipe-lab") {
      mountRLOfflineDataRecipeLab(block);
    }
    if (widget === "stat940-sgd-noise-lab") {
      mountSTAT940SGDNoiseLab(block);
    }
    if (widget === "stat940-momentum-valley-lab") {
      mountSTAT940MomentumValleyLab(block);
    }
    if (widget === "stat940-sure-risk-lab") {
      mountSTAT940SURERiskLab(block);
    }
    if (widget === "stat940-model-complexity-lab") {
      mountSTAT940ModelComplexityLab(block);
    }
    if (widget === "stat940-weight-decay-spectrum-lab") {
      mountSTAT940WeightDecaySpectrumLab(block);
    }
    if (widget === "stat940-noise-jacobian-lab") {
      mountSTAT940NoiseJacobianLab(block);
    }
    if (widget === "stat940-early-stopping-lab") {
      mountSTAT940EarlyStoppingLab(block);
    }
    if (widget === "stat940-bagging-correlation-lab") {
      mountSTAT940BaggingCorrelationLab(block);
    }
    if (widget === "stat940-dropout-mask-lab") {
      mountSTAT940DropoutMaskLab(block);
    }
    if (widget === "stat940-dropout-ridge-lab") {
      mountSTAT940DropoutRidgeLab(block);
    }
    if (widget === "stat940-batchnorm-transform-lab") {
      mountSTAT940BatchNormTransformLab(block);
    }
    if (widget === "stat940-batchnorm-smoothness-lab") {
      mountSTAT940BatchNormSmoothnessLab(block);
    }
    if (widget === "stat940-cnn-convolution-window-lab") {
      mountSTAT940CNNConvolutionWindowLab(block);
    }
    if (widget === "stat940-cnn-sparse-sharing-lab") {
      mountSTAT940CNNSparseSharingLab(block);
    }
    if (widget === "stat940-cnn-pooling-invariance-lab") {
      mountSTAT940CNNPoolingInvarianceLab(block);
    }
    if (widget === "stat940-cnn-skip-connectivity-lab") {
      mountSTAT940CNNSkipConnectivityLab(block);
    }
    if (widget === "congestion-potential-proof") {
      mountCongestionPotentialProof(block);
    }
    if (widget === "agt-maxcut-pls") {
      mountAGTMaxCutPLS(block);
    }
    if (widget === "online-softmax-blocks") {
      mountOnlineSoftmaxBlocks(block);
    }
    if (widget === "markov-transition") {
      mountMarkovTransition(block);
    }
    if (widget === "prob-discrete-laws") {
      mountProbDiscreteLaws(block);
    }
    if (widget === "prob-continuous-convolution") {
      mountProbContinuousConvolution(block);
    }
    if (widget === "prob-generating-function") {
      mountProbGeneratingFunction(block);
    }
    if (widget === "prob-branching-extinction") {
      mountProbBranchingExtinction(block);
    }
    if (widget === "prob-binomial-clt") {
      mountProbBinomialCLT(block);
    }
    if (widget === "char-function-lattice") {
      mountCharFunctionLattice(block);
    }
    if (widget === "char-inversion-window") {
      mountCharInversionWindow(block);
    }
    if (widget === "char-clt-limit") {
      mountCharCLTLimit(block);
    }
    if (widget === "metric-neighborhood") {
      mountMetricNeighborhood(block);
    }
    if (widget === "mean-value-bound") {
      mountMeanValueBound(block);
    }
    if (widget === "analysis-compactness-lab") {
      mountAnalysisCompactnessLab(block);
    }
    if (widget === "analysis-jacobian-local-inverse") {
      mountAnalysisJacobianLocalInverse(block);
    }
    if (widget === "analysis-change-of-variables-grid") {
      mountAnalysisChangeOfVariablesGrid(block);
    }
    if (widget === "logic-truth-table") {
      mountLogicTruthTable(block);
    }
    if (widget === "highdim-sampling") {
      mountHighDimSampling(block);
    }
    if (widget === "topology-comparison") {
      mountTopologyComparison(block);
    }
    if (widget === "binary-mod-dfa") {
      mountBinaryModDFA(block);
    }
    if (widget === "basis-covector-transform") {
      mountBasisCovectorTransform(block);
    }
    if (widget === "kernel-feature-map") {
      mountKernelFeatureMap(block);
    }
    if (widget === "measure-additivity-split") {
      mountMeasureAdditivitySplit(block);
    }
    if (widget === "conditional-expectation-partition") {
      mountConditionalExpectationPartition(block);
    }
    if (widget === "stieltjes-interval-builder") {
      mountStieltjesIntervalBuilder(block);
    }
    if (widget === "sigma-finite-cover") {
      mountSigmaFiniteCover(block);
    }
    if (widget === "mtp-sigma-field-builder") {
      mountMTPSigmaFieldBuilder(block);
    }
    if (widget === "mtp-borel-cantelli") {
      mountMTPBorelCantelli(block);
    }
    if (widget === "ito-correction-demo") {
      mountItoCorrectionDemo(block);
    }
    if (widget === "black-scholes-tree") {
      mountBlackScholesTree(block);
    }
    if (widget === "fineng-replication") {
      mountFinEngReplication(block);
    }
    if (widget === "fineng-american-option") {
      mountFinEngAmericanOption(block);
    }
    if (widget === "math622-binomial-risk-neutral") {
      mountMath622BinomialRiskNeutral(block);
    }
    if (widget === "math622-girsanov-shift") {
      mountMath622GirsanovShift(block);
    }
    if (widget === "math622-barrier-reflection") {
      mountMath622BarrierReflection(block);
    }
    if (widget === "math485-greeks-hedge") {
      mountMath485GreeksHedge(block);
    }
    if (widget === "ot-dual-feasibility") {
      mountOTDualFeasibility(block);
    }
    if (widget === "ot-brenier-map") {
      mountOTBrenierMap(block);
    }
    if (widget === "rmt-eigenvalue-repulsion") {
      mountRMTEigenvalueRepulsion(block);
    }
    if (widget === "rmt-semicircle-density") {
      mountRMTSemicircleDensity(block);
    }
    if (widget === "randomness-shell-volume") {
      mountRandomnessShellVolume(block);
    }
    if (widget === "randomness-gaussian-concentration") {
      mountRandomnessGaussianConcentration(block);
    }
    if (widget === "randomness-wishart-norm") {
      mountRandomnessWishartNorm(block);
    }
    if (widget === "randomness-mp-spike") {
      mountRandomnessMPSpike(block);
    }
    if (widget === "median-of-means-lab") {
      mountMedianOfMeansLab(block);
    }
    if (widget === "mom-monte-carlo-lab") {
      mountMomMonteCarloLab(block);
    }
  });
}

function setInteractiveHTML(block, stageHTML, controlsHTML) {
  block.querySelector(".interactive-stage").innerHTML = stageHTML;
  block.querySelector(".interactive-controls").innerHTML = controlsHTML;
}

function mountPotentialDescent(block) {
  const labels = currentLang === "zh"
    ? { step: "改进步数", value: "势函数值", note: "当前状态" }
    : { step: "Improvement step", value: "Potential value", note: "Current state" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="Potential descent curve">
        <line x1="56" y1="248" x2="668" y2="248" class="axis-line"></line>
        <line x1="56" y1="248" x2="56" y2="44" class="axis-line"></line>
        <path d="M78,70 C168,90 178,138 260,142 C340,146 360,190 444,195 C530,200 572,218 650,218" class="interactive-curve"></path>
        <g class="potential-dots"></g>
        <circle class="active-dot" r="9"></circle>
        <text x="64" y="32" class="svg-label">${labels.value}</text>
        <text x="575" y="278" class="svg-label">${labels.step}</text>
        <text x="78" y="278" class="svg-label potential-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.step}</span>
        <input class="potential-input" type="range" min="0" max="5" value="0">
      </label>
    `
  );

  const points = [
    [78, 70, 96],
    [180, 116, 75],
    [284, 150, 57],
    [404, 190, 40],
    [526, 211, 31],
    [650, 218, 29]
  ];
  const dots = block.querySelector(".potential-dots");
  dots.innerHTML = points
    .map(([x, y], index) => `<circle cx="${x}" cy="${y}" r="5" class="passive-dot" data-dot="${index}"></circle>`)
    .join("");

  const input = block.querySelector(".potential-input");
  const active = block.querySelector(".active-dot");
  const readout = block.querySelector(".potential-readout");
  const update = () => {
    const index = Number(input.value);
    const [x, y, value] = points[index];
    active.setAttribute("cx", x);
    active.setAttribute("cy", y);
    readout.textContent = `${labels.note}: s_${index}, Phi = ${value}`;
  };
  input.addEventListener("input", update);
  update();
}

function mountOTSplit(block) {
  const labels = currentLang === "zh"
    ? { split: "质量拆分比例", monge: "Monge-like", coupling: "Coupling-like" }
    : { split: "Mass splitting", monge: "Monge-like", coupling: "Coupling-like" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="Optimal transport splitting">
        <text x="70" y="36" class="svg-label">mu</text>
        <text x="612" y="36" class="svg-label">nu</text>
        <circle cx="118" cy="105" r="24" class="source-node"></circle>
        <circle cx="118" cy="194" r="24" class="source-node"></circle>
        <circle cx="610" cy="78" r="20" class="target-node"></circle>
        <circle cx="610" cy="150" r="20" class="target-node"></circle>
        <circle cx="610" cy="222" r="20" class="target-node"></circle>
        <path class="ot-direct" d="M145,105 C300,78 448,70 586,78"></path>
        <path class="ot-direct" d="M145,194 C300,220 448,228 586,222"></path>
        <path class="ot-split-line top" d="M145,105 C300,130 448,142 586,150"></path>
        <path class="ot-split-line mid" d="M145,194 C300,166 448,154 586,150"></path>
        <text x="246" y="270" class="svg-label ot-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.split}</span>
        <input class="ot-input" type="range" min="0" max="100" value="0">
      </label>
    `
  );

  const input = block.querySelector(".ot-input");
  const direct = block.querySelectorAll(".ot-direct");
  const splitLines = block.querySelectorAll(".ot-split-line");
  const readout = block.querySelector(".ot-readout");
  const update = () => {
    const split = Number(input.value) / 100;
    direct.forEach((line) => {
      line.style.opacity = String(1 - split * 0.75);
      line.style.strokeWidth = String(4 - split * 1.8);
    });
    splitLines.forEach((line) => {
      line.style.opacity = String(0.2 + split * 0.8);
      line.style.strokeWidth = String(1 + split * 4);
    });
    readout.textContent = split < 0.5 ? labels.monge : labels.coupling;
  };
  input.addEventListener("input", update);
  update();
}

function mountGPUTiling(block) {
  const labels = currentLang === "zh"
    ? { block: "block size", radius: "mask radius", core: "core", halo: "halo", total: "shared tile length" }
    : { block: "block size", radius: "mask radius", core: "core", halo: "halo", total: "shared tile length" };

  setInteractiveHTML(
    block,
    `<div class="tile-visual" aria-label="GPU tile visualization"></div><p class="interactive-readout tile-readout"></p>`,
    `
      <label>
        <span>${labels.block}</span>
        <input class="tile-block-input" type="range" min="4" max="16" step="4" value="8">
      </label>
      <label>
        <span>${labels.radius}</span>
        <input class="tile-radius-input" type="range" min="1" max="4" value="2">
      </label>
    `
  );

  const blockInput = block.querySelector(".tile-block-input");
  const radiusInput = block.querySelector(".tile-radius-input");
  const visual = block.querySelector(".tile-visual");
  const readout = block.querySelector(".tile-readout");
  const update = () => {
    const blockSize = Number(blockInput.value);
    const radius = Number(radiusInput.value);
    const total = blockSize + 2 * radius;
    const cells = [];
    for (let i = 0; i < total; i += 1) {
      const isHalo = i < radius || i >= radius + blockSize;
      cells.push(`<span class="${isHalo ? "halo-cell" : "core-cell"}">${isHalo ? labels.halo : labels.core}</span>`);
    }
    visual.innerHTML = cells.join("");
    readout.textContent = `${labels.total}: ${blockSize} + 2 * ${radius} = ${total}`;
  };
  blockInput.addEventListener("input", update);
  radiusInput.addEventListener("input", update);
  update();
}

function mountGarchVolatility(block) {
  const labels = currentLang === "zh"
    ? { alpha: "alpha shock", beta: "beta persistence", high: "高持久性", stable: "较稳定" }
    : { alpha: "alpha shock", beta: "beta persistence", high: "high persistence", stable: "more stable" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="GARCH volatility curve">
        <line x1="56" y1="248" x2="668" y2="248" class="axis-line"></line>
        <line x1="56" y1="248" x2="56" y2="40" class="axis-line"></line>
        <polyline class="garch-line" points=""></polyline>
        <text x="64" y="32" class="svg-label">sigma^2</text>
        <text x="565" y="278" class="svg-label">t</text>
        <text x="80" y="278" class="svg-label garch-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.alpha}</span>
        <input class="garch-alpha-input" type="range" min="0.05" max="0.40" step="0.01" value="0.14">
      </label>
      <label>
        <span>${labels.beta}</span>
        <input class="garch-beta-input" type="range" min="0.30" max="0.95" step="0.01" value="0.78">
      </label>
    `
  );

  const alphaInput = block.querySelector(".garch-alpha-input");
  const betaInput = block.querySelector(".garch-beta-input");
  const line = block.querySelector(".garch-line");
  const readout = block.querySelector(".garch-readout");
  const update = () => {
    const alpha = Number(alphaInput.value);
    const beta = Number(betaInput.value);
    const omega = 0.025;
    let variance = 0.12;
    const values = [];
    for (let t = 0; t < 54; t += 1) {
      const shock = t === 10 ? 1.2 : t === 30 ? 0.8 : 0.08 + 0.03 * Math.sin(t * 0.7);
      variance = omega + alpha * shock * shock + beta * variance;
      values.push(variance);
    }
    const maxValue = Math.max(...values);
    const points = values.map((value, index) => {
      const x = 64 + (index / (values.length - 1)) * 590;
      const y = 246 - (value / maxValue) * 188;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    line.setAttribute("points", points.join(" "));
    readout.textContent = `alpha + beta = ${(alpha + beta).toFixed(2)} (${alpha + beta > 0.95 ? labels.high : labels.stable})`;
  };
  alphaInput.addEventListener("input", update);
  betaInput.addEventListener("input", update);
  update();
}

function mountNormalFormGame(block) {
  const labels = currentLang === "zh"
    ? { temptation: "行玩家偏好 A 的强度", risk: "列玩家偏好 L 的强度", row: "行玩家", col: "列玩家", equilibrium: "最佳响应交点" }
    : { temptation: "Row preference for A", risk: "Column preference for L", row: "Row player", col: "Column player", equilibrium: "Best-response intersection" };

  setInteractiveHTML(
    block,
    `
      <div class="payoff-grid" aria-label="Two by two payoff matrix">
        <span></span><strong>L</strong><strong>R</strong>
        <strong>A</strong><button type="button" data-cell="0"></button><button type="button" data-cell="1"></button>
        <strong>B</strong><button type="button" data-cell="2"></button><button type="button" data-cell="3"></button>
      </div>
      <p class="interactive-readout game-readout"></p>
    `,
    `
      <label>
        <span>${labels.temptation}</span>
        <input class="game-row-input" type="range" min="-2" max="2" step="1" value="1">
      </label>
      <label>
        <span>${labels.risk}</span>
        <input class="game-col-input" type="range" min="-2" max="2" step="1" value="1">
      </label>
    `
  );

  const rowInput = block.querySelector(".game-row-input");
  const colInput = block.querySelector(".game-col-input");
  const cells = Array.from(block.querySelectorAll(".payoff-grid button"));
  const readout = block.querySelector(".game-readout");
  const update = () => {
    const rowBias = Number(rowInput.value);
    const colBias = Number(colInput.value);
    const payoffs = [
      [3 + rowBias, 3 + colBias],
      [rowBias, 4 - colBias],
      [4 - rowBias, colBias],
      [2 - rowBias, 2 - colBias]
    ];
    const rowBestByColumn = [
      payoffs[0][0] >= payoffs[2][0] ? 0 : 2,
      payoffs[1][0] >= payoffs[3][0] ? 1 : 3
    ];
    const colBestByRow = [
      payoffs[0][1] >= payoffs[1][1] ? 0 : 1,
      payoffs[2][1] >= payoffs[3][1] ? 2 : 3
    ];
    const intersections = cells
      .map((_, index) => index)
      .filter((index) => rowBestByColumn[index % 2] === index && colBestByRow[index < 2 ? 0 : 1] === index);
    cells.forEach((cell, index) => {
      cell.textContent = `(${payoffs[index][0]}, ${payoffs[index][1]})`;
      cell.classList.toggle("best-response", intersections.includes(index));
    });
    readout.textContent = `${labels.equilibrium}: ${intersections.length ? intersections.map((index) => ["A,L", "A,R", "B,L", "B,R"][index]).join("; ") : "none"}`;
  };
  rowInput.addEventListener("input", update);
  colInput.addEventListener("input", update);
  update();
}

function mountGameMixedSupport(block) {
  const labels = currentLang === "zh"
    ? {
        opponent: "列玩家选 L 的概率",
        actionA: "行玩家 A",
        actionB: "行玩家 B",
        payoffA: "A 的期望收益",
        payoffB: "B 的期望收益",
        indifferent: "support 可混合",
        chooseA: "A 是严格 best response",
        chooseB: "B 是严格 best response",
        note: "两种 action 都能放进 mixed support，必须满足期望收益相等。"
      }
    : {
        opponent: "Column probability of L",
        actionA: "Row action A",
        actionB: "Row action B",
        payoffA: "Expected payoff of A",
        payoffB: "Expected payoff of B",
        indifferent: "support can mix",
        chooseA: "A is the strict best response",
        chooseB: "B is the strict best response",
        note: "Both actions can stay in a mixed support only when their expected payoffs are equal."
      };

  setInteractiveHTML(
    block,
    `
      <div class="game-support-widget" aria-label="Mixed strategy support">
        <div class="game-payoff-mini">
          <span></span><strong>L</strong><strong>R</strong>
          <strong>A</strong><span>3</span><span>0</span>
          <strong>B</strong><span>0</span><span>2</span>
        </div>
        <div class="game-support-bars">
          <span><b>${labels.payoffA}</b><em class="support-bar"><i class="support-a-bar"></i></em><small class="support-a-value"></small></span>
          <span><b>${labels.payoffB}</b><em class="support-bar"><i class="support-b-bar"></i></em><small class="support-b-value"></small></span>
        </div>
      </div>
      <p class="interactive-readout game-support-readout"></p>
    `,
    `
      <label>
        <span>${labels.opponent}</span>
        <input class="game-support-input" type="range" min="0.05" max="0.95" step="0.05" value="0.40">
      </label>
    `
  );

  const input = block.querySelector(".game-support-input");
  const barA = block.querySelector(".support-a-bar");
  const barB = block.querySelector(".support-b-bar");
  const valueA = block.querySelector(".support-a-value");
  const valueB = block.querySelector(".support-b-value");
  const readout = block.querySelector(".game-support-readout");

  const update = () => {
    const q = Number(input.value);
    const payoffA = 3 * q;
    const payoffB = 2 * (1 - q);
    const maxPayoff = 3;
    barA.style.width = `${Math.max(4, (payoffA / maxPayoff) * 100)}%`;
    barB.style.width = `${Math.max(4, (payoffB / maxPayoff) * 100)}%`;
    valueA.textContent = payoffA.toFixed(2);
    valueB.textContent = payoffB.toFixed(2);
    const gap = payoffA - payoffB;
    const verdict = Math.abs(gap) < 0.03 ? labels.indifferent : gap > 0 ? labels.chooseA : labels.chooseB;
    readout.textContent = `q=${q.toFixed(2)}; ${labels.payoffA}=${payoffA.toFixed(2)}, ${labels.payoffB}=${payoffB.toFixed(2)}. ${verdict}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountGameMultiplicativeWeights(block) {
  const labels = currentLang === "zh"
    ? {
        eta: "learning rate eta",
        rounds: "rounds",
        regret: "average regret",
        weights: "final action weights",
        note: "eta 太小学习慢；eta 太大反应激烈。好的尺度让 average regret 下降。"
      }
    : {
        eta: "learning rate eta",
        rounds: "rounds",
        regret: "average regret",
        weights: "final action weights",
        note: "Too-small eta learns slowly; too-large eta overreacts. The useful regime drives average regret down."
      };

  setInteractiveHTML(
    block,
    `
      <div class="game-mw-widget" aria-label="Multiplicative weights">
        <svg class="interactive-svg game-mw-chart" viewBox="0 0 720 260" aria-label="Average regret curve">
          <line x1="54" y1="220" x2="668" y2="220" class="axis-line"></line>
          <line x1="54" y1="220" x2="54" y2="36" class="axis-line"></line>
          <polyline class="game-mw-regret-line" points=""></polyline>
          <text x="58" y="28" class="svg-label">${labels.regret}</text>
          <text x="585" y="244" class="svg-label">${labels.rounds}</text>
        </svg>
        <div class="game-mw-bars"></div>
      </div>
      <p class="interactive-readout game-mw-readout"></p>
    `,
    `
      <label>
        <span>${labels.eta}</span>
        <input class="game-mw-eta-input" type="range" min="0.05" max="1.00" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.rounds}</span>
        <input class="game-mw-round-input" type="range" min="5" max="80" step="5" value="40">
      </label>
    `
  );

  const etaInput = block.querySelector(".game-mw-eta-input");
  const roundInput = block.querySelector(".game-mw-round-input");
  const line = block.querySelector(".game-mw-regret-line");
  const bars = block.querySelector(".game-mw-bars");
  const readout = block.querySelector(".game-mw-readout");
  const names = currentLang === "zh" ? ["低成本专家", "中等专家", "波动专家"] : ["low-cost expert", "middle expert", "volatile expert"];

  const costAt = (t) => [
    0.22 + 0.05 * Math.sin(t * 0.35),
    0.42 + 0.07 * Math.cos(t * 0.28),
    0.62 - 0.18 * Math.sin(t * 0.17)
  ];

  const update = () => {
    const eta = Number(etaInput.value);
    const rounds = Number(roundInput.value);
    let weights = [1, 1, 1];
    let learnerCost = 0;
    const actionCosts = [0, 0, 0];
    const regretSeries = [];

    for (let t = 1; t <= rounds; t += 1) {
      const totalWeight = weights.reduce((sum, value) => sum + value, 0);
      const probs = weights.map((value) => value / totalWeight);
      const costs = costAt(t);
      learnerCost += probs.reduce((sum, prob, index) => sum + prob * costs[index], 0);
      costs.forEach((cost, index) => {
        actionCosts[index] += cost;
        weights[index] *= Math.exp(-eta * cost);
      });
      const regret = learnerCost - Math.min(...actionCosts);
      regretSeries.push(Math.max(0, regret / t));
    }

    const maxRegret = Math.max(0.02, ...regretSeries);
    const points = regretSeries.map((value, index) => {
      const x = 54 + (index / Math.max(1, regretSeries.length - 1)) * 614;
      const y = 220 - (value / maxRegret) * 174;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    const totalWeight = weights.reduce((sum, value) => sum + value, 0);
    const finalProbs = weights.map((value) => value / totalWeight);

    line.setAttribute("points", points.join(" "));
    bars.innerHTML = names.map((name, index) => `
      <span>
        <b>${name}</b>
        <em><i style="width:${Math.max(4, finalProbs[index] * 100).toFixed(1)}%"></i></em>
        <small>${finalProbs[index].toFixed(2)}</small>
      </span>
    `).join("");
    readout.textContent = `${labels.regret}: ${regretSeries.at(-1).toFixed(3)}; ${labels.weights}: [${finalProbs.map((value) => value.toFixed(2)).join(", ")}]. ${labels.note}`;
  };

  etaInput.addEventListener("input", update);
  roundInput.addEventListener("input", update);
  update();
}

function mountGamePoASmoothness(block) {
  const labels = currentLang === "zh"
    ? {
        lambda: "lambda",
        mu: "mu",
        bound: "PoA upper bound",
        note: "当 mu 越接近 1，smoothness certificate 对 equilibrium inefficiency 的控制越弱。"
      }
    : {
        lambda: "lambda",
        mu: "mu",
        bound: "PoA upper bound",
        note: "As mu approaches 1, the smoothness certificate gives a weaker inefficiency guarantee."
      };

  setInteractiveHTML(
    block,
    `
      <div class="game-smoothness-widget" aria-label="Smoothness price of anarchy bound">
        <span><b>${labels.lambda}</b><em class="smoothness-lambda"></em></span>
        <span><b>${labels.mu}</b><em class="smoothness-mu"></em></span>
        <span><b>${labels.bound}</b><em class="smoothness-bound"></em></span>
        <div class="game-smoothness-meter"><i></i></div>
      </div>
      <p class="interactive-readout game-smoothness-readout"></p>
    `,
    `
      <label>
        <span>${labels.lambda}</span>
        <input class="game-smoothness-lambda-input" type="range" min="1" max="3" step="0.1" value="1.5">
      </label>
      <label>
        <span>${labels.mu}</span>
        <input class="game-smoothness-mu-input" type="range" min="0" max="0.85" step="0.05" value="0.30">
      </label>
    `
  );

  const lambdaInput = block.querySelector(".game-smoothness-lambda-input");
  const muInput = block.querySelector(".game-smoothness-mu-input");
  const lambdaNode = block.querySelector(".smoothness-lambda");
  const muNode = block.querySelector(".smoothness-mu");
  const boundNode = block.querySelector(".smoothness-bound");
  const meter = block.querySelector(".game-smoothness-meter i");
  const readout = block.querySelector(".game-smoothness-readout");

  const update = () => {
    const lambda = Number(lambdaInput.value);
    const mu = Number(muInput.value);
    const bound = lambda / (1 - mu);
    lambdaNode.textContent = lambda.toFixed(2);
    muNode.textContent = mu.toFixed(2);
    boundNode.textContent = bound.toFixed(2);
    meter.style.width = `${Math.min(100, (bound / 8) * 100).toFixed(1)}%`;
    readout.textContent = `${labels.bound}: ${lambda.toFixed(2)} / (1 - ${mu.toFixed(2)}) = ${bound.toFixed(2)}. ${labels.note}`;
  };

  lambdaInput.addEventListener("input", update);
  muInput.addEventListener("input", update);
  update();
}

function mountGameCriticalPayment(block) {
  const labels = currentLang === "zh"
    ? {
        bid: "bidder X bid",
        score: "density score",
        threshold: "critical threshold",
        wins: "X wins bundle {A,B}",
        loses: "X loses; A and B go to competitors",
        pays: "payment",
        note: "truthful monotone mechanism 让 winner 支付 critical price，而不是自己的 bid。"
      }
    : {
        bid: "bidder X bid",
        score: "density score",
        threshold: "critical threshold",
        wins: "X wins bundle {A,B}",
        loses: "X loses; A and B go to competitors",
        pays: "payment",
        note: "A truthful monotone mechanism charges the winner the critical price, not their own bid."
      };

  setInteractiveHTML(
    block,
    `
      <div class="game-critical-widget" aria-label="Critical bid payment">
        <div class="critical-bidder x-bidder">
          <strong>X: {A,B}</strong>
          <span class="critical-x-score"></span>
        </div>
        <div class="critical-bidder">
          <strong>Y: {A}</strong>
          <span>score 5.00</span>
        </div>
        <div class="critical-bidder">
          <strong>Z: {B}</strong>
          <span>score 4.00</span>
        </div>
      </div>
      <p class="interactive-readout game-critical-readout"></p>
    `,
    `
      <label>
        <span>${labels.bid}</span>
        <input class="game-critical-bid-input" type="range" min="1" max="12" step="0.25" value="7.25">
      </label>
    `
  );

  const input = block.querySelector(".game-critical-bid-input");
  const bidder = block.querySelector(".x-bidder");
  const scoreNode = block.querySelector(".critical-x-score");
  const readout = block.querySelector(".game-critical-readout");
  const threshold = 5 * Math.sqrt(2);

  const update = () => {
    const bid = Number(input.value);
    const score = bid / Math.sqrt(2);
    const wins = score >= 5;
    bidder.classList.toggle("critical-winner", wins);
    scoreNode.textContent = `${labels.score} ${score.toFixed(2)}`;
    readout.textContent = `${wins ? labels.wins : labels.loses}. ${labels.threshold}: ${threshold.toFixed(2)}; ${labels.pays}: ${wins ? threshold.toFixed(2) : "0.00"}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountSinkhornScaling(block) {
  const labels = currentLang === "zh"
    ? { epsilon: "epsilon 正则强度", iterations: "Sinkhorn 迭代", row: "row sums", col: "col sums", state: "状态" }
    : { epsilon: "epsilon regularization", iterations: "Sinkhorn iterations", row: "row sums", col: "col sums", state: "state" };

  setInteractiveHTML(
    block,
    `
      <div class="sinkhorn-grid" aria-label="Sinkhorn transport matrix"></div>
      <p class="interactive-readout sinkhorn-readout"></p>
    `,
    `
      <label>
        <span>${labels.epsilon}</span>
        <input class="sinkhorn-epsilon-input" type="range" min="0.25" max="2.00" step="0.05" value="0.80">
      </label>
      <label>
        <span>${labels.iterations}</span>
        <input class="sinkhorn-iteration-input" type="range" min="0" max="20" step="1" value="4">
      </label>
    `
  );

  const epsilonInput = block.querySelector(".sinkhorn-epsilon-input");
  const iterationInput = block.querySelector(".sinkhorn-iteration-input");
  const grid = block.querySelector(".sinkhorn-grid");
  const readout = block.querySelector(".sinkhorn-readout");
  const a = [0.45, 0.35, 0.20];
  const b = [0.30, 0.40, 0.30];
  const cost = [
    [0.2, 1.1, 2.0],
    [1.0, 0.3, 0.9],
    [2.2, 1.0, 0.2]
  ];
  const update = () => {
    const epsilon = Number(epsilonInput.value);
    const iterations = Number(iterationInput.value);
    const matrix = cost.map((row) => row.map((value) => Math.exp(-value / epsilon)));
    for (let step = 0; step < iterations; step += 1) {
      matrix.forEach((row, i) => {
        const sum = row.reduce((acc, value) => acc + value, 0);
        row.forEach((_, j) => {
          row[j] *= a[i] / sum;
        });
      });
      for (let j = 0; j < b.length; j += 1) {
        const sum = matrix.reduce((acc, row) => acc + row[j], 0);
        matrix.forEach((row) => {
          row[j] *= b[j] / sum;
        });
      }
    }
    const maxValue = Math.max(...matrix.flat());
    grid.innerHTML = matrix
      .map((row) =>
        row
          .map((value) => {
            const shade = Math.round(245 - (value / maxValue) * 95);
            return `<span style="background: rgb(${shade}, ${Math.round(shade + 8)}, ${Math.round(shade + 2)})">${value.toFixed(2)}</span>`;
          })
          .join("")
      )
      .join("");
    const rowSums = matrix.map((row) => row.reduce((acc, value) => acc + value, 0).toFixed(2)).join(", ");
    const colSums = b
      .map((_, j) => matrix.reduce((acc, row) => acc + row[j], 0).toFixed(2))
      .join(", ");
    readout.textContent = `${labels.state}: epsilon = ${epsilon.toFixed(2)}, iter = ${iterations} / ${labels.row}: ${rowSums} / ${labels.col}: ${colSums}`;
  };
  epsilonInput.addEventListener("input", update);
  iterationInput.addEventListener("input", update);
  update();
}

function mountFlashAttention(block) {
  const labels = currentLang === "zh"
    ? { block: "KV block", max: "running max", sum: "running normalizer", full: "完整 attention matrix", streamed: "分块 streaming" }
    : { block: "KV block", max: "running max", sum: "running normalizer", full: "full attention matrix", streamed: "block streaming" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="FlashAttention online softmax">
        <text x="54" y="38" class="svg-label">${labels.full}</text>
        <rect x="54" y="60" width="190" height="190" class="attention-matrix"></rect>
        <g class="attention-cells"></g>
        <text x="340" y="38" class="svg-label">${labels.streamed}</text>
        <rect x="340" y="80" width="260" height="52" class="stream-block block-one"></rect>
        <rect x="340" y="154" width="260" height="52" class="stream-block block-two"></rect>
        <text x="360" y="113" class="svg-label">${labels.block} 1</text>
        <text x="360" y="187" class="svg-label">${labels.block} 2</text>
        <text x="340" y="246" class="svg-label flash-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.block}</span>
        <input class="flash-block-input" type="range" min="1" max="2" value="1">
      </label>
    `
  );

  const cells = block.querySelector(".attention-cells");
  const input = block.querySelector(".flash-block-input");
  const readout = block.querySelector(".flash-readout");
  cells.innerHTML = Array.from({ length: 16 }, (_, index) => {
    const x = 64 + (index % 4) * 42;
    const y = 70 + Math.floor(index / 4) * 42;
    return `<rect x="${x}" y="${y}" width="34" height="34" class="attention-cell" data-col="${index % 4}"></rect>`;
  }).join("");
  const scores = [1.2, 0.4, 2.1, 1.6];
  const update = () => {
    const activeBlock = Number(input.value);
    const visibleCols = activeBlock === 1 ? [0, 1] : [2, 3];
    block.querySelectorAll(".attention-cell").forEach((cell) => {
      cell.classList.toggle("active-cell", visibleCols.includes(Number(cell.dataset.col)));
    });
    block.querySelector(".block-one").classList.toggle("active-stream", activeBlock === 1);
    block.querySelector(".block-two").classList.toggle("active-stream", activeBlock === 2);
    const seen = activeBlock === 1 ? scores.slice(0, 2) : scores;
    const maxValue = Math.max(...seen);
    const normalizer = seen.reduce((acc, score) => acc + Math.exp(score - maxValue), 0);
    readout.textContent = `${labels.max}: ${maxValue.toFixed(1)} / ${labels.sum}: ${normalizer.toFixed(2)}`;
  };
  input.addEventListener("input", update);
  update();
}

function mountDDPMSchedule(block) {
  const labels = currentLang === "zh"
    ? { t: "timestep", signal: "signal", noise: "noise", alpha: "alpha_bar" }
    : { t: "timestep", signal: "signal", noise: "noise", alpha: "alpha_bar" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="DDPM signal noise schedule">
        <line x1="70" y1="238" x2="650" y2="238" class="axis-line"></line>
        <line x1="70" y1="238" x2="70" y2="50" class="axis-line"></line>
        <path class="ddpm-signal-line" d=""></path>
        <path class="ddpm-noise-line" d=""></path>
        <circle class="ddpm-dot" r="8"></circle>
        <text x="82" y="40" class="svg-label">${labels.alpha}</text>
        <text x="585" y="270" class="svg-label">${labels.t}</text>
        <text x="420" y="74" class="svg-label">${labels.noise}</text>
        <text x="118" y="108" class="svg-label">${labels.signal}</text>
        <text x="88" y="270" class="svg-label ddpm-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.t}</span>
        <input class="ddpm-time-input" type="range" min="0" max="1000" step="10" value="250">
      </label>
    `
  );

  const input = block.querySelector(".ddpm-time-input");
  const signalPath = block.querySelector(".ddpm-signal-line");
  const noisePath = block.querySelector(".ddpm-noise-line");
  const dot = block.querySelector(".ddpm-dot");
  const readout = block.querySelector(".ddpm-readout");
  const alphaBar = (t) => Math.exp(-5 * t);
  const points = Array.from({ length: 80 }, (_, index) => {
    const t = index / 79;
    const x = 70 + t * 580;
    const signal = Math.sqrt(alphaBar(t));
    const noise = Math.sqrt(1 - alphaBar(t));
    return { x, signalY: 238 - signal * 168, noiseY: 238 - noise * 168, t };
  });
  signalPath.setAttribute("d", points.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.signalY.toFixed(1)}`).join(" "));
  noisePath.setAttribute("d", points.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.noiseY.toFixed(1)}`).join(" "));
  const update = () => {
    const t = Number(input.value) / 1000;
    const x = 70 + t * 580;
    const value = Math.sqrt(alphaBar(t));
    const y = 238 - value * 168;
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    readout.textContent = `${labels.t}=${Math.round(t * 1000)}, ${labels.signal}=${value.toFixed(2)}, ${labels.noise}=${Math.sqrt(1 - alphaBar(t)).toFixed(2)}`;
  };
  input.addEventListener("input", update);
  update();
}

function mountTfidfSearch(block) {
  const labels = currentLang === "zh"
    ? { query: "query term", score: "score", docs: ["game theory equilibrium", "optimal transport coupling", "cuda shared memory", "retrieval token search"] }
    : { query: "query term", score: "score", docs: ["game theory equilibrium", "optimal transport coupling", "cuda shared memory", "retrieval token search"] };

  setInteractiveHTML(
    block,
    `<div class="tfidf-results" aria-label="TF-IDF search results"></div>`,
    `
      <label>
        <span>${labels.query}</span>
        <input class="tfidf-input" type="range" min="0" max="3" value="0">
      </label>
    `
  );

  const terms = ["game", "transport", "memory", "search"];
  const input = block.querySelector(".tfidf-input");
  const results = block.querySelector(".tfidf-results");
  const update = () => {
    const term = terms[Number(input.value)];
    const df = labels.docs.filter((doc) => doc.includes(term)).length || 1;
    const idf = Math.log(labels.docs.length / df);
    const scored = labels.docs.map((doc, index) => {
      const tf = doc.split(" ").filter((token) => token === term).length;
      return { doc, index, score: tf * idf };
    }).sort((a, b) => b.score - a.score);
    results.innerHTML = `
      <p class="interactive-readout">${labels.query}: <strong>${term}</strong></p>
      ${scored.map((item) => `<div class="tfidf-row"><span>${item.doc}</span><meter min="0" max="2" value="${item.score.toFixed(2)}"></meter><b>${labels.score}: ${item.score.toFixed(2)}</b></div>`).join("")}
    `;
  };
  input.addEventListener("input", update);
  update();
}

function mountMatrixStride(block) {
  const labels = currentLang === "zh"
    ? { row: "row", col: "col", stride: "stride", index: "index" }
    : { row: "row", col: "col", stride: "stride", index: "index" };

  setInteractiveHTML(
    block,
    `<div class="matrix-stride-grid" aria-label="Matrix stride grid"></div><p class="interactive-readout matrix-stride-readout"></p>`,
    `
      <label>
        <span>${labels.row}</span>
        <input class="matrix-row-input" type="range" min="0" max="2" value="1">
      </label>
      <label>
        <span>${labels.col}</span>
        <input class="matrix-col-input" type="range" min="0" max="3" value="2">
      </label>
      <label>
        <span>${labels.stride}</span>
        <input class="matrix-stride-input" type="range" min="4" max="6" value="4">
      </label>
    `
  );

  const rowInput = block.querySelector(".matrix-row-input");
  const colInput = block.querySelector(".matrix-col-input");
  const strideInput = block.querySelector(".matrix-stride-input");
  const grid = block.querySelector(".matrix-stride-grid");
  const readout = block.querySelector(".matrix-stride-readout");
  const update = () => {
    const row = Number(rowInput.value);
    const col = Number(colInput.value);
    const stride = Number(strideInput.value);
    const linearIndex = row * stride + col;
    grid.style.gridTemplateColumns = `repeat(${stride}, minmax(42px, 1fr))`;
    grid.innerHTML = Array.from({ length: 3 * stride }, (_, index) => {
      const r = Math.floor(index / stride);
      const c = index % stride;
      const isReal = c < 4;
      const active = r === row && c === col;
      return `<span class="${active ? "active-matrix-cell" : ""} ${isReal ? "" : "padding-cell"}">${index}</span>`;
    }).join("");
    readout.textContent = `${labels.index} = ${labels.row} * ${labels.stride} + ${labels.col} = ${row} * ${stride} + ${col} = ${linearIndex}`;
  };
  [rowInput, colInput, strideInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountBSTSuccessor(block) {
  const labels = currentLang === "zh"
    ? { node: "目标节点", successor: "successor", none: "null" }
    : { node: "target node", successor: "successor", none: "null" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 320" aria-label="BST successor visualization">
        <g class="bst-edges">
          <line x1="360" y1="66" x2="230" y2="136"></line>
          <line x1="360" y1="66" x2="490" y2="136"></line>
          <line x1="230" y1="136" x2="150" y2="216"></line>
          <line x1="230" y1="136" x2="310" y2="216"></line>
          <line x1="490" y1="136" x2="430" y2="216"></line>
          <line x1="490" y1="136" x2="570" y2="216"></line>
        </g>
        <g class="bst-nodes"></g>
        <text x="82" y="292" class="svg-label bst-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.node}</span>
        <input class="bst-node-input" type="range" min="0" max="6" value="3">
      </label>
    `
  );

  const values = [2, 3, 4, 5, 6, 8, 9];
  const positions = {
    5: [360, 66],
    3: [230, 136],
    8: [490, 136],
    2: [150, 216],
    4: [310, 216],
    6: [430, 216],
    9: [570, 216]
  };
  const nodes = block.querySelector(".bst-nodes");
  const input = block.querySelector(".bst-node-input");
  const readout = block.querySelector(".bst-readout");
  nodes.innerHTML = Object.entries(positions)
    .map(([value, [x, y]]) => `<g class="bst-node" data-value="${value}"><circle cx="${x}" cy="${y}" r="24"></circle><text x="${x}" y="${y + 5}" text-anchor="middle">${value}</text></g>`)
    .join("");
  const update = () => {
    const value = values[Number(input.value)];
    const successor = values.find((item) => item > value);
    block.querySelectorAll(".bst-node").forEach((node) => {
      const nodeValue = Number(node.dataset.value);
      node.classList.toggle("active-bst-node", nodeValue === value);
      node.classList.toggle("successor-bst-node", nodeValue === successor);
    });
    readout.textContent = `${labels.node}: ${value} / ${labels.successor}: ${successor ?? labels.none}`;
  };
  input.addEventListener("input", update);
  update();
}

function mountDependencyInversion(block) {
  const labels = currentLang === "zh"
    ? { coupled: "直接依赖细节", inverted: "依赖抽象", mode: "architecture mode" }
    : { coupled: "direct detail dependency", inverted: "depend on abstraction", mode: "architecture mode" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="Dependency inversion diagram">
        <rect x="70" y="70" width="170" height="64" class="architecture-box high-box"></rect>
        <text x="98" y="108" class="svg-label">Policy / UI</text>
        <rect x="470" y="70" width="170" height="64" class="architecture-box detail-box"></rect>
        <text x="500" y="108" class="svg-label">Data / API</text>
        <rect x="275" y="184" width="170" height="64" class="architecture-box abstraction-box"></rect>
        <text x="300" y="222" class="svg-label">Interface</text>
        <path class="dependency direct-dependency" d="M240,102 H470"></path>
        <path class="dependency inverted-a" d="M240,122 C290,164 312,178 348,184"></path>
        <path class="dependency inverted-b" d="M470,122 C424,164 404,178 372,184"></path>
        <text x="70" y="270" class="svg-label architecture-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.mode}</span>
        <input class="architecture-mode-input" type="range" min="0" max="1" value="1">
      </label>
    `
  );

  const input = block.querySelector(".architecture-mode-input");
  const readout = block.querySelector(".architecture-readout");
  const update = () => {
    const inverted = Number(input.value) === 1;
    block.querySelector(".direct-dependency").classList.toggle("muted-dependency", inverted);
    block.querySelector(".inverted-a").classList.toggle("muted-dependency", !inverted);
    block.querySelector(".inverted-b").classList.toggle("muted-dependency", !inverted);
    readout.textContent = inverted ? labels.inverted : labels.coupled;
  };
  input.addEventListener("input", update);
  update();
}

function mountGraphRepresentation(block) {
  const labels = currentLang === "zh"
    ? {
        density: "edge density",
        matrix: "adjacency matrix",
        list: "adjacency list",
        space: "space",
        lookup: "edge lookup",
        edges: "edges"
      }
    : {
        density: "edge density",
        matrix: "adjacency matrix",
        list: "adjacency list",
        space: "space",
        lookup: "edge lookup",
        edges: "edges"
      };

  setInteractiveHTML(
    block,
    `
      <div class="graph-widget" aria-label="Graph representation comparison">
        <div>
          <strong>${labels.matrix}</strong>
          <div class="graph-matrix"></div>
        </div>
        <div>
          <strong>${labels.list}</strong>
          <div class="graph-list"></div>
        </div>
      </div>
      <p class="interactive-readout graph-readout"></p>
    `,
    `
      <label>
        <span>${labels.density}</span>
        <input class="graph-density-input" type="range" min="0" max="2" value="1">
      </label>
    `
  );

  const vertices = ["A", "B", "C", "D", "E"];
  const edgeSets = [
    [[0, 1], [1, 2], [3, 4]],
    [[0, 1], [0, 2], [1, 2], [1, 3], [3, 4]],
    [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
  ];
  const input = block.querySelector(".graph-density-input");
  const matrix = block.querySelector(".graph-matrix");
  const list = block.querySelector(".graph-list");
  const readout = block.querySelector(".graph-readout");
  const hasEdge = (edges, row, col) =>
    edges.some(([a, b]) => (a === row && b === col) || (a === col && b === row));

  const update = () => {
    const edges = edgeSets[Number(input.value)];
    matrix.style.gridTemplateColumns = `repeat(${vertices.length + 1}, minmax(38px, 1fr))`;
    matrix.innerHTML = [
      `<span></span>`,
      ...vertices.map((vertex) => `<b>${vertex}</b>`),
      ...vertices.flatMap((rowLabel, row) => [
        `<b>${rowLabel}</b>`,
        ...vertices.map((_, col) => {
          const active = row !== col && hasEdge(edges, row, col);
          return `<span class="${active ? "graph-edge-cell" : ""}">${active ? "1" : "0"}</span>`;
        })
      ])
    ].join("");

    list.innerHTML = vertices
      .map((vertex, index) => {
        const neighbors = vertices.filter((_, other) => index !== other && hasEdge(edges, index, other));
        return `<p><b>${vertex}</b> -> ${neighbors.length ? neighbors.join(", ") : "empty"}</p>`;
      })
      .join("");

    readout.textContent =
      `${labels.edges}: ${edges.length}; ${labels.space}: matrix O(|V|^2), list O(|V| + |E|); ${labels.lookup}: matrix O(1), list O(deg(v))`;
  };

  input.addEventListener("input", update);
  update();
}

function mountCudaCoalescing(block) {
  const labels = currentLang === "zh"
    ? {
        n: "N elements",
        block: "blockDim.x",
        blockIndex: "blockIdx.x",
        global: "global index",
        grid: "gridDim.x",
        note: "连续 lane 读取连续地址，最容易 coalesce"
      }
    : {
        n: "N elements",
        block: "blockDim.x",
        blockIndex: "blockIdx.x",
        global: "global index",
        grid: "gridDim.x",
        note: "contiguous lanes read contiguous addresses, which is easiest to coalesce"
      };

  setInteractiveHTML(
    block,
    `
      <div class="cuda-widget" aria-label="CUDA launch geometry">
        <div class="cuda-blocks"></div>
        <div class="cuda-lanes"></div>
      </div>
      <p class="interactive-readout cuda-readout"></p>
    `,
    `
      <label>
        <span>${labels.n}</span>
        <input class="cuda-n-input" type="range" min="16" max="96" step="16" value="64">
      </label>
      <label>
        <span>${labels.block}</span>
        <input class="cuda-block-input" type="range" min="8" max="32" step="8" value="16">
      </label>
      <label>
        <span>${labels.blockIndex}</span>
        <input class="cuda-block-index-input" type="range" min="0" max="3" value="0">
      </label>
    `
  );

  const nInput = block.querySelector(".cuda-n-input");
  const blockDimInput = block.querySelector(".cuda-block-input");
  const blockIndexInput = block.querySelector(".cuda-block-index-input");
  const blocks = block.querySelector(".cuda-blocks");
  const lanes = block.querySelector(".cuda-lanes");
  const readout = block.querySelector(".cuda-readout");

  const update = () => {
    const n = Number(nInput.value);
    const blockDim = Number(blockDimInput.value);
    const gridDim = Math.ceil(n / blockDim);
    blockIndexInput.max = String(Math.max(0, gridDim - 1));
    if (Number(blockIndexInput.value) >= gridDim) {
      blockIndexInput.value = String(gridDim - 1);
    }
    const blockIndex = Number(blockIndexInput.value);
    blocks.style.gridTemplateColumns = `repeat(${gridDim}, minmax(56px, 1fr))`;
    blocks.innerHTML = Array.from({ length: gridDim }, (_, index) =>
      `<span class="${index === blockIndex ? "active-cuda-block" : ""}">B${index}</span>`
    ).join("");

    lanes.style.gridTemplateColumns = `repeat(${Math.min(blockDim, 32)}, minmax(36px, 1fr))`;
    lanes.innerHTML = Array.from({ length: blockDim }, (_, lane) => {
      const globalIndex = blockIndex * blockDim + lane;
      const active = globalIndex < n;
      return `<span class="${active ? "active-cuda-lane" : "inactive-cuda-lane"}">${active ? globalIndex : "x"}</span>`;
    }).join("");

    const first = blockIndex * blockDim;
    const last = Math.min(n - 1, first + blockDim - 1);
    readout.textContent =
      `${labels.grid} = ceil(${n} / ${blockDim}) = ${gridDim}; ${labels.global} = blockIdx.x * blockDim.x + threadIdx.x -> ${first}..${last}. ${labels.note}.`;
  };

  [nInput, blockDimInput, blockIndexInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountNNPipeline(block) {
  const labels = currentLang === "zh"
    ? {
        phase: "phase",
        phases: ["allocate", "forward", "backward", "learn"],
        notes: [
          "先分配 Matrix、weights、biases、activations，stride 决定每行跳多少元素。",
          "forward pass 把 activation 逐层推进：a[l+1] = sigma(a[l]W[l] + b[l])。",
          "backward pass 从 loss 反推 delta，权重梯度来自前一层 activation 与当前 delta 的外积。",
          "learn step 用负梯度更新 weights 和 biases，learning rate 决定步长。"
        ]
      }
    : {
        phase: "phase",
        phases: ["allocate", "forward", "backward", "learn"],
        notes: [
          "Allocate matrices, weights, biases, and activations; stride controls the row jump.",
          "The forward pass pushes activations layer by layer: a[l+1] = sigma(a[l]W[l] + b[l]).",
          "The backward pass propagates delta from the loss; weight gradients are outer products.",
          "The learn step updates weights and biases along the negative gradient."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="nn-pipeline" aria-label="Neural network C implementation pipeline">
        <span data-phase="0">Matrix alloc</span>
        <span data-phase="1">aW + b</span>
        <span data-phase="1">sigma</span>
        <span data-phase="2">loss delta</span>
        <span data-phase="2">grad W,b</span>
        <span data-phase="3">update</span>
      </div>
      <p class="interactive-readout nn-pipeline-readout"></p>
    `,
    `
      <label>
        <span>${labels.phase}</span>
        <input class="nn-phase-input" type="range" min="0" max="3" value="1">
      </label>
    `
  );

  const input = block.querySelector(".nn-phase-input");
  const readout = block.querySelector(".nn-pipeline-readout");
  const update = () => {
    const phase = Number(input.value);
    block.querySelectorAll(".nn-pipeline span").forEach((node) => {
      node.classList.toggle("active-nn-node", Number(node.dataset.phase) === phase);
      node.classList.toggle("past-nn-node", Number(node.dataset.phase) < phase);
    });
    readout.textContent = `${labels.phases[phase]}: ${labels.notes[phase]}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountAutoencoderCompression(block) {
  const labels = currentLang === "zh"
    ? {
        latent: "latent width",
        input: "input",
        code: "code",
        recon: "reconstruction",
        ratio: "compression ratio",
        question: "瓶颈越窄，模型越被迫只保留对重构最有用的结构。"
      }
    : {
        latent: "latent width",
        input: "input",
        code: "code",
        recon: "reconstruction",
        ratio: "compression ratio",
        question: "A narrower bottleneck forces the model to keep only structure useful for reconstruction."
      };

  setInteractiveHTML(
    block,
    `
      <div class="autoencoder-widget" aria-label="Autoencoder bottleneck">
        <div>
          <strong>${labels.input}</strong>
          <div class="ae-bars ae-input-bars"></div>
        </div>
        <div>
          <strong>${labels.code}</strong>
          <div class="ae-bars ae-latent-bars"></div>
        </div>
        <div>
          <strong>${labels.recon}</strong>
          <div class="ae-bars ae-output-bars"></div>
        </div>
      </div>
      <p class="interactive-readout ae-readout"></p>
    `,
    `
      <label>
        <span>${labels.latent}</span>
        <input class="ae-latent-input" type="range" min="2" max="8" step="2" value="4">
      </label>
    `
  );

  const input = block.querySelector(".ae-latent-input");
  const inputBars = block.querySelector(".ae-input-bars");
  const latentBars = block.querySelector(".ae-latent-bars");
  const outputBars = block.querySelector(".ae-output-bars");
  const readout = block.querySelector(".ae-readout");
  const inputWidth = 10;
  const bar = (index, active = true) => `<span class="${active ? "" : "inactive-ae-bar"}" style="height:${22 + ((index * 17) % 58)}px"></span>`;

  const update = () => {
    const latent = Number(input.value);
    inputBars.innerHTML = Array.from({ length: inputWidth }, (_, index) => bar(index)).join("");
    latentBars.innerHTML = Array.from({ length: inputWidth }, (_, index) => bar(index, index < latent)).join("");
    outputBars.innerHTML = Array.from({ length: inputWidth }, (_, index) => bar(index)).join("");
    readout.textContent = `${labels.ratio}: ${latent}/${inputWidth} = ${(latent / inputWidth).toFixed(2)}. ${labels.question}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountStirlingApprox(block) {
  const labels = currentLang === "zh"
    ? { n: "n", exact: "log(n!)", approx: "Stirling log", error: "relative error", note: "误差随 n 增大而变小" }
    : { n: "n", exact: "log(n!)", approx: "Stirling log", error: "relative error", note: "the error shrinks as n grows" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="Stirling approximation curve">
        <line x1="62" y1="238" x2="660" y2="238" class="axis-line"></line>
        <line x1="62" y1="238" x2="62" y2="46" class="axis-line"></line>
        <path class="stirling-exact-line" d=""></path>
        <path class="stirling-approx-line" d=""></path>
        <circle class="stirling-dot" r="8"></circle>
        <text x="72" y="36" class="svg-label">log scale</text>
        <text x="596" y="270" class="svg-label">n</text>
        <text x="90" y="270" class="svg-label stirling-readout-svg"></text>
      </svg>
      <div class="stirling-cards"></div>
      <p class="interactive-readout stirling-readout"></p>
    `,
    `
      <label>
        <span>${labels.n}</span>
        <input class="stirling-n-input" type="range" min="2" max="40" value="8">
      </label>
    `
  );

  const input = block.querySelector(".stirling-n-input");
  const exactPath = block.querySelector(".stirling-exact-line");
  const approxPath = block.querySelector(".stirling-approx-line");
  const dot = block.querySelector(".stirling-dot");
  const cards = block.querySelector(".stirling-cards");
  const readout = block.querySelector(".stirling-readout");
  const svgReadout = block.querySelector(".stirling-readout-svg");
  const logFactorial = (n) => Array.from({ length: n }, (_, index) => Math.log(index + 1)).reduce((acc, value) => acc + value, 0);
  const stirlingLog = (n) => 0.5 * Math.log(2 * Math.PI * n) + n * (Math.log(n) - 1);
  const values = Array.from({ length: 39 }, (_, index) => {
    const n = index + 2;
    return { n, exact: logFactorial(n), approx: stirlingLog(n) };
  });
  const maxValue = Math.max(...values.map((item) => item.exact));
  const toPoint = (item, key) => {
    const x = 62 + ((item.n - 2) / 38) * 598;
    const y = 238 - (item[key] / maxValue) * 174;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };
  exactPath.setAttribute("d", values.map((item, index) => `${index ? "L" : "M"}${toPoint(item, "exact")}`).join(" "));
  approxPath.setAttribute("d", values.map((item, index) => `${index ? "L" : "M"}${toPoint(item, "approx")}`).join(" "));

  const update = () => {
    const n = Number(input.value);
    const exact = logFactorial(n);
    const approx = stirlingLog(n);
    const rel = Math.abs(Math.exp(approx - exact) - 1);
    const point = values[n - 2];
    const [x, y] = toPoint(point, "exact").split(",");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    cards.innerHTML = `
      <span><b>${labels.exact}</b>${exact.toFixed(3)}</span>
      <span><b>${labels.approx}</b>${approx.toFixed(3)}</span>
      <span><b>${labels.error}</b>${(rel * 100).toFixed(2)}%</span>
    `;
    svgReadout.textContent = `${labels.n}=${n}`;
    readout.textContent = `${labels.note}: ${labels.error} ${(rel * 100).toFixed(2)}%`;
  };

  input.addEventListener("input", update);
  update();
}

function mountARMAResponse(block) {
  const labels = currentLang === "zh"
    ? { phi: "AR phi", theta: "MA theta", shock: "white-noise shock", persistence: "persistence", smoothing: "smoothing" }
    : { phi: "AR phi", theta: "MA theta", shock: "white-noise shock", persistence: "persistence", smoothing: "smoothing" };

  setInteractiveHTML(
    block,
    `
      <div class="arma-bars" aria-label="ARMA impulse response"></div>
      <p class="interactive-readout arma-readout"></p>
    `,
    `
      <label>
        <span>${labels.phi}</span>
        <input class="arma-phi-input" type="range" min="-0.8" max="0.8" step="0.1" value="0.5">
      </label>
      <label>
        <span>${labels.theta}</span>
        <input class="arma-theta-input" type="range" min="-0.8" max="0.8" step="0.1" value="0.3">
      </label>
    `
  );

  const phiInput = block.querySelector(".arma-phi-input");
  const thetaInput = block.querySelector(".arma-theta-input");
  const bars = block.querySelector(".arma-bars");
  const readout = block.querySelector(".arma-readout");
  const update = () => {
    const phi = Number(phiInput.value);
    const theta = Number(thetaInput.value);
    let prevX = 0;
    let prevW = 0;
    const xs = [];
    for (let t = 0; t < 18; t += 1) {
      const w = t === 0 ? 1 : 0;
      const x = phi * prevX + w + theta * prevW;
      xs.push(x);
      prevX = x;
      prevW = w;
    }
    const maxAbs = Math.max(1, ...xs.map((value) => Math.abs(value)));
    bars.innerHTML = xs
      .map((value, index) => {
        const height = Math.max(4, Math.abs(value) / maxAbs * 86);
        return `<span class="${value < 0 ? "negative-arma-bar" : ""}" style="height:${height.toFixed(1)}px"><b>${index}</b></span>`;
      })
      .join("");
    readout.textContent =
      `X_t = ${phi.toFixed(1)} X_(t-1) + w_t + ${theta.toFixed(1)} w_(t-1); ${labels.persistence}: ${Math.abs(phi).toFixed(1)}, ${labels.smoothing}: ${Math.abs(theta).toFixed(1)}`;
  };

  [phiInput, thetaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountTimeSeriesDiagnostics(block) {
  const labels = currentLang === "zh"
    ? {
        mode: "process",
        tuning: "difference / smoothing",
        modes: ["white noise", "random walk", "AR(1)", "MA(1)", "seasonal", "frequency mix"],
        stats: ["stationarity", "memory", "frequency clue"],
        stationary: ["yes", "after differencing", "yes if |phi|<1", "yes if finite MA", "seasonal mean", "yes"],
        notes: [
          "White noise has no serial memory: ACF/PACF stay near zero and the periodogram is flat-ish.",
          "Random walk carries shocks forever. Differencing turns level memory into innovation noise.",
          "AR(1) has geometric ACF decay and a PACF cutoff after lag 1.",
          "MA(1) has an ACF cutoff after lag 1, while PACF tails off.",
          "Seasonality leaves spikes at seasonal lags and visible frequency peaks.",
          "Frequency-domain analysis asks which cycles explain variance, not only which lags correlate."
        ]
      }
    : {
        mode: "process",
        tuning: "difference / smoothing",
        modes: ["white noise", "random walk", "AR(1)", "MA(1)", "seasonal", "frequency mix"],
        stats: ["stationarity", "memory", "frequency clue"],
        stationary: ["yes", "after differencing", "yes if |phi|<1", "yes if finite MA", "seasonal mean", "yes"],
        notes: [
          "White noise has no serial memory: ACF/PACF stay near zero and the periodogram is flat-ish.",
          "Random walk carries shocks forever. Differencing turns level memory into innovation noise.",
          "AR(1) has geometric ACF decay and a PACF cutoff after lag 1.",
          "MA(1) has an ACF cutoff after lag 1, while PACF tails off.",
          "Seasonality leaves spikes at seasonal lags and visible frequency peaks.",
          "Frequency-domain analysis asks which cycles explain variance, not only which lags correlate."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="ts-diagnostics-widget" aria-label="Time series diagnostics">
        <svg class="interactive-svg ts-diagnostics-svg" viewBox="0 0 760 420" aria-label="Time series, ACF, PACF, and periodogram">
          <text x="54" y="34" class="svg-label ts-title"></text>
          <line x1="54" y1="164" x2="336" y2="164" class="ts-zero-line"></line>
          <line x1="54" y1="300" x2="336" y2="300" class="ts-zero-line"></line>
          <line x1="424" y1="164" x2="706" y2="164" class="ts-zero-line"></line>
          <line x1="424" y1="300" x2="706" y2="300" class="ts-zero-line"></line>
          <path class="ts-series-line"></path>
          <g class="ts-acf-bars"></g>
          <g class="ts-pacf-bars"></g>
          <g class="ts-period-bars"></g>
          <text x="54" y="190" class="svg-label">series</text>
          <text x="54" y="326" class="svg-label">ACF</text>
          <text x="424" y="190" class="svg-label">PACF</text>
          <text x="424" y="326" class="svg-label">periodogram</text>
        </svg>
        <div class="ts-diagnostics-stats">
          <span><b>${labels.stats[0]}</b><em class="ts-stat-stationarity"></em></span>
          <span><b>${labels.stats[1]}</b><em class="ts-stat-memory"></em></span>
          <span><b>${labels.stats[2]}</b><em class="ts-stat-frequency"></em></span>
        </div>
      </div>
      <p class="interactive-readout ts-diagnostics-readout"></p>
    `,
    `
      <label>
        <span>${labels.mode}</span>
        <input class="ts-mode-input" type="range" min="0" max="5" step="1" value="2">
      </label>
      <label>
        <span>${labels.tuning}</span>
        <input class="ts-tuning-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
    `
  );

  const noise = [
    -0.35, 0.72, -0.18, 0.26, -0.64, 0.41, 0.16, -0.52, 0.83, -0.07, -0.28, 0.55,
    -0.75, 0.31, 0.68, -0.42, 0.11, -0.58, 0.77, -0.23, 0.36, -0.69, 0.49, 0.04,
    -0.31, 0.61, -0.47, 0.21, 0.72, -0.55, 0.09, -0.16, 0.44, -0.63, 0.27, 0.58
  ];
  const modeInput = block.querySelector(".ts-mode-input");
  const tuningInput = block.querySelector(".ts-tuning-input");
  const title = block.querySelector(".ts-title");
  const seriesLine = block.querySelector(".ts-series-line");
  const acfBars = block.querySelector(".ts-acf-bars");
  const pacfBars = block.querySelector(".ts-pacf-bars");
  const periodBars = block.querySelector(".ts-period-bars");
  const stationarity = block.querySelector(".ts-stat-stationarity");
  const memory = block.querySelector(".ts-stat-memory");
  const frequency = block.querySelector(".ts-stat-frequency");
  const readout = block.querySelector(".ts-diagnostics-readout");

  const mean = (values) => values.reduce((acc, value) => acc + value, 0) / values.length;
  const variance = (values) => {
    const m = mean(values);
    return values.reduce((acc, value) => acc + (value - m) ** 2, 0) / values.length || 1;
  };
  const autocorr = (values, lag) => {
    const m = mean(values);
    const denom = values.reduce((acc, value) => acc + (value - m) ** 2, 0) || 1;
    let num = 0;
    for (let i = lag; i < values.length; i += 1) {
      num += (values[i] - m) * (values[i - lag] - m);
    }
    return num / denom;
  };
  const periodogram = (values, count) => {
    const centered = values.map((value) => value - mean(values));
    return Array.from({ length: count }, (_, freqIndex) => {
      const k = freqIndex + 1;
      let re = 0;
      let im = 0;
      centered.forEach((value, t) => {
        const angle = -2 * Math.PI * k * t / centered.length;
        re += value * Math.cos(angle);
        im += value * Math.sin(angle);
      });
      return (re ** 2 + im ** 2) / centered.length;
    });
  };
  const makeSeries = (mode, tuning) => {
    if (mode === 0) {
      return noise.slice();
    }
    if (mode === 1) {
      let x = 0;
      const walk = noise.map((value, index) => {
        x += value + 0.08;
        return x + index * 0.02;
      });
      if (tuning < 0.5) {
        return walk;
      }
      return walk.map((value, index) => index === 0 ? 0 : value - walk[index - 1]);
    }
    if (mode === 2) {
      const phi = 0.25 + tuning * 0.65;
      let prev = 0;
      return noise.map((value) => {
        const next = phi * prev + value;
        prev = next;
        return next;
      });
    }
    if (mode === 3) {
      const theta = 0.2 + tuning * 0.75;
      let prevNoise = 0;
      return noise.map((value) => {
        const next = value + theta * prevNoise;
        prevNoise = value;
        return next;
      });
    }
    if (mode === 4) {
      return noise.map((value, index) => Math.sin(2 * Math.PI * index / 12) * (1.2 - tuning * 0.35) + value * 0.35);
    }
    return noise.map((value, index) => (
      Math.sin(2 * Math.PI * index / 6) * (0.8 + tuning * 0.4) +
      Math.sin(2 * Math.PI * index / 13) * 0.45 +
      value * 0.22
    ));
  };
  const linePath = (values, x0, y0, width, height) => {
    const maxAbs = Math.max(1, ...values.map((value) => Math.abs(value - mean(values))));
    return values
      .map((value, index) => {
        const x = x0 + index / (values.length - 1) * width;
        const y = y0 + height / 2 - ((value - mean(values)) / maxAbs) * (height * 0.42);
        return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  };
  const barMarkup = (values, x0, midY, width, maxHeight, className) => {
    const maxAbs = Math.max(0.25, ...values.map((value) => Math.abs(value)));
    const barWidth = width / values.length * 0.68;
    return values
      .map((value, index) => {
        const x = x0 + index / values.length * width + 3;
        const h = Math.abs(value) / maxAbs * maxHeight;
        const y = value >= 0 ? midY - h : midY;
        return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${Math.max(2, h).toFixed(1)}" class="${className} ${value < 0 ? "negative-ts-bar" : ""}"></rect>`;
      })
      .join("");
  };
  const spectrumMarkup = (values, x0, baseY, width, maxHeight) => {
    const maxValue = Math.max(0.001, ...values);
    const barWidth = width / values.length * 0.7;
    return values
      .map((value, index) => {
        const x = x0 + index / values.length * width + 3;
        const h = value / maxValue * maxHeight;
        return `<rect x="${x.toFixed(1)}" y="${(baseY - h).toFixed(1)}" width="${barWidth.toFixed(1)}" height="${Math.max(2, h).toFixed(1)}" class="ts-period-bar"></rect>`;
      })
      .join("");
  };
  const update = () => {
    const mode = Number(modeInput.value);
    const tuning = Number(tuningInput.value);
    const values = makeSeries(mode, tuning);
    const acf = Array.from({ length: 12 }, (_, index) => autocorr(values, index + 1));
    const pacf = acf.map((value, index) => {
      if (mode === 2 && index > 0) return value * 0.18;
      if (mode === 3 && index > 0) return value * (0.72 ** (index + 1));
      return value;
    });
    const spec = periodogram(values, 14);
    seriesLine.setAttribute("d", linePath(values, 54, 54, 282, 110));
    acfBars.innerHTML = barMarkup(acf, 54, 300, 282, 78, "ts-acf-bar");
    pacfBars.innerHTML = barMarkup(pacf, 424, 164, 282, 78, "ts-pacf-bar");
    periodBars.innerHTML = spectrumMarkup(spec, 424, 300, 282, 92);
    title.textContent = labels.modes[mode];
    stationarity.textContent = labels.stationary[mode];
    memory.textContent = `var=${variance(values).toFixed(2)}, acf1=${acf[0].toFixed(2)}`;
    const peak = spec.indexOf(Math.max(...spec)) + 1;
    frequency.textContent = `peak k=${peak}`;
    readout.textContent = `${labels.modes[mode]}: ${labels.notes[mode]}`;
  };

  modeInput.addEventListener("input", update);
  tuningInput.addEventListener("input", update);
  update();
}

function mountHistogramAtomics(block) {
  const labels = currentLang === "zh"
    ? { skew: "bin skew", bins: "bins", collisions: "write collisions", note: "atomicAdd 保证计数正确，但热点 bin 会变慢" }
    : { skew: "bin skew", bins: "bins", collisions: "write collisions", note: "atomicAdd keeps counts correct, but hot bins slow down" };

  setInteractiveHTML(
    block,
    `
      <div class="histogram-widget" aria-label="Histogram atomic writes">
        <div class="histogram-pixels"></div>
        <div class="histogram-bins"></div>
      </div>
      <p class="interactive-readout histogram-readout"></p>
    `,
    `
      <label>
        <span>${labels.skew}</span>
        <input class="histogram-skew-input" type="range" min="0" max="2" value="1">
      </label>
    `
  );

  const patterns = [
    [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
    [0, 0, 1, 1, 1, 2, 2, 0, 3, 1, 0, 2],
    [0, 0, 0, 0, 1, 0, 2, 0, 0, 3, 0, 1]
  ];
  const input = block.querySelector(".histogram-skew-input");
  const pixels = block.querySelector(".histogram-pixels");
  const bins = block.querySelector(".histogram-bins");
  const readout = block.querySelector(".histogram-readout");
  const update = () => {
    const values = patterns[Number(input.value)];
    const counts = [0, 0, 0, 0];
    values.forEach((value) => {
      counts[value] += 1;
    });
    pixels.innerHTML = values.map((value, index) => `<span data-bin="${value}">p${index}<b>${value}</b></span>`).join("");
    const maxCount = Math.max(...counts);
    bins.innerHTML = counts
      .map((count, index) => `<span style="height:${32 + (count / maxCount) * 72}px"><b>${labels.bins} ${index}</b>${count}</span>`)
      .join("");
    const collisions = counts.reduce((acc, count) => acc + (count * (count - 1)) / 2, 0);
    readout.textContent = `${labels.collisions}: ${collisions}. ${labels.note}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountCMakePipeline(block) {
  const labels = currentLang === "zh"
    ? {
        phase: "phase",
        steps: ["Configure", "Generate", "Build", "Install"],
        notes: [
          "读取 CMakeLists.txt、选项和依赖，决定构建策略。",
          "生成 Ninja、Makefile 或 IDE 工程等 native build files。",
          "调用底层构建工具编译并链接 targets。",
          "把可执行文件、库和 headers 放入安装位置。"
        ]
      }
    : {
        phase: "phase",
        steps: ["Configure", "Generate", "Build", "Install"],
        notes: [
          "Read CMakeLists.txt, options, and dependencies to decide the build strategy.",
          "Generate native build files such as Ninja, Makefiles, or IDE projects.",
          "Invoke the underlying build tool to compile and link targets.",
          "Place executables, libraries, and headers into the install location."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="cmake-pipeline" aria-label="CMake pipeline">
        ${labels.steps.map((step, index) => `<span data-phase="${index}"><b>${step}</b><small>${index === 0 ? "cmake -S . -B build" : index === 2 ? "cmake --build build" : index === 3 ? "cmake --install build" : "build files"}</small></span>`).join("")}
      </div>
      <p class="interactive-readout cmake-readout"></p>
    `,
    `
      <label>
        <span>${labels.phase}</span>
        <input class="cmake-phase-input" type="range" min="0" max="3" value="0">
      </label>
    `
  );

  const input = block.querySelector(".cmake-phase-input");
  const readout = block.querySelector(".cmake-readout");
  const update = () => {
    const phase = Number(input.value);
    block.querySelectorAll(".cmake-pipeline span").forEach((item) => {
      const itemPhase = Number(item.dataset.phase);
      item.classList.toggle("active-cmake-phase", itemPhase === phase);
      item.classList.toggle("past-cmake-phase", itemPhase < phase);
    });
    readout.textContent = `${labels.steps[phase]}: ${labels.notes[phase]}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountLinearRegressionFit(block) {
  const labels = currentLang === "zh"
    ? { slope: "slope", intercept: "intercept", sse: "SSE", model: "model", residual: "residuals" }
    : { slope: "slope", intercept: "intercept", sse: "SSE", model: "model", residual: "residuals" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 320" aria-label="Linear regression fit">
        <line x1="64" y1="260" x2="660" y2="260" class="axis-line"></line>
        <line x1="64" y1="260" x2="64" y2="46" class="axis-line"></line>
        <g class="regression-residuals"></g>
        <line class="regression-line" x1="80" y1="0" x2="640" y2="0"></line>
        <g class="regression-points"></g>
        <text x="80" y="292" class="svg-label regression-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.slope}</span>
        <input class="regression-slope-input" type="range" min="0" max="2" step="0.05" value="0.95">
      </label>
      <label>
        <span>${labels.intercept}</span>
        <input class="regression-intercept-input" type="range" min="-1" max="4" step="0.1" value="0.8">
      </label>
    `
  );

  const data = [
    [1, 2.2],
    [2, 2.9],
    [3, 3.7],
    [4, 4.6],
    [5, 5.1],
    [6, 6.4]
  ];
  const slopeInput = block.querySelector(".regression-slope-input");
  const interceptInput = block.querySelector(".regression-intercept-input");
  const points = block.querySelector(".regression-points");
  const residuals = block.querySelector(".regression-residuals");
  const line = block.querySelector(".regression-line");
  const readout = block.querySelector(".regression-readout");
  const xScale = (x) => 80 + ((x - 1) / 5) * 560;
  const yScale = (y) => 260 - (y / 8) * 200;
  points.innerHTML = data
    .map(([x, y]) => `<circle cx="${xScale(x)}" cy="${yScale(y)}" r="6" class="regression-point"></circle>`)
    .join("");

  const update = () => {
    const slope = Number(slopeInput.value);
    const intercept = Number(interceptInput.value);
    const y1 = slope * 1 + intercept;
    const y6 = slope * 6 + intercept;
    line.setAttribute("y1", yScale(y1));
    line.setAttribute("y2", yScale(y6));
    let sse = 0;
    residuals.innerHTML = data
      .map(([x, y]) => {
        const pred = slope * x + intercept;
        sse += (y - pred) ** 2;
        return `<line x1="${xScale(x)}" y1="${yScale(y)}" x2="${xScale(x)}" y2="${yScale(pred)}" class="regression-residual"></line>`;
      })
      .join("");
    readout.textContent = `${labels.model}: y = ${slope.toFixed(2)}x + ${intercept.toFixed(1)} / ${labels.sse}: ${sse.toFixed(2)}`;
  };

  [slopeInput, interceptInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountMatrixVectorDot(block) {
  const labels = currentLang === "zh"
    ? { row: "row", vector: "vector b", result: "result", invalid: "dimension mismatch" }
    : { row: "row", vector: "vector b", result: "result", invalid: "dimension mismatch" };

  setInteractiveHTML(
    block,
    `
      <div class="dot-product-widget" aria-label="Matrix vector dot product">
        <div class="dot-matrix"></div>
        <div class="dot-vector"></div>
        <div class="dot-result"></div>
      </div>
      <p class="interactive-readout dot-readout"></p>
    `,
    `
      <label>
        <span>${labels.row}</span>
        <input class="dot-row-input" type="range" min="0" max="2" value="0">
      </label>
    `
  );

  const matrix = [
    [1, 2, 0],
    [3, -1, 2],
    [0, 4, 1]
  ];
  const vector = [2, 1, -1];
  const rowInput = block.querySelector(".dot-row-input");
  const matrixEl = block.querySelector(".dot-matrix");
  const vectorEl = block.querySelector(".dot-vector");
  const resultEl = block.querySelector(".dot-result");
  const readout = block.querySelector(".dot-readout");

  matrixEl.style.gridTemplateColumns = "repeat(3, minmax(48px, 1fr))";
  vectorEl.innerHTML = `<strong>${labels.vector}</strong>${vector.map((value) => `<span>${value}</span>`).join("")}`;

  const update = () => {
    const activeRow = Number(rowInput.value);
    matrixEl.innerHTML = matrix
      .flatMap((row, rowIndex) =>
        row.map((value) => `<span class="${rowIndex === activeRow ? "active-dot-row" : ""}">${value}</span>`)
      )
      .join("");
    const terms = matrix[activeRow].map((value, index) => `${value}*${vector[index]}`);
    const result = matrix[activeRow].reduce((acc, value, index) => acc + value * vector[index], 0);
    resultEl.innerHTML = `<strong>${labels.result}</strong><span>${result}</span>`;
    readout.textContent = `${labels.row} ${activeRow}: ${terms.join(" + ")} = ${result}`;
  };

  rowInput.addEventListener("input", update);
  update();
}

function mountOuterMeasureCover(block) {
  const labels = currentLang === "zh"
    ? { slack: "cover slack", set: "set A", cover: "cover intervals", total: "total cover length", idea: "outer measure 是所有覆盖长度的 infimum" }
    : { slack: "cover slack", set: "set A", cover: "cover intervals", total: "total cover length", idea: "outer measure is the infimum over all cover lengths" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 260" aria-label="Outer measure interval cover">
        <line x1="70" y1="174" x2="650" y2="174" class="axis-line"></line>
        <g class="measure-set"></g>
        <g class="measure-cover"></g>
        <text x="74" y="58" class="svg-label">${labels.cover}</text>
        <text x="74" y="210" class="svg-label">${labels.set}</text>
        <text x="330" y="232" class="svg-label measure-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.slack}</span>
        <input class="measure-slack-input" type="range" min="0" max="5" step="1" value="3">
      </label>
    `
  );

  const intervals = [
    [0.14, 0.22],
    [0.37, 0.46],
    [0.68, 0.80]
  ];
  const input = block.querySelector(".measure-slack-input");
  const setLayer = block.querySelector(".measure-set");
  const coverLayer = block.querySelector(".measure-cover");
  const readout = block.querySelector(".measure-readout");
  const xScale = (x) => 70 + x * 580;
  setLayer.innerHTML = intervals
    .map(([a, b]) => `<rect x="${xScale(a)}" y="162" width="${xScale(b) - xScale(a)}" height="24" class="measure-set-interval"></rect>`)
    .join("");

  const update = () => {
    const slack = Number(input.value) * 0.015;
    let total = 0;
    coverLayer.innerHTML = intervals
      .map(([a, b]) => {
        const left = Math.max(0, a - slack);
        const right = Math.min(1, b + slack);
        total += right - left;
        return `<rect x="${xScale(left)}" y="74" width="${xScale(right) - xScale(left)}" height="34" class="measure-cover-interval"></rect>`;
      })
      .join("");
    readout.textContent = `${labels.total}: ${total.toFixed(3)}; ${labels.idea}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountMartingaleWalk(block) {
  const labels = currentLang === "zh"
    ? { step: "time", current: "current value", expected: "conditional expectation", fair: "fair game: E[X_(t+1)|F_t] = X_t" }
    : { step: "time", current: "current value", expected: "conditional expectation", fair: "fair game: E[X_(t+1)|F_t] = X_t" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="Martingale fair random walk">
        <line x1="70" y1="150" x2="650" y2="150" class="axis-line"></line>
        <line x1="70" y1="246" x2="70" y2="54" class="axis-line"></line>
        <polyline class="martingale-line" points=""></polyline>
        <circle class="martingale-dot" r="8"></circle>
        <text x="82" y="42" class="svg-label">X_t</text>
        <text x="590" y="274" class="svg-label">t</text>
        <text x="92" y="274" class="svg-label martingale-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.step}</span>
        <input class="martingale-step-input" type="range" min="0" max="12" value="5">
      </label>
    `
  );

  const increments = [1, -1, 1, 1, -1, -1, 1, -1, 1, -1, -1, 1];
  const values = [0];
  increments.forEach((inc) => values.push(values[values.length - 1] + inc));
  const input = block.querySelector(".martingale-step-input");
  const line = block.querySelector(".martingale-line");
  const dot = block.querySelector(".martingale-dot");
  const readout = block.querySelector(".martingale-readout");
  const xScale = (t) => 70 + (t / 12) * 580;
  const yScale = (value) => 150 - value * 28;
  line.setAttribute("points", values.map((value, index) => `${xScale(index)},${yScale(value)}`).join(" "));

  const update = () => {
    const step = Number(input.value);
    const value = values[step];
    dot.setAttribute("cx", xScale(step));
    dot.setAttribute("cy", yScale(value));
    readout.textContent = `${labels.current}: X_${step}=${value}; ${labels.fair}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountBellmanBackup(block) {
  const labels = currentLang === "zh"
    ? { gamma: "discount gamma", safe: "safe action", risky: "risky action", value: "Bellman value", policy: "greedy policy" }
    : { gamma: "discount gamma", safe: "safe action", risky: "risky action", value: "Bellman value", policy: "greedy policy" };

  setInteractiveHTML(
    block,
    `
      <div class="bellman-widget" aria-label="Bellman backup comparison">
        <div class="bellman-card safe-card"></div>
        <div class="bellman-card risky-card"></div>
      </div>
      <p class="interactive-readout bellman-readout"></p>
    `,
    `
      <label>
        <span>${labels.gamma}</span>
        <input class="bellman-gamma-input" type="range" min="0" max="0.95" step="0.05" value="0.20">
      </label>
    `
  );

  const input = block.querySelector(".bellman-gamma-input");
  const safeCard = block.querySelector(".safe-card");
  const riskyCard = block.querySelector(".risky-card");
  const readout = block.querySelector(".bellman-readout");
  const update = () => {
    const gamma = Number(input.value);
    const safe = 1.2 + gamma * 2.0;
    const risky = 0.2 + gamma * 4.4;
    const best = risky > safe ? labels.risky : labels.safe;
    safeCard.classList.toggle("active-bellman-card", safe >= risky);
    riskyCard.classList.toggle("active-bellman-card", risky > safe);
    safeCard.innerHTML = `<strong>${labels.safe}</strong><span>1.2 + gamma * 2.0</span><b>${safe.toFixed(2)}</b>`;
    riskyCard.innerHTML = `<strong>${labels.risky}</strong><span>0.2 + gamma * 4.4</span><b>${risky.toFixed(2)}</b>`;
    readout.textContent = `${labels.value}: max(${safe.toFixed(2)}, ${risky.toFixed(2)}) = ${Math.max(safe, risky).toFixed(2)}; ${labels.policy}: ${best}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountCompilerPipeline(block) {
  const labels = currentLang === "zh"
    ? {
        phase: "phase",
        phases: ["scan", "parse", "resolve", "execute"],
        notes: [
          "source characters become tokens.",
          "tokens become an abstract syntax tree.",
          "names and scopes are checked before runtime.",
          "the interpreter or VM evaluates the program."
        ]
      }
    : {
        phase: "phase",
        phases: ["scan", "parse", "resolve", "execute"],
        notes: [
          "source characters become tokens.",
          "tokens become an abstract syntax tree.",
          "names and scopes are checked before runtime.",
          "the interpreter or VM evaluates the program."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="compiler-pipeline" aria-label="Compiler pipeline">
        ${labels.phases.map((phase, index) => `<span data-phase="${index}"><b>${phase}</b><small>${["var x = 1;", "VAR IDENT EQUAL NUMBER", "Stmt.Var(name, init)", "env[x] = 1"][index]}</small></span>`).join("")}
      </div>
      <p class="interactive-readout compiler-readout"></p>
    `,
    `
      <label>
        <span>${labels.phase}</span>
        <input class="compiler-phase-input" type="range" min="0" max="3" value="0">
      </label>
    `
  );

  const input = block.querySelector(".compiler-phase-input");
  const readout = block.querySelector(".compiler-readout");
  const update = () => {
    const phase = Number(input.value);
    block.querySelectorAll(".compiler-pipeline span").forEach((node) => {
      const nodePhase = Number(node.dataset.phase);
      node.classList.toggle("active-compiler-phase", nodePhase === phase);
      node.classList.toggle("past-compiler-phase", nodePhase < phase);
    });
    readout.textContent = `${labels.phases[phase]}: ${labels.notes[phase]}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountTopologyNeighborhood(block) {
  const labels = currentLang === "zh"
    ? { epsilon: "epsilon radius", inside: "contained", outside: "not contained", rule: "open set: every point has a small ball inside the set" }
    : { epsilon: "epsilon radius", inside: "contained", outside: "not contained", rule: "open set: every point has a small ball inside the set" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="Open set neighborhood">
        <rect x="138" y="78" width="444" height="144" rx="0" class="topology-open-set"></rect>
        <circle cx="360" cy="150" r="10" class="topology-point"></circle>
        <circle cx="360" cy="150" r="48" class="topology-ball"></circle>
        <text x="154" y="66" class="svg-label">U</text>
        <text x="374" y="154" class="svg-label">x</text>
        <text x="92" y="262" class="svg-label topology-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.epsilon}</span>
        <input class="topology-radius-input" type="range" min="12" max="130" step="2" value="48">
      </label>
    `
  );

  const input = block.querySelector(".topology-radius-input");
  const ball = block.querySelector(".topology-ball");
  const readout = block.querySelector(".topology-readout");
  const update = () => {
    const radius = Number(input.value);
    ball.setAttribute("r", radius);
    const contained = 360 - radius >= 138 && 360 + radius <= 582 && 150 - radius >= 78 && 150 + radius <= 222;
    ball.classList.toggle("outside-topology-ball", !contained);
    readout.textContent = `${labels.epsilon}: ${radius}; ${contained ? labels.inside : labels.outside}. ${labels.rule}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountDFAAutomaton(block) {
  const labels = currentLang === "zh"
    ? { input: "input prefix length", accept: "accept", reject: "reject", rule: "language: strings over {0,1} ending in 1" }
    : { input: "input prefix length", accept: "accept", reject: "reject", rule: "language: strings over {0,1} ending in 1" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 300" aria-label="DFA ending in one">
        <path d="M224,150 C272,92 448,92 496,150" class="dfa-arrow"></path>
        <path d="M496,174 C448,230 272,230 224,174" class="dfa-arrow"></path>
        <circle cx="210" cy="160" r="42" class="dfa-state state-zero"></circle>
        <circle cx="510" cy="160" r="42" class="dfa-state state-one"></circle>
        <circle cx="510" cy="160" r="34" class="dfa-accept-ring"></circle>
        <text x="196" y="166" class="svg-label">q0</text>
        <text x="496" y="166" class="svg-label">q1</text>
        <text x="338" y="88" class="svg-label">1</text>
        <text x="338" y="238" class="svg-label">0</text>
        <text x="96" y="270" class="svg-label dfa-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.input}</span>
        <input class="dfa-input" type="range" min="0" max="6" value="3">
      </label>
    `
  );

  const word = "101101";
  const input = block.querySelector(".dfa-input");
  const readout = block.querySelector(".dfa-readout");
  const update = () => {
    const length = Number(input.value);
    const prefix = word.slice(0, length);
    const current = prefix.endsWith("1") ? 1 : 0;
    block.querySelector(".state-zero").classList.toggle("active-dfa-state", current === 0);
    block.querySelector(".state-one").classList.toggle("active-dfa-state", current === 1);
    readout.textContent = `${prefix || "epsilon"} -> q${current}; ${current === 1 ? labels.accept : labels.reject}; ${labels.rule}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountVisualEncoding(block) {
  const labels = currentLang === "zh"
    ? { channel: "encoding channel", channels: ["position", "length", "color"], message: "same data, different visual channel" }
    : { channel: "encoding channel", channels: ["position", "length", "color"], message: "same data, different visual channel" };

  setInteractiveHTML(
    block,
    `
      <div class="viz-encoding" aria-label="Visual encoding comparison"></div>
      <p class="interactive-readout viz-readout"></p>
    `,
    `
      <label>
        <span>${labels.channel}</span>
        <input class="viz-channel-input" type="range" min="0" max="2" value="0">
      </label>
    `
  );

  const values = [0.2, 0.45, 0.72, 0.9];
  const input = block.querySelector(".viz-channel-input");
  const visual = block.querySelector(".viz-encoding");
  const readout = block.querySelector(".viz-readout");
  const update = () => {
    const mode = Number(input.value);
    visual.className = `viz-encoding viz-mode-${mode}`;
    visual.innerHTML = values
      .map((value, index) => {
        const shade = Math.round(230 - value * 120);
        const style = mode === 0
          ? `transform: translateY(${(1 - value) * 88}px)`
          : mode === 1
            ? `height:${28 + value * 92}px`
            : `background: rgb(${shade}, ${Math.round(shade + 18)}, ${Math.round(shade + 8)})`;
        return `<span style="${style}"><b>${index + 1}</b></span>`;
      })
      .join("");
    readout.textContent = `${labels.channel}: ${labels.channels[mode]}; ${labels.message}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountDimensionalityMapLab(block) {
  const labels = currentLang === "zh"
    ? {
        mode: "method family",
        knob: "locality / separation",
        modes: ["PCA", "Kernel PCA", "LLE / Isomap", "t-SNE"],
        preserves: ["maximum variance", "kernel similarity", "local neighborhoods", "neighbor probabilities"],
        notes: [
          "PCA 是全局线性投影：方向由最大方差决定，曲线结构可能被压扁。",
          "Kernel PCA 先把点通过 kernel 隐式映到高维，再在 feature space 做 PCA。",
          "LLE 和 Isomap 都相信 local geometry：先建 neighbor graph，再把局部结构拼成低维坐标。",
          "t-SNE 把高维距离转成概率，让近邻在低维里也保持高概率；这会强调 clusters，但全局距离要谨慎读。"
        ]
      }
    : {
        mode: "method family",
        knob: "locality / separation",
        modes: ["PCA", "Kernel PCA", "LLE / Isomap", "t-SNE"],
        preserves: ["maximum variance", "kernel similarity", "local neighborhoods", "neighbor probabilities"],
        notes: [
          "PCA is a global linear projection: it follows maximum variance and can flatten curved structure.",
          "Kernel PCA implicitly maps points into a feature space, then performs PCA there.",
          "LLE and Isomap trust local geometry: build a neighbor graph, then stitch local structure into low-dimensional coordinates.",
          "t-SNE turns high-dimensional distances into probabilities so close neighbors stay probable in 2D; clusters are emphasized, but global distances need caution."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="dimensionality-widget" aria-label="Dimensionality reduction method comparison">
        <svg class="interactive-svg dimensionality-svg" viewBox="0 0 720 360" aria-label="Embedding comparison">
          <line x1="56" y1="306" x2="664" y2="306" class="axis-line"></line>
          <line x1="56" y1="306" x2="56" y2="42" class="axis-line"></line>
          <g class="dimensionality-links"></g>
          <g class="dimensionality-points"></g>
          <text x="66" y="34" class="svg-label dimensionality-title"></text>
          <text x="522" y="334" class="svg-label dimensionality-preserves"></text>
        </svg>
        <div class="dimensionality-stats">
          <span><b>${labels.preserves[0]}</b><em class="dim-stat-variance"></em></span>
          <span><b>${labels.preserves[2]}</b><em class="dim-stat-local"></em></span>
          <span><b>${labels.preserves[3]}</b><em class="dim-stat-cluster"></em></span>
        </div>
      </div>
      <p class="interactive-readout dimensionality-readout"></p>
    `,
    `
      <label>
        <span>${labels.mode}</span>
        <input class="dimensionality-mode-input" type="range" min="0" max="3" step="1" value="2">
      </label>
      <label>
        <span>${labels.knob}</span>
        <input class="dimensionality-local-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const base = [
    { x: 0.10, y: 0.64, c: 0 }, { x: 0.18, y: 0.78, c: 0 }, { x: 0.28, y: 0.68, c: 0 },
    { x: 0.38, y: 0.48, c: 1 }, { x: 0.48, y: 0.38, c: 1 }, { x: 0.58, y: 0.44, c: 1 },
    { x: 0.68, y: 0.62, c: 2 }, { x: 0.78, y: 0.76, c: 2 }, { x: 0.88, y: 0.66, c: 2 },
    { x: 0.30, y: 0.23, c: 3 }, { x: 0.50, y: 0.18, c: 3 }, { x: 0.70, y: 0.24, c: 3 }
  ];
  const layouts = [
    [[0.10,0.75],[0.18,0.70],[0.26,0.64],[0.34,0.58],[0.42,0.52],[0.50,0.46],[0.58,0.40],[0.66,0.34],[0.74,0.28],[0.36,0.35],[0.50,0.29],[0.64,0.24]],
    [[0.17,0.70],[0.27,0.80],[0.38,0.70],[0.44,0.50],[0.51,0.40],[0.58,0.50],[0.66,0.70],[0.78,0.80],[0.88,0.70],[0.36,0.22],[0.52,0.18],[0.68,0.22]],
    [[0.12,0.35],[0.20,0.44],[0.28,0.51],[0.36,0.57],[0.44,0.61],[0.52,0.62],[0.60,0.59],[0.68,0.53],[0.76,0.45],[0.84,0.35],[0.52,0.26],[0.26,0.28]],
    [[0.18,0.72],[0.27,0.78],[0.32,0.66],[0.43,0.45],[0.51,0.38],[0.58,0.48],[0.73,0.74],[0.82,0.79],[0.88,0.66],[0.35,0.22],[0.50,0.18],[0.65,0.22]]
  ];
  const modeInput = block.querySelector(".dimensionality-mode-input");
  const localInput = block.querySelector(".dimensionality-local-input");
  const links = block.querySelector(".dimensionality-links");
  const points = block.querySelector(".dimensionality-points");
  const title = block.querySelector(".dimensionality-title");
  const preserves = block.querySelector(".dimensionality-preserves");
  const varianceStat = block.querySelector(".dim-stat-variance");
  const localStat = block.querySelector(".dim-stat-local");
  const clusterStat = block.querySelector(".dim-stat-cluster");
  const readout = block.querySelector(".dimensionality-readout");
  const xScale = (value) => 64 + value * 588;
  const yScale = (value) => 306 - value * 246;
  const distance = (a, b, layout) => {
    const dx = layout[a][0] - layout[b][0];
    const dy = layout[a][1] - layout[b][1];
    return Math.hypot(dx, dy);
  };

  const update = () => {
    const mode = Number(modeInput.value);
    const knob = Number(localInput.value);
    const layout = layouts[mode].map(([x, y], index) => {
      const center = [[0.24, 0.72], [0.50, 0.45], [0.80, 0.72], [0.50, 0.20]][base[index].c];
      const blend = mode === 3 ? knob * 0.55 : mode === 2 ? knob * 0.25 : 0;
      return [x * (1 - blend) + center[0] * blend, y * (1 - blend) + center[1] * blend];
    });
    const neighborEdges = base.map((point, index) => {
      const nearest = base
        .map((_, otherIndex) => ({ otherIndex, d: distance(index, otherIndex, layout) }))
        .filter((item) => item.otherIndex !== index)
        .sort((a, b) => a.d - b.d)
        .slice(0, mode >= 2 ? 2 : 1);
      return nearest.map((item) => [index, item.otherIndex]);
    }).flat();
    const uniqueEdges = Array.from(new Set(neighborEdges.map(([a, b]) => a < b ? `${a}-${b}` : `${b}-${a}`)))
      .map((key) => key.split("-").map(Number));
    const colors = ["#216e5a", "#c85b5b", "#7b5fb2", "#bc8f2f"];
    links.innerHTML = uniqueEdges.map(([a, b]) => {
      const [x1, y1] = layout[a];
      const [x2, y2] = layout[b];
      return `<line x1="${xScale(x1)}" y1="${yScale(y1)}" x2="${xScale(x2)}" y2="${yScale(y2)}" class="dimensionality-link"></line>`;
    }).join("");
    points.innerHTML = layout.map(([x, y], index) => `
      <circle cx="${xScale(x)}" cy="${yScale(y)}" r="10" fill="${colors[base[index].c]}" class="dimensionality-point"></circle>
    `).join("");
    const variance = [0.93, 0.78, 0.58, 0.42][mode] - knob * (mode > 1 ? 0.06 : 0.02);
    const local = [0.42, 0.62, 0.86, 0.78][mode] + knob * (mode > 1 ? 0.08 : 0.03);
    const cluster = [0.35, 0.55, 0.64, 0.90][mode] + knob * (mode === 3 ? 0.06 : 0.02);
    title.textContent = labels.modes[mode];
    preserves.textContent = labels.preserves[mode];
    varianceStat.textContent = Math.max(0, Math.min(1, variance)).toFixed(2);
    localStat.textContent = Math.max(0, Math.min(1, local)).toFixed(2);
    clusterStat.textContent = Math.max(0, Math.min(1, cluster)).toFixed(2);
    readout.textContent = `${labels.modes[mode]}: ${labels.notes[mode]}`;
  };

  modeInput.addEventListener("input", update);
  localInput.addEventListener("input", update);
  update();
}

function mountModerationThreshold(block) {
  const labels = currentLang === "zh"
    ? { threshold: "threshold", tp: "TP", fp: "FP", tn: "TN", fn: "FN", flagged: "flagged", clean: "clean" }
    : { threshold: "threshold", tp: "TP", fp: "FP", tn: "TN", fn: "FN", flagged: "flagged", clean: "clean" };

  setInteractiveHTML(
    block,
    `
      <div class="moderation-widget" aria-label="Moderation threshold confusion matrix">
        <div class="moderation-scores"></div>
        <div class="moderation-matrix"></div>
      </div>
      <p class="interactive-readout moderation-readout"></p>
    `,
    `
      <label>
        <span>${labels.threshold}</span>
        <input class="moderation-threshold-input" type="range" min="0.1" max="0.9" step="0.05" value="0.5">
      </label>
    `
  );

  const samples = [
    { score: 0.12, label: 0 },
    { score: 0.28, label: 0 },
    { score: 0.36, label: 1 },
    { score: 0.52, label: 0 },
    { score: 0.63, label: 1 },
    { score: 0.78, label: 1 },
    { score: 0.86, label: 1 }
  ];
  const input = block.querySelector(".moderation-threshold-input");
  const scores = block.querySelector(".moderation-scores");
  const matrix = block.querySelector(".moderation-matrix");
  const readout = block.querySelector(".moderation-readout");
  const update = () => {
    const threshold = Number(input.value);
    let tp = 0;
    let fp = 0;
    let tn = 0;
    let fn = 0;
    scores.innerHTML = samples
      .map((sample) => {
        const predicted = sample.score >= threshold;
        if (predicted && sample.label) tp += 1;
        if (predicted && !sample.label) fp += 1;
        if (!predicted && !sample.label) tn += 1;
        if (!predicted && sample.label) fn += 1;
        return `<span class="${predicted ? "predicted-flagged" : ""}" style="left:${sample.score * 100}%">${sample.label ? "!" : "."}</span>`;
      })
      .join("") + `<i style="left:${threshold * 100}%"></i>`;
    matrix.innerHTML = `
      <span>${labels.tp}<b>${tp}</b></span>
      <span>${labels.fp}<b>${fp}</b></span>
      <span>${labels.fn}<b>${fn}</b></span>
      <span>${labels.tn}<b>${tn}</b></span>
    `;
    readout.textContent = `${labels.threshold}: ${threshold.toFixed(2)}; ${labels.flagged}: ${tp + fp}, ${labels.clean}: ${tn + fn}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountTensorContraction(block) {
  const labels = currentLang === "zh"
    ? { k: "contracted dimension k", left: "A shape", right: "B shape", output: "output", rule: "sum over shared index" }
    : { k: "contracted dimension k", left: "A shape", right: "B shape", output: "output", rule: "sum over shared index" };

  setInteractiveHTML(
    block,
    `
      <div class="tensor-widget" aria-label="Tensor contraction shape">
        <div class="tensor-card tensor-left"></div>
        <div class="tensor-symbol">x</div>
        <div class="tensor-card tensor-right"></div>
        <div class="tensor-symbol">=</div>
        <div class="tensor-card tensor-output"></div>
      </div>
      <p class="interactive-readout tensor-readout"></p>
    `,
    `
      <label>
        <span>${labels.k}</span>
        <input class="tensor-k-input" type="range" min="1" max="5" value="3">
      </label>
    `
  );

  const input = block.querySelector(".tensor-k-input");
  const left = block.querySelector(".tensor-left");
  const right = block.querySelector(".tensor-right");
  const output = block.querySelector(".tensor-output");
  const readout = block.querySelector(".tensor-readout");
  const update = () => {
    const k = Number(input.value);
    left.innerHTML = `<strong>${labels.left}</strong><span>(2, ${k})</span>`;
    right.innerHTML = `<strong>${labels.right}</strong><span>(${k}, 4)</span>`;
    output.innerHTML = `<strong>${labels.output}</strong><span>(2, 4)</span>`;
    readout.textContent = `C_ij = sum_{r=1..${k}} A_ir B_rj; ${labels.rule}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountSystemsBoundary(block) {
  const labels = currentLang === "zh"
    ? {
        phase: "focus",
        phases: ["process", "virtual memory", "file descriptor", "device IO"],
        notes: [
          "A process is the OS abstraction for a running program.",
          "Virtual memory gives each process a private address-space view.",
          "A file descriptor is a small handle for files, sockets, pipes, and devices.",
          "Device IO crosses from program requests into kernel and hardware behavior."
        ]
      }
    : {
        phase: "focus",
        phases: ["process", "virtual memory", "file descriptor", "device IO"],
        notes: [
          "A process is the OS abstraction for a running program.",
          "Virtual memory gives each process a private address-space view.",
          "A file descriptor is a small handle for files, sockets, pipes, and devices.",
          "Device IO crosses from program requests into kernel and hardware behavior."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="systems-boundary" aria-label="Computer systems boundaries">
        ${labels.phases.map((phase, index) => `<span data-phase="${index}"><b>${phase}</b></span>`).join("")}
      </div>
      <p class="interactive-readout systems-boundary-readout"></p>
    `,
    `
      <label>
        <span>${labels.phase}</span>
        <input class="systems-boundary-input" type="range" min="0" max="3" value="1">
      </label>
    `
  );

  const input = block.querySelector(".systems-boundary-input");
  const readout = block.querySelector(".systems-boundary-readout");
  const update = () => {
    const phase = Number(input.value);
    block.querySelectorAll(".systems-boundary span").forEach((node) => {
      node.classList.toggle("active-system-boundary", Number(node.dataset.phase) === phase);
    });
    readout.textContent = `${labels.phases[phase]}: ${labels.notes[phase]}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountComputerSystemExecution(block) {
  const labels = currentLang === "zh"
    ? {
        stage: "聚焦",
        speed: "clock / locality",
        stages: ["抽象层", "C memory model", "ISA instruction", "Von Neumann cycle", "translation pipeline"],
        captions: [
          "高层代码会被重新表示成 assembly、ISA、microcode、gates 和 hardware behavior。",
          "Globals、stack frames、heap objects 与 return addresses 分布在不同 memory regions。",
          "Instruction 是 encoded bits：opcode 加 register、immediate 或 address fields。",
          "Program counter 取指，decode 解释，execute 改变状态，然后 cycle repeat。",
          "Source code 先 tokenize，再 parse/check，最后生成 object code 或交给 VM 执行。"
        ],
        stats: ["representation", "state", "boundary"],
        stateValues: ["bits + addresses", "stack + heap", "bits + addresses", "PC + registers + memory", "tokens + parse tree"],
        boundaryValues: ["software/hardware", "language/memory", "encoding/execution", "memory/CPU", "syntax/semantics"],
        readout:
          "这份笔记的核心：每一层都是 representation boundary。正确性是在跨边界时保留意义；性能取决于数据多频繁地穿过边界。"
      }
    : {
        stage: "focus",
        speed: "clock / locality",
        stages: ["abstraction stack", "C memory model", "ISA instruction", "Von Neumann cycle", "translation pipeline"],
        captions: [
          "High-level code becomes assembly, ISA, microcode, gates, and hardware behavior.",
          "Globals, stack frames, heap objects, and return addresses live in different memory regions.",
          "An instruction is encoded bits: opcode plus register, immediate, or address fields.",
          "The program counter fetches, decode interprets, execute changes state, then the cycle repeats.",
          "Source code is tokenized, parsed, checked, and emitted as object code or run by a VM."
        ],
        stats: ["representation", "state", "boundary"],
        stateValues: ["bits + addresses", "stack + heap", "bits + addresses", "PC + registers + memory", "tokens + parse tree"],
        boundaryValues: ["software/hardware", "language/memory", "encoding/execution", "memory/CPU", "syntax/semantics"],
        readout:
          "The note's core idea: every layer is a representation boundary. Correctness means preserving meaning across the boundary; performance depends on how often data crosses it."
      };

  setInteractiveHTML(
    block,
    `
      <div class="computer-system-widget" aria-label="Computer system execution model">
        <svg class="interactive-svg computer-system-svg" viewBox="0 0 760 390" aria-label="Computer system execution stages">
          <g class="computer-system-visual"></g>
        </svg>
        <div class="computer-system-stats">
          <span><b>${labels.stats[0]}</b><em class="cs-stat-representation"></em></span>
          <span><b>${labels.stats[1]}</b><em class="cs-stat-state"></em></span>
          <span><b>${labels.stats[2]}</b><em class="cs-stat-boundary"></em></span>
        </div>
      </div>
      <p class="interactive-readout computer-system-readout"></p>
    `,
    `
      <label>
        <span>${labels.stage}</span>
        <input class="computer-system-stage-input" type="range" min="0" max="4" step="1" value="3">
      </label>
      <label>
        <span>${labels.speed}</span>
        <input class="computer-system-speed-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const stageInput = block.querySelector(".computer-system-stage-input");
  const speedInput = block.querySelector(".computer-system-speed-input");
  const visual = block.querySelector(".computer-system-visual");
  const repStat = block.querySelector(".cs-stat-representation");
  const stateStat = block.querySelector(".cs-stat-state");
  const boundaryStat = block.querySelector(".cs-stat-boundary");
  const readout = block.querySelector(".computer-system-readout");

  const box = (x, y, w, h, text, cls = "") => `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" class="cs-box ${cls}"></rect>
    <text x="${x + w / 2}" y="${y + h / 2 + 5}" class="cs-box-label">${text}</text>
  `;
  const arrow = (x1, y1, x2, y2, cls = "") => `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="cs-arrow ${cls}"></line>
    <polygon points="${x2},${y2} ${x2 - 9},${y2 - 5} ${x2 - 9},${y2 + 5}" class="cs-arrow-head ${cls}"></polygon>
  `;

  const renderers = [
    (k) => `
      ${box(54, 64, 132, 56, "HLL")}
      ${arrow(186, 92, 244, 92)}
      ${box(244, 64, 132, 56, "Assembly")}
      ${arrow(376, 92, 434, 92)}
      ${box(434, 64, 132, 56, "ISA")}
      ${arrow(566, 92, 624, 92)}
      ${box(624, 64, 82, 56, "Gates")}
      ${box(150, 188, 120, 66, "OS")}
      ${box(320, 188, 120, 66, "CPU")}
      ${box(490, 188, 120, 66, "Memory")}
      ${arrow(270, 221, 320, 221, "cs-bus")}
      ${arrow(440, 221, 490, 221, "cs-bus")}
      <text x="64" y="332" class="svg-label">time = instructions/program * cycles/instruction * time/cycle</text>
      <text x="64" y="356" class="svg-label">clock factor ${(1 + k).toFixed(2)}x; bus crossings matter</text>
    `,
    (k) => `
      ${box(70, 48, 170, 54, "global/static")}
      ${box(70, 124, 170, 54, "heap")}
      ${box(70, 200, 170, 54, "stack frame")}
      ${box(70, 276, 170, 54, "return address")}
      ${box(384, 54, 145, 50, "main()")}
      ${box(384, 128, 145, 50, "call f(x)")}
      ${box(384, 202, 145, 50, "locals")}
      ${box(384, 276, 145, 50, "pop return")}
      ${arrow(240, 151, 384, 153, "cs-bus")}
      ${arrow(240, 228, 384, 227, "cs-bus")}
      ${arrow(529, 301, 640, 301)}
      <text x="568" y="78" class="svg-label">stack moves with calls</text>
      <text x="568" y="106" class="svg-label">heap lives beyond a frame</text>
      <text x="568" y="134" class="svg-label">globals have fixed storage</text>
      <text x="568" y="162" class="svg-label">bandwidth ${(k * 100).toFixed(0)}%</text>
    `,
    (k) => `
      <rect x="72" y="104" width="612" height="54" class="cs-instruction"></rect>
      <line x1="190" y1="104" x2="190" y2="158" class="axis-line"></line>
      <line x1="310" y1="104" x2="310" y2="158" class="axis-line"></line>
      <line x1="448" y1="104" x2="448" y2="158" class="axis-line"></line>
      <text x="131" y="137" class="cs-box-label">opcode</text>
      <text x="250" y="137" class="cs-box-label">reg</text>
      <text x="379" y="137" class="cs-box-label">mode</text>
      <text x="566" y="137" class="cs-box-label">address / imm</text>
      ${box(110, 226, 130, 56, "immediate")}
      ${box(314, 226, 130, 56, "direct")}
      ${box(518, 226, 130, 56, "indirect")}
      ${arrow(175, 158, 175, 226)}
      ${arrow(379, 158, 379, 226)}
      ${arrow(583, 158, 583, 226)}
      <text x="78" y="54" class="svg-label">byte-addressed instruction stream; unary or monomial encodings appear in the notes</text>
    `,
    (k) => `
      ${box(74, 64, 122, 58, "PC")}
      ${arrow(196, 93, 276, 93)}
      ${box(276, 64, 122, 58, "fetch")}
      ${arrow(398, 93, 478, 93)}
      ${box(478, 64, 122, 58, "decode")}
      ${arrow(539, 122, 539, 178)}
      ${box(478, 178, 122, 58, "execute")}
      ${arrow(478, 207, 398, 207)}
      ${box(276, 178, 122, 58, "state")}
      ${arrow(276, 207, 196, 207)}
      ${box(74, 178, 122, 58, "repeat")}
      ${box(284, 286, 92, 46, "RAM", "cs-memory-hot")}
      ${box(402, 286, 92, 46, "ROM")}
      ${arrow(330, 286, 330, 238, "cs-bus")}
      <text x="76" y="344" class="svg-label">fetch pressure ${(k * 100).toFixed(0)}%: instruction specifier and memory speed shape runtime</text>
    `,
    (k) => `
      ${box(48, 70, 112, 54, "source")}
      ${arrow(160, 97, 220, 97)}
      ${box(220, 70, 112, 54, "lexer")}
      ${arrow(332, 97, 392, 97)}
      ${box(392, 70, 112, 54, "parser")}
      ${arrow(504, 97, 564, 97)}
      ${box(564, 70, 128, 54, "code gen")}
      ${box(196, 210, 104, 52, "tokens")}
      ${box(328, 210, 104, 52, "parse tree")}
      ${box(460, 210, 104, 52, "object code")}
      ${box(592, 210, 104, 52, "VM")}
      ${arrow(272, 124, 248, 210)}
      ${arrow(448, 124, 380, 210)}
      ${arrow(628, 124, 512, 210)}
      <text x="70" y="328" class="svg-label">FSM tokenizer accepts identifiers, integers, invalid tokens; parser enforces grammar</text>
    `
  ];

  const update = () => {
    const stage = Number(stageInput.value);
    const speed = Number(speedInput.value);
    visual.innerHTML = renderers[stage](speed);
    repStat.textContent = labels.stages[stage];
    stateStat.textContent = labels.stateValues[stage];
    boundaryStat.textContent = labels.boundaryValues[stage];
    readout.textContent = `${labels.stages[stage]}: ${labels.captions[stage]} ${labels.readout}`;
  };

  stageInput.addEventListener("input", update);
  speedInput.addEventListener("input", update);
  update();
}

function mountClassificationBoundary(block) {
  const labels = currentLang === "zh"
    ? { bias: "boundary bias", accuracy: "accuracy", loss: "hinge loss", rule: "decision: sign(x1 + x2 + b)" }
    : { bias: "boundary bias", accuracy: "accuracy", loss: "hinge loss", rule: "decision: sign(x1 + x2 + b)" };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg" viewBox="0 0 720 320" aria-label="Classification decision boundary">
        <line x1="70" y1="260" x2="650" y2="260" class="axis-line"></line>
        <line x1="360" y1="280" x2="360" y2="44" class="axis-line"></line>
        <line class="classification-line" x1="0" y1="0" x2="0" y2="0"></line>
        <g class="classification-points"></g>
        <text x="82" y="294" class="svg-label classification-readout"></text>
      </svg>
    `,
    `
      <label>
        <span>${labels.bias}</span>
        <input class="classification-bias-input" type="range" min="-3" max="3" step="0.25" value="0">
      </label>
    `
  );

  const data = [
    [-2, 1.2, -1],
    [-1.2, -0.4, -1],
    [-0.3, -1.4, -1],
    [0.4, 0.2, 1],
    [1.2, 0.8, 1],
    [2.0, -0.2, 1]
  ];
  const input = block.querySelector(".classification-bias-input");
  const points = block.querySelector(".classification-points");
  const line = block.querySelector(".classification-line");
  const readout = block.querySelector(".classification-readout");
  const xScale = (x) => 360 + x * 92;
  const yScale = (y) => 160 - y * 70;
  points.innerHTML = data
    .map(([x, y, label]) => `<circle cx="${xScale(x)}" cy="${yScale(y)}" r="8" class="class-point ${label > 0 ? "positive-point" : "negative-point"}"></circle>`)
    .join("");

  const update = () => {
    const bias = Number(input.value);
    const x1 = -3;
    const x2 = 3;
    const y1 = -x1 - bias;
    const y2 = -x2 - bias;
    line.setAttribute("x1", xScale(x1));
    line.setAttribute("y1", yScale(y1));
    line.setAttribute("x2", xScale(x2));
    line.setAttribute("y2", yScale(y2));
    let correct = 0;
    let loss = 0;
    data.forEach(([x, y, label]) => {
      const margin = label * (x + y + bias);
      if (margin > 0) correct += 1;
      loss += Math.max(0, 1 - margin);
    });
    readout.textContent = `${labels.accuracy}: ${correct}/${data.length}; ${labels.loss}: ${loss.toFixed(2)}; ${labels.rule}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountClassificationBayesBoundary(block) {
  const labels = currentLang === "zh"
    ? {
        prior: "class 1 prior",
        separation: "mean separation",
        boundary: "decision boundary",
        posterior: "posterior at x=0",
        note: "先验会平移边界；class prior 越大，模型越愿意把模糊点判给该 class。"
      }
    : {
        prior: "class 1 prior",
        separation: "mean separation",
        boundary: "decision boundary",
        posterior: "posterior at x=0",
        note: "The prior shifts the boundary; a larger class prior makes ambiguous points easier to assign to that class."
      };

  setInteractiveHTML(
    block,
    `
      <div class="classification-bayes-widget" aria-label="Bayes classifier boundary">
        <svg class="interactive-svg classification-bayes-svg" viewBox="0 0 720 320" aria-hidden="true">
          <line x1="64" y1="260" x2="660" y2="260" class="axis-line"></line>
          <line x1="362" y1="276" x2="362" y2="44" class="axis-line"></line>
          <path class="classification-density classification-density-zero"></path>
          <path class="classification-density classification-density-one"></path>
          <line class="classification-bayes-boundary-line" y1="54" y2="260"></line>
          <text x="72" y="292" class="svg-label">class 0 density</text>
          <text x="500" y="292" class="svg-label">class 1 density</text>
        </svg>
        <div class="classification-widget-stats">
          <span class="classification-bayes-boundary-stat"></span>
          <span class="classification-bayes-posterior-stat"></span>
        </div>
      </div>
      <p class="interactive-readout classification-bayes-readout"></p>
    `,
    `
      <label>
        <span>${labels.prior}</span>
        <input class="classification-bayes-prior-input" type="range" min="0.20" max="0.80" step="0.02" value="0.50">
      </label>
      <label>
        <span>${labels.separation}</span>
        <input class="classification-bayes-separation-input" type="range" min="1.0" max="4.0" step="0.1" value="2.4">
      </label>
    `
  );

  const priorInput = block.querySelector(".classification-bayes-prior-input");
  const separationInput = block.querySelector(".classification-bayes-separation-input");
  const densityZero = block.querySelector(".classification-density-zero");
  const densityOne = block.querySelector(".classification-density-one");
  const boundaryLine = block.querySelector(".classification-bayes-boundary-line");
  const boundaryStat = block.querySelector(".classification-bayes-boundary-stat");
  const posteriorStat = block.querySelector(".classification-bayes-posterior-stat");
  const readout = block.querySelector(".classification-bayes-readout");
  const sigma = 0.85;
  const xScale = (x) => 362 + x * 74;
  const yScale = (density) => 260 - density * 170;
  const normalDensity = (x, mean) => Math.exp(-((x - mean) ** 2) / (2 * sigma ** 2));
  const buildPath = (mean, weight) => {
    const points = Array.from({ length: 121 }, (_, index) => {
      const x = -4 + index * (8 / 120);
      const y = weight * normalDensity(x, mean);
      return `${index === 0 ? "M" : "L"}${xScale(x).toFixed(1)},${yScale(y).toFixed(1)}`;
    });
    return points.join(" ");
  };

  const update = () => {
    const pi1 = Number(priorInput.value);
    const pi0 = 1 - pi1;
    const separation = Number(separationInput.value);
    const mean0 = -separation / 2;
    const mean1 = separation / 2;
    const boundary = (sigma ** 2 / separation) * Math.log(pi0 / pi1);
    const boundedBoundary = Math.max(-4, Math.min(4, boundary));
    const posteriorAtZero = (pi1 * normalDensity(0, mean1)) / (pi1 * normalDensity(0, mean1) + pi0 * normalDensity(0, mean0));

    densityZero.setAttribute("d", buildPath(mean0, pi0));
    densityOne.setAttribute("d", buildPath(mean1, pi1));
    boundaryLine.setAttribute("x1", xScale(boundedBoundary));
    boundaryLine.setAttribute("x2", xScale(boundedBoundary));
    boundaryStat.innerHTML = `<b>${labels.boundary}</b><em>x=${boundary.toFixed(2)}</em>`;
    posteriorStat.innerHTML = `<b>${labels.posterior}</b><em>${posteriorAtZero.toFixed(2)}</em>`;
    readout.textContent = `P(Y=1|x)=f1(x)pi1/[f0(x)pi0+f1(x)pi1]. ${labels.note}`;
  };

  priorInput.addEventListener("input", update);
  separationInput.addEventListener("input", update);
  update();
}

function mountClassificationComplexityError(block) {
  const labels = currentLang === "zh"
    ? {
        complexity: "model complexity",
        noise: "noise level",
        empirical: "empirical error",
        true: "true error",
        best: "best complexity",
        note: "训练误差通常随复杂度下降，但 true error 会因为 variance 和扰动项重新上升。"
      }
    : {
        complexity: "model complexity",
        noise: "noise level",
        empirical: "empirical error",
        true: "true error",
        best: "best complexity",
        note: "Training error usually decreases with complexity, while true error can rise again through variance and perturbation."
      };

  setInteractiveHTML(
    block,
    `
      <div class="classification-error-widget" aria-label="Model complexity and error">
        <svg class="interactive-svg classification-error-svg" viewBox="0 0 720 320" aria-hidden="true">
          <line x1="64" y1="260" x2="660" y2="260" class="axis-line"></line>
          <line x1="64" y1="260" x2="64" y2="46" class="axis-line"></line>
          <path class="classification-error-empirical"></path>
          <path class="classification-error-true"></path>
          <line class="classification-error-marker" y1="54" y2="260"></line>
          <circle class="classification-error-dot" r="8"></circle>
          <text x="72" y="36" class="svg-label">error</text>
          <text x="556" y="292" class="svg-label">complexity</text>
        </svg>
        <div class="classification-widget-stats">
          <span class="classification-error-current-stat"></span>
          <span class="classification-error-best-stat"></span>
        </div>
      </div>
      <p class="interactive-readout classification-error-readout"></p>
    `,
    `
      <label>
        <span>${labels.complexity}</span>
        <input class="classification-error-complexity-input" type="range" min="1" max="10" step="1" value="5">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="classification-error-noise-input" type="range" min="0.4" max="1.6" step="0.1" value="0.9">
      </label>
    `
  );

  const complexityInput = block.querySelector(".classification-error-complexity-input");
  const noiseInput = block.querySelector(".classification-error-noise-input");
  const empiricalCurve = block.querySelector(".classification-error-empirical");
  const trueCurve = block.querySelector(".classification-error-true");
  const marker = block.querySelector(".classification-error-marker");
  const dot = block.querySelector(".classification-error-dot");
  const currentStat = block.querySelector(".classification-error-current-stat");
  const bestStat = block.querySelector(".classification-error-best-stat");
  const readout = block.querySelector(".classification-error-readout");
  const xScale = (m) => 64 + (m - 1) * (596 / 9);
  const yScale = (err) => 260 - err * 175;
  const empirical = (m) => 0.12 + 0.72 / (m + 0.8);
  const trueError = (m, noise) => empirical(m) + 0.018 * noise * (m - 3.5) ** 2 + 0.045 * noise;
  const pathFor = (fn) => Array.from({ length: 91 }, (_, index) => {
    const m = 1 + index * 0.1;
    return `${index === 0 ? "M" : "L"}${xScale(m).toFixed(1)},${yScale(fn(m)).toFixed(1)}`;
  }).join(" ");

  const update = () => {
    const complexity = Number(complexityInput.value);
    const noise = Number(noiseInput.value);
    let bestM = 1;
    let bestErr = Infinity;
    for (let m = 1; m <= 10; m += 0.1) {
      const err = trueError(m, noise);
      if (err < bestErr) {
        bestErr = err;
        bestM = m;
      }
    }
    const currentErr = trueError(complexity, noise);
    empiricalCurve.setAttribute("d", pathFor(empirical));
    trueCurve.setAttribute("d", pathFor((m) => trueError(m, noise)));
    marker.setAttribute("x1", xScale(complexity));
    marker.setAttribute("x2", xScale(complexity));
    dot.setAttribute("cx", xScale(complexity));
    dot.setAttribute("cy", yScale(currentErr));
    currentStat.innerHTML = `<b>${labels.true}</b><em>${currentErr.toFixed(2)}</em>`;
    bestStat.innerHTML = `<b>${labels.best}</b><em>${bestM.toFixed(1)}</em>`;
    readout.textContent = `${labels.empirical} decreases, but ${labels.true} has a U-shape. ${labels.note}`;
  };

  complexityInput.addEventListener("input", update);
  noiseInput.addEventListener("input", update);
  update();
}

function mountClassificationSVMMargin(block) {
  const labels = currentLang === "zh"
    ? {
        penalty: "soft-margin C",
        width: "margin width",
        violations: "inside margin",
        note: "C 越大，模型越不愿容忍 violation；C 小时 margin 更宽，但会接受一些点进入 margin。"
      }
    : {
        penalty: "soft-margin C",
        width: "margin width",
        violations: "inside margin",
        note: "A larger C dislikes violations; a smaller C accepts some margin violations to keep a wider separator."
      };

  setInteractiveHTML(
    block,
    `
      <div class="classification-svm-widget" aria-label="SVM soft margin">
        <svg class="interactive-svg classification-svm-svg" viewBox="0 0 720 320" aria-hidden="true">
          <line x1="68" y1="260" x2="656" y2="260" class="axis-line"></line>
          <line x1="362" y1="278" x2="362" y2="42" class="axis-line"></line>
          <line class="classification-svm-margin-line classification-svm-margin-upper"></line>
          <line class="classification-svm-margin-line classification-svm-margin-lower"></line>
          <line class="classification-svm-line"></line>
          <g class="classification-svm-points"></g>
        </svg>
        <div class="classification-widget-stats">
          <span class="classification-svm-width-stat"></span>
          <span class="classification-svm-violations-stat"></span>
        </div>
      </div>
      <p class="interactive-readout classification-svm-readout"></p>
    `,
    `
      <label>
        <span>${labels.penalty}</span>
        <input class="classification-svm-c-input" type="range" min="0.3" max="5" step="0.1" value="1.5">
      </label>
    `
  );

  const data = [
    [-2.4, 1.1, -1],
    [-1.7, 0.1, -1],
    [-1.2, -0.7, -1],
    [-0.2, -1.1, -1],
    [0.2, 1.0, 1],
    [1.1, 0.5, 1],
    [1.8, -0.3, 1],
    [2.5, -1.0, 1],
    [-0.8, 1.4, 1]
  ];
  const input = block.querySelector(".classification-svm-c-input");
  const pointsGroup = block.querySelector(".classification-svm-points");
  const decision = block.querySelector(".classification-svm-line");
  const upper = block.querySelector(".classification-svm-margin-upper");
  const lower = block.querySelector(".classification-svm-margin-lower");
  const widthStat = block.querySelector(".classification-svm-width-stat");
  const violationsStat = block.querySelector(".classification-svm-violations-stat");
  const readout = block.querySelector(".classification-svm-readout");
  const xScale = (x) => 362 + x * 84;
  const yScale = (y) => 160 - y * 70;
  const setLine = (line, offset) => {
    const x1 = -3.2;
    const x2 = 3.2;
    const y1 = -x1 + offset;
    const y2 = -x2 + offset;
    line.setAttribute("x1", xScale(x1));
    line.setAttribute("y1", yScale(y1));
    line.setAttribute("x2", xScale(x2));
    line.setAttribute("y2", yScale(y2));
  };

  const update = () => {
    const c = Number(input.value);
    const margin = 1.65 - 0.18 * c;
    setLine(decision, 0);
    setLine(upper, margin);
    setLine(lower, -margin);
    let violations = 0;
    pointsGroup.innerHTML = data
      .map(([x, y, label]) => {
        const signed = label * (x + y);
        const support = signed < margin + 0.18;
        if (signed < margin) {
          violations += 1;
        }
        return `<circle cx="${xScale(x)}" cy="${yScale(y)}" r="${support ? 10 : 8}" class="class-point ${label > 0 ? "positive-point" : "negative-point"} ${support ? "support-vector" : ""}"></circle>`;
      })
      .join("");
    widthStat.innerHTML = `<b>${labels.width}</b><em>${(2 * margin / Math.sqrt(2)).toFixed(2)}</em>`;
    violationsStat.innerHTML = `<b>${labels.violations}</b><em>${violations}</em>`;
    readout.textContent = `Hard margin asks y_i(w^T x_i+b)>=1. Soft margin adds slack and penalty C. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountClassificationTreeSplit(block) {
  const labels = currentLang === "zh"
    ? {
        threshold: "split threshold",
        left: "left impurity",
        right: "right impurity",
        total: "weighted cost",
        note: "Tree split 选择让子区域更纯的 threshold；random forest 再通过 bootstrap 和随机特征降低单棵树的方差。"
      }
    : {
        threshold: "split threshold",
        left: "left impurity",
        right: "right impurity",
        total: "weighted cost",
        note: "A tree chooses the threshold that makes child regions purer; a random forest reduces variance with bootstrap samples and random features."
      };

  setInteractiveHTML(
    block,
    `
      <div class="classification-tree-widget" aria-label="Decision tree split impurity">
        <svg class="interactive-svg classification-tree-svg" viewBox="0 0 720 260" aria-hidden="true">
          <line x1="70" y1="198" x2="650" y2="198" class="axis-line"></line>
          <line class="classification-tree-threshold-line" y1="44" y2="198"></line>
          <g class="classification-tree-points"></g>
          <text x="74" y="228" class="svg-label">feature x</text>
        </svg>
        <div class="classification-widget-stats">
          <span class="classification-tree-left-stat"></span>
          <span class="classification-tree-right-stat"></span>
          <span class="classification-tree-total-stat"></span>
        </div>
      </div>
      <p class="interactive-readout classification-tree-readout"></p>
    `,
    `
      <label>
        <span>${labels.threshold}</span>
        <input class="classification-tree-threshold-input" type="range" min="0.15" max="0.85" step="0.01" value="0.50">
      </label>
    `
  );

  const data = [
    [0.10, 0],
    [0.18, 0],
    [0.27, 0],
    [0.34, 1],
    [0.44, 0],
    [0.56, 1],
    [0.63, 1],
    [0.71, 1],
    [0.82, 0],
    [0.90, 1]
  ];
  const input = block.querySelector(".classification-tree-threshold-input");
  const thresholdLine = block.querySelector(".classification-tree-threshold-line");
  const points = block.querySelector(".classification-tree-points");
  const leftStat = block.querySelector(".classification-tree-left-stat");
  const rightStat = block.querySelector(".classification-tree-right-stat");
  const totalStat = block.querySelector(".classification-tree-total-stat");
  const readout = block.querySelector(".classification-tree-readout");
  const xScale = (x) => 70 + x * 580;
  const yScale = (label, index) => label ? 82 + (index % 2) * 16 : 156 + (index % 2) * 16;
  const gini = (subset) => {
    if (!subset.length) {
      return 0;
    }
    const p = subset.reduce((sum, item) => sum + item[1], 0) / subset.length;
    return 2 * p * (1 - p);
  };

  const update = () => {
    const threshold = Number(input.value);
    const left = data.filter(([x]) => x <= threshold);
    const right = data.filter(([x]) => x > threshold);
    const leftImpurity = gini(left);
    const rightImpurity = gini(right);
    const weighted = (left.length * leftImpurity + right.length * rightImpurity) / data.length;
    thresholdLine.setAttribute("x1", xScale(threshold));
    thresholdLine.setAttribute("x2", xScale(threshold));
    points.innerHTML = data
      .map(([x, label], index) => `<circle cx="${xScale(x)}" cy="${yScale(label, index)}" r="9" class="class-point ${label ? "positive-point" : "negative-point"}"></circle>`)
      .join("");
    leftStat.innerHTML = `<b>${labels.left}</b><em>${leftImpurity.toFixed(2)}</em>`;
    rightStat.innerHTML = `<b>${labels.right}</b><em>${rightImpurity.toFixed(2)}</em>`;
    totalStat.innerHTML = `<b>${labels.total}</b><em>${weighted.toFixed(2)}</em>`;
    readout.textContent = `Q_m measures impurity inside a region, and total cost is sum_m n_m Q_m. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountCantorDiagonal(block) {
  const labels = currentLang === "zh"
    ? { rows: "rows used", diagonal: "diagonal string", newString: "flipped string", note: "the flipped string differs from row n at digit n" }
    : { rows: "rows used", diagonal: "diagonal string", newString: "flipped string", note: "the flipped string differs from row n at digit n" };

  setInteractiveHTML(
    block,
    `
      <div class="cantor-widget" aria-label="Cantor diagonal argument"></div>
      <p class="interactive-readout cantor-readout"></p>
    `,
    `
      <label>
        <span>${labels.rows}</span>
        <input class="cantor-row-input" type="range" min="3" max="6" value="5">
      </label>
    `
  );

  const rows = ["010110", "110001", "001101", "011010", "100111", "101000"];
  const input = block.querySelector(".cantor-row-input");
  const visual = block.querySelector(".cantor-widget");
  const readout = block.querySelector(".cantor-readout");
  const update = () => {
    const count = Number(input.value);
    const activeRows = rows.slice(0, count);
    const diagonal = activeRows.map((row, index) => row[index]).join("");
    const flipped = diagonal.split("").map((digit) => digit === "0" ? "1" : "0").join("");
    visual.innerHTML = activeRows
      .map((row, rowIndex) => `<p>${row.split("").map((digit, colIndex) => `<span class="${rowIndex === colIndex ? "diagonal-digit" : ""}">${digit}</span>`).join("")}</p>`)
      .join("") + `<strong>${flipped.split("").map((digit) => `<span>${digit}</span>`).join("")}</strong>`;
    readout.textContent = `${labels.diagonal}: ${diagonal}; ${labels.newString}: ${flipped}; ${labels.note}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountInfinityCardinalityMap(block) {
  const labels = currentLang === "zh"
    ? {
        mode: "mapping example",
        examples: ["finite injection", "Hilbert shift", "interval squeeze"],
        injective: "injective",
        onto: "onto",
        verdict: "cardinality statement",
        notes: [
          "Finite sets still behave like ordinary counting: an injection into a larger set need not be onto.",
          "Infinite sets can be shifted: every guest moves from n to n+1, freeing one room while keeping a one-to-one map.",
          "Two injections, one each way, give equality of size by Cantor-Bernstein."
        ]
      }
    : {
        mode: "mapping example",
        examples: ["finite injection", "Hilbert shift", "interval squeeze"],
        injective: "injective",
        onto: "onto",
        verdict: "cardinality statement",
        notes: [
          "Finite sets still behave like ordinary counting: an injection into a larger set need not be onto.",
          "Infinite sets can be shifted: every guest moves from n to n+1, freeing one room while keeping a one-to-one map.",
          "Two injections, one each way, give equality of size by Cantor-Bernstein."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="infinity-map-widget" aria-label="Cardinality mapping examples">
        <div class="infinity-map-stage"></div>
        <div class="infinity-map-stats">
          <span class="infinity-injective-stat"></span>
          <span class="infinity-onto-stat"></span>
          <span class="infinity-verdict-stat"></span>
        </div>
      </div>
      <p class="interactive-readout infinity-map-readout"></p>
    `,
    `
      <label>
        <span>${labels.mode}</span>
        <input class="infinity-map-mode" type="range" min="0" max="2" step="1" value="1">
      </label>
    `
  );

  const modeInput = block.querySelector(".infinity-map-mode");
  const stage = block.querySelector(".infinity-map-stage");
  const injectiveStat = block.querySelector(".infinity-injective-stat");
  const ontoStat = block.querySelector(".infinity-onto-stat");
  const verdictStat = block.querySelector(".infinity-verdict-stat");
  const readout = block.querySelector(".infinity-map-readout");

  const examples = [
    {
      left: ["a", "b", "c"],
      right: ["1", "2", "3", "4"],
      arrows: [[0, 0], [1, 1], [2, 2]],
      injective: "yes",
      onto: "no",
      verdict: "|A| <= |B|"
    },
    {
      left: ["0", "1", "2", "3", "..."],
      right: ["0", "1", "2", "3", "4", "..."],
      arrows: [[0, 1], [1, 2], [2, 3], [3, 4]],
      injective: "yes",
      onto: "no",
      verdict: "|N| <= |N \\ {0}| and still infinite"
    },
    {
      left: ["0", "1/2", "1"],
      right: ["0", "1/4", "1/2", "3/4", "1"],
      arrows: [[0, 1], [1, 2], [2, 3]],
      injective: "two ways",
      onto: "by theorem",
      verdict: "|[0,1]| = |(0,1)|"
    }
  ];

  const update = () => {
    const index = Number(modeInput.value);
    const example = examples[index];
    const leftHTML = example.left.map((item, itemIndex) => `<span data-left="${itemIndex}">${item}</span>`).join("");
    const rightHTML = example.right.map((item, itemIndex) => `<span data-right="${itemIndex}">${item}</span>`).join("");
    const arrowHTML = example.arrows.map(([from, to], arrowIndex) => `
      <span class="infinity-arrow infinity-arrow-${arrowIndex}" style="grid-row:${from + 1};">${example.left[from]} -> ${example.right[to]}</span>
    `).join("");

    stage.innerHTML = `
      <div class="infinity-map-column"><b>A</b>${leftHTML}</div>
      <div class="infinity-map-arrows">${arrowHTML}</div>
      <div class="infinity-map-column"><b>B</b>${rightHTML}</div>
    `;
    injectiveStat.innerHTML = `<b>${labels.injective}</b><em>${example.injective}</em>`;
    ontoStat.innerHTML = `<b>${labels.onto}</b><em>${example.onto}</em>`;
    verdictStat.innerHTML = `<b>${labels.verdict}</b><em>${example.verdict}</em>`;
    readout.textContent = `${labels.examples[index]}: ${labels.notes[index]}`;
  };

  modeInput.addEventListener("input", update);
  update();
}

function mountMongePushforward(block) {
  const labels = currentLang === "zh"
    ? {
        split: "允许拆分质量",
        monge: "Monge map: 每个 source atom 只能去一个 target",
        kantorovich: "Kantorovich plan: 同一个 source atom 可以拆到多个 target",
        source: "source mass",
        target: "target mass",
        constraint: "constraint",
        valid: "push-forward keeps total target mass balanced"
      }
    : {
        split: "mass splitting",
        monge: "Monge map: each source atom chooses one target",
        kantorovich: "Kantorovich plan: one source atom can split across targets",
        source: "source mass",
        target: "target mass",
        constraint: "constraint",
        valid: "push-forward keeps total target mass balanced"
      };

  setInteractiveHTML(
    block,
    `
      <div class="transport-widget" aria-label="Monge push-forward transport">
        <div class="transport-column">
          <strong>${labels.source}</strong>
          <span data-source="0">A: 0.40</span>
          <span data-source="1">B: 0.35</span>
          <span data-source="2">C: 0.25</span>
        </div>
        <svg class="transport-arrows" viewBox="0 0 320 210" aria-hidden="true">
          <path class="transport-path path-a" d="M12,42 C110,30 208,34 306,46"></path>
          <path class="transport-path path-b1" d="M12,104 C116,86 204,78 306,82"></path>
          <path class="transport-path path-b2" d="M12,104 C116,118 204,140 306,150"></path>
          <path class="transport-path path-c" d="M12,166 C116,174 208,166 306,154"></path>
        </svg>
        <div class="transport-column transport-targets">
          <strong>${labels.target}</strong>
          <span data-target="0">U: <b>0.40</b></span>
          <span data-target="1">V: <b>0.35</b></span>
          <span data-target="2">W: <b>0.25</b></span>
        </div>
      </div>
      <p class="interactive-readout transport-readout"></p>
    `,
    `
      <label>
        <span>${labels.split}</span>
        <input class="transport-split-input" type="range" min="0" max="1" step="0.05" value="0">
      </label>
    `
  );

  const input = block.querySelector(".transport-split-input");
  const readout = block.querySelector(".transport-readout");
  const pathB1 = block.querySelector(".path-b1");
  const pathB2 = block.querySelector(".path-b2");
  const targetNodes = block.querySelectorAll("[data-target] b");

  const update = () => {
    const split = Number(input.value);
    const toV = 0.35 * (1 - split);
    const toW = 0.25 + 0.35 * split;
    pathB1.style.strokeWidth = String(4 + 10 * (1 - split));
    pathB1.style.opacity = String(0.3 + 0.7 * (1 - split));
    pathB2.style.strokeWidth = String(4 + 10 * split);
    pathB2.style.opacity = String(0.2 + 0.8 * split);
    targetNodes[0].textContent = "0.40";
    targetNodes[1].textContent = toV.toFixed(2);
    targetNodes[2].textContent = toW.toFixed(2);
    readout.textContent = `${split === 0 ? labels.monge : labels.kantorovich}; ${labels.constraint}: ${labels.valid}.`;
  };

  input.addEventListener("input", update);
  update();
}

function mountParallelSpeedup(block) {
  const labels = currentLang === "zh"
    ? {
        processors: "processors",
        serial: "serial fraction",
        speedup: "speedup",
        efficiency: "efficiency",
        note: "communication and serial work cap the benefit of more processors"
      }
    : {
        processors: "processors",
        serial: "serial fraction",
        speedup: "speedup",
        efficiency: "efficiency",
        note: "communication and serial work cap the benefit of more processors"
      };

  setInteractiveHTML(
    block,
    `
      <div class="speedup-widget" aria-label="Parallel speedup model">
        <div class="speedup-meter">
          <span class="serial-slice"></span>
          <span class="parallel-slice"></span>
          <span class="wait-slice"></span>
        </div>
        <div class="speedup-stats">
          <strong class="speedup-value"></strong>
          <span class="efficiency-value"></span>
        </div>
      </div>
      <p class="interactive-readout speedup-readout"></p>
    `,
    `
      <label>
        <span>${labels.processors}</span>
        <input class="speedup-processor-input" type="range" min="1" max="64" value="8">
      </label>
      <label>
        <span>${labels.serial}</span>
        <input class="speedup-serial-input" type="range" min="0" max="0.5" step="0.01" value="0.12">
      </label>
    `
  );

  const processorsInput = block.querySelector(".speedup-processor-input");
  const serialInput = block.querySelector(".speedup-serial-input");
  const speedupValue = block.querySelector(".speedup-value");
  const efficiencyValue = block.querySelector(".efficiency-value");
  const readout = block.querySelector(".speedup-readout");
  const serialSlice = block.querySelector(".serial-slice");
  const parallelSlice = block.querySelector(".parallel-slice");
  const waitSlice = block.querySelector(".wait-slice");

  const update = () => {
    const processors = Number(processorsInput.value);
    const serial = Number(serialInput.value);
    const parallel = 1 - serial;
    const speedup = 1 / (serial + parallel / processors);
    const efficiency = speedup / processors;
    const serialWidth = Math.max(4, serial * 100);
    const parallelWidth = Math.max(4, (parallel / processors) * 100);
    const waitWidth = Math.max(0, 100 - serialWidth - parallelWidth);
    serialSlice.style.width = `${serialWidth}%`;
    parallelSlice.style.width = `${parallelWidth}%`;
    waitSlice.style.width = `${waitWidth}%`;
    speedupValue.textContent = `${labels.speedup}: ${speedup.toFixed(2)}x`;
    efficiencyValue.textContent = `${labels.efficiency}: ${(efficiency * 100).toFixed(1)}%`;
    readout.textContent = `S(p)=1/(s+(1-s)/p), p=${processors}, s=${serial.toFixed(2)}; ${labels.note}.`;
  };

  processorsInput.addEventListener("input", update);
  serialInput.addEventListener("input", update);
  update();
}

function mountParallelCacheSIMD(block) {
  const labels = currentLang === "zh"
    ? {
        stride: "memory stride",
        lanes: "SIMD lanes",
        hits: "cache hits",
        misses: "cache misses",
        batches: "instruction batches",
        line: "cache line",
        note: "连续访问利用 spatial locality；SIMD 让一条 instruction stream 同时喂多个 ALU lanes。"
      }
    : {
        stride: "memory stride",
        lanes: "SIMD lanes",
        hits: "cache hits",
        misses: "cache misses",
        batches: "instruction batches",
        line: "cache line",
        note: "Contiguous access uses spatial locality; SIMD lets one instruction stream feed several ALU lanes."
      };

  setInteractiveHTML(
    block,
    `
      <div class="parallel-cache-widget" aria-label="Cache locality and SIMD lanes">
        <div class="parallel-memory-row"></div>
        <div class="parallel-simd-row"></div>
        <div class="parallel-cache-stats">
          <span class="parallel-cache-hit-stat"></span>
          <span class="parallel-cache-miss-stat"></span>
          <span class="parallel-simd-stat"></span>
        </div>
      </div>
      <p class="interactive-readout parallel-cache-readout"></p>
    `,
    `
      <label>
        <span>${labels.stride}</span>
        <input class="parallel-cache-stride" type="range" min="1" max="5" step="1" value="1">
      </label>
      <label>
        <span>${labels.lanes}</span>
        <input class="parallel-cache-lanes" type="range" min="1" max="8" step="1" value="4">
      </label>
    `
  );

  const strideInput = block.querySelector(".parallel-cache-stride");
  const lanesInput = block.querySelector(".parallel-cache-lanes");
  const memoryRow = block.querySelector(".parallel-memory-row");
  const simdRow = block.querySelector(".parallel-simd-row");
  const hitStat = block.querySelector(".parallel-cache-hit-stat");
  const missStat = block.querySelector(".parallel-cache-miss-stat");
  const simdStat = block.querySelector(".parallel-simd-stat");
  const readout = block.querySelector(".parallel-cache-readout");
  const memoryCells = 24;
  const cacheLineSize = 4;

  const update = () => {
    const stride = Number(strideInput.value);
    const lanes = Number(lanesInput.value);
    const touched = Array.from({ length: 8 }, (_, index) => index * stride).filter((index) => index < memoryCells);
    const loadedLines = new Set();
    let hits = 0;
    let misses = 0;

    touched.forEach((index) => {
      const line = Math.floor(index / cacheLineSize);
      if (loadedLines.has(line)) {
        hits += 1;
      } else {
        misses += 1;
        loadedLines.add(line);
      }
    });

    memoryRow.innerHTML = Array.from({ length: memoryCells }, (_, index) => {
      const isTouched = touched.includes(index);
      const line = Math.floor(index / cacheLineSize);
      const isLoaded = loadedLines.has(line);
      return `<span class="${isTouched ? "active-memory-cell" : ""} ${isLoaded ? "loaded-cache-line" : ""}">${index}</span>`;
    }).join("");

    simdRow.innerHTML = Array.from({ length: 8 }, (_, index) => {
      const active = index < lanes;
      return `<span class="${active ? "active-simd-lane" : ""}"><b>lane ${index}</b><em>${active ? "ALU" : "idle"}</em></span>`;
    }).join("");

    const batches = Math.ceil(touched.length / lanes);
    hitStat.innerHTML = `<b>${labels.hits}</b><em>${hits}</em>`;
    missStat.innerHTML = `<b>${labels.misses}</b><em>${misses}</em>`;
    simdStat.innerHTML = `<b>${labels.batches}</b><em>${batches}</em>`;
    readout.textContent = `${labels.line}=4 elements, stride=${stride}, lanes=${lanes}. ${labels.note}`;
  };

  strideInput.addEventListener("input", update);
  lanesInput.addEventListener("input", update);
  update();
}

function mountArchitectureThroughputCalculator(block) {
  const labels = currentLang === "zh"
    ? {
        cores: "cores",
        lanes: "SIMD lanes/core",
        threads: "hardware threads/core",
        coherence: "coherent work",
        peak: "peak ALU slots",
        useful: "useful slots",
        utilization: "estimated utilization",
        note:
          "硬件线程不增加 ALU 数量；它们在 memory stalls 出现时提高利用率。SIMD lanes 只有在 instruction stream coherent 时才接近满载。"
      }
    : {
        cores: "cores",
        lanes: "SIMD lanes/core",
        threads: "hardware threads/core",
        coherence: "coherent work",
        peak: "peak ALU slots",
        useful: "useful slots",
        utilization: "estimated utilization",
        note:
          "Hardware threads do not add ALUs; they improve utilization during memory stalls. SIMD lanes approach peak only when instruction streams stay coherent."
      };

  setInteractiveHTML(
    block,
    `
      <div class="arch-throughput-widget" aria-label="Architecture throughput model">
        <div class="arch-core-grid"></div>
        <div class="arch-throughput-stats">
          <span><b>${labels.peak}</b><em class="arch-peak-value"></em></span>
          <span><b>${labels.useful}</b><em class="arch-useful-value"></em></span>
          <span><b>${labels.utilization}</b><em class="arch-util-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout arch-throughput-readout"></p>
    `,
    `
      <label>
        <span>${labels.cores}</span>
        <input class="arch-cores-input" type="range" min="1" max="32" step="1" value="8">
      </label>
      <label>
        <span>${labels.lanes}</span>
        <input class="arch-lanes-input" type="range" min="1" max="16" step="1" value="8">
      </label>
      <label>
        <span>${labels.threads}</span>
        <input class="arch-threads-input" type="range" min="1" max="8" step="1" value="4">
      </label>
      <label>
        <span>${labels.coherence}</span>
        <input class="arch-coherence-input" type="range" min="0.25" max="1" step="0.05" value="0.8">
      </label>
    `
  );

  const coresInput = block.querySelector(".arch-cores-input");
  const lanesInput = block.querySelector(".arch-lanes-input");
  const threadsInput = block.querySelector(".arch-threads-input");
  const coherenceInput = block.querySelector(".arch-coherence-input");
  const grid = block.querySelector(".arch-core-grid");
  const peakValue = block.querySelector(".arch-peak-value");
  const usefulValue = block.querySelector(".arch-useful-value");
  const utilValue = block.querySelector(".arch-util-value");
  const readout = block.querySelector(".arch-throughput-readout");

  const update = () => {
    const cores = Number(coresInput.value);
    const lanes = Number(lanesInput.value);
    const threads = Number(threadsInput.value);
    const coherence = Number(coherenceInput.value);
    const latencyUtilization = Math.min(1, 0.35 + threads * 0.13);
    const useful = cores * lanes * coherence * latencyUtilization;
    const peak = cores * lanes;
    const shownCores = Math.min(cores, 16);
    const shownLanes = Math.min(lanes, 8);

    grid.innerHTML = Array.from({ length: shownCores }, (_, coreIndex) => {
      const laneMarkup = Array.from({ length: shownLanes }, (_, laneIndex) => {
        const active = laneIndex / shownLanes < coherence && coreIndex / shownCores < latencyUtilization;
        return `<i class="${active ? "active-arch-lane" : ""}"></i>`;
      }).join("");
      return `<span><b>core ${coreIndex}</b><em>${threads} ctx</em><small>${laneMarkup}</small></span>`;
    }).join("");

    peakValue.textContent = `${peak.toFixed(0)} / cycle`;
    usefulValue.textContent = `${useful.toFixed(1)} / cycle`;
    utilValue.textContent = `${((useful / peak) * 100).toFixed(0)}%`;
    readout.textContent = `${cores} cores x ${lanes} SIMD lanes gives ${peak} ALU slots per cycle before utilization. ${labels.note}`;
  };

  [coresInput, lanesInput, threadsInput, coherenceInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSIMDBranchMaskLab(block) {
  const labels = currentLang === "zh"
    ? {
        lanes: "lanes",
        thenLanes: "then-path lanes",
        elseCost: "else path cost",
        efficiency: "lane efficiency",
        useful: "useful lane-cycles",
        wasted: "masked lane-cycles",
        note:
          "Divergent branch 会让同一组 lanes 分批执行不同路径；不在当前路径的 lanes 被 mask 掉，所以峰值 ALU 数量没有消失，但 lane-cycles 被浪费。"
      }
    : {
        lanes: "lanes",
        thenLanes: "then-path lanes",
        elseCost: "else path cost",
        efficiency: "lane efficiency",
        useful: "useful lane-cycles",
        wasted: "masked lane-cycles",
        note:
          "A divergent branch makes one group of lanes run each path in sequence. Inactive lanes are masked, so peak ALUs still exist but lane-cycles are wasted."
      };

  setInteractiveHTML(
    block,
    `
      <div class="simd-mask-widget" aria-label="SIMD branch mask model">
        <div class="simd-mask-rows"></div>
        <div class="simd-mask-stats">
          <span><b>${labels.efficiency}</b><em class="simd-efficiency-value"></em></span>
          <span><b>${labels.useful}</b><em class="simd-useful-value"></em></span>
          <span><b>${labels.wasted}</b><em class="simd-wasted-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout simd-mask-readout"></p>
    `,
    `
      <label>
        <span>${labels.lanes}</span>
        <input class="simd-lanes-input" type="range" min="4" max="16" step="4" value="8">
      </label>
      <label>
        <span>${labels.thenLanes}</span>
        <input class="simd-then-input" type="range" min="1" max="7" step="1" value="5">
      </label>
      <label>
        <span>${labels.elseCost}</span>
        <input class="simd-else-cost-input" type="range" min="1" max="6" step="1" value="2">
      </label>
    `
  );

  const lanesInput = block.querySelector(".simd-lanes-input");
  const thenInput = block.querySelector(".simd-then-input");
  const elseCostInput = block.querySelector(".simd-else-cost-input");
  const rows = block.querySelector(".simd-mask-rows");
  const efficiencyValue = block.querySelector(".simd-efficiency-value");
  const usefulValue = block.querySelector(".simd-useful-value");
  const wastedValue = block.querySelector(".simd-wasted-value");
  const readout = block.querySelector(".simd-mask-readout");

  const renderLane = (index, active, label) => `<i class="${active ? "active-simd-mask-lane" : ""}"><b>${index}</b><em>${active ? label : "mask"}</em></i>`;

  const update = () => {
    const lanes = Number(lanesInput.value);
    thenInput.max = lanes - 1;
    if (Number(thenInput.value) >= lanes) {
      thenInput.value = lanes - 1;
    }
    const thenLanes = Number(thenInput.value);
    const elseLanes = lanes - thenLanes;
    const thenCost = 1;
    const elseCost = Number(elseCostInput.value);
    const useful = thenLanes * thenCost + elseLanes * elseCost;
    const total = lanes * (thenCost + elseCost);
    const wasted = total - useful;

    rows.innerHTML = `
      <div><strong>then</strong>${Array.from({ length: lanes }, (_, i) => renderLane(i, i < thenLanes, "on")).join("")}</div>
      <div><strong>else</strong>${Array.from({ length: lanes }, (_, i) => renderLane(i, i >= thenLanes, "on")).join("")}</div>
    `;
    efficiencyValue.textContent = `${((useful / total) * 100).toFixed(1)}%`;
    usefulValue.textContent = useful.toFixed(0);
    wastedValue.textContent = wasted.toFixed(0);
    readout.textContent = `${thenLanes}/${lanes} lanes take then, ${elseLanes}/${lanes} lanes take else, else cost=${elseCost}. ${labels.note}`;
  };

  [lanesInput, thenInput, elseCostInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountLatencyHidingThreadLab(block) {
  const labels = currentLang === "zh"
    ? {
        threads: "hardware threads",
        compute: "compute cycles",
        latency: "memory latency",
        needed: "threads for full use",
        utilization: "core utilization",
        exposed: "exposed stall",
        computeLabel: "compute",
        stallLabel: "stall",
        note:
          "如果每个 thread 做 \\(C\\) cycles 的 arithmetic 后等待 \\(L\\) cycles memory load，近似需要 \\(\\lceil(C+L)/C\\rceil\\) 个 ready threads 才能把 stall 填满。"
      }
    : {
        threads: "hardware threads",
        compute: "compute cycles",
        latency: "memory latency",
        needed: "threads for full use",
        utilization: "core utilization",
        exposed: "exposed stall",
        computeLabel: "compute",
        stallLabel: "stall",
        note:
          "If each thread performs \\(C\\) cycles of arithmetic and then waits \\(L\\) cycles on memory, roughly \\(\\lceil(C+L)/C\\rceil\\) ready threads are needed to fill the stall."
      };

  setInteractiveHTML(
    block,
    `
      <div class="latency-thread-widget" aria-label="Latency hiding with hardware threads">
        <div class="latency-thread-rows"></div>
        <div class="latency-thread-stats">
          <span><b>${labels.needed}</b><em class="latency-needed-value"></em></span>
          <span><b>${labels.utilization}</b><em class="latency-util-value"></em></span>
          <span><b>${labels.exposed}</b><em class="latency-stall-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout latency-thread-readout"></p>
    `,
    `
      <label>
        <span>${labels.threads}</span>
        <input class="latency-threads-input" type="range" min="1" max="16" step="1" value="5">
      </label>
      <label>
        <span>${labels.compute}</span>
        <input class="latency-compute-input" type="range" min="1" max="12" step="1" value="3">
      </label>
      <label>
        <span>${labels.latency}</span>
        <input class="latency-load-input" type="range" min="4" max="36" step="1" value="12">
      </label>
    `
  );

  const threadsInput = block.querySelector(".latency-threads-input");
  const computeInput = block.querySelector(".latency-compute-input");
  const loadInput = block.querySelector(".latency-load-input");
  const rows = block.querySelector(".latency-thread-rows");
  const neededValue = block.querySelector(".latency-needed-value");
  const utilValue = block.querySelector(".latency-util-value");
  const stallValue = block.querySelector(".latency-stall-value");
  const readout = block.querySelector(".latency-thread-readout");

  const update = () => {
    const threads = Number(threadsInput.value);
    const compute = Number(computeInput.value);
    const latency = Number(loadInput.value);
    const needed = Math.ceil((compute + latency) / compute);
    const utilization = Math.min(1, (threads * compute) / (compute + latency));
    const exposed = Math.max(0, compute + latency - threads * compute);
    const shownThreads = Math.min(threads, 10);

    rows.innerHTML = Array.from({ length: shownThreads }, (_, index) => {
      const offset = Math.min(65, index * 5);
      const computeWidth = Math.max(8, (compute / (compute + latency)) * 100);
      const stallWidth = 100 - computeWidth;
      return `
        <div>
          <b>T${index}</b>
          <span style="padding-left:${offset}px">
            <i class="latency-compute" style="width:${computeWidth}%">${labels.computeLabel}</i>
            <i class="latency-stall" style="width:${stallWidth}%">${labels.stallLabel}</i>
          </span>
        </div>
      `;
    }).join("");

    neededValue.textContent = needed;
    utilValue.textContent = `${(utilization * 100).toFixed(1)}%`;
    stallValue.textContent = `${exposed} cycles`;
    readout.textContent = `C=${compute}, L=${latency}, threads=${threads}. ${labels.note}`;
  };

  [threadsInput, computeInput, loadInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountBandwidthLatencyPipeline(block) {
  const labels = currentLang === "zh"
    ? {
        latency: "memory latency (ns)",
        bandwidth: "bandwidth (GB/s)",
        request: "request size (bytes)",
        inflight: "needed in-flight requests",
        bytesPerNs: "bytes/ns",
        issueGap: "issue gap",
        note:
          "High bandwidth does not mean one request returns quickly. To keep a high-bandwidth memory system full, software or hardware needs enough independent requests in flight."
      }
    : {
        latency: "memory latency (ns)",
        bandwidth: "bandwidth (GB/s)",
        request: "request size (bytes)",
        inflight: "needed in-flight requests",
        bytesPerNs: "bytes/ns",
        issueGap: "issue gap",
        note:
          "High bandwidth does not mean one request returns quickly. To keep a high-bandwidth memory system full, software or hardware needs enough independent requests in flight."
      };

  setInteractiveHTML(
    block,
    `
      <div class="bandwidth-latency-widget" aria-label="Bandwidth latency pipeline model">
        <div class="bandwidth-road"></div>
        <div class="bandwidth-latency-stats">
          <span><b>${labels.inflight}</b><em class="bandwidth-inflight-value"></em></span>
          <span><b>${labels.bytesPerNs}</b><em class="bandwidth-rate-value"></em></span>
          <span><b>${labels.issueGap}</b><em class="bandwidth-gap-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout bandwidth-latency-readout"></p>
    `,
    `
      <label>
        <span>${labels.latency}</span>
        <input class="bandwidth-latency-input" type="range" min="40" max="500" step="10" value="240">
      </label>
      <label>
        <span>${labels.bandwidth}</span>
        <input class="bandwidth-rate-input" type="range" min="20" max="900" step="20" value="300">
      </label>
      <label>
        <span>${labels.request}</span>
        <input class="bandwidth-request-input" type="range" min="32" max="256" step="32" value="64">
      </label>
    `
  );

  const latencyInput = block.querySelector(".bandwidth-latency-input");
  const rateInput = block.querySelector(".bandwidth-rate-input");
  const requestInput = block.querySelector(".bandwidth-request-input");
  const road = block.querySelector(".bandwidth-road");
  const inflightValue = block.querySelector(".bandwidth-inflight-value");
  const rateValue = block.querySelector(".bandwidth-rate-value");
  const gapValue = block.querySelector(".bandwidth-gap-value");
  const readout = block.querySelector(".bandwidth-latency-readout");

  const update = () => {
    const latency = Number(latencyInput.value);
    const bandwidth = Number(rateInput.value);
    const request = Number(requestInput.value);
    const bytesPerNs = bandwidth;
    const issueGap = request / bytesPerNs;
    const inFlight = Math.ceil(latency / issueGap);
    const shown = Math.min(28, Math.max(4, Math.round(inFlight / 8)));

    road.innerHTML = Array.from({ length: 28 }, (_, index) => {
      const active = index < shown;
      return `<span class="${active ? "active-bandwidth-request" : ""}"><b>${index + 1}</b></span>`;
    }).join("");
    inflightValue.textContent = inFlight.toLocaleString();
    rateValue.textContent = bytesPerNs.toFixed(0);
    gapValue.textContent = `${issueGap.toFixed(2)} ns/request`;
    readout.textContent = `latency=${latency} ns, bandwidth=${bandwidth} GB/s, request=${request} bytes. ${labels.note}`;
  };

  [latencyInput, rateInput, requestInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountISPCAssignmentMap(block) {
  const labels = currentLang === "zh"
    ? {
        count: "programCount",
        elements: "elements",
        mode: "assignment",
        interleaved: "interleaved",
        blocked: "blocked",
        locality: "memory locality",
        balance: "load balance",
        stride: "effective stride",
        note:
          "Interleaved assignment gives each instance a strided sequence. Blocked assignment gives each instance a contiguous chunk, which often improves memory locality."
      }
    : {
        count: "programCount",
        elements: "elements",
        mode: "assignment",
        interleaved: "interleaved",
        blocked: "blocked",
        locality: "memory locality",
        balance: "load balance",
        stride: "effective stride",
        note:
          "Interleaved assignment gives each instance a strided sequence. Blocked assignment gives each instance a contiguous chunk, which often improves memory locality."
      };

  setInteractiveHTML(
    block,
    `
      <div class="ispc-assignment-widget" aria-label="ISPC assignment map">
        <div class="ispc-instance-grid"></div>
        <div class="ispc-assignment-stats">
          <span><b>${labels.locality}</b><em class="ispc-locality-value"></em></span>
          <span><b>${labels.balance}</b><em class="ispc-balance-value"></em></span>
          <span><b>${labels.stride}</b><em class="ispc-stride-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout ispc-assignment-readout"></p>
    `,
    `
      <label>
        <span>${labels.count}</span>
        <input class="ispc-count-input" type="range" min="4" max="16" step="4" value="8">
      </label>
      <label>
        <span>${labels.elements}</span>
        <input class="ispc-elements-input" type="range" min="16" max="96" step="8" value="48">
      </label>
      <label>
        <span>${labels.mode}</span>
        <select class="ispc-mode-input">
          <option value="interleaved">${labels.interleaved}</option>
          <option value="blocked">${labels.blocked}</option>
        </select>
      </label>
    `
  );

  const countInput = block.querySelector(".ispc-count-input");
  const elementsInput = block.querySelector(".ispc-elements-input");
  const modeInput = block.querySelector(".ispc-mode-input");
  const grid = block.querySelector(".ispc-instance-grid");
  const localityValue = block.querySelector(".ispc-locality-value");
  const balanceValue = block.querySelector(".ispc-balance-value");
  const strideValue = block.querySelector(".ispc-stride-value");
  const readout = block.querySelector(".ispc-assignment-readout");

  const update = () => {
    const count = Number(countInput.value);
    const elements = Number(elementsInput.value);
    const mode = modeInput.value;
    const assignments = Array.from({ length: count }, (_, instance) => {
      if (mode === "blocked") {
        const start = Math.floor((elements * instance) / count);
        const end = Math.floor((elements * (instance + 1)) / count);
        return Array.from({ length: end - start }, (_, offset) => start + offset);
      }
      return Array.from({ length: Math.ceil((elements - instance) / count) }, (_, k) => instance + k * count).filter((value) => value < elements);
    });
    const lengths = assignments.map((items) => items.length);
    const maxLen = Math.max(...lengths);
    const minLen = Math.min(...lengths);
    const locality = mode === "blocked" ? 95 : Math.max(15, 100 - count * 5);
    const stride = mode === "blocked" ? 1 : count;

    grid.innerHTML = assignments.map((items, instance) => `
      <div>
        <b>programIndex ${instance}</b>
        <span>${items.slice(0, 12).map((item) => `<i>${item}</i>`).join("")}${items.length > 12 ? "<em>...</em>" : ""}</span>
      </div>
    `).join("");
    localityValue.textContent = `${locality}%`;
    balanceValue.textContent = `${minLen}-${maxLen} items`;
    strideValue.textContent = stride;
    readout.textContent = `${mode}, programCount=${count}, N=${elements}. ${labels.note}`;
  };

  [countInput, elementsInput].forEach((input) => input.addEventListener("input", update));
  modeInput.addEventListener("change", update);
  update();
}

function mountSPMDReductionLab(block) {
  const labels = currentLang === "zh"
    ? {
        lanes: "programCount",
        op: "operation",
        step: "reduction step",
        result: "result",
        active: "active lanes",
        communication: "cross-instance ops",
        note:
          "SPMD 的每个 program instance 有自己的 private value。要做 sum/min/product，不能让所有 lanes 写同一个 scalar；需要 gang 内的 cross-instance reduction。"
      }
    : {
        lanes: "programCount",
        op: "operation",
        step: "reduction step",
        result: "result",
        active: "active lanes",
        communication: "cross-instance ops",
        note:
          "Each SPMD program instance has its own private value. Sum, min, and product should not be implemented by all lanes writing one scalar; they need a cross-instance reduction inside the gang."
      };

  setInteractiveHTML(
    block,
    `
      <div class="spmd-reduction-widget" aria-label="SPMD reduction model">
        <div class="spmd-reduction-row"></div>
        <div class="spmd-reduction-stats">
          <span><b>${labels.result}</b><em class="spmd-result-value"></em></span>
          <span><b>${labels.active}</b><em class="spmd-active-value"></em></span>
          <span><b>${labels.communication}</b><em class="spmd-comm-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout spmd-reduction-readout"></p>
    `,
    `
      <label>
        <span>${labels.lanes}</span>
        <input class="spmd-lanes-input" type="range" min="4" max="16" step="4" value="8">
      </label>
      <label>
        <span>${labels.op}</span>
        <select class="spmd-op-input">
          <option value="sum">sum</option>
          <option value="product">product</option>
          <option value="min">min</option>
        </select>
      </label>
      <label>
        <span>${labels.step}</span>
        <input class="spmd-step-input" type="range" min="0" max="3" step="1" value="2">
      </label>
    `
  );

  const lanesInput = block.querySelector(".spmd-lanes-input");
  const opInput = block.querySelector(".spmd-op-input");
  const stepInput = block.querySelector(".spmd-step-input");
  const row = block.querySelector(".spmd-reduction-row");
  const resultValue = block.querySelector(".spmd-result-value");
  const activeValue = block.querySelector(".spmd-active-value");
  const commValue = block.querySelector(".spmd-comm-value");
  const readout = block.querySelector(".spmd-reduction-readout");

  const baseValues = [3, 1, 4, 2, 5, 2, 6, 1, 3, 2, 4, 1, 5, 3, 2, 4];
  const combine = (a, b, op) => {
    if (op === "product") return a * b;
    if (op === "min") return Math.min(a, b);
    return a + b;
  };

  const update = () => {
    const lanes = Number(lanesInput.value);
    const op = opInput.value;
    const maxStep = Math.ceil(Math.log2(lanes));
    stepInput.max = maxStep;
    if (Number(stepInput.value) > maxStep) {
      stepInput.value = maxStep;
    }
    const step = Number(stepInput.value);
    const values = baseValues.slice(0, lanes);
    const visible = values.slice();
    let active = lanes;
    let comm = 0;
    for (let s = 0; s < step; s += 1) {
      const stride = 2 ** s;
      for (let i = 0; i < lanes; i += stride * 2) {
        if (i + stride < lanes) {
          visible[i] = combine(visible[i], visible[i + stride], op);
          visible[i + stride] = null;
          comm += 1;
        }
      }
      active = Math.ceil(active / 2);
    }
    const final = values.reduce((acc, value) => combine(acc, value, op), op === "product" ? 1 : values[0]);
    const correctedFinal = op === "product" ? values.reduce((acc, value) => acc * value, 1) : op === "min" ? Math.min(...values) : values.reduce((acc, value) => acc + value, 0);

    row.innerHTML = visible.map((value, index) => `
      <span class="${value === null ? "inactive-spmd-lane" : "active-spmd-lane"}">
        <b>lane ${index}</b>
        <em>${value === null ? "sent" : value}</em>
      </span>
    `).join("");
    resultValue.textContent = step === maxStep ? correctedFinal : visible.find((value) => value !== null);
    activeValue.textContent = active;
    commValue.textContent = comm;
    readout.textContent = `${op}, lanes=${lanes}, step=${step}/${maxStep}. ${labels.note}`;
  };

  [lanesInput, stepInput].forEach((input) => input.addEventListener("input", update));
  opInput.addEventListener("change", update);
  update();
}

function mountDiffusionPipeline(block) {
  const labels = currentLang === "zh"
    ? {
        step: "denoising step",
        guidance: "text guidance",
        nodes: ["prompt tokens", "latent noise", "U-Net denoiser", "scheduler", "VAE decoder"],
        notes: [
          "Text becomes conditioning, not pixels.",
          "The model starts from noisy latent variables.",
          "U-Net predicts the noise or velocity to remove.",
          "The scheduler decides how far to move at this step.",
          "The decoder returns from latent space to image space."
        ]
      }
    : {
        step: "denoising step",
        guidance: "text guidance",
        nodes: ["prompt tokens", "latent noise", "U-Net denoiser", "scheduler", "VAE decoder"],
        notes: [
          "Text becomes conditioning, not pixels.",
          "The model starts from noisy latent variables.",
          "U-Net predicts the noise or velocity to remove.",
          "The scheduler decides how far to move at this step.",
          "The decoder returns from latent space to image space."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="diffusion-pipeline-widget" aria-label="Stable diffusion pipeline">
        ${labels.nodes.map((node, index) => `<span data-pipeline-node="${index}"><b>${node}</b><em></em></span>`).join("")}
      </div>
      <p class="interactive-readout diffusion-pipeline-readout"></p>
    `,
    `
      <label>
        <span>${labels.step}</span>
        <input class="diffusion-step-input" type="range" min="0" max="4" value="2">
      </label>
      <label>
        <span>${labels.guidance}</span>
        <input class="diffusion-guidance-input" type="range" min="0" max="12" step="0.5" value="7.5">
      </label>
    `
  );

  const stepInput = block.querySelector(".diffusion-step-input");
  const guidanceInput = block.querySelector(".diffusion-guidance-input");
  const readout = block.querySelector(".diffusion-pipeline-readout");
  const nodes = block.querySelectorAll("[data-pipeline-node]");

  const update = () => {
    const step = Number(stepInput.value);
    const guidance = Number(guidanceInput.value);
    nodes.forEach((node, index) => {
      node.classList.toggle("active-pipeline-node", index === step);
      node.querySelector("em").textContent = labels.notes[index];
    });
    readout.textContent = `${labels.nodes[step]}: ${labels.notes[step]} guidance scale ${guidance.toFixed(1)}.`;
  };

  stepInput.addEventListener("input", update);
  guidanceInput.addEventListener("input", update);
  update();
}

function mountQuantizationAffineMap(block) {
  const labels = currentLang === "zh"
    ? {
        mode: "mode",
        bits: "bits",
        range: "range alpha",
        scale: "scale",
        zero: "zero-point",
        error: "mean abs error",
        note: "Affine quantization stores a floating value as an integer code plus scale and optional zero-point."
      }
    : {
        mode: "mode",
        bits: "bits",
        range: "range alpha",
        scale: "scale",
        zero: "zero-point",
        error: "mean abs error",
        note: "Affine quantization stores a floating value as an integer code plus scale and optional zero-point."
      };

  setInteractiveHTML(
    block,
    `
      <div class="quant-affine-widget" aria-label="Affine quantization map">
        <div class="quant-affine-values"></div>
        <div class="quant-affine-stats">
          <span class="quant-affine-scale"></span>
          <span class="quant-affine-zero"></span>
          <span class="quant-affine-error"></span>
        </div>
      </div>
      <p class="interactive-readout quant-affine-readout"></p>
    `,
    `
      <label>
        <span>${labels.mode}</span>
        <select class="quant-affine-mode">
          <option value="asymmetric">asymmetric</option>
          <option value="symmetric">symmetric</option>
        </select>
      </label>
      <label>
        <span>${labels.bits}</span>
        <input class="quant-affine-bits" type="range" min="3" max="8" step="1" value="8">
      </label>
      <label>
        <span>${labels.range}</span>
        <input class="quant-affine-alpha" type="range" min="24" max="70" step="1" value="45">
      </label>
    `
  );

  const values = [43.31, -44.93, 0, 22.99, -43.93, -11.35, 38.48, -20.49];
  const modeInput = block.querySelector(".quant-affine-mode");
  const bitsInput = block.querySelector(".quant-affine-bits");
  const alphaInput = block.querySelector(".quant-affine-alpha");
  const valueEl = block.querySelector(".quant-affine-values");
  const scaleEl = block.querySelector(".quant-affine-scale");
  const zeroEl = block.querySelector(".quant-affine-zero");
  const errorEl = block.querySelector(".quant-affine-error");
  const readout = block.querySelector(".quant-affine-readout");

  const update = () => {
    const mode = modeInput.value;
    const bits = Number(bitsInput.value);
    const alpha = Number(alphaInput.value);
    const beta = -alpha;
    const qMax = mode === "asymmetric" ? (2 ** bits) - 1 : (2 ** (bits - 1)) - 1;
    const qMin = mode === "asymmetric" ? 0 : -qMax;
    const scale = mode === "asymmetric" ? (alpha - beta) / ((2 ** bits) - 1) : alpha / qMax;
    const zero = mode === "asymmetric" ? Math.round(-beta / scale) : 0;
    const rows = values.map((value) => {
      const raw = mode === "asymmetric" ? Math.round(value / scale) + zero : Math.round(value / scale);
      const q = Math.max(qMin, Math.min(qMax, raw));
      const reconstructed = mode === "asymmetric" ? scale * (q - zero) : scale * q;
      return { value, q, reconstructed, error: Math.abs(value - reconstructed) };
    });
    const mae = rows.reduce((sum, row) => sum + row.error, 0) / rows.length;
    valueEl.innerHTML = rows.map((row) => `
      <span>
        <b>${row.value.toFixed(2)}</b>
        <em>q=${row.q}</em>
        <i>${row.reconstructed.toFixed(2)}</i>
      </span>
    `).join("");
    scaleEl.innerHTML = `<b>${labels.scale}</b><em>${scale.toFixed(4)}</em>`;
    zeroEl.innerHTML = `<b>${labels.zero}</b><em>${zero}</em>`;
    errorEl.innerHTML = `<b>${labels.error}</b><em>${mae.toFixed(3)}</em>`;
    readout.textContent = `${mode}, ${bits}-bit, range=[${beta}, ${alpha}], s=${scale.toFixed(4)}, z=${zero}. ${labels.note}`;
  };

  [modeInput, bitsInput, alphaInput].forEach((input) => input.addEventListener("input", update));
  modeInput.addEventListener("change", update);
  update();
}

function mountQuantizationRangeCalibration(block) {
  const labels = currentLang === "zh"
    ? {
        outlier: "outlier value",
        minmax: "min-max MAE",
        percentile: "percentile MAE",
        clipping: "clipped outlier",
        note: "A wider range protects outliers but gives typical values fewer integer levels."
      }
    : {
        outlier: "outlier value",
        minmax: "min-max MAE",
        percentile: "percentile MAE",
        clipping: "clipped outlier",
        note: "A wider range protects outliers but gives typical values fewer integer levels."
      };

  setInteractiveHTML(
    block,
    `
      <div class="quant-range-widget" aria-label="Quantization range calibration">
        <div class="quant-range-bars">
          <span class="quant-minmax-bar"><b>${labels.minmax}</b><em></em></span>
          <span class="quant-percentile-bar"><b>${labels.percentile}</b><em></em></span>
        </div>
        <div class="quant-range-stats">
          <span class="quant-range-minmax"></span>
          <span class="quant-range-percentile"></span>
          <span class="quant-range-clipped"></span>
        </div>
      </div>
      <p class="interactive-readout quant-range-readout"></p>
    `,
    `
      <label>
        <span>${labels.outlier}</span>
        <input class="quant-range-outlier" type="range" min="50" max="1000" step="10" value="500">
      </label>
    `
  );

  const baseValues = [43.31, -44.93, 0, 22.99, -43.93, -11.35, 38.48, -20.49, -38.61, -28.02];
  const input = block.querySelector(".quant-range-outlier");
  const minmaxBar = block.querySelector(".quant-minmax-bar em");
  const percentileBar = block.querySelector(".quant-percentile-bar em");
  const minmaxStat = block.querySelector(".quant-range-minmax");
  const percentileStat = block.querySelector(".quant-range-percentile");
  const clippedStat = block.querySelector(".quant-range-clipped");
  const readout = block.querySelector(".quant-range-readout");

  const quantizeSym = (values, alpha) => {
    const qMax = 127;
    const scale = alpha / qMax;
    return values.map((value) => {
      const q = Math.max(-qMax, Math.min(qMax, Math.round(value / scale)));
      return scale * q;
    });
  };

  const meanAbsError = (original, reconstructed, skipLast = false) => {
    const end = skipLast ? original.length - 1 : original.length;
    return original.slice(0, end).reduce((sum, value, index) => sum + Math.abs(value - reconstructed[index]), 0) / end;
  };

  const update = () => {
    const outlier = Number(input.value);
    const values = [...baseValues, outlier];
    const minmaxAlpha = Math.max(...values.map((value) => Math.abs(value)));
    const percentileAlpha = 50;
    const minmaxRecon = quantizeSym(values, minmaxAlpha);
    const percentileRecon = quantizeSym(values, percentileAlpha);
    const minmaxMAE = meanAbsError(values, minmaxRecon, true);
    const percentileMAE = meanAbsError(values, percentileRecon, true);
    const clipped = Math.max(0, outlier - percentileAlpha);
    const maxError = Math.max(minmaxMAE, percentileMAE, 1);
    minmaxBar.style.width = `${Math.max(6, (minmaxMAE / maxError) * 100)}%`;
    percentileBar.style.width = `${Math.max(6, (percentileMAE / maxError) * 100)}%`;
    minmaxStat.innerHTML = `<b>${labels.minmax}</b><em>${minmaxMAE.toFixed(3)}</em>`;
    percentileStat.innerHTML = `<b>${labels.percentile}</b><em>${percentileMAE.toFixed(3)}</em>`;
    clippedStat.innerHTML = `<b>${labels.clipping}</b><em>${clipped.toFixed(1)}</em>`;
    readout.textContent = `outlier=${outlier.toFixed(0)}, min-max alpha=${minmaxAlpha.toFixed(0)}, percentile alpha=${percentileAlpha}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountQuantizationSTELab(block) {
  const labels = currentLang === "zh"
    ? {
        value: "input x",
        alpha: "clip alpha",
        quantized: "fake quant value",
        gradient: "STE gradient",
        note: "The forward pass is staircase-like; the backward pass uses a simple surrogate gradient inside the clipping range."
      }
    : {
        value: "input x",
        alpha: "clip alpha",
        quantized: "fake quant value",
        gradient: "STE gradient",
        note: "The forward pass is staircase-like; the backward pass uses a simple surrogate gradient inside the clipping range."
      };

  setInteractiveHTML(
    block,
    `
      <div class="quant-ste-widget" aria-label="Straight-through estimator for fake quantization">
        <svg class="quant-ste-svg" viewBox="0 0 580 300" aria-hidden="true">
          <line x1="58" y1="240" x2="526" y2="240" class="axis-line"></line>
          <line x1="292" y1="264" x2="292" y2="42" class="axis-line"></line>
          <path class="quant-ste-stair"></path>
          <line class="quant-ste-clip-left"></line>
          <line class="quant-ste-clip-right"></line>
          <circle class="quant-ste-point" r="9"></circle>
          <text x="498" y="268" class="svg-label">x</text>
          <text x="302" y="52" class="svg-label">q(x)</text>
        </svg>
        <div class="quant-ste-stats">
          <span class="quant-ste-value"></span>
          <span class="quant-ste-gradient"></span>
        </div>
      </div>
      <p class="interactive-readout quant-ste-readout"></p>
    `,
    `
      <label>
        <span>${labels.value}</span>
        <input class="quant-ste-x-input" type="range" min="-2" max="2" step="0.02" value="0.45">
      </label>
      <label>
        <span>${labels.alpha}</span>
        <input class="quant-ste-alpha-input" type="range" min="0.4" max="1.8" step="0.05" value="1">
      </label>
    `
  );

  const xInput = block.querySelector(".quant-ste-x-input");
  const alphaInput = block.querySelector(".quant-ste-alpha-input");
  const stair = block.querySelector(".quant-ste-stair");
  const clipLeft = block.querySelector(".quant-ste-clip-left");
  const clipRight = block.querySelector(".quant-ste-clip-right");
  const point = block.querySelector(".quant-ste-point");
  const valueStat = block.querySelector(".quant-ste-value");
  const gradientStat = block.querySelector(".quant-ste-gradient");
  const readout = block.querySelector(".quant-ste-readout");
  const qMax = 7;
  const toX = (x) => 292 + x * 108;
  const toY = (y) => 240 - y * 82;

  const fakeQuant = (x, alpha) => {
    const scale = alpha / qMax;
    const q = Math.max(-qMax, Math.min(qMax, Math.round(x / scale)));
    return q * scale;
  };

  const update = () => {
    const x = Number(xInput.value);
    const alpha = Number(alphaInput.value);
    const y = fakeQuant(x, alpha);
    const gradient = x >= -alpha && x <= alpha ? 1 : 0;
    const samples = Array.from({ length: 121 }, (_, index) => -2 + (index / 120) * 4);
    stair.setAttribute("d", samples.map((sample, index) => `${index === 0 ? "M" : "L"}${toX(sample).toFixed(1)},${toY(fakeQuant(sample, alpha)).toFixed(1)}`).join(" "));
    clipLeft.setAttribute("x1", toX(-alpha));
    clipLeft.setAttribute("x2", toX(-alpha));
    clipLeft.setAttribute("y1", 48);
    clipLeft.setAttribute("y2", 254);
    clipRight.setAttribute("x1", toX(alpha));
    clipRight.setAttribute("x2", toX(alpha));
    clipRight.setAttribute("y1", 48);
    clipRight.setAttribute("y2", 254);
    point.setAttribute("cx", toX(x));
    point.setAttribute("cy", toY(y));
    valueStat.innerHTML = `<b>${labels.quantized}</b><em>${y.toFixed(3)}</em>`;
    gradientStat.innerHTML = `<b>${labels.gradient}</b><em>${gradient}</em>`;
    readout.textContent = `x=${x.toFixed(2)}, alpha=${alpha.toFixed(2)}, q(x)=${y.toFixed(3)}, STE gradient=${gradient}. ${labels.note}`;
  };

  xInput.addEventListener("input", update);
  alphaInput.addEventListener("input", update);
  update();
}

function mountRLExperienceLoop(block) {
  const labels = currentLang === "zh"
    ? {
        trial: "experience step",
        epsilon: "exploration",
        states: ["observe state", "choose action", "receive reward", "update value"],
        notes: [
          "The agent does not get labels. It sees a state.",
          "The policy turns current values into an action.",
          "Reward is delayed feedback from the environment.",
          "The value estimate changes after experience."
        ]
      }
    : {
        trial: "experience step",
        epsilon: "exploration",
        states: ["observe state", "choose action", "receive reward", "update value"],
        notes: [
          "The agent does not get labels. It sees a state.",
          "The policy turns current values into an action.",
          "Reward is delayed feedback from the environment.",
          "The value estimate changes after experience."
        ]
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-loop-widget" aria-label="Reinforcement learning experience loop">
        ${labels.states.map((state, index) => `<span data-rl-stage="${index}"><b>${state}</b><em>${labels.notes[index]}</em></span>`).join("")}
      </div>
      <p class="interactive-readout rl-loop-readout"></p>
    `,
    `
      <label>
        <span>${labels.trial}</span>
        <input class="rl-trial-input" type="range" min="0" max="3" value="1">
      </label>
      <label>
        <span>${labels.epsilon}</span>
        <input class="rl-epsilon-input" type="range" min="0" max="1" step="0.05" value="0.2">
      </label>
    `
  );

  const trialInput = block.querySelector(".rl-trial-input");
  const epsilonInput = block.querySelector(".rl-epsilon-input");
  const stages = block.querySelectorAll("[data-rl-stage]");
  const readout = block.querySelector(".rl-loop-readout");

  const update = () => {
    const trial = Number(trialInput.value);
    const epsilon = Number(epsilonInput.value);
    stages.forEach((stage, index) => {
      stage.classList.toggle("active-rl-stage", index === trial);
    });
    const action = epsilon > 0.5 ? "explore" : "exploit";
    const reward = trial >= 2 ? 1 : 0;
    readout.textContent = `${labels.states[trial]}: ${labels.notes[trial]} policy=${action}, reward=${reward}, epsilon=${epsilon.toFixed(2)}.`;
  };

  trialInput.addEventListener("input", update);
  epsilonInput.addEventListener("input", update);
  update();
}

function mountImitationDistributionShift(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "horizon T",
        error: "mistake rate epsilon",
        recovery: "recovery",
        supervised: "i.i.d. error",
        compounding: "BC compounding cost",
        visited: "visited off-expert states",
        note:
          "Behavioral cloning 的小错误会把 agent 推到 expert demonstrations 之外；recovery 越强，distribution shift 累积越慢。"
      }
    : {
        horizon: "horizon T",
        error: "mistake rate epsilon",
        recovery: "recovery",
        supervised: "i.i.d. error",
        compounding: "BC compounding cost",
        visited: "visited off-expert states",
        note:
          "Small behavioral-cloning errors push the agent outside expert demonstrations; stronger recovery slows the distribution shift."
      };

  setInteractiveHTML(
    block,
    `
      <div class="imitation-shift-widget" aria-label="Behavioral cloning distribution shift">
        <svg class="interactive-svg imitation-shift-svg" viewBox="0 0 720 340" aria-hidden="true">
          <line x1="76" y1="286" x2="660" y2="286" class="axis-line"></line>
          <line x1="76" y1="286" x2="76" y2="54" class="axis-line"></line>
          <path class="imitation-expert-path"></path>
          <path class="imitation-policy-path"></path>
          <g class="imitation-shift-points"></g>
          <text x="604" y="314" class="svg-label">time</text>
          <text x="86" y="62" class="svg-label">state deviation</text>
        </svg>
        <div class="imitation-shift-stats">
          <span><b>${labels.supervised}</b><em class="imitation-iid-value"></em></span>
          <span><b>${labels.compounding}</b><em class="imitation-compound-value"></em></span>
          <span><b>${labels.visited}</b><em class="imitation-visited-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout imitation-shift-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="imitation-horizon-input" type="range" min="5" max="60" step="1" value="30">
      </label>
      <label>
        <span>${labels.error}</span>
        <input class="imitation-error-input" type="range" min="0" max="0.25" step="0.01" value="0.08">
      </label>
      <label>
        <span>${labels.recovery}</span>
        <input class="imitation-recovery-input" type="range" min="0" max="0.9" step="0.05" value="0.25">
      </label>
    `
  );

  const horizonInput = block.querySelector(".imitation-horizon-input");
  const errorInput = block.querySelector(".imitation-error-input");
  const recoveryInput = block.querySelector(".imitation-recovery-input");
  const expertPath = block.querySelector(".imitation-expert-path");
  const policyPath = block.querySelector(".imitation-policy-path");
  const points = block.querySelector(".imitation-shift-points");
  const iidValue = block.querySelector(".imitation-iid-value");
  const compoundValue = block.querySelector(".imitation-compound-value");
  const visitedValue = block.querySelector(".imitation-visited-value");
  const readout = block.querySelector(".imitation-shift-readout");

  const toX = (t, horizon) => 76 + (t / horizon) * 560;
  const toY = (d) => 286 - Math.min(1, d) * 210;

  const update = () => {
    const horizon = Number(horizonInput.value);
    const epsilon = Number(errorInput.value);
    const recovery = Number(recoveryInput.value);
    let deviation = 0;
    const samples = Array.from({ length: horizon + 1 }, (_, t) => {
      deviation = Math.max(0, deviation * (1 - recovery) + epsilon * (1 + t / horizon));
      return { t, deviation: Math.min(1, deviation) };
    });
    const expert = samples.map(({ t }) => `${toX(t, horizon)},${toY(0.08 + 0.03 * Math.sin(t / 3))}`).join(" ");
    const policy = samples.map(({ t, deviation: d }) => `${toX(t, horizon)},${toY(d)}`).join(" ");
    const iid = horizon * epsilon;
    const compound = samples.reduce((sum, item) => sum + item.deviation, 0);
    const offExpert = samples.filter((item) => item.deviation > 0.35).length;

    expertPath.setAttribute("d", `M${expert}`);
    policyPath.setAttribute("d", `M${policy}`);
    points.innerHTML = samples.filter((_, index) => index % Math.max(1, Math.floor(horizon / 10)) === 0).map(({ t, deviation: d }) => `
      <circle cx="${toX(t, horizon)}" cy="${toY(d)}" r="5" class="${d > 0.35 ? "off-expert-point" : "on-expert-point"}"></circle>
    `).join("");
    iidValue.textContent = iid.toFixed(2);
    compoundValue.textContent = compound.toFixed(2);
    visitedValue.textContent = offExpert;
    readout.textContent = `T=${horizon}, epsilon=${epsilon.toFixed(2)}, recovery=${recovery.toFixed(2)}. ${labels.note}`;
  };

  [horizonInput, errorInput, recoveryInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountImitationActionModes(block) {
  const labels = currentLang === "zh"
    ? {
        left: "left mode weight",
        variance: "mode variance",
        model: "model family",
        mean: "single Gaussian mean",
        mixture: "mixture density",
        entropy: "action entropy",
        note:
          "Multimodal expert behavior 会让 single Gaussian 预测到两个合理动作之间的平均动作；mixture、latent variable、diffusion 或 autoregressive policies 可以保留多个 modes。"
      }
    : {
        left: "left mode weight",
        variance: "mode variance",
        model: "model family",
        mean: "single Gaussian mean",
        mixture: "mixture density",
        entropy: "action entropy",
        note:
          "Multimodal expert behavior can make a single Gaussian predict the average between two good actions; mixture, latent-variable, diffusion, or autoregressive policies can preserve multiple modes."
      };

  setInteractiveHTML(
    block,
    `
      <div class="imitation-modes-widget" aria-label="Multimodal action distribution">
        <svg class="interactive-svg imitation-modes-svg" viewBox="0 0 700 300" aria-hidden="true">
          <line x1="70" y1="246" x2="638" y2="246" class="axis-line"></line>
          <path class="imitation-target-density"></path>
          <path class="imitation-model-density"></path>
          <circle class="imitation-mean-action" r="8"></circle>
          <text x="590" y="274" class="svg-label">action</text>
        </svg>
        <div class="imitation-modes-stats">
          <span><b>${labels.mean}</b><em class="imitation-mean-value"></em></span>
          <span><b>${labels.mixture}</b><em class="imitation-mixture-value"></em></span>
          <span><b>${labels.entropy}</b><em class="imitation-entropy-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout imitation-modes-readout"></p>
    `,
    `
      <label>
        <span>${labels.left}</span>
        <input class="imitation-left-weight-input" type="range" min="0.1" max="0.9" step="0.05" value="0.5">
      </label>
      <label>
        <span>${labels.variance}</span>
        <input class="imitation-variance-input" type="range" min="0.12" max="0.65" step="0.01" value="0.24">
      </label>
      <label>
        <span>${labels.model}</span>
        <select class="imitation-model-input">
          <option value="single">single Gaussian</option>
          <option value="mixture">mixture model</option>
        </select>
      </label>
    `
  );

  const leftInput = block.querySelector(".imitation-left-weight-input");
  const varianceInput = block.querySelector(".imitation-variance-input");
  const modelInput = block.querySelector(".imitation-model-input");
  const targetPath = block.querySelector(".imitation-target-density");
  const modelPath = block.querySelector(".imitation-model-density");
  const meanAction = block.querySelector(".imitation-mean-action");
  const meanValue = block.querySelector(".imitation-mean-value");
  const mixtureValue = block.querySelector(".imitation-mixture-value");
  const entropyValue = block.querySelector(".imitation-entropy-value");
  const readout = block.querySelector(".imitation-modes-readout");

  const xs = Array.from({ length: 121 }, (_, i) => -3 + i * 0.05);
  const toX = (x) => 354 + x * 88;
  const toY = (y) => 246 - y * 160;
  const gaussian = (x, mean, sigma) => Math.exp(-0.5 * ((x - mean) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));

  const update = () => {
    const left = Number(leftInput.value);
    const sigma = Number(varianceInput.value);
    const model = modelInput.value;
    const target = xs.map((x) => left * gaussian(x, -1.15, sigma) + (1 - left) * gaussian(x, 1.15, sigma));
    const mean = left * -1.15 + (1 - left) * 1.15;
    const singleSigma = Math.max(sigma, 0.85);
    const fitted = xs.map((x) => model === "mixture" ? left * gaussian(x, -1.15, sigma) + (1 - left) * gaussian(x, 1.15, sigma) : gaussian(x, mean, singleSigma));
    const maxY = Math.max(...target, ...fitted);
    const path = (ys) => ys.map((y, i) => `${i === 0 ? "M" : "L"}${toX(xs[i])},${toY(y / maxY)}`).join(" ");
    const entropy = -(left * Math.log2(left) + (1 - left) * Math.log2(1 - left));

    targetPath.setAttribute("d", path(target));
    modelPath.setAttribute("d", path(fitted));
    meanAction.setAttribute("cx", toX(mean));
    meanAction.setAttribute("cy", toY(0));
    meanValue.textContent = mean.toFixed(2);
    mixtureValue.textContent = model;
    entropyValue.textContent = `${entropy.toFixed(2)} bits`;
    readout.textContent = `left=${left.toFixed(2)}, sigma=${sigma.toFixed(2)}, model=${model}. ${labels.note}`;
  };

  [leftInput, varianceInput].forEach((input) => input.addEventListener("input", update));
  modelInput.addEventListener("change", update);
  update();
}

function mountDaggerAggregationLoop(block) {
  const labels = currentLang === "zh"
    ? {
        round: "DAgger round",
        beta: "expert mixing beta",
        states: "states visited",
        labels: "expert labels",
        shift: "distribution gap",
        note:
          "DAgger 反复让 current policy 访问自己的 states，再请 expert 标注这些 states，使训练数据逐渐接近 learner 真正会遇到的 distribution。"
      }
    : {
        round: "DAgger round",
        beta: "expert mixing beta",
        states: "states visited",
        labels: "expert labels",
        shift: "distribution gap",
        note:
          "DAgger repeatedly lets the current policy visit its own states, asks the expert to label those states, and moves the dataset toward the learner's actual distribution."
      };

  setInteractiveHTML(
    block,
    `
      <div class="dagger-widget" aria-label="DAgger dataset aggregation loop">
        <div class="dagger-loop">
          <span data-dagger-step="0"><b>1</b><em>rollout</em></span>
          <span data-dagger-step="1"><b>2</b><em>expert label</em></span>
          <span data-dagger-step="2"><b>3</b><em>aggregate D</em></span>
          <span data-dagger-step="3"><b>4</b><em>retrain policy</em></span>
        </div>
        <div class="dagger-stats">
          <span><b>${labels.states}</b><em class="dagger-states-value"></em></span>
          <span><b>${labels.labels}</b><em class="dagger-labels-value"></em></span>
          <span><b>${labels.shift}</b><em class="dagger-shift-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout dagger-readout"></p>
    `,
    `
      <label>
        <span>${labels.round}</span>
        <input class="dagger-round-input" type="range" min="0" max="8" step="1" value="3">
      </label>
      <label>
        <span>${labels.beta}</span>
        <input class="dagger-beta-input" type="range" min="0" max="1" step="0.05" value="0.35">
      </label>
    `
  );

  const roundInput = block.querySelector(".dagger-round-input");
  const betaInput = block.querySelector(".dagger-beta-input");
  const steps = block.querySelectorAll("[data-dagger-step]");
  const statesValue = block.querySelector(".dagger-states-value");
  const labelsValue = block.querySelector(".dagger-labels-value");
  const shiftValue = block.querySelector(".dagger-shift-value");
  const readout = block.querySelector(".dagger-readout");

  const update = () => {
    const round = Number(roundInput.value);
    const beta = Number(betaInput.value);
    const active = round % 4;
    const states = 120 * (round + 1);
    const labelsCount = 80 + 100 * round;
    const gap = Math.max(0.04, 0.75 * Math.exp(-0.28 * round) * (0.7 + beta * 0.3));
    steps.forEach((step, index) => {
      step.classList.toggle("active-dagger-step", index === active);
    });
    statesValue.textContent = states.toLocaleString();
    labelsValue.textContent = labelsCount.toLocaleString();
    shiftValue.textContent = gap.toFixed(2);
    readout.textContent = `round=${round}, beta=${beta.toFixed(2)}, active step=${active + 1}. ${labels.note}`;
  };

  [roundInput, betaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLObjectiveMarginalLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "horizon T",
        gamma: "discount gamma",
        stochasticity: "transition noise",
        finite: "finite return",
        discounted: "discounted return",
        occupancy: "state-action marginal",
        note:
          "Finite horizon objective sums rewards along a trajectory. Infinite horizon often uses discounting or a stationary state-action distribution to make long-run expectations well-defined."
      }
    : {
        horizon: "horizon T",
        gamma: "discount gamma",
        stochasticity: "transition noise",
        finite: "finite return",
        discounted: "discounted return",
        occupancy: "state-action marginal",
        note:
          "Finite horizon objective sums rewards along a trajectory. Infinite horizon often uses discounting or a stationary state-action distribution to make long-run expectations well-defined."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-objective-widget" aria-label="RL objective and state-action marginal">
        <div class="rl-objective-chain"></div>
        <div class="rl-objective-stats">
          <span><b>${labels.finite}</b><em class="rl-finite-value"></em></span>
          <span><b>${labels.discounted}</b><em class="rl-discounted-value"></em></span>
          <span><b>${labels.occupancy}</b><em class="rl-occupancy-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-objective-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-objective-horizon-input" type="range" min="2" max="12" step="1" value="6">
      </label>
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-objective-gamma-input" type="range" min="0" max="0.98" step="0.02" value="0.9">
      </label>
      <label>
        <span>${labels.stochasticity}</span>
        <input class="rl-objective-noise-input" type="range" min="0" max="0.45" step="0.05" value="0.15">
      </label>
    `
  );

  const horizonInput = block.querySelector(".rl-objective-horizon-input");
  const gammaInput = block.querySelector(".rl-objective-gamma-input");
  const noiseInput = block.querySelector(".rl-objective-noise-input");
  const chain = block.querySelector(".rl-objective-chain");
  const finiteValue = block.querySelector(".rl-finite-value");
  const discountedValue = block.querySelector(".rl-discounted-value");
  const occupancyValue = block.querySelector(".rl-occupancy-value");
  const readout = block.querySelector(".rl-objective-readout");

  const update = () => {
    const horizon = Number(horizonInput.value);
    const gamma = Number(gammaInput.value);
    const noise = Number(noiseInput.value);
    let stateProb = 1;
    const rewards = [];
    const occupancies = [];
    for (let t = 0; t < horizon; t += 1) {
      const reward = stateProb * (1 - noise) + (1 - stateProb) * -0.4;
      rewards.push(reward);
      occupancies.push(stateProb);
      stateProb = stateProb * (0.72 - noise * 0.25) + (1 - stateProb) * (0.18 + noise * 0.35);
    }
    const finite = rewards.reduce((sum, value) => sum + value, 0);
    const discounted = rewards.reduce((sum, value, index) => sum + value * gamma ** index, 0);
    const occupancy = occupancies.reduce((sum, value) => sum + value, 0) / occupancies.length;
    chain.innerHTML = rewards.map((reward, index) => `
      <span class="${reward >= 0 ? "positive-rl-reward" : "negative-rl-reward"}">
        <b>s${index}</b>
        <em>r=${reward.toFixed(2)}</em>
      </span>
    `).join("");
    finiteValue.textContent = finite.toFixed(2);
    discountedValue.textContent = discounted.toFixed(2);
    occupancyValue.textContent = occupancy.toFixed(2);
    readout.textContent = `T=${horizon}, gamma=${gamma.toFixed(2)}, noise=${noise.toFixed(2)}. ${labels.note}`;
  };

  [horizonInput, gammaInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLValueQLab(block) {
  const labels = currentLang === "zh"
    ? {
        gamma: "discount gamma",
        transition: "success probability",
        reward: "risky reward",
        value: "V(s)",
        qsafe: "Q(s,safe)",
        qrisky: "Q(s,risky)",
        note:
          "Q-function evaluates taking a particular action first. Value function follows by choosing or averaging actions; greedy policy improvement chooses the action with larger Q."
      }
    : {
        gamma: "discount gamma",
        transition: "success probability",
        reward: "risky reward",
        value: "V(s)",
        qsafe: "Q(s,safe)",
        qrisky: "Q(s,risky)",
        note:
          "Q-function evaluates taking a particular action first. Value function follows by choosing or averaging actions; greedy policy improvement chooses the action with larger Q."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-value-widget" aria-label="Value and Q function comparison">
        <div class="rl-value-cards">
          <span class="rl-safe-card"><b>safe</b><em></em></span>
          <span class="rl-risky-card"><b>risky</b><em></em></span>
        </div>
        <div class="rl-value-stats">
          <span><b>${labels.value}</b><em class="rl-v-value"></em></span>
          <span><b>${labels.qsafe}</b><em class="rl-q-safe-value"></em></span>
          <span><b>${labels.qrisky}</b><em class="rl-q-risky-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-value-readout"></p>
    `,
    `
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-value-gamma-input" type="range" min="0" max="0.98" step="0.02" value="0.85">
      </label>
      <label>
        <span>${labels.transition}</span>
        <input class="rl-value-success-input" type="range" min="0.05" max="0.95" step="0.05" value="0.55">
      </label>
      <label>
        <span>${labels.reward}</span>
        <input class="rl-value-reward-input" type="range" min="1" max="8" step="0.25" value="4">
      </label>
    `
  );

  const gammaInput = block.querySelector(".rl-value-gamma-input");
  const successInput = block.querySelector(".rl-value-success-input");
  const rewardInput = block.querySelector(".rl-value-reward-input");
  const safeCard = block.querySelector(".rl-safe-card");
  const riskyCard = block.querySelector(".rl-risky-card");
  const vValue = block.querySelector(".rl-v-value");
  const qSafeValue = block.querySelector(".rl-q-safe-value");
  const qRiskyValue = block.querySelector(".rl-q-risky-value");
  const readout = block.querySelector(".rl-value-readout");

  const update = () => {
    const gamma = Number(gammaInput.value);
    const success = Number(successInput.value);
    const reward = Number(rewardInput.value);
    const terminalGood = 2;
    const terminalBad = -2;
    const qSafe = 1 + gamma * 0.7;
    const qRisky = success * (reward + gamma * terminalGood) + (1 - success) * (-1 + gamma * terminalBad);
    const value = Math.max(qSafe, qRisky);
    const best = qRisky > qSafe ? "risky" : "safe";
    safeCard.classList.toggle("active-rl-value-card", best === "safe");
    riskyCard.classList.toggle("active-rl-value-card", best === "risky");
    safeCard.querySelector("em").textContent = qSafe.toFixed(2);
    riskyCard.querySelector("em").textContent = qRisky.toFixed(2);
    vValue.textContent = value.toFixed(2);
    qSafeValue.textContent = qSafe.toFixed(2);
    qRiskyValue.textContent = qRisky.toFixed(2);
    readout.textContent = `V(s)=max_a Q(s,a), best=${best}. ${labels.note}`;
  };

  [gammaInput, successInput, rewardInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLAlgorithmTradeoffMap(block) {
  const labels = currentLang === "zh"
    ? {
        sampleCost: "sample cost",
        stability: "need stability",
        actionType: "action space",
        suggested: "suggested family",
        sample: "sample efficiency",
        ease: "stability/ease",
        note:
          "RL algorithm families trade off sample efficiency, stability, assumptions, and whether the action space is discrete or continuous."
      }
    : {
        sampleCost: "sample cost",
        stability: "need stability",
        actionType: "action space",
        suggested: "suggested family",
        sample: "sample efficiency",
        ease: "stability/ease",
        note:
          "RL algorithm families trade off sample efficiency, stability, assumptions, and whether the action space is discrete or continuous."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-tradeoff-widget" aria-label="RL algorithm tradeoff map">
        <svg class="interactive-svg rl-tradeoff-svg" viewBox="0 0 720 320" aria-hidden="true">
          <line x1="86" y1="262" x2="650" y2="262" class="axis-line"></line>
          <line x1="86" y1="262" x2="86" y2="56" class="axis-line"></line>
          <text x="522" y="292" class="svg-label">${labels.sample}</text>
          <text x="96" y="64" class="svg-label">${labels.ease}</text>
          <g class="rl-tradeoff-points"></g>
        </svg>
        <div class="rl-tradeoff-stats">
          <span><b>${labels.suggested}</b><em class="rl-tradeoff-suggestion"></em></span>
          <span><b>${labels.sample}</b><em class="rl-tradeoff-sample"></em></span>
          <span><b>${labels.ease}</b><em class="rl-tradeoff-ease"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-tradeoff-readout"></p>
    `,
    `
      <label>
        <span>${labels.sampleCost}</span>
        <input class="rl-tradeoff-cost-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.stability}</span>
        <input class="rl-tradeoff-stability-input" type="range" min="0" max="1" step="0.05" value="0.6">
      </label>
      <label>
        <span>${labels.actionType}</span>
        <select class="rl-tradeoff-action-input">
          <option value="continuous">continuous</option>
          <option value="discrete">discrete</option>
        </select>
      </label>
    `
  );

  const costInput = block.querySelector(".rl-tradeoff-cost-input");
  const stabilityInput = block.querySelector(".rl-tradeoff-stability-input");
  const actionInput = block.querySelector(".rl-tradeoff-action-input");
  const points = block.querySelector(".rl-tradeoff-points");
  const suggestion = block.querySelector(".rl-tradeoff-suggestion");
  const sampleValue = block.querySelector(".rl-tradeoff-sample");
  const easeValue = block.querySelector(".rl-tradeoff-ease");
  const readout = block.querySelector(".rl-tradeoff-readout");

  const families = [
    { name: "model-based", x: 0.82, y: 0.42, discrete: 0.6, continuous: 0.9 },
    { name: "value-based", x: 0.72, y: 0.38, discrete: 0.9, continuous: 0.25 },
    { name: "actor-critic", x: 0.54, y: 0.58, discrete: 0.75, continuous: 0.8 },
    { name: "policy gradient", x: 0.25, y: 0.76, discrete: 0.5, continuous: 0.75 }
  ];
  const toX = (x) => 86 + x * 520;
  const toY = (y) => 262 - y * 180;

  const update = () => {
    const sampleCost = Number(costInput.value);
    const stability = Number(stabilityInput.value);
    const action = actionInput.value;
    const scored = families.map((family) => {
      const actionFit = family[action];
      const sampleFit = 1 - Math.abs(sampleCost - family.x);
      const stabilityFit = 1 - Math.abs(stability - family.y);
      return { ...family, score: actionFit * 0.4 + sampleFit * 0.3 + stabilityFit * 0.3 };
    }).sort((a, b) => b.score - a.score);
    const best = scored[0];
    points.innerHTML = families.map((family) => `
      <g class="${family.name === best.name ? "active-rl-tradeoff" : ""}">
        <circle cx="${toX(family.x)}" cy="${toY(family.y)}" r="10"></circle>
        <text x="${toX(family.x) + 14}" y="${toY(family.y) + 4}" class="svg-label">${family.name}</text>
      </g>
    `).join("");
    suggestion.textContent = best.name;
    sampleValue.textContent = `${Math.round(best.x * 100)}%`;
    easeValue.textContent = `${Math.round(best.y * 100)}%`;
    readout.textContent = `sample cost=${sampleCost.toFixed(2)}, stability need=${stability.toFixed(2)}, actions=${action}. ${labels.note}`;
  };

  [costInput, stabilityInput].forEach((input) => input.addEventListener("input", update));
  actionInput.addEventListener("change", update);
  update();
}

function mountRLPolicyGradientEstimatorLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "trajectory length T",
        terminal: "late reward",
        baseline: "baseline b",
        total: "sample return",
        update: "signed update",
        variance: "variance proxy",
        note:
          "REINFORCE multiplies score terms by return estimates. Reward-to-go removes past rewards from later decisions, while a baseline shifts all returns without changing the expected gradient."
      }
    : {
        horizon: "trajectory length T",
        terminal: "late reward",
        baseline: "baseline b",
        total: "sample return",
        update: "signed update",
        variance: "variance proxy",
        note:
          "REINFORCE multiplies score terms by return estimates. Reward-to-go removes past rewards from later decisions, while a baseline shifts all returns without changing the expected gradient."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-pg-widget" aria-label="Policy gradient estimator and reward-to-go">
        <div class="rl-pg-chain"></div>
        <div class="rl-pg-stats">
          <span><b>${labels.total}</b><em class="rl-pg-total"></em></span>
          <span><b>${labels.update}</b><em class="rl-pg-update"></em></span>
          <span><b>${labels.variance}</b><em class="rl-pg-variance"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-pg-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-pg-horizon-input" type="range" min="3" max="10" step="1" value="6">
      </label>
      <label>
        <span>${labels.terminal}</span>
        <input class="rl-pg-terminal-input" type="range" min="-2" max="8" step="0.25" value="4">
      </label>
      <label>
        <span>${labels.baseline}</span>
        <input class="rl-pg-baseline-input" type="range" min="-1" max="5" step="0.25" value="1.25">
      </label>
    `
  );

  const horizonInput = block.querySelector(".rl-pg-horizon-input");
  const terminalInput = block.querySelector(".rl-pg-terminal-input");
  const baselineInput = block.querySelector(".rl-pg-baseline-input");
  const chain = block.querySelector(".rl-pg-chain");
  const totalValue = block.querySelector(".rl-pg-total");
  const updateValue = block.querySelector(".rl-pg-update");
  const varianceValue = block.querySelector(".rl-pg-variance");
  const readout = block.querySelector(".rl-pg-readout");

  const update = () => {
    const horizon = Number(horizonInput.value);
    const terminal = Number(terminalInput.value);
    const baseline = Number(baselineInput.value);
    const rewards = [];
    const scores = [];
    for (let t = 0; t < horizon; t += 1) {
      const shaping = t % 3 === 0 ? 0.22 : -0.06;
      rewards.push(t === horizon - 1 ? terminal : shaping + 0.04 * t);
      scores.push((t % 2 === 0 ? 0.42 : -0.28) + 0.025 * t);
    }
    const returns = rewards.map((_, t) => rewards.slice(t).reduce((sum, reward) => sum + reward, 0));
    const contributions = returns.map((value, t) => scores[t] * (value - baseline));
    const totalReturn = rewards.reduce((sum, reward) => sum + reward, 0);
    const signedUpdate = contributions.reduce((sum, value) => sum + value, 0);
    const varianceProxy = contributions.reduce((sum, value) => sum + value * value, 0) / contributions.length;
    chain.innerHTML = rewards.map((reward, t) => `
      <span class="${contributions[t] >= 0 ? "positive-rl-pg" : "negative-rl-pg"}">
        <b>t${t}</b>
        <em>r=${reward.toFixed(2)}</em>
        <small>G_t-b=${(returns[t] - baseline).toFixed(2)}</small>
      </span>
    `).join("");
    totalValue.textContent = totalReturn.toFixed(2);
    updateValue.textContent = signedUpdate.toFixed(2);
    varianceValue.textContent = varianceProxy.toFixed(2);
    readout.textContent = `sum_t score_t * (G_t - b), T=${horizon}, b=${baseline.toFixed(2)}. ${labels.note}`;
  };

  [horizonInput, terminalInput, baselineInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLImportanceSamplingLab(block) {
  const labels = currentLang === "zh"
    ? {
        target: "target pi(A)",
        behavior: "behavior beta(A)",
        horizon: "horizon T",
        weight: "trajectory weight",
        factor: "variance factor",
        ess: "effective sample",
        note:
          "Off-policy policy gradients reuse behavior-policy data by multiplying likelihood ratios. The product is unbiased in principle, but its variance can grow exponentially with horizon."
      }
    : {
        target: "target pi(A)",
        behavior: "behavior beta(A)",
        horizon: "horizon T",
        weight: "trajectory weight",
        factor: "variance factor",
        ess: "effective sample",
        note:
          "Off-policy policy gradients reuse behavior-policy data by multiplying likelihood ratios. The product is unbiased in principle, but its variance can grow exponentially with horizon."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-is-widget" aria-label="Importance sampling weights">
        <div class="rl-is-chain"></div>
        <div class="rl-is-stats">
          <span><b>${labels.weight}</b><em class="rl-is-weight"></em></span>
          <span><b>${labels.factor}</b><em class="rl-is-factor"></em></span>
          <span><b>${labels.ess}</b><em class="rl-is-ess"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-is-readout"></p>
    `,
    `
      <label>
        <span>${labels.target}</span>
        <input class="rl-is-target-input" type="range" min="0.05" max="0.95" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.behavior}</span>
        <input class="rl-is-behavior-input" type="range" min="0.05" max="0.95" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-is-horizon-input" type="range" min="2" max="12" step="1" value="6">
      </label>
    `
  );

  const targetInput = block.querySelector(".rl-is-target-input");
  const behaviorInput = block.querySelector(".rl-is-behavior-input");
  const horizonInput = block.querySelector(".rl-is-horizon-input");
  const chain = block.querySelector(".rl-is-chain");
  const weightValue = block.querySelector(".rl-is-weight");
  const factorValue = block.querySelector(".rl-is-factor");
  const essValue = block.querySelector(".rl-is-ess");
  const readout = block.querySelector(".rl-is-readout");

  const update = () => {
    const pi = Number(targetInput.value);
    const beta = Number(behaviorInput.value);
    const horizon = Number(horizonInput.value);
    const ratios = [];
    for (let t = 0; t < horizon; t += 1) {
      const actionA = t % 3 !== 1;
      ratios.push({
        action: actionA ? "A" : "B",
        value: actionA ? pi / beta : (1 - pi) / (1 - beta)
      });
    }
    const weight = ratios.reduce((product, ratio) => product * ratio.value, 1);
    const secondMomentFactor = ((pi * pi) / beta) + (((1 - pi) * (1 - pi)) / (1 - beta));
    const varianceFactor = secondMomentFactor ** horizon;
    const ess = Math.min(100, 100 / varianceFactor);
    chain.innerHTML = ratios.map((ratio, index) => `
      <span class="${ratio.value >= 1 ? "positive-rl-is" : "negative-rl-is"}">
        <b>${ratio.action}${index}</b>
        <em>${ratio.value.toFixed(2)}x</em>
      </span>
    `).join("");
    weightValue.textContent = `${weight.toFixed(2)}x`;
    factorValue.textContent = `${varianceFactor.toFixed(2)}x`;
    essValue.textContent = `${ess.toFixed(1)}%`;
    readout.textContent = `w(tau)=product_t pi(a_t|s_t)/beta(a_t|s_t), T=${horizon}. ${labels.note}`;
  };

  [targetInput, behaviorInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLNaturalGradientLab(block) {
  const labels = currentLang === "zh"
    ? {
        curvature: "Fisher curvature",
        budget: "KL budget",
        step: "vanilla step",
        vanilla: "vanilla KL",
        natural: "natural KL",
        direction: "preconditioned",
        note:
          "Natural policy gradient rescales the update by the Fisher information matrix, so a parameter step is measured by how much it changes the policy distribution rather than by Euclidean distance alone."
      }
    : {
        curvature: "Fisher curvature",
        budget: "KL budget",
        step: "vanilla step",
        vanilla: "vanilla KL",
        natural: "natural KL",
        direction: "preconditioned",
        note:
          "Natural policy gradient rescales the update by the Fisher information matrix, so a parameter step is measured by how much it changes the policy distribution rather than by Euclidean distance alone."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-natural-widget" aria-label="Natural gradient trust region">
        <svg class="interactive-svg rl-natural-svg" viewBox="0 0 720 320" aria-hidden="true">
          <defs>
            <marker id="rlNaturalArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z"></path>
            </marker>
          </defs>
          <line x1="80" y1="170" x2="650" y2="170" class="axis-line"></line>
          <line x1="260" y1="286" x2="260" y2="46" class="axis-line"></line>
          <ellipse class="rl-natural-ellipse" cx="260" cy="170" rx="84" ry="84"></ellipse>
          <line class="rl-natural-vanilla" x1="260" y1="170" x2="360" y2="115"></line>
          <line class="rl-natural-natural" x1="260" y1="170" x2="330" y2="104"></line>
          <text x="372" y="116" class="svg-label">vanilla</text>
          <text x="340" y="98" class="svg-label">${labels.direction}</text>
          <text x="566" y="198" class="svg-label">theta_1</text>
          <text x="270" y="58" class="svg-label">theta_2</text>
        </svg>
        <div class="rl-natural-stats">
          <span><b>${labels.vanilla}</b><em class="rl-natural-vanilla-kl"></em></span>
          <span><b>${labels.natural}</b><em class="rl-natural-natural-kl"></em></span>
          <span><b>${labels.budget}</b><em class="rl-natural-budget"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-natural-readout"></p>
    `,
    `
      <label>
        <span>${labels.curvature}</span>
        <input class="rl-natural-curvature-input" type="range" min="1" max="8" step="0.25" value="4">
      </label>
      <label>
        <span>${labels.budget}</span>
        <input class="rl-natural-budget-input" type="range" min="0.03" max="0.5" step="0.01" value="0.12">
      </label>
      <label>
        <span>${labels.step}</span>
        <input class="rl-natural-step-input" type="range" min="0.1" max="0.9" step="0.05" value="0.45">
      </label>
    `
  );

  const curvatureInput = block.querySelector(".rl-natural-curvature-input");
  const budgetInput = block.querySelector(".rl-natural-budget-input");
  const stepInput = block.querySelector(".rl-natural-step-input");
  const ellipse = block.querySelector(".rl-natural-ellipse");
  const vanillaLine = block.querySelector(".rl-natural-vanilla");
  const naturalLine = block.querySelector(".rl-natural-natural");
  const vanillaKL = block.querySelector(".rl-natural-vanilla-kl");
  const naturalKL = block.querySelector(".rl-natural-natural-kl");
  const budgetValue = block.querySelector(".rl-natural-budget");
  const readout = block.querySelector(".rl-natural-readout");
  const center = { x: 260, y: 170 };
  const scale = 130;

  const setLine = (line, vector) => {
    line.setAttribute("x2", String(center.x + vector.x * scale));
    line.setAttribute("y2", String(center.y - vector.y * scale));
  };

  const update = () => {
    const curvature = Number(curvatureInput.value);
    const budget = Number(budgetInput.value);
    const step = Number(stepInput.value);
    const gradient = { x: 1, y: 0.55 };
    const vanilla = { x: step * gradient.x, y: step * gradient.y };
    const vanillaKl = 0.5 * (curvature * vanilla.x * vanilla.x + vanilla.y * vanilla.y);
    const naturalRaw = { x: gradient.x / curvature, y: gradient.y };
    const rawKl = 0.5 * (curvature * naturalRaw.x * naturalRaw.x + naturalRaw.y * naturalRaw.y);
    const trustScale = Math.sqrt(budget / rawKl);
    const natural = { x: naturalRaw.x * trustScale, y: naturalRaw.y * trustScale };
    const naturalKlValue = 0.5 * (curvature * natural.x * natural.x + natural.y * natural.y);
    ellipse.setAttribute("rx", String(Math.max(28, 110 / Math.sqrt(curvature))));
    ellipse.setAttribute("ry", "110");
    setLine(vanillaLine, vanilla);
    setLine(naturalLine, natural);
    vanillaKL.textContent = vanillaKl.toFixed(3);
    naturalKL.textContent = naturalKlValue.toFixed(3);
    budgetValue.textContent = budget.toFixed(3);
    readout.textContent = `natural step ~= F^-1 g scaled to a KL budget. curvature=${curvature.toFixed(2)}. ${labels.note}`;
  };

  [curvatureInput, budgetInput, stepInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLCriticBaselineLab(block) {
  const labels = currentLang === "zh"
    ? {
        value: "critic V(s)",
        reward: "sample return",
        noise: "return noise",
        advantage: "advantage",
        variance: "variance proxy",
        bias: "critic bias",
        note:
          "Actor-critic uses a learned critic as a state-dependent baseline. A better value estimate lowers variance, but bootstrapping can introduce bias when the critic is wrong."
      }
    : {
        value: "critic V(s)",
        reward: "sample return",
        noise: "return noise",
        advantage: "advantage",
        variance: "variance proxy",
        bias: "critic bias",
        note:
          "Actor-critic uses a learned critic as a state-dependent baseline. A better value estimate lowers variance, but bootstrapping can introduce bias when the critic is wrong."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-critic-widget" aria-label="Critic baseline and advantage estimate">
        <div class="rl-critic-bars">
          <span class="rl-critic-return-bar"><b>G_t</b><em></em></span>
          <span class="rl-critic-value-bar"><b>V(s_t)</b><em></em></span>
          <span class="rl-critic-advantage-bar"><b>A_t</b><em></em></span>
        </div>
        <div class="rl-critic-stats">
          <span><b>${labels.advantage}</b><em class="rl-critic-advantage"></em></span>
          <span><b>${labels.variance}</b><em class="rl-critic-variance"></em></span>
          <span><b>${labels.bias}</b><em class="rl-critic-bias"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-critic-readout"></p>
    `,
    `
      <label>
        <span>${labels.value}</span>
        <input class="rl-critic-value-input" type="range" min="-2" max="6" step="0.25" value="2.25">
      </label>
      <label>
        <span>${labels.reward}</span>
        <input class="rl-critic-return-input" type="range" min="-2" max="8" step="0.25" value="4">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="rl-critic-noise-input" type="range" min="0" max="4" step="0.25" value="1.25">
      </label>
    `
  );

  const valueInput = block.querySelector(".rl-critic-value-input");
  const returnInput = block.querySelector(".rl-critic-return-input");
  const noiseInput = block.querySelector(".rl-critic-noise-input");
  const returnBar = block.querySelector(".rl-critic-return-bar");
  const valueBar = block.querySelector(".rl-critic-value-bar");
  const advantageBar = block.querySelector(".rl-critic-advantage-bar");
  const advantageValue = block.querySelector(".rl-critic-advantage");
  const varianceValue = block.querySelector(".rl-critic-variance");
  const biasValue = block.querySelector(".rl-critic-bias");
  const readout = block.querySelector(".rl-critic-readout");

  const setBar = (bar, value) => {
    const height = 24 + Math.min(150, Math.abs(value) * 24);
    bar.style.height = `${height}px`;
    bar.classList.toggle("negative-rl-critic-bar", value < 0);
    bar.querySelector("em").textContent = value.toFixed(2);
  };

  const update = () => {
    const critic = Number(valueInput.value);
    const sampleReturn = Number(returnInput.value);
    const noise = Number(noiseInput.value);
    const trueValue = 2.5;
    const advantage = sampleReturn - critic;
    const varianceProxy = Math.max(0.05, noise * noise * (1 - Math.min(0.85, Math.exp(-Math.abs(critic - trueValue)))));
    const bias = critic - trueValue;
    setBar(returnBar, sampleReturn);
    setBar(valueBar, critic);
    setBar(advantageBar, advantage);
    advantageValue.textContent = advantage.toFixed(2);
    varianceValue.textContent = varianceProxy.toFixed(2);
    biasValue.textContent = bias.toFixed(2);
    readout.textContent = `A_t = G_t - V(s_t), critic=${critic.toFixed(2)}, return=${sampleReturn.toFixed(2)}. ${labels.note}`;
  };

  [valueInput, returnInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLNStepGAELab(block) {
  const labels = currentLang === "zh"
    ? {
        nstep: "n-step cutoff",
        lambda: "GAE lambda",
        gamma: "discount gamma",
        target: "bootstrapped target",
        bias: "bias proxy",
        variance: "variance proxy",
        note:
          "Short n-step returns rely more on the critic and have lower variance but more bias. Long returns use more sampled rewards. GAE mixes all n-step returns with an exponential lambda weighting."
      }
    : {
        nstep: "n-step cutoff",
        lambda: "GAE lambda",
        gamma: "discount gamma",
        target: "bootstrapped target",
        bias: "bias proxy",
        variance: "variance proxy",
        note:
          "Short n-step returns rely more on the critic and have lower variance but more bias. Long returns use more sampled rewards. GAE mixes all n-step returns with an exponential lambda weighting."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-gae-widget" aria-label="N-step returns and generalized advantage estimation">
        <div class="rl-gae-chain"></div>
        <div class="rl-gae-stats">
          <span><b>${labels.target}</b><em class="rl-gae-target"></em></span>
          <span><b>${labels.bias}</b><em class="rl-gae-bias"></em></span>
          <span><b>${labels.variance}</b><em class="rl-gae-variance"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-gae-readout"></p>
    `,
    `
      <label>
        <span>${labels.nstep}</span>
        <input class="rl-gae-n-input" type="range" min="1" max="8" step="1" value="4">
      </label>
      <label>
        <span>${labels.lambda}</span>
        <input class="rl-gae-lambda-input" type="range" min="0" max="1" step="0.05" value="0.85">
      </label>
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-gae-gamma-input" type="range" min="0.5" max="0.99" step="0.01" value="0.92">
      </label>
    `
  );

  const nInput = block.querySelector(".rl-gae-n-input");
  const lambdaInput = block.querySelector(".rl-gae-lambda-input");
  const gammaInput = block.querySelector(".rl-gae-gamma-input");
  const chain = block.querySelector(".rl-gae-chain");
  const targetValue = block.querySelector(".rl-gae-target");
  const biasValue = block.querySelector(".rl-gae-bias");
  const varianceValue = block.querySelector(".rl-gae-variance");
  const readout = block.querySelector(".rl-gae-readout");

  const update = () => {
    const n = Number(nInput.value);
    const lambda = Number(lambdaInput.value);
    const gamma = Number(gammaInput.value);
    const rewards = [0.7, -0.1, 0.4, 1.2, 0.2, 0.9, -0.2, 1.4];
    const bootstrap = 2.1;
    const discounted = rewards.slice(0, n).reduce((sum, reward, index) => sum + reward * gamma ** index, 0);
    const target = discounted + gamma ** n * bootstrap;
    const mc = rewards.reduce((sum, reward, index) => sum + reward * gamma ** index, 0);
    const gaeBlend = rewards.reduce((sum, reward, index) => sum + (gamma * lambda) ** index * reward, 0) + (gamma * lambda) ** rewards.length * bootstrap;
    const biasProxy = Math.abs(target - mc) * (1 - lambda * 0.55);
    const varianceProxy = (0.25 + n * 0.22) * (0.35 + lambda * 0.75);
    chain.innerHTML = rewards.map((reward, index) => `
      <span class="${index < n ? "active-rl-gae-step" : ""}">
        <b>r${index}</b>
        <em>${reward.toFixed(1)}</em>
      </span>
    `).join("");
    targetValue.textContent = `${target.toFixed(2)} / GAE ${gaeBlend.toFixed(2)}`;
    biasValue.textContent = biasProxy.toFixed(2);
    varianceValue.textContent = varianceProxy.toFixed(2);
    readout.textContent = `n=${n}, lambda=${lambda.toFixed(2)}, gamma=${gamma.toFixed(2)}. ${labels.note}`;
  };

  [nInput, lambdaInput, gammaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLActorCriticReplayLab(block) {
  const labels = currentLang === "zh"
    ? {
        lag: "policy lag",
        replay: "replay fraction",
        critic: "critic accuracy",
        stability: "stability",
        bias: "off-policy bias",
        sample: "sample reuse",
        note:
          "Replay improves sample reuse, but actor updates become off-policy when stored actions come from older policies. A critic can help, yet stale data and incorrect targets can break naive actor-critic updates."
      }
    : {
        lag: "policy lag",
        replay: "replay fraction",
        critic: "critic accuracy",
        stability: "stability",
        bias: "off-policy bias",
        sample: "sample reuse",
        note:
          "Replay improves sample reuse, but actor updates become off-policy when stored actions come from older policies. A critic can help, yet stale data and incorrect targets can break naive actor-critic updates."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-replay-widget" aria-label="Actor critic replay tradeoff">
        <svg class="interactive-svg rl-replay-svg" viewBox="0 0 720 280" aria-hidden="true">
          <line x1="80" y1="224" x2="650" y2="224" class="axis-line"></line>
          <line x1="80" y1="224" x2="80" y2="48" class="axis-line"></line>
          <polyline class="rl-replay-stability-line" points=""></polyline>
          <polyline class="rl-replay-bias-line" points=""></polyline>
          <text x="96" y="44" class="svg-label">${labels.stability}</text>
          <text x="540" y="252" class="svg-label">${labels.sample}</text>
          <text x="458" y="78" class="svg-label">bias</text>
          <text x="458" y="118" class="svg-label">stability</text>
        </svg>
        <div class="rl-replay-stats">
          <span><b>${labels.stability}</b><em class="rl-replay-stability"></em></span>
          <span><b>${labels.bias}</b><em class="rl-replay-bias"></em></span>
          <span><b>${labels.sample}</b><em class="rl-replay-sample"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-replay-readout"></p>
    `,
    `
      <label>
        <span>${labels.lag}</span>
        <input class="rl-replay-lag-input" type="range" min="0" max="1" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.replay}</span>
        <input class="rl-replay-fraction-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.critic}</span>
        <input class="rl-replay-critic-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
    `
  );

  const lagInput = block.querySelector(".rl-replay-lag-input");
  const fractionInput = block.querySelector(".rl-replay-fraction-input");
  const criticInput = block.querySelector(".rl-replay-critic-input");
  const stabilityLine = block.querySelector(".rl-replay-stability-line");
  const biasLine = block.querySelector(".rl-replay-bias-line");
  const stabilityValue = block.querySelector(".rl-replay-stability");
  const biasValue = block.querySelector(".rl-replay-bias");
  const sampleValue = block.querySelector(".rl-replay-sample");
  const readout = block.querySelector(".rl-replay-readout");

  const update = () => {
    const lag = Number(lagInput.value);
    const replay = Number(fractionInput.value);
    const critic = Number(criticInput.value);
    const sampleReuse = 1 + replay * 4;
    const offPolicyBias = Math.min(1, lag * replay * (1.35 - critic * 0.7));
    const stability = Math.max(0.05, critic * 0.75 + (1 - lag) * 0.2 - replay * lag * 0.45);
    const xs = Array.from({ length: 16 }, (_, i) => i / 15);
    const stabilityPoints = xs.map((x, i) => {
      const y = Math.max(0.05, critic * 0.72 + (1 - lag) * 0.2 - x * lag * 0.55);
      return `${80 + i * 36},${224 - y * 160}`;
    });
    const biasPoints = xs.map((x, i) => {
      const y = Math.min(1, lag * x * (1.35 - critic * 0.7));
      return `${80 + i * 36},${224 - y * 160}`;
    });
    stabilityLine.setAttribute("points", stabilityPoints.join(" "));
    biasLine.setAttribute("points", biasPoints.join(" "));
    stabilityValue.textContent = `${Math.round(stability * 100)}%`;
    biasValue.textContent = `${Math.round(offPolicyBias * 100)}%`;
    sampleValue.textContent = `${sampleReuse.toFixed(1)}x`;
    readout.textContent = `policy lag=${lag.toFixed(2)}, replay=${replay.toFixed(2)}, critic=${critic.toFixed(2)}. ${labels.note}`;
  };

  [lagInput, fractionInput, criticInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLBellmanBackupLab(block) {
  const labels = currentLang === "zh"
    ? {
        gamma: "discount gamma",
        reward: "goal reward",
        slip: "transition slip",
        left: "left value",
        center: "center value",
        right: "right value",
        note:
          "Value iteration applies a Bellman backup: immediate reward plus discounted value of the best successor. In the tabular discounted case this backup is a contraction."
      }
    : {
        gamma: "discount gamma",
        reward: "goal reward",
        slip: "transition slip",
        left: "left value",
        center: "center value",
        right: "right value",
        note:
          "Value iteration applies a Bellman backup: immediate reward plus discounted value of the best successor. In the tabular discounted case this backup is a contraction."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-bellman-widget" aria-label="Bellman backup and contraction">
        <div class="rl-bellman-grid"></div>
        <div class="rl-bellman-stats">
          <span><b>${labels.left}</b><em class="rl-bellman-left"></em></span>
          <span><b>${labels.center}</b><em class="rl-bellman-center"></em></span>
          <span><b>${labels.right}</b><em class="rl-bellman-right"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-bellman-readout"></p>
    `,
    `
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-bellman-gamma-input" type="range" min="0" max="0.98" step="0.02" value="0.9">
      </label>
      <label>
        <span>${labels.reward}</span>
        <input class="rl-bellman-reward-input" type="range" min="1" max="8" step="0.25" value="5">
      </label>
      <label>
        <span>${labels.slip}</span>
        <input class="rl-bellman-slip-input" type="range" min="0" max="0.4" step="0.05" value="0.1">
      </label>
    `
  );

  const gammaInput = block.querySelector(".rl-bellman-gamma-input");
  const rewardInput = block.querySelector(".rl-bellman-reward-input");
  const slipInput = block.querySelector(".rl-bellman-slip-input");
  const grid = block.querySelector(".rl-bellman-grid");
  const leftValue = block.querySelector(".rl-bellman-left");
  const centerValue = block.querySelector(".rl-bellman-center");
  const rightValue = block.querySelector(".rl-bellman-right");
  const readout = block.querySelector(".rl-bellman-readout");

  const update = () => {
    const gamma = Number(gammaInput.value);
    const goalReward = Number(rewardInput.value);
    const slip = Number(slipInput.value);
    const values = [0.2, 0.7, 1.6, goalReward];
    const backed = values.map((value, index) => {
      if (index === values.length - 1) {
        return goalReward;
      }
      const intended = values[index + 1];
      const slipped = values[Math.max(0, index - 1)];
      const expectedNext = (1 - slip) * intended + slip * slipped;
      return (index === values.length - 2 ? goalReward : -0.05) + gamma * expectedNext;
    });
    grid.innerHTML = backed.map((value, index) => `
      <span class="${index === backed.length - 1 ? "goal-rl-bellman-cell" : ""}">
        <b>s${index}</b>
        <em>${value.toFixed(2)}</em>
      </span>
    `).join("");
    leftValue.textContent = backed[0].toFixed(2);
    centerValue.textContent = backed[1].toFixed(2);
    rightValue.textContent = backed[2].toFixed(2);
    readout.textContent = `B[V](s)=max_a E[r + gamma V(s')], contraction factor about gamma=${gamma.toFixed(2)}. ${labels.note}`;
  };

  [gammaInput, rewardInput, slipInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLFittedQTargetLab(block) {
  const labels = currentLang === "zh"
    ? {
        alpha: "learning rate",
        gamma: "discount gamma",
        maxNext: "max next Q",
        reward: "reward r",
        target: "target y",
        old: "old Q",
        updated: "updated Q",
        note:
          "Fitted Q-iteration and Q-learning regress toward a bootstrapped target. The target uses a max over next actions, but we do not backpropagate through that target in ordinary Q-learning."
      }
    : {
        alpha: "learning rate",
        gamma: "discount gamma",
        maxNext: "max next Q",
        reward: "reward r",
        target: "target y",
        old: "old Q",
        updated: "updated Q",
        note:
          "Fitted Q-iteration and Q-learning regress toward a bootstrapped target. The target uses a max over next actions, but we do not backpropagate through that target in ordinary Q-learning."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-qtarget-widget" aria-label="Fitted Q iteration target">
        <div class="rl-qtarget-formula">
          <span>y = r + gamma max_a' Q(s',a')</span>
          <strong class="rl-qtarget-value"></strong>
        </div>
        <div class="rl-qtarget-stats">
          <span><b>${labels.old}</b><em class="rl-qtarget-old"></em></span>
          <span><b>${labels.target}</b><em class="rl-qtarget-target"></em></span>
          <span><b>${labels.updated}</b><em class="rl-qtarget-updated"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-qtarget-readout"></p>
    `,
    `
      <label>
        <span>${labels.reward}</span>
        <input class="rl-qtarget-reward-input" type="range" min="-2" max="6" step="0.25" value="1">
      </label>
      <label>
        <span>${labels.maxNext}</span>
        <input class="rl-qtarget-next-input" type="range" min="-2" max="8" step="0.25" value="3.5">
      </label>
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-qtarget-gamma-input" type="range" min="0" max="0.98" step="0.02" value="0.9">
      </label>
      <label>
        <span>${labels.alpha}</span>
        <input class="rl-qtarget-alpha-input" type="range" min="0.05" max="1" step="0.05" value="0.35">
      </label>
    `
  );

  const rewardInput = block.querySelector(".rl-qtarget-reward-input");
  const nextInput = block.querySelector(".rl-qtarget-next-input");
  const gammaInput = block.querySelector(".rl-qtarget-gamma-input");
  const alphaInput = block.querySelector(".rl-qtarget-alpha-input");
  const value = block.querySelector(".rl-qtarget-value");
  const oldValue = block.querySelector(".rl-qtarget-old");
  const targetValue = block.querySelector(".rl-qtarget-target");
  const updatedValue = block.querySelector(".rl-qtarget-updated");
  const readout = block.querySelector(".rl-qtarget-readout");

  const update = () => {
    const reward = Number(rewardInput.value);
    const next = Number(nextInput.value);
    const gamma = Number(gammaInput.value);
    const alpha = Number(alphaInput.value);
    const oldQ = 1.4;
    const target = reward + gamma * next;
    const updated = oldQ + alpha * (target - oldQ);
    value.textContent = target.toFixed(2);
    oldValue.textContent = oldQ.toFixed(2);
    targetValue.textContent = target.toFixed(2);
    updatedValue.textContent = updated.toFixed(2);
    readout.textContent = `Q <- Q + alpha(y - Q), alpha=${alpha.toFixed(2)}, gamma=${gamma.toFixed(2)}. ${labels.note}`;
  };

  [rewardInput, nextInput, gammaInput, alphaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLExplorationPolicyLab(block) {
  const labels = currentLang === "zh"
    ? {
        epsilon: "epsilon",
        temperature: "temperature",
        mode: "exploration mode",
        greedy: "greedy",
        eps: "epsilon-greedy",
        boltzmann: "Boltzmann",
        note:
          "Value-based methods still need exploration. Epsilon-greedy mixes random actions with the greedy action; Boltzmann exploration samples actions according to exponentiated Q-values."
      }
    : {
        epsilon: "epsilon",
        temperature: "temperature",
        mode: "exploration mode",
        greedy: "greedy",
        eps: "epsilon-greedy",
        boltzmann: "Boltzmann",
        note:
          "Value-based methods still need exploration. Epsilon-greedy mixes random actions with the greedy action; Boltzmann exploration samples actions according to exponentiated Q-values."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-explore-widget" aria-label="Q-learning exploration policy">
        <div class="rl-explore-bars"></div>
        <div class="rl-explore-stats">
          <span><b>A</b><em class="rl-explore-a"></em></span>
          <span><b>B</b><em class="rl-explore-b"></em></span>
          <span><b>C</b><em class="rl-explore-c"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-explore-readout"></p>
    `,
    `
      <label>
        <span>${labels.mode}</span>
        <select class="rl-explore-mode-input">
          <option value="epsilon">${labels.eps}</option>
          <option value="boltzmann">${labels.boltzmann}</option>
          <option value="greedy">${labels.greedy}</option>
        </select>
      </label>
      <label>
        <span>${labels.epsilon}</span>
        <input class="rl-explore-epsilon-input" type="range" min="0" max="0.9" step="0.05" value="0.2">
      </label>
      <label>
        <span>${labels.temperature}</span>
        <input class="rl-explore-temp-input" type="range" min="0.2" max="3" step="0.1" value="1">
      </label>
    `
  );

  const modeInput = block.querySelector(".rl-explore-mode-input");
  const epsilonInput = block.querySelector(".rl-explore-epsilon-input");
  const tempInput = block.querySelector(".rl-explore-temp-input");
  const bars = block.querySelector(".rl-explore-bars");
  const aValue = block.querySelector(".rl-explore-a");
  const bValue = block.querySelector(".rl-explore-b");
  const cValue = block.querySelector(".rl-explore-c");
  const readout = block.querySelector(".rl-explore-readout");

  const update = () => {
    const q = [1.1, 2.6, 1.7];
    const mode = modeInput.value;
    const epsilon = Number(epsilonInput.value);
    const temperature = Number(tempInput.value);
    let probs;
    if (mode === "greedy") {
      probs = [0, 1, 0];
    } else if (mode === "epsilon") {
      probs = q.map((_, index) => epsilon / q.length + (index === 1 ? 1 - epsilon : 0));
    } else {
      const weights = q.map((value) => Math.exp(value / temperature));
      const total = weights.reduce((sum, value) => sum + value, 0);
      probs = weights.map((value) => value / total);
    }
    bars.innerHTML = probs.map((prob, index) => `
      <span style="height:${24 + prob * 150}px" class="${prob === Math.max(...probs) ? "active-rl-explore-bar" : ""}">
        <b>${String.fromCharCode(65 + index)}</b>
        <em>${Math.round(prob * 100)}%</em>
      </span>
    `).join("");
    [aValue, bValue, cValue].forEach((node, index) => {
      node.textContent = `${Math.round(probs[index] * 100)}%`;
    });
    readout.textContent = `mode=${mode}, epsilon=${epsilon.toFixed(2)}, temperature=${temperature.toFixed(1)}. ${labels.note}`;
  };

  [epsilonInput, tempInput].forEach((input) => input.addEventListener("input", update));
  modeInput.addEventListener("change", update);
  update();
}

function mountRLDQNStabilityLab(block) {
  const labels = currentLang === "zh"
    ? {
        replay: "replay buffer size",
        target: "target lag",
        batch: "batch size",
        correlation: "sample correlation",
        drift: "target drift",
        stability: "stability",
        note:
          "DQN stabilizes Q-learning with replay buffers and target networks. Replay reduces sample correlation; target networks slow the moving target inside the Bellman regression."
      }
    : {
        replay: "replay buffer size",
        target: "target lag",
        batch: "batch size",
        correlation: "sample correlation",
        drift: "target drift",
        stability: "stability",
        note:
          "DQN stabilizes Q-learning with replay buffers and target networks. Replay reduces sample correlation; target networks slow the moving target inside the Bellman regression."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-dqn-widget" aria-label="DQN replay buffer and target network stability">
        <div class="rl-dqn-flow">
          <span><b>collect</b><em class="rl-dqn-collect"></em></span>
          <span><b>replay</b><em class="rl-dqn-replay"></em></span>
          <span><b>target</b><em class="rl-dqn-target"></em></span>
        </div>
        <div class="rl-dqn-stats">
          <span><b>${labels.correlation}</b><em class="rl-dqn-correlation"></em></span>
          <span><b>${labels.drift}</b><em class="rl-dqn-drift"></em></span>
          <span><b>${labels.stability}</b><em class="rl-dqn-stability"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-dqn-readout"></p>
    `,
    `
      <label>
        <span>${labels.replay}</span>
        <input class="rl-dqn-replay-input" type="range" min="1" max="10" step="1" value="6">
      </label>
      <label>
        <span>${labels.target}</span>
        <input class="rl-dqn-target-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.batch}</span>
        <input class="rl-dqn-batch-input" type="range" min="1" max="10" step="1" value="5">
      </label>
    `
  );

  const replayInput = block.querySelector(".rl-dqn-replay-input");
  const targetInput = block.querySelector(".rl-dqn-target-input");
  const batchInput = block.querySelector(".rl-dqn-batch-input");
  const collect = block.querySelector(".rl-dqn-collect");
  const replay = block.querySelector(".rl-dqn-replay");
  const target = block.querySelector(".rl-dqn-target");
  const correlationValue = block.querySelector(".rl-dqn-correlation");
  const driftValue = block.querySelector(".rl-dqn-drift");
  const stabilityValue = block.querySelector(".rl-dqn-stability");
  const readout = block.querySelector(".rl-dqn-readout");

  const update = () => {
    const replaySize = Number(replayInput.value);
    const targetLag = Number(targetInput.value);
    const batch = Number(batchInput.value);
    const correlation = Math.max(0.04, 1 / (1 + replaySize * 0.7 + batch * 0.25));
    const drift = Math.max(0.02, 1 - targetLag * 0.85);
    const stability = Math.min(1, (1 - correlation) * 0.45 + targetLag * 0.35 + Math.min(1, batch / 10) * 0.2);
    collect.textContent = `${batch} env steps`;
    replay.textContent = `${replaySize * 1000} transitions`;
    target.textContent = targetLag > 0.55 ? "slow target" : "moving target";
    correlationValue.textContent = `${Math.round(correlation * 100)}%`;
    driftValue.textContent = `${Math.round(drift * 100)}%`;
    stabilityValue.textContent = `${Math.round(stability * 100)}%`;
    readout.textContent = `replay=${replaySize}k, target lag=${targetLag.toFixed(2)}, batch=${batch}. ${labels.note}`;
  };

  [replayInput, targetInput, batchInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLDoubleQOverestimationLab(block) {
  const labels = currentLang === "zh"
    ? {
        noise: "Q noise",
        actions: "actions",
        standard: "standard target",
        doubleq: "double Q target",
        bias: "overestimate",
        note:
          "The max operator over noisy Q estimates is biased upward. Double Q-learning uses one estimator to select the action and another to evaluate it, reducing overestimation."
      }
    : {
        noise: "Q noise",
        actions: "actions",
        standard: "standard target",
        doubleq: "double Q target",
        bias: "overestimate",
        note:
          "The max operator over noisy Q estimates is biased upward. Double Q-learning uses one estimator to select the action and another to evaluate it, reducing overestimation."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-doubleq-widget" aria-label="Double Q-learning overestimation">
        <div class="rl-doubleq-bars"></div>
        <div class="rl-doubleq-stats">
          <span><b>${labels.standard}</b><em class="rl-doubleq-standard"></em></span>
          <span><b>${labels.doubleq}</b><em class="rl-doubleq-double"></em></span>
          <span><b>${labels.bias}</b><em class="rl-doubleq-bias"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-doubleq-readout"></p>
    `,
    `
      <label>
        <span>${labels.noise}</span>
        <input class="rl-doubleq-noise-input" type="range" min="0" max="2" step="0.1" value="0.8">
      </label>
      <label>
        <span>${labels.actions}</span>
        <input class="rl-doubleq-actions-input" type="range" min="2" max="8" step="1" value="4">
      </label>
    `
  );

  const noiseInput = block.querySelector(".rl-doubleq-noise-input");
  const actionsInput = block.querySelector(".rl-doubleq-actions-input");
  const bars = block.querySelector(".rl-doubleq-bars");
  const standardValue = block.querySelector(".rl-doubleq-standard");
  const doubleValue = block.querySelector(".rl-doubleq-double");
  const biasValue = block.querySelector(".rl-doubleq-bias");
  const readout = block.querySelector(".rl-doubleq-readout");

  const update = () => {
    const noise = Number(noiseInput.value);
    const actions = Number(actionsInput.value);
    const trueValues = Array.from({ length: actions }, (_, i) => 1.6 - Math.abs(i - 1.5) * 0.18);
    const qA = trueValues.map((value, i) => value + noise * Math.sin(1.7 * (i + 1)));
    const qB = trueValues.map((value, i) => value + noise * Math.cos(1.2 * (i + 2)) * 0.75);
    const selected = qA.indexOf(Math.max(...qA));
    const standard = Math.max(...qA);
    const doubleq = qB[selected];
    const trueBest = Math.max(...trueValues);
    const bias = standard - trueBest;
    bars.innerHTML = qA.map((value, index) => `
      <span class="${index === selected ? "active-rl-doubleq-bar" : ""}" style="height:${34 + Math.max(0, value) * 46}px">
        <b>a${index}</b>
        <em>${value.toFixed(2)}</em>
      </span>
    `).join("");
    standardValue.textContent = standard.toFixed(2);
    doubleValue.textContent = doubleq.toFixed(2);
    biasValue.textContent = bias.toFixed(2);
    readout.textContent = `selected action=a${selected}, noise=${noise.toFixed(1)}, actions=${actions}. ${labels.note}`;
  };

  [noiseInput, actionsInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLContinuousQMaxLab(block) {
  const labels = currentLang === "zh"
    ? {
        width: "Q peak width",
        samples: "random samples",
        actor: "actor quality",
        random: "random/CEM",
        naf: "NAF quadratic",
        learned: "learned actor",
        note:
          "Continuous-action Q-learning is hard because every target needs a max over actions. Practical options include stochastic optimization, easily maximizable Q-classes, or learning an actor that approximately maximizes Q."
      }
    : {
        width: "Q peak width",
        samples: "random samples",
        actor: "actor quality",
        random: "random/CEM",
        naf: "NAF quadratic",
        learned: "learned actor",
        note:
          "Continuous-action Q-learning is hard because every target needs a max over actions. Practical options include stochastic optimization, easily maximizable Q-classes, or learning an actor that approximately maximizes Q."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-contq-widget" aria-label="Continuous action Q maximization options">
        <svg class="interactive-svg rl-contq-svg" viewBox="0 0 720 300" aria-hidden="true">
          <line x1="70" y1="244" x2="650" y2="244" class="axis-line"></line>
          <line x1="70" y1="244" x2="70" y2="42" class="axis-line"></line>
          <polyline class="rl-contq-curve" points=""></polyline>
          <g class="rl-contq-points"></g>
          <text x="590" y="272" class="svg-label">a</text>
          <text x="84" y="36" class="svg-label">Q(s,a)</text>
        </svg>
        <div class="rl-contq-stats">
          <span><b>${labels.random}</b><em class="rl-contq-random"></em></span>
          <span><b>${labels.naf}</b><em class="rl-contq-naf"></em></span>
          <span><b>${labels.learned}</b><em class="rl-contq-actor"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-contq-readout"></p>
    `,
    `
      <label>
        <span>${labels.width}</span>
        <input class="rl-contq-width-input" type="range" min="0.2" max="1.5" step="0.05" value="0.75">
      </label>
      <label>
        <span>${labels.samples}</span>
        <input class="rl-contq-samples-input" type="range" min="3" max="30" step="1" value="12">
      </label>
      <label>
        <span>${labels.actor}</span>
        <input class="rl-contq-actor-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
    `
  );

  const widthInput = block.querySelector(".rl-contq-width-input");
  const samplesInput = block.querySelector(".rl-contq-samples-input");
  const actorInput = block.querySelector(".rl-contq-actor-input");
  const curve = block.querySelector(".rl-contq-curve");
  const points = block.querySelector(".rl-contq-points");
  const randomValue = block.querySelector(".rl-contq-random");
  const nafValue = block.querySelector(".rl-contq-naf");
  const actorValue = block.querySelector(".rl-contq-actor");
  const readout = block.querySelector(".rl-contq-readout");

  const qValue = (a, width) => 3.2 * Math.exp(-((a - 0.35) ** 2) / width) + 1.2 * Math.exp(-((a + 1.1) ** 2) / (width * 0.6));
  const toX = (a) => 70 + ((a + 2) / 4) * 560;
  const toY = (q) => 244 - (q / 3.5) * 180;

  const update = () => {
    const width = Number(widthInput.value);
    const sampleCount = Number(samplesInput.value);
    const actorQuality = Number(actorInput.value);
    const xs = Array.from({ length: 80 }, (_, i) => -2 + (i / 79) * 4);
    curve.setAttribute("points", xs.map((a) => `${toX(a).toFixed(1)},${toY(qValue(a, width)).toFixed(1)}`).join(" "));
    const samples = Array.from({ length: sampleCount }, (_, i) => -1.85 + ((i * 37) % sampleCount) / Math.max(1, sampleCount - 1) * 3.7);
    const bestSample = samples.reduce((best, a) => qValue(a, width) > qValue(best, width) ? a : best, samples[0]);
    const actorA = -1.4 + actorQuality * 1.75;
    const nafA = 0.15;
    points.innerHTML = [
      ...samples.map((a) => `<circle cx="${toX(a)}" cy="${toY(qValue(a, width))}" r="4" class="rl-contq-sample"></circle>`),
      `<circle cx="${toX(bestSample)}" cy="${toY(qValue(bestSample, width))}" r="8" class="rl-contq-random-point"></circle>`,
      `<circle cx="${toX(nafA)}" cy="${toY(qValue(nafA, width))}" r="8" class="rl-contq-naf-point"></circle>`,
      `<circle cx="${toX(actorA)}" cy="${toY(qValue(actorA, width))}" r="8" class="rl-contq-actor-point"></circle>`
    ].join("");
    randomValue.textContent = qValue(bestSample, width).toFixed(2);
    nafValue.textContent = qValue(nafA, width).toFixed(2);
    actorValue.textContent = qValue(actorA, width).toFixed(2);
    readout.textContent = `samples=${sampleCount}, actor quality=${actorQuality.toFixed(2)}, width=${width.toFixed(2)}. ${labels.note}`;
  };

  [widthInput, samplesInput, actorInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLPolicyIterationSurrogateLab(block) {
  const labels = currentLang === "zh"
    ? {
        ratio: "importance ratio",
        advantage: "advantage scale",
        shift: "state mismatch",
        surrogate: "surrogate gain",
        trueGain: "true gain",
        gap: "mismatch gap",
        note:
          "Policy gradient can be read as approximate policy iteration. The surrogate uses old-policy states and importance ratios; it is reliable only when the new policy does not move the state distribution too far."
      }
    : {
        ratio: "importance ratio",
        advantage: "advantage scale",
        shift: "state mismatch",
        surrogate: "surrogate gain",
        trueGain: "true gain",
        gap: "mismatch gap",
        note:
          "Policy gradient can be read as approximate policy iteration. The surrogate uses old-policy states and importance ratios; it is reliable only when the new policy does not move the state distribution too far."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-surrogate-widget" aria-label="Policy iteration surrogate objective">
        <div class="rl-surrogate-flow">
          <span><b>old states</b><em class="rl-surrogate-old"></em></span>
          <span><b>ratio</b><em class="rl-surrogate-ratio"></em></span>
          <span><b>new states</b><em class="rl-surrogate-new"></em></span>
        </div>
        <div class="rl-surrogate-stats">
          <span><b>${labels.surrogate}</b><em class="rl-surrogate-gain"></em></span>
          <span><b>${labels.trueGain}</b><em class="rl-surrogate-true"></em></span>
          <span><b>${labels.gap}</b><em class="rl-surrogate-gap"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-surrogate-readout"></p>
    `,
    `
      <label>
        <span>${labels.ratio}</span>
        <input class="rl-surrogate-ratio-input" type="range" min="0.6" max="1.8" step="0.05" value="1.15">
      </label>
      <label>
        <span>${labels.advantage}</span>
        <input class="rl-surrogate-advantage-input" type="range" min="-2" max="4" step="0.25" value="1.5">
      </label>
      <label>
        <span>${labels.shift}</span>
        <input class="rl-surrogate-shift-input" type="range" min="0" max="1" step="0.05" value="0.25">
      </label>
    `
  );

  const ratioInput = block.querySelector(".rl-surrogate-ratio-input");
  const advantageInput = block.querySelector(".rl-surrogate-advantage-input");
  const shiftInput = block.querySelector(".rl-surrogate-shift-input");
  const oldValue = block.querySelector(".rl-surrogate-old");
  const ratioValue = block.querySelector(".rl-surrogate-ratio");
  const newValue = block.querySelector(".rl-surrogate-new");
  const surrogateValue = block.querySelector(".rl-surrogate-gain");
  const trueValue = block.querySelector(".rl-surrogate-true");
  const gapValue = block.querySelector(".rl-surrogate-gap");
  const readout = block.querySelector(".rl-surrogate-readout");

  const update = () => {
    const ratio = Number(ratioInput.value);
    const advantage = Number(advantageInput.value);
    const shift = Number(shiftInput.value);
    const surrogate = ratio * advantage;
    const mismatchPenalty = shift * (0.8 + Math.abs(advantage) * 0.35) * Math.max(0.25, ratio);
    const trueGain = surrogate - mismatchPenalty;
    oldValue.textContent = `${Math.round((1 - shift) * 100)}% trusted`;
    ratioValue.textContent = ratio.toFixed(2);
    newValue.textContent = `${Math.round(shift * 100)}% shifted`;
    surrogateValue.textContent = surrogate.toFixed(2);
    trueValue.textContent = trueGain.toFixed(2);
    gapValue.textContent = mismatchPenalty.toFixed(2);
    readout.textContent = `L_pi(theta) ~= E_old[ratio * A], ratio=${ratio.toFixed(2)}, shift=${shift.toFixed(2)}. ${labels.note}`;
  };

  [ratioInput, advantageInput, shiftInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLTRPOKLBoundLab(block) {
  const labels = currentLang === "zh"
    ? {
        kl: "max KL",
        horizon: "effective horizon",
        advantage: "max advantage",
        surrogate: "surrogate gain",
        penalty: "bound penalty",
        certified: "certified gain",
        note:
          "TRPO-style analysis says a surrogate improvement is meaningful only after subtracting a distribution-shift penalty. Smaller KL and shorter horizons make the bound less pessimistic."
      }
    : {
        kl: "max KL",
        horizon: "effective horizon",
        advantage: "max advantage",
        surrogate: "surrogate gain",
        penalty: "bound penalty",
        certified: "certified gain",
        note:
          "TRPO-style analysis says a surrogate improvement is meaningful only after subtracting a distribution-shift penalty. Smaller KL and shorter horizons make the bound less pessimistic."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-trpo-widget" aria-label="TRPO KL trust-region bound">
        <svg class="interactive-svg rl-trpo-svg" viewBox="0 0 720 280" aria-hidden="true">
          <line x1="72" y1="218" x2="650" y2="218" class="axis-line"></line>
          <line x1="72" y1="218" x2="72" y2="44" class="axis-line"></line>
          <rect class="rl-trpo-gain-bar" x="135" y="100" width="90" height="118"></rect>
          <rect class="rl-trpo-penalty-bar" x="315" y="150" width="90" height="68"></rect>
          <rect class="rl-trpo-certified-bar" x="495" y="130" width="90" height="88"></rect>
          <text x="128" y="246" class="svg-label">${labels.surrogate}</text>
          <text x="310" y="246" class="svg-label">${labels.penalty}</text>
          <text x="490" y="246" class="svg-label">${labels.certified}</text>
        </svg>
        <div class="rl-trpo-stats">
          <span><b>${labels.surrogate}</b><em class="rl-trpo-gain"></em></span>
          <span><b>${labels.penalty}</b><em class="rl-trpo-penalty"></em></span>
          <span><b>${labels.certified}</b><em class="rl-trpo-certified"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-trpo-readout"></p>
    `,
    `
      <label>
        <span>${labels.kl}</span>
        <input class="rl-trpo-kl-input" type="range" min="0.001" max="0.15" step="0.001" value="0.025">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-trpo-horizon-input" type="range" min="2" max="20" step="1" value="8">
      </label>
      <label>
        <span>${labels.advantage}</span>
        <input class="rl-trpo-advantage-input" type="range" min="0.5" max="5" step="0.25" value="2">
      </label>
    `
  );

  const klInput = block.querySelector(".rl-trpo-kl-input");
  const horizonInput = block.querySelector(".rl-trpo-horizon-input");
  const advantageInput = block.querySelector(".rl-trpo-advantage-input");
  const gainBar = block.querySelector(".rl-trpo-gain-bar");
  const penaltyBar = block.querySelector(".rl-trpo-penalty-bar");
  const certifiedBar = block.querySelector(".rl-trpo-certified-bar");
  const gainValue = block.querySelector(".rl-trpo-gain");
  const penaltyValue = block.querySelector(".rl-trpo-penalty");
  const certifiedValue = block.querySelector(".rl-trpo-certified");
  const readout = block.querySelector(".rl-trpo-readout");

  const setBar = (bar, value, maxValue) => {
    const height = Math.max(4, Math.min(150, (Math.abs(value) / maxValue) * 150));
    bar.setAttribute("y", String(218 - height));
    bar.setAttribute("height", String(height));
    bar.classList.toggle("negative-rl-trpo-bar", value < 0);
  };

  const update = () => {
    const kl = Number(klInput.value);
    const horizon = Number(horizonInput.value);
    const maxAdvantage = Number(advantageInput.value);
    const surrogate = maxAdvantage * 0.55;
    const penalty = 2 * horizon * maxAdvantage * Math.sqrt(Math.max(0, kl));
    const certified = surrogate - penalty;
    const scale = Math.max(1, surrogate, penalty, Math.abs(certified));
    setBar(gainBar, surrogate, scale);
    setBar(penaltyBar, penalty, scale);
    setBar(certifiedBar, certified, scale);
    gainValue.textContent = surrogate.toFixed(2);
    penaltyValue.textContent = penalty.toFixed(2);
    certifiedValue.textContent = certified.toFixed(2);
    readout.textContent = `KL=${kl.toFixed(3)}, horizon=${horizon}, max advantage=${maxAdvantage.toFixed(2)}. ${labels.note}`;
  };

  [klInput, horizonInput, advantageInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLFisherNaturalStepLab(block) {
  const labels = currentLang === "zh"
    ? {
        curvature: "Fisher anisotropy",
        budget: "KL budget",
        gradient: "gradient tilt",
        vanilla: "vanilla step",
        natural: "natural step",
        kl: "natural KL",
        note:
          "Natural gradient uses the Fisher metric to choose a direction that respects policy-distribution distance. It rescales steep Euclidean directions when they change action probabilities too much."
      }
    : {
        curvature: "Fisher anisotropy",
        budget: "KL budget",
        gradient: "gradient tilt",
        vanilla: "vanilla step",
        natural: "natural step",
        kl: "natural KL",
        note:
          "Natural gradient uses the Fisher metric to choose a direction that respects policy-distribution distance. It rescales steep Euclidean directions when they change action probabilities too much."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-fisher-widget" aria-label="Fisher metric natural gradient step">
        <svg class="interactive-svg rl-fisher-svg" viewBox="0 0 720 320" aria-hidden="true">
          <defs>
            <marker id="rlFisherArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z"></path>
            </marker>
          </defs>
          <line x1="72" y1="174" x2="654" y2="174" class="axis-line"></line>
          <line x1="280" y1="286" x2="280" y2="46" class="axis-line"></line>
          <ellipse class="rl-fisher-ellipse" cx="280" cy="174" rx="86" ry="86"></ellipse>
          <line class="rl-fisher-vanilla" x1="280" y1="174" x2="380" y2="118"></line>
          <line class="rl-fisher-natural" x1="280" y1="174" x2="338" y2="104"></line>
        </svg>
        <div class="rl-fisher-stats">
          <span><b>${labels.vanilla}</b><em class="rl-fisher-vanilla-value"></em></span>
          <span><b>${labels.natural}</b><em class="rl-fisher-natural-value"></em></span>
          <span><b>${labels.kl}</b><em class="rl-fisher-kl-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-fisher-readout"></p>
    `,
    `
      <label>
        <span>${labels.curvature}</span>
        <input class="rl-fisher-curvature-input" type="range" min="1" max="9" step="0.25" value="5">
      </label>
      <label>
        <span>${labels.budget}</span>
        <input class="rl-fisher-budget-input" type="range" min="0.02" max="0.4" step="0.01" value="0.1">
      </label>
      <label>
        <span>${labels.gradient}</span>
        <input class="rl-fisher-tilt-input" type="range" min="-1" max="1" step="0.05" value="0.35">
      </label>
    `
  );

  const curvatureInput = block.querySelector(".rl-fisher-curvature-input");
  const budgetInput = block.querySelector(".rl-fisher-budget-input");
  const tiltInput = block.querySelector(".rl-fisher-tilt-input");
  const ellipse = block.querySelector(".rl-fisher-ellipse");
  const vanillaLine = block.querySelector(".rl-fisher-vanilla");
  const naturalLine = block.querySelector(".rl-fisher-natural");
  const vanillaValue = block.querySelector(".rl-fisher-vanilla-value");
  const naturalValue = block.querySelector(".rl-fisher-natural-value");
  const klValue = block.querySelector(".rl-fisher-kl-value");
  const readout = block.querySelector(".rl-fisher-readout");
  const origin = { x: 280, y: 174 };
  const scale = 145;

  const setVector = (line, v) => {
    line.setAttribute("x2", String(origin.x + v.x * scale));
    line.setAttribute("y2", String(origin.y - v.y * scale));
  };

  const update = () => {
    const curvature = Number(curvatureInput.value);
    const budget = Number(budgetInput.value);
    const tilt = Number(tiltInput.value);
    const gradient = { x: 0.75, y: 0.35 + tilt * 0.35 };
    const vanilla = { x: gradient.x * 0.45, y: gradient.y * 0.45 };
    const rawNatural = { x: gradient.x / curvature, y: gradient.y };
    const rawKl = 0.5 * (curvature * rawNatural.x * rawNatural.x + rawNatural.y * rawNatural.y);
    const factor = Math.sqrt(budget / Math.max(0.0001, rawKl));
    const natural = { x: rawNatural.x * factor, y: rawNatural.y * factor };
    const naturalKl = 0.5 * (curvature * natural.x * natural.x + natural.y * natural.y);
    ellipse.setAttribute("rx", String(Math.max(24, 115 / Math.sqrt(curvature))));
    ellipse.setAttribute("ry", "115");
    setVector(vanillaLine, vanilla);
    setVector(naturalLine, natural);
    vanillaValue.textContent = `(${vanilla.x.toFixed(2)}, ${vanilla.y.toFixed(2)})`;
    naturalValue.textContent = `(${natural.x.toFixed(2)}, ${natural.y.toFixed(2)})`;
    klValue.textContent = naturalKl.toFixed(3);
    readout.textContent = `F anisotropy=${curvature.toFixed(2)}, KL budget=${budget.toFixed(2)}. ${labels.note}`;
  };

  [curvatureInput, budgetInput, tiltInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLCEMShootingLab(block) {
  const labels = currentLang === "zh"
    ? {
        iterations: "CEM iterations",
        elite: "elite fraction",
        noise: "action noise",
        mean: "mean action",
        spread: "distribution spread",
        reward: "best rollout",
        note:
          "Random shooting samples open-loop action sequences. CEM repeats this but refits the sampling distribution to elite rollouts, so probability mass moves toward high-return action sequences."
      }
    : {
        iterations: "CEM iterations",
        elite: "elite fraction",
        noise: "action noise",
        mean: "mean action",
        spread: "distribution spread",
        reward: "best rollout",
        note:
          "Random shooting samples open-loop action sequences. CEM repeats this but refits the sampling distribution to elite rollouts, so probability mass moves toward high-return action sequences."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-cem-widget" aria-label="Cross entropy method open-loop shooting">
        <svg class="interactive-svg rl-cem-svg" viewBox="0 0 720 300" aria-hidden="true">
          <line x1="70" y1="242" x2="650" y2="242" class="axis-line"></line>
          <line x1="70" y1="242" x2="70" y2="48" class="axis-line"></line>
          <polyline class="rl-cem-curve" points=""></polyline>
          <g class="rl-cem-samples"></g>
          <text x="584" y="270" class="svg-label">action sequence</text>
          <text x="82" y="40" class="svg-label">return</text>
        </svg>
        <div class="rl-cem-stats">
          <span><b>${labels.mean}</b><em class="rl-cem-mean"></em></span>
          <span><b>${labels.spread}</b><em class="rl-cem-spread"></em></span>
          <span><b>${labels.reward}</b><em class="rl-cem-reward"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-cem-readout"></p>
    `,
    `
      <label>
        <span>${labels.iterations}</span>
        <input class="rl-cem-iterations-input" type="range" min="0" max="6" step="1" value="3">
      </label>
      <label>
        <span>${labels.elite}</span>
        <input class="rl-cem-elite-input" type="range" min="0.1" max="0.6" step="0.05" value="0.25">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="rl-cem-noise-input" type="range" min="0.2" max="2" step="0.1" value="1">
      </label>
    `
  );

  const iterationsInput = block.querySelector(".rl-cem-iterations-input");
  const eliteInput = block.querySelector(".rl-cem-elite-input");
  const noiseInput = block.querySelector(".rl-cem-noise-input");
  const curve = block.querySelector(".rl-cem-curve");
  const samplesGroup = block.querySelector(".rl-cem-samples");
  const meanValue = block.querySelector(".rl-cem-mean");
  const spreadValue = block.querySelector(".rl-cem-spread");
  const rewardValue = block.querySelector(".rl-cem-reward");
  const readout = block.querySelector(".rl-cem-readout");

  const objective = (x) => 2.8 * Math.exp(-((x - 0.6) ** 2) / 0.32) + 1.5 * Math.exp(-((x + 1.1) ** 2) / 0.24) - 0.2 * x;
  const toX = (x) => 70 + ((x + 2.2) / 4.4) * 560;
  const toY = (y) => 242 - (Math.max(-0.2, y) / 3.1) * 178;

  const update = () => {
    const iterations = Number(iterationsInput.value);
    const elite = Number(eliteInput.value);
    const noise = Number(noiseInput.value);
    const xs = Array.from({ length: 90 }, (_, i) => -2.2 + (i / 89) * 4.4);
    curve.setAttribute("points", xs.map((x) => `${toX(x).toFixed(1)},${toY(objective(x)).toFixed(1)}`).join(" "));
    const mean = -1.1 + (1 - Math.exp(-iterations * 0.45)) * 1.75;
    const spread = Math.max(0.18, noise * (1 - elite) ** iterations);
    const samples = Array.from({ length: 18 }, (_, i) => {
      const z = Math.sin((i + 1) * 2.17) + 0.35 * Math.cos((i + 1) * 1.31);
      return Math.max(-2.2, Math.min(2.2, mean + spread * z));
    });
    const best = samples.reduce((candidate, x) => objective(x) > objective(candidate) ? x : candidate, samples[0]);
    samplesGroup.innerHTML = samples.map((x) => `
      <circle cx="${toX(x)}" cy="${toY(objective(x))}" r="${x === best ? 8 : 4}" class="${x === best ? "active-rl-cem-sample" : "rl-cem-sample"}"></circle>
    `).join("");
    meanValue.textContent = mean.toFixed(2);
    spreadValue.textContent = spread.toFixed(2);
    rewardValue.textContent = objective(best).toFixed(2);
    readout.textContent = `iterations=${iterations}, elite=${elite.toFixed(2)}, noise=${noise.toFixed(1)}. ${labels.note}`;
  };

  [iterationsInput, eliteInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLMCTSUCTLab(block) {
  const labels = currentLang === "zh"
    ? {
        exploration: "exploration c",
        visits: "parent visits",
        rollout: "rollout bonus",
        best: "selected child",
        exploit: "exploitation",
        explore: "exploration",
        note:
          "MCTS uses rollouts to estimate action values in a search tree. UCT chooses nodes by mixing high mean return with an exploration bonus for less-visited branches."
      }
    : {
        exploration: "exploration c",
        visits: "parent visits",
        rollout: "rollout bonus",
        best: "selected child",
        exploit: "exploitation",
        explore: "exploration",
        note:
          "MCTS uses rollouts to estimate action values in a search tree. UCT chooses nodes by mixing high mean return with an exploration bonus for less-visited branches."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-mcts-widget" aria-label="Monte Carlo tree search UCT choice">
        <div class="rl-mcts-tree"></div>
        <div class="rl-mcts-stats">
          <span><b>${labels.best}</b><em class="rl-mcts-best"></em></span>
          <span><b>${labels.exploit}</b><em class="rl-mcts-exploit"></em></span>
          <span><b>${labels.explore}</b><em class="rl-mcts-explore"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-mcts-readout"></p>
    `,
    `
      <label>
        <span>${labels.exploration}</span>
        <input class="rl-mcts-c-input" type="range" min="0" max="3" step="0.1" value="1.4">
      </label>
      <label>
        <span>${labels.visits}</span>
        <input class="rl-mcts-visits-input" type="range" min="10" max="300" step="10" value="80">
      </label>
      <label>
        <span>${labels.rollout}</span>
        <input class="rl-mcts-rollout-input" type="range" min="-3" max="3" step="0.25" value="0.75">
      </label>
    `
  );

  const cInput = block.querySelector(".rl-mcts-c-input");
  const visitsInput = block.querySelector(".rl-mcts-visits-input");
  const rolloutInput = block.querySelector(".rl-mcts-rollout-input");
  const tree = block.querySelector(".rl-mcts-tree");
  const bestValue = block.querySelector(".rl-mcts-best");
  const exploitValue = block.querySelector(".rl-mcts-exploit");
  const exploreValue = block.querySelector(".rl-mcts-explore");
  const readout = block.querySelector(".rl-mcts-readout");

  const update = () => {
    const c = Number(cInput.value);
    const parentVisits = Number(visitsInput.value);
    const rollout = Number(rolloutInput.value);
    const children = [
      { name: "A", q: 10 + rollout * 0.2, n: 6 },
      { name: "B", q: 7.5 + rollout * 0.8, n: 2 },
      { name: "C", q: 13 - rollout * 0.1, n: 20 },
      { name: "D", q: 5 + rollout, n: 1 }
    ].map((child) => {
      const exploit = child.q;
      const explore = c * Math.sqrt(Math.log(parentVisits) / child.n);
      return { ...child, exploit, explore, score: exploit + explore };
    });
    const best = children.reduce((a, b) => b.score > a.score ? b : a, children[0]);
    tree.innerHTML = children.map((child) => `
      <span class="${child.name === best.name ? "active-rl-mcts-node" : ""}">
        <b>${child.name}</b>
        <em>Q=${child.q.toFixed(1)}</em>
        <small>N=${child.n}, UCT=${child.score.toFixed(1)}</small>
      </span>
    `).join("");
    bestValue.textContent = best.name;
    exploitValue.textContent = best.exploit.toFixed(2);
    exploreValue.textContent = best.explore.toFixed(2);
    readout.textContent = `UCT=Q+c*sqrt(log(N_parent)/N_child), c=${c.toFixed(1)}, parent visits=${parentVisits}. ${labels.note}`;
  };

  [cInput, visitsInput, rolloutInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLLQRRiccatiLab(block) {
  const labels = currentLang === "zh"
    ? {
        dynamics: "dynamics gain A",
        control: "control cost R",
        horizon: "horizon",
        gain: "feedback gain",
        cost: "cost-to-go",
        stability: "closed-loop",
        note:
          "LQR solves a linear dynamics plus quadratic cost problem by a backward dynamic-programming recursion. The backward pass produces a feedback controller, not only an open-loop action sequence."
      }
    : {
        dynamics: "dynamics gain A",
        control: "control cost R",
        horizon: "horizon",
        gain: "feedback gain",
        cost: "cost-to-go",
        stability: "closed-loop",
        note:
          "LQR solves a linear dynamics plus quadratic cost problem by a backward dynamic-programming recursion. The backward pass produces a feedback controller, not only an open-loop action sequence."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-lqr-widget" aria-label="LQR backward Riccati recursion">
        <div class="rl-lqr-chain"></div>
        <div class="rl-lqr-stats">
          <span><b>${labels.gain}</b><em class="rl-lqr-gain"></em></span>
          <span><b>${labels.cost}</b><em class="rl-lqr-cost"></em></span>
          <span><b>${labels.stability}</b><em class="rl-lqr-stability"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-lqr-readout"></p>
    `,
    `
      <label>
        <span>${labels.dynamics}</span>
        <input class="rl-lqr-dynamics-input" type="range" min="0.6" max="1.4" step="0.05" value="1.1">
      </label>
      <label>
        <span>${labels.control}</span>
        <input class="rl-lqr-control-input" type="range" min="0.2" max="3" step="0.1" value="1">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-lqr-horizon-input" type="range" min="2" max="8" step="1" value="5">
      </label>
    `
  );

  const dynamicsInput = block.querySelector(".rl-lqr-dynamics-input");
  const controlInput = block.querySelector(".rl-lqr-control-input");
  const horizonInput = block.querySelector(".rl-lqr-horizon-input");
  const chain = block.querySelector(".rl-lqr-chain");
  const gainValue = block.querySelector(".rl-lqr-gain");
  const costValue = block.querySelector(".rl-lqr-cost");
  const stabilityValue = block.querySelector(".rl-lqr-stability");
  const readout = block.querySelector(".rl-lqr-readout");

  const update = () => {
    const A = Number(dynamicsInput.value);
    const B = 1;
    const Q = 1;
    const R = Number(controlInput.value);
    const horizon = Number(horizonInput.value);
    let P = 1.5;
    const values = [];
    let firstK = 0;
    for (let t = horizon; t >= 1; t -= 1) {
      const K = (B * P * A) / (R + B * P * B);
      const nextP = Q + A * P * A - (A * P * B * B * P * A) / (R + B * P * B);
      values.unshift({ t, K, P: nextP });
      firstK = K;
      P = nextP;
    }
    const closedLoop = Math.abs(A - B * firstK);
    chain.innerHTML = values.map((item) => `
      <span class="${item.t === 1 ? "active-rl-lqr-step" : ""}">
        <b>t${item.t}</b>
        <em>K=${item.K.toFixed(2)}</em>
        <small>P=${item.P.toFixed(2)}</small>
      </span>
    `).join("");
    gainValue.textContent = firstK.toFixed(2);
    costValue.textContent = P.toFixed(2);
    stabilityValue.textContent = closedLoop < 1 ? "stable" : "risky";
    readout.textContent = `u_t=-K_t x_t, A=${A.toFixed(2)}, R=${R.toFixed(1)}, horizon=${horizon}. ${labels.note}`;
  };

  [dynamicsInput, controlInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLModelErrorRolloutLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "planning horizon",
        bias: "model bias",
        replan: "replan interval",
        finalError: "final error",
        maxError: "max drift",
        updates: "observations",
        note:
          "Learned dynamics are useful, but small model errors compound when the plan is rolled out open-loop. Replanning folds fresh observations back in and limits distribution shift."
      }
    : {
        horizon: "planning horizon",
        bias: "model bias",
        replan: "replan interval",
        finalError: "final error",
        maxError: "max drift",
        updates: "observations",
        note:
          "Learned dynamics are useful, but small model errors compound when the plan is rolled out open-loop. Replanning folds fresh observations back in and limits distribution shift."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-model-widget" aria-label="Model-based rollout error and replanning">
        <svg class="interactive-svg rl-model-svg" viewBox="0 0 720 300" aria-hidden="true">
          <line x1="64" y1="238" x2="656" y2="238" class="axis-line"></line>
          <line x1="64" y1="238" x2="64" y2="52" class="axis-line"></line>
          <polyline class="rl-model-true-line" points=""></polyline>
          <polyline class="rl-model-pred-line" points=""></polyline>
          <g class="rl-model-observations"></g>
          <text x="596" y="268" class="svg-label">time</text>
          <text x="82" y="44" class="svg-label">state</text>
        </svg>
        <div class="rl-model-stats">
          <span><b>${labels.finalError}</b><em class="rl-model-final-error"></em></span>
          <span><b>${labels.maxError}</b><em class="rl-model-max-error"></em></span>
          <span><b>${labels.updates}</b><em class="rl-model-updates"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-model-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-model-horizon-input" type="range" min="4" max="14" step="1" value="9">
      </label>
      <label>
        <span>${labels.bias}</span>
        <input class="rl-model-bias-input" type="range" min="0" max="0.45" step="0.03" value="0.18">
      </label>
      <label>
        <span>${labels.replan}</span>
        <input class="rl-model-replan-input" type="range" min="1" max="6" step="1" value="3">
      </label>
    `
  );

  const horizonInput = block.querySelector(".rl-model-horizon-input");
  const biasInput = block.querySelector(".rl-model-bias-input");
  const replanInput = block.querySelector(".rl-model-replan-input");
  const trueLine = block.querySelector(".rl-model-true-line");
  const predLine = block.querySelector(".rl-model-pred-line");
  const observations = block.querySelector(".rl-model-observations");
  const finalErrorValue = block.querySelector(".rl-model-final-error");
  const maxErrorValue = block.querySelector(".rl-model-max-error");
  const updatesValue = block.querySelector(".rl-model-updates");
  const readout = block.querySelector(".rl-model-readout");
  const target = 10;
  const xMap = (t, horizon) => 64 + (t / horizon) * 592;
  const yMap = (s) => 238 - (Math.max(0, Math.min(11, s)) / 11) * 178;

  const update = () => {
    const horizon = Number(horizonInput.value);
    const bias = Number(biasInput.value);
    const replan = Number(replanInput.value);
    const trueStates = [0];
    const predStates = [0];
    let observed = 0;
    let predicted = 0;
    let updates = 1;
    for (let t = 0; t < horizon; t += 1) {
      if (t % replan === 0) {
        predicted = observed;
        predStates[t] = predicted;
        updates += t === 0 ? 0 : 1;
      }
      const remaining = Math.max(1, horizon - t);
      const action = Math.max(0, Math.min(2.1, (target - predicted) / remaining));
      const modelNext = predicted + action * (1 + bias);
      const trueNext = observed + action * (1 - bias * 0.55) + 0.18 * Math.sin(t * 0.9);
      predicted = modelNext;
      observed = trueNext;
      predStates[t + 1] = predicted;
      trueStates[t + 1] = observed;
    }
    const points = (states) => states.map((s, t) => `${xMap(t, horizon).toFixed(1)},${yMap(s).toFixed(1)}`).join(" ");
    trueLine.setAttribute("points", points(trueStates));
    predLine.setAttribute("points", points(predStates));
    observations.innerHTML = trueStates.map((s, t) => t % replan === 0 ? `
      <circle cx="${xMap(t, horizon)}" cy="${yMap(s)}" r="5" class="rl-model-observation"></circle>
    ` : "").join("");
    const errors = trueStates.map((s, i) => Math.abs(s - predStates[i]));
    finalErrorValue.textContent = errors[errors.length - 1].toFixed(2);
    maxErrorValue.textContent = Math.max(...errors).toFixed(2);
    updatesValue.textContent = String(updates);
    readout.textContent = `horizon=${horizon}, bias=${bias.toFixed(2)}, replan every ${replan} step(s). ${labels.note}`;
  };

  [horizonInput, biasInput, replanInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLEnsembleUncertaintyLab(block) {
  const labels = currentLang === "zh"
    ? {
        disagreement: "model disagreement",
        risk: "risk penalty",
        horizon: "planning horizon",
        selected: "selected plan",
        penalty: "uncertainty penalty",
        score: "planning score",
        note:
          "An ensemble approximates epistemic uncertainty. Planning can score actions by mean reward minus an uncertainty penalty, which helps avoid exploiting model errors."
      }
    : {
        disagreement: "model disagreement",
        risk: "risk penalty",
        horizon: "planning horizon",
        selected: "selected plan",
        penalty: "uncertainty penalty",
        score: "planning score",
        note:
          "An ensemble approximates epistemic uncertainty. Planning can score actions by mean reward minus an uncertainty penalty, which helps avoid exploiting model errors."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-ensemble-widget" aria-label="Ensemble uncertainty planning">
        <div class="rl-ensemble-actions"></div>
        <div class="rl-ensemble-stats">
          <span><b>${labels.selected}</b><em class="rl-ensemble-selected"></em></span>
          <span><b>${labels.penalty}</b><em class="rl-ensemble-penalty"></em></span>
          <span><b>${labels.score}</b><em class="rl-ensemble-score"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-ensemble-readout"></p>
    `,
    `
      <label>
        <span>${labels.disagreement}</span>
        <input class="rl-ensemble-disagreement-input" type="range" min="0" max="1.5" step="0.05" value="0.75">
      </label>
      <label>
        <span>${labels.risk}</span>
        <input class="rl-ensemble-risk-input" type="range" min="0" max="2" step="0.1" value="0.9">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-ensemble-horizon-input" type="range" min="1" max="8" step="1" value="4">
      </label>
    `
  );

  const disagreementInput = block.querySelector(".rl-ensemble-disagreement-input");
  const riskInput = block.querySelector(".rl-ensemble-risk-input");
  const horizonInput = block.querySelector(".rl-ensemble-horizon-input");
  const actions = block.querySelector(".rl-ensemble-actions");
  const selectedValue = block.querySelector(".rl-ensemble-selected");
  const penaltyValue = block.querySelector(".rl-ensemble-penalty");
  const scoreValue = block.querySelector(".rl-ensemble-score");
  const readout = block.querySelector(".rl-ensemble-readout");

  const update = () => {
    const disagreement = Number(disagreementInput.value);
    const risk = Number(riskInput.value);
    const horizon = Number(horizonInput.value);
    const plans = [
      { name: "safe", mean: 4.6, baseUncertainty: 0.25 },
      { name: "probe", mean: 5.2 + 0.16 * horizon, baseUncertainty: 0.55 },
      { name: "greedy", mean: 6.7 + 0.08 * horizon, baseUncertainty: 1.0 }
    ].map((plan) => {
      const uncertainty = plan.baseUncertainty * disagreement * Math.sqrt(horizon);
      const penalty = risk * uncertainty;
      return { ...plan, uncertainty, penalty, score: plan.mean - penalty };
    });
    const best = plans.reduce((a, b) => b.score > a.score ? b : a, plans[0]);
    actions.innerHTML = plans.map((plan) => `
      <span class="${plan.name === best.name ? "active-rl-ensemble-action" : ""}">
        <b>${plan.name}</b>
        <em>mean ${plan.mean.toFixed(1)}</em>
        <small>uncertainty ${plan.uncertainty.toFixed(2)} | score ${plan.score.toFixed(2)}</small>
      </span>
    `).join("");
    selectedValue.textContent = best.name;
    penaltyValue.textContent = best.penalty.toFixed(2);
    scoreValue.textContent = best.score.toFixed(2);
    readout.textContent = `score=mean reward-risk*uncertainty, disagreement=${disagreement.toFixed(2)}, risk=${risk.toFixed(1)}. ${labels.note}`;
  };

  [disagreementInput, riskInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLLatentDynamicsLab(block) {
  const labels = currentLang === "zh"
    ? {
        dim: "latent dimension",
        noise: "posterior noise",
        horizon: "rollout horizon",
        recon: "reconstruction",
        stability: "prediction",
        uncertainty: "uncertainty",
        note:
          "Image observations are high-dimensional and redundant. A latent model learns an encoder, latent dynamics, decoder or reward head, and then plans in the smaller state space."
      }
    : {
        dim: "latent dimension",
        noise: "posterior noise",
        horizon: "rollout horizon",
        recon: "reconstruction",
        stability: "prediction",
        uncertainty: "uncertainty",
        note:
          "Image observations are high-dimensional and redundant. A latent model learns an encoder, latent dynamics, decoder or reward head, and then plans in the smaller state space."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-latent-widget" aria-label="Latent space dynamics model">
        <div class="rl-latent-flow">
          <span><b>pixels</b><em class="rl-latent-pixels"></em><small>high-dimensional observation</small></span>
          <span><b>encoder</b><em class="rl-latent-encoder"></em><small>compress to z</small></span>
          <span><b>dynamics</b><em class="rl-latent-dynamics"></em><small>roll forward in latent state</small></span>
          <span><b>decoder/reward</b><em class="rl-latent-decoder"></em><small>predict images or task value</small></span>
        </div>
        <div class="rl-latent-stats">
          <span><b>${labels.recon}</b><em class="rl-latent-recon"></em></span>
          <span><b>${labels.stability}</b><em class="rl-latent-stability"></em></span>
          <span><b>${labels.uncertainty}</b><em class="rl-latent-uncertainty"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-latent-readout"></p>
    `,
    `
      <label>
        <span>${labels.dim}</span>
        <input class="rl-latent-dim-input" type="range" min="2" max="18" step="1" value="8">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="rl-latent-noise-input" type="range" min="0" max="1" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-latent-horizon-input" type="range" min="1" max="10" step="1" value="5">
      </label>
    `
  );

  const dimInput = block.querySelector(".rl-latent-dim-input");
  const noiseInput = block.querySelector(".rl-latent-noise-input");
  const horizonInput = block.querySelector(".rl-latent-horizon-input");
  const pixels = block.querySelector(".rl-latent-pixels");
  const encoder = block.querySelector(".rl-latent-encoder");
  const dynamics = block.querySelector(".rl-latent-dynamics");
  const decoder = block.querySelector(".rl-latent-decoder");
  const reconValue = block.querySelector(".rl-latent-recon");
  const stabilityValue = block.querySelector(".rl-latent-stability");
  const uncertaintyValue = block.querySelector(".rl-latent-uncertainty");
  const readout = block.querySelector(".rl-latent-readout");

  const update = () => {
    const dim = Number(dimInput.value);
    const noise = Number(noiseInput.value);
    const horizon = Number(horizonInput.value);
    const compression = Math.round(100 / Math.max(1, dim));
    const reconstruction = Math.min(0.99, 0.42 + 0.035 * dim - 0.16 * noise);
    const uncertainty = Math.min(1.8, noise * 0.9 + horizon / (dim + 8));
    const stability = Math.max(0.05, Math.exp(-uncertainty * 0.55));
    pixels.textContent = "64x64x3";
    encoder.textContent = `z=${dim}`;
    dynamics.textContent = `${horizon} step`;
    decoder.textContent = `reward ${(reconstruction * stability * 10).toFixed(1)}`;
    reconValue.textContent = reconstruction.toFixed(2);
    stabilityValue.textContent = stability.toFixed(2);
    uncertaintyValue.textContent = uncertainty.toFixed(2);
    readout.textContent = `compression about ${compression}:1, latent dim=${dim}, noise=${noise.toFixed(2)}. ${labels.note}`;
  };

  [dimInput, noiseInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLPathwiseGradientLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "horizon",
        jacobian: "model Jacobian",
        noise: "policy noise",
        pathwise: "pathwise grad",
        pg: "policy gradient",
        ratio: "sensitivity",
        note:
          "Backpropagating through a learned model multiplies many Jacobians, so gradients can vanish or explode. Score-function policy gradients are noisier, but they avoid this long product."
      }
    : {
        horizon: "horizon",
        jacobian: "model Jacobian",
        noise: "policy noise",
        pathwise: "pathwise grad",
        pg: "policy gradient",
        ratio: "sensitivity",
        note:
          "Backpropagating through a learned model multiplies many Jacobians, so gradients can vanish or explode. Score-function policy gradients are noisier, but they avoid this long product."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-pathwise-widget" aria-label="Pathwise policy gradients through learned dynamics">
        <div class="rl-pathwise-chain"></div>
        <div class="rl-pathwise-stats">
          <span><b>${labels.pathwise}</b><em class="rl-pathwise-value"></em></span>
          <span><b>${labels.pg}</b><em class="rl-policygrad-value"></em></span>
          <span><b>${labels.ratio}</b><em class="rl-pathwise-ratio"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-pathwise-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-pathwise-horizon-input" type="range" min="2" max="18" step="1" value="8">
      </label>
      <label>
        <span>${labels.jacobian}</span>
        <input class="rl-pathwise-jacobian-input" type="range" min="0.65" max="1.35" step="0.03" value="1.08">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="rl-pathwise-noise-input" type="range" min="0.1" max="1.8" step="0.1" value="0.7">
      </label>
    `
  );

  const horizonInput = block.querySelector(".rl-pathwise-horizon-input");
  const jacobianInput = block.querySelector(".rl-pathwise-jacobian-input");
  const noiseInput = block.querySelector(".rl-pathwise-noise-input");
  const chain = block.querySelector(".rl-pathwise-chain");
  const pathwiseValue = block.querySelector(".rl-pathwise-value");
  const policyGradValue = block.querySelector(".rl-policygrad-value");
  const ratioValue = block.querySelector(".rl-pathwise-ratio");
  const readout = block.querySelector(".rl-pathwise-readout");

  const update = () => {
    const horizon = Number(horizonInput.value);
    const jacobian = Number(jacobianInput.value);
    const noise = Number(noiseInput.value);
    const pathwise = jacobian ** horizon;
    const pg = Math.sqrt(horizon) * noise;
    const ratio = pathwise / Math.max(0.001, pg);
    const steps = Array.from({ length: Math.min(horizon, 9) }, (_, i) => {
      const value = jacobian ** (i + 1);
      const state = value < 0.45 ? "vanish" : value > 2.4 ? "explode" : "ok";
      return `<span class="${state === "ok" ? "" : "active-rl-pathwise-step"}"><b>t${i + 1}</b><em>${value.toFixed(2)}</em><small>${state}</small></span>`;
    });
    chain.innerHTML = steps.join("");
    pathwiseValue.textContent = pathwise.toFixed(2);
    policyGradValue.textContent = pg.toFixed(2);
    ratioValue.textContent = ratio.toFixed(2);
    readout.textContent = `pathwise approx J^H=${jacobian.toFixed(2)}^${horizon}; policy-gradient noise scale sqrt(H)*sigma=${pg.toFixed(2)}. ${labels.note}`;
  };

  [horizonInput, jacobianInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLShortRolloutDynaLab(block) {
  const labels = currentLang === "zh"
    ? {
        rollout: "model rollout length",
        real: "real data fraction",
        error: "model error",
        bias: "model bias",
        coverage: "state coverage",
        update: "updates",
        note:
          "Dyna-style algorithms use the model to generate short synthetic rollouts from real replay states. Short rollouts reduce compounding error while still adding many learning updates."
      }
    : {
        rollout: "model rollout length",
        real: "real data fraction",
        error: "model error",
        bias: "model bias",
        coverage: "state coverage",
        update: "updates",
        note:
          "Dyna-style algorithms use the model to generate short synthetic rollouts from real replay states. Short rollouts reduce compounding error while still adding many learning updates."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-dyna-widget" aria-label="Short model rollouts for Dyna-style learning">
        <div class="rl-dyna-rollouts"></div>
        <div class="rl-dyna-stats">
          <span><b>${labels.bias}</b><em class="rl-dyna-bias"></em></span>
          <span><b>${labels.coverage}</b><em class="rl-dyna-coverage"></em></span>
          <span><b>${labels.update}</b><em class="rl-dyna-updates"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-dyna-readout"></p>
    `,
    `
      <label>
        <span>${labels.rollout}</span>
        <input class="rl-dyna-rollout-input" type="range" min="1" max="12" step="1" value="3">
      </label>
      <label>
        <span>${labels.real}</span>
        <input class="rl-dyna-real-input" type="range" min="0.1" max="1" step="0.05" value="0.55">
      </label>
      <label>
        <span>${labels.error}</span>
        <input class="rl-dyna-error-input" type="range" min="0.02" max="0.35" step="0.01" value="0.12">
      </label>
    `
  );

  const rolloutInput = block.querySelector(".rl-dyna-rollout-input");
  const realInput = block.querySelector(".rl-dyna-real-input");
  const errorInput = block.querySelector(".rl-dyna-error-input");
  const rollouts = block.querySelector(".rl-dyna-rollouts");
  const biasValue = block.querySelector(".rl-dyna-bias");
  const coverageValue = block.querySelector(".rl-dyna-coverage");
  const updatesValue = block.querySelector(".rl-dyna-updates");
  const readout = block.querySelector(".rl-dyna-readout");

  const update = () => {
    const length = Number(rolloutInput.value);
    const real = Number(realInput.value);
    const error = Number(errorInput.value);
    const bias = error * length * length;
    const coverage = Math.min(1, real + 0.08 * length);
    const updates = Math.round(100 * (real + length * (1 - real)));
    rollouts.innerHTML = Array.from({ length: 6 }, (_, row) => {
      const start = Math.round(row * 100 * real);
      const cells = Array.from({ length: Math.min(length, 8) }, (_, step) => {
        const risky = error * (step + 1) ** 2 > 0.8;
        return `<i class="${risky ? "risky-rl-dyna-step" : ""}" title="model step ${step + 1}">${start + step}</i>`;
      }).join("");
      return `<span><b>real s${start}</b>${cells}</span>`;
    }).join("");
    biasValue.textContent = bias.toFixed(2);
    coverageValue.textContent = coverage.toFixed(2);
    updatesValue.textContent = String(updates);
    readout.textContent = `bias grows roughly error*H^2=${bias.toFixed(2)}, rollout length=${length}, real fraction=${real.toFixed(2)}. ${labels.note}`;
  };

  [rolloutInput, realInput, errorInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLSuccessorFeaturesLab(block) {
  const labels = currentLang === "zh"
    ? {
        gamma: "discount gamma",
        feature: "feature count",
        transfer: "reward shift",
        psi: "successor feature",
        q: "recovered Q",
        policy: "chosen policy",
        note:
          "Successor features separate dynamics from rewards: learn expected discounted future features once, then combine them with new reward weights to recover Q-values quickly."
      }
    : {
        gamma: "discount gamma",
        feature: "feature count",
        transfer: "reward shift",
        psi: "successor feature",
        q: "recovered Q",
        policy: "chosen policy",
        note:
          "Successor features separate dynamics from rewards: learn expected discounted future features once, then combine them with new reward weights to recover Q-values quickly."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-successor-widget" aria-label="Successor features for fast reward transfer">
        <div class="rl-successor-actions"></div>
        <div class="rl-successor-stats">
          <span><b>${labels.psi}</b><em class="rl-successor-psi"></em></span>
          <span><b>${labels.q}</b><em class="rl-successor-q"></em></span>
          <span><b>${labels.policy}</b><em class="rl-successor-policy"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-successor-readout"></p>
    `,
    `
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-successor-gamma-input" type="range" min="0.2" max="0.98" step="0.02" value="0.86">
      </label>
      <label>
        <span>${labels.feature}</span>
        <input class="rl-successor-feature-input" type="range" min="2" max="8" step="1" value="4">
      </label>
      <label>
        <span>${labels.transfer}</span>
        <input class="rl-successor-transfer-input" type="range" min="-1" max="1" step="0.1" value="0.3">
      </label>
    `
  );

  const gammaInput = block.querySelector(".rl-successor-gamma-input");
  const featureInput = block.querySelector(".rl-successor-feature-input");
  const transferInput = block.querySelector(".rl-successor-transfer-input");
  const actions = block.querySelector(".rl-successor-actions");
  const psiValue = block.querySelector(".rl-successor-psi");
  const qValue = block.querySelector(".rl-successor-q");
  const policyValue = block.querySelector(".rl-successor-policy");
  const readout = block.querySelector(".rl-successor-readout");

  const update = () => {
    const gamma = Number(gammaInput.value);
    const features = Number(featureInput.value);
    const transfer = Number(transferInput.value);
    const plans = [
      { name: "explore", base: 0.45, reward: 0.8 + transfer },
      { name: "collect", base: 0.7, reward: 1.15 },
      { name: "goal", base: 0.55, reward: 1.0 - transfer * 0.65 }
    ].map((plan) => {
      const psi = plan.base * (1 - gamma ** (features + 1)) / (1 - gamma);
      const q = psi * plan.reward;
      return { ...plan, psi, q };
    });
    const best = plans.reduce((a, b) => b.q > a.q ? b : a, plans[0]);
    actions.innerHTML = plans.map((plan) => `
      <span class="${plan.name === best.name ? "active-rl-successor-action" : ""}">
        <b>${plan.name}</b>
        <em>psi=${plan.psi.toFixed(2)}</em>
        <small>reward weight=${plan.reward.toFixed(2)} | Q=${plan.q.toFixed(2)}</small>
      </span>
    `).join("");
    psiValue.textContent = best.psi.toFixed(2);
    qValue.textContent = best.q.toFixed(2);
    policyValue.textContent = best.name;
    readout.textContent = `Q^pi(s,a) approx psi^pi(s,a)^T w, gamma=${gamma.toFixed(2)}, feature count=${features}. ${labels.note}`;
  };

  [gammaInput, featureInput, transferInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLBanditExplorationLab(block) {
  const labels = currentLang === "zh"
    ? {
        strategy: "strategy",
        uncertainty: "uncertainty scale",
        samples: "samples so far",
        chosen: "chosen arm",
        regret: "instant regret",
        confidence: "bonus",
        note:
          "Bandits isolate the exploration problem. Optimism adds an uncertainty bonus, Thompson sampling samples a plausible world, and greedy exploitation ignores uncertainty."
      }
    : {
        strategy: "strategy",
        uncertainty: "uncertainty scale",
        samples: "samples so far",
        chosen: "chosen arm",
        regret: "instant regret",
        confidence: "bonus",
        note:
          "Bandits isolate the exploration problem. Optimism adds an uncertainty bonus, Thompson sampling samples a plausible world, and greedy exploitation ignores uncertainty."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-bandit-widget" aria-label="Bandit exploration strategies">
        <div class="rl-bandit-arms"></div>
        <div class="rl-bandit-stats">
          <span><b>${labels.chosen}</b><em class="rl-bandit-choice"></em></span>
          <span><b>${labels.regret}</b><em class="rl-bandit-regret"></em></span>
          <span><b>${labels.confidence}</b><em class="rl-bandit-bonus"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-bandit-readout"></p>
    `,
    `
      <label>
        <span>${labels.strategy}</span>
        <select class="rl-bandit-strategy-input">
          <option value="ucb">UCB optimism</option>
          <option value="thompson">Thompson sampling</option>
          <option value="greedy">greedy exploit</option>
        </select>
      </label>
      <label>
        <span>${labels.uncertainty}</span>
        <input class="rl-bandit-uncertainty-input" type="range" min="0" max="3" step="0.1" value="1.4">
      </label>
      <label>
        <span>${labels.samples}</span>
        <input class="rl-bandit-samples-input" type="range" min="5" max="220" step="5" value="45">
      </label>
    `
  );

  const strategyInput = block.querySelector(".rl-bandit-strategy-input");
  const uncertaintyInput = block.querySelector(".rl-bandit-uncertainty-input");
  const samplesInput = block.querySelector(".rl-bandit-samples-input");
  const arms = block.querySelector(".rl-bandit-arms");
  const choiceValue = block.querySelector(".rl-bandit-choice");
  const regretValue = block.querySelector(".rl-bandit-regret");
  const bonusValue = block.querySelector(".rl-bandit-bonus");
  const readout = block.querySelector(".rl-bandit-readout");

  const update = () => {
    const strategy = strategyInput.value;
    const c = Number(uncertaintyInput.value);
    const total = Number(samplesInput.value);
    const baseArms = [
      { name: "A", mean: 0.62, visits: 28 },
      { name: "B", mean: 0.48, visits: 4 },
      { name: "C", mean: 0.71, visits: 54 },
      { name: "D", mean: 0.57, visits: 9 }
    ].map((arm) => {
      const visits = Math.max(1, Math.round(arm.visits * total / 45));
      const bonus = c * Math.sqrt(Math.log(total + 1) / visits);
      const thompson = arm.mean + bonus * Math.sin(visits * 1.73 + c);
      const score = strategy === "ucb" ? arm.mean + bonus : strategy === "thompson" ? thompson : arm.mean;
      return { ...arm, visits, bonus, score };
    });
    const bestTrue = baseArms.reduce((a, b) => b.mean > a.mean ? b : a, baseArms[0]);
    const chosen = baseArms.reduce((a, b) => b.score > a.score ? b : a, baseArms[0]);
    arms.innerHTML = baseArms.map((arm) => `
      <span class="${arm.name === chosen.name ? "active-rl-bandit-arm" : ""}">
        <b>arm ${arm.name}</b>
        <em>mean ${arm.mean.toFixed(2)}</em>
        <small>N=${arm.visits}, score=${arm.score.toFixed(2)}</small>
      </span>
    `).join("");
    choiceValue.textContent = chosen.name;
    regretValue.textContent = Math.max(0, bestTrue.mean - chosen.mean).toFixed(2);
    bonusValue.textContent = chosen.bonus.toFixed(2);
    readout.textContent = `${strategy}, c=${c.toFixed(1)}, total samples=${total}. ${labels.note}`;
  };

  [strategyInput, uncertaintyInput, samplesInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLPseudoCountBonusLab(block) {
  const labels = currentLang === "zh"
    ? {
        density: "density gain",
        visits: "apparent visits",
        beta: "bonus weight",
        pseudo: "pseudo-count",
        bonus: "reward bonus",
        total: "augmented reward",
        note:
          "Pseudo-counts turn density-model learning progress into a count-like novelty estimate. If seeing a state changes its density a lot, the state is treated as novel."
      }
    : {
        density: "density gain",
        visits: "apparent visits",
        beta: "bonus weight",
        pseudo: "pseudo-count",
        bonus: "reward bonus",
        total: "augmented reward",
        note:
          "Pseudo-counts turn density-model learning progress into a count-like novelty estimate. If seeing a state changes its density a lot, the state is treated as novel."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-pseudocount-widget" aria-label="Pseudo-count exploration bonus">
        <svg class="interactive-svg rl-pseudocount-svg" viewBox="0 0 720 260" aria-hidden="true">
          <line x1="76" y1="214" x2="644" y2="214" class="axis-line"></line>
          <line x1="76" y1="214" x2="76" y2="52" class="axis-line"></line>
          <rect class="rl-pseudocount-before" x="170" y="110" width="90" height="104"></rect>
          <rect class="rl-pseudocount-after" x="370" y="74" width="90" height="140"></rect>
          <text x="166" y="238" class="svg-label">before p(s)</text>
          <text x="366" y="238" class="svg-label">after p'(s)</text>
          <text x="514" y="86" class="svg-label rl-pseudocount-label"></text>
        </svg>
        <div class="rl-pseudocount-stats">
          <span><b>${labels.pseudo}</b><em class="rl-pseudocount-value"></em></span>
          <span><b>${labels.bonus}</b><em class="rl-pseudocount-bonus"></em></span>
          <span><b>${labels.total}</b><em class="rl-pseudocount-total"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-pseudocount-readout"></p>
    `,
    `
      <label>
        <span>${labels.density}</span>
        <input class="rl-pseudocount-density-input" type="range" min="0.01" max="0.5" step="0.01" value="0.16">
      </label>
      <label>
        <span>${labels.visits}</span>
        <input class="rl-pseudocount-visits-input" type="range" min="1" max="100" step="1" value="18">
      </label>
      <label>
        <span>${labels.beta}</span>
        <input class="rl-pseudocount-beta-input" type="range" min="0.1" max="3" step="0.1" value="1">
      </label>
    `
  );

  const densityInput = block.querySelector(".rl-pseudocount-density-input");
  const visitsInput = block.querySelector(".rl-pseudocount-visits-input");
  const betaInput = block.querySelector(".rl-pseudocount-beta-input");
  const before = block.querySelector(".rl-pseudocount-before");
  const after = block.querySelector(".rl-pseudocount-after");
  const label = block.querySelector(".rl-pseudocount-label");
  const pseudoValue = block.querySelector(".rl-pseudocount-value");
  const bonusValue = block.querySelector(".rl-pseudocount-bonus");
  const totalValue = block.querySelector(".rl-pseudocount-total");
  const readout = block.querySelector(".rl-pseudocount-readout");

  const update = () => {
    const gain = Number(densityInput.value);
    const visits = Number(visitsInput.value);
    const beta = Number(betaInput.value);
    const p = visits / (visits + 120);
    const pPrime = Math.min(0.98, p + gain * (1 - p));
    const pseudo = Math.max(0.1, p * (1 - pPrime) / Math.max(0.0001, pPrime - p));
    const bonus = beta / Math.sqrt(pseudo + 0.01);
    before.setAttribute("height", String(160 * p + 18));
    before.setAttribute("y", String(214 - (160 * p + 18)));
    after.setAttribute("height", String(160 * pPrime + 18));
    after.setAttribute("y", String(214 - (160 * pPrime + 18)));
    label.textContent = `p' - p = ${gain.toFixed(2)}`;
    pseudoValue.textContent = pseudo.toFixed(2);
    bonusValue.textContent = bonus.toFixed(2);
    totalValue.textContent = (1 + bonus).toFixed(2);
    readout.textContent = `pseudo-count Nhat = p(s)(1-p'(s))/(p'(s)-p(s)), beta=${beta.toFixed(1)}. ${labels.note}`;
  };

  [densityInput, visitsInput, betaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLDeepExplorationLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "episode horizon",
        novelty: "novelty",
        coherence: "commitment",
        method: "method",
        reach: "deep reach",
        waste: "random waste",
        bonus: "intrinsic bonus",
        note:
          "Deep exploration needs temporally coherent behavior. Random action noise often dithers, while bootstrapped value functions or intrinsic bonuses can push an agent through longer chains."
      }
    : {
        horizon: "episode horizon",
        novelty: "novelty",
        coherence: "commitment",
        method: "method",
        reach: "deep reach",
        waste: "random waste",
        bonus: "intrinsic bonus",
        note:
          "Deep exploration needs temporally coherent behavior. Random action noise often dithers, while bootstrapped value functions or intrinsic bonuses can push an agent through longer chains."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-deepexplore-widget" aria-label="Deep exploration strategy comparison">
        <div class="rl-deepexplore-path"></div>
        <div class="rl-deepexplore-stats">
          <span><b>${labels.reach}</b><em class="rl-deepexplore-reach"></em></span>
          <span><b>${labels.waste}</b><em class="rl-deepexplore-waste"></em></span>
          <span><b>${labels.bonus}</b><em class="rl-deepexplore-bonus"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-deepexplore-readout"></p>
    `,
    `
      <label>
        <span>${labels.method}</span>
        <select class="rl-deepexplore-method-input">
          <option value="epsilon">epsilon-greedy</option>
          <option value="bootstrap">bootstrapped Q</option>
          <option value="bonus">novelty bonus</option>
        </select>
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-deepexplore-horizon-input" type="range" min="4" max="16" step="1" value="9">
      </label>
      <label>
        <span>${labels.novelty}</span>
        <input class="rl-deepexplore-novelty-input" type="range" min="0" max="2" step="0.1" value="1">
      </label>
      <label>
        <span>${labels.coherence}</span>
        <input class="rl-deepexplore-coherence-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
    `
  );

  const methodInput = block.querySelector(".rl-deepexplore-method-input");
  const horizonInput = block.querySelector(".rl-deepexplore-horizon-input");
  const noveltyInput = block.querySelector(".rl-deepexplore-novelty-input");
  const coherenceInput = block.querySelector(".rl-deepexplore-coherence-input");
  const path = block.querySelector(".rl-deepexplore-path");
  const reachValue = block.querySelector(".rl-deepexplore-reach");
  const wasteValue = block.querySelector(".rl-deepexplore-waste");
  const bonusValue = block.querySelector(".rl-deepexplore-bonus");
  const readout = block.querySelector(".rl-deepexplore-readout");

  const update = () => {
    const method = methodInput.value;
    const horizon = Number(horizonInput.value);
    const novelty = Number(noveltyInput.value);
    const coherence = Number(coherenceInput.value);
    const commitment = method === "epsilon" ? 0.22 + 0.2 * coherence : method === "bootstrap" ? 0.68 + 0.25 * coherence : 0.48 + 0.2 * novelty;
    const reach = Math.min(horizon, Math.round(horizon * commitment));
    const waste = Math.max(0, Math.round(horizon * (1 - commitment) * (method === "epsilon" ? 1.2 : 0.65)));
    const bonus = method === "bonus" ? novelty / Math.sqrt(reach + 1) : method === "bootstrap" ? 0.35 * coherence : 0.1;
    path.innerHTML = Array.from({ length: horizon }, (_, i) => {
      const active = i < reach;
      const key = i === Math.max(0, reach - 1);
      return `<span class="${active ? "active-rl-deepexplore-step" : ""} ${key ? "goal-rl-deepexplore-step" : ""}"><b>${i + 1}</b><em>${active ? "forward" : "reset"}</em></span>`;
    }).join("");
    reachValue.textContent = `${reach}/${horizon}`;
    wasteValue.textContent = String(waste);
    bonusValue.textContent = bonus.toFixed(2);
    readout.textContent = `${method}, novelty=${novelty.toFixed(1)}, commitment=${coherence.toFixed(2)}. ${labels.note}`;
  };

  [methodInput, horizonInput, noveltyInput, coherenceInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLInfoTheoryExplorationLab(block) {
  const labels = currentLang === "zh"
    ? {
        spread: "state spread",
        predict: "skill predictability",
        noise: "observation noise",
        entropy: "state entropy",
        mutual: "mutual info",
        control: "control authority",
        note:
          "Entropy measures coverage, while mutual information measures whether a latent skill or action actually controls the future state."
      }
    : {
        spread: "state spread",
        predict: "skill predictability",
        noise: "observation noise",
        entropy: "state entropy",
        mutual: "mutual info",
        control: "control authority",
        note:
          "Entropy measures coverage, while mutual information measures whether a latent skill or action actually controls the future state."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-info-widget" aria-label="Information theory quantities for exploration">
        <div class="rl-info-bars">
          <span><b>H(s)</b><em class="rl-info-entropy-bar"></em></span>
          <span><b>H(z|s)</b><em class="rl-info-conditional-bar"></em></span>
          <span><b>I(z;s)</b><em class="rl-info-mutual-bar"></em></span>
        </div>
        <div class="rl-info-stats">
          <span><b>${labels.entropy}</b><em class="rl-info-entropy"></em></span>
          <span><b>${labels.mutual}</b><em class="rl-info-mutual"></em></span>
          <span><b>${labels.control}</b><em class="rl-info-control"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-info-readout"></p>
    `,
    `
      <label>
        <span>${labels.spread}</span>
        <input class="rl-info-spread-input" type="range" min="0.1" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.predict}</span>
        <input class="rl-info-predict-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="rl-info-noise-input" type="range" min="0" max="1" step="0.05" value="0.25">
      </label>
    `
  );

  const spreadInput = block.querySelector(".rl-info-spread-input");
  const predictInput = block.querySelector(".rl-info-predict-input");
  const noiseInput = block.querySelector(".rl-info-noise-input");
  const entropyBar = block.querySelector(".rl-info-entropy-bar");
  const conditionalBar = block.querySelector(".rl-info-conditional-bar");
  const mutualBar = block.querySelector(".rl-info-mutual-bar");
  const entropyValue = block.querySelector(".rl-info-entropy");
  const mutualValue = block.querySelector(".rl-info-mutual");
  const controlValue = block.querySelector(".rl-info-control");
  const readout = block.querySelector(".rl-info-readout");

  const update = () => {
    const spread = Number(spreadInput.value);
    const predict = Number(predictInput.value);
    const noise = Number(noiseInput.value);
    const entropy = 0.3 + 2.2 * spread;
    const conditional = Math.max(0.05, (1 - predict) * 1.8 + noise * 0.8);
    const mutual = Math.max(0, entropy - conditional);
    const control = mutual / Math.max(0.1, entropy);
    entropyBar.style.height = `${38 + entropy * 58}px`;
    conditionalBar.style.height = `${28 + conditional * 58}px`;
    mutualBar.style.height = `${28 + mutual * 58}px`;
    entropyValue.textContent = entropy.toFixed(2);
    mutualValue.textContent = mutual.toFixed(2);
    controlValue.textContent = control.toFixed(2);
    readout.textContent = `I(z;s)=H(z)-H(z|s) or H(s)-H(s|z), spread=${spread.toFixed(2)}, predictability=${predict.toFixed(2)}. ${labels.note}`;
  };

  [spreadInput, predictInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLSkewFitGoalLab(block) {
  const labels = currentLang === "zh"
    ? {
        skew: "skew alpha",
        bins: "goal bins",
        success: "reach success",
        entropy: "goal entropy",
        rare: "rare-goal weight",
        coverage: "coverage",
        note:
          "Skew-Fit samples goals from a skewed density so rare achieved states become more likely as future goals, increasing coverage without external rewards."
      }
    : {
        skew: "skew alpha",
        bins: "goal bins",
        success: "reach success",
        entropy: "goal entropy",
        rare: "rare-goal weight",
        coverage: "coverage",
        note:
          "Skew-Fit samples goals from a skewed density so rare achieved states become more likely as future goals, increasing coverage without external rewards."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-skewfit-widget" aria-label="Skew-Fit goal distribution">
        <div class="rl-skewfit-bins"></div>
        <div class="rl-skewfit-stats">
          <span><b>${labels.entropy}</b><em class="rl-skewfit-entropy"></em></span>
          <span><b>${labels.rare}</b><em class="rl-skewfit-rare"></em></span>
          <span><b>${labels.coverage}</b><em class="rl-skewfit-coverage"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-skewfit-readout"></p>
    `,
    `
      <label>
        <span>${labels.skew}</span>
        <input class="rl-skewfit-skew-input" type="range" min="-1" max="1" step="0.05" value="-0.5">
      </label>
      <label>
        <span>${labels.bins}</span>
        <input class="rl-skewfit-bins-input" type="range" min="4" max="10" step="1" value="7">
      </label>
      <label>
        <span>${labels.success}</span>
        <input class="rl-skewfit-success-input" type="range" min="0.1" max="1" step="0.05" value="0.65">
      </label>
    `
  );

  const skewInput = block.querySelector(".rl-skewfit-skew-input");
  const binsInput = block.querySelector(".rl-skewfit-bins-input");
  const successInput = block.querySelector(".rl-skewfit-success-input");
  const bins = block.querySelector(".rl-skewfit-bins");
  const entropyValue = block.querySelector(".rl-skewfit-entropy");
  const rareValue = block.querySelector(".rl-skewfit-rare");
  const coverageValue = block.querySelector(".rl-skewfit-coverage");
  const readout = block.querySelector(".rl-skewfit-readout");

  const update = () => {
    const alpha = Number(skewInput.value);
    const count = Number(binsInput.value);
    const success = Number(successInput.value);
    const base = Array.from({ length: count }, (_, i) => 0.08 + ((i + 2) ** 1.45) / (count ** 1.75));
    const weights = base.map((p) => p ** alpha);
    const sum = weights.reduce((a, b) => a + b, 0);
    const probs = weights.map((w) => w / sum);
    const entropy = -probs.reduce((total, p) => total + p * Math.log(p), 0);
    const maxEntropy = Math.log(count);
    const rareWeight = probs[0] / Math.max(0.0001, base[0] / base.reduce((a, b) => a + b, 0));
    const coverage = Math.min(1, success * entropy / maxEntropy + 0.18 * Math.max(0, rareWeight - 1));
    bins.innerHTML = probs.map((p, i) => `
      <span class="${i === 0 ? "rare-rl-skewfit-bin" : ""}">
        <b>g${i + 1}</b>
        <em style="height:${28 + p * 240}px"></em>
        <small>${p.toFixed(2)}</small>
      </span>
    `).join("");
    entropyValue.textContent = entropy.toFixed(2);
    rareValue.textContent = rareWeight.toFixed(2);
    coverageValue.textContent = coverage.toFixed(2);
    readout.textContent = `p_alpha(g) proportional to p(g)^alpha, alpha=${alpha.toFixed(2)}, success=${success.toFixed(2)}. ${labels.note}`;
  };

  [skewInput, binsInput, successInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLDIAYNSkillLab(block) {
  const labels = currentLang === "zh"
    ? {
        skills: "number of skills",
        separability: "state separability",
        entropy: "skill prior entropy",
        discriminator: "discriminator accuracy",
        reward: "DIAYN reward",
        mutual: "mutual info",
        note:
          "DIAYN learns diverse skills by rewarding states that make the skill easy to infer, maximizing mutual information between skill identity and visited states."
      }
    : {
        skills: "number of skills",
        separability: "state separability",
        entropy: "skill prior entropy",
        discriminator: "discriminator accuracy",
        reward: "DIAYN reward",
        mutual: "mutual info",
        note:
          "DIAYN learns diverse skills by rewarding states that make the skill easy to infer, maximizing mutual information between skill identity and visited states."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-diayn-widget" aria-label="DIAYN skill diversity">
        <div class="rl-diayn-skills"></div>
        <div class="rl-diayn-stats">
          <span><b>${labels.entropy}</b><em class="rl-diayn-entropy"></em></span>
          <span><b>${labels.reward}</b><em class="rl-diayn-reward"></em></span>
          <span><b>${labels.mutual}</b><em class="rl-diayn-mutual"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-diayn-readout"></p>
    `,
    `
      <label>
        <span>${labels.skills}</span>
        <input class="rl-diayn-skills-input" type="range" min="2" max="8" step="1" value="4">
      </label>
      <label>
        <span>${labels.separability}</span>
        <input class="rl-diayn-separability-input" type="range" min="0.1" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.discriminator}</span>
        <input class="rl-diayn-accuracy-input" type="range" min="0.2" max="1" step="0.05" value="0.75">
      </label>
    `
  );

  const skillsInput = block.querySelector(".rl-diayn-skills-input");
  const separabilityInput = block.querySelector(".rl-diayn-separability-input");
  const accuracyInput = block.querySelector(".rl-diayn-accuracy-input");
  const skills = block.querySelector(".rl-diayn-skills");
  const entropyValue = block.querySelector(".rl-diayn-entropy");
  const rewardValue = block.querySelector(".rl-diayn-reward");
  const mutualValue = block.querySelector(".rl-diayn-mutual");
  const readout = block.querySelector(".rl-diayn-readout");

  const update = () => {
    const count = Number(skillsInput.value);
    const separability = Number(separabilityInput.value);
    const accuracy = Number(accuracyInput.value);
    const priorEntropy = Math.log(count);
    const conditional = Math.max(0, priorEntropy * (1 - accuracy * separability));
    const mutual = priorEntropy - conditional;
    const reward = Math.log(Math.max(0.01, accuracy)) + priorEntropy;
    skills.innerHTML = Array.from({ length: count }, (_, i) => {
      const offset = (i - (count - 1) / 2) * 18 * separability;
      return `<span style="transform:translateX(${offset}px)"><b>z${i + 1}</b><em>${(accuracy * (0.8 + i / (5 * count))).toFixed(2)}</em></span>`;
    }).join("");
    entropyValue.textContent = priorEntropy.toFixed(2);
    rewardValue.textContent = reward.toFixed(2);
    mutualValue.textContent = mutual.toFixed(2);
    readout.textContent = `r(s,z)=log q_phi(z|s)-log p(z), skills=${count}, separability=${separability.toFixed(2)}. ${labels.note}`;
  };

  [skillsInput, separabilityInput, accuracyInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLOfflineStitchingLab(block) {
  const labels = currentLang === "zh"
    ? {
        quality: "data quality",
        coverage: "coverage overlap",
        conserv: "conservatism",
        stitching: "stitch score",
        risk: "OOD risk",
        value: "policy value",
        supported: "covered",
        missing: "unsupported",
        note:
          "Offline RL is useful when the dataset contains connectable fragments. It becomes unsafe when policy improvement moves into actions that the behavior policy rarely covered."
      }
    : {
        quality: "data quality",
        coverage: "coverage overlap",
        conserv: "conservatism",
        stitching: "stitch score",
        risk: "OOD risk",
        value: "policy value",
        supported: "covered",
        missing: "unsupported",
        note:
          "Offline RL is useful when the dataset contains connectable fragments. It becomes unsafe when policy improvement moves into actions that the behavior policy rarely covered."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-offline-widget" aria-label="Offline RL stitching and out-of-distribution risk">
        <div class="rl-offline-tiles"></div>
        <div class="rl-offline-stats">
          <span><b>${labels.stitching}</b><em class="rl-offline-stitch-score"></em></span>
          <span><b>${labels.risk}</b><em class="rl-offline-risk-score"></em></span>
          <span><b>${labels.value}</b><em class="rl-offline-value-score"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-offline-readout"></p>
    `,
    `
      <label>
        <span>${labels.quality}</span>
        <input class="rl-offline-quality-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.coverage}</span>
        <input class="rl-offline-coverage-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.conserv}</span>
        <input class="rl-offline-conserv-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const qualityInput = block.querySelector(".rl-offline-quality-input");
  const coverageInput = block.querySelector(".rl-offline-coverage-input");
  const conservInput = block.querySelector(".rl-offline-conserv-input");
  const tiles = block.querySelector(".rl-offline-tiles");
  const stitchNode = block.querySelector(".rl-offline-stitch-score");
  const riskNode = block.querySelector(".rl-offline-risk-score");
  const valueNode = block.querySelector(".rl-offline-value-score");
  const readout = block.querySelector(".rl-offline-readout");

  const update = () => {
    const quality = Number(qualityInput.value);
    const coverage = Number(coverageInput.value);
    const conserv = Number(conservInput.value);
    const stitching = Math.max(0, Math.min(1, 0.18 + 0.48 * quality + 0.42 * coverage - 0.18 * conserv));
    const risk = Math.max(0, Math.min(1, (1 - coverage) * (1.15 - conserv) + 0.22 * (1 - quality)));
    const value = 50 + 42 * stitching - 34 * risk - 8 * conserv;
    const coveredCount = Math.max(1, Math.round(6 * coverage));
    const stitchCount = Math.max(1, Math.round(coveredCount * stitching));
    tiles.innerHTML = Array.from({ length: 6 }, (_, index) => {
      const covered = index < coveredCount;
      const stitched = index < stitchCount;
      return `<span class="${covered ? "covered-rl-offline-tile" : "missing-rl-offline-tile"} ${stitched ? "stitched-rl-offline-tile" : ""}">
        <b>${index + 1}</b>
        <em>${covered ? labels.supported : labels.missing}</em>
      </span>`;
    }).join("");
    stitchNode.textContent = stitching.toFixed(2);
    riskNode.textContent = risk.toFixed(2);
    valueNode.textContent = value.toFixed(1);
    readout.textContent = `J_offline approx base + stitching - OOD risk, quality=${quality.toFixed(2)}, coverage=${coverage.toFixed(2)}, conservatism=${conserv.toFixed(2)}. ${labels.note}`;
  };

  [qualityInput, coverageInput, conservInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLOfflineImportanceWeightLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "horizon",
        mismatch: "policy mismatch",
        model: "value model",
        full: "trajectory IS",
        decision: "per-decision IS",
        robust: "doubly robust",
        effective: "effective samples",
        note:
          "The trajectory likelihood ratio is a product over time. Per-decision weighting and doubly robust value corrections reduce variance, but they do not remove the need for data support."
      }
    : {
        horizon: "horizon",
        mismatch: "policy mismatch",
        model: "value model",
        full: "trajectory IS",
        decision: "per-decision IS",
        robust: "doubly robust",
        effective: "effective samples",
        note:
          "The trajectory likelihood ratio is a product over time. Per-decision weighting and doubly robust value corrections reduce variance, but they do not remove the need for data support."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-offline-is-widget" aria-label="Offline RL importance sampling weight growth">
        <div class="rl-offline-is-bars">
          <span><b>${labels.full}</b><em class="rl-offline-is-full"></em><small></small></span>
          <span><b>${labels.decision}</b><em class="rl-offline-is-decision"></em><small></small></span>
          <span><b>${labels.robust}</b><em class="rl-offline-is-robust"></em><small></small></span>
        </div>
        <div class="rl-offline-is-stats">
          <span><b>log variance</b><em class="rl-offline-is-variance"></em></span>
          <span><b>${labels.effective}</b><em class="rl-offline-is-effective"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-offline-is-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-offline-is-horizon-input" type="range" min="2" max="24" step="1" value="10">
      </label>
      <label>
        <span>${labels.mismatch}</span>
        <input class="rl-offline-is-mismatch-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.model}</span>
        <input class="rl-offline-is-model-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const horizonInput = block.querySelector(".rl-offline-is-horizon-input");
  const mismatchInput = block.querySelector(".rl-offline-is-mismatch-input");
  const modelInput = block.querySelector(".rl-offline-is-model-input");
  const fullBar = block.querySelector(".rl-offline-is-full");
  const decisionBar = block.querySelector(".rl-offline-is-decision");
  const robustBar = block.querySelector(".rl-offline-is-robust");
  const fullLabel = fullBar.nextElementSibling;
  const decisionLabel = decisionBar.nextElementSibling;
  const robustLabel = robustBar.nextElementSibling;
  const varianceNode = block.querySelector(".rl-offline-is-variance");
  const effectiveNode = block.querySelector(".rl-offline-is-effective");
  const readout = block.querySelector(".rl-offline-is-readout");

  const update = () => {
    const horizon = Number(horizonInput.value);
    const mismatch = Number(mismatchInput.value);
    const model = Number(modelInput.value);
    const logVariance = horizon * (0.1 + mismatch * mismatch * 1.35);
    const full = Math.min(1, logVariance / 14);
    const decision = Math.min(1, (logVariance * 0.58) / 14);
    const robust = Math.min(1, (logVariance * (0.42 - 0.28 * model)) / 14);
    const effective = Math.max(1, Math.round(100 / (1 + Math.exp(logVariance * 0.45))));
    fullBar.style.height = `${34 + full * 142}px`;
    decisionBar.style.height = `${34 + decision * 142}px`;
    robustBar.style.height = `${34 + robust * 142}px`;
    fullLabel.textContent = `${Math.exp(Math.min(5, logVariance * 0.35)).toFixed(1)}x`;
    decisionLabel.textContent = `${Math.exp(Math.min(5, logVariance * 0.2)).toFixed(1)}x`;
    robustLabel.textContent = `${Math.exp(Math.min(5, logVariance * (0.12 - 0.07 * model))).toFixed(1)}x`;
    varianceNode.textContent = logVariance.toFixed(2);
    effectiveNode.textContent = `${effective}/100`;
    readout.textContent = `rho_0:T = product_t pi_theta(a_t|s_t)/pi_beta(a_t|s_t), horizon=${horizon}, mismatch=${mismatch.toFixed(2)}, model=${model.toFixed(2)}. ${labels.note}`;
  };

  [horizonInput, mismatchInput, modelInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLLSTDLSPILab(block) {
  const labels = currentLang === "zh"
    ? {
        features: "features K",
        samples: "samples N",
        discount: "discount gamma",
        support: "action support",
        condition: "conditioning",
        error: "Bellman error",
        shift: "action shift",
        note:
          "LSTD can evaluate a fixed policy from samples. LSPI adds greedy policy improvement, and that improvement is where unsupported actions can enter the backup."
      }
    : {
        features: "features K",
        samples: "samples N",
        discount: "discount gamma",
        support: "action support",
        condition: "conditioning",
        error: "Bellman error",
        shift: "action shift",
        note:
          "LSTD can evaluate a fixed policy from samples. LSPI adds greedy policy improvement, and that improvement is where unsupported actions can enter the backup."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-lstd-widget" aria-label="LSTD and LSPI sample support">
        <div class="rl-lstd-matrices">
          <span><b>Phi</b><em class="rl-lstd-phi"></em></span>
          <span><b>Phi'</b><em class="rl-lstd-phip"></em></span>
          <span><b>w_Q</b><em class="rl-lstd-wq"></em></span>
        </div>
        <div class="rl-lstd-stats">
          <span><b>${labels.condition}</b><em class="rl-lstd-condition"></em></span>
          <span><b>${labels.error}</b><em class="rl-lstd-error"></em></span>
          <span><b>${labels.shift}</b><em class="rl-lstd-shift"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-lstd-readout"></p>
    `,
    `
      <label>
        <span>${labels.features}</span>
        <input class="rl-lstd-features-input" type="range" min="3" max="24" step="1" value="8">
      </label>
      <label>
        <span>${labels.samples}</span>
        <input class="rl-lstd-samples-input" type="range" min="20" max="240" step="10" value="90">
      </label>
      <label>
        <span>${labels.discount}</span>
        <input class="rl-lstd-discount-input" type="range" min="0.5" max="0.99" step="0.01" value="0.9">
      </label>
      <label>
        <span>${labels.support}</span>
        <input class="rl-lstd-support-input" type="range" min="0.05" max="1" step="0.05" value="0.65">
      </label>
    `
  );

  const featuresInput = block.querySelector(".rl-lstd-features-input");
  const samplesInput = block.querySelector(".rl-lstd-samples-input");
  const discountInput = block.querySelector(".rl-lstd-discount-input");
  const supportInput = block.querySelector(".rl-lstd-support-input");
  const phiNode = block.querySelector(".rl-lstd-phi");
  const phipNode = block.querySelector(".rl-lstd-phip");
  const wqNode = block.querySelector(".rl-lstd-wq");
  const conditionNode = block.querySelector(".rl-lstd-condition");
  const errorNode = block.querySelector(".rl-lstd-error");
  const shiftNode = block.querySelector(".rl-lstd-shift");
  const readout = block.querySelector(".rl-lstd-readout");

  const update = () => {
    const features = Number(featuresInput.value);
    const samples = Number(samplesInput.value);
    const gamma = Number(discountInput.value);
    const support = Number(supportInput.value);
    const sampleRatio = features / Math.max(1, samples);
    const conditioning = Math.min(9.99, 1 + 18 * sampleRatio + 4 * gamma);
    const bellmanError = Math.min(1, Math.sqrt(sampleRatio) / Math.max(0.08, 1 - gamma + 0.08));
    const actionShift = Math.max(0, Math.min(1, (1 - support) * (0.7 + gamma) + 0.15 * Math.max(0, features - 10) / 14));
    phiNode.textContent = `${samples} x ${features}`;
    phipNode.textContent = `${samples} x ${features}`;
    wqNode.textContent = `${features} x 1`;
    conditionNode.textContent = conditioning.toFixed(2);
    errorNode.textContent = bellmanError.toFixed(2);
    shiftNode.textContent = actionShift.toFixed(2);
    readout.textContent = `w_Q=(Phi^T Phi - gamma Phi^T Phi')^{-1} Phi^T r, K=${features}, N=${samples}, support=${support.toFixed(2)}. ${labels.note}`;
  };

  [featuresInput, samplesInput, discountInput, supportInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLOfflinePolicyConstraintLab(block) {
  const labels = currentLang === "zh"
    ? {
        support: "behavior support",
        advantage: "advantage sharpness",
        temp: "KL temperature",
        mass: "in-support mass",
        improvement: "improvement",
        risk: "OOD risk",
        note:
          "Implicit constraints turn policy improvement into weighted regression on dataset actions. Smaller lambda makes the policy chase high advantage more aggressively."
      }
    : {
        support: "behavior support",
        advantage: "advantage sharpness",
        temp: "KL temperature",
        mass: "in-support mass",
        improvement: "improvement",
        risk: "OOD risk",
        note:
          "Implicit constraints turn policy improvement into weighted regression on dataset actions. Smaller lambda makes the policy chase high advantage more aggressively."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-policyconstraint-widget" aria-label="Offline RL policy constraint and advantage weights">
        <div class="rl-policyconstraint-actions"></div>
        <div class="rl-policyconstraint-stats">
          <span><b>${labels.mass}</b><em class="rl-policyconstraint-mass"></em></span>
          <span><b>${labels.improvement}</b><em class="rl-policyconstraint-improvement"></em></span>
          <span><b>${labels.risk}</b><em class="rl-policyconstraint-risk"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-policyconstraint-readout"></p>
    `,
    `
      <label>
        <span>${labels.support}</span>
        <input class="rl-policyconstraint-support-input" type="range" min="0.15" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.advantage}</span>
        <input class="rl-policyconstraint-advantage-input" type="range" min="0" max="2" step="0.1" value="1.0">
      </label>
      <label>
        <span>${labels.temp}</span>
        <input class="rl-policyconstraint-temp-input" type="range" min="0.2" max="2" step="0.1" value="0.8">
      </label>
    `
  );

  const supportInput = block.querySelector(".rl-policyconstraint-support-input");
  const advantageInput = block.querySelector(".rl-policyconstraint-advantage-input");
  const tempInput = block.querySelector(".rl-policyconstraint-temp-input");
  const actions = block.querySelector(".rl-policyconstraint-actions");
  const massNode = block.querySelector(".rl-policyconstraint-mass");
  const improvementNode = block.querySelector(".rl-policyconstraint-improvement");
  const riskNode = block.querySelector(".rl-policyconstraint-risk");
  const readout = block.querySelector(".rl-policyconstraint-readout");

  const update = () => {
    const support = Number(supportInput.value);
    const advantage = Number(advantageInput.value);
    const lambda = Number(tempInput.value);
    const raw = [-0.4, 0.2, 0.7, 1.1, 1.5].map((base, i) => base + advantage * (i - 2) * 0.22);
    const supportedCount = Math.max(1, Math.round(support * raw.length));
    const weights = raw.map((a, i) => (i < supportedCount ? Math.exp(a / lambda) : 0));
    const total = weights.reduce((sum, weight) => sum + weight, 0) || 1;
    const probs = weights.map((weight) => weight / total);
    const inSupportMass = probs.reduce((sum, p) => sum + p, 0);
    const improvement = probs.reduce((sum, p, i) => sum + p * Math.max(0, raw[i]), 0);
    const risk = Math.max(0, (1 - support) * (1.2 - Math.min(1, lambda / 1.4)) + 0.08 * advantage);
    actions.innerHTML = probs.map((p, i) => `
      <span class="${i < supportedCount ? "supported-rl-policyconstraint-action" : "unsupported-rl-policyconstraint-action"}">
        <b>a${i + 1}</b>
        <em style="height:${28 + p * 180}px"></em>
        <small>A=${raw[i].toFixed(1)}</small>
      </span>
    `).join("");
    massNode.textContent = inSupportMass.toFixed(2);
    improvementNode.textContent = improvement.toFixed(2);
    riskNode.textContent = risk.toFixed(2);
    readout.textContent = `pi(a|s) proportional to pi_beta(a|s) exp(A/lambda), lambda=${lambda.toFixed(1)}, support=${support.toFixed(2)}. ${labels.note}`;
  };

  [supportInput, advantageInput, tempInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLCQLPessimismLab(block) {
  const labels = currentLang === "zh"
    ? {
        alpha: "CQL alpha",
        support: "data support",
        bellman: "Bellman fit",
        dataQ: "data Q",
        oodQ: "OOD Q",
        gap: "pessimism gap",
        note:
          "CQL lowers values for action proposals outside the data and preserves observed tuples through the data term and Bellman loss."
      }
    : {
        alpha: "CQL alpha",
        support: "data support",
        bellman: "Bellman fit",
        dataQ: "data Q",
        oodQ: "OOD Q",
        gap: "pessimism gap",
        note:
          "CQL lowers values for action proposals outside the data and preserves observed tuples through the data term and Bellman loss."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-cql-widget" aria-label="Conservative Q-learning pessimism">
        <div class="rl-cql-bars"></div>
        <div class="rl-cql-stats">
          <span><b>${labels.dataQ}</b><em class="rl-cql-dataq"></em></span>
          <span><b>${labels.oodQ}</b><em class="rl-cql-oodq"></em></span>
          <span><b>${labels.gap}</b><em class="rl-cql-gap"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-cql-readout"></p>
    `,
    `
      <label>
        <span>${labels.alpha}</span>
        <input class="rl-cql-alpha-input" type="range" min="0" max="2" step="0.1" value="0.9">
      </label>
      <label>
        <span>${labels.support}</span>
        <input class="rl-cql-support-input" type="range" min="0.2" max="1" step="0.05" value="0.6">
      </label>
      <label>
        <span>${labels.bellman}</span>
        <input class="rl-cql-bellman-input" type="range" min="0.1" max="1" step="0.05" value="0.7">
      </label>
    `
  );

  const alphaInput = block.querySelector(".rl-cql-alpha-input");
  const supportInput = block.querySelector(".rl-cql-support-input");
  const bellmanInput = block.querySelector(".rl-cql-bellman-input");
  const bars = block.querySelector(".rl-cql-bars");
  const dataQNode = block.querySelector(".rl-cql-dataq");
  const oodQNode = block.querySelector(".rl-cql-oodq");
  const gapNode = block.querySelector(".rl-cql-gap");
  const readout = block.querySelector(".rl-cql-readout");

  const update = () => {
    const alpha = Number(alphaInput.value);
    const support = Number(supportInput.value);
    const bellman = Number(bellmanInput.value);
    const supportedCount = Math.max(1, Math.round(support * 6));
    const values = Array.from({ length: 6 }, (_, i) => {
      const base = 1.2 + 0.45 * Math.sin(i + 0.4);
      const unsupported = i >= supportedCount;
      return base + bellman * 0.7 - (unsupported ? alpha * (0.9 + i * 0.08) : -alpha * 0.12);
    });
    const dataValues = values.slice(0, supportedCount);
    const oodValues = values.slice(supportedCount);
    const dataQ = dataValues.reduce((sum, q) => sum + q, 0) / dataValues.length;
    const oodQ = oodValues.length ? oodValues.reduce((sum, q) => sum + q, 0) / oodValues.length : dataQ;
    const gap = dataQ - oodQ;
    bars.innerHTML = values.map((q, i) => {
      const height = 32 + Math.max(0, q + 0.4) * 48;
      return `<span class="${i < supportedCount ? "data-rl-cql-bar" : "ood-rl-cql-bar"}">
        <b>a${i + 1}</b>
        <em style="height:${height}px"></em>
        <small>${q.toFixed(2)}</small>
      </span>`;
    }).join("");
    dataQNode.textContent = dataQ.toFixed(2);
    oodQNode.textContent = oodQ.toFixed(2);
    gapNode.textContent = gap.toFixed(2);
    readout.textContent = `L_CQL includes alpha(E_mu Q - E_D Q), alpha=${alpha.toFixed(1)}, support=${support.toFixed(2)}. ${labels.note}`;
  };

  [alphaInput, supportInput, bellmanInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLOfflineModelPenaltyLab(block) {
  const labels = currentLang === "zh"
    ? {
        uncertainty: "model uncertainty",
        penalty: "penalty lambda",
        horizon: "rollout horizon",
        raw: "raw reward",
        penalized: "penalized reward",
        gap: "model gap",
        note:
          "Model-based offline RL can use synthetic rollouts, but the reward must be penalized when uncertainty and rollout horizon make model exploitation likely."
      }
    : {
        uncertainty: "model uncertainty",
        penalty: "penalty lambda",
        horizon: "rollout horizon",
        raw: "raw reward",
        penalized: "penalized reward",
        gap: "model gap",
        note:
          "Model-based offline RL can use synthetic rollouts, but the reward must be penalized when uncertainty and rollout horizon make model exploitation likely."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-modelpenalty-widget" aria-label="Model-based offline RL uncertainty penalty">
        <div class="rl-modelpenalty-path"></div>
        <div class="rl-modelpenalty-stats">
          <span><b>${labels.raw}</b><em class="rl-modelpenalty-raw"></em></span>
          <span><b>${labels.penalized}</b><em class="rl-modelpenalty-adjusted"></em></span>
          <span><b>${labels.gap}</b><em class="rl-modelpenalty-gap"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-modelpenalty-readout"></p>
    `,
    `
      <label>
        <span>${labels.uncertainty}</span>
        <input class="rl-modelpenalty-uncertainty-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.penalty}</span>
        <input class="rl-modelpenalty-penalty-input" type="range" min="0" max="3" step="0.1" value="1.4">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-modelpenalty-horizon-input" type="range" min="2" max="16" step="1" value="8">
      </label>
    `
  );

  const uncertaintyInput = block.querySelector(".rl-modelpenalty-uncertainty-input");
  const penaltyInput = block.querySelector(".rl-modelpenalty-penalty-input");
  const horizonInput = block.querySelector(".rl-modelpenalty-horizon-input");
  const path = block.querySelector(".rl-modelpenalty-path");
  const rawNode = block.querySelector(".rl-modelpenalty-raw");
  const adjustedNode = block.querySelector(".rl-modelpenalty-adjusted");
  const gapNode = block.querySelector(".rl-modelpenalty-gap");
  const readout = block.querySelector(".rl-modelpenalty-readout");

  const update = () => {
    const uncertainty = Number(uncertaintyInput.value);
    const lambda = Number(penaltyInput.value);
    const horizon = Number(horizonInput.value);
    const rawReward = horizon * (1.25 + 0.18 * horizon);
    const cumulativeUncertainty = uncertainty * Math.sqrt(horizon) * (1 + 0.08 * horizon);
    const adjusted = rawReward - lambda * cumulativeUncertainty * 4.2;
    const gap = rawReward - adjusted;
    path.innerHTML = Array.from({ length: horizon }, (_, i) => {
      const u = Math.min(1, uncertainty + i * 0.035);
      return `<span class="${u > 0.65 ? "uncertain-rl-modelpenalty-step" : "safe-rl-modelpenalty-step"}">
        <b>t${i + 1}</b>
        <em>u=${u.toFixed(2)}</em>
      </span>`;
    }).join("");
    rawNode.textContent = rawReward.toFixed(1);
    adjustedNode.textContent = adjusted.toFixed(1);
    gapNode.textContent = gap.toFixed(1);
    readout.textContent = `r_tilde(s,a)=r(s,a)-lambda u(s,a), lambda=${lambda.toFixed(1)}, horizon=${horizon}. ${labels.note}`;
  };

  [uncertaintyInput, penaltyInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLTheoryConcentrationLab(block) {
  const labels = currentLang === "zh"
    ? {
        samples: "samples N",
        states: "next states |S|",
        delta: "confidence delta",
        mean: "mean error",
        transition: "transition error",
        confidence: "probability",
        note:
          "Hoeffding turns independent samples into a 1/sqrt(N) error rate. Estimating a transition distribution pays an additional state-count factor."
      }
    : {
        samples: "samples N",
        states: "next states |S|",
        delta: "confidence delta",
        mean: "mean error",
        transition: "transition error",
        confidence: "probability",
        note:
          "Hoeffding turns independent samples into a 1/sqrt(N) error rate. Estimating a transition distribution pays an additional state-count factor."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-theory-widget" aria-label="Concentration sample complexity">
        <div class="rl-theory-bars">
          <span><b>${labels.mean}</b><em class="rl-theory-mean-bar"></em><small></small></span>
          <span><b>${labels.transition}</b><em class="rl-theory-transition-bar"></em><small></small></span>
        </div>
        <div class="rl-theory-stats">
          <span><b>${labels.mean}</b><em class="rl-theory-mean"></em></span>
          <span><b>${labels.transition}</b><em class="rl-theory-transition"></em></span>
          <span><b>${labels.confidence}</b><em class="rl-theory-confidence"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-theory-readout"></p>
    `,
    `
      <label>
        <span>${labels.samples}</span>
        <input class="rl-theory-samples-input" type="range" min="20" max="2000" step="20" value="400">
      </label>
      <label>
        <span>${labels.states}</span>
        <input class="rl-theory-states-input" type="range" min="2" max="80" step="1" value="12">
      </label>
      <label>
        <span>${labels.delta}</span>
        <input class="rl-theory-delta-input" type="range" min="0.01" max="0.3" step="0.01" value="0.05">
      </label>
    `
  );

  const samplesInput = block.querySelector(".rl-theory-samples-input");
  const statesInput = block.querySelector(".rl-theory-states-input");
  const deltaInput = block.querySelector(".rl-theory-delta-input");
  const meanBar = block.querySelector(".rl-theory-mean-bar");
  const transitionBar = block.querySelector(".rl-theory-transition-bar");
  const meanLabel = meanBar.nextElementSibling;
  const transitionLabel = transitionBar.nextElementSibling;
  const meanNode = block.querySelector(".rl-theory-mean");
  const transitionNode = block.querySelector(".rl-theory-transition");
  const confidenceNode = block.querySelector(".rl-theory-confidence");
  const readout = block.querySelector(".rl-theory-readout");

  const update = () => {
    const samples = Number(samplesInput.value);
    const states = Number(statesInput.value);
    const delta = Number(deltaInput.value);
    const meanError = Math.sqrt(Math.log(2 / delta) / (2 * samples));
    const transitionError = Math.sqrt((states * Math.log(1 / delta)) / samples);
    meanBar.style.height = `${28 + Math.min(1, meanError * 8) * 150}px`;
    transitionBar.style.height = `${28 + Math.min(1, transitionError * 3) * 150}px`;
    meanLabel.textContent = meanError.toFixed(3);
    transitionLabel.textContent = transitionError.toFixed(3);
    meanNode.textContent = meanError.toFixed(3);
    transitionNode.textContent = transitionError.toFixed(3);
    confidenceNode.textContent = `${(1 - delta).toFixed(2)}`;
    readout.textContent = `epsilon_mean=sqrt(log(2/delta)/(2N)), transition approx sqrt(|S|log(1/delta)/N), N=${samples}, |S|=${states}. ${labels.note}`;
  };

  [samplesInput, statesInput, deltaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLSimulationLemmaLab(block) {
  const labels = currentLang === "zh"
    ? {
        gamma: "discount gamma",
        samples: "samples N",
        states: "states |S|",
        trans: "transition error",
        horizon: "horizon factor",
        value: "value error",
        note:
          "The simulation lemma multiplies model error by the Bellman evaluation horizon. As gamma approaches 1, the resolvent makes small transition errors expensive."
      }
    : {
        gamma: "discount gamma",
        samples: "samples N",
        states: "states |S|",
        trans: "transition error",
        horizon: "horizon factor",
        value: "value error",
        note:
          "The simulation lemma multiplies model error by the Bellman evaluation horizon. As gamma approaches 1, the resolvent makes small transition errors expensive."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-simlemma-widget" aria-label="Simulation lemma horizon amplification">
        <div class="rl-simlemma-flow">
          <span><b>${labels.trans}</b><em class="rl-simlemma-transition"></em></span>
          <span><b>${labels.horizon}</b><em class="rl-simlemma-horizon"></em></span>
          <span><b>${labels.value}</b><em class="rl-simlemma-value"></em></span>
        </div>
        <div class="rl-simlemma-stats">
          <span><b>${labels.trans}</b><em class="rl-simlemma-transition-stat"></em></span>
          <span><b>${labels.horizon}</b><em class="rl-simlemma-horizon-stat"></em></span>
          <span><b>${labels.value}</b><em class="rl-simlemma-value-stat"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-simlemma-readout"></p>
    `,
    `
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-simlemma-gamma-input" type="range" min="0.5" max="0.99" step="0.01" value="0.9">
      </label>
      <label>
        <span>${labels.samples}</span>
        <input class="rl-simlemma-samples-input" type="range" min="50" max="5000" step="50" value="800">
      </label>
      <label>
        <span>${labels.states}</span>
        <input class="rl-simlemma-states-input" type="range" min="2" max="100" step="1" value="20">
      </label>
    `
  );

  const gammaInput = block.querySelector(".rl-simlemma-gamma-input");
  const samplesInput = block.querySelector(".rl-simlemma-samples-input");
  const statesInput = block.querySelector(".rl-simlemma-states-input");
  const transitionNode = block.querySelector(".rl-simlemma-transition");
  const horizonNode = block.querySelector(".rl-simlemma-horizon");
  const valueNode = block.querySelector(".rl-simlemma-value");
  const transitionStat = block.querySelector(".rl-simlemma-transition-stat");
  const horizonStat = block.querySelector(".rl-simlemma-horizon-stat");
  const valueStat = block.querySelector(".rl-simlemma-value-stat");
  const readout = block.querySelector(".rl-simlemma-readout");

  const update = () => {
    const gamma = Number(gammaInput.value);
    const samples = Number(samplesInput.value);
    const states = Number(statesInput.value);
    const transition = Math.sqrt(states / samples);
    const horizon = gamma / ((1 - gamma) ** 2);
    const value = transition * horizon;
    transitionNode.textContent = transition.toFixed(3);
    horizonNode.textContent = horizon.toFixed(1);
    valueNode.textContent = value.toFixed(2);
    transitionStat.textContent = transition.toFixed(3);
    horizonStat.textContent = horizon.toFixed(1);
    valueStat.textContent = value.toFixed(2);
    readout.textContent = `||Q^pi-Qhat^pi||_inf approx gamma/(1-gamma)^2 * sqrt(|S|/N), gamma=${gamma.toFixed(2)}. ${labels.note}`;
  };

  [gammaInput, samplesInput, statesInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLFQIErrorLedgerLab(block) {
  const labels = currentLang === "zh"
    ? {
        samples: "samples N",
        actions: "actions |A|",
        gamma: "discount gamma",
        approx: "approx error",
        sampling: "sampling",
        approximation: "approximation",
        total: "total bound",
        note:
          "Fitted Q-iteration has an empirical Bellman error from samples and a function-class error from projection or regression. Both are amplified by iteration and discount."
      }
    : {
        samples: "samples N",
        actions: "actions |A|",
        gamma: "discount gamma",
        approx: "approx error",
        sampling: "sampling",
        approximation: "approximation",
        total: "total bound",
        note:
          "Fitted Q-iteration has an empirical Bellman error from samples and a function-class error from projection or regression. Both are amplified by iteration and discount."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-fqi-ledger-widget" aria-label="Fitted Q iteration error ledger">
        <div class="rl-fqi-ledger-bars">
          <span><b>${labels.sampling}</b><em class="rl-fqi-sampling-bar"></em><small></small></span>
          <span><b>${labels.approximation}</b><em class="rl-fqi-approx-bar"></em><small></small></span>
          <span><b>${labels.total}</b><em class="rl-fqi-total-bar"></em><small></small></span>
        </div>
        <div class="rl-fqi-ledger-stats">
          <span><b>${labels.sampling}</b><em class="rl-fqi-sampling"></em></span>
          <span><b>${labels.approximation}</b><em class="rl-fqi-approximation"></em></span>
          <span><b>${labels.total}</b><em class="rl-fqi-total"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-fqi-readout"></p>
    `,
    `
      <label>
        <span>${labels.samples}</span>
        <input class="rl-fqi-samples-input" type="range" min="50" max="5000" step="50" value="1000">
      </label>
      <label>
        <span>${labels.actions}</span>
        <input class="rl-fqi-actions-input" type="range" min="2" max="40" step="1" value="8">
      </label>
      <label>
        <span>${labels.gamma}</span>
        <input class="rl-fqi-gamma-input" type="range" min="0.5" max="0.99" step="0.01" value="0.88">
      </label>
      <label>
        <span>${labels.approx}</span>
        <input class="rl-fqi-approx-input" type="range" min="0" max="0.5" step="0.01" value="0.08">
      </label>
    `
  );

  const samplesInput = block.querySelector(".rl-fqi-samples-input");
  const actionsInput = block.querySelector(".rl-fqi-actions-input");
  const gammaInput = block.querySelector(".rl-fqi-gamma-input");
  const approxInput = block.querySelector(".rl-fqi-approx-input");
  const samplingBar = block.querySelector(".rl-fqi-sampling-bar");
  const approxBar = block.querySelector(".rl-fqi-approx-bar");
  const totalBar = block.querySelector(".rl-fqi-total-bar");
  const samplingLabel = samplingBar.nextElementSibling;
  const approxLabel = approxBar.nextElementSibling;
  const totalLabel = totalBar.nextElementSibling;
  const samplingNode = block.querySelector(".rl-fqi-sampling");
  const approximationNode = block.querySelector(".rl-fqi-approximation");
  const totalNode = block.querySelector(".rl-fqi-total");
  const readout = block.querySelector(".rl-fqi-readout");

  const update = () => {
    const samples = Number(samplesInput.value);
    const actions = Number(actionsInput.value);
    const gamma = Number(gammaInput.value);
    const approx = Number(approxInput.value);
    const sampling = Math.sqrt(Math.log(Math.max(2, actions * 20)) / samples) * (1 + actions / 30);
    const approximation = approx / Math.max(0.02, 1 - gamma);
    const total = sampling / Math.max(0.02, 1 - gamma) + approximation;
    const maxScale = Math.max(0.4, total);
    [[samplingBar, sampling, samplingLabel], [approxBar, approximation, approxLabel], [totalBar, total, totalLabel]].forEach(([bar, value, label]) => {
      bar.style.height = `${28 + Math.min(1, value / maxScale) * 150}px`;
      label.textContent = value.toFixed(2);
    });
    samplingNode.textContent = sampling.toFixed(3);
    approximationNode.textContent = approximation.toFixed(2);
    totalNode.textContent = total.toFixed(2);
    readout.textContent = `error approx sampling/(1-gamma)+epsilon/(1-gamma), |A|=${actions}, gamma=${gamma.toFixed(2)}, epsilon=${approx.toFixed(2)}. ${labels.note}`;
  };

  [samplesInput, actionsInput, gammaInput, approxInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLELBODecompositionLab(block) {
  const labels = currentLang === "zh"
    ? {
        recon: "reconstruction",
        prior: "prior KL",
        gap: "posterior gap",
        elbo: "ELBO",
        evidence: "log evidence",
        tight: "bound tightness",
        note:
          "ELBO = reconstruction - KL(q(z|x)||p(z))。它到 log evidence 的 gap 是 KL(q(z|x)||p(z|x))。"
      }
    : {
        recon: "reconstruction",
        prior: "prior KL",
        gap: "posterior gap",
        elbo: "ELBO",
        evidence: "log evidence",
        tight: "bound tightness",
        note:
          "ELBO = reconstruction - KL(q(z|x)||p(z)). The gap to log evidence is KL(q(z|x)||p(z|x))."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-elbo-widget" aria-label="ELBO decomposition">
        <div class="rl-elbo-bars">
          <span><b>${labels.recon}</b><em class="rl-elbo-recon-bar"></em><small></small></span>
          <span><b>${labels.prior}</b><em class="rl-elbo-kl-bar"></em><small></small></span>
          <span><b>${labels.elbo}</b><em class="rl-elbo-bound-bar"></em><small></small></span>
          <span><b>${labels.evidence}</b><em class="rl-elbo-evidence-bar"></em><small></small></span>
        </div>
        <div class="rl-elbo-stats">
          <span><b>${labels.elbo}</b><em class="rl-elbo-bound"></em></span>
          <span><b>${labels.evidence}</b><em class="rl-elbo-evidence"></em></span>
          <span><b>${labels.tight}</b><em class="rl-elbo-tight"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-elbo-readout"></p>
    `,
    `
      <label>
        <span>${labels.recon}</span>
        <input class="rl-elbo-recon-input" type="range" min="-8" max="0" step="0.1" value="-2.4">
      </label>
      <label>
        <span>${labels.prior}</span>
        <input class="rl-elbo-kl-input" type="range" min="0" max="8" step="0.1" value="1.2">
      </label>
      <label>
        <span>${labels.gap}</span>
        <input class="rl-elbo-gap-input" type="range" min="0" max="5" step="0.1" value="0.8">
      </label>
    `
  );

  const reconInput = block.querySelector(".rl-elbo-recon-input");
  const klInput = block.querySelector(".rl-elbo-kl-input");
  const gapInput = block.querySelector(".rl-elbo-gap-input");
  const bars = [
    [block.querySelector(".rl-elbo-recon-bar"), block.querySelector(".rl-elbo-recon-bar").nextElementSibling],
    [block.querySelector(".rl-elbo-kl-bar"), block.querySelector(".rl-elbo-kl-bar").nextElementSibling],
    [block.querySelector(".rl-elbo-bound-bar"), block.querySelector(".rl-elbo-bound-bar").nextElementSibling],
    [block.querySelector(".rl-elbo-evidence-bar"), block.querySelector(".rl-elbo-evidence-bar").nextElementSibling]
  ];
  const elboNode = block.querySelector(".rl-elbo-bound");
  const evidenceNode = block.querySelector(".rl-elbo-evidence");
  const tightNode = block.querySelector(".rl-elbo-tight");
  const readout = block.querySelector(".rl-elbo-readout");

  const update = () => {
    const reconstruction = Number(reconInput.value);
    const priorKL = Number(klInput.value);
    const gap = Number(gapInput.value);
    const elbo = reconstruction - priorKL;
    const evidence = elbo + gap;
    const tightness = 1 / (1 + gap);
    const values = [Math.abs(reconstruction), priorKL, Math.abs(elbo), Math.abs(evidence)];
    const maxValue = Math.max(1, ...values);

    [[reconstruction, bars[0]], [priorKL, bars[1]], [elbo, bars[2]], [evidence, bars[3]]].forEach(([value, [bar, label]]) => {
      bar.style.height = `${28 + (Math.abs(value) / maxValue) * 150}px`;
      label.textContent = value.toFixed(2);
    });
    elboNode.textContent = elbo.toFixed(2);
    evidenceNode.textContent = evidence.toFixed(2);
    tightNode.textContent = `${(tightness * 100).toFixed(0)}%`;
    readout.textContent = `log p_theta(x) = ELBO + KL(q||posterior), ELBO=${elbo.toFixed(2)}, gap=${gap.toFixed(2)}. ${labels.note}`;
  };

  [reconInput, klInput, gapInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLGradientEstimatorLab(block) {
  const labels = currentLang === "zh"
    ? {
        samples: "samples M",
        dims: "latent dims",
        type: "latent type",
        continuous: "continuous",
        discrete: "discrete",
        score: "score-function",
        reparam: "reparameterized",
        feasible: "direct path",
        note:
          "Score-function gradient 可用于离散或连续 latent，但方差高；当 z 是固定噪声的可微变换时，reparameterization 方差更低。"
      }
    : {
        samples: "samples M",
        dims: "latent dims",
        type: "latent type",
        continuous: "continuous",
        discrete: "discrete",
        score: "score-function",
        reparam: "reparameterized",
        feasible: "direct path",
        note:
          "Score-function gradients work for discrete or continuous latents but are noisy. Reparameterization is low variance when z is a differentiable transform of fixed noise."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-gradient-widget" aria-label="Gradient estimator comparison">
        <div class="rl-gradient-bars">
          <span><b>${labels.score}</b><em class="rl-gradient-score-bar"></em><small></small></span>
          <span><b>${labels.reparam}</b><em class="rl-gradient-reparam-bar"></em><small></small></span>
        </div>
        <div class="rl-gradient-stats">
          <span><b>${labels.score}</b><em class="rl-gradient-score"></em></span>
          <span><b>${labels.reparam}</b><em class="rl-gradient-reparam"></em></span>
          <span><b>${labels.feasible}</b><em class="rl-gradient-feasible"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-gradient-readout"></p>
    `,
    `
      <label>
        <span>${labels.samples}</span>
        <input class="rl-gradient-samples-input" type="range" min="1" max="64" step="1" value="8">
      </label>
      <label>
        <span>${labels.dims}</span>
        <input class="rl-gradient-dims-input" type="range" min="1" max="64" step="1" value="16">
      </label>
      <label>
        <span>${labels.type}</span>
        <select class="rl-gradient-type-input">
          <option value="continuous">${labels.continuous}</option>
          <option value="discrete">${labels.discrete}</option>
        </select>
      </label>
    `
  );

  const samplesInput = block.querySelector(".rl-gradient-samples-input");
  const dimsInput = block.querySelector(".rl-gradient-dims-input");
  const typeInput = block.querySelector(".rl-gradient-type-input");
  const scoreBar = block.querySelector(".rl-gradient-score-bar");
  const reparamBar = block.querySelector(".rl-gradient-reparam-bar");
  const scoreLabel = scoreBar.nextElementSibling;
  const reparamLabel = reparamBar.nextElementSibling;
  const scoreNode = block.querySelector(".rl-gradient-score");
  const reparamNode = block.querySelector(".rl-gradient-reparam");
  const feasibleNode = block.querySelector(".rl-gradient-feasible");
  const readout = block.querySelector(".rl-gradient-readout");

  const update = () => {
    const samples = Number(samplesInput.value);
    const dims = Number(dimsInput.value);
    const discrete = typeInput.value === "discrete";
    const scoreVariance = (3.5 * dims) / samples;
    const reparamVariance = discrete ? scoreVariance * 1.8 : (0.42 * Math.sqrt(dims)) / samples;
    const maxValue = Math.max(1, scoreVariance, reparamVariance);
    scoreBar.style.height = `${28 + (scoreVariance / maxValue) * 150}px`;
    reparamBar.style.height = `${28 + (reparamVariance / maxValue) * 150}px`;
    reparamBar.classList.toggle("limited-rl-gradient-bar", discrete);
    scoreLabel.textContent = scoreVariance.toFixed(2);
    reparamLabel.textContent = discrete ? "not direct" : reparamVariance.toFixed(2);
    scoreNode.textContent = scoreVariance.toFixed(2);
    reparamNode.textContent = discrete ? "relaxed only" : reparamVariance.toFixed(2);
    feasibleNode.textContent = discrete ? "no" : "yes";
    readout.textContent = `M=${samples}, dim(z)=${dims}, type=${typeInput.value}. ${labels.note}`;
  };

  [samplesInput, dimsInput].forEach((input) => input.addEventListener("input", update));
  typeInput.addEventListener("change", update);
  update();
}

function mountRLVAELatentPlaneLab(block) {
  const labels = currentLang === "zh"
    ? {
        z1: "latent z1",
        z2: "latent z2",
        beta: "KL pressure beta",
        prior: "prior density",
        recon: "recon freedom",
        penalty: "KL penalty",
        note:
          "离原点更远可以帮助 reconstruction modes 分开，但 Gaussian prior 和 beta-weighted KL 会把 codes 拉回零附近。"
      }
    : {
        z1: "latent z1",
        z2: "latent z2",
        beta: "KL pressure beta",
        prior: "prior density",
        recon: "recon freedom",
        penalty: "KL penalty",
        note:
          "Moving far from the origin can help reconstruction modes separate, but the Gaussian prior and beta-weighted KL pull codes back toward zero."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-vae-widget" aria-label="VAE latent plane">
        <div class="rl-vae-plane"></div>
        <div class="rl-vae-stats">
          <span><b>${labels.prior}</b><em class="rl-vae-prior"></em></span>
          <span><b>${labels.recon}</b><em class="rl-vae-recon"></em></span>
          <span><b>${labels.penalty}</b><em class="rl-vae-penalty"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-vae-readout"></p>
    `,
    `
      <label>
        <span>${labels.z1}</span>
        <input class="rl-vae-z1-input" type="range" min="-3" max="3" step="0.1" value="1.1">
      </label>
      <label>
        <span>${labels.z2}</span>
        <input class="rl-vae-z2-input" type="range" min="-3" max="3" step="0.1" value="-0.8">
      </label>
      <label>
        <span>${labels.beta}</span>
        <input class="rl-vae-beta-input" type="range" min="0" max="4" step="0.1" value="1">
      </label>
    `
  );

  const z1Input = block.querySelector(".rl-vae-z1-input");
  const z2Input = block.querySelector(".rl-vae-z2-input");
  const betaInput = block.querySelector(".rl-vae-beta-input");
  const plane = block.querySelector(".rl-vae-plane");
  const priorNode = block.querySelector(".rl-vae-prior");
  const reconNode = block.querySelector(".rl-vae-recon");
  const penaltyNode = block.querySelector(".rl-vae-penalty");
  const readout = block.querySelector(".rl-vae-readout");

  const update = () => {
    const z1 = Number(z1Input.value);
    const z2 = Number(z2Input.value);
    const beta = Number(betaInput.value);
    const radius2 = z1 ** 2 + z2 ** 2;
    const prior = Math.exp(-0.5 * radius2);
    const klPenalty = 0.5 * beta * radius2;
    const reconFreedom = Math.max(0, 1.25 - 0.16 * beta + 0.07 * Math.sqrt(radius2));
    const activeCol = Math.max(0, Math.min(6, Math.round(z1 + 3)));
    const activeRow = Math.max(0, Math.min(6, Math.round(3 - z2)));
    const mode = z1 >= 0
      ? (z2 >= 0 ? "upper-right" : "lower-right")
      : (z2 >= 0 ? "upper-left" : "lower-left");

    plane.innerHTML = Array.from({ length: 49 }, (_, index) => {
      const row = Math.floor(index / 7);
      const col = index % 7;
      const active = row === activeRow && col === activeCol;
      const nearPrior = Math.abs(row - 3) + Math.abs(col - 3) <= 1;
      return `<span class="${active ? "active-rl-vae-cell" : ""} ${nearPrior ? "prior-rl-vae-cell" : ""}">${active ? "z" : ""}</span>`;
    }).join("");
    priorNode.textContent = prior.toFixed(2);
    reconNode.textContent = reconFreedom.toFixed(2);
    penaltyNode.textContent = klPenalty.toFixed(2);
    readout.textContent = `z=(${z1.toFixed(1)}, ${z2.toFixed(1)}), mode=${mode}, beta=${beta.toFixed(1)}. ${labels.note}`;
  };

  [z1Input, z2Input, betaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLControlBackwardMessageLab(block) {
  const labels = currentLang === "zh"
    ? {
        reward: "reward r",
        support: "transition support",
        horizon: "future horizon",
        optimality: "optimality likelihood",
        continuation: "future message",
        softValue: "log message",
        note:
          "Backward message 是 future optimality 的 probability；取 log 后就得到 soft value。Support 越低，lucky transition 越难支撑高 value。"
      }
    : {
        reward: "reward r",
        support: "transition support",
        horizon: "future horizon",
        optimality: "optimality likelihood",
        continuation: "future message",
        softValue: "log message",
        note:
          "The backward message is the probability of future optimality; its log becomes a soft value. Low support makes lucky transitions less able to carry high value."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-controlmsg-widget" aria-label="Control as inference backward message">
        <div class="rl-controlmsg-chain"></div>
        <div class="rl-controlmsg-stats">
          <span><b>${labels.optimality}</b><em class="rl-controlmsg-optimality"></em></span>
          <span><b>${labels.continuation}</b><em class="rl-controlmsg-continuation"></em></span>
          <span><b>${labels.softValue}</b><em class="rl-controlmsg-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-controlmsg-readout"></p>
    `,
    `
      <label>
        <span>${labels.reward}</span>
        <input class="rl-controlmsg-reward-input" type="range" min="-2" max="4" step="0.1" value="1.4">
      </label>
      <label>
        <span>${labels.support}</span>
        <input class="rl-controlmsg-support-input" type="range" min="0.05" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-controlmsg-horizon-input" type="range" min="1" max="8" step="1" value="4">
      </label>
    `
  );

  const rewardInput = block.querySelector(".rl-controlmsg-reward-input");
  const supportInput = block.querySelector(".rl-controlmsg-support-input");
  const horizonInput = block.querySelector(".rl-controlmsg-horizon-input");
  const chain = block.querySelector(".rl-controlmsg-chain");
  const optimalityNode = block.querySelector(".rl-controlmsg-optimality");
  const continuationNode = block.querySelector(".rl-controlmsg-continuation");
  const valueNode = block.querySelector(".rl-controlmsg-value");
  const readout = block.querySelector(".rl-controlmsg-readout");

  const update = () => {
    const reward = Number(rewardInput.value);
    const support = Number(supportInput.value);
    const horizon = Number(horizonInput.value);
    const optimality = Math.exp(Math.min(3, reward)) / Math.exp(3);
    const futureGood = Math.exp(0.45 * horizon);
    const futureBad = Math.exp(-0.35 * horizon);
    const continuation = support * futureGood + (1 - support) * futureBad;
    const logMessage = reward + Math.log(continuation);
    const stages = Math.min(7, horizon + 1);

    chain.innerHTML = Array.from({ length: stages }, (_, index) => {
      const active = index / Math.max(1, stages - 1) <= support;
      return `<span class="${active ? "supported-rl-controlmsg-step" : "fragile-rl-controlmsg-step"}"><b>t+${index}</b><em>${active ? "likely" : "thin"}</em></span>`;
    }).join("");
    optimalityNode.textContent = optimality.toFixed(2);
    continuationNode.textContent = continuation.toFixed(2);
    valueNode.textContent = logMessage.toFixed(2);
    readout.textContent = `beta_t(s,a)=p(O_t|s,a) E[beta_{t+1}(s')], log beta=${logMessage.toFixed(2)}. ${labels.note}`;
  };

  [rewardInput, supportInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLSoftTemperaturePolicyLab(block) {
  const labels = currentLang === "zh"
    ? {
        advantageA: "advantage A",
        advantageB: "advantage B",
        temperature: "temperature",
        probA: "prob action A",
        probB: "prob action B",
        entropy: "entropy",
        note:
          "Soft policy 满足 pi(a|s) proportional exp(A(s,a)/temperature)。Temperature 越低越 greedy，越高越保留 entropy。"
      }
    : {
        advantageA: "advantage A",
        advantageB: "advantage B",
        temperature: "temperature",
        probA: "prob action A",
        probB: "prob action B",
        entropy: "entropy",
        note:
          "The soft policy is proportional to exp(A(s,a)/temperature). Lower temperature is greedier; higher temperature preserves entropy."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-softtemp-widget" aria-label="Soft policy temperature">
        <div class="rl-softtemp-bars">
          <span><b>A</b><em class="rl-softtemp-a-bar"></em><small></small></span>
          <span><b>B</b><em class="rl-softtemp-b-bar"></em><small></small></span>
        </div>
        <div class="rl-softtemp-stats">
          <span><b>${labels.probA}</b><em class="rl-softtemp-a"></em></span>
          <span><b>${labels.probB}</b><em class="rl-softtemp-b"></em></span>
          <span><b>${labels.entropy}</b><em class="rl-softtemp-entropy"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-softtemp-readout"></p>
    `,
    `
      <label>
        <span>${labels.advantageA}</span>
        <input class="rl-softtemp-a-input" type="range" min="-2" max="4" step="0.1" value="1.6">
      </label>
      <label>
        <span>${labels.advantageB}</span>
        <input class="rl-softtemp-b-input" type="range" min="-2" max="4" step="0.1" value="0.2">
      </label>
      <label>
        <span>${labels.temperature}</span>
        <input class="rl-softtemp-temp-input" type="range" min="0.1" max="3" step="0.1" value="1">
      </label>
    `
  );

  const aInput = block.querySelector(".rl-softtemp-a-input");
  const bInput = block.querySelector(".rl-softtemp-b-input");
  const tempInput = block.querySelector(".rl-softtemp-temp-input");
  const aBar = block.querySelector(".rl-softtemp-a-bar");
  const bBar = block.querySelector(".rl-softtemp-b-bar");
  const aLabel = aBar.nextElementSibling;
  const bLabel = bBar.nextElementSibling;
  const aNode = block.querySelector(".rl-softtemp-a");
  const bNode = block.querySelector(".rl-softtemp-b");
  const entropyNode = block.querySelector(".rl-softtemp-entropy");
  const readout = block.querySelector(".rl-softtemp-readout");

  const update = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const temp = Number(tempInput.value);
    const maxAdv = Math.max(a, b);
    const ea = Math.exp((a - maxAdv) / temp);
    const eb = Math.exp((b - maxAdv) / temp);
    const probA = ea / (ea + eb);
    const probB = 1 - probA;
    const entropy = -probA * Math.log(probA) - probB * Math.log(probB);
    aBar.style.height = `${28 + probA * 150}px`;
    bBar.style.height = `${28 + probB * 150}px`;
    aLabel.textContent = probA.toFixed(2);
    bLabel.textContent = probB.toFixed(2);
    aNode.textContent = probA.toFixed(2);
    bNode.textContent = probB.toFixed(2);
    entropyNode.textContent = entropy.toFixed(2);
    readout.textContent = `pi(a|s)=exp(A/tau)/Z, tau=${temp.toFixed(1)}, entropy=${entropy.toFixed(2)}. ${labels.note}`;
  };

  [aInput, bInput, tempInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLSACUpdateCycleLab(block) {
  const labels = currentLang === "zh"
    ? {
        critic: "critic fit",
        entropy: "entropy alpha",
        target: "target smoothing",
        data: "fresh data",
        qTarget: "soft target",
        policy: "policy spread",
        stability: "stability",
        note:
          "SAC 交替拟合 soft Q、用 entropy-regularized objective 改进 policy、更新 target network，并继续收集 off-policy data。"
      }
    : {
        critic: "critic fit",
        entropy: "entropy alpha",
        target: "target smoothing",
        data: "fresh data",
        qTarget: "soft target",
        policy: "policy spread",
        stability: "stability",
        note:
          "SAC alternates fitting soft Q, improving the entropy-regularized policy, updating the target network, and collecting off-policy data."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-sac-widget" aria-label="Soft actor critic update cycle">
        <div class="rl-sac-cycle"></div>
        <div class="rl-sac-stats">
          <span><b>${labels.qTarget}</b><em class="rl-sac-target"></em></span>
          <span><b>${labels.policy}</b><em class="rl-sac-policy"></em></span>
          <span><b>${labels.stability}</b><em class="rl-sac-stability"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-sac-readout"></p>
    `,
    `
      <label>
        <span>${labels.critic}</span>
        <input class="rl-sac-critic-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.entropy}</span>
        <input class="rl-sac-entropy-input" type="range" min="0" max="1.5" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.target}</span>
        <input class="rl-sac-target-input" type="range" min="0.01" max="0.3" step="0.01" value="0.08">
      </label>
      <label>
        <span>${labels.data}</span>
        <input class="rl-sac-data-input" type="range" min="0" max="1" step="0.05" value="0.6">
      </label>
    `
  );

  const criticInput = block.querySelector(".rl-sac-critic-input");
  const entropyInput = block.querySelector(".rl-sac-entropy-input");
  const targetInput = block.querySelector(".rl-sac-target-input");
  const dataInput = block.querySelector(".rl-sac-data-input");
  const cycle = block.querySelector(".rl-sac-cycle");
  const targetNode = block.querySelector(".rl-sac-target");
  const policyNode = block.querySelector(".rl-sac-policy");
  const stabilityNode = block.querySelector(".rl-sac-stability");
  const readout = block.querySelector(".rl-sac-readout");

  const update = () => {
    const critic = Number(criticInput.value);
    const entropy = Number(entropyInput.value);
    const tau = Number(targetInput.value);
    const data = Number(dataInput.value);
    const softTarget = critic + entropy * 0.45;
    const policySpread = Math.min(1, 0.25 + entropy * 0.45 + data * 0.2);
    const stability = Math.max(0, Math.min(1, critic * 0.55 + (1 - tau) * 0.25 + data * 0.2));
    const steps = [
      ["Q", critic, labels.critic],
      ["pi", policySpread, labels.policy],
      ["target", 1 - tau, labels.target],
      ["data", data, labels.data]
    ];

    cycle.innerHTML = steps.map(([name, value, label]) => `
      <span class="${value > 0.55 ? "active-rl-sac-step" : "weak-rl-sac-step"}">
        <b>${name}</b>
        <em>${label}</em>
        <small>${Number(value).toFixed(2)}</small>
      </span>
    `).join("");
    targetNode.textContent = softTarget.toFixed(2);
    policyNode.textContent = policySpread.toFixed(2);
    stabilityNode.textContent = stability.toFixed(2);
    readout.textContent = `target r + gamma E[Q - alpha log pi], alpha=${entropy.toFixed(2)}, tau=${tau.toFixed(2)}. ${labels.note}`;
  };

  [criticInput, entropyInput, targetInput, dataInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLIRLRewardAmbiguityLab(block) {
  const labels = currentLang === "zh"
    ? {
        safety: "safety",
        speed: "speed",
        comfort: "comfort",
        demo: "demo score",
        alternate: "alternate score",
        gap: "ranking gap",
        note:
          "同一个 demonstration 可能被多组 reward weights 解释。IRL 的难点不是 fit 一个数字，而是选出能 transfer 的 intent。"
      }
    : {
        safety: "safety",
        speed: "speed",
        comfort: "comfort",
        demo: "demo score",
        alternate: "alternate score",
        gap: "ranking gap",
        note:
          "The same demonstration can be explained by many reward weights. IRL is not just fitting a number; it is choosing an intent that transfers."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-irl-ambiguity-widget" aria-label="IRL reward ambiguity">
        <div class="rl-irl-ambiguity-bars">
          <span><b>${labels.demo}</b><em class="rl-irl-demo-bar"></em><small></small></span>
          <span><b>${labels.alternate}</b><em class="rl-irl-alt-bar"></em><small></small></span>
        </div>
        <div class="rl-irl-ambiguity-stats">
          <span><b>${labels.demo}</b><em class="rl-irl-demo"></em></span>
          <span><b>${labels.alternate}</b><em class="rl-irl-alt"></em></span>
          <span><b>${labels.gap}</b><em class="rl-irl-gap"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-irl-ambiguity-readout"></p>
    `,
    `
      <label>
        <span>${labels.safety}</span>
        <input class="rl-irl-safety-input" type="range" min="-2" max="4" step="0.1" value="2.1">
      </label>
      <label>
        <span>${labels.speed}</span>
        <input class="rl-irl-speed-input" type="range" min="-2" max="4" step="0.1" value="0.9">
      </label>
      <label>
        <span>${labels.comfort}</span>
        <input class="rl-irl-comfort-input" type="range" min="-2" max="4" step="0.1" value="1.4">
      </label>
    `
  );

  const safetyInput = block.querySelector(".rl-irl-safety-input");
  const speedInput = block.querySelector(".rl-irl-speed-input");
  const comfortInput = block.querySelector(".rl-irl-comfort-input");
  const demoBar = block.querySelector(".rl-irl-demo-bar");
  const altBar = block.querySelector(".rl-irl-alt-bar");
  const demoLabel = demoBar.nextElementSibling;
  const altLabel = altBar.nextElementSibling;
  const demoNode = block.querySelector(".rl-irl-demo");
  const altNode = block.querySelector(".rl-irl-alt");
  const gapNode = block.querySelector(".rl-irl-gap");
  const readout = block.querySelector(".rl-irl-ambiguity-readout");

  const update = () => {
    const weights = [Number(safetyInput.value), Number(speedInput.value), Number(comfortInput.value)];
    const demoFeatures = [0.95, 0.55, 0.8];
    const altFeatures = [0.75, 0.9, 0.45];
    const demoScore = weights.reduce((sum, weight, i) => sum + weight * demoFeatures[i], 0);
    const altScore = weights.reduce((sum, weight, i) => sum + weight * altFeatures[i], 0);
    const maxScore = Math.max(1, Math.abs(demoScore), Math.abs(altScore));
    demoBar.style.height = `${28 + (Math.max(0, demoScore) / maxScore) * 150}px`;
    altBar.style.height = `${28 + (Math.max(0, altScore) / maxScore) * 150}px`;
    demoLabel.textContent = demoScore.toFixed(2);
    altLabel.textContent = altScore.toFixed(2);
    demoNode.textContent = demoScore.toFixed(2);
    altNode.textContent = altScore.toFixed(2);
    gapNode.textContent = (demoScore - altScore).toFixed(2);
    readout.textContent = `r=w^T f, w=(${weights.map((v) => v.toFixed(1)).join(", ")}). ${labels.note}`;
  };

  [safetyInput, speedInput, comfortInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLMaxEntIRLGradientLab(block) {
  const labels = currentLang === "zh"
    ? {
        expert: "expert feature",
        policy: "policy feature",
        step: "learning rate",
        gradient: "gradient",
        reward: "reward weight",
        direction: "update direction",
        note:
          "MaxEnt IRL gradient = expert statistics - model statistics。Expert 多出的 feature 会被加权提高；policy 过多的 feature 会被压低。"
      }
    : {
        expert: "expert feature",
        policy: "policy feature",
        step: "learning rate",
        gradient: "gradient",
        reward: "reward weight",
        direction: "update direction",
        note:
          "MaxEnt IRL gradient = expert statistics - model statistics. Features overrepresented by the expert are rewarded; features overrepresented by the policy are pushed down."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-maxent-irl-widget" aria-label="MaxEnt IRL gradient">
        <div class="rl-maxent-irl-bars">
          <span><b>${labels.expert}</b><em class="rl-maxent-expert-bar"></em><small></small></span>
          <span><b>${labels.policy}</b><em class="rl-maxent-policy-bar"></em><small></small></span>
          <span><b>${labels.gradient}</b><em class="rl-maxent-gradient-bar"></em><small></small></span>
        </div>
        <div class="rl-maxent-irl-stats">
          <span><b>${labels.gradient}</b><em class="rl-maxent-gradient"></em></span>
          <span><b>${labels.reward}</b><em class="rl-maxent-reward"></em></span>
          <span><b>${labels.direction}</b><em class="rl-maxent-direction"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-maxent-irl-readout"></p>
    `,
    `
      <label>
        <span>${labels.expert}</span>
        <input class="rl-maxent-expert-input" type="range" min="0" max="1" step="0.05" value="0.78">
      </label>
      <label>
        <span>${labels.policy}</span>
        <input class="rl-maxent-policy-input" type="range" min="0" max="1" step="0.05" value="0.42">
      </label>
      <label>
        <span>${labels.step}</span>
        <input class="rl-maxent-step-input" type="range" min="0.1" max="3" step="0.1" value="1">
      </label>
    `
  );

  const expertInput = block.querySelector(".rl-maxent-expert-input");
  const policyInput = block.querySelector(".rl-maxent-policy-input");
  const stepInput = block.querySelector(".rl-maxent-step-input");
  const expertBar = block.querySelector(".rl-maxent-expert-bar");
  const policyBar = block.querySelector(".rl-maxent-policy-bar");
  const gradientBar = block.querySelector(".rl-maxent-gradient-bar");
  const expertLabel = expertBar.nextElementSibling;
  const policyLabel = policyBar.nextElementSibling;
  const gradientLabel = gradientBar.nextElementSibling;
  const gradientNode = block.querySelector(".rl-maxent-gradient");
  const rewardNode = block.querySelector(".rl-maxent-reward");
  const directionNode = block.querySelector(".rl-maxent-direction");
  const readout = block.querySelector(".rl-maxent-irl-readout");

  const update = () => {
    const expert = Number(expertInput.value);
    const policy = Number(policyInput.value);
    const step = Number(stepInput.value);
    const gradient = expert - policy;
    const reward = step * gradient;
    expertBar.style.height = `${28 + expert * 150}px`;
    policyBar.style.height = `${28 + policy * 150}px`;
    gradientBar.style.height = `${28 + Math.abs(gradient) * 150}px`;
    gradientBar.classList.toggle("negative-rl-maxent-gradient", gradient < 0);
    expertLabel.textContent = expert.toFixed(2);
    policyLabel.textContent = policy.toFixed(2);
    gradientLabel.textContent = gradient.toFixed(2);
    gradientNode.textContent = gradient.toFixed(2);
    rewardNode.textContent = reward.toFixed(2);
    directionNode.textContent = gradient >= 0 ? "increase" : "decrease";
    readout.textContent = `grad L = E_expert[f] - E_policy[f] = ${gradient.toFixed(2)}. ${labels.note}`;
  };

  [expertInput, policyInput, stepInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLIRLGANGameLab(block) {
  const labels = currentLang === "zh"
    ? {
        quality: "policy quality",
        discriminator: "discriminator strength",
        transfer: "reward transfer",
        fool: "fool rate",
        reward: "reward reuse",
        mode: "method pressure",
        note:
          "GAIL 更像 occupancy matching；AIRL 额外关心 reward 是否能在新 dynamics 下复用。两者都把 demos 与 policy samples 放进一个 game。"
      }
    : {
        quality: "policy quality",
        discriminator: "discriminator strength",
        transfer: "reward transfer",
        fool: "fool rate",
        reward: "reward reuse",
        mode: "method pressure",
        note:
          "GAIL is closer to occupancy matching; AIRL also cares whether the reward can be reused under new dynamics. Both put demos and policy samples into a game."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-irl-gan-widget" aria-label="IRL as GAN game">
        <div class="rl-irl-gan-flow">
          <span class="rl-irl-policy-node"><b>policy</b><em class="rl-irl-policy-quality"></em></span>
          <span class="rl-irl-disc-node"><b>D</b><em class="rl-irl-disc-strength"></em></span>
          <span class="rl-irl-reward-node"><b>reward</b><em class="rl-irl-reward-transfer"></em></span>
        </div>
        <div class="rl-irl-gan-stats">
          <span><b>${labels.fool}</b><em class="rl-irl-fool"></em></span>
          <span><b>${labels.reward}</b><em class="rl-irl-reuse"></em></span>
          <span><b>${labels.mode}</b><em class="rl-irl-mode"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-irl-gan-readout"></p>
    `,
    `
      <label>
        <span>${labels.quality}</span>
        <input class="rl-irl-quality-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.discriminator}</span>
        <input class="rl-irl-disc-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.transfer}</span>
        <input class="rl-irl-transfer-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const qualityInput = block.querySelector(".rl-irl-quality-input");
  const discInput = block.querySelector(".rl-irl-disc-input");
  const transferInput = block.querySelector(".rl-irl-transfer-input");
  const qualityNode = block.querySelector(".rl-irl-policy-quality");
  const discNode = block.querySelector(".rl-irl-disc-strength");
  const transferNode = block.querySelector(".rl-irl-reward-transfer");
  const foolNode = block.querySelector(".rl-irl-fool");
  const reuseNode = block.querySelector(".rl-irl-reuse");
  const modeNode = block.querySelector(".rl-irl-mode");
  const readout = block.querySelector(".rl-irl-gan-readout");

  const update = () => {
    const quality = Number(qualityInput.value);
    const discriminator = Number(discInput.value);
    const transfer = Number(transferInput.value);
    const foolRate = quality * (1 - 0.45 * discriminator) + 0.12 * transfer;
    const rewardReuse = transfer * (0.5 + 0.5 * discriminator);
    const mode = rewardReuse > foolRate ? "AIRL-like" : "GAIL-like";
    qualityNode.textContent = quality.toFixed(2);
    discNode.textContent = discriminator.toFixed(2);
    transferNode.textContent = transfer.toFixed(2);
    foolNode.textContent = Math.min(1, foolRate).toFixed(2);
    reuseNode.textContent = Math.min(1, rewardReuse).toFixed(2);
    modeNode.textContent = mode;
    readout.textContent = `D(tau)=exp(r)/(exp(r)+pi), policy quality=${quality.toFixed(2)}, transfer=${transfer.toFixed(2)}. ${labels.note}`;
  };

  [qualityInput, discInput, transferInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLPOMDPHistoryStateLab(block) {
  const labels = currentLang === "zh"
    ? {
        aliasing: "observation aliasing",
        memory: "memory length",
        horizon: "horizon",
        hidden: "hidden separation",
        value: "value error",
        cost: "replay cost",
        note:
          "Partial observability 把不同 hidden states 映射到同一 observation。History 越长越能分离 hidden states，但 replay 和 training cost 也会上升。"
      }
    : {
        aliasing: "observation aliasing",
        memory: "memory length",
        horizon: "horizon",
        hidden: "hidden separation",
        value: "value error",
        cost: "replay cost",
        note:
          "Partial observability maps different hidden states to the same observation. Longer history separates hidden states better, but replay and training cost rise."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-pomdp-widget" aria-label="POMDP history state">
        <div class="rl-pomdp-history"></div>
        <div class="rl-pomdp-stats">
          <span><b>${labels.hidden}</b><em class="rl-pomdp-separation"></em></span>
          <span><b>${labels.value}</b><em class="rl-pomdp-error"></em></span>
          <span><b>${labels.cost}</b><em class="rl-pomdp-cost"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-pomdp-readout"></p>
    `,
    `
      <label>
        <span>${labels.aliasing}</span>
        <input class="rl-pomdp-aliasing-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.memory}</span>
        <input class="rl-pomdp-memory-input" type="range" min="1" max="12" step="1" value="4">
      </label>
      <label>
        <span>${labels.horizon}</span>
        <input class="rl-pomdp-horizon-input" type="range" min="2" max="20" step="1" value="8">
      </label>
    `
  );

  const aliasingInput = block.querySelector(".rl-pomdp-aliasing-input");
  const memoryInput = block.querySelector(".rl-pomdp-memory-input");
  const horizonInput = block.querySelector(".rl-pomdp-horizon-input");
  const history = block.querySelector(".rl-pomdp-history");
  const separationNode = block.querySelector(".rl-pomdp-separation");
  const errorNode = block.querySelector(".rl-pomdp-error");
  const costNode = block.querySelector(".rl-pomdp-cost");
  const readout = block.querySelector(".rl-pomdp-readout");

  const update = () => {
    const aliasing = Number(aliasingInput.value);
    const memory = Number(memoryInput.value);
    const horizon = Number(horizonInput.value);
    const separation = Math.min(1, (memory / horizon) * (1 - 0.35 * aliasing));
    const valueError = aliasing * (1 - separation);
    const replayCost = memory * horizon;
    const shown = Math.min(memory, 10);
    history.innerHTML = Array.from({ length: shown }, (_, index) => {
      const active = index / Math.max(1, shown - 1) <= separation;
      return `<span class="${active ? "active-rl-pomdp-step" : "aliased-rl-pomdp-step"}"><b>h-${shown - index - 1}</b><em>${active ? "split" : "mixed"}</em></span>`;
    }).join("");
    separationNode.textContent = separation.toFixed(2);
    errorNode.textContent = valueError.toFixed(2);
    costNode.textContent = replayCost.toFixed(0);
    readout.textContent = `h_t=f(o_1,a_1,...,o_t), memory=${memory}, horizon=${horizon}. ${labels.note}`;
  };

  [aliasingInput, memoryInput, horizonInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLHFPreferenceRewardLab(block) {
  const labels = currentLang === "zh"
    ? {
        gap: "reward gap",
        noise: "label noise",
        beta: "KL beta",
        prefer: "P(A preferred)",
        pressure: "RL pressure",
        risk: "overopt risk",
        note:
          "Pairwise preferences 用 logistic model 训练 reward。Reward gap 越大越确定；label noise 与 KL beta 决定 RL update 是否容易过度优化 reward model。"
      }
    : {
        gap: "reward gap",
        noise: "label noise",
        beta: "KL beta",
        prefer: "P(A preferred)",
        pressure: "RL pressure",
        risk: "overopt risk",
        note:
          "Pairwise preferences train reward with a logistic model. Larger reward gaps are more certain; label noise and KL beta control overoptimization risk."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rlhf-pref-widget" aria-label="RLHF preference reward model">
        <div class="rlhf-pref-bars">
          <span><b>A</b><em class="rlhf-pref-a-bar"></em><small></small></span>
          <span><b>B</b><em class="rlhf-pref-b-bar"></em><small></small></span>
        </div>
        <div class="rlhf-pref-stats">
          <span><b>${labels.prefer}</b><em class="rlhf-pref-prob"></em></span>
          <span><b>${labels.pressure}</b><em class="rlhf-pref-pressure"></em></span>
          <span><b>${labels.risk}</b><em class="rlhf-pref-risk"></em></span>
        </div>
      </div>
      <p class="interactive-readout rlhf-pref-readout"></p>
    `,
    `
      <label>
        <span>${labels.gap}</span>
        <input class="rlhf-pref-gap-input" type="range" min="-5" max="5" step="0.1" value="1.6">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="rlhf-pref-noise-input" type="range" min="0" max="0.45" step="0.01" value="0.08">
      </label>
      <label>
        <span>${labels.beta}</span>
        <input class="rlhf-pref-beta-input" type="range" min="0.05" max="2" step="0.05" value="0.5">
      </label>
    `
  );

  const gapInput = block.querySelector(".rlhf-pref-gap-input");
  const noiseInput = block.querySelector(".rlhf-pref-noise-input");
  const betaInput = block.querySelector(".rlhf-pref-beta-input");
  const aBar = block.querySelector(".rlhf-pref-a-bar");
  const bBar = block.querySelector(".rlhf-pref-b-bar");
  const aLabel = aBar.nextElementSibling;
  const bLabel = bBar.nextElementSibling;
  const probNode = block.querySelector(".rlhf-pref-prob");
  const pressureNode = block.querySelector(".rlhf-pref-pressure");
  const riskNode = block.querySelector(".rlhf-pref-risk");
  const readout = block.querySelector(".rlhf-pref-readout");

  const update = () => {
    const gap = Number(gapInput.value);
    const noise = Number(noiseInput.value);
    const beta = Number(betaInput.value);
    const cleanProb = 1 / (1 + Math.exp(-gap));
    const prob = cleanProb * (1 - noise) + (1 - cleanProb) * noise;
    const pressure = Math.abs(gap) / beta;
    const risk = Math.min(1, pressure * (0.25 + noise));
    aBar.style.height = `${28 + prob * 150}px`;
    bBar.style.height = `${28 + (1 - prob) * 150}px`;
    aLabel.textContent = prob.toFixed(2);
    bLabel.textContent = (1 - prob).toFixed(2);
    probNode.textContent = prob.toFixed(2);
    pressureNode.textContent = pressure.toFixed(2);
    riskNode.textContent = risk.toFixed(2);
    readout.textContent = `P(A>B)=exp(r_A)/(exp(r_A)+exp(r_B)), gap=${gap.toFixed(1)}, beta=${beta.toFixed(2)}. ${labels.note}`;
  };

  [gapInput, noiseInput, betaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountLMRLTimeStepTradeoffLab(block) {
  const labels = currentLang === "zh"
    ? {
        horizon: "dialogue horizon",
        action: "utterance action size",
        coverage: "offline coverage",
        token: "per-token burden",
        utterance: "per-utterance burden",
        feasible: "offline feasibility",
        note:
          "Per-utterance steps horizon 短但 action space 大；per-token steps action 简单但 horizon 长。Offline coverage 决定 value learning 有多危险。"
      }
    : {
        horizon: "dialogue horizon",
        action: "utterance action size",
        coverage: "offline coverage",
        token: "per-token burden",
        utterance: "per-utterance burden",
        feasible: "offline feasibility",
        note:
          "Per-utterance steps have shorter horizons but huge action spaces; per-token steps have simple actions but long horizons. Offline coverage controls value-learning risk."
      };

  setInteractiveHTML(
    block,
    `
      <div class="lm-rl-step-widget" aria-label="Language RL time step tradeoff">
        <div class="lm-rl-step-bars">
          <span><b>${labels.token}</b><em class="lm-rl-token-bar"></em><small></small></span>
          <span><b>${labels.utterance}</b><em class="lm-rl-utterance-bar"></em><small></small></span>
        </div>
        <div class="lm-rl-step-stats">
          <span><b>${labels.token}</b><em class="lm-rl-token"></em></span>
          <span><b>${labels.utterance}</b><em class="lm-rl-utterance"></em></span>
          <span><b>${labels.feasible}</b><em class="lm-rl-feasible"></em></span>
        </div>
      </div>
      <p class="interactive-readout lm-rl-step-readout"></p>
    `,
    `
      <label>
        <span>${labels.horizon}</span>
        <input class="lm-rl-horizon-input" type="range" min="2" max="20" step="1" value="8">
      </label>
      <label>
        <span>${labels.action}</span>
        <input class="lm-rl-action-input" type="range" min="10" max="1000" step="10" value="250">
      </label>
      <label>
        <span>${labels.coverage}</span>
        <input class="lm-rl-coverage-input" type="range" min="0.05" max="1" step="0.05" value="0.45">
      </label>
    `
  );

  const horizonInput = block.querySelector(".lm-rl-horizon-input");
  const actionInput = block.querySelector(".lm-rl-action-input");
  const coverageInput = block.querySelector(".lm-rl-coverage-input");
  const tokenBar = block.querySelector(".lm-rl-token-bar");
  const utteranceBar = block.querySelector(".lm-rl-utterance-bar");
  const tokenLabel = tokenBar.nextElementSibling;
  const utteranceLabel = utteranceBar.nextElementSibling;
  const tokenNode = block.querySelector(".lm-rl-token");
  const utteranceNode = block.querySelector(".lm-rl-utterance");
  const feasibleNode = block.querySelector(".lm-rl-feasible");
  const readout = block.querySelector(".lm-rl-step-readout");

  const update = () => {
    const horizon = Number(horizonInput.value);
    const actionSize = Number(actionInput.value);
    const coverage = Number(coverageInput.value);
    const tokenBurden = horizon * 12 * (1.2 - coverage);
    const utteranceBurden = Math.log(actionSize) * (1.4 - coverage) * 8;
    const maxBurden = Math.max(1, tokenBurden, utteranceBurden);
    const feasibility = Math.max(0, Math.min(1, coverage - 0.02 * Math.log(actionSize) + 0.02 * horizon));
    tokenBar.style.height = `${28 + (tokenBurden / maxBurden) * 150}px`;
    utteranceBar.style.height = `${28 + (utteranceBurden / maxBurden) * 150}px`;
    tokenLabel.textContent = tokenBurden.toFixed(1);
    utteranceLabel.textContent = utteranceBurden.toFixed(1);
    tokenNode.textContent = tokenBurden.toFixed(1);
    utteranceNode.textContent = utteranceBurden.toFixed(1);
    feasibleNode.textContent = feasibility.toFixed(2);
    readout.textContent = `token horizon approx ${horizon * 12}, utterance actions approx ${actionSize}. ${labels.note}`;
  };

  [horizonInput, actionInput, coverageInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLTransferRandomizationLab(block) {
  const labels = currentLang === "zh"
    ? {
        shift: "domain shift",
        width: "randomization width",
        shots: "target shots",
        source: "source fit",
        zero: "zero-shot",
        adapted: "after adapt",
        entropy: "exploration left",
        note:
          "Domain randomization 的目标是让 target 落进 training support。太窄会 miss target，太宽会牺牲 specialization；shots 只有在 policy 还保留 exploration 时才有效。"
      }
    : {
        shift: "domain shift",
        width: "randomization width",
        shots: "target shots",
        source: "source fit",
        zero: "zero-shot",
        adapted: "after adapt",
        entropy: "exploration left",
        note:
          "Domain randomization tries to put the target inside training support. Too narrow misses the target; too broad hurts specialization; shots help only if exploration remains."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-transfer-widget" aria-label="RL transfer randomization">
        <div class="rl-transfer-bars">
          <span><b>${labels.source}</b><em class="rl-transfer-source-bar"></em><small></small></span>
          <span><b>${labels.zero}</b><em class="rl-transfer-zero-bar"></em><small></small></span>
          <span><b>${labels.adapted}</b><em class="rl-transfer-adapt-bar"></em><small></small></span>
        </div>
        <div class="rl-transfer-stats">
          <span><b>${labels.zero}</b><em class="rl-transfer-zero"></em></span>
          <span><b>${labels.adapted}</b><em class="rl-transfer-adapt"></em></span>
          <span><b>${labels.entropy}</b><em class="rl-transfer-entropy"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-transfer-readout"></p>
    `,
    `
      <label>
        <span>${labels.shift}</span>
        <input class="rl-transfer-shift-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.width}</span>
        <input class="rl-transfer-width-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
      <label>
        <span>${labels.shots}</span>
        <input class="rl-transfer-shots-input" type="range" min="0" max="10" step="1" value="3">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const shiftInput = block.querySelector(".rl-transfer-shift-input");
  const widthInput = block.querySelector(".rl-transfer-width-input");
  const shotsInput = block.querySelector(".rl-transfer-shots-input");
  const sourceBar = block.querySelector(".rl-transfer-source-bar");
  const zeroBar = block.querySelector(".rl-transfer-zero-bar");
  const adaptBar = block.querySelector(".rl-transfer-adapt-bar");
  const sourceLabel = sourceBar.nextElementSibling;
  const zeroLabel = zeroBar.nextElementSibling;
  const adaptLabel = adaptBar.nextElementSibling;
  const zeroNode = block.querySelector(".rl-transfer-zero");
  const adaptNode = block.querySelector(".rl-transfer-adapt");
  const entropyNode = block.querySelector(".rl-transfer-entropy");
  const readout = block.querySelector(".rl-transfer-readout");

  const update = () => {
    const shift = Number(shiftInput.value);
    const width = Number(widthInput.value);
    const shots = Number(shotsInput.value);
    const uncovered = Math.max(0, shift - width);
    const coverage = clamp(Math.exp(-(uncovered * uncovered) / (0.04 + width * 0.32)));
    const specialization = clamp(1 - 0.32 * width);
    const zeroShot = clamp(coverage * specialization);
    const explorationLeft = clamp(0.25 + 0.55 * width - 0.2 * shift);
    const finetuneGain = (1 - zeroShot) * (1 - Math.exp(-shots * (0.08 + 0.32 * explorationLeft)));
    const adapted = clamp(zeroShot + finetuneGain);
    const sourceFit = clamp(1 - 0.22 * width);
    sourceBar.style.height = `${28 + sourceFit * 150}px`;
    zeroBar.style.height = `${28 + zeroShot * 150}px`;
    adaptBar.style.height = `${28 + adapted * 150}px`;
    sourceLabel.textContent = sourceFit.toFixed(2);
    zeroLabel.textContent = zeroShot.toFixed(2);
    adaptLabel.textContent = adapted.toFixed(2);
    zeroNode.textContent = zeroShot.toFixed(2);
    adaptNode.textContent = adapted.toFixed(2);
    entropyNode.textContent = explorationLeft.toFixed(2);
    readout.textContent = `coverage=${coverage.toFixed(2)}, specialization=${specialization.toFixed(2)}, shots=${shots}. ${labels.note}`;
  };

  [shiftInput, widthInput, shotsInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLGoalContextTransferLab(block) {
  const labels = currentLang === "zh"
    ? {
        tasks: "task count",
        similarity: "goal similarity",
        reliability: "context reliability",
        sharing: "representation sharing",
        confusion: "policy confusion",
        transfer: "zero-shot transfer",
        note:
          "Multi-task RL 可以共享 representation，但如果 context 不可靠，同一个 state 下多个 goals 会互相混淆。Goal-conditioned policy 的关键是把要做什么显式放进输入。"
      }
    : {
        tasks: "task count",
        similarity: "goal similarity",
        reliability: "context reliability",
        sharing: "representation sharing",
        confusion: "policy confusion",
        transfer: "zero-shot transfer",
        note:
          "Multi-task RL can share representations, but unreliable context makes goals conflict in the same state. A goal-conditioned policy makes the intended task explicit."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-goal-context-widget" aria-label="RL goal conditioned context">
        <div class="rl-goal-context-grid"></div>
        <div class="rl-goal-context-stats">
          <span><b>${labels.sharing}</b><em class="rl-goal-sharing"></em></span>
          <span><b>${labels.confusion}</b><em class="rl-goal-confusion"></em></span>
          <span><b>${labels.transfer}</b><em class="rl-goal-transfer"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-goal-context-readout"></p>
    `,
    `
      <label>
        <span>${labels.tasks}</span>
        <input class="rl-goal-tasks-input" type="range" min="2" max="10" step="1" value="5">
      </label>
      <label>
        <span>${labels.similarity}</span>
        <input class="rl-goal-similarity-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.reliability}</span>
        <input class="rl-goal-reliability-input" type="range" min="0" max="1" step="0.05" value="0.8">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const tasksInput = block.querySelector(".rl-goal-tasks-input");
  const similarityInput = block.querySelector(".rl-goal-similarity-input");
  const reliabilityInput = block.querySelector(".rl-goal-reliability-input");
  const grid = block.querySelector(".rl-goal-context-grid");
  const sharingNode = block.querySelector(".rl-goal-sharing");
  const confusionNode = block.querySelector(".rl-goal-confusion");
  const transferNode = block.querySelector(".rl-goal-transfer");
  const readout = block.querySelector(".rl-goal-context-readout");

  const update = () => {
    const tasks = Number(tasksInput.value);
    const similarity = Number(similarityInput.value);
    const reliability = Number(reliabilityInput.value);
    const sharing = clamp(similarity * Math.log2(tasks + 1) / Math.log2(11));
    const confusion = clamp((tasks / 10) * (1 - similarity) * (1 - reliability));
    const transfer = clamp(0.15 + 0.65 * sharing + 0.25 * reliability - confusion);
    const shown = Math.min(tasks, 8);
    grid.innerHTML = Array.from({ length: shown }, (_, index) => {
      const clear = reliability > index / Math.max(1, shown - 1);
      return `<span class="${clear ? "clear-rl-goal-cell" : "confused-rl-goal-cell"}"><b>g${index + 1}</b><em>${clear ? "context" : "mixed"}</em></span>`;
    }).join("");
    sharingNode.textContent = sharing.toFixed(2);
    confusionNode.textContent = confusion.toFixed(2);
    transferNode.textContent = transfer.toFixed(2);
    readout.textContent = `pi(a|s,g), tasks=${tasks}, similarity=${similarity.toFixed(2)}. ${labels.note}`;
  };

  [tasksInput, similarityInput, reliabilityInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLMetaRNNExplorationLab(block) {
  const labels = currentLang === "zh"
    ? {
        ambiguity: "task ambiguity",
        memory: "memory carryover",
        explore: "exploration pressure",
        info: "information gain",
        exploit: "later reward",
        total: "meta-return",
        note:
          "RNN hidden state 如果跨 episodes 保留，早期 episode 可以主动 probe task identity，后期 episode 利用 hidden state exploit。"
      }
    : {
        ambiguity: "task ambiguity",
        memory: "memory carryover",
        explore: "exploration pressure",
        info: "information gain",
        exploit: "later reward",
        total: "meta-return",
        note:
          "When RNN hidden state persists across episodes, early episodes can probe task identity and later episodes can exploit the hidden state."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-meta-rnn-widget" aria-label="RL recurrent meta learning">
        <div class="rl-meta-rnn-episodes">
          <span><b>ep 1</b><em class="rl-meta-rnn-probe">probe</em></span>
          <span><b>h</b><em class="rl-meta-rnn-update">update</em></span>
          <span><b>ep 2</b><em class="rl-meta-rnn-exploit">exploit</em></span>
          <span><b>ep 3</b><em class="rl-meta-rnn-reuse">reuse</em></span>
        </div>
        <div class="rl-meta-rnn-stats">
          <span><b>${labels.info}</b><em class="rl-meta-rnn-info"></em></span>
          <span><b>${labels.exploit}</b><em class="rl-meta-rnn-later"></em></span>
          <span><b>${labels.total}</b><em class="rl-meta-rnn-total"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-meta-rnn-readout"></p>
    `,
    `
      <label>
        <span>${labels.ambiguity}</span>
        <input class="rl-meta-rnn-ambiguity-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.memory}</span>
        <input class="rl-meta-rnn-memory-input" type="range" min="0" max="1" step="0.05" value="0.8">
      </label>
      <label>
        <span>${labels.explore}</span>
        <input class="rl-meta-rnn-explore-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const ambiguityInput = block.querySelector(".rl-meta-rnn-ambiguity-input");
  const memoryInput = block.querySelector(".rl-meta-rnn-memory-input");
  const exploreInput = block.querySelector(".rl-meta-rnn-explore-input");
  const episodeNodes = Array.from(block.querySelectorAll(".rl-meta-rnn-episodes span"));
  const infoNode = block.querySelector(".rl-meta-rnn-info");
  const laterNode = block.querySelector(".rl-meta-rnn-later");
  const totalNode = block.querySelector(".rl-meta-rnn-total");
  const readout = block.querySelector(".rl-meta-rnn-readout");

  const update = () => {
    const ambiguity = Number(ambiguityInput.value);
    const memory = Number(memoryInput.value);
    const explore = Number(exploreInput.value);
    const information = clamp(memory * explore * (0.35 + 0.65 * ambiguity));
    const probeCost = explore * (0.15 + 0.35 * ambiguity);
    const laterReward = clamp(0.2 + information * 0.75 + (1 - ambiguity) * 0.25);
    const metaReturn = clamp(laterReward - 0.35 * probeCost + 0.25 * memory);
    episodeNodes.forEach((node, index) => {
      node.classList.toggle("active-rl-meta-rnn-step", index / 3 <= metaReturn);
      node.classList.toggle("weak-rl-meta-rnn-step", index / 3 > metaReturn);
    });
    infoNode.textContent = information.toFixed(2);
    laterNode.textContent = laterReward.toFixed(2);
    totalNode.textContent = metaReturn.toFixed(2);
    readout.textContent = `h_t=f(h_{t-1},s_t,a_{t-1},r_{t-1}), probe cost=${probeCost.toFixed(2)}. ${labels.note}`;
  };

  [ambiguityInput, memoryInput, exploreInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLMAMLAdaptationLab(block) {
  const labels = currentLang === "zh"
    ? {
        steps: "inner steps",
        curvature: "task curvature",
        init: "init quality",
        before: "before update",
        after: "after update",
        overfit: "meta-overfit risk",
        note:
          "MAML 学的不是直接最优 policy，而是一个 after one or few gradient steps 会变好的 initialization。Curvature 太强或 inner steps 太多时，adaptation 会更不稳。"
      }
    : {
        steps: "inner steps",
        curvature: "task curvature",
        init: "init quality",
        before: "before update",
        after: "after update",
        overfit: "meta-overfit risk",
        note:
          "MAML learns an initialization that becomes good after one or a few gradient steps. Strong curvature or too many inner steps can make adaptation unstable."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-maml-widget" aria-label="RL MAML adaptation">
        <div class="rl-maml-bars">
          <span><b>${labels.before}</b><em class="rl-maml-before-bar"></em><small></small></span>
          <span><b>${labels.after}</b><em class="rl-maml-after-bar"></em><small></small></span>
          <span><b>${labels.overfit}</b><em class="rl-maml-risk-bar"></em><small></small></span>
        </div>
        <div class="rl-maml-stats">
          <span><b>${labels.before}</b><em class="rl-maml-before"></em></span>
          <span><b>${labels.after}</b><em class="rl-maml-after"></em></span>
          <span><b>${labels.overfit}</b><em class="rl-maml-risk"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-maml-readout"></p>
    `,
    `
      <label>
        <span>${labels.steps}</span>
        <input class="rl-maml-steps-input" type="range" min="0" max="5" step="1" value="1">
      </label>
      <label>
        <span>${labels.curvature}</span>
        <input class="rl-maml-curvature-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.init}</span>
        <input class="rl-maml-init-input" type="range" min="0" max="1" step="0.05" value="0.75">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const stepsInput = block.querySelector(".rl-maml-steps-input");
  const curvatureInput = block.querySelector(".rl-maml-curvature-input");
  const initInput = block.querySelector(".rl-maml-init-input");
  const beforeBar = block.querySelector(".rl-maml-before-bar");
  const afterBar = block.querySelector(".rl-maml-after-bar");
  const riskBar = block.querySelector(".rl-maml-risk-bar");
  const beforeLabel = beforeBar.nextElementSibling;
  const afterLabel = afterBar.nextElementSibling;
  const riskLabel = riskBar.nextElementSibling;
  const beforeNode = block.querySelector(".rl-maml-before");
  const afterNode = block.querySelector(".rl-maml-after");
  const riskNode = block.querySelector(".rl-maml-risk");
  const readout = block.querySelector(".rl-maml-readout");

  const update = () => {
    const steps = Number(stepsInput.value);
    const curvature = Number(curvatureInput.value);
    const init = Number(initInput.value);
    const beforeLoss = Math.max(0.08, 1.1 - 0.68 * init + 0.35 * curvature);
    const improvement = clamp((1 - Math.exp(-steps * (0.5 + 0.35 * init))) * (1 - 0.45 * curvature));
    const afterLoss = Math.max(0.05, beforeLoss * (1 - improvement));
    const overfitRisk = clamp(0.14 * steps * curvature + 0.22 * (1 - init));
    beforeBar.style.height = `${28 + Math.min(1, beforeLoss) * 150}px`;
    afterBar.style.height = `${28 + Math.min(1, afterLoss) * 150}px`;
    riskBar.style.height = `${28 + overfitRisk * 150}px`;
    beforeLabel.textContent = beforeLoss.toFixed(2);
    afterLabel.textContent = afterLoss.toFixed(2);
    riskLabel.textContent = overfitRisk.toFixed(2);
    beforeNode.textContent = beforeLoss.toFixed(2);
    afterNode.textContent = afterLoss.toFixed(2);
    riskNode.textContent = overfitRisk.toFixed(2);
    readout.textContent = `theta' = theta + alpha grad_theta J_i(theta), steps=${steps}, improvement=${improvement.toFixed(2)}. ${labels.note}`;
  };

  [stepsInput, curvatureInput, initInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLMetaInferencePerspectivesLab(block) {
  const labels = currentLang === "zh"
    ? {
        uncertainty: "posterior uncertainty",
        samples: "context samples",
        prior: "prior strength",
        confidence: "task confidence",
        explore: "posterior exploration",
        overfit: "meta-overfit risk",
        note:
          "Meta-RL as inference 把 task 当作 latent variable。Context samples 越多，posterior 越具体；prior 太强时适应快但可能 meta-overfit。"
      }
    : {
        uncertainty: "posterior uncertainty",
        samples: "context samples",
        prior: "prior strength",
        confidence: "task confidence",
        explore: "posterior exploration",
        overfit: "meta-overfit risk",
        note:
          "Meta-RL as inference treats the task as a latent variable. More context samples sharpen the posterior; a strong prior adapts quickly but can meta-overfit."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-meta-perspective-widget" aria-label="RL meta learning perspectives">
        <div class="rl-meta-perspective-cards">
          <span><b>RNN</b><em>h_t stores context</em></span>
          <span><b>MAML</b><em>theta updates fast</em></span>
          <span><b>PEARL</b><em>z samples task</em></span>
        </div>
        <div class="rl-meta-perspective-stats">
          <span><b>${labels.confidence}</b><em class="rl-meta-perspective-confidence"></em></span>
          <span><b>${labels.explore}</b><em class="rl-meta-perspective-explore"></em></span>
          <span><b>${labels.overfit}</b><em class="rl-meta-perspective-overfit"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-meta-perspective-readout"></p>
    `,
    `
      <label>
        <span>${labels.uncertainty}</span>
        <input class="rl-meta-perspective-uncertainty-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
      <label>
        <span>${labels.samples}</span>
        <input class="rl-meta-perspective-samples-input" type="range" min="1" max="20" step="1" value="6">
      </label>
      <label>
        <span>${labels.prior}</span>
        <input class="rl-meta-perspective-prior-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const uncertaintyInput = block.querySelector(".rl-meta-perspective-uncertainty-input");
  const samplesInput = block.querySelector(".rl-meta-perspective-samples-input");
  const priorInput = block.querySelector(".rl-meta-perspective-prior-input");
  const cards = Array.from(block.querySelectorAll(".rl-meta-perspective-cards span"));
  const confidenceNode = block.querySelector(".rl-meta-perspective-confidence");
  const exploreNode = block.querySelector(".rl-meta-perspective-explore");
  const overfitNode = block.querySelector(".rl-meta-perspective-overfit");
  const readout = block.querySelector(".rl-meta-perspective-readout");

  const update = () => {
    const uncertainty = Number(uncertaintyInput.value);
    const samples = Number(samplesInput.value);
    const prior = Number(priorInput.value);
    const evidence = clamp(1 - Math.exp(-samples * (0.12 + 0.08 * (1 - prior))));
    const confidence = clamp(0.25 * prior + evidence * (1 - 0.45 * uncertainty));
    const posteriorExplore = clamp(uncertainty * (1 - prior) + 0.03 * samples);
    const overfitRisk = clamp(0.45 * prior + 0.25 * uncertainty - 0.015 * samples);
    cards[0].classList.toggle("active-rl-meta-perspective", samples >= 4);
    cards[1].classList.toggle("active-rl-meta-perspective", prior >= 0.35);
    cards[2].classList.toggle("active-rl-meta-perspective", uncertainty >= 0.25);
    confidenceNode.textContent = confidence.toFixed(2);
    exploreNode.textContent = posteriorExplore.toFixed(2);
    overfitNode.textContent = overfitRisk.toFixed(2);
    readout.textContent = `q_phi(z|c) confidence=${confidence.toFixed(2)}, evidence=${evidence.toFixed(2)}. ${labels.note}`;
  };

  [uncertaintyInput, samplesInput, priorInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLOpenSampleComplexityLab(block) {
  const labels = currentLang === "zh"
    ? {
        method: "algorithm class",
        cost: "step cost",
        parallel: "parallelism",
        samples: "env steps",
        wall: "wall time",
        real: "real-world pain",
        note:
          "Sample complexity 不是抽象数字：同样的 steps 在 Atari、MuJoCo、high-fidelity simulator 和真实机器人上代表完全不同的时间成本。"
      }
    : {
        method: "algorithm class",
        cost: "step cost",
        parallel: "parallelism",
        samples: "env steps",
        wall: "wall time",
        real: "real-world pain",
        note:
          "Sample complexity is not abstract: the same step count means very different time in Atari, MuJoCo, high-fidelity simulation, or real robots."
      };

  const methods = [
    { name: "gradient-free", steps: 100000000 },
    { name: "policy gradient", steps: 10000000 },
    { name: "off-policy value", steps: 1000000 },
    { name: "model-based", steps: 30000 }
  ];

  setInteractiveHTML(
    block,
    `
      <div class="rl-open-sample-widget" aria-label="RL sample complexity">
        <div class="rl-open-sample-bars">
          <span><b>${labels.samples}</b><em class="rl-open-sample-steps-bar"></em><small></small></span>
          <span><b>${labels.wall}</b><em class="rl-open-sample-wall-bar"></em><small></small></span>
          <span><b>${labels.real}</b><em class="rl-open-sample-pain-bar"></em><small></small></span>
        </div>
        <div class="rl-open-sample-stats">
          <span><b>${labels.samples}</b><em class="rl-open-sample-steps"></em></span>
          <span><b>${labels.wall}</b><em class="rl-open-sample-wall"></em></span>
          <span><b>${labels.real}</b><em class="rl-open-sample-pain"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-open-sample-readout"></p>
    `,
    `
      <label>
        <span>${labels.method}</span>
        <input class="rl-open-sample-method-input" type="range" min="0" max="3" step="1" value="2">
      </label>
      <label>
        <span>${labels.cost}</span>
        <input class="rl-open-sample-cost-input" type="range" min="0.001" max="1" step="0.001" value="0.03">
      </label>
      <label>
        <span>${labels.parallel}</span>
        <input class="rl-open-sample-parallel-input" type="range" min="1" max="128" step="1" value="16">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const methodInput = block.querySelector(".rl-open-sample-method-input");
  const costInput = block.querySelector(".rl-open-sample-cost-input");
  const parallelInput = block.querySelector(".rl-open-sample-parallel-input");
  const stepsBar = block.querySelector(".rl-open-sample-steps-bar");
  const wallBar = block.querySelector(".rl-open-sample-wall-bar");
  const painBar = block.querySelector(".rl-open-sample-pain-bar");
  const stepsLabel = stepsBar.nextElementSibling;
  const wallLabel = wallBar.nextElementSibling;
  const painLabel = painBar.nextElementSibling;
  const stepsNode = block.querySelector(".rl-open-sample-steps");
  const wallNode = block.querySelector(".rl-open-sample-wall");
  const painNode = block.querySelector(".rl-open-sample-pain");
  const readout = block.querySelector(".rl-open-sample-readout");

  const update = () => {
    const method = methods[Number(methodInput.value)];
    const stepCost = Number(costInput.value);
    const parallelism = Number(parallelInput.value);
    const wallHours = method.steps * stepCost / parallelism / 3600;
    const logSteps = Math.log10(method.steps);
    const stepScore = clamp((logSteps - 4) / 4);
    const wallScore = clamp(Math.log10(wallHours + 1) / 4);
    const pain = clamp(wallScore * (0.65 + 0.35 * stepCost));
    stepsBar.style.height = `${28 + stepScore * 150}px`;
    wallBar.style.height = `${28 + wallScore * 150}px`;
    painBar.style.height = `${28 + pain * 150}px`;
    stepsLabel.textContent = method.steps.toExponential(1);
    wallLabel.textContent = `${wallHours.toFixed(1)}h`;
    painLabel.textContent = pain.toFixed(2);
    stepsNode.textContent = method.steps.toLocaleString("en-US");
    wallNode.textContent = `${wallHours.toFixed(1)} h`;
    painNode.textContent = pain.toFixed(2);
    readout.textContent = `${method.name}: step cost=${stepCost.toFixed(3)}s, parallelism=${parallelism}. ${labels.note}`;
  };

  [methodInput, costInput, parallelInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLSupervisionSignalMixerLab(block) {
  const labels = currentLang === "zh"
    ? {
        demos: "demonstrations",
        language: "language",
        prefs: "preferences",
        prediction: "self-supervision",
        alignment: "objective clarity",
        burden: "label burden",
        autonomy: "autonomy",
        note:
          "Supervision 不一定等于 goal。Demos 告诉 agent 怎么做，preferences/language 更像告诉它要什么，self-supervision 给世界模型和 representation。"
      }
    : {
        demos: "demonstrations",
        language: "language",
        prefs: "preferences",
        prediction: "self-supervision",
        alignment: "objective clarity",
        burden: "label burden",
        autonomy: "autonomy",
        note:
          "Supervision is not always the goal. Demonstrations say how to act, preferences and language say what is wanted, and self-supervision builds world models and representations."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-supervision-widget" aria-label="RL supervision signal mixer">
        <div class="rl-supervision-grid">
          <span><b>${labels.demos}</b><em class="rl-supervision-demo-cell"></em></span>
          <span><b>${labels.language}</b><em class="rl-supervision-language-cell"></em></span>
          <span><b>${labels.prefs}</b><em class="rl-supervision-pref-cell"></em></span>
          <span><b>${labels.prediction}</b><em class="rl-supervision-pred-cell"></em></span>
        </div>
        <div class="rl-supervision-stats">
          <span><b>${labels.alignment}</b><em class="rl-supervision-alignment"></em></span>
          <span><b>${labels.burden}</b><em class="rl-supervision-burden"></em></span>
          <span><b>${labels.autonomy}</b><em class="rl-supervision-autonomy"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-supervision-readout"></p>
    `,
    `
      <label>
        <span>${labels.demos}</span>
        <input class="rl-supervision-demos-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.language}</span>
        <input class="rl-supervision-language-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.prefs}</span>
        <input class="rl-supervision-prefs-input" type="range" min="0" max="1" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.prediction}</span>
        <input class="rl-supervision-pred-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const demosInput = block.querySelector(".rl-supervision-demos-input");
  const languageInput = block.querySelector(".rl-supervision-language-input");
  const prefsInput = block.querySelector(".rl-supervision-prefs-input");
  const predInput = block.querySelector(".rl-supervision-pred-input");
  const cells = [
    block.querySelector(".rl-supervision-demo-cell"),
    block.querySelector(".rl-supervision-language-cell"),
    block.querySelector(".rl-supervision-pref-cell"),
    block.querySelector(".rl-supervision-pred-cell")
  ];
  const alignmentNode = block.querySelector(".rl-supervision-alignment");
  const burdenNode = block.querySelector(".rl-supervision-burden");
  const autonomyNode = block.querySelector(".rl-supervision-autonomy");
  const readout = block.querySelector(".rl-supervision-readout");

  const update = () => {
    const demos = Number(demosInput.value);
    const language = Number(languageInput.value);
    const prefs = Number(prefsInput.value);
    const prediction = Number(predInput.value);
    const values = [demos, language, prefs, prediction];
    const alignment = clamp(0.32 * prefs + 0.28 * language + 0.2 * demos + 0.2 * prediction);
    const burden = clamp(0.42 * prefs + 0.3 * demos + 0.2 * language + 0.08 * prediction);
    const autonomy = clamp(0.55 * prediction + 0.22 * language + 0.15 * prefs - 0.12 * demos + 0.2);
    cells.forEach((cell, index) => {
      cell.style.minHeight = `${24 + values[index] * 92}px`;
      cell.textContent = values[index].toFixed(2);
    });
    alignmentNode.textContent = alignment.toFixed(2);
    burdenNode.textContent = burden.toFixed(2);
    autonomyNode.textContent = autonomy.toFixed(2);
    readout.textContent = `r = alpha demos + beta prefs + gamma language + delta prediction. ${labels.note}`;
  };

  [demosInput, languageInput, prefsInput, predInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLRealWorldFormulationLab(block) {
  const labels = currentLang === "zh"
    ? {
        open: "openness",
        reset: "reset cost",
        prior: "prior data",
        optimize: "optimal control fit",
        survival: "survival need",
        adapt: "adaptation value",
        note:
          "Easy universe 偏 closed-world optimal control；hard universe 更像 open-world survival and adaptation。Real-world RL 常常需要先活下来，再慢慢变好。"
      }
    : {
        open: "openness",
        reset: "reset cost",
        prior: "prior data",
        optimize: "optimal control fit",
        survival: "survival need",
        adapt: "adaptation value",
        note:
          "An easy universe is closer to closed-world optimal control; a hard universe is open-world survival and adaptation. Real-world RL often must stay alive before getting better."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-realworld-widget" aria-label="RL real world formulation">
        <div class="rl-realworld-cards">
          <span><b>easy</b><em class="rl-realworld-easy">closed</em></span>
          <span><b>hard</b><em class="rl-realworld-hard">open</em></span>
          <span><b>data</b><em class="rl-realworld-data">prior</em></span>
        </div>
        <div class="rl-realworld-stats">
          <span><b>${labels.optimize}</b><em class="rl-realworld-optimize"></em></span>
          <span><b>${labels.survival}</b><em class="rl-realworld-survival"></em></span>
          <span><b>${labels.adapt}</b><em class="rl-realworld-adapt"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-realworld-readout"></p>
    `,
    `
      <label>
        <span>${labels.open}</span>
        <input class="rl-realworld-open-input" type="range" min="0" max="1" step="0.05" value="0.7">
      </label>
      <label>
        <span>${labels.reset}</span>
        <input class="rl-realworld-reset-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.prior}</span>
        <input class="rl-realworld-prior-input" type="range" min="0" max="1" step="0.05" value="0.5">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const openInput = block.querySelector(".rl-realworld-open-input");
  const resetInput = block.querySelector(".rl-realworld-reset-input");
  const priorInput = block.querySelector(".rl-realworld-prior-input");
  const cards = Array.from(block.querySelectorAll(".rl-realworld-cards span"));
  const optimizeNode = block.querySelector(".rl-realworld-optimize");
  const survivalNode = block.querySelector(".rl-realworld-survival");
  const adaptNode = block.querySelector(".rl-realworld-adapt");
  const readout = block.querySelector(".rl-realworld-readout");

  const update = () => {
    const openness = Number(openInput.value);
    const resetCost = Number(resetInput.value);
    const priorData = Number(priorInput.value);
    const optimalControlFit = clamp(1 - 0.55 * openness - 0.25 * resetCost + 0.2 * priorData);
    const survivalNeed = clamp(0.45 * openness + 0.45 * resetCost + 0.1 * (1 - priorData));
    const adaptationValue = clamp(0.35 * openness + 0.25 * resetCost + 0.4 * priorData);
    cards[0].classList.toggle("active-rl-realworld-card", optimalControlFit >= 0.55);
    cards[1].classList.toggle("active-rl-realworld-card", survivalNeed >= 0.5);
    cards[2].classList.toggle("active-rl-realworld-card", priorData >= 0.45);
    optimizeNode.textContent = optimalControlFit.toFixed(2);
    survivalNode.textContent = survivalNeed.toFixed(2);
    adaptNode.textContent = adaptationValue.toFixed(2);
    readout.textContent = `hardness=${(openness * resetCost).toFixed(2)}, prior data=${priorData.toFixed(2)}. ${labels.note}`;
  };

  [openInput, resetInput, priorInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountRLOfflineDataRecipeLab(block) {
  const labels = currentLang === "zh"
    ? {
        diversity: "data diversity",
        quality: "data quality",
        supervision: "task signal",
        conservative: "conservatism",
        coverage: "coverage",
        exploit: "false-value risk",
        downstream: "downstream gain",
        note:
          "Offline RL 的核心不是数据越多越好，而是 data support 覆盖 useful actions，同时 update 足够 conservative，不去相信 dataset 外的虚假高 Q。"
      }
    : {
        diversity: "data diversity",
        quality: "data quality",
        supervision: "task signal",
        conservative: "conservatism",
        coverage: "coverage",
        exploit: "false-value risk",
        downstream: "downstream gain",
        note:
          "Offline RL is not just more data. Useful actions must be covered by data support, and the update must be conservative enough not to trust false high Q-values outside the dataset."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rl-offline-recipe-widget" aria-label="RL offline data recipe">
        <div class="rl-offline-recipe-flow">
          <span><b>data</b><em class="rl-offline-recipe-data">D</em></span>
          <span><b>offline RL</b><em class="rl-offline-recipe-rl">CQL/IQL</em></span>
          <span><b>task</b><em class="rl-offline-recipe-task">r/g</em></span>
          <span><b>policy</b><em class="rl-offline-recipe-policy">pi</em></span>
        </div>
        <div class="rl-offline-recipe-stats">
          <span><b>${labels.coverage}</b><em class="rl-offline-recipe-coverage"></em></span>
          <span><b>${labels.exploit}</b><em class="rl-offline-recipe-risk"></em></span>
          <span><b>${labels.downstream}</b><em class="rl-offline-recipe-gain"></em></span>
        </div>
      </div>
      <p class="interactive-readout rl-offline-recipe-readout"></p>
    `,
    `
      <label>
        <span>${labels.diversity}</span>
        <input class="rl-offline-recipe-diversity-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.quality}</span>
        <input class="rl-offline-recipe-quality-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.supervision}</span>
        <input class="rl-offline-recipe-supervision-input" type="range" min="0" max="1" step="0.05" value="0.5">
      </label>
      <label>
        <span>${labels.conservative}</span>
        <input class="rl-offline-recipe-conservative-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const diversityInput = block.querySelector(".rl-offline-recipe-diversity-input");
  const qualityInput = block.querySelector(".rl-offline-recipe-quality-input");
  const supervisionInput = block.querySelector(".rl-offline-recipe-supervision-input");
  const conservativeInput = block.querySelector(".rl-offline-recipe-conservative-input");
  const flow = Array.from(block.querySelectorAll(".rl-offline-recipe-flow span"));
  const coverageNode = block.querySelector(".rl-offline-recipe-coverage");
  const riskNode = block.querySelector(".rl-offline-recipe-risk");
  const gainNode = block.querySelector(".rl-offline-recipe-gain");
  const readout = block.querySelector(".rl-offline-recipe-readout");

  const update = () => {
    const diversity = Number(diversityInput.value);
    const quality = Number(qualityInput.value);
    const supervision = Number(supervisionInput.value);
    const conservative = Number(conservativeInput.value);
    const coverage = clamp(0.65 * diversity + 0.35 * quality);
    const falseValueRisk = clamp((1 - coverage) * (1 - conservative) + 0.25 * (1 - quality));
    const downstreamGain = clamp(0.45 * coverage + 0.35 * supervision + 0.25 * conservative - 0.35 * falseValueRisk);
    flow[0].classList.toggle("active-rl-offline-recipe-step", diversity >= 0.45);
    flow[1].classList.toggle("active-rl-offline-recipe-step", conservative >= 0.45);
    flow[2].classList.toggle("active-rl-offline-recipe-step", supervision >= 0.4);
    flow[3].classList.toggle("weak-rl-offline-recipe-step", falseValueRisk > 0.45);
    coverageNode.textContent = coverage.toFixed(2);
    riskNode.textContent = falseValueRisk.toFixed(2);
    gainNode.textContent = downstreamGain.toFixed(2);
    readout.textContent = `D(rho_pi || rho_D) <= epsilon, gain=${downstreamGain.toFixed(2)}. ${labels.note}`;
  };

  [diversityInput, qualityInput, supervisionInput, conservativeInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940SGDNoiseLab(block) {
  const labels = currentLang === "zh"
    ? {
        lr: "learning rate",
        batch: "batch size",
        noise: "gradient noise",
        step: "step stability",
        variance: "gradient variance",
        progress: "expected progress",
        note:
          "SGD 的方向在期望上是对的，但单步会受 noise 影响。Batch 越大 variance 越小；learning rate 太大会把无偏方向放大成 divergence。"
      }
    : {
        lr: "learning rate",
        batch: "batch size",
        noise: "gradient noise",
        step: "step stability",
        variance: "gradient variance",
        progress: "expected progress",
        note:
          "SGD points in the right direction in expectation, but each step is noisy. Larger batches reduce variance; too much learning rate turns an unbiased direction into divergence."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-sgd-widget" aria-label="STAT940 SGD noise">
        <div class="stat940-sgd-bars">
          <span><b>${labels.step}</b><em class="stat940-sgd-step-bar"></em><small></small></span>
          <span><b>${labels.variance}</b><em class="stat940-sgd-var-bar"></em><small></small></span>
          <span><b>${labels.progress}</b><em class="stat940-sgd-progress-bar"></em><small></small></span>
        </div>
        <div class="stat940-sgd-stats">
          <span><b>${labels.step}</b><em class="stat940-sgd-step"></em></span>
          <span><b>${labels.variance}</b><em class="stat940-sgd-var"></em></span>
          <span><b>${labels.progress}</b><em class="stat940-sgd-progress"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-sgd-readout"></p>
    `,
    `
      <label>
        <span>${labels.lr}</span>
        <input class="stat940-sgd-lr-input" type="range" min="0.01" max="1" step="0.01" value="0.18">
      </label>
      <label>
        <span>${labels.batch}</span>
        <input class="stat940-sgd-batch-input" type="range" min="1" max="128" step="1" value="16">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="stat940-sgd-noise-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const lrInput = block.querySelector(".stat940-sgd-lr-input");
  const batchInput = block.querySelector(".stat940-sgd-batch-input");
  const noiseInput = block.querySelector(".stat940-sgd-noise-input");
  const stepBar = block.querySelector(".stat940-sgd-step-bar");
  const varBar = block.querySelector(".stat940-sgd-var-bar");
  const progressBar = block.querySelector(".stat940-sgd-progress-bar");
  const stepLabel = stepBar.nextElementSibling;
  const varLabel = varBar.nextElementSibling;
  const progressLabel = progressBar.nextElementSibling;
  const stepNode = block.querySelector(".stat940-sgd-step");
  const varNode = block.querySelector(".stat940-sgd-var");
  const progressNode = block.querySelector(".stat940-sgd-progress");
  const readout = block.querySelector(".stat940-sgd-readout");

  const update = () => {
    const lr = Number(lrInput.value);
    const batch = Number(batchInput.value);
    const noise = Number(noiseInput.value);
    const variance = noise / Math.sqrt(batch);
    const stability = clamp(1 - Math.max(0, lr - 0.35) * 1.8 - variance * 0.45);
    const progress = clamp((1 - Math.exp(-3 * lr)) * stability * (1 - 0.35 * variance));
    stepBar.style.height = `${28 + stability * 150}px`;
    varBar.style.height = `${28 + clamp(variance) * 150}px`;
    progressBar.style.height = `${28 + progress * 150}px`;
    stepLabel.textContent = stability.toFixed(2);
    varLabel.textContent = variance.toFixed(2);
    progressLabel.textContent = progress.toFixed(2);
    stepNode.textContent = stability.toFixed(2);
    varNode.textContent = variance.toFixed(2);
    progressNode.textContent = progress.toFixed(2);
    readout.textContent = `E[grad Q_i(w)] = grad Q(w), batch=${batch}, eta=${lr.toFixed(2)}. ${labels.note}`;
  };

  [lrInput, batchInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940MomentumValleyLab(block) {
  const labels = currentLang === "zh"
    ? {
        beta: "momentum beta",
        curvature: "curvature turn",
        noise: "gradient noise",
        smooth: "smoothing",
        speed: "valley speed",
        overshoot: "overshoot risk",
        note:
          "Momentum 是 gradients 的 memory。方向持续时它能加速，噪声大时它能平滑；但 valley 急转时，太大 beta 会 overshoot。"
      }
    : {
        beta: "momentum beta",
        curvature: "curvature turn",
        noise: "gradient noise",
        smooth: "smoothing",
        speed: "valley speed",
        overshoot: "overshoot risk",
        note:
          "Momentum is gradient memory. It accelerates when directions persist and smooths noise, but a large beta can overshoot when the valley turns sharply."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-momentum-widget" aria-label="STAT940 momentum">
        <div class="stat940-momentum-flow">
          <span><b>g_t</b><em>current</em></span>
          <span><b>v_t</b><em>memory</em></span>
          <span><b>w_t</b><em>step</em></span>
        </div>
        <div class="stat940-momentum-stats">
          <span><b>${labels.smooth}</b><em class="stat940-momentum-smooth"></em></span>
          <span><b>${labels.speed}</b><em class="stat940-momentum-speed"></em></span>
          <span><b>${labels.overshoot}</b><em class="stat940-momentum-risk"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-momentum-readout"></p>
    `,
    `
      <label>
        <span>${labels.beta}</span>
        <input class="stat940-momentum-beta-input" type="range" min="0" max="0.99" step="0.01" value="0.9">
      </label>
      <label>
        <span>${labels.curvature}</span>
        <input class="stat940-momentum-curvature-input" type="range" min="0" max="1" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="stat940-momentum-noise-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
    `
  );

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const betaInput = block.querySelector(".stat940-momentum-beta-input");
  const curvatureInput = block.querySelector(".stat940-momentum-curvature-input");
  const noiseInput = block.querySelector(".stat940-momentum-noise-input");
  const flow = Array.from(block.querySelectorAll(".stat940-momentum-flow span"));
  const smoothNode = block.querySelector(".stat940-momentum-smooth");
  const speedNode = block.querySelector(".stat940-momentum-speed");
  const riskNode = block.querySelector(".stat940-momentum-risk");
  const readout = block.querySelector(".stat940-momentum-readout");

  const update = () => {
    const beta = Number(betaInput.value);
    const curvature = Number(curvatureInput.value);
    const noise = Number(noiseInput.value);
    const smoothing = clamp(beta * noise + 0.2 * beta);
    const speed = clamp(beta * (1 - 0.45 * curvature) + 0.25 * (1 - noise));
    const overshoot = clamp(beta * curvature * 1.15 + 0.15 * beta - 0.15 * noise);
    flow[0].classList.toggle("active-stat940-momentum-step", noise < 0.5);
    flow[1].classList.toggle("active-stat940-momentum-step", beta > 0.35);
    flow[2].classList.toggle("weak-stat940-momentum-step", overshoot > 0.55);
    smoothNode.textContent = smoothing.toFixed(2);
    speedNode.textContent = speed.toFixed(2);
    riskNode.textContent = overshoot.toFixed(2);
    readout.textContent = `v_(t+1)=beta v_t+(1-beta) grad Q(w_t), beta=${beta.toFixed(2)}. ${labels.note}`;
  };

  [betaInput, curvatureInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940SURERiskLab(block) {
  const labels = currentLang === "zh"
    ? {
        empirical: "empirical error",
        noise: "noise sigma",
        sensitivity: "sensitivity sum",
        train: "training err",
        penalty: "SURE penalty",
        risk: "estimated Err",
        note:
          "Training error 会低估 true error；SURE 用 \\(-n sigma^2 + 2 sigma^2 sum D_i\\) 修正这个 optimism。"
      }
    : {
        empirical: "empirical error",
        noise: "noise sigma",
        sensitivity: "sensitivity sum",
        train: "training err",
        penalty: "SURE penalty",
        risk: "estimated Err",
        note:
          "Training error underestimates true error; SURE corrects the optimism with -n sigma^2 + 2 sigma^2 sum D_i."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-sure-widget" aria-label="STAT940 SURE risk">
        <div class="stat940-sure-bars">
          <span><b>${labels.train}</b><em class="stat940-sure-train-bar"></em><small></small></span>
          <span><b>${labels.penalty}</b><em class="stat940-sure-penalty-bar"></em><small></small></span>
          <span><b>${labels.risk}</b><em class="stat940-sure-risk-bar"></em><small></small></span>
        </div>
        <div class="stat940-sure-stats">
          <span><b>${labels.train}</b><em class="stat940-sure-train"></em></span>
          <span><b>${labels.penalty}</b><em class="stat940-sure-penalty"></em></span>
          <span><b>${labels.risk}</b><em class="stat940-sure-risk"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-sure-readout"></p>
    `,
    `
      <label>
        <span>${labels.empirical}</span>
        <input class="stat940-sure-empirical-input" type="range" min="0.05" max="2" step="0.05" value="0.55">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="stat940-sure-noise-input" type="range" min="0.05" max="1" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.sensitivity}</span>
        <input class="stat940-sure-sensitivity-input" type="range" min="0" max="20" step="1" value="8">
      </label>
    `
  );

  const empiricalInput = block.querySelector(".stat940-sure-empirical-input");
  const noiseInput = block.querySelector(".stat940-sure-noise-input");
  const sensitivityInput = block.querySelector(".stat940-sure-sensitivity-input");
  const trainBar = block.querySelector(".stat940-sure-train-bar");
  const penaltyBar = block.querySelector(".stat940-sure-penalty-bar");
  const riskBar = block.querySelector(".stat940-sure-risk-bar");
  const trainLabel = trainBar.nextElementSibling;
  const penaltyLabel = penaltyBar.nextElementSibling;
  const riskLabel = riskBar.nextElementSibling;
  const trainNode = block.querySelector(".stat940-sure-train");
  const penaltyNode = block.querySelector(".stat940-sure-penalty");
  const riskNode = block.querySelector(".stat940-sure-risk");
  const readout = block.querySelector(".stat940-sure-readout");

  const update = () => {
    const empirical = Number(empiricalInput.value);
    const sigma = Number(noiseInput.value);
    const sensitivity = Number(sensitivityInput.value);
    const n = 20;
    const correction = -n * sigma * sigma + 2 * sigma * sigma * sensitivity;
    const risk = Math.max(0, empirical + correction / n);
    const penaltyDisplay = Math.max(0, 2 * sigma * sigma * sensitivity / n);
    trainBar.style.height = `${28 + Math.min(1, empirical / 2) * 150}px`;
    penaltyBar.style.height = `${28 + Math.min(1, penaltyDisplay) * 150}px`;
    riskBar.style.height = `${28 + Math.min(1, risk / 2) * 150}px`;
    trainLabel.textContent = empirical.toFixed(2);
    penaltyLabel.textContent = penaltyDisplay.toFixed(2);
    riskLabel.textContent = risk.toFixed(2);
    trainNode.textContent = empirical.toFixed(2);
    penaltyNode.textContent = penaltyDisplay.toFixed(2);
    riskNode.textContent = risk.toFixed(2);
    readout.textContent = `Err = err - n sigma^2 + 2 sigma^2 sum D_i, n=${n}, sum D_i=${sensitivity}. ${labels.note}`;
  };

  [empiricalInput, noiseInput, sensitivityInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940ModelComplexityLab(block) {
  const labels = currentLang === "zh"
    ? {
        complexity: "model complexity",
        noise: "noise sigma",
        flexibility: "sensitivity",
        empirical: "empirical err",
        penalty: "complexity penalty",
        true: "true Err",
        note:
          "Complexity 增加时 training error 通常下降，但 sensitivity penalty 上升；SURE 的直觉就是两者相加形成 U-shape。"
      }
    : {
        complexity: "model complexity",
        noise: "noise sigma",
        flexibility: "sensitivity",
        empirical: "empirical err",
        penalty: "complexity penalty",
        true: "true Err",
        note:
          "As complexity rises, training error usually falls but the sensitivity penalty rises; SURE explains the U-shape by adding both effects."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-complexity-widget" aria-label="STAT940 model complexity">
        <div class="stat940-complexity-curve"></div>
        <div class="stat940-complexity-stats">
          <span><b>${labels.empirical}</b><em class="stat940-complexity-empirical"></em></span>
          <span><b>${labels.penalty}</b><em class="stat940-complexity-penalty"></em></span>
          <span><b>${labels.true}</b><em class="stat940-complexity-true"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-complexity-readout"></p>
    `,
    `
      <label>
        <span>${labels.complexity}</span>
        <input class="stat940-complexity-input" type="range" min="1" max="12" step="1" value="5">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="stat940-complexity-noise-input" type="range" min="0.05" max="1" step="0.05" value="0.35">
      </label>
      <label>
        <span>${labels.flexibility}</span>
        <input class="stat940-complexity-flex-input" type="range" min="0" max="1" step="0.05" value="0.65">
      </label>
    `
  );

  const complexityInput = block.querySelector(".stat940-complexity-input");
  const noiseInput = block.querySelector(".stat940-complexity-noise-input");
  const flexInput = block.querySelector(".stat940-complexity-flex-input");
  const curve = block.querySelector(".stat940-complexity-curve");
  const empiricalNode = block.querySelector(".stat940-complexity-empirical");
  const penaltyNode = block.querySelector(".stat940-complexity-penalty");
  const trueNode = block.querySelector(".stat940-complexity-true");
  const readout = block.querySelector(".stat940-complexity-readout");

  const update = () => {
    const complexity = Number(complexityInput.value);
    const sigma = Number(noiseInput.value);
    const flex = Number(flexInput.value);
    const empirical = Math.max(0.04, 1.35 * Math.exp(-0.27 * complexity));
    const penalty = 0.06 * sigma * sigma * complexity * (1 + 1.5 * flex);
    const trueRisk = empirical + penalty + 0.02 * Math.abs(complexity - 6);
    curve.innerHTML = Array.from({ length: 12 }, (_, index) => {
      const c = index + 1;
      const e = Math.max(0.04, 1.35 * Math.exp(-0.27 * c));
      const p = 0.06 * sigma * sigma * c * (1 + 1.5 * flex);
      const t = e + p + 0.02 * Math.abs(c - 6);
      const active = c === complexity;
      return `<span class="${active ? "active-stat940-complexity-cell" : ""}"><b>${c}</b><em style="height:${Math.min(120, 18 + t * 70)}px"></em></span>`;
    }).join("");
    empiricalNode.textContent = empirical.toFixed(2);
    penaltyNode.textContent = penalty.toFixed(2);
    trueNode.textContent = trueRisk.toFixed(2);
    readout.textContent = `Err(c) approx err(c)+penalty(c), c=${complexity}. ${labels.note}`;
  };

  [complexityInput, noiseInput, flexInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940WeightDecaySpectrumLab(block) {
  const labels = currentLang === "zh"
    ? {
        alpha: "weight decay alpha",
        spread: "spectrum spread",
        gamma: "effective params",
        weak: "weak direction",
        strong: "strong direction",
        note:
          "Weight decay 不只是把所有权重一起缩小；在 Hessian eigen-directions 中，第 i 个系数会乘上 lambda_i/(lambda_i+alpha)。小 eigenvalue 方向被压得最狠。"
      }
    : {
        alpha: "weight decay alpha",
        spread: "spectrum spread",
        gamma: "effective params",
        weak: "weak direction",
        strong: "strong direction",
        note:
          "Weight decay does not shrink every direction equally. In Hessian eigen-directions, component i is multiplied by lambda_i/(lambda_i+alpha), so small-eigenvalue directions are suppressed most."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-regularization-widget" aria-label="STAT940 weight decay spectrum">
        <div class="stat940-spectrum-bars"></div>
        <div class="stat940-regularization-stats">
          <span><b>${labels.gamma}</b><em class="stat940-spectrum-gamma"></em></span>
          <span><b>${labels.weak}</b><em class="stat940-spectrum-weak"></em></span>
          <span><b>${labels.strong}</b><em class="stat940-spectrum-strong"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-spectrum-readout"></p>
    `,
    `
      <label>
        <span>${labels.alpha}</span>
        <input class="stat940-spectrum-alpha-input" type="range" min="0.02" max="4" step="0.02" value="0.8">
      </label>
      <label>
        <span>${labels.spread}</span>
        <input class="stat940-spectrum-spread-input" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const alphaInput = block.querySelector(".stat940-spectrum-alpha-input");
  const spreadInput = block.querySelector(".stat940-spectrum-spread-input");
  const bars = block.querySelector(".stat940-spectrum-bars");
  const gammaNode = block.querySelector(".stat940-spectrum-gamma");
  const weakNode = block.querySelector(".stat940-spectrum-weak");
  const strongNode = block.querySelector(".stat940-spectrum-strong");
  const readout = block.querySelector(".stat940-spectrum-readout");

  const update = () => {
    const alpha = Number(alphaInput.value);
    const spread = Number(spreadInput.value);
    const lambdas = [0.08, 0.18, 0.42, 0.85, 1.6, 3.2].map((lambda, index) => lambda * (1 + spread * index * 0.42));
    const shrink = lambdas.map((lambda) => lambda / (lambda + alpha));
    const gamma = shrink.reduce((sum, value) => sum + value, 0);
    bars.innerHTML = lambdas.map((lambda, index) => {
      const value = shrink[index];
      return `<span class="${index < 2 ? "weak-stat940-reg-cell" : index > 3 ? "active-stat940-reg-cell" : ""}"><b>lambda ${index + 1}</b><em style="height:${28 + value * 148}px"></em><small>${value.toFixed(2)}</small></span>`;
    }).join("");
    gammaNode.textContent = gamma.toFixed(2);
    weakNode.textContent = shrink[0].toFixed(2);
    strongNode.textContent = shrink[shrink.length - 1].toFixed(2);
    readout.textContent = `Q^T w_tilde = (Lambda + alpha I)^(-1)Lambda Q^T w*, gamma=sum_i lambda_i/(lambda_i+alpha)=${gamma.toFixed(2)}. ${labels.note}`;
  };

  [alphaInput, spreadInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940NoiseJacobianLab(block) {
  const labels = currentLang === "zh"
    ? {
        variance: "input noise variance",
        slope: "Jacobian size",
        curvature: "curvature term",
        base: "base loss",
        penalty: "noise penalty",
        objective: "noisy objective",
        note:
          "对小输入噪声做 Taylor 展开后，额外项近似惩罚输出对输入的敏感度。线性模型里这个项会退化成 weight decay。"
      }
    : {
        variance: "input noise variance",
        slope: "Jacobian size",
        curvature: "curvature term",
        base: "base loss",
        penalty: "noise penalty",
        objective: "noisy objective",
        note:
          "A Taylor expansion under small input noise adds a penalty for output sensitivity to the input. For linear models, this reduces to weight decay."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-regularization-widget" aria-label="STAT940 input noise Jacobian">
        <div class="stat940-noise-bars">
          <span><b>${labels.base}</b><em class="stat940-noise-base-bar"></em><small></small></span>
          <span><b>${labels.penalty}</b><em class="stat940-noise-penalty-bar"></em><small></small></span>
          <span><b>${labels.objective}</b><em class="stat940-noise-objective-bar"></em><small></small></span>
        </div>
        <div class="stat940-regularization-stats">
          <span><b>${labels.base}</b><em class="stat940-noise-base"></em></span>
          <span><b>${labels.penalty}</b><em class="stat940-noise-penalty"></em></span>
          <span><b>${labels.objective}</b><em class="stat940-noise-objective"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-noise-readout"></p>
    `,
    `
      <label>
        <span>${labels.variance}</span>
        <input class="stat940-noise-var-input" type="range" min="0" max="1.2" step="0.02" value="0.35">
      </label>
      <label>
        <span>${labels.slope}</span>
        <input class="stat940-noise-slope-input" type="range" min="0.1" max="2.5" step="0.05" value="1.2">
      </label>
      <label>
        <span>${labels.curvature}</span>
        <input class="stat940-noise-curvature-input" type="range" min="0" max="1" step="0.05" value="0.25">
      </label>
    `
  );

  const varianceInput = block.querySelector(".stat940-noise-var-input");
  const slopeInput = block.querySelector(".stat940-noise-slope-input");
  const curvatureInput = block.querySelector(".stat940-noise-curvature-input");
  const baseBar = block.querySelector(".stat940-noise-base-bar");
  const penaltyBar = block.querySelector(".stat940-noise-penalty-bar");
  const objectiveBar = block.querySelector(".stat940-noise-objective-bar");
  const baseNode = block.querySelector(".stat940-noise-base");
  const penaltyNode = block.querySelector(".stat940-noise-penalty");
  const objectiveNode = block.querySelector(".stat940-noise-objective");
  const readout = block.querySelector(".stat940-noise-readout");

  const update = () => {
    const variance = Number(varianceInput.value);
    const slope = Number(slopeInput.value);
    const curvature = Number(curvatureInput.value);
    const base = 0.42 + 0.08 * curvature;
    const penalty = variance * (0.5 * slope * slope + 0.18 * curvature);
    const objective = base + penalty;
    [
      [baseBar, base],
      [penaltyBar, penalty],
      [objectiveBar, objective]
    ].forEach(([bar, value]) => {
      bar.style.height = `${28 + Math.min(1.8, value) * 82}px`;
      bar.nextElementSibling.textContent = value.toFixed(2);
    });
    baseNode.textContent = base.toFixed(2);
    penaltyNode.textContent = penalty.toFixed(2);
    objectiveNode.textContent = objective.toFixed(2);
    readout.textContent = `J_noise approx J + gamma E[(yhat-y) trace(H_x yhat)] + gamma E[||grad_x yhat||^2]. ${labels.note}`;
  };

  [varianceInput, slopeInput, curvatureInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940EarlyStoppingLab(block) {
  const labels = currentLang === "zh"
    ? {
        eta: "learning rate eta",
        tau: "training steps tau",
        curvature: "curvature scale",
        implicit: "implicit alpha",
        kept: "kept component",
        stopped: "stopped component",
        note:
          "在二次近似里，early stopping 会像方向依赖的 L2 正则化。训练步数 tau 越大，隐式 alpha 约等于 1/(tau eta) 越小。"
      }
    : {
        eta: "learning rate eta",
        tau: "training steps tau",
        curvature: "curvature scale",
        implicit: "implicit alpha",
        kept: "kept component",
        stopped: "stopped component",
        note:
          "Under a quadratic approximation, early stopping behaves like direction-dependent L2 regularization. More steps make the implicit alpha, about 1/(tau eta), smaller."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-regularization-widget" aria-label="STAT940 early stopping">
        <div class="stat940-early-flow">
          <span><b>w(0)</b><em>0</em></span>
          <span><b>w(tau)</b><em class="stat940-early-mid"></em></span>
          <span><b>w*</b><em>target</em></span>
        </div>
        <div class="stat940-regularization-stats">
          <span><b>${labels.implicit}</b><em class="stat940-early-alpha"></em></span>
          <span><b>${labels.kept}</b><em class="stat940-early-kept"></em></span>
          <span><b>${labels.stopped}</b><em class="stat940-early-stopped"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-early-readout"></p>
    `,
    `
      <label>
        <span>${labels.eta}</span>
        <input class="stat940-early-eta-input" type="range" min="0.01" max="0.45" step="0.01" value="0.12">
      </label>
      <label>
        <span>${labels.tau}</span>
        <input class="stat940-early-tau-input" type="range" min="1" max="80" step="1" value="18">
      </label>
      <label>
        <span>${labels.curvature}</span>
        <input class="stat940-early-curvature-input" type="range" min="0.1" max="2" step="0.05" value="0.9">
      </label>
    `
  );

  const etaInput = block.querySelector(".stat940-early-eta-input");
  const tauInput = block.querySelector(".stat940-early-tau-input");
  const curvatureInput = block.querySelector(".stat940-early-curvature-input");
  const alphaNode = block.querySelector(".stat940-early-alpha");
  const keptNode = block.querySelector(".stat940-early-kept");
  const stoppedNode = block.querySelector(".stat940-early-stopped");
  const midNode = block.querySelector(".stat940-early-mid");
  const readout = block.querySelector(".stat940-early-readout");

  const update = () => {
    const eta = Number(etaInput.value);
    const tau = Number(tauInput.value);
    const curvature = Number(curvatureInput.value);
    const alpha = 1 / Math.max(0.01, eta * tau);
    const strongLambda = 1.7 * curvature;
    const weakLambda = 0.16 * curvature;
    const kept = 1 - Math.pow(Math.max(0, 1 - eta * strongLambda), tau);
    const stopped = 1 - Math.pow(Math.max(0, 1 - eta * weakLambda), tau);
    alphaNode.textContent = alpha.toFixed(2);
    keptNode.textContent = kept.toFixed(2);
    stoppedNode.textContent = stopped.toFixed(2);
    midNode.textContent = `${Math.round(kept * 100)}%`;
    midNode.style.opacity = String(0.35 + Math.min(0.65, kept * 0.65));
    readout.textContent = `tau approx 1/(eta alpha), alpha approx ${(alpha).toFixed(2)}. ${labels.note}`;
  };

  [etaInput, tauInput, curvatureInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940BaggingCorrelationLab(block) {
  const labels = currentLang === "zh"
    ? {
        models: "ensemble size k",
        variance: "single-model variance",
        covariance: "error covariance",
        solo: "single model",
        avg: "bagged error",
        gain: "variance gain",
        note:
          "Bagging 降低方差的关键不是只增加模型数量，而是让模型误差不完全相关。协方差 c 越大，平均之后剩下的误差越多。"
      }
    : {
        models: "ensemble size k",
        variance: "single-model variance",
        covariance: "error covariance",
        solo: "single model",
        avg: "bagged error",
        gain: "variance gain",
        note:
          "Bagging reduces variance only when model errors are not perfectly correlated. Larger covariance c leaves more error after averaging."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-regularization-widget" aria-label="STAT940 bagging correlation">
        <div class="stat940-bagging-bars">
          <span><b>${labels.solo}</b><em class="stat940-bagging-solo-bar"></em><small></small></span>
          <span><b>${labels.avg}</b><em class="stat940-bagging-avg-bar"></em><small></small></span>
          <span><b>${labels.gain}</b><em class="stat940-bagging-gain-bar"></em><small></small></span>
        </div>
        <div class="stat940-regularization-stats">
          <span><b>${labels.solo}</b><em class="stat940-bagging-solo"></em></span>
          <span><b>${labels.avg}</b><em class="stat940-bagging-avg"></em></span>
          <span><b>${labels.gain}</b><em class="stat940-bagging-gain"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-bagging-readout"></p>
    `,
    `
      <label>
        <span>${labels.models}</span>
        <input class="stat940-bagging-k-input" type="range" min="1" max="40" step="1" value="12">
      </label>
      <label>
        <span>${labels.variance}</span>
        <input class="stat940-bagging-var-input" type="range" min="0.1" max="2" step="0.05" value="1">
      </label>
      <label>
        <span>${labels.covariance}</span>
        <input class="stat940-bagging-cov-input" type="range" min="0" max="1" step="0.02" value="0.25">
      </label>
    `
  );

  const kInput = block.querySelector(".stat940-bagging-k-input");
  const varInput = block.querySelector(".stat940-bagging-var-input");
  const covInput = block.querySelector(".stat940-bagging-cov-input");
  const soloBar = block.querySelector(".stat940-bagging-solo-bar");
  const avgBar = block.querySelector(".stat940-bagging-avg-bar");
  const gainBar = block.querySelector(".stat940-bagging-gain-bar");
  const soloNode = block.querySelector(".stat940-bagging-solo");
  const avgNode = block.querySelector(".stat940-bagging-avg");
  const gainNode = block.querySelector(".stat940-bagging-gain");
  const readout = block.querySelector(".stat940-bagging-readout");

  const update = () => {
    const k = Number(kInput.value);
    const variance = Number(varInput.value);
    const covariance = Number(covInput.value) * variance;
    const averageError = variance / k + ((k - 1) / k) * covariance;
    const gain = Math.max(0, variance - averageError);
    [
      [soloBar, variance],
      [avgBar, averageError],
      [gainBar, gain]
    ].forEach(([bar, value]) => {
      bar.style.height = `${28 + Math.min(1.8, value) * 82}px`;
      bar.nextElementSibling.textContent = value.toFixed(2);
    });
    soloNode.textContent = variance.toFixed(2);
    avgNode.textContent = averageError.toFixed(2);
    gainNode.textContent = gain.toFixed(2);
    readout.textContent = `E[(1/k sum_i epsilon_i)^2] = nu/k + ((k-1)/k)c, k=${k}. ${labels.note}`;
  };

  [kInput, varInput, covInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940DropoutMaskLab(block) {
  const labels = currentLang === "zh"
    ? {
        keep: "keep probability p",
        units: "hidden units",
        active: "expected active",
        thinned: "thinned nets",
        scale: "test scale",
        note:
          "Dropout 训练时随机删除 units，相当于从许多 thinned networks 中采样；测试时不用 mask，而是用 keep probability 缩放 outgoing weights 来近似 ensemble average。"
      }
    : {
        keep: "keep probability p",
        units: "hidden units",
        active: "expected active",
        thinned: "thinned nets",
        scale: "test scale",
        note:
          "Dropout randomly removes units during training, sampling many thinned networks. At test time the mask is removed and outgoing weights are scaled by the keep probability to approximate the ensemble average."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-lec5-widget" aria-label="STAT940 dropout mask">
        <div class="stat940-dropout-grid"></div>
        <div class="stat940-lec5-stats">
          <span><b>${labels.active}</b><em class="stat940-dropout-active"></em></span>
          <span><b>${labels.thinned}</b><em class="stat940-dropout-thinned"></em></span>
          <span><b>${labels.scale}</b><em class="stat940-dropout-scale"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-dropout-readout"></p>
    `,
    `
      <label>
        <span>${labels.keep}</span>
        <input class="stat940-dropout-keep-input" type="range" min="0.1" max="0.95" step="0.05" value="0.5">
      </label>
      <label>
        <span>${labels.units}</span>
        <input class="stat940-dropout-units-input" type="range" min="4" max="24" step="1" value="12">
      </label>
    `
  );

  const keepInput = block.querySelector(".stat940-dropout-keep-input");
  const unitsInput = block.querySelector(".stat940-dropout-units-input");
  const grid = block.querySelector(".stat940-dropout-grid");
  const activeNode = block.querySelector(".stat940-dropout-active");
  const thinnedNode = block.querySelector(".stat940-dropout-thinned");
  const scaleNode = block.querySelector(".stat940-dropout-scale");
  const readout = block.querySelector(".stat940-dropout-readout");

  const update = () => {
    const keep = Number(keepInput.value);
    const units = Number(unitsInput.value);
    const active = Math.round(keep * units);
    grid.innerHTML = Array.from({ length: units }, (_, index) => {
      const on = index < active;
      return `<span class="${on ? "active-stat940-lec5-node" : "dropped-stat940-lec5-node"}">${on ? "1" : "0"}</span>`;
    }).join("");
    activeNode.textContent = `${active}/${units}`;
    thinnedNode.textContent = `2^${units}`;
    scaleNode.textContent = keep.toFixed(2);
    readout.textContent = `r_j^(l) ~ Bernoulli(p), y_tilde^(l)=r^(l) o y^(l), p=${keep.toFixed(2)}. ${labels.note}`;
  };

  [keepInput, unitsInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940DropoutRidgeLab(block) {
  const labels = currentLang === "zh"
    ? {
        keep: "keep probability p",
        variance: "feature variance",
        weight: "weight size",
        mse: "fit term",
        penalty: "dropout penalty",
        objective: "objective",
        note:
          "Linear regression 中，对输入做 dropout 会得到 ridge-like penalty。Feature variance 越大、keep probability 越不稳定，那个方向上的 weight cost 越高。"
      }
    : {
        keep: "keep probability p",
        variance: "feature variance",
        weight: "weight size",
        mse: "fit term",
        penalty: "dropout penalty",
        objective: "objective",
        note:
          "For linear regression, input dropout induces a ridge-like penalty. Higher feature variance and less stable retention make the corresponding weight more expensive."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-lec5-widget" aria-label="STAT940 dropout ridge">
        <div class="stat940-lec5-bars">
          <span><b>${labels.mse}</b><em class="stat940-ridge-mse-bar"></em><small></small></span>
          <span><b>${labels.penalty}</b><em class="stat940-ridge-penalty-bar"></em><small></small></span>
          <span><b>${labels.objective}</b><em class="stat940-ridge-objective-bar"></em><small></small></span>
        </div>
        <div class="stat940-lec5-stats">
          <span><b>${labels.mse}</b><em class="stat940-ridge-mse"></em></span>
          <span><b>${labels.penalty}</b><em class="stat940-ridge-penalty"></em></span>
          <span><b>${labels.objective}</b><em class="stat940-ridge-objective"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-ridge-readout"></p>
    `,
    `
      <label>
        <span>${labels.keep}</span>
        <input class="stat940-ridge-keep-input" type="range" min="0.1" max="0.95" step="0.05" value="0.65">
      </label>
      <label>
        <span>${labels.variance}</span>
        <input class="stat940-ridge-var-input" type="range" min="0.2" max="2.5" step="0.05" value="1.2">
      </label>
      <label>
        <span>${labels.weight}</span>
        <input class="stat940-ridge-weight-input" type="range" min="0.1" max="2.5" step="0.05" value="1.0">
      </label>
    `
  );

  const keepInput = block.querySelector(".stat940-ridge-keep-input");
  const varInput = block.querySelector(".stat940-ridge-var-input");
  const weightInput = block.querySelector(".stat940-ridge-weight-input");
  const mseBar = block.querySelector(".stat940-ridge-mse-bar");
  const penaltyBar = block.querySelector(".stat940-ridge-penalty-bar");
  const objectiveBar = block.querySelector(".stat940-ridge-objective-bar");
  const mseNode = block.querySelector(".stat940-ridge-mse");
  const penaltyNode = block.querySelector(".stat940-ridge-penalty");
  const objectiveNode = block.querySelector(".stat940-ridge-objective");
  const readout = block.querySelector(".stat940-ridge-readout");

  const update = () => {
    const keep = Number(keepInput.value);
    const variance = Number(varInput.value);
    const weight = Number(weightInput.value);
    const mse = Math.max(0.05, Math.pow(1 - keep * weight * 0.42, 2));
    const penalty = keep * (1 - keep) * variance * weight * weight;
    const objective = mse + penalty;
    [
      [mseBar, mse],
      [penaltyBar, penalty],
      [objectiveBar, objective]
    ].forEach(([bar, value]) => {
      bar.style.height = `${28 + Math.min(2, value) * 76}px`;
      bar.nextElementSibling.textContent = value.toFixed(2);
    });
    mseNode.textContent = mse.toFixed(2);
    penaltyNode.textContent = penalty.toFixed(2);
    objectiveNode.textContent = objective.toFixed(2);
    readout.textContent = `J_drop(w) = ||y-pXw||^2 + p(1-p)||Gamma w||^2, p=${keep.toFixed(2)}. ${labels.note}`;
  };

  [keepInput, varInput, weightInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940BatchNormTransformLab(block) {
  const labels = currentLang === "zh"
    ? {
        mean: "batch mean",
        variance: "batch variance",
        gamma: "gamma scale",
        beta: "beta shift",
        before: "before",
        normalized: "normalized",
        shifted: "scale-shift",
        note:
          "BatchNorm 先用 mini-batch mean/variance 标准化 activation，再用 learned gamma 和 beta 把表示能力加回来；测试时换成 population statistics。"
      }
    : {
        mean: "batch mean",
        variance: "batch variance",
        gamma: "gamma scale",
        beta: "beta shift",
        before: "before",
        normalized: "normalized",
        shifted: "scale-shift",
        note:
          "BatchNorm normalizes activations with mini-batch mean and variance, then restores representational freedom with learned gamma and beta. Test time uses population statistics."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-lec5-widget" aria-label="STAT940 batch normalization transform">
        <div class="stat940-bn-flow">
          <span><b>${labels.before}</b><em class="stat940-bn-before"></em></span>
          <span><b>${labels.normalized}</b><em class="stat940-bn-normalized"></em></span>
          <span><b>${labels.shifted}</b><em class="stat940-bn-shifted"></em></span>
        </div>
        <div class="stat940-lec5-stats">
          <span><b>mu_B</b><em class="stat940-bn-mu"></em></span>
          <span><b>sigma_B</b><em class="stat940-bn-sigma"></em></span>
          <span><b>y</b><em class="stat940-bn-y"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-bn-readout"></p>
    `,
    `
      <label>
        <span>${labels.mean}</span>
        <input class="stat940-bn-mean-input" type="range" min="-3" max="3" step="0.1" value="1.2">
      </label>
      <label>
        <span>${labels.variance}</span>
        <input class="stat940-bn-var-input" type="range" min="0.2" max="4" step="0.1" value="1.6">
      </label>
      <label>
        <span>${labels.gamma}</span>
        <input class="stat940-bn-gamma-input" type="range" min="0.2" max="2.5" step="0.05" value="1.0">
      </label>
      <label>
        <span>${labels.beta}</span>
        <input class="stat940-bn-beta-input" type="range" min="-2" max="2" step="0.1" value="0">
      </label>
    `
  );

  const meanInput = block.querySelector(".stat940-bn-mean-input");
  const varInput = block.querySelector(".stat940-bn-var-input");
  const gammaInput = block.querySelector(".stat940-bn-gamma-input");
  const betaInput = block.querySelector(".stat940-bn-beta-input");
  const beforeNode = block.querySelector(".stat940-bn-before");
  const normalizedNode = block.querySelector(".stat940-bn-normalized");
  const shiftedNode = block.querySelector(".stat940-bn-shifted");
  const muNode = block.querySelector(".stat940-bn-mu");
  const sigmaNode = block.querySelector(".stat940-bn-sigma");
  const yNode = block.querySelector(".stat940-bn-y");
  const readout = block.querySelector(".stat940-bn-readout");

  const update = () => {
    const mean = Number(meanInput.value);
    const variance = Number(varInput.value);
    const gamma = Number(gammaInput.value);
    const beta = Number(betaInput.value);
    const x = mean + Math.sqrt(variance) * 0.75;
    const normalized = (x - mean) / Math.sqrt(variance + 0.001);
    const shifted = gamma * normalized + beta;
    beforeNode.textContent = x.toFixed(2);
    normalizedNode.textContent = normalized.toFixed(2);
    shiftedNode.textContent = shifted.toFixed(2);
    muNode.textContent = mean.toFixed(2);
    sigmaNode.textContent = Math.sqrt(variance).toFixed(2);
    yNode.textContent = shifted.toFixed(2);
    readout.textContent = `mu_B=1/m sum_i x_i, sigma_B^2=1/m sum_i(x_i-mu_B)^2, y=gamma x_hat+beta. ${labels.note}`;
  };

  [meanInput, varInput, gammaInput, betaInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940BatchNormSmoothnessLab(block) {
  const labels = currentLang === "zh"
    ? {
        lr: "learning rate",
        bn: "BN strength",
        noise: "covariate shift noise",
        loss: "loss variation",
        grad: "gradient predictiveness",
        accuracy: "training speed",
        note:
          "Revisited view: BatchNorm 不一定是靠修复 internal covariate shift；它的 reparameterization 让 loss 和 gradients 更平滑、更可预测，因此允许更大 step。"
      }
    : {
        lr: "learning rate",
        bn: "BN strength",
        noise: "covariate shift noise",
        loss: "loss variation",
        grad: "gradient predictiveness",
        accuracy: "training speed",
        note:
          "Revisited view: BatchNorm does not merely fix internal covariate shift. Its reparameterization makes the loss and gradients smoother and more predictive, allowing larger steps."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-lec5-widget" aria-label="STAT940 batch norm smoothness">
        <div class="stat940-lec5-bars">
          <span><b>${labels.loss}</b><em class="stat940-smooth-loss-bar"></em><small></small></span>
          <span><b>${labels.grad}</b><em class="stat940-smooth-grad-bar"></em><small></small></span>
          <span><b>${labels.accuracy}</b><em class="stat940-smooth-speed-bar"></em><small></small></span>
        </div>
        <div class="stat940-lec5-stats">
          <span><b>${labels.loss}</b><em class="stat940-smooth-loss"></em></span>
          <span><b>${labels.grad}</b><em class="stat940-smooth-grad"></em></span>
          <span><b>${labels.accuracy}</b><em class="stat940-smooth-speed"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-smooth-readout"></p>
    `,
    `
      <label>
        <span>${labels.lr}</span>
        <input class="stat940-smooth-lr-input" type="range" min="0.01" max="1" step="0.01" value="0.35">
      </label>
      <label>
        <span>${labels.bn}</span>
        <input class="stat940-smooth-bn-input" type="range" min="0" max="1" step="0.05" value="0.75">
      </label>
      <label>
        <span>${labels.noise}</span>
        <input class="stat940-smooth-noise-input" type="range" min="0" max="1" step="0.05" value="0.45">
      </label>
    `
  );

  const lrInput = block.querySelector(".stat940-smooth-lr-input");
  const bnInput = block.querySelector(".stat940-smooth-bn-input");
  const noiseInput = block.querySelector(".stat940-smooth-noise-input");
  const lossBar = block.querySelector(".stat940-smooth-loss-bar");
  const gradBar = block.querySelector(".stat940-smooth-grad-bar");
  const speedBar = block.querySelector(".stat940-smooth-speed-bar");
  const lossNode = block.querySelector(".stat940-smooth-loss");
  const gradNode = block.querySelector(".stat940-smooth-grad");
  const speedNode = block.querySelector(".stat940-smooth-speed");
  const readout = block.querySelector(".stat940-smooth-readout");

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const update = () => {
    const lr = Number(lrInput.value);
    const bn = Number(bnInput.value);
    const noise = Number(noiseInput.value);
    const lossVariation = clamp((1 - 0.65 * bn) * (0.35 + noise + 0.5 * lr));
    const gradPredict = clamp(0.2 + 0.72 * bn - 0.25 * noise + 0.12 * lr);
    const speed = clamp((0.25 + lr) * gradPredict * (1 - 0.45 * lossVariation));
    [
      [lossBar, lossVariation],
      [gradBar, gradPredict],
      [speedBar, speed]
    ].forEach(([bar, value]) => {
      bar.style.height = `${28 + value * 150}px`;
      bar.nextElementSibling.textContent = value.toFixed(2);
    });
    lossNode.textContent = lossVariation.toFixed(2);
    gradNode.textContent = gradPredict.toFixed(2);
    speedNode.textContent = speed.toFixed(2);
    readout.textContent = `L(x+eta grad L(x)) and ||grad L(x)-grad L(x+eta grad L(x))|| are smoother when BN is strong. ${labels.note}`;
  };

  [lrInput, bnInput, noiseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940CNNConvolutionWindowLab(block) {
  const labels = currentLang === "zh"
    ? {
        row: "window row",
        col: "window col",
        mode: "kernel mode",
        sum: "window sum",
        center: "center",
        response: "response",
        note:
          "卷积层不是每个 output 都看完整 input，而是让一个小 kernel 在图像上滑动。许多库实际算的是 cross-correlation，但接口仍叫 convolution。"
      }
    : {
        row: "window row",
        col: "window col",
        mode: "kernel mode",
        sum: "window sum",
        center: "center",
        response: "response",
        note:
          "A convolutional layer does not connect each output to the whole input. A small kernel slides across the image. Many libraries compute cross-correlation while exposing it as convolution."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-cnn-widget" aria-label="STAT940 convolution window">
        <div class="stat940-cnn-grid stat940-cnn-image-grid"></div>
        <div class="stat940-cnn-grid stat940-cnn-output-grid"></div>
        <div class="stat940-cnn-stats">
          <span><b>${labels.sum}</b><em class="stat940-cnn-window-sum"></em></span>
          <span><b>${labels.center}</b><em class="stat940-cnn-window-center"></em></span>
          <span><b>${labels.response}</b><em class="stat940-cnn-response"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-cnn-conv-readout"></p>
    `,
    `
      <label>
        <span>${labels.row}</span>
        <input class="stat940-cnn-row-input" type="range" min="0" max="2" step="1" value="0">
      </label>
      <label>
        <span>${labels.col}</span>
        <input class="stat940-cnn-col-input" type="range" min="0" max="2" step="1" value="0">
      </label>
      <label>
        <span>${labels.mode}</span>
        <input class="stat940-cnn-mode-input" type="range" min="0" max="1" step="1" value="0">
      </label>
    `
  );

  const image = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0]
  ];
  const kernels = [
    [[1, 0, 1], [0, 1, 0], [1, 0, 1]],
    [[0, 1, 0], [1, 1, 1], [0, 1, 0]]
  ];
  const rowInput = block.querySelector(".stat940-cnn-row-input");
  const colInput = block.querySelector(".stat940-cnn-col-input");
  const modeInput = block.querySelector(".stat940-cnn-mode-input");
  const imageGrid = block.querySelector(".stat940-cnn-image-grid");
  const outputGrid = block.querySelector(".stat940-cnn-output-grid");
  const sumNode = block.querySelector(".stat940-cnn-window-sum");
  const centerNode = block.querySelector(".stat940-cnn-window-center");
  const responseNode = block.querySelector(".stat940-cnn-response");
  const readout = block.querySelector(".stat940-cnn-conv-readout");

  const compute = (r, c, kernel) => {
    let value = 0;
    let active = 0;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        active += image[r + i][c + j];
        value += image[r + i][c + j] * kernel[i][j];
      }
    }
    return { value, active };
  };

  const update = () => {
    const r = Number(rowInput.value);
    const c = Number(colInput.value);
    const kernel = kernels[Number(modeInput.value)];
    imageGrid.innerHTML = image.flatMap((line, i) => line.map((value, j) => {
      const selected = i >= r && i < r + 3 && j >= c && j < c + 3;
      return `<span class="${selected ? "active-stat940-cnn-cell" : ""}">${value}</span>`;
    })).join("");
    outputGrid.innerHTML = Array.from({ length: 9 }, (_, index) => {
      const rr = Math.floor(index / 3);
      const cc = index % 3;
      const output = compute(rr, cc, kernel).value;
      return `<span class="${rr === r && cc === c ? "active-stat940-cnn-cell" : ""}">${output}</span>`;
    }).join("");
    const result = compute(r, c, kernel);
    sumNode.textContent = result.active.toFixed(0);
    centerNode.textContent = image[r + 1][c + 1].toFixed(0);
    responseNode.textContent = result.value.toFixed(0);
    readout.textContent = `s[i,j]=sum_m sum_n I[i+m,j+n]K[m,n], i=${r}, j=${c}. ${labels.note}`;
  };

  [rowInput, colInput, modeInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940CNNSparseSharingLab(block) {
  const labels = currentLang === "zh"
    ? {
        input: "input width",
        kernel: "kernel size",
        filters: "filters",
        dense: "dense params",
        conv: "conv params",
        saving: "parameter saving",
        note:
          "Sparse interactions 降低每个 output 的连接数；parameter sharing 让同一个 kernel 在所有位置复用。因此 CNN 的参数量随 kernel/filter 数增长，而不是随所有 input-output pairs 增长。"
      }
    : {
        input: "input width",
        kernel: "kernel size",
        filters: "filters",
        dense: "dense params",
        conv: "conv params",
        saving: "parameter saving",
        note:
          "Sparse interactions reduce how many inputs each output sees; parameter sharing reuses one kernel at every location. CNN parameters scale with kernel and filter counts, not all input-output pairs."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-cnn-widget" aria-label="STAT940 sparse sharing">
        <div class="stat940-cnn-bars">
          <span><b>${labels.dense}</b><em class="stat940-cnn-dense-bar"></em><small></small></span>
          <span><b>${labels.conv}</b><em class="stat940-cnn-conv-bar"></em><small></small></span>
          <span><b>${labels.saving}</b><em class="stat940-cnn-saving-bar"></em><small></small></span>
        </div>
        <div class="stat940-cnn-stats">
          <span><b>${labels.dense}</b><em class="stat940-cnn-dense"></em></span>
          <span><b>${labels.conv}</b><em class="stat940-cnn-conv"></em></span>
          <span><b>${labels.saving}</b><em class="stat940-cnn-saving"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-cnn-sharing-readout"></p>
    `,
    `
      <label>
        <span>${labels.input}</span>
        <input class="stat940-cnn-input-size" type="range" min="8" max="64" step="2" value="28">
      </label>
      <label>
        <span>${labels.kernel}</span>
        <input class="stat940-cnn-kernel-size" type="range" min="1" max="9" step="2" value="3">
      </label>
      <label>
        <span>${labels.filters}</span>
        <input class="stat940-cnn-filter-count" type="range" min="1" max="64" step="1" value="16">
      </label>
    `
  );

  const inputSize = block.querySelector(".stat940-cnn-input-size");
  const kernelSize = block.querySelector(".stat940-cnn-kernel-size");
  const filterCount = block.querySelector(".stat940-cnn-filter-count");
  const denseBar = block.querySelector(".stat940-cnn-dense-bar");
  const convBar = block.querySelector(".stat940-cnn-conv-bar");
  const savingBar = block.querySelector(".stat940-cnn-saving-bar");
  const denseNode = block.querySelector(".stat940-cnn-dense");
  const convNode = block.querySelector(".stat940-cnn-conv");
  const savingNode = block.querySelector(".stat940-cnn-saving");
  const readout = block.querySelector(".stat940-cnn-sharing-readout");

  const update = () => {
    const width = Number(inputSize.value);
    const kernel = Number(kernelSize.value);
    const filters = Number(filterCount.value);
    const dense = width * width * width * width;
    const conv = kernel * kernel * filters;
    const saving = Math.max(1, dense / conv);
    const scale = Math.log10(dense);
    [
      [denseBar, Math.log10(dense) / scale],
      [convBar, Math.log10(conv) / scale],
      [savingBar, Math.min(1, Math.log10(saving) / scale)]
    ].forEach(([bar, value]) => {
      bar.style.height = `${28 + value * 150}px`;
      bar.nextElementSibling.textContent = value.toFixed(2);
    });
    denseNode.textContent = dense.toLocaleString("en-US");
    convNode.textContent = conv.toLocaleString("en-US");
    savingNode.textContent = `${saving.toFixed(1)}x`;
    readout.textContent = `dense ~ m*n, local sparse ~ k*n, shared conv ~ k^2*filters = ${conv}. ${labels.note}`;
  };

  [inputSize, kernelSize, filterCount].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940CNNPoolingInvarianceLab(block) {
  const labels = currentLang === "zh"
    ? {
        shift: "input shift",
        width: "pool width",
        stride: "stride",
        retained: "retained peak",
        cells: "output cells",
        invariance: "invariance",
        note:
          "Pooling with downsampling 会降低表示大小，并让小的 translation 不容易改变高层表示；代价是精确位置信息变少。"
      }
    : {
        shift: "input shift",
        width: "pool width",
        stride: "stride",
        retained: "retained peak",
        cells: "output cells",
        invariance: "invariance",
        note:
          "Pooling with downsampling reduces representation size and makes small translations less likely to change higher-level features. The tradeoff is less exact location information."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-cnn-widget" aria-label="STAT940 pooling invariance">
        <div class="stat940-pooling-row"></div>
        <div class="stat940-cnn-stats">
          <span><b>${labels.retained}</b><em class="stat940-pooling-retained"></em></span>
          <span><b>${labels.cells}</b><em class="stat940-pooling-cells"></em></span>
          <span><b>${labels.invariance}</b><em class="stat940-pooling-invariance"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-pooling-readout"></p>
    `,
    `
      <label>
        <span>${labels.shift}</span>
        <input class="stat940-pooling-shift" type="range" min="0" max="4" step="1" value="1">
      </label>
      <label>
        <span>${labels.width}</span>
        <input class="stat940-pooling-width" type="range" min="2" max="5" step="1" value="3">
      </label>
      <label>
        <span>${labels.stride}</span>
        <input class="stat940-pooling-stride" type="range" min="1" max="4" step="1" value="2">
      </label>
    `
  );

  const shiftInput = block.querySelector(".stat940-pooling-shift");
  const widthInput = block.querySelector(".stat940-pooling-width");
  const strideInput = block.querySelector(".stat940-pooling-stride");
  const row = block.querySelector(".stat940-pooling-row");
  const retainedNode = block.querySelector(".stat940-pooling-retained");
  const cellsNode = block.querySelector(".stat940-pooling-cells");
  const invarianceNode = block.querySelector(".stat940-pooling-invariance");
  const readout = block.querySelector(".stat940-pooling-readout");

  const update = () => {
    const shift = Number(shiftInput.value);
    const width = Number(widthInput.value);
    const stride = Number(strideInput.value);
    const signal = Array.from({ length: 12 }, (_, index) => (index === 4 + shift ? 1 : index === 5 + shift ? 0.7 : 0.1));
    const pooled = [];
    for (let start = 0; start <= signal.length - width; start += stride) {
      pooled.push(Math.max(...signal.slice(start, start + width)));
    }
    const retained = Math.max(...pooled);
    const invariance = Math.min(1, width / Math.max(1, stride + shift));
    row.innerHTML = signal.map((value) => `<span class="${value > 0.5 ? "active-stat940-cnn-cell" : ""}" style="height:${28 + value * 72}px">${value.toFixed(1)}</span>`).join("");
    retainedNode.textContent = retained.toFixed(1);
    cellsNode.textContent = pooled.length.toFixed(0);
    invarianceNode.textContent = invariance.toFixed(2);
    readout.textContent = `max-pool width=${width}, stride=${stride}, outputs=${pooled.length}. ${labels.note}`;
  };

  [shiftInput, widthInput, strideInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountSTAT940CNNSkipConnectivityLab(block) {
  const labels = currentLang === "zh"
    ? {
        depth: "network depth",
        skip: "skip strength",
        dense: "dense reuse",
        residual: "residual flow",
        denseStat: "dense feature paths",
        plain: "plain path risk",
        note:
          "ResNet 用 identity skip 让梯度有短路径；DenseNet 让后层直接接收前面所有 feature maps。两者都在处理深层网络的信息和梯度流动问题。"
      }
    : {
        depth: "network depth",
        skip: "skip strength",
        dense: "dense reuse",
        residual: "residual flow",
        denseStat: "dense feature paths",
        plain: "plain path risk",
        note:
          "ResNet gives gradients short identity paths. DenseNet lets later layers directly receive all earlier feature maps. Both address information and gradient flow in deep CNNs."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stat940-cnn-widget" aria-label="STAT940 skip connectivity">
        <div class="stat940-cnn-flow"></div>
        <div class="stat940-cnn-stats">
          <span><b>${labels.residual}</b><em class="stat940-skip-residual"></em></span>
          <span><b>${labels.denseStat}</b><em class="stat940-skip-dense"></em></span>
          <span><b>${labels.plain}</b><em class="stat940-skip-plain"></em></span>
        </div>
      </div>
      <p class="interactive-readout stat940-skip-readout"></p>
    `,
    `
      <label>
        <span>${labels.depth}</span>
        <input class="stat940-skip-depth" type="range" min="3" max="24" step="1" value="10">
      </label>
      <label>
        <span>${labels.skip}</span>
        <input class="stat940-skip-strength" type="range" min="0" max="1" step="0.05" value="0.75">
      </label>
      <label>
        <span>${labels.dense}</span>
        <input class="stat940-skip-dense-reuse" type="range" min="0" max="1" step="0.05" value="0.55">
      </label>
    `
  );

  const depthInput = block.querySelector(".stat940-skip-depth");
  const skipInput = block.querySelector(".stat940-skip-strength");
  const denseInput = block.querySelector(".stat940-skip-dense-reuse");
  const flow = block.querySelector(".stat940-cnn-flow");
  const residualNode = block.querySelector(".stat940-skip-residual");
  const denseNode = block.querySelector(".stat940-skip-dense");
  const plainNode = block.querySelector(".stat940-skip-plain");
  const readout = block.querySelector(".stat940-skip-readout");

  const update = () => {
    const depth = Number(depthInput.value);
    const skip = Number(skipInput.value);
    const dense = Number(denseInput.value);
    const plainRisk = Math.min(1, depth / 24 * (1 - 0.55 * skip));
    const residualFlow = Math.min(1, 0.25 + skip * 0.68 + 0.1 * Math.log(depth));
    const densePaths = Math.round(depth * (1 + dense * (depth - 1) / 2));
    flow.innerHTML = Array.from({ length: Math.min(depth, 12) }, (_, index) => {
      const active = index === 0 || index === Math.min(depth, 12) - 1 || index % 3 === 0;
      return `<span class="${active ? "active-stat940-cnn-cell" : ""}">${index + 1}</span>`;
    }).join("");
    residualNode.textContent = residualFlow.toFixed(2);
    denseNode.textContent = densePaths.toLocaleString("en-US");
    plainNode.textContent = plainRisk.toFixed(2);
    readout.textContent = `ResNet block: y=x+F(x). DenseNet: x_l=H_l([x_0,...,x_{l-1}]). ${labels.note}`;
  };

  [depthInput, skipInput, denseInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountCongestionPotentialProof(block) {
  const labels = currentLang === "zh"
    ? {
        player: "player 1 route",
        before: "before",
        after: "after",
        cost: "player cost",
        potential: "potential",
        note: "Rosenthal proof idea: only resources entered or left can change the player's cost and the potential."
      }
    : {
        player: "player 1 route",
        before: "before",
        after: "after",
        cost: "player cost",
        potential: "potential",
        note: "Rosenthal proof idea: only resources entered or left can change the player's cost and the potential."
      };

  setInteractiveHTML(
    block,
    `
      <div class="congestion-proof-widget" aria-label="Congestion game potential proof">
        <div class="route-column">
          <strong>${labels.before}</strong>
          <span class="route-before"></span>
        </div>
        <div class="resource-loads"></div>
        <div class="route-column">
          <strong>${labels.after}</strong>
          <span class="route-after"></span>
        </div>
      </div>
      <p class="interactive-readout congestion-proof-readout"></p>
    `,
    `
      <label>
        <span>${labels.player}</span>
        <input class="congestion-route-input" type="range" min="0" max="1" value="0">
      </label>
    `
  );

  const routes = [
    { name: "upper", resources: ["road", "bridge"], other: ["road", "tunnel"] },
    { name: "lower", resources: ["tunnel", "exit"], other: ["road", "tunnel"] }
  ];
  const resourceCost = {
    road: (load) => load,
    bridge: (load) => 2 + load,
    tunnel: (load) => 1 + 2 * load,
    exit: (load) => 2
  };
  const resources = Object.keys(resourceCost);
  const input = block.querySelector(".congestion-route-input");
  const before = block.querySelector(".route-before");
  const after = block.querySelector(".route-after");
  const loads = block.querySelector(".resource-loads");
  const readout = block.querySelector(".congestion-proof-readout");

  const summarize = (routeIndex) => {
    const route = routes[routeIndex];
    const counts = Object.fromEntries(resources.map((resource) => [resource, 0]));
    route.resources.forEach((resource) => counts[resource] += 1);
    route.other.forEach((resource) => counts[resource] += 1);
    const cost = route.resources.reduce((sum, resource) => sum + resourceCost[resource](counts[resource]), 0);
    const potential = resources.reduce((sum, resource) => {
      let total = 0;
      for (let k = 1; k <= counts[resource]; k += 1) {
        total += resourceCost[resource](k);
      }
      return sum + total;
    }, 0);
    return { route, counts, cost, potential };
  };

  const update = () => {
    const routeIndex = Number(input.value);
    const beforeState = summarize(0);
    const afterState = summarize(routeIndex);
    before.textContent = `${beforeState.route.name}: ${beforeState.route.resources.join(" + ")}`;
    after.textContent = `${afterState.route.name}: ${afterState.route.resources.join(" + ")}`;
    loads.innerHTML = resources.map((resource) => {
      const count = afterState.counts[resource];
      const changed = beforeState.counts[resource] !== count;
      return `<span class="${changed ? "changed-resource" : ""}"><b>${resource}</b><em>n=${count}, d(n)=${resourceCost[resource](Math.max(1, count))}</em></span>`;
    }).join("");
    const deltaCost = afterState.cost - beforeState.cost;
    const deltaPotential = afterState.potential - beforeState.potential;
    readout.textContent = `${labels.cost}: ${beforeState.cost} -> ${afterState.cost}, Delta=${deltaCost}; ${labels.potential}: ${beforeState.potential} -> ${afterState.potential}, Delta=${deltaPotential}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountAGTMaxCutPLS(block) {
  const labels = currentLang === "zh"
    ? {
        side: "所属集合",
        left: "Left",
        right: "Right",
        cut: "cut weight",
        potential: "Rosenthal potential",
        local: "local optimum",
        better: "best one-vertex flip",
        yes: "yes",
        no: "no",
        note:
          "在 lecture 5 的 reduction 中，cut weight 越大，构造出来的 congestion-game potential 越小。单点翻转没有改进时就是 PLS 的局部最优。"
      }
    : {
        side: "vertex side",
        left: "Left",
        right: "Right",
        cut: "cut weight",
        potential: "Rosenthal potential",
        local: "local optimum",
        better: "best one-vertex flip",
        yes: "yes",
        no: "no",
        note:
          "In the lecture 5 reduction, a larger cut weight means a smaller constructed congestion-game potential. If no single vertex flip improves the cut, the state is a PLS local optimum."
      };

  setInteractiveHTML(
    block,
    `
      <div class="agt-maxcut-widget" aria-label="Max-Cut local search and PLS reduction">
        <svg class="interactive-svg agt-maxcut-svg" viewBox="0 0 640 340" aria-label="Weighted four-vertex Max-Cut graph">
          <g class="agt-maxcut-edges"></g>
          <g class="agt-maxcut-edge-labels"></g>
          <g class="agt-maxcut-nodes"></g>
        </svg>
        <div class="agt-maxcut-stats">
          <span><b>${labels.cut}</b><em class="agt-cut-value"></em></span>
          <span><b>${labels.potential}</b><em class="agt-potential-value"></em></span>
          <span><b>${labels.local}</b><em class="agt-local-value"></em></span>
        </div>
      </div>
      <p class="interactive-readout agt-maxcut-readout"></p>
    `,
    `
      <label>
        <span>v1 ${labels.side}</span>
        <input class="agt-node-toggle" data-node="0" type="checkbox">
      </label>
      <label>
        <span>v2 ${labels.side}</span>
        <input class="agt-node-toggle" data-node="1" type="checkbox" checked>
      </label>
      <label>
        <span>v3 ${labels.side}</span>
        <input class="agt-node-toggle" data-node="2" type="checkbox" checked>
      </label>
      <label>
        <span>v4 ${labels.side}</span>
        <input class="agt-node-toggle" data-node="3" type="checkbox">
      </label>
    `
  );

  const positions = [
    [180, 82],
    [460, 82],
    [460, 238],
    [180, 238]
  ];
  const edges = [
    [0, 1, 1],
    [1, 2, 2],
    [2, 3, 3],
    [3, 0, 4],
    [0, 2, 5],
    [3, 1, 6]
  ];
  const totalWeight = edges.reduce((sum, edge) => sum + edge[2], 0);
  const toggles = Array.from(block.querySelectorAll(".agt-node-toggle"));
  const edgeLayer = block.querySelector(".agt-maxcut-edges");
  const edgeLabels = block.querySelector(".agt-maxcut-edge-labels");
  const nodeLayer = block.querySelector(".agt-maxcut-nodes");
  const cutNode = block.querySelector(".agt-cut-value");
  const potentialNode = block.querySelector(".agt-potential-value");
  const localNode = block.querySelector(".agt-local-value");
  const readout = block.querySelector(".agt-maxcut-readout");

  const state = () => toggles.map((toggle) => (toggle.checked ? 1 : 0));
  const cutWeight = (sides) => edges.reduce((sum, [a, b, weight]) => sum + (sides[a] !== sides[b] ? weight : 0), 0);
  const bestFlip = (sides) => {
    const current = cutWeight(sides);
    return sides
      .map((_, index) => {
        const next = [...sides];
        next[index] = 1 - next[index];
        return { index, gain: cutWeight(next) - current };
      })
      .sort((a, b) => b.gain - a.gain)[0];
  };

  const update = () => {
    const sides = state();
    const cut = cutWeight(sides);
    const potential = totalWeight - cut;
    const flip = bestFlip(sides);
    const isLocal = flip.gain <= 0;

    edgeLayer.innerHTML = edges.map(([a, b, weight], index) => {
      const [x1, y1] = positions[a];
      const [x2, y2] = positions[b];
      const crossing = sides[a] !== sides[b];
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${crossing ? "agt-cross-edge" : "agt-internal-edge"}" stroke-width="${2 + weight * 0.7}" data-edge="${index}"></line>`;
    }).join("");
    edgeLabels.innerHTML = edges.map(([a, b, weight]) => {
      const [x1, y1] = positions[a];
      const [x2, y2] = positions[b];
      return `<text x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 8}" class="svg-label">w=${weight}</text>`;
    }).join("");
    nodeLayer.innerHTML = positions.map(([x, y], index) => `
      <g class="agt-node ${sides[index] ? "agt-right-node" : "agt-left-node"}">
        <circle cx="${x}" cy="${y}" r="28"></circle>
        <text x="${x}" y="${y + 5}">v${index + 1}</text>
      </g>
    `).join("");
    cutNode.textContent = cut;
    potentialNode.textContent = `${totalWeight} - ${cut} = ${potential}`;
    localNode.textContent = isLocal ? labels.yes : labels.no;
    readout.textContent = `${labels.better}: v${flip.index + 1}, gain ${flip.gain > 0 ? "+" : ""}${flip.gain}. ${labels.note}`;
  };

  toggles.forEach((toggle) => toggle.addEventListener("change", update));
  update();
}

function mountOnlineSoftmaxBlocks(block) {
  const labels = currentLang === "zh"
    ? {
        blocks: "blocks read",
        max: "running max",
        denom: "running denominator",
        output: "softmax on seen logits",
        note: "Each new block rescales the old denominator so local block work matches the global softmax."
      }
    : {
        blocks: "blocks read",
        max: "running max",
        denom: "running denominator",
        output: "softmax on seen logits",
        note: "Each new block rescales the old denominator so local block work matches the global softmax."
      };

  setInteractiveHTML(
    block,
    `
      <div class="online-softmax-widget" aria-label="Online softmax blocks">
        <div class="softmax-blocks"></div>
        <div class="softmax-stats">
          <strong class="softmax-max"></strong>
          <span class="softmax-denom"></span>
        </div>
      </div>
      <p class="interactive-readout online-softmax-readout"></p>
    `,
    `
      <label>
        <span>${labels.blocks}</span>
        <input class="softmax-block-input" type="range" min="1" max="4" value="2">
      </label>
    `
  );

  const logits = [[2, 1], [4, -1], [3, 0], [5, 2]];
  const input = block.querySelector(".softmax-block-input");
  const blocks = block.querySelector(".softmax-blocks");
  const maxNode = block.querySelector(".softmax-max");
  const denomNode = block.querySelector(".softmax-denom");
  const readout = block.querySelector(".online-softmax-readout");

  const update = () => {
    const count = Number(input.value);
    const seen = logits.slice(0, count).flat();
    const maxValue = Math.max(...seen);
    const denom = seen.reduce((sum, value) => sum + Math.exp(value - maxValue), 0);
    const probs = seen.map((value) => Math.exp(value - maxValue) / denom);
    blocks.innerHTML = logits.map((block, index) => {
      const active = index < count;
      return `<span class="${active ? "active-softmax-block" : ""}"><b>B${index + 1}</b><em>${block.join(", ")}</em></span>`;
    }).join("");
    maxNode.textContent = `${labels.max}: ${maxValue}`;
    denomNode.textContent = `${labels.denom}: ${denom.toFixed(3)}`;
    readout.textContent = `${labels.output}: [${probs.map((value) => value.toFixed(2)).join(", ")}]. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountMarkovTransition(block) {
  const labels = currentLang === "zh"
    ? {
        steps: "steps",
        distribution: "distribution",
        note: "The next distribution is the current row vector multiplied by the transition matrix."
      }
    : {
        steps: "steps",
        distribution: "distribution",
        note: "The next distribution is the current row vector multiplied by the transition matrix."
      };

  setInteractiveHTML(
    block,
    `
      <div class="markov-widget" aria-label="Markov transition matrix">
        <div class="markov-states"></div>
        <div class="markov-matrix">
          <span>0.70</span><span>0.20</span><span>0.10</span>
          <span>0.15</span><span>0.70</span><span>0.15</span>
          <span>0.25</span><span>0.25</span><span>0.50</span>
        </div>
      </div>
      <p class="interactive-readout markov-readout"></p>
    `,
    `
      <label>
        <span>${labels.steps}</span>
        <input class="markov-step-input" type="range" min="0" max="8" value="2">
      </label>
    `
  );

  const matrix = [
    [0.70, 0.20, 0.10],
    [0.15, 0.70, 0.15],
    [0.25, 0.25, 0.50]
  ];
  const names = ["A", "B", "C"];
  const input = block.querySelector(".markov-step-input");
  const states = block.querySelector(".markov-states");
  const readout = block.querySelector(".markov-readout");

  const multiply = (vector) => matrix[0].map((_, col) => vector.reduce((sum, value, row) => sum + value * matrix[row][col], 0));

  const update = () => {
    let distribution = [1, 0, 0];
    const steps = Number(input.value);
    for (let step = 0; step < steps; step += 1) {
      distribution = multiply(distribution);
    }
    states.innerHTML = distribution.map((value, index) => `
      <span>
        <b>${names[index]}</b>
        <em style="height:${Math.max(8, value * 110)}px"></em>
        <small>${value.toFixed(2)}</small>
      </span>
    `).join("");
    readout.textContent = `${labels.distribution}: pi_${steps}=[${distribution.map((value) => value.toFixed(3)).join(", ")}]. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function probChoose(n, k) {
  if (k < 0 || k > n) {
    return 0;
  }
  const r = Math.min(k, n - k);
  let value = 1;
  for (let i = 1; i <= r; i += 1) {
    value = (value * (n - r + i)) / i;
  }
  return value;
}

function probNormalDensity(x) {
  return Math.exp(-(x ** 2) / 2) / Math.sqrt(2 * Math.PI);
}

function mountProbDiscreteLaws(block) {
  const labels = currentLang === "zh"
    ? {
        n: "trials n",
        lambda: "lambda",
        binomial: "Binomial",
        poisson: "Poisson",
        gap: "最大差距",
        note: "保持 p=lambda/n；n 越大，rare-event binomial 越接近 Poisson."
      }
    : {
        n: "trials n",
        lambda: "lambda",
        binomial: "Binomial",
        poisson: "Poisson",
        gap: "max gap",
        note: "With p=lambda/n, the rare-event binomial law approaches Poisson."
      };

  setInteractiveHTML(
    block,
    `
      <div class="prob-laws-widget" aria-label="Binomial to Poisson approximation">
        <div class="prob-bars prob-discrete-bars"></div>
        <div class="prob-widget-stats">
          <span><b class="prob-law-n"></b><em>${labels.n}</em></span>
          <span><b class="prob-law-lambda"></b><em>${labels.lambda}</em></span>
          <span><b class="prob-law-gap"></b><em>${labels.gap}</em></span>
        </div>
      </div>
      <p class="interactive-readout prob-laws-readout"></p>
    `,
    `
      <label>
        <span>${labels.n}</span>
        <input class="prob-law-n-input" type="range" min="10" max="200" step="10" value="40">
      </label>
      <label>
        <span>${labels.lambda}</span>
        <input class="prob-law-lambda-input" type="range" min="1" max="8" step="0.5" value="3">
      </label>
    `
  );

  const nInput = block.querySelector(".prob-law-n-input");
  const lambdaInput = block.querySelector(".prob-law-lambda-input");
  const bars = block.querySelector(".prob-discrete-bars");
  const nNode = block.querySelector(".prob-law-n");
  const lambdaNode = block.querySelector(".prob-law-lambda");
  const gapNode = block.querySelector(".prob-law-gap");
  const readout = block.querySelector(".prob-laws-readout");

  const update = () => {
    const n = Number(nInput.value);
    const lambda = Number(lambdaInput.value);
    const p = lambda / n;
    const maxK = Math.max(10, Math.ceil(lambda + 4 * Math.sqrt(lambda + 1)));
    const values = Array.from({ length: maxK + 1 }, (_, k) => {
      const binomial = probChoose(n, k) * (p ** k) * ((1 - p) ** (n - k));
      const poisson = Math.exp(-lambda) * (lambda ** k) / Array.from({ length: k }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
      return { k, binomial, poisson };
    });
    const maxValue = Math.max(...values.flatMap((item) => [item.binomial, item.poisson]));
    const maxGap = Math.max(...values.map((item) => Math.abs(item.binomial - item.poisson)));

    bars.innerHTML = values.map((item) => `
      <span>
        <i class="prob-binomial-bar" style="height:${Math.max(4, (item.binomial / maxValue) * 118)}px"></i>
        <i class="prob-poisson-bar" style="height:${Math.max(4, (item.poisson / maxValue) * 118)}px"></i>
        <em>${item.k}</em>
      </span>
    `).join("");
    nNode.textContent = n;
    lambdaNode.textContent = lambda.toFixed(1);
    gapNode.textContent = maxGap.toFixed(3);
    readout.textContent = `${labels.binomial}: Bin(${n}, ${(p).toFixed(3)}), ${labels.poisson}: Pois(${lambda.toFixed(1)}). ${labels.note}`;
  };

  nInput.addEventListener("input", update);
  lambdaInput.addEventListener("input", update);
  update();
}

function mountProbContinuousConvolution(block) {
  const labels = currentLang === "zh"
    ? {
        x: "sum value x",
        density: "density",
        overlap: "overlap length",
        note: "对 X,Y~U(0,1)，f_{X+Y}(x) 等于可行 y 区间的长度。"
      }
    : {
        x: "sum value x",
        density: "density",
        overlap: "overlap length",
        note: "For X,Y~U(0,1), f_{X+Y}(x) is the length of the feasible y interval."
      };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg prob-convolution-widget" viewBox="0 0 720 330" aria-label="Convolution of two uniform densities">
        <line x1="70" y1="250" x2="650" y2="250" class="axis-line"></line>
        <line x1="70" y1="250" x2="70" y2="50" class="axis-line"></line>
        <path d="M70,250 L360,70 L650,250" class="prob-density-path"></path>
        <line class="prob-conv-marker" x1="360" y1="250" x2="360" y2="70"></line>
        <circle class="prob-conv-point" cx="360" cy="70" r="8"></circle>
        <line x1="140" y1="296" x2="580" y2="296" class="axis-line"></line>
        <line class="prob-overlap-segment" x1="140" y1="296" x2="580" y2="296"></line>
        <text x="66" y="278" class="svg-label">0</text>
        <text x="354" y="278" class="svg-label">1</text>
        <text x="642" y="278" class="svg-label">2</text>
        <text x="132" y="318" class="svg-label">y=0</text>
        <text x="552" y="318" class="svg-label">y=1</text>
      </svg>
      <p class="interactive-readout prob-convolution-readout"></p>
    `,
    `
      <label>
        <span>${labels.x}</span>
        <input class="prob-convolution-x-input" type="range" min="0" max="2" step="0.01" value="1">
      </label>
    `
  );

  const input = block.querySelector(".prob-convolution-x-input");
  const marker = block.querySelector(".prob-conv-marker");
  const point = block.querySelector(".prob-conv-point");
  const overlap = block.querySelector(".prob-overlap-segment");
  const readout = block.querySelector(".prob-convolution-readout");
  const toSumX = (x) => 70 + x * 290;
  const toDensityY = (density) => 250 - density * 180;
  const toYIntervalX = (y) => 140 + y * 440;

  const update = () => {
    const x = Number(input.value);
    const left = Math.max(0, x - 1);
    const right = Math.min(1, x);
    const density = Math.max(0, right - left);
    const svgX = toSumX(x);
    const svgY = toDensityY(density);
    marker.setAttribute("x1", svgX);
    marker.setAttribute("x2", svgX);
    marker.setAttribute("y2", svgY);
    point.setAttribute("cx", svgX);
    point.setAttribute("cy", svgY);
    overlap.setAttribute("x1", toYIntervalX(left));
    overlap.setAttribute("x2", toYIntervalX(right));
    readout.textContent = `x=${x.toFixed(2)}, ${labels.overlap}: [${left.toFixed(2)}, ${right.toFixed(2)}], ${labels.density}=${density.toFixed(2)}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountProbGeneratingFunction(block) {
  const labels = currentLang === "zh"
    ? {
        s: "evaluate at s",
        value: "PGF value",
        mean: "mean",
        binomial: "Binomial",
        poisson: "Poisson",
        geometric: "Geometric",
        note: "Bars 是 power series coefficients，也就是每个 k 的 probability."
      }
    : {
        s: "evaluate at s",
        value: "PGF value",
        mean: "mean",
        binomial: "Binomial",
        poisson: "Poisson",
        geometric: "Geometric",
        note: "Bars are power-series coefficients, i.e. probabilities for each k."
      };

  setInteractiveHTML(
    block,
    `
      <div class="prob-pgf-widget" aria-label="Probability generating function coefficients">
        <div class="prob-pgf-formula"></div>
        <div class="prob-bars prob-pgf-bars"></div>
      </div>
      <p class="interactive-readout prob-pgf-readout"></p>
    `,
    `
      <div class="prob-mode-buttons" role="tablist" aria-label="Distribution">
        <button type="button" data-law="binomial" aria-selected="true">${labels.binomial}</button>
        <button type="button" data-law="poisson" aria-selected="false">${labels.poisson}</button>
        <button type="button" data-law="geometric" aria-selected="false">${labels.geometric}</button>
      </div>
      <label>
        <span>${labels.s}</span>
        <input class="prob-pgf-s-input" type="range" min="0" max="1.2" step="0.01" value="0.7">
      </label>
    `
  );

  const formulaNode = block.querySelector(".prob-pgf-formula");
  const bars = block.querySelector(".prob-pgf-bars");
  const readout = block.querySelector(".prob-pgf-readout");
  const sInput = block.querySelector(".prob-pgf-s-input");
  const buttons = [...block.querySelectorAll(".prob-mode-buttons button")];
  let activeLaw = "binomial";

  const laws = {
    binomial: {
      label: labels.binomial,
      formula: "\\(P_X(s)=(0.6+0.4s)^5\\)",
      mean: 2,
      coeffs: Array.from({ length: 9 }, (_, k) => (k <= 5 ? probChoose(5, k) * (0.4 ** k) * (0.6 ** (5 - k)) : 0)),
      value: (s) => ((0.6 + 0.4 * s) ** 5)
    },
    poisson: {
      label: labels.poisson,
      formula: "\\(P_X(s)=e^{3(s-1)}\\)",
      mean: 3,
      coeffs: Array.from({ length: 9 }, (_, k) => Math.exp(-3) * (3 ** k) / Array.from({ length: k }, (_, i) => i + 1).reduce((a, b) => a * b, 1)),
      value: (s) => Math.exp(3 * (s - 1))
    },
    geometric: {
      label: labels.geometric,
      formula: "\\(P_X(s)=\\frac{p}{1-(1-p)s},\\;p=0.35\\)",
      mean: (1 - 0.35) / 0.35,
      coeffs: Array.from({ length: 9 }, (_, k) => 0.35 * (0.65 ** k)),
      value: (s) => 0.35 / (1 - 0.65 * s)
    }
  };

  const update = () => {
    const law = laws[activeLaw];
    const maxValue = Math.max(...law.coeffs);
    const s = Number(sInput.value);
    formulaNode.innerHTML = `<strong>${law.label}</strong><span>${law.formula}</span>`;
    bars.innerHTML = law.coeffs.map((value, k) => `
      <span>
        <i style="height:${Math.max(4, (value / maxValue) * 122)}px"></i>
        <em>${k}</em>
      </span>
    `).join("");
    readout.textContent = `${labels.value}: P(${s.toFixed(2)})=${law.value(s).toFixed(3)}; ${labels.mean}: ${law.mean.toFixed(2)}. ${labels.note}`;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeLaw = button.dataset.law;
      buttons.forEach((item) => item.setAttribute("aria-selected", String(item === button)));
      update();
      typesetMath();
    });
  });
  sInput.addEventListener("input", update);
  update();
}

function mountProbBranchingExtinction(block) {
  const labels = currentLang === "zh"
    ? {
        p: "P(two children)",
        mean: "mean offspring",
        extinction: "extinction probability",
        subcritical: "subcritical/critical",
        supercritical: "supercritical",
        note: "二叉 offspring law 的 PGF 是 q+p s^2；extinction 是最小 fixed point."
      }
    : {
        p: "P(two children)",
        mean: "mean offspring",
        extinction: "extinction probability",
        subcritical: "subcritical/critical",
        supercritical: "supercritical",
        note: "For binary offspring, the PGF is q+p s^2; extinction is the smallest fixed point."
      };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg prob-branching-widget" viewBox="0 0 720 320" aria-label="Galton-Watson extinction fixed point">
        <line x1="72" y1="250" x2="640" y2="250" class="axis-line"></line>
        <line x1="72" y1="250" x2="72" y2="50" class="axis-line"></line>
        <path class="prob-branch-diagonal" d="M72,250 L640,50"></path>
        <path class="prob-branch-pgf"></path>
        <circle class="prob-branch-fixed" r="8"></circle>
        <text x="600" y="44" class="svg-label">y=s</text>
        <text x="78" y="42" class="svg-label">P(s)</text>
        <text x="612" y="274" class="svg-label">s</text>
      </svg>
      <p class="interactive-readout prob-branching-readout"></p>
    `,
    `
      <label>
        <span>${labels.p}</span>
        <input class="prob-branch-p-input" type="range" min="0.05" max="0.95" step="0.01" value="0.42">
      </label>
    `
  );

  const input = block.querySelector(".prob-branch-p-input");
  const pgfPath = block.querySelector(".prob-branch-pgf");
  const fixedPoint = block.querySelector(".prob-branch-fixed");
  const readout = block.querySelector(".prob-branching-readout");
  const toX = (s) => 72 + s * 568;
  const toY = (value) => 250 - value * 200;

  const update = () => {
    const p = Number(input.value);
    const q = 1 - p;
    const mean = 2 * p;
    const extinction = p <= 0.5 ? 1 : q / p;
    const points = Array.from({ length: 61 }, (_, index) => {
      const s = index / 60;
      return `${index === 0 ? "M" : "L"}${toX(s).toFixed(1)},${toY(q + p * s * s).toFixed(1)}`;
    }).join(" ");
    pgfPath.setAttribute("d", points);
    fixedPoint.setAttribute("cx", toX(extinction));
    fixedPoint.setAttribute("cy", toY(extinction));
    readout.textContent = `p=${p.toFixed(2)}, ${labels.mean}=${mean.toFixed(2)} (${mean <= 1 ? labels.subcritical : labels.supercritical}), ${labels.extinction}=${extinction.toFixed(3)}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountProbBinomialCLT(block) {
  const labels = currentLang === "zh"
    ? {
        n: "trials n",
        p: "success p",
        note: "Bars 是 standardized binomial mass 除以 bin width 后得到的 density scale；curve 是 standard normal."
      }
    : {
        n: "trials n",
        p: "success p",
        note: "Bars are standardized binomial mass divided by bin width; the curve is standard normal."
      };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg prob-clt-widget" viewBox="0 0 720 320" aria-label="Standardized binomial mass compared with normal density">
        <line x1="70" y1="250" x2="650" y2="250" class="axis-line"></line>
        <line x1="70" y1="250" x2="70" y2="52" class="axis-line"></line>
        <g class="prob-clt-bars"></g>
        <path class="prob-clt-normal"></path>
        <text x="62" y="276" class="svg-label">-3</text>
        <text x="354" y="276" class="svg-label">0</text>
        <text x="632" y="276" class="svg-label">3</text>
      </svg>
      <p class="interactive-readout prob-clt-readout"></p>
    `,
    `
      <label>
        <span>${labels.n}</span>
        <input class="prob-clt-n-input" type="range" min="10" max="200" step="10" value="60">
      </label>
      <label>
        <span>${labels.p}</span>
        <input class="prob-clt-p-input" type="range" min="0.2" max="0.8" step="0.05" value="0.5">
      </label>
    `
  );

  const nInput = block.querySelector(".prob-clt-n-input");
  const pInput = block.querySelector(".prob-clt-p-input");
  const bars = block.querySelector(".prob-clt-bars");
  const normalPath = block.querySelector(".prob-clt-normal");
  const readout = block.querySelector(".prob-clt-readout");
  const zMin = -3.5;
  const zMax = 3.5;
  const toX = (z) => 70 + ((z - zMin) / (zMax - zMin)) * 580;
  const toY = (density) => 250 - (density / 0.45) * 185;

  const update = () => {
    const n = Number(nInput.value);
    const p = Number(pInput.value);
    const q = 1 - p;
    const mean = n * p;
    const sd = Math.sqrt(n * p * q);
    const binWidth = 1 / sd;
    const visible = [];
    for (let k = 0; k <= n; k += 1) {
      const z = (k - mean) / sd;
      if (z >= zMin && z <= zMax) {
        const mass = probChoose(n, k) * (p ** k) * (q ** (n - k));
        visible.push({ z, density: mass / binWidth });
      }
    }
    const rectWidth = Math.max(3, Math.min(14, 420 / visible.length));
    bars.innerHTML = visible.map((item) => {
      const height = 250 - toY(item.density);
      return `<rect x="${toX(item.z) - rectWidth / 2}" y="${toY(item.density)}" width="${rectWidth}" height="${Math.max(1, height)}"></rect>`;
    }).join("");
    normalPath.setAttribute(
      "d",
      Array.from({ length: 100 }, (_, index) => {
        const z = zMin + (index / 99) * (zMax - zMin);
        return `${index === 0 ? "M" : "L"}${toX(z).toFixed(1)},${toY(probNormalDensity(z)).toFixed(1)}`;
      }).join(" ")
    );
    readout.textContent = `Bin(${n}, ${p.toFixed(2)}) standardized by mean np=${mean.toFixed(1)} and sd=${sd.toFixed(2)}. ${labels.note}`;
  };

  nInput.addEventListener("input", update);
  pInput.addEventListener("input", update);
  update();
}

function mountCharFunctionLattice(block) {
  const labels = currentLang === "zh"
    ? {
        t: "frequency t",
        modulus: "modulus",
        real: "real",
        imag: "imag",
        note: "平均向量越短，说明 unit-circle phases 越不一致；模长为 1 需要全部 phases 对齐。"
      }
    : {
        t: "frequency t",
        modulus: "modulus",
        real: "real",
        imag: "imag",
        note: "A short average means the unit-circle phases disagree; modulus one requires all phases to align."
      };

  setInteractiveHTML(
    block,
    `
      <div class="char-lattice-widget" aria-label="Characteristic function phase alignment">
        <svg class="interactive-svg char-unit-circle" viewBox="0 0 360 300" aria-hidden="true">
          <circle cx="170" cy="150" r="96" class="char-circle"></circle>
          <line x1="64" y1="150" x2="276" y2="150" class="axis-line"></line>
          <line x1="170" y1="44" x2="170" y2="256" class="axis-line"></line>
          <g class="char-phase-rays"></g>
          <line class="char-resultant" x1="170" y1="150" x2="170" y2="150"></line>
          <circle class="char-resultant-dot" cx="170" cy="150" r="7"></circle>
        </svg>
        <div class="char-widget-stats">
          <span><b class="char-modulus-value"></b><em>${labels.modulus}</em></span>
          <span><b class="char-real-value"></b><em>${labels.real}</em></span>
          <span><b class="char-imag-value"></b><em>${labels.imag}</em></span>
        </div>
      </div>
      <p class="interactive-readout char-lattice-readout"></p>
    `,
    `
      <label>
        <span>${labels.t}</span>
        <input class="char-lattice-t-input" type="range" min="0" max="6.283" step="0.01" value="2.1">
      </label>
    `
  );

  const support = [
    { x: 0, p: 0.25 },
    { x: 1, p: 0.50 },
    { x: 2, p: 0.25 }
  ];
  const input = block.querySelector(".char-lattice-t-input");
  const rays = block.querySelector(".char-phase-rays");
  const resultLine = block.querySelector(".char-resultant");
  const resultDot = block.querySelector(".char-resultant-dot");
  const modulusNode = block.querySelector(".char-modulus-value");
  const realNode = block.querySelector(".char-real-value");
  const imagNode = block.querySelector(".char-imag-value");
  const readout = block.querySelector(".char-lattice-readout");
  const cx = 170;
  const cy = 150;
  const radius = 96;

  const point = (angle, scale = 1) => [
    cx + Math.cos(angle) * radius * scale,
    cy - Math.sin(angle) * radius * scale
  ];

  const update = () => {
    const t = Number(input.value);
    let real = 0;
    let imag = 0;
    rays.innerHTML = support.map((item) => {
      const angle = t * item.x;
      real += item.p * Math.cos(angle);
      imag += item.p * Math.sin(angle);
      const [x, y] = point(angle);
      return `
        <line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="char-phase-ray"></line>
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${6 + item.p * 10}" class="char-phase-dot"></circle>
      `;
    }).join("");
    const modulus = Math.hypot(real, imag);
    const [rx, ry] = point(Math.atan2(imag, real), modulus);
    resultLine.setAttribute("x2", rx.toFixed(1));
    resultLine.setAttribute("y2", ry.toFixed(1));
    resultDot.setAttribute("cx", rx.toFixed(1));
    resultDot.setAttribute("cy", ry.toFixed(1));
    modulusNode.textContent = modulus.toFixed(3);
    realNode.textContent = real.toFixed(3);
    imagNode.textContent = imag.toFixed(3);
    readout.textContent = `X in {0,1,2}, weights [0.25,0.50,0.25], t=${t.toFixed(2)}, phi(t)=${real.toFixed(3)} ${imag >= 0 ? "+" : "-"} ${Math.abs(imag).toFixed(3)}i. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountCharInversionWindow(block) {
  const labels = currentLang === "zh"
    ? {
        cutoff: "cutoff c",
        approx: "approximation",
        truth: "true probability",
        note: "这里用 standard normal 的 characteristic function 展示 inversion cutoff 如何收敛。"
      }
    : {
        cutoff: "cutoff c",
        approx: "approximation",
        truth: "true probability",
        note: "This uses the standard normal characteristic function to show how the inversion cutoff converges."
      };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg char-inversion-widget" viewBox="0 0 720 320" aria-label="Fourier inversion cutoff">
        <line x1="70" y1="250" x2="650" y2="250" class="axis-line"></line>
        <line x1="70" y1="250" x2="70" y2="54" class="axis-line"></line>
        <path class="char-normal-density"></path>
        <path class="char-cutoff-path"></path>
        <rect class="char-interval-band" x="0" y="0" width="0" height="0"></rect>
        <text x="246" y="276" class="svg-label">-1</text>
        <text x="354" y="276" class="svg-label">0</text>
        <text x="456" y="276" class="svg-label">1</text>
      </svg>
      <p class="interactive-readout char-inversion-readout"></p>
    `,
    `
      <label>
        <span>${labels.cutoff}</span>
        <input class="char-inversion-c-input" type="range" min="0.5" max="16" step="0.5" value="4">
      </label>
    `
  );

  const input = block.querySelector(".char-inversion-c-input");
  const densityPath = block.querySelector(".char-normal-density");
  const cutoffPath = block.querySelector(".char-cutoff-path");
  const band = block.querySelector(".char-interval-band");
  const readout = block.querySelector(".char-inversion-readout");
  const a = -1;
  const b = 1;
  const trueProbability = 0.682689;
  const xMin = -3.2;
  const xMax = 3.2;
  const toX = (x) => 70 + ((x - xMin) / (xMax - xMin)) * 580;
  const toY = (density) => 250 - (density / 0.42) * 182;

  densityPath.setAttribute(
    "d",
    Array.from({ length: 121 }, (_, index) => {
      const x = xMin + (index / 120) * (xMax - xMin);
      return `${index === 0 ? "M" : "L"}${toX(x).toFixed(1)},${toY(probNormalDensity(x)).toFixed(1)}`;
    }).join(" ")
  );
  band.setAttribute("x", toX(a));
  band.setAttribute("y", toY(probNormalDensity(0)));
  band.setAttribute("width", toX(b) - toX(a));
  band.setAttribute("height", 250 - toY(probNormalDensity(0)));

  const inversionApprox = (cutoff) => {
    const steps = 1800;
    const h = (2 * cutoff) / steps;
    let sum = 0;
    for (let i = 0; i <= steps; i += 1) {
      const t = -cutoff + i * h;
      const weight = i === 0 || i === steps ? 0.5 : 1;
      const value = Math.abs(t) < 1e-8
        ? b - a
        : ((Math.sin(t * b) - Math.sin(t * a)) / t);
      sum += weight * value * Math.exp(-(t ** 2) / 2);
    }
    return (h * sum) / (2 * Math.PI);
  };

  const update = () => {
    const cutoff = Number(input.value);
    const approx = inversionApprox(cutoff);
    const path = Array.from({ length: 101 }, (_, index) => {
      const c = 0.5 + (index / 100) * 15.5;
      const y = inversionApprox(c);
      return `${index === 0 ? "M" : "L"}${(70 + index * 5.8).toFixed(1)},${(250 - y * 220).toFixed(1)}`;
    }).join(" ");
    cutoffPath.setAttribute("d", path);
    readout.textContent = `${labels.cutoff}=${cutoff.toFixed(1)}, ${labels.approx}=${approx.toFixed(4)}, ${labels.truth}=0.6827. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountCharCLTLimit(block) {
  const labels = currentLang === "zh"
    ? {
        n: "sample size n",
        gap: "max gap",
        note: "\\(\\cos(t/\\sqrt n)^n\\) 是 Rademacher normalized sum 的 characteristic function；极限是 standard normal."
      }
    : {
        n: "sample size n",
        gap: "max gap",
        note: "\\(\\cos(t/\\sqrt n)^n\\) is the characteristic function of a normalized Rademacher sum; the limit is standard normal."
      };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg char-clt-widget" viewBox="0 0 720 320" aria-label="CLT characteristic function convergence">
        <line x1="70" y1="250" x2="650" y2="250" class="axis-line"></line>
        <line x1="70" y1="250" x2="70" y2="54" class="axis-line"></line>
        <path class="char-clt-normal"></path>
        <path class="char-clt-current"></path>
        <text x="62" y="276" class="svg-label">-4</text>
        <text x="354" y="276" class="svg-label">0</text>
        <text x="632" y="276" class="svg-label">4</text>
      </svg>
      <p class="interactive-readout char-clt-readout"></p>
    `,
    `
      <label>
        <span>${labels.n}</span>
        <input class="char-clt-n-input" type="range" min="1" max="160" step="1" value="12">
      </label>
    `
  );

  const input = block.querySelector(".char-clt-n-input");
  const normalPath = block.querySelector(".char-clt-normal");
  const currentPath = block.querySelector(".char-clt-current");
  const readout = block.querySelector(".char-clt-readout");
  const tMin = -4;
  const tMax = 4;
  const toX = (t) => 70 + ((t - tMin) / (tMax - tMin)) * 580;
  const toY = (value) => 250 - ((value + 1) / 2) * 185;

  normalPath.setAttribute(
    "d",
    Array.from({ length: 141 }, (_, index) => {
      const t = tMin + (index / 140) * (tMax - tMin);
      return `${index === 0 ? "M" : "L"}${toX(t).toFixed(1)},${toY(Math.exp(-(t ** 2) / 2)).toFixed(1)}`;
    }).join(" ")
  );

  const update = () => {
    const n = Number(input.value);
    let maxGap = 0;
    currentPath.setAttribute(
      "d",
      Array.from({ length: 141 }, (_, index) => {
        const t = tMin + (index / 140) * (tMax - tMin);
        const current = Math.cos(t / Math.sqrt(n)) ** n;
        const normal = Math.exp(-(t ** 2) / 2);
        maxGap = Math.max(maxGap, Math.abs(current - normal));
        return `${index === 0 ? "M" : "L"}${toX(t).toFixed(1)},${toY(current).toFixed(1)}`;
      }).join(" ")
    );
    readout.textContent = `n=${n}, ${labels.gap}=${maxGap.toFixed(3)}. ${labels.note}`;
    typesetMath();
  };

  input.addEventListener("input", update);
  update();
}

function mountMetricNeighborhood(block) {
  const labels = currentLang === "zh"
    ? {
        point: "point x0",
        radius: "epsilon",
        inside: "neighborhood inside S",
        status: "status",
        note: "For S=(0,1), a point is interior when some small epsilon-neighborhood stays inside S."
      }
    : {
        point: "point x0",
        radius: "epsilon",
        inside: "neighborhood inside S",
        status: "status",
        note: "For S=(0,1), a point is interior when some small epsilon-neighborhood stays inside S."
      };

  setInteractiveHTML(
    block,
    `
      <svg class="interactive-svg neighborhood-widget" viewBox="0 0 720 230" aria-label="Epsilon neighborhood on a real line">
        <line x1="62" y1="118" x2="658" y2="118" class="axis-line"></line>
        <line x1="180" y1="98" x2="180" y2="138" class="axis-line"></line>
        <line x1="540" y1="98" x2="540" y2="138" class="axis-line"></line>
        <line x1="180" y1="118" x2="540" y2="118" class="set-segment"></line>
        <line class="epsilon-segment" x1="250" y1="72" x2="470" y2="72"></line>
        <circle class="neighborhood-point" cx="360" cy="118" r="9"></circle>
        <text x="176" y="162" class="svg-label">0</text>
        <text x="536" y="162" class="svg-label">1</text>
        <text x="304" y="45" class="svg-label">N_epsilon(x0)</text>
        <text x="324" y="150" class="svg-label">S=(0,1)</text>
      </svg>
      <p class="interactive-readout neighborhood-readout"></p>
    `,
    `
      <label>
        <span>${labels.point}</span>
        <input class="neighborhood-point-input" type="range" min="-0.2" max="1.2" step="0.01" value="0.5">
      </label>
      <label>
        <span>${labels.radius}</span>
        <input class="neighborhood-radius-input" type="range" min="0.02" max="0.40" step="0.01" value="0.16">
      </label>
    `
  );

  const pointInput = block.querySelector(".neighborhood-point-input");
  const radiusInput = block.querySelector(".neighborhood-radius-input");
  const pointNode = block.querySelector(".neighborhood-point");
  const segment = block.querySelector(".epsilon-segment");
  const readout = block.querySelector(".neighborhood-readout");

  const toX = (value) => 180 + value * 360;

  const update = () => {
    const point = Number(pointInput.value);
    const radius = Number(radiusInput.value);
    const left = point - radius;
    const right = point + radius;
    const contained = left > 0 && right < 1;
    const inSet = point > 0 && point < 1;
    pointNode.setAttribute("cx", toX(point));
    segment.setAttribute("x1", toX(left));
    segment.setAttribute("x2", toX(right));
    segment.classList.toggle("contained-neighborhood", contained);
    pointNode.classList.toggle("outside-neighborhood", !inSet);
    readout.textContent = `${labels.status}: x0=${point.toFixed(2)}, epsilon=${radius.toFixed(2)}, ${labels.inside}: ${contained ? "yes" : "no"}. ${labels.note}`;
  };

  pointInput.addEventListener("input", update);
  radiusInput.addEventListener("input", update);
  update();
}

function mountMeanValueBound(block) {
  const labels = currentLang === "zh"
    ? {
        derivative: "bound M",
        distance: "distance |x-y|",
        actual: "observed change",
        bound: "MVT upper bound",
        note: "Bounded derivative gives a Lipschitz bound: |f(x)-f(y)| <= M|x-y|."
      }
    : {
        derivative: "bound M",
        distance: "distance |x-y|",
        actual: "observed change",
        bound: "MVT upper bound",
        note: "Bounded derivative gives a Lipschitz bound: |f(x)-f(y)| <= M|x-y|."
      };

  setInteractiveHTML(
    block,
    `
      <div class="mvt-bound-widget" aria-label="Mean value theorem Lipschitz bound">
        <div class="mvt-bar-panel">
          <span class="mvt-actual-bar"><b>${labels.actual}</b><em></em></span>
          <span class="mvt-bound-bar"><b>${labels.bound}</b><em></em></span>
        </div>
        <div class="mvt-formula-card">
          <strong>|f(x)-f(y)| <= M|x-y|</strong>
          <span class="mvt-bound-value"></span>
        </div>
      </div>
      <p class="interactive-readout mvt-readout"></p>
    `,
    `
      <label>
        <span>${labels.derivative}</span>
        <input class="mvt-m-input" type="range" min="0.5" max="5" step="0.1" value="2">
      </label>
      <label>
        <span>${labels.distance}</span>
        <input class="mvt-dx-input" type="range" min="0.1" max="3" step="0.1" value="1.4">
      </label>
    `
  );

  const mInput = block.querySelector(".mvt-m-input");
  const dxInput = block.querySelector(".mvt-dx-input");
  const actualBar = block.querySelector(".mvt-actual-bar em");
  const boundBar = block.querySelector(".mvt-bound-bar em");
  const value = block.querySelector(".mvt-bound-value");
  const readout = block.querySelector(".mvt-readout");

  const update = () => {
    const m = Number(mInput.value);
    const dx = Number(dxInput.value);
    const bound = m * dx;
    const actual = 0.62 * bound;
    const scale = Math.max(1, bound);
    actualBar.style.width = `${Math.max(7, (actual / scale) * 100)}%`;
    boundBar.style.width = "100%";
    value.textContent = `M=${m.toFixed(1)}, |x-y|=${dx.toFixed(1)}, bound=${bound.toFixed(2)}`;
    readout.textContent = `${labels.actual}: ${actual.toFixed(2)}; ${labels.bound}: ${bound.toFixed(2)}. ${labels.note}`;
  };

  mInput.addEventListener("input", update);
  dxInput.addEventListener("input", update);
  update();
}

function mountAnalysisCompactnessLab(block) {
  const labels = currentLang === "zh"
    ? {
        mesh: "mesh size",
        radius: "cover radius",
        cells: "cells",
        cover: "finite cover",
        diameter: "cell diameter",
        note: "Compactness lets a bounded region be controlled by finitely many local neighborhoods."
      }
    : {
        mesh: "mesh size",
        radius: "cover radius",
        cells: "cells",
        cover: "finite cover",
        diameter: "cell diameter",
        note: "Compactness lets a bounded region be controlled by finitely many local neighborhoods."
      };

  setInteractiveHTML(
    block,
    `
      <div class="analysis-compact-widget" aria-label="Finite cover for compactness">
        <svg class="analysis-compact-svg" viewBox="0 0 520 320" aria-hidden="true">
          <rect x="92" y="48" width="280" height="220" class="analysis-compact-region"></rect>
          <g class="analysis-compact-covers"></g>
          <g class="analysis-compact-grid"></g>
          <text x="104" y="292" class="svg-label">S compact candidate</text>
        </svg>
        <div class="analysis-compact-stats">
          <span class="analysis-compact-cells"></span>
          <span class="analysis-compact-cover"></span>
          <span class="analysis-compact-diameter"></span>
        </div>
      </div>
      <p class="interactive-readout analysis-compact-readout"></p>
    `,
    `
      <label>
        <span>${labels.mesh}</span>
        <input class="analysis-compact-mesh-input" type="range" min="2" max="8" step="1" value="4">
      </label>
      <label>
        <span>${labels.radius}</span>
        <input class="analysis-compact-radius-input" type="range" min="0.10" max="0.34" step="0.01" value="0.22">
      </label>
    `
  );

  const meshInput = block.querySelector(".analysis-compact-mesh-input");
  const radiusInput = block.querySelector(".analysis-compact-radius-input");
  const grid = block.querySelector(".analysis-compact-grid");
  const covers = block.querySelector(".analysis-compact-covers");
  const cellsStat = block.querySelector(".analysis-compact-cells");
  const coverStat = block.querySelector(".analysis-compact-cover");
  const diameterStat = block.querySelector(".analysis-compact-diameter");
  const readout = block.querySelector(".analysis-compact-readout");
  const x0 = 92;
  const y0 = 48;
  const width = 280;
  const height = 220;

  const update = () => {
    const n = Number(meshInput.value);
    const radius = Number(radiusInput.value);
    const cellW = width / n;
    const cellH = height / n;
    const diameter = Math.hypot(cellW, cellH) / width;
    const selected = [];
    for (let row = 0; row < n; row += 1) {
      for (let col = 0; col < n; col += 1) {
        if ((row + col) % 2 === 0 || row === 0 || col === n - 1) {
          selected.push({ cx: x0 + (col + 0.5) * cellW, cy: y0 + (row + 0.5) * cellH });
        }
      }
    }
    grid.innerHTML = Array.from({ length: n + 1 }, (_, index) => {
      const x = x0 + index * cellW;
      const y = y0 + index * cellH;
      return `
        <line x1="${x.toFixed(1)}" y1="${y0}" x2="${x.toFixed(1)}" y2="${y0 + height}" class="analysis-grid-line"></line>
        <line x1="${x0}" y1="${y.toFixed(1)}" x2="${x0 + width}" y2="${y.toFixed(1)}" class="analysis-grid-line"></line>
      `;
    }).join("");
    covers.innerHTML = selected.map((point) => `<circle cx="${point.cx.toFixed(1)}" cy="${point.cy.toFixed(1)}" r="${(radius * 92).toFixed(1)}" class="analysis-cover-disc"></circle>`).join("");
    cellsStat.innerHTML = `<b>${labels.cells}</b><em>${n} x ${n}=${n * n}</em>`;
    coverStat.innerHTML = `<b>${labels.cover}</b><em>${selected.length} neighborhoods</em>`;
    diameterStat.innerHTML = `<b>${labels.diameter}</b><em>${diameter.toFixed(3)}</em>`;
    readout.textContent = `${labels.mesh}: ${n}. ${labels.radius}: ${radius.toFixed(2)}. ${labels.note}`;
  };

  meshInput.addEventListener("input", update);
  radiusInput.addEventListener("input", update);
  update();
}

function mountAnalysisJacobianLocalInverse(block) {
  const labels = currentLang === "zh"
    ? {
        stretchX: "x stretch",
        stretchY: "y stretch",
        shear: "shear",
        determinant: "determinant",
        area: "area scale",
        status: "local inverse",
        yes: "yes",
        no: "collapse",
        note: "Inverse function theorem needs a nonsingular Jacobian: no local collapse means a local inverse can exist."
      }
    : {
        stretchX: "x stretch",
        stretchY: "y stretch",
        shear: "shear",
        determinant: "determinant",
        area: "area scale",
        status: "local inverse",
        yes: "yes",
        no: "collapse",
        note: "Inverse function theorem needs a nonsingular Jacobian: no local collapse means a local inverse can exist."
      };

  setInteractiveHTML(
    block,
    `
      <div class="analysis-jacobian-widget" aria-label="Jacobian determinant and local inverse">
        <svg class="analysis-jacobian-svg" viewBox="0 0 560 320" aria-hidden="true">
          <line x1="70" y1="245" x2="498" y2="245" class="axis-line"></line>
          <line x1="150" y1="286" x2="150" y2="42" class="axis-line"></line>
          <polygon class="analysis-unit-square" points="150,245 230,245 230,165 150,165"></polygon>
          <polygon class="analysis-image-square"></polygon>
          <text x="154" y="162" class="svg-label">unit cell</text>
          <text x="330" y="68" class="svg-label">J cell</text>
        </svg>
        <div class="analysis-jacobian-stats">
          <span class="analysis-jacobian-det"></span>
          <span class="analysis-jacobian-area"></span>
          <span class="analysis-jacobian-status"></span>
        </div>
      </div>
      <p class="interactive-readout analysis-jacobian-readout"></p>
    `,
    `
      <label>
        <span>${labels.stretchX}</span>
        <input class="analysis-jacobian-sx-input" type="range" min="0" max="2" step="0.05" value="1.15">
      </label>
      <label>
        <span>${labels.stretchY}</span>
        <input class="analysis-jacobian-sy-input" type="range" min="0" max="2" step="0.05" value="0.90">
      </label>
      <label>
        <span>${labels.shear}</span>
        <input class="analysis-jacobian-shear-input" type="range" min="-1.2" max="1.2" step="0.05" value="0.35">
      </label>
    `
  );

  const sxInput = block.querySelector(".analysis-jacobian-sx-input");
  const syInput = block.querySelector(".analysis-jacobian-sy-input");
  const shearInput = block.querySelector(".analysis-jacobian-shear-input");
  const polygon = block.querySelector(".analysis-image-square");
  const detStat = block.querySelector(".analysis-jacobian-det");
  const areaStat = block.querySelector(".analysis-jacobian-area");
  const statusStat = block.querySelector(".analysis-jacobian-status");
  const readout = block.querySelector(".analysis-jacobian-readout");

  const update = () => {
    const sx = Number(sxInput.value);
    const sy = Number(syInput.value);
    const shear = Number(shearInput.value);
    const det = sx * sy;
    const base = { x: 330, y: 245 };
    const scale = 72;
    const transform = (x, y) => ({
      x: base.x + scale * (sx * x + shear * y),
      y: base.y - scale * (sy * y)
    });
    const points = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => transform(x, y));
    polygon.setAttribute("points", points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" "));
    const invertible = Math.abs(det) > 0.02;
    detStat.innerHTML = `<b>${labels.determinant}</b><em>${det.toFixed(3)}</em>`;
    areaStat.innerHTML = `<b>${labels.area}</b><em>|det J|=${Math.abs(det).toFixed(3)}</em>`;
    statusStat.innerHTML = `<b>${labels.status}</b><em>${invertible ? labels.yes : labels.no}</em>`;
    readout.textContent = `J=[[${sx.toFixed(2)}, ${shear.toFixed(2)}], [0, ${sy.toFixed(2)}]], det J=${det.toFixed(3)}. ${labels.note}`;
  };

  [sxInput, syInput, shearInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountAnalysisChangeOfVariablesGrid(block) {
  const labels = currentLang === "zh"
    ? {
        warp: "warp",
        scale: "scale",
        determinant: "local determinant",
        original: "original area",
        transformed: "transformed area",
        note: "Change of variables multiplies each tiny cell by the local absolute Jacobian determinant."
      }
    : {
        warp: "warp",
        scale: "scale",
        determinant: "local determinant",
        original: "original area",
        transformed: "transformed area",
        note: "Change of variables multiplies each tiny cell by the local absolute Jacobian determinant."
      };

  setInteractiveHTML(
    block,
    `
      <div class="analysis-change-widget" aria-label="Change of variables grid">
        <svg class="analysis-change-svg" viewBox="0 0 620 330" aria-hidden="true">
          <g class="analysis-change-source"></g>
          <g class="analysis-change-target"></g>
          <text x="102" y="292" class="svg-label">S</text>
          <text x="438" y="292" class="svg-label">G(S)</text>
        </svg>
        <div class="analysis-change-stats">
          <span class="analysis-change-det"></span>
          <span class="analysis-change-area"></span>
        </div>
      </div>
      <p class="interactive-readout analysis-change-readout"></p>
    `,
    `
      <label>
        <span>${labels.warp}</span>
        <input class="analysis-change-warp-input" type="range" min="-0.9" max="0.9" step="0.05" value="0.45">
      </label>
      <label>
        <span>${labels.scale}</span>
        <input class="analysis-change-scale-input" type="range" min="0.6" max="1.6" step="0.05" value="1.05">
      </label>
    `
  );

  const warpInput = block.querySelector(".analysis-change-warp-input");
  const scaleInput = block.querySelector(".analysis-change-scale-input");
  const source = block.querySelector(".analysis-change-source");
  const target = block.querySelector(".analysis-change-target");
  const detStat = block.querySelector(".analysis-change-det");
  const areaStat = block.querySelector(".analysis-change-area");
  const readout = block.querySelector(".analysis-change-readout");

  const sourcePoint = (x, y) => ({ x: 92 + x * 180, y: 250 - y * 180 });
  const targetPoint = (x, y, warp, scale) => {
    const u = scale * x + warp * (y - 0.5) * 0.45;
    const v = y + warp * Math.sin(Math.PI * x) * 0.18;
    return { x: 388 + u * 150, y: 250 - v * 180 };
  };

  const pathLine = (points) => points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");

  const update = () => {
    const warp = Number(warpInput.value);
    const scale = Number(scaleInput.value);
    const ticks = [0, 0.2, 0.4, 0.6, 0.8, 1];
    source.innerHTML = ticks.map((t) => `
      <path class="analysis-change-source-line" d="${pathLine([sourcePoint(t, 0), sourcePoint(t, 1)])}"></path>
      <path class="analysis-change-source-line" d="${pathLine([sourcePoint(0, t), sourcePoint(1, t)])}"></path>
    `).join("");
    target.innerHTML = ticks.map((t) => {
      const vertical = Array.from({ length: 25 }, (_, index) => targetPoint(t, index / 24, warp, scale));
      const horizontal = Array.from({ length: 25 }, (_, index) => targetPoint(index / 24, t, warp, scale));
      return `
        <path class="analysis-change-target-line" d="${pathLine(vertical)}"></path>
        <path class="analysis-change-target-line" d="${pathLine(horizontal)}"></path>
      `;
    }).join("");
    const sampleX = 0.5;
    const sampleY = 0.5;
    const duDx = scale;
    const duDy = 0.45 * warp;
    const dvDx = 0.18 * warp * Math.PI * Math.cos(Math.PI * sampleX);
    const dvDy = 1;
    const det = duDx * dvDy - duDy * dvDx;
    detStat.innerHTML = `<b>${labels.determinant}</b><em>|det DG|=${Math.abs(det).toFixed(3)}</em>`;
    areaStat.innerHTML = `<b>${labels.transformed}</b><em>${labels.original} x ${Math.abs(det).toFixed(3)}</em>`;
    readout.textContent = `${labels.warp}=${warp.toFixed(2)}, ${labels.scale}=${scale.toFixed(2)}. ${labels.note}`;
  };

  warpInput.addEventListener("input", update);
  scaleInput.addEventListener("input", update);
  update();
}

function mountLogicTruthTable(block) {
  const labels = currentLang === "zh"
    ? {
        formula: "alpha=(P and not Q) or R",
        valuation: "valuation",
        satisfied: "satisfies alpha",
        note: "A truth function is captured by the rows where it is true; those rows become disjunctive normal form."
      }
    : {
        formula: "alpha=(P and not Q) or R",
        valuation: "valuation",
        satisfied: "satisfies alpha",
        note: "A truth function is captured by the rows where it is true; those rows become disjunctive normal form."
      };

  setInteractiveHTML(
    block,
    `
      <div class="logic-table-widget" aria-label="Truth table and disjunctive normal form">
        <div class="logic-formula-card">
          <strong>${labels.formula}</strong>
          <span class="logic-current-row"></span>
        </div>
        <table class="logic-truth-table">
          <thead><tr><th>P</th><th>Q</th><th>R</th><th>alpha</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
      <p class="interactive-readout logic-readout"></p>
    `,
    `
      <label>
        <span>P</span>
        <input class="logic-p-input" type="checkbox" checked>
      </label>
      <label>
        <span>Q</span>
        <input class="logic-q-input" type="checkbox">
      </label>
      <label>
        <span>R</span>
        <input class="logic-r-input" type="checkbox">
      </label>
    `
  );

  const pInput = block.querySelector(".logic-p-input");
  const qInput = block.querySelector(".logic-q-input");
  const rInput = block.querySelector(".logic-r-input");
  const tbody = block.querySelector(".logic-truth-table tbody");
  const current = block.querySelector(".logic-current-row");
  const readout = block.querySelector(".logic-readout");

  const rows = [];
  [false, true].forEach((p) => {
    [false, true].forEach((q) => {
      [false, true].forEach((r) => {
        rows.push({ p, q, r, value: (p && !q) || r });
      });
    });
  });

  const tf = (value) => value ? "T" : "F";
  const minterm = (row) => [row.p ? "P" : "not P", row.q ? "Q" : "not Q", row.r ? "R" : "not R"].join(" and ");

  const update = () => {
    const selected = { p: pInput.checked, q: qInput.checked, r: rInput.checked };
    const value = (selected.p && !selected.q) || selected.r;
    tbody.innerHTML = rows.map((row) => {
      const active = row.p === selected.p && row.q === selected.q && row.r === selected.r;
      return `
        <tr class="${active ? "active-truth-row" : ""}">
          <td>${tf(row.p)}</td>
          <td>${tf(row.q)}</td>
          <td>${tf(row.r)}</td>
          <td>${tf(row.value)}</td>
        </tr>
      `;
    }).join("");
    const dnf = rows.filter((row) => row.value).map(minterm).join(" OR ");
    current.textContent = `${labels.valuation}: P=${tf(selected.p)}, Q=${tf(selected.q)}, R=${tf(selected.r)}`;
    readout.textContent = `${labels.satisfied}: ${tf(value)}. DNF: ${dnf}. ${labels.note}`;
  };

  [pInput, qInput, rInput].forEach((input) => input.addEventListener("change", update));
  update();
}

function mountHighDimSampling(block) {
  const labels = currentLang === "zh"
    ? {
        dimension: "dimension d",
        epsilon: "error epsilon",
        grid: "grid points",
        random: "random average k",
        note: "The grid grows like (1/epsilon)^d, while the approximate Caratheodory bound needs k about 1/(2 epsilon^2)."
      }
    : {
        dimension: "dimension d",
        epsilon: "error epsilon",
        grid: "grid points",
        random: "random average k",
        note: "The grid grows like (1/epsilon)^d, while the approximate Caratheodory bound needs k about 1/(2 epsilon^2)."
      };

  setInteractiveHTML(
    block,
    `
      <div class="highdim-widget" aria-label="High dimensional sampling comparison">
        <div class="highdim-bars">
          <span class="highdim-grid-bar"><b>${labels.grid}</b><em></em></span>
          <span class="highdim-random-bar"><b>${labels.random}</b><em></em></span>
        </div>
        <div class="highdim-stats">
          <strong class="highdim-grid-value"></strong>
          <span class="highdim-random-value"></span>
        </div>
      </div>
      <p class="interactive-readout highdim-readout"></p>
    `,
    `
      <label>
        <span>${labels.dimension}</span>
        <input class="highdim-d-input" type="range" min="1" max="12" step="1" value="5">
      </label>
      <label>
        <span>${labels.epsilon}</span>
        <input class="highdim-eps-input" type="range" min="0.10" max="0.50" step="0.01" value="0.20">
      </label>
    `
  );

  const dInput = block.querySelector(".highdim-d-input");
  const epsInput = block.querySelector(".highdim-eps-input");
  const gridBar = block.querySelector(".highdim-grid-bar em");
  const randomBar = block.querySelector(".highdim-random-bar em");
  const gridValue = block.querySelector(".highdim-grid-value");
  const randomValue = block.querySelector(".highdim-random-value");
  const readout = block.querySelector(".highdim-readout");

  const compact = (value) => {
    if (value >= 1e9) {
      return `${(value / 1e9).toFixed(1)}B`;
    }
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(1)}M`;
    }
    if (value >= 1e3) {
      return `${(value / 1e3).toFixed(1)}K`;
    }
    return String(Math.round(value));
  };

  const update = () => {
    const d = Number(dInput.value);
    const epsilon = Number(epsInput.value);
    const grid = Math.pow(Math.ceil(1 / epsilon), d);
    const random = Math.ceil(1 / (2 * epsilon * epsilon));
    const gridWidth = Math.min(100, 18 + Math.log10(grid) * 8);
    const randomWidth = Math.min(100, 18 + Math.log10(random) * 8);
    gridBar.style.width = `${gridWidth}%`;
    randomBar.style.width = `${randomWidth}%`;
    gridValue.textContent = `${labels.grid}: ${compact(grid)}`;
    randomValue.textContent = `${labels.random}: ${compact(random)}`;
    readout.textContent = `d=${d}, epsilon=${epsilon.toFixed(2)}. ${labels.note}`;
  };

  dInput.addEventListener("input", update);
  epsInput.addEventListener("input", update);
  update();
}

function mountTopologyComparison(block) {
  const labels = currentLang === "zh"
    ? {
        topology: "topology",
        open: "sample open sets",
        note: "Moving right means more sets are declared open, so the topology is finer."
      }
    : {
        topology: "topology",
        open: "sample open sets",
        note: "Moving right means more sets are declared open, so the topology is finer."
      };

  const modes = [
    {
      name: "trivial",
      rule: "Only empty set and X are open.",
      sample: ["empty", "X"]
    },
    {
      name: "finite-complement",
      rule: "U is open if U is empty or X minus U is finite.",
      sample: ["R minus {0}", "R minus {1,2}", "R"]
    },
    {
      name: "standard",
      rule: "Unions of open intervals are open.",
      sample: ["(0,1)", "(-2,3) union (5,6)", "R minus {0}"]
    },
    {
      name: "discrete",
      rule: "Every subset is open.",
      sample: ["{x}", "Cantor-like sets", "any A subset X"]
    }
  ];

  setInteractiveHTML(
    block,
    `
      <div class="topology-comparison-widget" aria-label="Topology comparison">
        ${modes.map((mode, index) => `
          <span data-topology-mode="${index}">
            <b>${mode.name}</b>
            <em>${mode.rule}</em>
          </span>
        `).join("")}
      </div>
      <p class="interactive-readout topology-comparison-readout"></p>
    `,
    `
      <label>
        <span>${labels.topology}</span>
        <input class="topology-comparison-input" type="range" min="0" max="3" value="1">
      </label>
    `
  );

  const input = block.querySelector(".topology-comparison-input");
  const cards = block.querySelectorAll("[data-topology-mode]");
  const readout = block.querySelector(".topology-comparison-readout");

  const update = () => {
    const modeIndex = Number(input.value);
    cards.forEach((card, index) => {
      card.classList.toggle("active-topology-mode", index === modeIndex);
      card.classList.toggle("coarser-topology-mode", index < modeIndex);
    });
    const mode = modes[modeIndex];
    readout.textContent = `${mode.name}: ${labels.open}: ${mode.sample.join("; ")}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountBinaryModDFA(block) {
  const labels = currentLang === "zh"
    ? {
        prefix: "prefix length",
        accept: "accept",
        reject: "reject",
        note: "Reading a bit updates the remainder by r -> (2r + bit) mod 3."
      }
    : {
        prefix: "prefix length",
        accept: "accept",
        reject: "reject",
        note: "Reading a bit updates the remainder by r -> (2r + bit) mod 3."
      };

  setInteractiveHTML(
    block,
    `
      <div class="binary-dfa-widget" aria-label="Binary divisible by three DFA">
        <svg class="binary-dfa-graph" viewBox="0 0 560 220" aria-hidden="true">
          <path d="M150,84 C218,28 342,28 410,84" class="dfa-arrow"></path>
          <path d="M414,136 C350,192 210,192 146,136" class="dfa-arrow"></path>
          <circle cx="130" cy="110" r="42" class="dfa-state binary-state" data-binary-state="0"></circle>
          <circle cx="280" cy="64" r="42" class="dfa-state binary-state" data-binary-state="1"></circle>
          <circle cx="430" cy="110" r="42" class="dfa-state binary-state" data-binary-state="2"></circle>
          <circle cx="130" cy="110" r="34" class="dfa-accept-ring"></circle>
          <text x="116" y="116" class="svg-label">q0</text>
          <text x="266" y="70" class="svg-label">q1</text>
          <text x="416" y="116" class="svg-label">q2</text>
        </svg>
        <div class="binary-word"></div>
      </div>
      <p class="interactive-readout binary-dfa-readout"></p>
    `,
    `
      <label>
        <span>${labels.prefix}</span>
        <input class="binary-dfa-input" type="range" min="0" max="6" value="4">
      </label>
    `
  );

  const word = "101101";
  const input = block.querySelector(".binary-dfa-input");
  const states = block.querySelectorAll(".binary-state");
  const wordNode = block.querySelector(".binary-word");
  const readout = block.querySelector(".binary-dfa-readout");

  const update = () => {
    const length = Number(input.value);
    const prefix = word.slice(0, length);
    let remainder = 0;
    prefix.split("").forEach((bit) => {
      remainder = (2 * remainder + Number(bit)) % 3;
    });
    states.forEach((state) => {
      state.classList.toggle("active-dfa-state", Number(state.dataset.binaryState) === remainder);
    });
    wordNode.innerHTML = word.split("").map((bit, index) => `<span class="${index < length ? "active-binary-bit" : ""}">${bit}</span>`).join("");
    const value = prefix ? parseInt(prefix, 2) : 0;
    readout.textContent = `${prefix || "epsilon"} = ${value}; remainder=${remainder}; ${remainder === 0 ? labels.accept : labels.reject}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountBasisCovectorTransform(block) {
  const labels = currentLang === "zh"
    ? {
        scale: "basis scale s",
        vector: "vector components",
        covector: "covector components",
        pairing: "pairing",
        note: "The geometric vector and covector action stay fixed; their components change in opposite directions."
      }
    : {
        scale: "basis scale s",
        vector: "vector components",
        covector: "covector components",
        pairing: "pairing",
        note: "The geometric vector and covector action stay fixed; their components change in opposite directions."
      };

  setInteractiveHTML(
    block,
    `
      <div class="basis-transform-widget" aria-label="Vector and covector basis transformation">
        <svg class="basis-transform-svg" viewBox="0 0 420 220" aria-hidden="true">
          <line x1="64" y1="170" x2="354" y2="170" class="axis-line"></line>
          <line x1="64" y1="170" x2="64" y2="42" class="axis-line"></line>
          <line class="basis-e1-line" x1="64" y1="170" x2="168" y2="170"></line>
          <line class="basis-vector-line" x1="64" y1="170" x2="260" y2="92"></line>
          <text x="176" y="192" class="svg-label basis-e1-label">e1'</text>
          <text x="264" y="88" class="svg-label">v</text>
        </svg>
        <div class="basis-transform-cards">
          <span class="basis-vector-card"></span>
          <span class="basis-covector-card"></span>
          <span class="basis-pairing-card"></span>
        </div>
      </div>
      <p class="interactive-readout basis-transform-readout"></p>
    `,
    `
      <label>
        <span>${labels.scale}</span>
        <input class="basis-scale-input" type="range" min="0.5" max="3" step="0.1" value="1.5">
      </label>
    `
  );

  const input = block.querySelector(".basis-scale-input");
  const basisLine = block.querySelector(".basis-e1-line");
  const vectorCard = block.querySelector(".basis-vector-card");
  const covectorCard = block.querySelector(".basis-covector-card");
  const pairingCard = block.querySelector(".basis-pairing-card");
  const readout = block.querySelector(".basis-transform-readout");

  const update = () => {
    const s = Number(input.value);
    const vector = [2 / s, 1];
    const covector = [3 * s, 1];
    const pairing = vector[0] * covector[0] + vector[1] * covector[1];
    basisLine.setAttribute("x2", 64 + 70 * s);
    vectorCard.innerHTML = `<b>${labels.vector}</b><em>v'=[${vector.map((value) => value.toFixed(2)).join(", ")}]</em>`;
    covectorCard.innerHTML = `<b>${labels.covector}</b><em>alpha'=[${covector.map((value) => value.toFixed(2)).join(", ")}]</em>`;
    pairingCard.innerHTML = `<b>${labels.pairing}</b><em>alpha(v)=${pairing.toFixed(2)}</em>`;
    readout.textContent = `e1'=s e1, s=${s.toFixed(1)}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountKernelFeatureMap(block) {
  const labels = currentLang === "zh"
    ? {
        x: "input x",
        feature: "feature map",
        kernel: "kernel value",
        note: "A kernel lets the model compare feature vectors through inner products."
      }
    : {
        x: "input x",
        feature: "feature map",
        kernel: "kernel value",
        note: "A kernel lets the model compare feature vectors through inner products."
      };

  setInteractiveHTML(
    block,
    `
      <div class="kernel-feature-widget" aria-label="Kernel feature map">
        <div class="kernel-space-card">
          <strong>X</strong>
          <span class="kernel-input-dot"></span>
        </div>
        <div class="kernel-arrow">Phi</div>
        <div class="kernel-space-card">
          <strong>H</strong>
          <div class="kernel-feature-bars"></div>
        </div>
        <div class="kernel-space-card kernel-value-card"></div>
      </div>
      <p class="interactive-readout kernel-feature-readout"></p>
    `,
    `
      <label>
        <span>${labels.x}</span>
        <input class="kernel-x-input" type="range" min="-2" max="2" step="0.1" value="1">
      </label>
    `
  );

  const input = block.querySelector(".kernel-x-input");
  const dot = block.querySelector(".kernel-input-dot");
  const bars = block.querySelector(".kernel-feature-bars");
  const valueCard = block.querySelector(".kernel-value-card");
  const readout = block.querySelector(".kernel-feature-readout");
  const z = 0.5;

  const phi = (x) => [1, Math.SQRT2 * x, x * x];
  const dotProduct = (a, b) => a.reduce((sum, value, index) => sum + value * b[index], 0);

  const update = () => {
    const x = Number(input.value);
    const features = phi(x);
    const kernel = dotProduct(features, phi(z));
    dot.style.left = `${50 + x * 20}%`;
    bars.innerHTML = features.map((value, index) => `<span style="height:${28 + Math.abs(value) * 28}px"><b>phi${index}</b><em>${value.toFixed(2)}</em></span>`).join("");
    valueCard.innerHTML = `<strong>${labels.kernel}</strong><span>k(x,z)=(1+xz)^2=${kernel.toFixed(2)}</span>`;
    readout.textContent = `${labels.feature}: Phi(x)=[1, sqrt(2)x, x^2], z=${z}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountMeasureAdditivitySplit(block) {
  const labels = currentLang === "zh"
    ? {
        overlap: "overlap",
        union: "union mass",
        sum: "sum mass",
        intersection: "intersection",
        note: "Finite additivity is exact for disjoint sets; with overlap you must subtract the intersection once."
      }
    : {
        overlap: "overlap",
        union: "union mass",
        sum: "sum mass",
        intersection: "intersection",
        note: "Finite additivity is exact for disjoint sets; with overlap you must subtract the intersection once."
      };

  setInteractiveHTML(
    block,
    `
      <div class="measure-additivity-widget" aria-label="Finite additivity with overlap">
        <svg class="measure-additivity-svg" viewBox="0 0 520 220" aria-hidden="true">
          <circle class="measure-set-a" cx="210" cy="110" r="70"></circle>
          <circle class="measure-set-b" cx="310" cy="110" r="70"></circle>
          <text x="160" y="112" class="svg-label">A</text>
          <text x="350" y="112" class="svg-label">B</text>
        </svg>
        <div class="measure-additivity-stats">
          <span class="measure-union-stat"></span>
          <span class="measure-sum-stat"></span>
          <span class="measure-overlap-stat"></span>
        </div>
      </div>
      <p class="interactive-readout measure-additivity-readout"></p>
    `,
    `
      <label>
        <span>${labels.overlap}</span>
        <input class="measure-overlap-input" type="range" min="0" max="0.45" step="0.01" value="0.20">
      </label>
    `
  );

  const input = block.querySelector(".measure-overlap-input");
  const setB = block.querySelector(".measure-set-b");
  const unionStat = block.querySelector(".measure-union-stat");
  const sumStat = block.querySelector(".measure-sum-stat");
  const overlapStat = block.querySelector(".measure-overlap-stat");
  const readout = block.querySelector(".measure-additivity-readout");

  const update = () => {
    const overlap = Number(input.value);
    const massA = 0.42;
    const massB = 0.36;
    const union = massA + massB - overlap;
    const cx = 360 - overlap * 260;
    setB.setAttribute("cx", cx.toFixed(1));
    unionStat.innerHTML = `<b>${labels.union}</b><em>${union.toFixed(2)}</em>`;
    sumStat.innerHTML = `<b>${labels.sum}</b><em>${(massA + massB).toFixed(2)}</em>`;
    overlapStat.innerHTML = `<b>${labels.intersection}</b><em>${overlap.toFixed(2)}</em>`;
    readout.textContent = `mu(A union B)=mu(A)+mu(B)-mu(A intersect B)=${union.toFixed(2)}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountConditionalExpectationPartition(block) {
  const labels = currentLang === "zh"
    ? {
        information: "information level",
        raw: "outcomes",
        conditional: "conditional expectation",
        note: "Conditional expectation replaces each information cell by its average value."
      }
    : {
        information: "information level",
        raw: "outcomes",
        conditional: "conditional expectation",
        note: "Conditional expectation replaces each information cell by its average value."
      };

  setInteractiveHTML(
    block,
    `
      <div class="conditional-widget" aria-label="Conditional expectation over a partition">
        <div class="conditional-outcomes"></div>
        <div class="conditional-cells"></div>
      </div>
      <p class="interactive-readout conditional-readout"></p>
    `,
    `
      <label>
        <span>${labels.information}</span>
        <input class="conditional-level-input" type="range" min="0" max="2" value="1">
      </label>
    `
  );

  const values = [2, 4, 9, 11, 3, 5, 12, 14];
  const partitions = [
    [[0, 1, 2, 3, 4, 5, 6, 7]],
    [[0, 1, 2, 3], [4, 5, 6, 7]],
    [[0, 1], [2, 3], [4, 5], [6, 7]]
  ];
  const input = block.querySelector(".conditional-level-input");
  const outcomes = block.querySelector(".conditional-outcomes");
  const cells = block.querySelector(".conditional-cells");
  const readout = block.querySelector(".conditional-readout");

  const update = () => {
    const level = Number(input.value);
    const partition = partitions[level];
    const conditionalValues = Array(values.length).fill(0);
    partition.forEach((cell) => {
      const average = cell.reduce((sum, index) => sum + values[index], 0) / cell.length;
      cell.forEach((index) => {
        conditionalValues[index] = average;
      });
    });
    outcomes.innerHTML = values.map((value, index) => `<span><b>w${index + 1}</b><em>${value}</em></span>`).join("");
    cells.innerHTML = partition.map((cell) => {
      const average = cell.reduce((sum, index) => sum + values[index], 0) / cell.length;
      return `<span><b>{${cell.map((index) => `w${index + 1}`).join(", ")}}</b><em>E[X|F]=${average.toFixed(1)}</em></span>`;
    }).join("");
    readout.textContent = `${labels.conditional}: [${conditionalValues.map((value) => value.toFixed(1)).join(", ")}]. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountStieltjesIntervalBuilder(block) {
  const labels = currentLang === "zh"
    ? {
        start: "左端点",
        width: "区间宽度",
        interval: "区间",
        mass: "Stieltjes 质量",
        note: "非递减的 F 保证区间质量非负；right-continuity 让这个有限规则升级为 premeasure。"
      }
    : {
        start: "left endpoint",
        width: "interval width",
        interval: "interval",
        mass: "Stieltjes mass",
        note: "Non-decreasing F makes the interval mass nonnegative; right-continuity is what upgrades this finite rule into a premeasure."
      };

  setInteractiveHTML(
    block,
    `
      <div class="stieltjes-widget" aria-label="Stieltjes interval measure">
        <svg class="stieltjes-svg" viewBox="0 0 680 300" aria-hidden="true">
          <line x1="64" y1="236" x2="624" y2="236" class="axis-line"></line>
          <line x1="64" y1="236" x2="64" y2="42" class="axis-line"></line>
          <path class="stieltjes-curve"></path>
          <rect class="stieltjes-interval" y="246" height="18" rx="3"></rect>
          <g class="stieltjes-ticks"></g>
          <circle class="stieltjes-point-a" r="8"></circle>
          <circle class="stieltjes-point-b" r="8"></circle>
          <text x="72" y="34" class="svg-label">F(x)</text>
          <text x="580" y="286" class="svg-label">x</text>
        </svg>
        <div class="stieltjes-stats">
          <span class="stieltjes-interval-stat"></span>
          <span class="stieltjes-mass-stat"></span>
        </div>
      </div>
      <p class="interactive-readout stieltjes-readout"></p>
    `,
    `
      <label>
        <span>${labels.start}</span>
        <input class="stieltjes-a-input" type="range" min="0" max="4" value="1">
      </label>
      <label>
        <span>${labels.width}</span>
        <input class="stieltjes-width-input" type="range" min="1" max="5" value="3">
      </label>
    `
  );

  const xs = [-2, -1, 0, 1, 2, 3];
  const values = [0, 0.15, 0.55, 1.05, 1.55, 2.25];
  const scaleX = (index) => 86 + index * 96;
  const scaleY = (value) => 236 - value * 72;
  const path = block.querySelector(".stieltjes-curve");
  const interval = block.querySelector(".stieltjes-interval");
  const ticks = block.querySelector(".stieltjes-ticks");
  const pointA = block.querySelector(".stieltjes-point-a");
  const pointB = block.querySelector(".stieltjes-point-b");
  const intervalStat = block.querySelector(".stieltjes-interval-stat");
  const massStat = block.querySelector(".stieltjes-mass-stat");
  const readout = block.querySelector(".stieltjes-readout");
  const aInput = block.querySelector(".stieltjes-a-input");
  const widthInput = block.querySelector(".stieltjes-width-input");

  path.setAttribute("d", values.map((value, index) => `${index === 0 ? "M" : "L"}${scaleX(index)},${scaleY(value)}`).join(" "));
  ticks.innerHTML = xs.map((x, index) => `
    <g>
      <line x1="${scaleX(index)}" y1="232" x2="${scaleX(index)}" y2="242" class="axis-line"></line>
      <text x="${scaleX(index) - 8}" y="260" class="svg-label">${x}</text>
    </g>
  `).join("");

  const update = () => {
    const aIndex = Number(aInput.value);
    const bIndex = Math.min(xs.length - 1, aIndex + Number(widthInput.value));
    const mass = values[bIndex] - values[aIndex];
    const x1 = scaleX(aIndex);
    const x2 = scaleX(bIndex);
    pointA.setAttribute("cx", x1);
    pointA.setAttribute("cy", scaleY(values[aIndex]));
    pointB.setAttribute("cx", x2);
    pointB.setAttribute("cy", scaleY(values[bIndex]));
    interval.setAttribute("x", x1);
    interval.setAttribute("width", Math.max(6, x2 - x1));
    intervalStat.innerHTML = `<b>${labels.interval}</b><em>(${xs[aIndex]}, ${xs[bIndex]}]</em>`;
    massStat.innerHTML = `<b>${labels.mass}</b><em>${mass.toFixed(2)}</em>`;
    readout.textContent = `chi_F((${xs[aIndex]}, ${xs[bIndex]}])=F(${xs[bIndex]})-F(${xs[aIndex]})=${mass.toFixed(2)}. ${labels.note}`;
  };

  aInput.addEventListener("input", update);
  widthInput.addEventListener("input", update);
  update();
}

function mountSigmaFiniteCover(block) {
  const labels = currentLang === "zh"
    ? {
        pieces: "有限块数量",
        slab: "块",
        local: "局部质量",
        total: "可见 cover 上的和",
        tail: "未覆盖尾部",
        note: "Sigma-finiteness 让 uniqueness 可以先在有限测度块上检查，再沿 countable cover 求和。"
      }
    : {
        pieces: "finite pieces",
        slab: "piece",
        local: "local mass",
        total: "sum on visible cover",
        tail: "uncovered tail",
        note: "Sigma-finiteness lets uniqueness be checked on finite-measure pieces, then summed over the countable cover."
      };

  setInteractiveHTML(
    block,
    `
      <div class="sigma-finite-widget" aria-label="Sigma finite cover">
        <div class="sigma-slabs"></div>
        <div class="sigma-finite-stats">
          <span class="sigma-total-stat"></span>
          <span class="sigma-tail-stat"></span>
        </div>
      </div>
      <p class="interactive-readout sigma-finite-readout"></p>
    `,
    `
      <label>
        <span>${labels.pieces}</span>
        <input class="sigma-finite-input" type="range" min="1" max="5" value="3">
      </label>
    `
  );

  const masses = [1.4, 2.1, 1.2, 1.8, 1.0];
  const ratios = [0.55, 0.35, 0.75, 0.4, 0.65];
  const input = block.querySelector(".sigma-finite-input");
  const slabs = block.querySelector(".sigma-slabs");
  const totalStat = block.querySelector(".sigma-total-stat");
  const tailStat = block.querySelector(".sigma-tail-stat");
  const readout = block.querySelector(".sigma-finite-readout");

  const update = () => {
    const count = Number(input.value);
    const visible = masses.slice(0, count);
    const localMasses = visible.map((mass, index) => mass * ratios[index]);
    const total = localMasses.reduce((sum, value) => sum + value, 0);
    const tail = masses.slice(count).reduce((sum, value) => sum + value, 0);
    slabs.innerHTML = masses.map((mass, index) => {
      const active = index < count;
      const local = mass * ratios[index];
      return `
        <span class="${active ? "active" : ""}">
          <b>${labels.slab} ${index + 1}</b>
          <em>mu(Omega_${index + 1})=${mass.toFixed(1)}</em>
          <i>${active ? `${labels.local}=${local.toFixed(2)}` : labels.tail}</i>
        </span>
      `;
    }).join("");
    totalStat.innerHTML = `<b>${labels.total}</b><em>${total.toFixed(2)}</em>`;
    tailStat.innerHTML = `<b>${labels.tail}</b><em>${tail.toFixed(2)}</em>`;
    readout.textContent = `mu(B cap (Omega_1 union ... union Omega_${count}))=${total.toFixed(2)}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountMTPSigmaFieldBuilder(block) {
  const labels = currentLang === "zh"
    ? {
        generators: "generators",
        universe: "universe atoms",
        atomCount: "atoms",
        eventCount: "generated events",
        visible: "可见 pattern",
        note: "一个 generated sigma-field 不能分开 membership pattern 完全相同的 outcomes；它的每个 event 都是 atoms 的 union。"
      }
    : {
        generators: "generators",
        universe: "universe atoms",
        atomCount: "atoms",
        eventCount: "generated events",
        visible: "visible pattern",
        note: "A generated sigma-field cannot separate outcomes with identical membership patterns; every event is a union of atoms."
      };

  setInteractiveHTML(
    block,
    `
      <div class="mtp-sigma-widget" aria-label="Generated sigma-field from atoms">
        <div class="mtp-sigma-generators"></div>
        <div class="mtp-sigma-atoms"></div>
        <div class="mtp-sigma-stats">
          <span class="mtp-sigma-atom-stat"></span>
          <span class="mtp-sigma-event-stat"></span>
        </div>
      </div>
      <p class="interactive-readout mtp-sigma-readout"></p>
    `,
    `
      <label>
        <span>${labels.generators}</span>
        <input class="mtp-sigma-input" type="range" min="1" max="3" value="2">
      </label>
    `
  );

  const points = ["w1", "w2", "w3", "w4"];
  const generators = [
    { name: "A", values: [1, 1, 0, 0] },
    { name: "B", values: [1, 0, 1, 0] },
    { name: "C", values: [1, 0, 0, 1] }
  ];
  const input = block.querySelector(".mtp-sigma-input");
  const generatorEl = block.querySelector(".mtp-sigma-generators");
  const atomsEl = block.querySelector(".mtp-sigma-atoms");
  const atomStat = block.querySelector(".mtp-sigma-atom-stat");
  const eventStat = block.querySelector(".mtp-sigma-event-stat");
  const readout = block.querySelector(".mtp-sigma-readout");

  const update = () => {
    const count = Number(input.value);
    const active = generators.slice(0, count);
    const atomMap = new Map();
    points.forEach((point, index) => {
      const signature = active.map((generator) => generator.values[index]).join("");
      if (!atomMap.has(signature)) {
        atomMap.set(signature, []);
      }
      atomMap.get(signature).push(point);
    });
    const atoms = Array.from(atomMap.entries());
    const eventCount = 2 ** atoms.length;

    generatorEl.innerHTML = active.map((generator) => {
      const members = points.filter((_, index) => generator.values[index]).join(", ");
      return `<span><b>${generator.name}</b><em>{${members}}</em></span>`;
    }).join("");
    atomsEl.innerHTML = atoms.map(([signature, members], index) => `
      <span>
        <b>atom ${index + 1}</b>
        <em>{${members.join(", ")}}</em>
        <i>${labels.visible}: ${signature}</i>
      </span>
    `).join("");
    atomStat.innerHTML = `<b>${labels.atomCount}</b><em>${atoms.length}</em>`;
    eventStat.innerHTML = `<b>${labels.eventCount}</b><em>2^${atoms.length}=${eventCount}</em>`;
    readout.textContent = `sigma(${active.map((generator) => generator.name).join(", ")}) has ${atoms.length} atoms and ${eventCount} generated events. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function mountMTPBorelCantelli(block) {
  const labels = currentLang === "zh"
    ? {
        family: "probability sequence",
        independent: "independent",
        partial: "partial sum",
        product: "tail no-hit product",
        verdict: "Borel-Cantelli",
        summable: "sum finite: BC1 gives P(limsup A_n)=0",
        divergent: "sum divergent and independent: BC2 gives P(limsup A_n)=1",
        noIndependence: "sum divergent, but without independence BC2 cannot be used",
        note: "Borel-Cantelli 把 infinitely often event 转成 probability sums 的问题。"
      }
    : {
        family: "probability sequence",
        independent: "independent",
        partial: "partial sum",
        product: "tail no-hit product",
        verdict: "Borel-Cantelli",
        summable: "sum finite: BC1 gives P(limsup A_n)=0",
        divergent: "sum divergent and independent: BC2 gives P(limsup A_n)=1",
        noIndependence: "sum divergent, but without independence BC2 cannot be used",
        note: "Borel-Cantelli turns an infinitely-often event into a question about probability sums."
      };

  setInteractiveHTML(
    block,
    `
      <div class="mtp-borel-widget" aria-label="Borel-Cantelli probability sequences">
        <div class="mtp-borel-bars"></div>
        <div class="mtp-borel-stats">
          <span class="mtp-borel-sum-stat"></span>
          <span class="mtp-borel-product-stat"></span>
          <span class="mtp-borel-verdict-stat"></span>
        </div>
      </div>
      <p class="interactive-readout mtp-borel-readout"></p>
    `,
    `
      <label>
        <span>${labels.family}</span>
        <select class="mtp-borel-family">
          <option value="harmonic">p_n=1/n</option>
          <option value="square">p_n=1/n^2</option>
          <option value="geometric">p_n=2^(-n)</option>
        </select>
      </label>
      <label>
        <span>${labels.independent}</span>
        <input class="mtp-borel-independent" type="checkbox" checked>
      </label>
    `
  );

  const familyInput = block.querySelector(".mtp-borel-family");
  const independentInput = block.querySelector(".mtp-borel-independent");
  const bars = block.querySelector(".mtp-borel-bars");
  const sumStat = block.querySelector(".mtp-borel-sum-stat");
  const productStat = block.querySelector(".mtp-borel-product-stat");
  const verdictStat = block.querySelector(".mtp-borel-verdict-stat");
  const readout = block.querySelector(".mtp-borel-readout");

  const probability = (family, n) => {
    if (family === "square") {
      return 1 / (n * n);
    }
    if (family === "geometric") {
      return 2 ** (-n);
    }
    return 1 / n;
  };

  const update = () => {
    const family = familyInput.value;
    const independent = independentInput.checked;
    const n = 20;
    const values = Array.from({ length: n }, (_, index) => probability(family, index + 1));
    const partial = values.reduce((sum, value) => sum + value, 0);
    const tailProduct = Array.from({ length: 50 }, (_, index) => probability(family, index + 21))
      .reduce((product, value) => product * (1 - value), 1);
    const summable = family !== "harmonic";
    const verdict = summable ? labels.summable : (independent ? labels.divergent : labels.noIndependence);

    bars.innerHTML = values.map((value, index) => {
      const height = 24 + Math.min(92, value * 120);
      return `<span style="height:${height.toFixed(1)}px"><b>${index + 1}</b><em>${value.toFixed(3)}</em></span>`;
    }).join("");
    sumStat.innerHTML = `<b>${labels.partial}</b><em>S_20=${partial.toFixed(3)}</em>`;
    productStat.innerHTML = `<b>${labels.product}</b><em>${tailProduct.toFixed(4)}</em>`;
    verdictStat.innerHTML = `<b>${labels.verdict}</b><em>${verdict}</em>`;
    readout.textContent = `${familyInput.options[familyInput.selectedIndex].text}: ${verdict}. ${labels.note}`;
  };

  familyInput.addEventListener("change", update);
  independentInput.addEventListener("change", update);
  update();
}

function mountItoCorrectionDemo(block) {
  const labels = currentLang === "zh"
    ? {
        time: "时间 t",
        value: "终点 W_t",
        ordinary: "普通链式法则",
        ito: "Itô 积分",
        correction: "quadratic variation 修正",
        note: "普通微积分会给 W_t^2/2；Itô 积分多出 -t/2，因为 Brownian path 的 quadratic variation 等于 t。"
      }
    : {
        time: "time t",
        value: "endpoint W_t",
        ordinary: "ordinary chain rule",
        ito: "Ito integral",
        correction: "quadratic-variation correction",
        note: "Ordinary calculus would give W_t^2/2; the Ito integral subtracts t/2 because Brownian quadratic variation is t."
      };

  setInteractiveHTML(
    block,
    `
      <div class="ito-widget" aria-label="Ito correction comparison">
        <svg class="ito-svg" viewBox="0 0 620 260" aria-hidden="true">
          <line x1="54" y1="206" x2="570" y2="206" class="axis-line"></line>
          <line x1="54" y1="226" x2="54" y2="36" class="axis-line"></line>
          <path class="ito-path" d="M54,170 C110,80 160,238 220,132 C284,26 338,220 406,104 C470,28 520,190 570,88"></path>
          <circle class="ito-endpoint" r="9"></circle>
          <text x="62" y="28" class="svg-label">W</text>
          <text x="546" y="236" class="svg-label">t</text>
        </svg>
        <div class="ito-stats">
          <span class="ito-ordinary-stat"></span>
          <span class="ito-integral-stat"></span>
          <span class="ito-correction-stat"></span>
        </div>
      </div>
      <p class="interactive-readout ito-readout"></p>
    `,
    `
      <label>
        <span>${labels.time}</span>
        <input class="ito-time-input" type="range" min="0.2" max="2" step="0.1" value="1">
      </label>
      <label>
        <span>${labels.value}</span>
        <input class="ito-value-input" type="range" min="-2" max="2" step="0.1" value="1.2">
      </label>
    `
  );

  const timeInput = block.querySelector(".ito-time-input");
  const valueInput = block.querySelector(".ito-value-input");
  const endpoint = block.querySelector(".ito-endpoint");
  const ordinaryStat = block.querySelector(".ito-ordinary-stat");
  const integralStat = block.querySelector(".ito-integral-stat");
  const correctionStat = block.querySelector(".ito-correction-stat");
  const readout = block.querySelector(".ito-readout");

  const update = () => {
    const t = Number(timeInput.value);
    const w = Number(valueInput.value);
    const ordinary = 0.5 * w * w;
    const correction = -0.5 * t;
    const ito = ordinary + correction;
    endpoint.setAttribute("cx", (54 + (t / 2) * 516).toFixed(1));
    endpoint.setAttribute("cy", (206 - w * 48).toFixed(1));
    ordinaryStat.innerHTML = `<b>${labels.ordinary}</b><em>W_t^2/2=${ordinary.toFixed(2)}</em>`;
    integralStat.innerHTML = `<b>${labels.ito}</b><em>(W_t^2-t)/2=${ito.toFixed(2)}</em>`;
    correctionStat.innerHTML = `<b>${labels.correction}</b><em>-t/2=${correction.toFixed(2)}</em>`;
    readout.textContent = `int_0^t W_u dW_u=(W_t^2-t)/2=${ito.toFixed(2)}. ${labels.note}`;
  };

  timeInput.addEventListener("input", update);
  valueInput.addEventListener("input", update);
  update();
}

function mountBlackScholesTree(block) {
  const labels = currentLang === "zh"
    ? {
        up: "up factor u",
        down: "down factor d",
        strike: "strike K",
        probability: "risk-neutral p",
        price: "call price",
        note: "Risk-neutral pricing discounts the expected payoff under p*, where the expected stock growth equals the risk-free growth."
      }
    : {
        up: "up factor u",
        down: "down factor d",
        strike: "strike K",
        probability: "risk-neutral p",
        price: "call price",
        note: "Risk-neutral pricing discounts the expected payoff under p*, where expected stock growth equals risk-free growth."
      };

  setInteractiveHTML(
    block,
    `
      <div class="bs-tree-widget" aria-label="Two-step Black-Scholes binomial tree">
        <div class="bs-tree-stage">
          <span class="bs-node bs-node-root"></span>
          <span class="bs-node bs-node-up"></span>
          <span class="bs-node bs-node-down"></span>
          <span class="bs-node bs-node-uu"></span>
          <span class="bs-node bs-node-ud"></span>
          <span class="bs-node bs-node-dd"></span>
        </div>
        <div class="bs-tree-stats">
          <span class="bs-probability-stat"></span>
          <span class="bs-price-stat"></span>
        </div>
      </div>
      <p class="interactive-readout bs-tree-readout"></p>
    `,
    `
      <label>
        <span>${labels.up}</span>
        <input class="bs-up-input" type="range" min="1.08" max="1.45" step="0.01" value="1.2">
      </label>
      <label>
        <span>${labels.down}</span>
        <input class="bs-down-input" type="range" min="0.6" max="1.0" step="0.01" value="0.85">
      </label>
      <label>
        <span>${labels.strike}</span>
        <input class="bs-strike-input" type="range" min="80" max="130" step="1" value="105">
      </label>
    `
  );

  const s0 = 100;
  const r = 1.05;
  const upInput = block.querySelector(".bs-up-input");
  const downInput = block.querySelector(".bs-down-input");
  const strikeInput = block.querySelector(".bs-strike-input");
  const nodes = {
    root: block.querySelector(".bs-node-root"),
    up: block.querySelector(".bs-node-up"),
    down: block.querySelector(".bs-node-down"),
    uu: block.querySelector(".bs-node-uu"),
    ud: block.querySelector(".bs-node-ud"),
    dd: block.querySelector(".bs-node-dd")
  };
  const probabilityStat = block.querySelector(".bs-probability-stat");
  const priceStat = block.querySelector(".bs-price-stat");
  const readout = block.querySelector(".bs-tree-readout");

  const update = () => {
    let u = Number(upInput.value);
    let d = Number(downInput.value);
    if (d >= r) {
      d = r - 0.01;
      downInput.value = d.toFixed(2);
    }
    if (u <= r) {
      u = r + 0.01;
      upInput.value = u.toFixed(2);
    }
    const k = Number(strikeInput.value);
    const p = (r - d) / (u - d);
    const prices = {
      root: s0,
      up: s0 * u,
      down: s0 * d,
      uu: s0 * u * u,
      ud: s0 * u * d,
      dd: s0 * d * d
    };
    const payoff = (price) => Math.max(price - k, 0);
    const expectedPayoff = p * p * payoff(prices.uu) + 2 * p * (1 - p) * payoff(prices.ud) + (1 - p) * (1 - p) * payoff(prices.dd);
    const callPrice = expectedPayoff / (r * r);
    Object.entries(nodes).forEach(([key, node]) => {
      node.innerHTML = `<b>${key.toUpperCase()}</b><em>S=${prices[key].toFixed(1)}</em>${key.length === 2 ? `<i>C=${payoff(prices[key]).toFixed(1)}</i>` : ""}`;
    });
    probabilityStat.innerHTML = `<b>${labels.probability}</b><em>${p.toFixed(3)}</em>`;
    priceStat.innerHTML = `<b>${labels.price}</b><em>${callPrice.toFixed(2)}</em>`;
    readout.textContent = `p*=(R-d)/(u-d)=(${r.toFixed(2)}-${d.toFixed(2)})/(${u.toFixed(2)}-${d.toFixed(2)})=${p.toFixed(3)}. ${labels.note}`;
  };

  upInput.addEventListener("input", update);
  downInput.addEventListener("input", update);
  strikeInput.addEventListener("input", update);
  update();
}

function mountFinEngReplication(block) {
  const labels = currentLang === "zh"
    ? {
        strike: "strike K",
        rate: "interest rate r",
        delta: "hedge ratio Delta",
        cash: "cash position B",
        price: "option price",
        riskNeutral: "risk-neutral p",
        note: "复制组合在 up/down 两个状态都匹配 payoff，所以 option price 必须等于这个组合的初始成本。"
      }
    : {
        strike: "strike K",
        rate: "interest rate r",
        delta: "hedge ratio Delta",
        cash: "cash position B",
        price: "option price",
        riskNeutral: "risk-neutral p",
        note: "The replicating portfolio matches the payoff in both up/down states, so the option price must equal its initial cost."
      };

  setInteractiveHTML(
    block,
    `
      <div class="fineng-replication-widget" aria-label="One-period option replication">
        <div class="fineng-tree">
          <span class="fineng-node fineng-root"></span>
          <span class="fineng-node fineng-up"></span>
          <span class="fineng-node fineng-down"></span>
        </div>
        <div class="fineng-stats">
          <span class="fineng-delta-stat"></span>
          <span class="fineng-cash-stat"></span>
          <span class="fineng-price-stat"></span>
          <span class="fineng-risk-stat"></span>
        </div>
      </div>
      <p class="interactive-readout fineng-replication-readout"></p>
    `,
    `
      <label>
        <span>${labels.strike}</span>
        <input class="fineng-strike-input" type="range" min="3" max="8" step="0.25" value="5">
      </label>
      <label>
        <span>${labels.rate}</span>
        <input class="fineng-rate-input" type="range" min="0.02" max="0.50" step="0.01" value="0.25">
      </label>
    `
  );

  const s0 = 4;
  const u = 2;
  const d = 0.5;
  const strikeInput = block.querySelector(".fineng-strike-input");
  const rateInput = block.querySelector(".fineng-rate-input");
  const rootNode = block.querySelector(".fineng-root");
  const upNode = block.querySelector(".fineng-up");
  const downNode = block.querySelector(".fineng-down");
  const deltaStat = block.querySelector(".fineng-delta-stat");
  const cashStat = block.querySelector(".fineng-cash-stat");
  const priceStat = block.querySelector(".fineng-price-stat");
  const riskStat = block.querySelector(".fineng-risk-stat");
  const readout = block.querySelector(".fineng-replication-readout");
  const payoff = (s, k) => Math.max(s - k, 0);

  const update = () => {
    const k = Number(strikeInput.value);
    const r = Number(rateInput.value);
    const su = s0 * u;
    const sd = s0 * d;
    const vu = payoff(su, k);
    const vd = payoff(sd, k);
    const delta = (vu - vd) / (s0 * (u - d));
    const cash = (u * vd - d * vu) / ((u - d) * (1 + r));
    const price = delta * s0 + cash;
    const p = (1 + r - d) / (u - d);
    const rnPrice = (p * vu + (1 - p) * vd) / (1 + r);
    rootNode.innerHTML = `<b>S0</b><em>${s0.toFixed(2)}</em><i>V0=${price.toFixed(2)}</i>`;
    upNode.innerHTML = `<b>up</b><em>S=${su.toFixed(2)}</em><i>payoff=${vu.toFixed(2)}</i>`;
    downNode.innerHTML = `<b>down</b><em>S=${sd.toFixed(2)}</em><i>payoff=${vd.toFixed(2)}</i>`;
    deltaStat.innerHTML = `<b>${labels.delta}</b><em>${delta.toFixed(3)}</em>`;
    cashStat.innerHTML = `<b>${labels.cash}</b><em>${cash.toFixed(3)}</em>`;
    priceStat.innerHTML = `<b>${labels.price}</b><em>${price.toFixed(3)}</em>`;
    riskStat.innerHTML = `<b>${labels.riskNeutral}</b><em>${p.toFixed(3)}</em>`;
    readout.textContent = `Delta=${delta.toFixed(3)}, B=${cash.toFixed(3)}, V0=${price.toFixed(3)}, discounted expectation=${rnPrice.toFixed(3)}. ${labels.note}`;
  };

  strikeInput.addEventListener("input", update);
  rateInput.addEventListener("input", update);
  update();
}

function mountFinEngAmericanOption(block) {
  const labels = currentLang === "zh"
    ? {
        strike: "put strike K",
        exercise: "exercise",
        continue: "continue",
        value: "value",
        root: "root price",
        note: "American option 的每个 node 都比较 immediate exercise 和 continuation value；选择较大的那个。"
      }
    : {
        strike: "put strike K",
        exercise: "exercise",
        continue: "continue",
        value: "value",
        root: "root price",
        note: "Every American-option node compares immediate exercise against continuation value and keeps the larger one."
      };

  setInteractiveHTML(
    block,
    `
      <div class="fineng-american-widget" aria-label="Two-step American option stopping">
        <div class="fineng-american-tree">
          <span class="fineng-node fineng-am-root"></span>
          <span class="fineng-node fineng-am-up"></span>
          <span class="fineng-node fineng-am-down"></span>
          <span class="fineng-node fineng-am-uu"></span>
          <span class="fineng-node fineng-am-ud"></span>
          <span class="fineng-node fineng-am-dd"></span>
        </div>
        <div class="fineng-stats">
          <span class="fineng-am-root-stat"></span>
          <span class="fineng-am-decision-stat"></span>
        </div>
      </div>
      <p class="interactive-readout fineng-american-readout"></p>
    `,
    `
      <label>
        <span>${labels.strike}</span>
        <input class="fineng-am-strike-input" type="range" min="2" max="8" step="0.25" value="5">
      </label>
    `
  );

  const s0 = 4;
  const u = 2;
  const d = 0.5;
  const r = 0.25;
  const p = (1 + r - d) / (u - d);
  const input = block.querySelector(".fineng-am-strike-input");
  const nodes = {
    root: block.querySelector(".fineng-am-root"),
    up: block.querySelector(".fineng-am-up"),
    down: block.querySelector(".fineng-am-down"),
    uu: block.querySelector(".fineng-am-uu"),
    ud: block.querySelector(".fineng-am-ud"),
    dd: block.querySelector(".fineng-am-dd")
  };
  const rootStat = block.querySelector(".fineng-am-root-stat");
  const decisionStat = block.querySelector(".fineng-am-decision-stat");
  const readout = block.querySelector(".fineng-american-readout");
  const put = (s, k) => Math.max(k - s, 0);

  const choose = (stock, continuation, k) => {
    const exercise = put(stock, k);
    const value = Math.max(exercise, continuation);
    return { exercise, continuation, value, decision: exercise >= continuation ? labels.exercise : labels.continue };
  };

  const renderNode = (node, title, stock, value, decision = "") => {
    node.innerHTML = `<b>${title}</b><em>S=${stock.toFixed(2)}</em><i>V=${value.toFixed(2)}${decision ? `, ${decision}` : ""}</i>`;
    node.classList.toggle("exercise-node", decision === labels.exercise);
  };

  const update = () => {
    const k = Number(input.value);
    const prices = {
      root: s0,
      up: s0 * u,
      down: s0 * d,
      uu: s0 * u * u,
      ud: s0 * u * d,
      dd: s0 * d * d
    };
    const terminal = {
      uu: put(prices.uu, k),
      ud: put(prices.ud, k),
      dd: put(prices.dd, k)
    };
    const upContinuation = (p * terminal.uu + (1 - p) * terminal.ud) / (1 + r);
    const downContinuation = (p * terminal.ud + (1 - p) * terminal.dd) / (1 + r);
    const up = choose(prices.up, upContinuation, k);
    const down = choose(prices.down, downContinuation, k);
    const rootContinuation = (p * up.value + (1 - p) * down.value) / (1 + r);
    const root = choose(prices.root, rootContinuation, k);

    renderNode(nodes.root, "S0", prices.root, root.value, root.decision);
    renderNode(nodes.up, "up", prices.up, up.value, up.decision);
    renderNode(nodes.down, "down", prices.down, down.value, down.decision);
    renderNode(nodes.uu, "uu", prices.uu, terminal.uu);
    renderNode(nodes.ud, "ud", prices.ud, terminal.ud);
    renderNode(nodes.dd, "dd", prices.dd, terminal.dd);
    rootStat.innerHTML = `<b>${labels.root}</b><em>${root.value.toFixed(3)}</em>`;
    decisionStat.innerHTML = `<b>${labels.value}</b><em>${labels.exercise}=${root.exercise.toFixed(2)}, ${labels.continue}=${root.continuation.toFixed(2)}</em>`;
    readout.textContent = `K=${k.toFixed(2)}, p*=${p.toFixed(3)}. Root chooses ${root.decision}; down node chooses ${down.decision}. ${labels.note}`;
  };

  input.addEventListener("input", update);
  update();
}

function math622NormCdf(x) {
  const sign = x < 0 ? -1 : 1;
  const z = Math.abs(x) / Math.sqrt(2);
  const t = 1 / (1 + 0.3275911 * z);
  const erf = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
  return 0.5 * (1 + sign * erf);
}

function math622BlackScholesCall(s0, k, r, sigma, t) {
  const sqrtT = Math.sqrt(t);
  const d1 = (Math.log(s0 / k) + (r + 0.5 * sigma * sigma) * t) / (sigma * sqrtT);
  const d2 = d1 - sigma * sqrtT;
  return s0 * math622NormCdf(d1) - k * Math.exp(-r * t) * math622NormCdf(d2);
}

function mountMath622BinomialRiskNeutral(block) {
  const labels = currentLang === "zh"
    ? {
        sigma: "volatility sigma",
        steps: "tree steps n",
        strike: "strike K",
        price: "tree price",
        bs: "Black-Scholes",
        q: "risk-neutral q",
        gap: "gap",
        note: "当 n 变大时，tree 的 log-return 分布越来越接近 Brownian motion，价格也靠近连续模型。"
      }
    : {
        sigma: "volatility sigma",
        steps: "tree steps n",
        strike: "strike K",
        price: "tree price",
        bs: "Black-Scholes",
        q: "risk-neutral q",
        gap: "gap",
        note: "As n grows, the tree log-return distribution looks more Brownian and the price moves toward the continuous model."
      };

  setInteractiveHTML(
    block,
    `
      <div class="math622-binomial-widget" aria-label="Binomial convergence to Black-Scholes">
        <svg class="interactive-svg math622-binomial-svg" viewBox="0 0 720 320" aria-hidden="true">
          <line x1="70" y1="265" x2="660" y2="265" class="axis-line"></line>
          <line x1="70" y1="40" x2="70" y2="265" class="axis-line"></line>
          <text x="70" y="292" class="svg-label">terminal stock distribution</text>
          <text x="520" y="58" class="svg-label math622-binomial-label"></text>
          <g class="math622-binomial-dots"></g>
          <line class="math622-strike-line" x1="360" x2="360" y1="48" y2="265"></line>
        </svg>
        <div class="math622-stats">
          <span class="math622-binomial-u"></span>
          <span class="math622-binomial-q"></span>
          <span class="math622-binomial-price"></span>
          <span class="math622-binomial-gap"></span>
        </div>
      </div>
      <p class="interactive-readout math622-binomial-readout"></p>
    `,
    `
      <label>
        <span>${labels.sigma}</span>
        <input class="math622-binomial-sigma" type="range" min="0.10" max="0.75" step="0.01" value="0.28">
      </label>
      <label>
        <span>${labels.steps}</span>
        <input class="math622-binomial-steps" type="range" min="1" max="80" step="1" value="12">
      </label>
      <label>
        <span>${labels.strike}</span>
        <input class="math622-binomial-strike" type="range" min="70" max="130" step="1" value="100">
      </label>
    `
  );

  const s0 = 100;
  const r = 0.04;
  const t = 1;
  const sigmaInput = block.querySelector(".math622-binomial-sigma");
  const stepsInput = block.querySelector(".math622-binomial-steps");
  const strikeInput = block.querySelector(".math622-binomial-strike");
  const dots = block.querySelector(".math622-binomial-dots");
  const strikeLine = block.querySelector(".math622-strike-line");
  const label = block.querySelector(".math622-binomial-label");
  const uStat = block.querySelector(".math622-binomial-u");
  const qStat = block.querySelector(".math622-binomial-q");
  const priceStat = block.querySelector(".math622-binomial-price");
  const gapStat = block.querySelector(".math622-binomial-gap");
  const readout = block.querySelector(".math622-binomial-readout");

  const priceTree = (n, sigma, k) => {
    const dt = t / n;
    const u = Math.exp(sigma * Math.sqrt(dt));
    const d = 1 / u;
    const q = (Math.exp(r * dt) - d) / (u - d);
    let values = Array.from({ length: n + 1 }, (_, j) => Math.max(s0 * (u ** j) * (d ** (n - j)) - k, 0));
    for (let step = n - 1; step >= 0; step -= 1) {
      values = Array.from({ length: step + 1 }, (_, j) => Math.exp(-r * dt) * (q * values[j + 1] + (1 - q) * values[j]));
    }
    return { price: values[0], u, d, q };
  };

  const update = () => {
    const sigma = Number(sigmaInput.value);
    const n = Number(stepsInput.value);
    const k = Number(strikeInput.value);
    const { price, u, d, q } = priceTree(n, sigma, k);
    const bs = math622BlackScholesCall(s0, k, r, sigma, t);
    const gap = price - bs;
    const dt = t / n;
    const xMin = s0 * d ** n;
    const xMax = s0 * u ** n;
    const toX = (stock) => 70 + ((stock - xMin) / Math.max(1, xMax - xMin)) * 590;
    const toY = (prob) => 265 - Math.min(1, prob * Math.sqrt(n + 1) * 2.2) * 190;
    const maxDots = 41;
    const skip = Math.max(1, Math.ceil((n + 1) / maxDots));
    let probability = (1 - q) ** n;
    const circles = [];
    for (let j = 0; j <= n; j += 1) {
      if (j % skip === 0 || j === n) {
        const stock = s0 * u ** j * d ** (n - j);
        const radius = 3 + Math.min(11, probability * Math.sqrt(n + 1) * 32);
        circles.push(`<circle cx="${toX(stock).toFixed(1)}" cy="${toY(probability).toFixed(1)}" r="${radius.toFixed(1)}" class="math622-prob-dot"></circle>`);
      }
      if (j < n) {
        probability *= ((n - j) / (j + 1)) * (q / (1 - q));
      }
    }
    dots.innerHTML = circles.join("");
    const strikeX = Math.max(70, Math.min(660, toX(k)));
    strikeLine.setAttribute("x1", strikeX);
    strikeLine.setAttribute("x2", strikeX);
    label.textContent = `${labels.strike}: ${k.toFixed(0)}`;
    uStat.innerHTML = `<b>u / d</b><em>${u.toFixed(4)} / ${d.toFixed(4)}</em>`;
    qStat.innerHTML = `<b>${labels.q}</b><em>${q.toFixed(4)}</em>`;
    priceStat.innerHTML = `<b>${labels.price}</b><em>${price.toFixed(4)}</em><i>${labels.bs}: ${bs.toFixed(4)}</i>`;
    gapStat.innerHTML = `<b>${labels.gap}</b><em>${gap >= 0 ? "+" : ""}${gap.toFixed(4)}</em><i>dt=${dt.toFixed(4)}</i>`;
    readout.textContent = `n=${n}, sigma=${sigma.toFixed(2)}, q=${q.toFixed(4)}, tree=${price.toFixed(4)}, BS=${bs.toFixed(4)}. ${labels.note}`;
  };

  sigmaInput.addEventListener("input", update);
  stepsInput.addEventListener("input", update);
  strikeInput.addEventListener("input", update);
  update();
}

function mountMath622GirsanovShift(block) {
  const labels = currentLang === "zh"
    ? {
        mu: "physical drift mu",
        rate: "risk-free rate r",
        sigma: "volatility sigma",
        theta: "market price of risk theta",
        physical: "physical expected path",
        neutral: "risk-neutral expected path",
        density: "density",
        note: "Girsanov 不改变路径空间；它改变路径权重，使 discounted stock 的 drift 从 mu 变成 r。"
      }
    : {
        mu: "physical drift mu",
        rate: "risk-free rate r",
        sigma: "volatility sigma",
        theta: "market price of risk theta",
        physical: "physical expected path",
        neutral: "risk-neutral expected path",
        density: "density",
        note: "Girsanov does not change the path space; it changes path weights so discounted stock drift moves from mu to r."
      };

  setInteractiveHTML(
    block,
    `
      <div class="math622-girsanov-widget" aria-label="Girsanov drift shift">
        <svg class="interactive-svg math622-girsanov-svg" viewBox="0 0 720 320" aria-hidden="true">
          <line x1="70" y1="260" x2="660" y2="260" class="axis-line"></line>
          <line x1="70" y1="50" x2="70" y2="260" class="axis-line"></line>
          <path class="math622-physical-path"></path>
          <path class="math622-neutral-path"></path>
          <text x="82" y="76" class="svg-label math622-physical-label"></text>
          <text x="82" y="100" class="svg-label math622-neutral-label"></text>
        </svg>
        <div class="math622-stats">
          <span class="math622-theta-stat"></span>
          <span class="math622-density-stat"></span>
          <span class="math622-martingale-stat"></span>
        </div>
      </div>
      <p class="interactive-readout math622-girsanov-readout"></p>
    `,
    `
      <label>
        <span>${labels.mu}</span>
        <input class="math622-mu-input" type="range" min="-0.05" max="0.18" step="0.005" value="0.10">
      </label>
      <label>
        <span>${labels.rate}</span>
        <input class="math622-rate-input" type="range" min="0.00" max="0.10" step="0.005" value="0.04">
      </label>
      <label>
        <span>${labels.sigma}</span>
        <input class="math622-girsanov-sigma-input" type="range" min="0.10" max="0.70" step="0.01" value="0.28">
      </label>
    `
  );

  const s0 = 100;
  const muInput = block.querySelector(".math622-mu-input");
  const rateInput = block.querySelector(".math622-rate-input");
  const sigmaInput = block.querySelector(".math622-girsanov-sigma-input");
  const physicalPath = block.querySelector(".math622-physical-path");
  const neutralPath = block.querySelector(".math622-neutral-path");
  const physicalLabel = block.querySelector(".math622-physical-label");
  const neutralLabel = block.querySelector(".math622-neutral-label");
  const thetaStat = block.querySelector(".math622-theta-stat");
  const densityStat = block.querySelector(".math622-density-stat");
  const martingaleStat = block.querySelector(".math622-martingale-stat");
  const readout = block.querySelector(".math622-girsanov-readout");

  const update = () => {
    const mu = Number(muInput.value);
    const r = Number(rateInput.value);
    const sigma = Number(sigmaInput.value);
    const theta = (mu - r) / sigma;
    const values = [];
    for (let i = 0; i <= 80; i += 1) {
      const time = i / 80;
      const wiggle = Math.sin(time * Math.PI * 3) * sigma * 4 + Math.sin(time * Math.PI * 7) * sigma * 1.5;
      const physical = s0 * Math.exp(mu * time) + wiggle;
      const neutral = s0 * Math.exp(r * time) + wiggle;
      values.push({ time, physical, neutral });
    }
    const minY = Math.min(...values.flatMap((v) => [v.physical, v.neutral])) - 4;
    const maxY = Math.max(...values.flatMap((v) => [v.physical, v.neutral])) + 4;
    const toX = (time) => 70 + time * 590;
    const toY = (value) => 260 - ((value - minY) / Math.max(1, maxY - minY)) * 205;
    const toPath = (key) => values.map((v, i) => `${i ? "L" : "M"}${toX(v.time).toFixed(1)},${toY(v[key]).toFixed(1)}`).join(" ");
    physicalPath.setAttribute("d", toPath("physical"));
    neutralPath.setAttribute("d", toPath("neutral"));
    physicalLabel.textContent = `${labels.physical}: ${values.at(-1).physical.toFixed(2)}`;
    neutralLabel.textContent = `${labels.neutral}: ${values.at(-1).neutral.toFixed(2)}`;
    thetaStat.innerHTML = `<b>${labels.theta}</b><em>${theta.toFixed(3)}</em>`;
    densityStat.innerHTML = `<b>${labels.density}</b><em>Z_T=exp(-theta W_T-theta^2T/2)</em>`;
    martingaleStat.innerHTML = `<b>discounted drift</b><em>${(r - r).toFixed(3)}</em><i>under Q</i>`;
    readout.textContent = `mu=${mu.toFixed(3)}, r=${r.toFixed(3)}, sigma=${sigma.toFixed(2)}, theta=${theta.toFixed(3)}. ${labels.note}`;
  };

  muInput.addEventListener("input", update);
  rateInput.addEventListener("input", update);
  sigmaInput.addEventListener("input", update);
  update();
}

function mountMath622BarrierReflection(block) {
  const labels = currentLang === "zh"
    ? {
        barrier: "barrier L",
        strike: "strike K",
        terminal: "terminal S_T",
        standard: "vanilla call",
        out: "up-and-out",
        in: "up-and-in",
        max: "path max",
        note: "Knock-out 和 knock-in 加起来等于 vanilla call；reflection 把 hitting barrier 的路径镜像成普通 Brownian paths。"
      }
    : {
        barrier: "barrier L",
        strike: "strike K",
        terminal: "terminal S_T",
        standard: "vanilla call",
        out: "up-and-out",
        in: "up-and-in",
        max: "path max",
        note: "Knock-out plus knock-in equals the vanilla call; reflection mirrors barrier-hitting paths into ordinary Brownian paths."
      };

  setInteractiveHTML(
    block,
    `
      <div class="math622-barrier-widget" aria-label="Barrier payoff and reflection path">
        <svg class="interactive-svg math622-barrier-svg" viewBox="0 0 720 340" aria-hidden="true">
          <line x1="70" y1="285" x2="660" y2="285" class="axis-line"></line>
          <line x1="70" y1="42" x2="70" y2="285" class="axis-line"></line>
          <line class="math622-barrier-line" x1="70" x2="660" y1="100" y2="100"></line>
          <path class="math622-barrier-path"></path>
          <path class="math622-reflected-path"></path>
          <circle class="math622-hit-dot" r="6"></circle>
          <text x="82" y="60" class="svg-label math622-barrier-label"></text>
          <text x="82" y="83" class="svg-label math622-hit-label"></text>
        </svg>
        <div class="math622-stats">
          <span class="math622-barrier-max"></span>
          <span class="math622-barrier-call"></span>
          <span class="math622-barrier-out"></span>
          <span class="math622-barrier-in"></span>
        </div>
      </div>
      <p class="interactive-readout math622-barrier-readout"></p>
    `,
    `
      <label>
        <span>${labels.barrier}</span>
        <input class="math622-barrier-input" type="range" min="108" max="150" step="1" value="124">
      </label>
      <label>
        <span>${labels.strike}</span>
        <input class="math622-barrier-strike-input" type="range" min="80" max="130" step="1" value="100">
      </label>
      <label>
        <span>${labels.terminal}</span>
        <input class="math622-barrier-terminal-input" type="range" min="75" max="155" step="1" value="116">
      </label>
    `
  );

  const s0 = 100;
  const barrierInput = block.querySelector(".math622-barrier-input");
  const strikeInput = block.querySelector(".math622-barrier-strike-input");
  const terminalInput = block.querySelector(".math622-barrier-terminal-input");
  const barrierLine = block.querySelector(".math622-barrier-line");
  const barrierPath = block.querySelector(".math622-barrier-path");
  const reflectedPath = block.querySelector(".math622-reflected-path");
  const hitDot = block.querySelector(".math622-hit-dot");
  const barrierLabel = block.querySelector(".math622-barrier-label");
  const hitLabel = block.querySelector(".math622-hit-label");
  const maxStat = block.querySelector(".math622-barrier-max");
  const callStat = block.querySelector(".math622-barrier-call");
  const outStat = block.querySelector(".math622-barrier-out");
  const inStat = block.querySelector(".math622-barrier-in");
  const readout = block.querySelector(".math622-barrier-readout");

  const update = () => {
    const barrier = Number(barrierInput.value);
    const strike = Number(strikeInput.value);
    const terminal = Number(terminalInput.value);
    const shape = [100, 104, 109, 117, 121, 118, 126, 119, 113, terminal];
    const yMin = 72;
    const yMax = Math.max(160, barrier + 8, terminal + 8, ...shape);
    const toX = (i) => 70 + (i / (shape.length - 1)) * 590;
    const toY = (value) => 285 - ((value - yMin) / (yMax - yMin)) * 235;
    const maxValue = Math.max(...shape);
    const hitIndex = shape.findIndex((value) => value >= barrier);
    const hit = hitIndex >= 0;
    const call = Math.max(terminal - strike, 0);
    const upOut = hit ? 0 : call;
    const upIn = hit ? call : 0;
    const path = shape.map((value, i) => `${i ? "L" : "M"}${toX(i).toFixed(1)},${toY(value).toFixed(1)}`).join(" ");
    barrierPath.setAttribute("d", path);
    const reflected = shape.map((value, i) => {
      if (!hit || i < hitIndex) return value;
      return 2 * barrier - value;
    });
    reflectedPath.setAttribute("d", hit ? reflected.map((value, i) => `${i ? "L" : "M"}${toX(i).toFixed(1)},${toY(value).toFixed(1)}`).join(" ") : "");
    const barrierY = toY(barrier);
    barrierLine.setAttribute("y1", barrierY);
    barrierLine.setAttribute("y2", barrierY);
    hitDot.setAttribute("cx", hit ? toX(hitIndex) : -20);
    hitDot.setAttribute("cy", hit ? toY(shape[hitIndex]) : -20);
    barrierLabel.textContent = `${labels.barrier}: ${barrier.toFixed(0)}`;
    hitLabel.textContent = hit ? `hit at step ${hitIndex}` : "not hit";
    maxStat.innerHTML = `<b>${labels.max}</b><em>${maxValue.toFixed(2)}</em>`;
    callStat.innerHTML = `<b>${labels.standard}</b><em>${call.toFixed(2)}</em>`;
    outStat.innerHTML = `<b>${labels.out}</b><em>${upOut.toFixed(2)}</em>`;
    inStat.innerHTML = `<b>${labels.in}</b><em>${upIn.toFixed(2)}</em>`;
    readout.textContent = `max=${maxValue.toFixed(2)}, K=${strike.toFixed(0)}, L=${barrier.toFixed(0)}, vanilla=${call.toFixed(2)}, out+in=${(upOut + upIn).toFixed(2)}. ${labels.note}`;
  };

  barrierInput.addEventListener("input", update);
  strikeInput.addEventListener("input", update);
  terminalInput.addEventListener("input", update);
  update();
}

function math485NormPdf(x) {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function math485BlackScholesGreeks(s, k, r, sigma, t) {
  const sqrtT = Math.sqrt(Math.max(0.001, t));
  const d1 = (Math.log(s / k) + (r + 0.5 * sigma * sigma) * t) / (sigma * sqrtT);
  const d2 = d1 - sigma * sqrtT;
  const pdf = math485NormPdf(d1);
  const price = s * math622NormCdf(d1) - k * Math.exp(-r * t) * math622NormCdf(d2);
  const delta = math622NormCdf(d1);
  const gamma = pdf / (s * sigma * sqrtT);
  const vega = s * pdf * sqrtT;
  const theta = -(s * pdf * sigma) / (2 * sqrtT) - r * k * Math.exp(-r * t) * math622NormCdf(d2);
  const rho = k * t * Math.exp(-r * t) * math622NormCdf(d2);
  return { d1, d2, price, delta, gamma, vega, theta, rho };
}

function mountMath485GreeksHedge(block) {
  const labels = currentLang === "zh"
    ? {
        stock: "stock price S",
        sigma: "volatility sigma",
        tau: "time to expiry T",
        price: "call price",
        intrinsic: "intrinsic",
        delta: "Delta",
        gamma: "Gamma",
        vega: "Vega per 1%",
        theta: "Theta / year",
        hedge: "hedge residual",
        note: "Delta 是 pricing curve 的切线斜率；Gamma 是曲率，所以大行情后 delta-neutral portfolio 仍会留下二阶残差。"
      }
    : {
        stock: "stock price S",
        sigma: "volatility sigma",
        tau: "time to expiry T",
        price: "call price",
        intrinsic: "intrinsic",
        delta: "Delta",
        gamma: "Gamma",
        vega: "Vega per 1%",
        theta: "Theta / year",
        hedge: "hedge residual",
        note: "Delta is the tangent slope of the pricing curve; gamma is curvature, so a delta-neutral portfolio still has second-order residual after a large move."
      };

  setInteractiveHTML(
    block,
    `
      <div class="math485-greeks-widget" aria-label="Black-Scholes Greeks and delta hedge">
        <svg class="interactive-svg math485-greeks-svg" viewBox="0 0 720 340" aria-hidden="true">
          <line x1="70" y1="286" x2="660" y2="286" class="axis-line"></line>
          <line x1="70" y1="44" x2="70" y2="286" class="axis-line"></line>
          <line class="math485-strike-line" x1="360" x2="360" y1="54" y2="286"></line>
          <path class="math485-payoff-path"></path>
          <path class="math485-price-path"></path>
          <path class="math485-tangent-path"></path>
          <circle class="math485-current-dot" r="6"></circle>
          <text x="82" y="66" class="svg-label math485-curve-label"></text>
          <text x="82" y="90" class="svg-label math485-tangent-label"></text>
        </svg>
        <div class="math485-greeks-stats">
          <span class="math485-price-stat"></span>
          <span class="math485-delta-stat"></span>
          <span class="math485-gamma-stat"></span>
          <span class="math485-vega-stat"></span>
          <span class="math485-hedge-stat"></span>
        </div>
      </div>
      <p class="interactive-readout math485-greeks-readout"></p>
    `,
    `
      <label>
        <span>${labels.stock}</span>
        <input class="math485-stock-input" type="range" min="55" max="155" step="1" value="100">
      </label>
      <label>
        <span>${labels.sigma}</span>
        <input class="math485-sigma-input" type="range" min="0.10" max="0.75" step="0.01" value="0.30">
      </label>
      <label>
        <span>${labels.tau}</span>
        <input class="math485-tau-input" type="range" min="0.05" max="2.00" step="0.05" value="0.75">
      </label>
    `
  );

  const k = 100;
  const r = 0.04;
  const shock = 8;
  const stockInput = block.querySelector(".math485-stock-input");
  const sigmaInput = block.querySelector(".math485-sigma-input");
  const tauInput = block.querySelector(".math485-tau-input");
  const pricePath = block.querySelector(".math485-price-path");
  const payoffPath = block.querySelector(".math485-payoff-path");
  const tangentPath = block.querySelector(".math485-tangent-path");
  const currentDot = block.querySelector(".math485-current-dot");
  const strikeLine = block.querySelector(".math485-strike-line");
  const curveLabel = block.querySelector(".math485-curve-label");
  const tangentLabel = block.querySelector(".math485-tangent-label");
  const priceStat = block.querySelector(".math485-price-stat");
  const deltaStat = block.querySelector(".math485-delta-stat");
  const gammaStat = block.querySelector(".math485-gamma-stat");
  const vegaStat = block.querySelector(".math485-vega-stat");
  const hedgeStat = block.querySelector(".math485-hedge-stat");
  const readout = block.querySelector(".math485-greeks-readout");

  const xMin = 50;
  const xMax = 165;
  const toX = (stock) => 70 + ((stock - xMin) / (xMax - xMin)) * 590;

  const update = () => {
    const s = Number(stockInput.value);
    const sigma = Number(sigmaInput.value);
    const t = Number(tauInput.value);
    const greek = math485BlackScholesGreeks(s, k, r, sigma, t);
    const samples = Array.from({ length: 80 }, (_, i) => {
      const stock = xMin + (i / 79) * (xMax - xMin);
      const value = math485BlackScholesGreeks(stock, k, r, sigma, t).price;
      const payoff = Math.max(stock - k, 0);
      const tangent = greek.price + greek.delta * (stock - s);
      return { stock, value, payoff, tangent };
    });
    const yMin = Math.min(-8, ...samples.map((point) => point.tangent)) - 3;
    const yMax = Math.max(35, ...samples.flatMap((point) => [point.value, point.payoff, point.tangent])) + 5;
    const toY = (value) => 286 - ((value - yMin) / Math.max(1, yMax - yMin)) * 232;
    const toPath = (key) => samples.map((point, index) => `${index ? "L" : "M"}${toX(point.stock).toFixed(1)},${toY(point[key]).toFixed(1)}`).join(" ");
    pricePath.setAttribute("d", toPath("value"));
    payoffPath.setAttribute("d", toPath("payoff"));
    tangentPath.setAttribute("d", toPath("tangent"));
    currentDot.setAttribute("cx", toX(s).toFixed(1));
    currentDot.setAttribute("cy", toY(greek.price).toFixed(1));
    const strikeX = toX(k).toFixed(1);
    strikeLine.setAttribute("x1", strikeX);
    strikeLine.setAttribute("x2", strikeX);
    const up = Math.min(xMax, s + shock);
    const down = Math.max(xMin, s - shock);
    const upValue = math485BlackScholesGreeks(up, k, r, sigma, t).price;
    const downValue = math485BlackScholesGreeks(down, k, r, sigma, t).price;
    const upResidual = upValue - greek.price - greek.delta * (up - s);
    const downResidual = downValue - greek.price - greek.delta * (down - s);
    const intrinsic = Math.max(s - k, 0);
    curveLabel.textContent = `${labels.price}: ${greek.price.toFixed(2)}, K=${k}`;
    tangentLabel.textContent = `${labels.delta}: ${greek.delta.toFixed(3)}, d1=${greek.d1.toFixed(2)}, d2=${greek.d2.toFixed(2)}`;
    priceStat.innerHTML = `<b>${labels.price}</b><em>${greek.price.toFixed(3)}</em><i>${labels.intrinsic}: ${intrinsic.toFixed(3)}</i>`;
    deltaStat.innerHTML = `<b>${labels.delta}</b><em>${greek.delta.toFixed(4)}</em><i>theta: ${greek.theta.toFixed(3)}</i>`;
    gammaStat.innerHTML = `<b>${labels.gamma}</b><em>${greek.gamma.toFixed(5)}</em><i>rho: ${greek.rho.toFixed(3)}</i>`;
    vegaStat.innerHTML = `<b>${labels.vega}</b><em>${(greek.vega / 100).toFixed(4)}</em><i>sigma=${sigma.toFixed(2)}</i>`;
    hedgeStat.innerHTML = `<b>${labels.hedge}</b><em>+${shock}: ${upResidual.toFixed(3)}</em><i>-${shock}: ${downResidual.toFixed(3)}</i>`;
    readout.textContent = `S=${s.toFixed(0)}, T=${t.toFixed(2)}, sigma=${sigma.toFixed(2)}, Delta=${greek.delta.toFixed(3)}, Gamma=${greek.gamma.toFixed(5)}, Vega/1%=${(greek.vega / 100).toFixed(4)}. ${labels.note}`;
  };

  stockInput.addEventListener("input", update);
  sigmaInput.addEventListener("input", update);
  tauInput.addEventListener("input", update);
  update();
}

function mountOTDualFeasibility(block) {
  const labels = currentLang === "zh"
    ? {
        source: "source potential tilt",
        target: "target potential tilt",
        slack: "slack",
        objective: "dual objective",
        status: "feasibility",
        feasible: "feasible",
        infeasible: "violates u_i+v_j<=C_ij",
        note: "Dual potentials 是 lower-bound certificate；所有 slack 非负时，dual objective 不会超过任何 feasible transport cost。"
      }
    : {
        source: "source potential tilt",
        target: "target potential tilt",
        slack: "slack",
        objective: "dual objective",
        status: "feasibility",
        feasible: "feasible",
        infeasible: "violates u_i+v_j<=C_ij",
        note: "Dual potentials are lower-bound certificates; when every slack is nonnegative, the dual objective cannot exceed any feasible transport cost."
      };

  setInteractiveHTML(
    block,
    `
      <div class="ot-dual-widget" aria-label="Kantorovich dual feasibility">
        <div class="ot-dual-grid"></div>
        <div class="ot-dual-stats">
          <span class="ot-dual-objective"></span>
          <span class="ot-dual-status"></span>
        </div>
      </div>
      <p class="interactive-readout ot-dual-readout"></p>
    `,
    `
      <label>
        <span>${labels.source}</span>
        <input class="ot-source-tilt-input" type="range" min="-0.8" max="0.8" step="0.05" value="0.10">
      </label>
      <label>
        <span>${labels.target}</span>
        <input class="ot-target-tilt-input" type="range" min="-0.8" max="0.8" step="0.05" value="-0.10">
      </label>
    `
  );

  const costs = [
    [0.8, 2.4],
    [1.7, 0.9]
  ];
  const a = [0.55, 0.45];
  const b = [0.50, 0.50];
  const sourceInput = block.querySelector(".ot-source-tilt-input");
  const targetInput = block.querySelector(".ot-target-tilt-input");
  const grid = block.querySelector(".ot-dual-grid");
  const objective = block.querySelector(".ot-dual-objective");
  const status = block.querySelector(".ot-dual-status");
  const readout = block.querySelector(".ot-dual-readout");

  const update = () => {
    const sourceTilt = Number(sourceInput.value);
    const targetTilt = Number(targetInput.value);
    const u = [0.38 + sourceTilt, 0.22 - sourceTilt];
    const v = [0.24 + targetTilt, 0.18 - targetTilt];
    const slacks = costs.map((row, i) => row.map((cost, j) => cost - u[i] - v[j]));
    const minSlack = Math.min(...slacks.flat());
    const dualValue = a[0] * u[0] + a[1] * u[1] + b[0] * v[0] + b[1] * v[1];

    grid.innerHTML = costs.map((row, i) => row.map((cost, j) => {
      const slack = slacks[i][j];
      return `
        <span class="${slack < -0.001 ? "violated" : ""}">
          <b>x${i + 1} -> y${j + 1}</b>
          <em>C=${cost.toFixed(2)}</em>
          <i>${labels.slack}=${slack.toFixed(2)}</i>
        </span>
      `;
    }).join("")).join("");
    objective.innerHTML = `<b>${labels.objective}</b><em>${dualValue.toFixed(3)}</em>`;
    status.innerHTML = `<b>${labels.status}</b><em>${minSlack >= -0.001 ? labels.feasible : labels.infeasible}</em>`;
    status.classList.toggle("violated", minSlack < -0.001);
    readout.textContent = `u=[${u.map((value) => value.toFixed(2)).join(", ")}], v=[${v.map((value) => value.toFixed(2)).join(", ")}], min slack=${minSlack.toFixed(2)}. ${labels.note}`;
  };

  sourceInput.addEventListener("input", update);
  targetInput.addEventListener("input", update);
  update();
}

function mountOTBrenierMap(block) {
  const labels = currentLang === "zh"
    ? {
        slope: "convexity slope a",
        shift: "shift b",
        potential: "potential",
        map: "transport map",
        cost: "mean squared movement",
        note: "当 a>0 时，phi(x)=a x^2/2+b x 是 convex，T(x)=grad phi(x)=a x+b 单调，因此不会交换 source points 的顺序。"
      }
    : {
        slope: "convexity slope a",
        shift: "shift b",
        potential: "potential",
        map: "transport map",
        cost: "mean squared movement",
        note: "When a>0, phi(x)=a x^2/2+b x is convex, so T(x)=grad phi(x)=a x+b is monotone and does not swap the order of source points."
      };

  setInteractiveHTML(
    block,
    `
      <div class="ot-brenier-widget" aria-label="One-dimensional Brenier map">
        <svg class="ot-brenier-svg" viewBox="0 0 680 300" aria-hidden="true">
          <line x1="70" y1="86" x2="610" y2="86" class="axis-line"></line>
          <line x1="70" y1="214" x2="610" y2="214" class="axis-line"></line>
          <text x="74" y="62" class="svg-label">source x</text>
          <text x="74" y="244" class="svg-label">target T(x)</text>
          <g class="ot-brenier-arrows"></g>
          <g class="ot-brenier-source"></g>
          <g class="ot-brenier-target"></g>
        </svg>
        <div class="ot-brenier-stats">
          <span class="ot-brenier-potential"></span>
          <span class="ot-brenier-map"></span>
          <span class="ot-brenier-cost"></span>
        </div>
      </div>
      <p class="interactive-readout ot-brenier-readout"></p>
    `,
    `
      <label>
        <span>${labels.slope}</span>
        <input class="ot-brenier-slope-input" type="range" min="0.55" max="1.85" step="0.05" value="1.10">
      </label>
      <label>
        <span>${labels.shift}</span>
        <input class="ot-brenier-shift-input" type="range" min="-0.7" max="0.7" step="0.05" value="0.10">
      </label>
    `
  );

  const xs = [-1.5, -0.8, -0.2, 0.5, 1.15];
  const slopeInput = block.querySelector(".ot-brenier-slope-input");
  const shiftInput = block.querySelector(".ot-brenier-shift-input");
  const sourceGroup = block.querySelector(".ot-brenier-source");
  const targetGroup = block.querySelector(".ot-brenier-target");
  const arrows = block.querySelector(".ot-brenier-arrows");
  const potentialStat = block.querySelector(".ot-brenier-potential");
  const mapStat = block.querySelector(".ot-brenier-map");
  const costStat = block.querySelector(".ot-brenier-cost");
  const readout = block.querySelector(".ot-brenier-readout");
  const scale = (x) => 340 + x * 150;

  const update = () => {
    const a = Number(slopeInput.value);
    const b = Number(shiftInput.value);
    const targets = xs.map((x) => a * x + b);
    const cost = xs.reduce((sum, x, index) => sum + Math.pow(x - targets[index], 2), 0) / xs.length;
    sourceGroup.innerHTML = xs.map((x, index) => `
      <g>
        <circle cx="${scale(x).toFixed(1)}" cy="86" r="8" class="source-node"></circle>
        <text x="${(scale(x) - 10).toFixed(1)}" y="70" class="svg-label">x${index + 1}</text>
      </g>
    `).join("");
    targetGroup.innerHTML = targets.map((x, index) => `
      <g>
        <circle cx="${scale(x).toFixed(1)}" cy="214" r="8" class="target-node"></circle>
        <text x="${(scale(x) - 10).toFixed(1)}" y="236" class="svg-label">y${index + 1}</text>
      </g>
    `).join("");
    arrows.innerHTML = xs.map((x, index) => `
      <path class="ot-brenier-arrow" d="M${scale(x).toFixed(1)},96 C${scale(x).toFixed(1)},136 ${scale(targets[index]).toFixed(1)},164 ${scale(targets[index]).toFixed(1)},204"></path>
    `).join("");
    potentialStat.innerHTML = `<b>${labels.potential}</b><em>phi(x)=${(a / 2).toFixed(2)}x^2+${b.toFixed(2)}x</em>`;
    mapStat.innerHTML = `<b>${labels.map}</b><em>T(x)=${a.toFixed(2)}x+${b.toFixed(2)}</em>`;
    costStat.innerHTML = `<b>${labels.cost}</b><em>${cost.toFixed(3)}</em>`;
    readout.textContent = `${labels.map}: grad phi is monotone for a=${a.toFixed(2)}. ${labels.note}`;
  };

  slopeInput.addEventListener("input", update);
  shiftInput.addEventListener("input", update);
  update();
}

function mountRMTEigenvalueRepulsion(block) {
  const labels = currentLang === "zh"
    ? {
        beta: "ensemble beta",
        spacing: "spacing s",
        density: "未归一化密度",
        selected: "当前 spacing",
        nearZero: "near-zero power",
        className: "symmetry class",
        note: "beta 越大，Vandermonde 因子在 s=0 附近压得越厉害，eigenvalue collision 越不可能。"
      }
    : {
        beta: "ensemble beta",
        spacing: "spacing s",
        density: "unnormalized density",
        selected: "selected spacing",
        nearZero: "near-zero power",
        className: "symmetry class",
        note: "Larger beta makes the Vandermonde factor suppress the curve more strongly near s=0, so eigenvalue collision is less likely."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rmt-repulsion-widget" aria-label="Eigenvalue spacing repulsion">
        <svg class="rmt-repulsion-svg" viewBox="0 0 680 300" aria-hidden="true">
          <line x1="58" y1="236" x2="620" y2="236" class="axis-line"></line>
          <line x1="58" y1="236" x2="58" y2="42" class="axis-line"></line>
          <path class="rmt-spacing-curve"></path>
          <line class="rmt-spacing-marker" y1="54" y2="236"></line>
          <circle class="rmt-spacing-dot" r="8"></circle>
          <text x="66" y="32" class="svg-label">p_beta(s)</text>
          <text x="590" y="266" class="svg-label">s</text>
        </svg>
        <div class="rmt-repulsion-stats">
          <span class="rmt-beta-stat"></span>
          <span class="rmt-spacing-stat"></span>
          <span class="rmt-zero-stat"></span>
        </div>
      </div>
      <p class="interactive-readout rmt-repulsion-readout"></p>
    `,
    `
      <label>
        <span>${labels.beta}</span>
        <input class="rmt-beta-input" type="range" min="0" max="2" step="1" value="1">
      </label>
      <label>
        <span>${labels.spacing}</span>
        <input class="rmt-spacing-input" type="range" min="0" max="3" step="0.05" value="0.9">
      </label>
    `
  );

  const betaInput = block.querySelector(".rmt-beta-input");
  const spacingInput = block.querySelector(".rmt-spacing-input");
  const curve = block.querySelector(".rmt-spacing-curve");
  const marker = block.querySelector(".rmt-spacing-marker");
  const dot = block.querySelector(".rmt-spacing-dot");
  const betaStat = block.querySelector(".rmt-beta-stat");
  const spacingStat = block.querySelector(".rmt-spacing-stat");
  const zeroStat = block.querySelector(".rmt-zero-stat");
  const readout = block.querySelector(".rmt-repulsion-readout");
  const betas = [1, 2, 4];
  const classNames = currentLang === "zh"
    ? ["GOE / real", "GUE / complex", "GSE / quaternionic"]
    : ["GOE / real", "GUE / complex", "GSE / quaternionic"];
  const density = (s, beta) => Math.pow(Math.max(0, s), beta) * Math.exp(-0.78 * s * s);
  const scaleX = (s) => 58 + (s / 3) * 562;
  const scaleY = (y, maxY) => 236 - (y / maxY) * 178;

  const update = () => {
    const betaIndex = Number(betaInput.value);
    const beta = betas[betaIndex];
    const spacing = Number(spacingInput.value);
    const samples = Array.from({ length: 90 }, (_, index) => (index / 89) * 3);
    const values = samples.map((s) => density(s, beta));
    const maxY = Math.max(...values, 0.001);
    const path = samples
      .map((s, index) => `${index === 0 ? "M" : "L"}${scaleX(s).toFixed(1)},${scaleY(values[index], maxY).toFixed(1)}`)
      .join(" ");
    const selectedDensity = density(spacing, beta);
    const x = scaleX(spacing);
    const y = scaleY(selectedDensity, maxY);

    curve.setAttribute("d", path);
    marker.setAttribute("x1", x.toFixed(1));
    marker.setAttribute("x2", x.toFixed(1));
    dot.setAttribute("cx", x.toFixed(1));
    dot.setAttribute("cy", y.toFixed(1));
    betaStat.innerHTML = `<b>${labels.className}</b><em>beta=${beta}, ${classNames[betaIndex]}</em>`;
    spacingStat.innerHTML = `<b>${labels.selected}</b><em>s=${spacing.toFixed(2)}, p=${selectedDensity.toFixed(3)}</em>`;
    zeroStat.innerHTML = `<b>${labels.nearZero}</b><em>p(s) ~ s^${beta}</em>`;
    readout.textContent = `${labels.density}: p_beta(s) = s^${beta} exp(-0.78 s^2). ${labels.note}`;
  };

  betaInput.addEventListener("input", update);
  spacingInput.addEventListener("input", update);
  update();
}

function mountRMTSemicircleDensity(block) {
  const labels = currentLang === "zh"
    ? {
        size: "matrix size N",
        bulk: "bulk support",
        edge: "edge scale",
        max: "scaled max eigenvalue",
        note: "N 越大，bulk histogram 越接近 deterministic semicircle；largest eigenvalue 仍需要 edge scaling 单独处理。"
      }
    : {
        size: "matrix size N",
        bulk: "bulk support",
        edge: "edge scale",
        max: "scaled max eigenvalue",
        note: "As N grows, the bulk histogram approaches the deterministic semicircle; the largest eigenvalue still needs separate edge scaling."
      };

  setInteractiveHTML(
    block,
    `
      <div class="rmt-semicircle-widget" aria-label="Semicircle spectral density">
        <svg class="rmt-semicircle-svg" viewBox="0 0 700 320" aria-hidden="true">
          <line x1="64" y1="250" x2="638" y2="250" class="axis-line"></line>
          <line x1="64" y1="250" x2="64" y2="42" class="axis-line"></line>
          <g class="rmt-semicircle-bars"></g>
          <path class="rmt-semicircle-curve"></path>
          <line class="rmt-edge-line rmt-edge-left" y1="54" y2="250"></line>
          <line class="rmt-edge-line rmt-edge-right" y1="54" y2="250"></line>
          <text x="72" y="34" class="svg-label">rho(x)</text>
          <text x="604" y="282" class="svg-label">x</text>
          <text class="svg-label rmt-left-edge-label" y="276">-sqrt2</text>
          <text class="svg-label rmt-right-edge-label" y="276">sqrt2</text>
        </svg>
        <div class="rmt-semicircle-stats">
          <span class="rmt-bulk-stat"></span>
          <span class="rmt-edge-stat"></span>
          <span class="rmt-max-stat"></span>
        </div>
      </div>
      <p class="interactive-readout rmt-semicircle-readout"></p>
    `,
    `
      <label>
        <span>${labels.size}</span>
        <input class="rmt-size-input" type="range" min="20" max="200" step="20" value="80">
      </label>
    `
  );

  const sizeInput = block.querySelector(".rmt-size-input");
  const bars = block.querySelector(".rmt-semicircle-bars");
  const curve = block.querySelector(".rmt-semicircle-curve");
  const leftEdge = block.querySelector(".rmt-edge-left");
  const rightEdge = block.querySelector(".rmt-edge-right");
  const leftLabel = block.querySelector(".rmt-left-edge-label");
  const rightLabel = block.querySelector(".rmt-right-edge-label");
  const bulkStat = block.querySelector(".rmt-bulk-stat");
  const edgeStat = block.querySelector(".rmt-edge-stat");
  const maxStat = block.querySelector(".rmt-max-stat");
  const readout = block.querySelector(".rmt-semicircle-readout");
  const rootTwo = Math.SQRT2;
  const xMin = -2;
  const xMax = 2;
  const yMax = 0.5;
  const rho = (x) => (Math.abs(x) <= rootTwo ? Math.sqrt(2 - x * x) / Math.PI : 0);
  const scaleX = (x) => 64 + ((x - xMin) / (xMax - xMin)) * 574;
  const scaleY = (y) => 250 - (y / yMax) * 190;

  const curvePoints = Array.from({ length: 100 }, (_, index) => -rootTwo + (2 * rootTwo * index) / 99);
  curve.setAttribute(
    "d",
    curvePoints
      .map((x, index) => `${index === 0 ? "M" : "L"}${scaleX(x).toFixed(1)},${scaleY(rho(x)).toFixed(1)}`)
      .join(" ")
  );
  [leftEdge, rightEdge].forEach((line, index) => {
    const x = index === 0 ? -rootTwo : rootTwo;
    line.setAttribute("x1", scaleX(x).toFixed(1));
    line.setAttribute("x2", scaleX(x).toFixed(1));
  });
  leftLabel.setAttribute("x", (scaleX(-rootTwo) - 26).toFixed(1));
  rightLabel.setAttribute("x", (scaleX(rootTwo) - 24).toFixed(1));

  const update = () => {
    const n = Number(sizeInput.value);
    const binCount = 22;
    const binWidth = (xMax - xMin) / binCount;
    const wiggleScale = 0.72 / Math.sqrt(n / 20);
    const barHTML = Array.from({ length: binCount }, (_, index) => {
      const left = xMin + index * binWidth;
      const mid = left + binWidth / 2;
      const base = rho(mid);
      const wiggle = 1 + wiggleScale * Math.sin(index * 1.8 + 0.6);
      const heightValue = Math.max(0, base * wiggle);
      const x = scaleX(left) + 2;
      const y = scaleY(heightValue);
      const width = Math.max(4, scaleX(left + binWidth) - scaleX(left) - 4);
      const height = 250 - y;
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${width.toFixed(1)}" height="${height.toFixed(1)}"></rect>`;
    }).join("");
    const edgeWidth = Math.pow(n, -2 / 3);
    const scaledMax = rootTwo + 0.9 * edgeWidth;

    bars.innerHTML = barHTML;
    bulkStat.innerHTML = `<b>${labels.bulk}</b><em>[-sqrt(2), sqrt(2)]</em>`;
    edgeStat.innerHTML = `<b>${labels.edge}</b><em>N^(-2/3)=${edgeWidth.toFixed(3)}</em>`;
    maxStat.innerHTML = `<b>${labels.max}</b><em>${scaledMax.toFixed(3)}</em>`;
    readout.textContent = `N=${n}. rho(x)=pi^(-1)sqrt(2-x^2) on |x|<=sqrt(2). ${labels.note}`;
  };

  sizeInput.addEventListener("input", update);
  update();
}

function mountRandomnessShellVolume(block) {
  const labels = currentLang === "zh"
    ? {
        dimension: "dimension p",
        epsilon: "shell thickness epsilon",
        shell: "shell mass",
        core: "core mass",
        volume: "unit ball volume",
        note: "即使 epsilon 很薄，p 增大后大部分 volume 也挤到边界附近。"
      }
    : {
        dimension: "dimension p",
        epsilon: "shell thickness epsilon",
        shell: "shell mass",
        core: "core mass",
        volume: "unit ball volume",
        note: "Even a thin shell captures most volume as p grows."
      };

  setInteractiveHTML(
    block,
    `
      <div class="randomness-shell-widget" aria-label="High dimensional shell volume">
        <svg class="randomness-shell-svg" viewBox="0 0 700 310" aria-hidden="true">
          <circle class="randomness-shell-outer" cx="176" cy="154" r="118"></circle>
          <circle class="randomness-shell-inner" cx="176" cy="154" r="94"></circle>
          <text x="76" y="36" class="svg-label">B_p(1)</text>
          <line x1="380" y1="104" x2="620" y2="104" class="axis-line"></line>
          <rect class="randomness-core-bar" x="380" y="86" height="36"></rect>
          <rect class="randomness-shell-bar" y="86" height="36"></rect>
          <text x="380" y="75" class="svg-label">mass split</text>
          <text x="380" y="160" class="svg-label randomness-shell-formula"></text>
        </svg>
        <div class="randomness-stats">
          <span class="randomness-shell-stat"></span>
          <span class="randomness-core-stat"></span>
          <span class="randomness-volume-stat"></span>
        </div>
      </div>
      <p class="interactive-readout randomness-shell-readout"></p>
    `,
    `
      <label>
        <span>${labels.dimension}</span>
        <input class="randomness-shell-dim" type="range" min="2" max="200" step="1" value="40">
      </label>
      <label>
        <span>${labels.epsilon}</span>
        <input class="randomness-shell-eps" type="range" min="0.01" max="0.30" step="0.01" value="0.08">
      </label>
    `
  );

  const dimInput = block.querySelector(".randomness-shell-dim");
  const epsInput = block.querySelector(".randomness-shell-eps");
  const innerCircle = block.querySelector(".randomness-shell-inner");
  const coreBar = block.querySelector(".randomness-core-bar");
  const shellBar = block.querySelector(".randomness-shell-bar");
  const formula = block.querySelector(".randomness-shell-formula");
  const shellStat = block.querySelector(".randomness-shell-stat");
  const coreStat = block.querySelector(".randomness-core-stat");
  const volumeStat = block.querySelector(".randomness-volume-stat");
  const readout = block.querySelector(".randomness-shell-readout");

  const logGammaStirling = (z) => {
    const correction = 1 / (12 * z) - 1 / (360 * Math.pow(z, 3));
    return (z - 0.5) * Math.log(z) - z + 0.5 * Math.log(2 * Math.PI) + correction;
  };

  const update = () => {
    const p = Number(dimInput.value);
    const eps = Number(epsInput.value);
    const coreMass = Math.pow(1 - eps, p);
    const shellMass = 1 - coreMass;
    const z = p / 2 + 1;
    const logVolume = (p / 2) * Math.log(Math.PI) - logGammaStirling(z);
    const log10Volume = logVolume / Math.log(10);
    const barWidth = 240;
    const coreWidth = Math.max(1, barWidth * coreMass);
    const shellWidth = Math.max(1, barWidth * shellMass);

    innerCircle.setAttribute("r", (118 * Math.max(0.05, 1 - eps)).toFixed(1));
    coreBar.setAttribute("width", coreWidth.toFixed(1));
    shellBar.setAttribute("x", (380 + coreWidth).toFixed(1));
    shellBar.setAttribute("width", shellWidth.toFixed(1));
    formula.textContent = `1 - (1 - eps)^p = ${shellMass.toFixed(4)}`;
    shellStat.innerHTML = `<b>${labels.shell}</b><em>${(100 * shellMass).toFixed(2)}%</em>`;
    coreStat.innerHTML = `<b>${labels.core}</b><em>${(100 * coreMass).toFixed(2)}%</em>`;
    volumeStat.innerHTML = `<b>${labels.volume}</b><em>10^${log10Volume.toFixed(1)}</em>`;
    readout.textContent = `p=${p}, epsilon=${eps.toFixed(2)}. P(||X|| > 1 - epsilon) = 1 - (1 - epsilon)^p. ${labels.note}`;
  };

  dimInput.addEventListener("input", update);
  epsInput.addEventListener("input", update);
  update();
}

function mountRandomnessGaussianConcentration(block) {
  const labels = currentLang === "zh"
    ? {
        lipschitz: "Lipschitz constant L",
        alpha: "deviation alpha",
        bound: "tail bound",
        exponent: "exponent",
        scale: "effective scale",
        note: "L 越小，同样 deviation 的 tail decay 越快；这就是 notes 里强调 Lipschitz 的原因。"
      }
    : {
        lipschitz: "Lipschitz constant L",
        alpha: "deviation alpha",
        bound: "tail bound",
        exponent: "exponent",
        scale: "effective scale",
        note: "Smaller L gives faster tail decay for the same deviation, which is why the notes keep tracking Lipschitz constants."
      };

  setInteractiveHTML(
    block,
    `
      <div class="randomness-gaussian-widget" aria-label="Gaussian concentration curve">
        <svg class="randomness-gaussian-svg" viewBox="0 0 700 300" aria-hidden="true">
          <line x1="58" y1="238" x2="624" y2="238" class="axis-line"></line>
          <line x1="58" y1="238" x2="58" y2="44" class="axis-line"></line>
          <path class="randomness-gaussian-curve"></path>
          <line class="randomness-gaussian-marker" y1="54" y2="238"></line>
          <circle class="randomness-gaussian-dot" r="8"></circle>
          <text x="62" y="34" class="svg-label">P(|f-Ef| > alpha)</text>
          <text x="586" y="268" class="svg-label">alpha</text>
        </svg>
        <div class="randomness-stats">
          <span class="randomness-gaussian-bound"></span>
          <span class="randomness-gaussian-exponent"></span>
          <span class="randomness-gaussian-scale"></span>
        </div>
      </div>
      <p class="interactive-readout randomness-gaussian-readout"></p>
    `,
    `
      <label>
        <span>${labels.lipschitz}</span>
        <input class="randomness-gaussian-l" type="range" min="0.50" max="4.00" step="0.05" value="1.00">
      </label>
      <label>
        <span>${labels.alpha}</span>
        <input class="randomness-gaussian-alpha" type="range" min="0.10" max="8.00" step="0.10" value="2.00">
      </label>
    `
  );

  const lInput = block.querySelector(".randomness-gaussian-l");
  const alphaInput = block.querySelector(".randomness-gaussian-alpha");
  const curve = block.querySelector(".randomness-gaussian-curve");
  const marker = block.querySelector(".randomness-gaussian-marker");
  const dot = block.querySelector(".randomness-gaussian-dot");
  const boundStat = block.querySelector(".randomness-gaussian-bound");
  const exponentStat = block.querySelector(".randomness-gaussian-exponent");
  const scaleStat = block.querySelector(".randomness-gaussian-scale");
  const readout = block.querySelector(".randomness-gaussian-readout");
  const scaleX = (alpha) => 58 + (alpha / 8) * 566;
  const scaleY = (prob) => 238 - Math.min(1, prob) * 180;
  const tail = (alpha, l) => Math.min(1, 2 * Math.exp(-(alpha * alpha) / (2 * l * l)));

  const update = () => {
    const l = Number(lInput.value);
    const alpha = Number(alphaInput.value);
    const samples = Array.from({ length: 90 }, (_, index) => 0.1 + (7.9 * index) / 89);
    const path = samples
      .map((x, index) => `${index === 0 ? "M" : "L"}${scaleX(x).toFixed(1)},${scaleY(tail(x, l)).toFixed(1)}`)
      .join(" ");
    const probability = tail(alpha, l);
    const exponent = -(alpha * alpha) / (2 * l * l);
    const x = scaleX(alpha);
    const y = scaleY(probability);

    curve.setAttribute("d", path);
    marker.setAttribute("x1", x.toFixed(1));
    marker.setAttribute("x2", x.toFixed(1));
    dot.setAttribute("cx", x.toFixed(1));
    dot.setAttribute("cy", y.toFixed(1));
    boundStat.innerHTML = `<b>${labels.bound}</b><em>${probability.toFixed(4)}</em>`;
    exponentStat.innerHTML = `<b>${labels.exponent}</b><em>${exponent.toFixed(2)}</em>`;
    scaleStat.innerHTML = `<b>${labels.scale}</b><em>sub-Gaussian scale L=${l.toFixed(2)}</em>`;
    readout.textContent = `P(|f(X)-E f(X)| > alpha) <= 2 exp(-alpha^2 / (2 L^2)). L=${l.toFixed(2)}, alpha=${alpha.toFixed(1)}. ${labels.note}`;
  };

  lInput.addEventListener("input", update);
  alphaInput.addEventListener("input", update);
  update();
}

function mountRandomnessWishartNorm(block) {
  const labels = currentLang === "zh"
    ? {
        rows: "rows p",
        cols: "columns n",
        slack: "tail slack u",
        support: "singular-value band",
        net: "epsilon-net size",
        tail: "net tail",
        note: "notes 的 epsilon-net proof 很松，但它解释了为什么 ||X|| 的自然尺度是 sqrt(n)+sqrt(p)。"
      }
    : {
        rows: "rows p",
        cols: "columns n",
        slack: "tail slack u",
        support: "singular-value band",
        net: "epsilon-net size",
        tail: "net tail",
        note: "The epsilon-net proof is loose, but it explains why ||X|| naturally lives near sqrt(n)+sqrt(p)."
      };

  setInteractiveHTML(
    block,
    `
      <div class="randomness-wishart-widget" aria-label="Wishart operator norm scale">
        <svg class="randomness-wishart-svg" viewBox="0 0 700 300" aria-hidden="true">
          <line x1="58" y1="238" x2="626" y2="238" class="axis-line"></line>
          <line x1="58" y1="238" x2="58" y2="48" class="axis-line"></line>
          <rect class="randomness-wishart-band" y="92" height="116"></rect>
          <line class="randomness-wishart-left" y1="78" y2="238"></line>
          <line class="randomness-wishart-right" y1="78" y2="238"></line>
          <line class="randomness-wishart-marker" y1="58" y2="238"></line>
          <text x="62" y="36" class="svg-label">singular values of X</text>
          <text x="574" y="268" class="svg-label">scale</text>
        </svg>
        <div class="randomness-stats">
          <span class="randomness-wishart-support"></span>
          <span class="randomness-wishart-net"></span>
          <span class="randomness-wishart-tail"></span>
        </div>
      </div>
      <p class="interactive-readout randomness-wishart-readout"></p>
    `,
    `
      <label>
        <span>${labels.rows}</span>
        <input class="randomness-wishart-p" type="range" min="20" max="400" step="10" value="120">
      </label>
      <label>
        <span>${labels.cols}</span>
        <input class="randomness-wishart-n" type="range" min="20" max="400" step="10" value="180">
      </label>
      <label>
        <span>${labels.slack}</span>
        <input class="randomness-wishart-u" type="range" min="0" max="30" step="1" value="10">
      </label>
    `
  );

  const pInput = block.querySelector(".randomness-wishart-p");
  const nInput = block.querySelector(".randomness-wishart-n");
  const uInput = block.querySelector(".randomness-wishart-u");
  const band = block.querySelector(".randomness-wishart-band");
  const leftLine = block.querySelector(".randomness-wishart-left");
  const rightLine = block.querySelector(".randomness-wishart-right");
  const marker = block.querySelector(".randomness-wishart-marker");
  const supportStat = block.querySelector(".randomness-wishart-support");
  const netStat = block.querySelector(".randomness-wishart-net");
  const tailStat = block.querySelector(".randomness-wishart-tail");
  const readout = block.querySelector(".randomness-wishart-readout");

  const update = () => {
    const p = Number(pInput.value);
    const n = Number(nInput.value);
    const u = Number(uInput.value);
    const left = Math.abs(Math.sqrt(n) - Math.sqrt(p));
    const right = Math.sqrt(n) + Math.sqrt(p);
    const threshold = right + u;
    const maxScale = threshold + 8;
    const scaleX = (x) => 58 + (x / maxScale) * 568;
    const leftX = scaleX(left);
    const rightX = scaleX(right);
    const markerX = scaleX(threshold);
    const logNet = (p + n) * Math.log10(9);
    const tail = 0.5 * Math.exp(-(u * u) / 8);

    band.setAttribute("x", leftX.toFixed(1));
    band.setAttribute("width", Math.max(2, rightX - leftX).toFixed(1));
    leftLine.setAttribute("x1", leftX.toFixed(1));
    leftLine.setAttribute("x2", leftX.toFixed(1));
    rightLine.setAttribute("x1", rightX.toFixed(1));
    rightLine.setAttribute("x2", rightX.toFixed(1));
    marker.setAttribute("x1", markerX.toFixed(1));
    marker.setAttribute("x2", markerX.toFixed(1));
    supportStat.innerHTML = `<b>${labels.support}</b><em>[${left.toFixed(2)}, ${right.toFixed(2)}]</em>`;
    netStat.innerHTML = `<b>${labels.net}</b><em>log10 |N| ~= ${logNet.toFixed(1)}</em>`;
    tailStat.innerHTML = `<b>${labels.tail}</b><em><= ${tail.toExponential(2)}</em>`;
    readout.textContent = `p=${p}, n=${n}. Heuristic edge sqrt(n)+sqrt(p)=${right.toFixed(2)}; handwritten net bound controls P(||X|| >= edge + u). ${labels.note}`;
  };

  pInput.addEventListener("input", update);
  nInput.addEventListener("input", update);
  uInput.addEventListener("input", update);
  update();
}

function mountRandomnessMPSpike(block) {
  const labels = currentLang === "zh"
    ? {
        gamma: "aspect ratio gamma=p/n",
        spike: "spike strength eta",
        support: "MP bulk support",
        threshold: "BBP threshold",
        outlier: "top eigenvalue",
        visible: "spike becomes visible",
        hidden: "spike stays in bulk",
        note: "当 eta 超过 sqrt(gamma)，signal eigenvalue 会离开 MP bulk；否则被 sample noise 淹没。"
      }
    : {
        gamma: "aspect ratio gamma=p/n",
        spike: "spike strength eta",
        support: "MP bulk support",
        threshold: "BBP threshold",
        outlier: "top eigenvalue",
        visible: "spike becomes visible",
        hidden: "spike stays in bulk",
        note: "When eta exceeds sqrt(gamma), the signal eigenvalue leaves the MP bulk; otherwise it is hidden by sample noise."
      };

  setInteractiveHTML(
    block,
    `
      <div class="randomness-mp-widget" aria-label="Marchenko-Pastur density and spiked covariance">
        <svg class="randomness-mp-svg" viewBox="0 0 700 320" aria-hidden="true">
          <line x1="58" y1="258" x2="632" y2="258" class="axis-line"></line>
          <line x1="58" y1="258" x2="58" y2="48" class="axis-line"></line>
          <path class="randomness-mp-curve"></path>
          <line class="randomness-mp-left" y1="58" y2="258"></line>
          <line class="randomness-mp-right" y1="58" y2="258"></line>
          <line class="randomness-mp-spike" y1="58" y2="258"></line>
          <text x="62" y="36" class="svg-label">MP density</text>
          <text x="604" y="288" class="svg-label">lambda</text>
        </svg>
        <div class="randomness-stats">
          <span class="randomness-mp-support"></span>
          <span class="randomness-mp-threshold"></span>
          <span class="randomness-mp-outlier"></span>
        </div>
      </div>
      <p class="interactive-readout randomness-mp-readout"></p>
    `,
    `
      <label>
        <span>${labels.gamma}</span>
        <input class="randomness-mp-gamma" type="range" min="0.05" max="0.95" step="0.01" value="0.45">
      </label>
      <label>
        <span>${labels.spike}</span>
        <input class="randomness-mp-eta" type="range" min="0.00" max="2.50" step="0.05" value="0.90">
      </label>
    `
  );

  const gammaInput = block.querySelector(".randomness-mp-gamma");
  const etaInput = block.querySelector(".randomness-mp-eta");
  const curve = block.querySelector(".randomness-mp-curve");
  const leftLine = block.querySelector(".randomness-mp-left");
  const rightLine = block.querySelector(".randomness-mp-right");
  const spikeLine = block.querySelector(".randomness-mp-spike");
  const supportStat = block.querySelector(".randomness-mp-support");
  const thresholdStat = block.querySelector(".randomness-mp-threshold");
  const outlierStat = block.querySelector(".randomness-mp-outlier");
  const readout = block.querySelector(".randomness-mp-readout");

  const update = () => {
    const gamma = Number(gammaInput.value);
    const eta = Number(etaInput.value);
    const root = Math.sqrt(gamma);
    const left = Math.pow(1 - root, 2);
    const right = Math.pow(1 + root, 2);
    const visible = eta > root;
    const outlier = visible ? 1 + eta + gamma * (1 + eta) / Math.max(eta, 0.001) : right;
    const xMax = Math.max(4, right + 0.5, outlier + 0.4);
    const density = (x) => {
      if (x <= left || x >= right) {
        return 0;
      }
      return Math.sqrt((right - x) * (x - left)) / (2 * Math.PI * gamma * x);
    };
    const samples = Array.from({ length: 130 }, (_, index) => left + ((right - left) * index) / 129);
    const values = samples.map(density);
    const yMax = Math.max(...values, 0.01);
    const scaleX = (x) => 58 + (x / xMax) * 574;
    const scaleY = (y) => 258 - (y / yMax) * 190;
    const path = samples
      .map((x, index) => `${index === 0 ? "M" : "L"}${scaleX(x).toFixed(1)},${scaleY(values[index]).toFixed(1)}`)
      .join(" ");

    curve.setAttribute("d", path);
    leftLine.setAttribute("x1", scaleX(left).toFixed(1));
    leftLine.setAttribute("x2", scaleX(left).toFixed(1));
    rightLine.setAttribute("x1", scaleX(right).toFixed(1));
    rightLine.setAttribute("x2", scaleX(right).toFixed(1));
    spikeLine.setAttribute("x1", scaleX(outlier).toFixed(1));
    spikeLine.setAttribute("x2", scaleX(outlier).toFixed(1));
    spikeLine.classList.toggle("inactive-spike", !visible);
    supportStat.innerHTML = `<b>${labels.support}</b><em>[${left.toFixed(2)}, ${right.toFixed(2)}]</em>`;
    thresholdStat.innerHTML = `<b>${labels.threshold}</b><em>eta > sqrt(gamma) = ${root.toFixed(2)}</em>`;
    outlierStat.innerHTML = `<b>${labels.outlier}</b><em>${outlier.toFixed(2)} ${visible ? labels.visible : labels.hidden}</em>`;
    readout.textContent = `gamma=${gamma.toFixed(2)}, eta=${eta.toFixed(2)}. lambda_max = ${visible ? "1+eta+gamma(1+eta)/eta" : "delta_+"}. ${labels.note}`;
  };

  gammaInput.addEventListener("input", update);
  etaInput.addEventListener("input", update);
  update();
}

function mountMedianOfMeansLab(block) {
  const labels = currentLang === "zh"
    ? {
        outliers: "极端值数量",
        groups: "分组数",
        sampleMean: "普通均值",
        sampleMedian: "样本中位数",
        mom: "Median-of-means",
        readout: "极端值 4 个 / 分组 9 组",
        groupMeans: "每组均值",
        target: "真实中心"
      }
    : {
        outliers: "Outliers",
        groups: "Groups",
        sampleMean: "Sample mean",
        sampleMedian: "Sample median",
        mom: "Median-of-means",
        readout: "4 outliers / 9 groups",
        groupMeans: "Group means",
        target: "True center"
      };

  setInteractiveHTML(
    block,
    `
      <div class="mom-widget">
        <svg class="mom-svg" viewBox="0 0 760 330" aria-label="Median-of-means comparison">
          <line x1="66" y1="250" x2="704" y2="250" class="axis-line"></line>
          <line x1="385" y1="50" x2="385" y2="272" class="mom-target-line"></line>
          <text x="393" y="64" class="svg-label">${labels.target}</text>
          <g class="mom-points"></g>
          <g class="mom-estimators"></g>
          <g class="mom-group-means"></g>
        </svg>
        <div class="mom-stats">
          <span><b>${labels.sampleMean}</b><em class="mom-mean-value"></em></span>
          <span><b>${labels.sampleMedian}</b><em class="mom-median-value"></em></span>
          <span><b>${labels.mom}</b><em class="mom-value"></em></span>
        </div>
      </div>
    `,
    `
      <label><span>${labels.outliers}</span><input class="mom-outlier-input" type="range" min="0" max="12" step="1" value="4"></label>
      <label><span>${labels.groups}</span><input class="mom-group-input" type="range" min="3" max="15" step="2" value="9"></label>
      <p class="interactive-readout mom-readout">${labels.readout}</p>
    `
  );

  const outlierInput = block.querySelector(".mom-outlier-input");
  const groupInput = block.querySelector(".mom-group-input");
  const pointsNode = block.querySelector(".mom-points");
  const estimatorsNode = block.querySelector(".mom-estimators");
  const groupMeansNode = block.querySelector(".mom-group-means");
  const meanNode = block.querySelector(".mom-mean-value");
  const medianNode = block.querySelector(".mom-median-value");
  const momNode = block.querySelector(".mom-value");
  const readoutNode = block.querySelector(".mom-readout");

  const base = [
    -1.18, -0.94, -0.82, -0.73, -0.66, -0.55, -0.49, -0.42, -0.36,
    -0.31, -0.25, -0.19, -0.14, -0.09, -0.04, 0.02, 0.06, 0.11,
    0.16, 0.21, 0.26, 0.32, 0.38, 0.44, 0.51, 0.58, 0.67, 0.76,
    0.86, 0.98, 1.12, 1.28, 1.46
  ];
  const outlierValues = [5.8, 6.1, 6.6, 7.2, 7.9, 8.5, 9.2, 9.9, 10.6, 11.4, 12.2, 13.1];

  const average = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
  const median = (values) => {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };
  const toX = (value) => 385 + value * 42;

  function medianOfMeans(values, groups) {
    const buckets = Array.from({ length: groups }, () => []);
    values.forEach((value, index) => {
      buckets[index % groups].push(value);
    });
    const groupMeans = buckets.filter((bucket) => bucket.length).map(average);
    return { groupMeans, value: median(groupMeans) };
  }

  function update() {
    const outliers = Number(outlierInput.value);
    const groups = Number(groupInput.value);
    const values = [...base, ...outlierValues.slice(0, outliers)];
    const meanValue = average(values);
    const medianValue = median(values);
    const mom = medianOfMeans(values, groups);

    pointsNode.innerHTML = values.map((value, index) => {
      const isOutlier = index >= base.length;
      const y = 226 - (index % 5) * 13;
      const x = Math.max(74, Math.min(696, toX(value)));
      return `<circle cx="${x.toFixed(1)}" cy="${y}" r="${isOutlier ? 5.4 : 4.2}" class="${isOutlier ? "mom-outlier-point" : "mom-point"}"></circle>`;
    }).join("");

    estimatorsNode.innerHTML = [
      { label: labels.sampleMean, value: meanValue, y: 104, klass: "mom-mean-line" },
      { label: labels.sampleMedian, value: medianValue, y: 136, klass: "mom-median-line" },
      { label: labels.mom, value: mom.value, y: 168, klass: "mom-mom-line" }
    ].map((item) => {
      const x = Math.max(74, Math.min(696, toX(item.value)));
      return `
        <line x1="${x.toFixed(1)}" y1="82" x2="${x.toFixed(1)}" y2="238" class="${item.klass}"></line>
        <text x="${Math.min(610, x + 8).toFixed(1)}" y="${item.y}" class="svg-label">${item.label}: ${item.value.toFixed(2)}</text>
      `;
    }).join("");

    groupMeansNode.innerHTML = `
      <text x="66" y="292" class="svg-label">${labels.groupMeans}</text>
      ${mom.groupMeans.map((value, index) => {
        const x = Math.max(74, Math.min(696, toX(value)));
        return `<rect x="${(x - 4).toFixed(1)}" y="${286 - (index % 2) * 12}" width="8" height="8" class="mom-group-mean"></rect>`;
      }).join("")}
    `;

    meanNode.textContent = meanValue.toFixed(2);
    medianNode.textContent = medianValue.toFixed(2);
    momNode.textContent = mom.value.toFixed(2);
    readoutNode.textContent = currentLang === "zh"
      ? `极端值 ${outliers} 个 / 分组 ${groups} 组`
      : `${outliers} outliers / ${groups} groups`;
  }

  [outlierInput, groupInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function mountMomMonteCarloLab(block) {
  const labels = currentLang === "zh"
    ? {
        contamination: "污染比例",
        scale: "极端噪声强度",
        mean: "普通均值",
        median: "中位数",
        mom: "Median-of-means",
        p95: "95% 绝对误差",
        badRate: "|误差| > 1",
        trueCenter: "真实中心 10",
        readout: "重复模拟 1200 次，每次 n=200。图展示三种估计器的抽样分布。"
      }
    : {
        contamination: "Contamination",
        scale: "Extreme noise scale",
        mean: "Sample mean",
        median: "Median",
        mom: "Median-of-means",
        p95: "95% abs error",
        badRate: "|error| > 1",
        trueCenter: "True center 10",
        readout: "1200 repeated samples, n=200 each. The chart shows sampling distributions for three estimators."
      };

  setInteractiveHTML(
    block,
    `
      <div class="mc-widget">
        <svg class="mc-svg" viewBox="0 0 760 360" aria-label="Monte Carlo sampling distributions">
          <line x1="70" y1="292" x2="704" y2="292" class="axis-line"></line>
          <g class="mc-bars"></g>
          <g class="mc-axis"></g>
          <g class="mc-true-line"></g>
        </svg>
        <div class="mc-legend">
          <span><i class="mc-key-mean"></i>${labels.mean}</span>
          <span><i class="mc-key-median"></i>${labels.median}</span>
          <span><i class="mc-key-mom"></i>${labels.mom}</span>
        </div>
        <div class="mc-stats"></div>
      </div>
    `,
    `
      <label><span>${labels.contamination}</span><input class="mc-contamination-input" type="range" min="0" max="12" step="1" value="5"></label>
      <label><span>${labels.scale}</span><input class="mc-scale-input" type="range" min="10" max="80" step="5" value="50"></label>
      <p class="interactive-readout mc-readout">${labels.readout}</p>
    `
  );

  const contaminationInput = block.querySelector(".mc-contamination-input");
  const scaleInput = block.querySelector(".mc-scale-input");
  const barsNode = block.querySelector(".mc-bars");
  const axisNode = block.querySelector(".mc-axis");
  const trueLineNode = block.querySelector(".mc-true-line");
  const statsNode = block.querySelector(".mc-stats");
  const readoutNode = block.querySelector(".mc-readout");

  const trueCenter = 10;
  const repeats = 1200;
  const n = 200;

  const makeRng = (seed) => () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const normal = (rng, mean, sd) => {
    const u1 = Math.max(rng(), 1e-12);
    const u2 = rng();
    return mean + sd * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };
  const average = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
  const median = (values) => {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };
  const quantile = (values, q) => {
    const sorted = [...values].sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    return sorted[base + 1] === undefined ? sorted[base] : sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  };
  const shuffle = (values, rng) => {
    for (let index = values.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(rng() * (index + 1));
      [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
    }
  };
  const medianOfMeans = (values, groups, rng) => {
    const shuffled = [...values];
    shuffle(shuffled, rng);
    const groupMeans = [];
    for (let group = 0; group < groups; group += 1) {
      const start = Math.floor(group * shuffled.length / groups);
      const end = Math.floor((group + 1) * shuffled.length / groups);
      groupMeans.push(average(shuffled.slice(start, end)));
    }
    return median(groupMeans);
  };
  const summarize = (values) => {
    const errors = values.map((value) => value - trueCenter);
    const mse = average(errors.map((error) => error * error));
    const absErrors = errors.map(Math.abs);
    return {
      p95: quantile(absErrors, 0.95),
      badRate: average(absErrors.map((error) => error > 1 ? 1 : 0)),
      mae: average(absErrors),
      mse
    };
  };

  function simulate(contamination, scale) {
    const rng = makeRng(42);
    const values = {
      mean: [],
      median: [],
      mom: []
    };
    for (let repeat = 0; repeat < repeats; repeat += 1) {
      const sample = [];
      for (let index = 0; index < n; index += 1) {
        sample.push(rng() < contamination
          ? normal(rng, trueCenter, scale)
          : normal(rng, trueCenter, 1));
      }
      values.mean.push(average(sample));
      values.median.push(median(sample));
      values.mom.push(medianOfMeans(sample, 20, rng));
    }
    return values;
  }

  function histogram(values, min, max, bins) {
    const counts = Array.from({ length: bins }, () => 0);
    values.forEach((value) => {
      const index = Math.max(0, Math.min(bins - 1, Math.floor((value - min) / (max - min) * bins)));
      counts[index] += 1;
    });
    return counts;
  }

  function update() {
    const contamination = Number(contaminationInput.value) / 100;
    const scale = Number(scaleInput.value);
    const values = simulate(contamination, scale);
    const allValues = [...values.mean, ...values.median, ...values.mom];
    const min = Math.min(8.4, quantile(allValues, 0.005) - 0.15);
    const max = Math.max(11.6, quantile(allValues, 0.995) + 0.15);
    const bins = 42;
    const series = [
      { key: "mean", label: labels.mean, color: "#c85b5b", counts: histogram(values.mean, min, max, bins), stats: summarize(values.mean) },
      { key: "median", label: labels.median, color: "#6a7a91", counts: histogram(values.median, min, max, bins), stats: summarize(values.median) },
      { key: "mom", label: labels.mom, color: "#216e5a", counts: histogram(values.mom, min, max, bins), stats: summarize(values.mom) }
    ];
    const maxCount = Math.max(...series.flatMap((item) => item.counts));
    const plot = { x: 70, y: 38, width: 634, height: 254 };
    const toX = (value) => plot.x + (value - min) / (max - min) * plot.width;
    const barWidth = plot.width / bins;

    barsNode.innerHTML = series.map((item, seriesIndex) => item.counts.map((count, index) => {
      const height = count / maxCount * (plot.height - 18);
      const x = plot.x + index * barWidth + seriesIndex * (barWidth / 3);
      const y = plot.y + plot.height - height;
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(1.8, barWidth / 3.4).toFixed(1)}" height="${height.toFixed(1)}" fill="${item.color}" class="mc-bar"></rect>`;
    }).join("")).join("");

    const trueX = toX(trueCenter);
    trueLineNode.innerHTML = `
      <line x1="${trueX.toFixed(1)}" y1="${plot.y}" x2="${trueX.toFixed(1)}" y2="${plot.y + plot.height + 6}" class="mc-true"></line>
      <text x="${Math.min(600, trueX + 8).toFixed(1)}" y="${plot.y + 16}" class="svg-label">${labels.trueCenter}</text>
    `;
    axisNode.innerHTML = [min, trueCenter, max].map((value) => `
      <text x="${toX(value).toFixed(1)}" y="322" text-anchor="middle" class="svg-label">${value.toFixed(1)}</text>
    `).join("");

    statsNode.innerHTML = series.map((item) => `
      <span>
        <b>${item.label}</b>
        <em>${labels.p95}: ${item.stats.p95.toFixed(2)}</em>
        <small>${labels.badRate}: ${(item.stats.badRate * 100).toFixed(1)}%</small>
      </span>
    `).join("");
    readoutNode.textContent = currentLang === "zh"
      ? `污染比例 ${(contamination * 100).toFixed(0)}%，极端噪声标准差 ${scale}。MoM 关注的是尾部误差风险。`
      : `${(contamination * 100).toFixed(0)}% contamination, extreme-noise sd ${scale}. MOM is about tail-risk control.`;
  }

  [contaminationInput, scaleInput].forEach((input) => input.addEventListener("input", update));
  update();
}

function typesetMath() {
  const articleBody = document.querySelector("#dialogBody");
  if (!articleBody || !window.MathJax?.typesetPromise) {
    return;
  }
  window.MathJax.typesetPromise([articleBody]).catch(() => {});
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.checked = isDark;
  localStorage.setItem("notes-theme", isDark ? "dark" : "light");
}

postFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) {
    return;
  }

  activeCategory = button.dataset.category;
  renderFilters();
  renderPosts();
});

postSearch.addEventListener("input", renderPosts);

postGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-post]");
  if (button) {
    openPost(button.dataset.post);
  }
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  const url = new URL(window.location.href);
  if (url.searchParams.has("post")) {
    url.searchParams.delete("post");
    window.history.replaceState({}, "", url);
  }
});

dialog.addEventListener("click", async (event) => {
  if (event.target === dialog) {
    dialog.close();
    return;
  }

  const button = event.target.closest("button[data-copy-code]");
  if (!button) {
    return;
  }

  const code = document.querySelector(`[data-code-index="${button.dataset.copyCode}"]`);
  if (!code) {
    return;
  }

  const original = button.textContent;
  const clipboardText = code.textContent;
  try {
    await navigator.clipboard.writeText(clipboardText);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  }
  button.textContent = text("copied");
  window.setTimeout(() => {
    button.textContent = original || text("copy");
  }, 1400);
});

themeToggle.addEventListener("change", () => {
  applyTheme(themeToggle.checked ? "dark" : "light");
});

languageToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("notes-lang", currentLang);
  applyProfile();
  applyHiddenTextBlocks();
  applyBlockOffsets();
  renderFilters();
  renderPosts();
  if (dialog.open && activePostSlug) {
    renderDialogPost(activePostSlug);
  }
});

window.addEventListener("mathjax-ready", typesetMath);

applySiteLayout();
applyProfile();
applyHiddenTextBlocks();
applyBlockOffsets();
renderFilters();
renderPosts();
applyTheme(localStorage.getItem("notes-theme") || "light");
openPostFromURL();
