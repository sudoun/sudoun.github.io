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
  const post = posts.find((item) => item.slug === slug);
  if (post && !post.articlePath) {
    openPost(slug);
  }
}

function renderDialogPost(slug) {
  const basePost = posts.find((item) => item.slug === slug);
  if (!basePost || basePost.articlePath) {
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
    const stage = block.querySelector(".interactive-stage");
    const controls = block.querySelector(".interactive-controls");
    if (stage) {
      stage.innerHTML = "";
    }
    if (controls) {
      controls.innerHTML = "";
    }
  });
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
