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
  const skipSelector = "script, style, textarea, pre, code, svg, mjx-container";

  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim();

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
    if (!entry) return source;
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
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
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
