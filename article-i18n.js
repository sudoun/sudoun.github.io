(function () {
  const config = window.articleI18n || {};
  const defaultLang = config.defaultLang || "zh";
  const storageKey = config.storageKey || "article-lang";
  const translations = config.translations || {};
  const textNodes = [];
  const originalText = new WeakMap();
  const codeCommentNodes = [];
  const originalCodeCommentText = new WeakMap();
  const originalAttributes = [];
  const skipSelector = "script, style, textarea, pre, code, svg, mjx-container, .math-display, .math-inline";

  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim();

  const featureZh = {
    "Age group": "年龄组",
    "Business travel": "出差情况",
    Department: "部门",
    "Education field": "教育领域",
    Gender: "性别",
    "Job role": "岗位角色",
    "Marital status": "婚姻状态",
    "Salary slab": "薪资分层",
    Overtime: "加班",
    Age: "年龄",
    "Monthly income": "月收入",
    "Distance from home": "通勤距离",
    "Total working years": "总工作年限",
    "Years at company": "在公司年限",
    "Years in current role": "当前岗位年限",
    "Years since last promotion": "距上次晋升年限",
    "Years with current manager": "与当前经理共事年限",
    "Job satisfaction": "工作满意度",
    "Environment satisfaction": "环境满意度",
    "Work-life balance": "工作生活平衡"
  };

  const groupZh = {
    "18-25": "18-25",
    Travel_Frequently: "经常出差",
    Sales: "销售",
    "Human Resources": "人力资源",
    Male: "男性",
    "Sales Representative": "销售代表",
    Single: "单身",
    "Upto 5k": "5k 以下",
    Yes: "是",
    Left: "离职",
    Stayed: "留任"
  };

  const commonZh = {
    "Raw table loaded": "原始表已加载",
    "Confirms the CSV loads correctly with 1,480 rows and 38 columns.": "确认 CSV 已正确加载，共 1,480 行、38 列。",
    "Raw table preview": "原始表预览",
    "Shows the first employee records and verifies that target, job, salary, and tenure fields are present.": "展示前几条员工记录，并确认目标、岗位、薪资和任职字段存在。",
    "Exact duplicate audit": "完全重复行审计",
    "Finds 7 fully duplicated rows before any conservative cleanup.": "在保守清理前发现 7 行完全重复记录。",
    "Missingness profile": "缺失情况概览",
    "Shows that missingness is concentrated in YearsWithCurrManager: 57 cells, about 3.85%.": "显示缺失主要集中在 YearsWithCurrManager：57 个单元格，约 3.85%。",
    "Manager-tenure missingness check": "经理任职年限缺失检查",
    "Compares attrition rate for rows with and without missing manager-tenure values.": "比较经理任职年限缺失与非缺失记录的流失率。",
    "Preserved EDA missingness check": "保留 EDA 缺失检查",
    "Confirms the EDA table still exposes the original missing manager-tenure field for audit transparency.": "确认 EDA 表仍保留原始经理任职年限缺失字段，以保证审计透明。",
    "Column role profile": "字段角色概览",
    "Lists dtype, cardinality, and sample values to separate IDs, categories, and numeric features.": "列出 dtype、基数和样例值，用于区分 ID、类别变量和数值特征。",
    "Full descriptive-statistics reference": "完整描述性统计参考",
    "Keeps the complete describe table as a reference rather than a main narrative result.": "保留完整 describe 表作为参考，而不是作为主叙事结果。",
    "Feature-type preview": "特征类型预览",
    "The raw dataset has 38 total columns. This preview shows representative fields before identifiers, constants, the target, and non-analytical variables are filtered out for plots and modeling.": "原始数据集共有 38 列。该预览展示在过滤 ID、常量、目标变量和非分析变量前的代表性字段。",
    "Numeric examples": "数值字段示例",
    "Categorical examples": "类别字段示例",
    "Detected target column": "检测到目标列",
    "Verifies that Attrition is the binary outcome used throughout the article.": "确认 Attrition 是全文使用的二分类结果变量。",
    "Encoded target counts": "编码后目标计数",
    "Shows the 0/1 class counts after mapping Attrition into attrition_flag.": "展示将 Attrition 映射为 attrition_flag 后的 0/1 类别计数。",
    "Baseline attrition rate": "基准流失率",
    "Reports the overall attrition base rate, about 16.1%, before modeling.": "在建模前报告整体流失基准率，约 16.1%。",
    "Target class-balance chart": "目标类别平衡图",
    "Visualizes the class imbalance so accuracy is not overinterpreted later.": "可视化类别不平衡，避免后续过度解释 accuracy。",
    "Selected categorical scan": "选定类别变量扫描",
    "9 interpretable categorical variables are kept for the attrition-rate scan; identifiers, the target, and constant fields are excluded before plotting.": "保留 9 个可解释类别变量用于流失率扫描；绘图前排除 ID、目标变量和常量字段。",
    "Redundant code note": "冗余代码说明",
    "The reusable plotting function is defined in the previous cell; this cell is just the batch runner, so its code is folded by default.": "可复用绘图函数已在上一单元定义；本单元只是批量运行器，因此代码默认折叠。",
    "Bar chart of group-level attrition rates; use it as a visual preview, not a causal claim.": "组级流失率柱状图；它只是视觉预览，不是因果结论。",
    "Shows group attrition rates with uncertainty intervals, preventing overreading small groups.": "展示带不确定区间的组级流失率，避免过度解读小样本组。",
    "Numerical visualization set": "数值变量可视化集合",
    "23 numeric variables are available for plotting; the article focuses on HR-interpretable variables such as age, income, distance, tenure, and satisfaction.": "共有 23 个数值变量可用于绘图；文章重点关注年龄、收入、距离、任职年限和满意度等 HR 可解释变量。",
    "Continuous-like numeric variables": "近似连续数值变量",
    "23 variables have enough distinct values for distribution diagnostics such as histograms, boxplots, Q-Q plots, and skewness checks.": "23 个变量有足够多的不同取值，可用于直方图、箱线图、Q-Q 图和偏度检查等分布诊断。",
    "Numerical feature summary table": "数值特征摘要表",
    "Summarizes missingness, cardinality, center, spread, tails, skewness, and kurtosis.": "汇总缺失、基数、中心趋势、离散程度、尾部、偏度和峰度。",
    "Histogram/boxplot split by attrition; read for shift, skew, overlap, and outliers.": "按流失状态分组的直方图 / 箱线图；用于观察偏移、偏态、重叠和异常值。",
    "Checks Gaussian-like behavior and tail deviation by attrition group.": "按流失组检查近似高斯行为和尾部偏离。",
    "Skewed-variable candidate list": "偏态变量候选列表",
    "Lists variables with |skewness| > 1 selected for the log-transform diagnostic.": "列出用于 log 变换诊断的变量，即 |skewness| > 1 的变量。",
    "Lists variables with |skewness| &gt; 1 selected for the log-transform diagnostic.": "列出用于 log 变换诊断的变量，即 |skewness| > 1 的变量。",
    "Compares original and log-scaled distributions to see whether a few large values dominate the scale.": "比较原始分布与 log 缩放分布，查看少数大值是否主导尺度。",
    "Cramér's V ranking table": "Cramér's V 排序表",
    "Ranks categorical variables by marginal association with attrition and reports p-values and sample constraints.": "按与流失的边际关联对类别变量排序，并报告 p-value 和样本约束。",
    "Cramér's V ranking chart": "Cramér's V 排序图",
    "Visual summary showing which categorical variables have the strongest marginal association with attrition.": "用图形总结哪些类别变量与员工流失的边际关联最强。"
  };

  const phraseZh = (value) => featureZh[value] || groupZh[value] || value;

  const fallbackZh = (key) => {
    if (commonZh[key]) return commonZh[key];

    let match = key.match(/^(.+) rate table$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])}流失率表`;

    match = key.match(/^(.+) attrition-rate chart$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])}流失率图`;

    match = key.match(/^(.+) Wilson interval table$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])} Wilson 区间表`;

    match = key.match(/^(.+) association diagnostic$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])}关联诊断`;

    match = key.match(/^(.+) interval chart$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])}置信区间图`;

    match = key.match(/^(.+) distribution diagnostic$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])}分布诊断`;

    match = key.match(/^(.+) summary table$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])}摘要表`;

    match = key.match(/^(.+) Q-Q plot · (Stayed|Left) group$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])} Q-Q 图 · ${phraseZh(match[2])}组`;

    match = key.match(/^(.+) log-transform diagnostic$/);
    if (match && featureZh[match[1]]) return `${phraseZh(match[1])} log 变换诊断`;

    match = key.match(/^Highest observed group: (.+) at ([0-9.]+)% attrition \(n=([0-9,]+)\)\.$/);
    if (match) return `观察到流失率最高的组：${phraseZh(match[1])}，流失率 ${match[2]}%（n=${match[3]}）。`;

    match = key.match(/^Adds counts and confidence intervals; top group is (.+) at ([0-9.]+)% \(n=([0-9,]+)\)\.$/);
    if (match) return `补充计数和置信区间；最高组为 ${phraseZh(match[1])}，流失率 ${match[2]}%（n=${match[3]}）。`;

    match = key.match(/^Chi-square\/Cramér’s V screen: V=([0-9.]+), p=([0-9.e-]+); interpret as marginal association only\.$/);
    if (match) return `卡方 / Cramér’s V 筛查：V=${match[1]}，p=${match[2]}；仅解释为边际关联。`;

    match = key.match(/^For the Left group: mean=([0-9.]+), median=([0-9.]+); compare with Stayed in the expanded table\.$/);
    if (match) return `离职组：均值=${match[1]}，中位数=${match[2]}；可在展开表中与留任组比较。`;

    match = key.match(/^Checks Gaussian-like behavior and tail deviation for (.+) among employees who (stayed|left)\.$/);
    if (match) return `检查${phraseZh(match[1])}在${match[2] === "stayed" ? "留任" : "离职"}员工中的近似高斯行为和尾部偏离。`;

    return null;
  };

  const preserveOuterSpace = (original, replacement) => {
    const prefix = String(original).match(/^\s*/)?.[0] || "";
    const suffix = String(original).match(/\s*$/)?.[0] || "";
    return `${prefix}${replacement}${suffix}`;
  };

  const translated = (source, lang) => {
    const key = normalize(source);
    if (!key) return source;
    if (lang === "zh") {
      const stepMatch = key.match(/^Step\s+(\d+)$/);
      if (stepMatch) return `步骤 ${stepMatch[1]}`;

      const evidenceMatch = key.match(/^Evidence\s+·\s+(\d+)\s+items?$/);
      if (evidenceMatch) return `证据 · ${evidenceMatch[1]} 项`;

      const galleryMatch = key.match(/^Gallery\s+·\s+(\d+)\s+evidence\s+items$/);
      if (galleryMatch) return `图集 · ${galleryMatch[1]} 项证据`;

      const codeMatch = key.match(/^Code\s+·\s+(.+)$/);
      if (codeMatch) {
        const label = translated(codeMatch[1], lang);
        return label === codeMatch[1] ? source : `代码 · ${label}`;
      }
    }
    const entry = translations[key];
    if (!entry) {
      if (lang === "zh") {
        const fallback = fallbackZh(key);
        if (fallback) return fallback;
      }
      return source;
    }
    if (typeof entry === "string") return lang === defaultLang ? entry : source;
    return entry[lang] || source;
  };

  const isSkipped = (node) => {
    const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    return Boolean(parent && parent.closest(skipSelector));
  };

  const collectTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (isSkipped(node)) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      textNodes.push(node);
      originalText.set(node, node.nodeValue);
    }
  };

  const collectAttributes = () => {
    document.querySelectorAll("[aria-label], [title], [alt]").forEach((element) => {
      if (element.closest(skipSelector)) return;
      ["aria-label", "title", "alt"].forEach((name) => {
        if (element.hasAttribute(name)) {
          originalAttributes.push({ element, name, source: element.getAttribute(name) });
        }
      });
    });
  };

  const setLanguage = (lang) => {
    const nextLang = lang === "en" ? "en" : "zh";
    textNodes.forEach((node) => {
      const source = originalText.get(node);
      node.nodeValue = preserveOuterSpace(source, translated(source, nextLang));
    });
    codeCommentNodes.forEach((element) => {
      const source = originalCodeCommentText.get(element);
      const match = String(source || "").match(/^#\s*Purpose:\s*(.+)$/);
      if (match) {
        const body = translated(match[1], nextLang);
        element.textContent = nextLang === "zh" && body !== match[1] ? `# 目的：${body}` : source;
      } else {
        element.textContent = translated(source, nextLang);
      }
    });
    originalAttributes.forEach(({ element, name, source }) => {
      element.setAttribute(name, translated(source, nextLang));
    });

    const meta = config.meta || {};
    if (meta[nextLang]?.title) document.title = meta[nextLang].title;
    const description = document.querySelector('meta[name="description"]');
    if (description && meta[nextLang]?.description) {
      description.setAttribute("content", meta[nextLang].description);
    }

    document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-lang-target]").forEach((button) => {
      const active = button.dataset.langTarget === nextLang;
      button.setAttribute("aria-pressed", String(active));
    });

    try {
      localStorage.setItem(storageKey, nextLang);
    } catch (error) {
      // Ignore private-mode storage failures.
    }

    if (typeof config.onLanguageChange === "function") {
      config.onLanguageChange(nextLang);
    }
    // MathJax owns its rendered nodes after initial page load. Retypesetting on
    // language switches can duplicate formulas, so math blocks are skipped above.
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang-target]");
    if (!button) return;
    setLanguage(button.dataset.langTarget);
  });

  collectTextNodes();
  collectAttributes();
  document.querySelectorAll(".code-block .c1").forEach((element) => {
    codeCommentNodes.push(element);
    originalCodeCommentText.set(element, element.textContent);
  });

  let initialLang = defaultLang;
  try {
    initialLang = localStorage.getItem(storageKey) || defaultLang;
  } catch (error) {
    initialLang = defaultLang;
  }

  window.setArticleLanguage = setLanguage;
  setLanguage(initialLang);
})();
