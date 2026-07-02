// Generated public writing file. Edit personal_blog/writing-posts.js instead.

window.personalWritingSettings = {
  "defaultLanguage": "zh",
  "defaultCategory": "Notes",
  "defaultScope": "public",
  "publicBuild": "generated-public-only",
  "writingFile": "writing-posts.js",
  "publicSlugs": [
    "median-of-means-estimator",
    "hr-analytics-eda"
  ]
};

window.personalWritingPosts = [
  {
    "slug": "median-of-means-estimator",
    "title": "Median-of-Means Estimator: Robust Mean Under Heavy-Tailed Noise",
    "category": "Statistics",
    "date": "2026-06-30",
    "readingTime": "8 min read",
    "level": "Public note",
    "status": "published",
    "visibility": "public",
    "series": "Statistics Notes",
    "articlePath": "articles/median-of-means/index.html",
    "summary": "A compact statistics note that starts with one outlier, then uses a Monte Carlo experiment to compare the tail risk of sample mean, median, and median-of-means.",
    "tags": [
      "Statistics",
      "Robust Estimation",
      "Heavy Tails",
      "Data Intuition"
    ],
    "metrics": [
      {
        "label": "Concept",
        "value": "robust estimation"
      },
      {
        "label": "Experiment",
        "value": "5,000 repeats"
      },
      {
        "label": "Focus",
        "value": "tail-risk control"
      }
    ],
    "takeaways": [
      "One extreme value can make an ordinary mean look precise while pointing to the wrong center.",
      "Median-of-means asks for the typical average among small groups, not the average of every raw point at once.",
      "As long as fewer than half of the groups are badly contaminated, the median step can suppress the outlier group."
    ],
    "body": []
  },
  {
    "slug": "hr-analytics-eda",
    "title": "HR Analytics EDA: From Data Audit to Attrition Classification",
    "category": "Data Analysis",
    "date": "2026-07-02",
    "readingTime": "18 min read",
    "level": "Project article",
    "status": "published",
    "visibility": "public",
    "series": "EDA Notes",
    "articlePath": "articles/hr-analytics-eda/index.html",
    "summary": "A notebook-style EDA article that turns a Kaggle HR table into a reproducible workflow: data audit, missingness and duplicate checks, df_eda / df_model separation, chart interpretation, and classification boundaries.",
    "tags": [
      "EDA",
      "HR Analytics",
      "Pandas",
      "Data Cleaning",
      "Classification"
    ],
    "metrics": [
      {
        "label": "Data",
        "value": "1,480 x 38"
      },
      {
        "label": "Checks",
        "value": "missing + duplicates"
      },
      {
        "label": "Frame",
        "value": "EDA -> classification"
      }
    ],
    "takeaways": [
      "The article keeps raw data audit, cleaning decisions, and modeling assumptions visible before interpreting charts.",
      "df_eda stays readable for explanation while df_model handles imputation and encoding for modeling.",
      "Attrition is framed as an imbalanced classification target, with EDA conclusions treated as descriptive signals rather than causal proof."
    ],
    "body": []
  }
];

window.zhPersonalWritingPosts = {
  "median-of-means-estimator": {
    "title": "Median-of-Means Estimator：重尾噪声下的稳健均值",
    "category": "统计学",
    "readingTime": "8 分钟阅读",
    "level": "公开笔记",
    "series": "统计笔记",
    "summary": "从一个异常值例子出发，用 Monte Carlo 实验比较普通均值、中位数和 median-of-means 的误差尾部风险。",
    "tags": [
      "统计学",
      "稳健估计",
      "重尾分布",
      "数据直觉"
    ],
    "metrics": [
      {
        "label": "概念",
        "value": "稳健估计"
      },
      {
        "label": "实验",
        "value": "5,000 次重复"
      },
      {
        "label": "重点",
        "value": "尾部风险控制"
      }
    ],
    "takeaways": [
      "一个极端值可以让普通均值看起来很精确，但指向错误中心。",
      "Median-of-means 问的是许多小组均值里的典型值，而不是一次性平均所有原始点。",
      "只要被严重污染的组不到一半，中位数聚合就能压下异常组。"
    ],
    "body": []
  },
  "hr-analytics-eda": {
    "title": "HR Analytics EDA：从数据审计到员工流失分类框架",
    "category": "数据分析",
    "readingTime": "18 分钟阅读",
    "level": "项目文章",
    "series": "EDA 笔记",
    "summary": "把 Kaggle HR 表格整理成可复现 EDA 流程：数据审计、缺失与重复检查、df_eda / df_model 分离、图表解释和分类建模边界。",
    "tags": [
      "EDA",
      "HR Analytics",
      "Pandas",
      "数据清洗",
      "分类问题"
    ],
    "metrics": [
      {
        "label": "数据",
        "value": "1,480 x 38"
      },
      {
        "label": "检查",
        "value": "缺失 + 重复"
      },
      {
        "label": "框架",
        "value": "EDA -> 分类"
      }
    ],
    "takeaways": [
      "文章先保留原始数据审计、清洗决策和建模假设，再进入图表解释。",
      "df_eda 负责可读解释，df_model 负责缺失填补、编码和后续建模输入。",
      "员工流失被定义为不平衡分类目标，EDA 结论保持为描述性信号而非因果证明。"
    ],
    "body": []
  }
};
