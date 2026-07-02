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
    "body": [
      {
        "type": "lead",
        "text": "Start with the smallest useful example. We want to estimate the true average level of a dataset. Most observations are near 10, but one record is 1000."
      },
      {
        "type": "code",
        "language": "python",
        "code": "x = [10, 11, 9, 10, 12, 11, 10, 9, 10, 1000]"
      },
      {
        "type": "paragraph",
        "text": "The ordinary mean looks like a clean number, but it is not describing the typical level anymore."
      },
      {
        "type": "math",
        "formula": "\\frac{10+11+9+10+12+11+10+9+10+1000}{10}=109.2",
        "caption": "Most points are around 10, but the single value 1000 pulls the ordinary mean to 109.2."
      },
      {
        "type": "heading",
        "text": "Group first, then take the median"
      },
      {
        "type": "paragraph",
        "text": "Median-of-means changes the aggregation rule. First split the data into small groups, compute the mean of each group, and then take the median of those group means."
      },
      {
        "type": "table",
        "columns": [
          "Group",
          "Data",
          "Group mean"
        ],
        "rows": [
          [
            "1",
            "10, 11",
            "10.5"
          ],
          [
            "2",
            "9, 10",
            "9.5"
          ],
          [
            "3",
            "12, 11",
            "11.5"
          ],
          [
            "4",
            "10, 9",
            "9.5"
          ],
          [
            "5",
            "10, 1000",
            "505"
          ]
        ]
      },
      {
        "type": "math",
        "formula": "\\operatorname{median}(10.5, 9.5, 11.5, 9.5, 505)=10.5",
        "caption": "The outlier contaminates one group, but the middle group mean remains close to the true center."
      },
      {
        "type": "table",
        "columns": [
          "Method",
          "Estimate"
        ],
        "rows": [
          [
            "Ordinary mean",
            "109.2"
          ],
          [
            "Median-of-means",
            "10.5"
          ]
        ]
      },
      {
        "type": "callout",
        "title": "The core question changes",
        "text": "Ordinary mean asks: what is the average of all points? Median-of-means asks: what is the typical average among many small groups?"
      },
      {
        "type": "heading",
        "text": "From the example to the estimator"
      },
      {
        "type": "paragraph",
        "text": "This is the same intuition behind my note on Cauchy distribution and heavy tails. Cauchy is a warning sign because its usual mean integral does not converge absolutely. In real datasets the mean may exist, but if the tail is heavy, a few records can still pull the sample mean far away from the typical center."
      },
      {
        "type": "math",
        "formula": "\\hat\\mu_{\\mathrm{MOM}} = \\operatorname{median}\\left(\\bar X_1,\\ldots,\\bar X_k\\right),\\quad \\bar X_j = \\frac{1}{|G_j|}\\sum_{i\\in G_j} X_i",
        "caption": "In general, split the sample into k groups, compute the mean inside each group, then take the median of those group means."
      },
      {
        "type": "notebook",
        "title": "Notebook experiment: repeat the contamination",
        "subtitle": "A single outlier example shows what can go wrong; repeated random experiments show how unstable the error distribution becomes.",
        "kernel": "python / numpy / pandas",
        "cells": [
          {
            "type": "markdown",
            "text": "Now generate 200 observations many times. In each run, 95% of the sample comes from normal noise around 10, while 5% comes from extreme noise that is still centered at 10. Then compare sample mean, sample median, and median-of-means over 5000 repeats."
          },
          {
            "type": "code",
            "language": "python",
            "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nrng = np.random.default_rng(42)\n\ndef median_of_means(x, k=20):\n    x = np.array(x, copy=True)\n    rng.shuffle(x)\n    blocks = np.array_split(x, k)\n    block_means = [block.mean() for block in blocks]\n    return np.median(block_means)\n\ndef generate_sample(n=200, true_center=10, contamination_rate=0.05):\n    x = rng.normal(true_center, 1, size=n)\n    mask = rng.random(n) < contamination_rate\n    x[mask] = rng.normal(true_center, 50, size=mask.sum())\n    return x\n\ndef run_experiment(repeats=5000, n=200, true_center=10):\n    records = []\n    for _ in range(repeats):\n        x = generate_sample(n=n, true_center=true_center)\n        records.append({\n            \"sample_mean\": np.mean(x),\n            \"median\": np.median(x),\n            \"median_of_means\": median_of_means(x, k=20),\n        })\n    return pd.DataFrame(records)\n\nresults = run_experiment()\nresults.head()"
          },
          {
            "type": "output",
            "columns": [
              "sample_mean",
              "median",
              "median_of_means"
            ],
            "rows": [
              [
                "9.783",
                "9.948",
                "10.097"
              ],
              [
                "10.869",
                "9.924",
                "10.114"
              ],
              [
                "10.055",
                "10.003",
                "10.199"
              ],
              [
                "8.829",
                "9.903",
                "9.872"
              ],
              [
                "10.799",
                "10.133",
                "10.098"
              ]
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "true_center = 10\nsummary = []\n\nfor estimator in [\"sample_mean\", \"median\", \"median_of_means\"]:\n    error = results[estimator] - true_center\n    summary.append({\n        \"estimator\": estimator,\n        \"std_of_error\": np.std(error),\n        \"mse\": np.mean(error ** 2),\n        \"mean_abs_error\": np.mean(np.abs(error)),\n        \"p95_abs_error\": np.quantile(np.abs(error), 0.95),\n        \"catastrophic_rate_error_gt_1\": np.mean(np.abs(error) > 1),\n    })\n\nsummary = pd.DataFrame(summary)\nsummary"
          },
          {
            "type": "output",
            "columns": [
              "estimator",
              "std_of_error",
              "mse",
              "mean_abs_error",
              "p95_abs_error",
              "catastrophic_rate"
            ],
            "rows": [
              [
                "sample_mean",
                "0.790",
                "0.624",
                "0.625",
                "1.550",
                "19.6%"
              ],
              [
                "median",
                "0.092",
                "0.008",
                "0.073",
                "0.183",
                "0.0%"
              ],
              [
                "median_of_means",
                "0.155",
                "0.024",
                "0.117",
                "0.296",
                "0.1%"
              ]
            ]
          },
          {
            "type": "code",
            "language": "python",
            "code": "plt.figure(figsize=(10, 6))\nplt.hist(results[\"sample_mean\"], bins=80, alpha=0.5, density=True, label=\"Sample Mean\")\nplt.hist(results[\"median\"], bins=80, alpha=0.5, density=True, label=\"Median\")\nplt.hist(results[\"median_of_means\"], bins=80, alpha=0.5, density=True, label=\"Median-of-Means\")\nplt.axvline(10, linestyle=\"--\", label=\"True Center\")\nplt.title(\"Sampling Distribution under 5% Extreme Noise\")\nplt.xlabel(\"Estimated Center\")\nplt.ylabel(\"Density\")\nplt.legend()\nplt.show()"
          },
          {
            "type": "callout",
            "title": "Interpretation",
            "text": "Sample mean is not wrong every time, but it occasionally goes very wrong. Median-of-means is not claiming to have the smallest variance in every clean setting; its value is reducing tail risk of estimation error under heavy-tailed or contaminated noise."
          }
        ]
      },
      {
        "type": "interactive",
        "widget": "mom-monte-carlo-lab",
        "title": "Monte Carlo sampling distribution",
        "caption": "Move the contamination rate or extreme-noise scale. The red distribution is the sample mean; green is median-of-means. Watch the 95% error and catastrophic-error rate."
      },
      {
        "type": "heading",
        "text": "How I read the result"
      },
      {
        "type": "table",
        "columns": [
          "Estimator",
          "What it trusts",
          "Main risk"
        ],
        "rows": [
          [
            "Sample mean",
            "All numeric magnitude",
            "A small number of extreme observations can dominate it."
          ],
          [
            "Sample median",
            "Rank order",
            "It estimates a center, but not the mean target itself."
          ],
          [
            "Median-of-means",
            "Most group averages",
            "Bad grouping or too many contaminated groups can still hurt it."
          ]
        ]
      },
      {
        "type": "callout",
        "title": "Connection to my notes",
        "text": "This article is motivated by my handwritten note on Cauchy distribution and heavy tails. I am not publishing the raw note image here; the public version turns the idea into notation, explanation, and an interactive check."
      },
      {
        "type": "callout",
        "title": "Practical takeaway",
        "text": "When a dataset has salary outliers, abnormal transaction values, long-tailed response times, or noisy scraped records, I should not ask only what the mean is. I should ask what assumptions make that mean stable. Median-of-means reduces tail risk of estimation error under heavy-tailed or contaminated noise."
      }
    ]
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
    "body": [
      {
        "text": "先从最小的有用例子开始。我们想估计一组数据的真实平均水平：大部分观测都在 10 附近，但有一个记录是 1000。"
      },
      {
        "code": "x = [10, 11, 9, 10, 12, 11, 10, 9, 10, 1000]"
      },
      {
        "text": "普通均值看起来是一个干净的数字，但它已经不再描述这组数据的典型水平。"
      },
      {
        "caption": "大部分点在 10 附近，但单个 1000 把普通均值拉到了 109.2。"
      },
      {
        "text": "先分组，再取中位数"
      },
      {
        "text": "Median-of-means 改变的是聚合方式：先把数据分成小组，每组求均值，最后对这些组均值取中位数。"
      },
      {
        "columns": [
          "组",
          "数据",
          "组均值"
        ],
        "rows": [
          [
            "1",
            "10, 11",
            "10.5"
          ],
          [
            "2",
            "9, 10",
            "9.5"
          ],
          [
            "3",
            "12, 11",
            "11.5"
          ],
          [
            "4",
            "10, 9",
            "9.5"
          ],
          [
            "5",
            "10, 1000",
            "505"
          ]
        ]
      },
      {
        "caption": "异常值污染了其中一组，但位于中间的组均值仍然接近真实中心。"
      },
      {
        "columns": [
          "方法",
          "估计结果"
        ],
        "rows": [
          [
            "普通均值",
            "109.2"
          ],
          [
            "Median-of-means",
            "10.5"
          ]
        ]
      },
      {
        "title": "核心问题变了",
        "text": "普通均值问的是：所有点的平均是多少？Median-of-means 问的是：许多小组的平均值里，典型的小组平均是多少？"
      },
      {
        "text": "从例子到一般估计器"
      },
      {
        "text": "这和我关于 Cauchy distribution 与 heavy tails 的笔记是一条直觉。Cauchy 是一个提醒：它通常意义下的 mean integral 不绝对收敛。真实数据里的均值可能存在，但如果尾部很重，少量记录仍然可能把样本均值拖离典型中心。"
      },
      {
        "caption": "一般形式：把样本分成 k 组，每组求均值，最后取这些组均值的中位数。"
      },
      {
        "title": "Notebook 实验：重复污染过程",
        "subtitle": "单个异常值例子只能说明可能出问题；重复随机实验才能看到误差分布是否真的更不稳定。",
        "kernel": "python / numpy / pandas",
        "cells": [
          {
            "text": "接下来每次生成 200 个样本：95% 来自以 10 为中心的正常噪声，5% 来自仍然以 10 为中心、但波动极大的极端噪声。重复 5000 次后，比较普通均值、普通中位数和 median-of-means 的估计误差。"
          },
          {
            "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nrng = np.random.default_rng(42)\n\ndef median_of_means(x, k=20):\n    x = np.array(x, copy=True)\n    rng.shuffle(x)\n    blocks = np.array_split(x, k)\n    block_means = [block.mean() for block in blocks]\n    return np.median(block_means)\n\ndef generate_sample(n=200, true_center=10, contamination_rate=0.05):\n    x = rng.normal(true_center, 1, size=n)\n    mask = rng.random(n) < contamination_rate\n    x[mask] = rng.normal(true_center, 50, size=mask.sum())\n    return x\n\ndef run_experiment(repeats=5000, n=200, true_center=10):\n    records = []\n    for _ in range(repeats):\n        x = generate_sample(n=n, true_center=true_center)\n        records.append({\n            \"sample_mean\": np.mean(x),\n            \"median\": np.median(x),\n            \"median_of_means\": median_of_means(x, k=20),\n        })\n    return pd.DataFrame(records)\n\nresults = run_experiment()\nresults.head()"
          },
          {
            "columns": [
              "sample_mean",
              "median",
              "median_of_means"
            ],
            "rows": [
              [
                "9.783",
                "9.948",
                "10.097"
              ],
              [
                "10.869",
                "9.924",
                "10.114"
              ],
              [
                "10.055",
                "10.003",
                "10.199"
              ],
              [
                "8.829",
                "9.903",
                "9.872"
              ],
              [
                "10.799",
                "10.133",
                "10.098"
              ]
            ]
          },
          {
            "code": "true_center = 10\nsummary = []\n\nfor estimator in [\"sample_mean\", \"median\", \"median_of_means\"]:\n    error = results[estimator] - true_center\n    summary.append({\n        \"estimator\": estimator,\n        \"std_of_error\": np.std(error),\n        \"mse\": np.mean(error ** 2),\n        \"mean_abs_error\": np.mean(np.abs(error)),\n        \"p95_abs_error\": np.quantile(np.abs(error), 0.95),\n        \"catastrophic_rate_error_gt_1\": np.mean(np.abs(error) > 1),\n    })\n\nsummary = pd.DataFrame(summary)\nsummary"
          },
          {
            "columns": [
              "estimator",
              "std_of_error",
              "mse",
              "mean_abs_error",
              "p95_abs_error",
              "catastrophic_rate"
            ],
            "rows": [
              [
                "sample_mean",
                "0.790",
                "0.624",
                "0.625",
                "1.550",
                "19.6%"
              ],
              [
                "median",
                "0.092",
                "0.008",
                "0.073",
                "0.183",
                "0.0%"
              ],
              [
                "median_of_means",
                "0.155",
                "0.024",
                "0.117",
                "0.296",
                "0.1%"
              ]
            ]
          },
          {
            "code": "plt.figure(figsize=(10, 6))\nplt.hist(results[\"sample_mean\"], bins=80, alpha=0.5, density=True, label=\"Sample Mean\")\nplt.hist(results[\"median\"], bins=80, alpha=0.5, density=True, label=\"Median\")\nplt.hist(results[\"median_of_means\"], bins=80, alpha=0.5, density=True, label=\"Median-of-Means\")\nplt.axvline(10, linestyle=\"--\", label=\"True Center\")\nplt.title(\"Sampling Distribution under 5% Extreme Noise\")\nplt.xlabel(\"Estimated Center\")\nplt.ylabel(\"Density\")\nplt.legend()\nplt.show()"
          },
          {
            "title": "解释",
            "text": "普通均值不是每次都错，但它偶尔会错得很离谱。Median-of-means 的价值不是保证在干净数据下方差永远最小，而是在重尾或污染噪声下降低估计误差的尾部风险。"
          }
        ]
      },
      {
        "widget": "mom-monte-carlo-lab",
        "title": "Monte Carlo 抽样分布",
        "caption": "拖动污染比例或极端噪声强度。红色分布是普通均值，绿色是 median-of-means；重点看 95% 误差和灾难误差比例。"
      },
      {
        "text": "怎么读这个结果"
      },
      {
        "columns": [
          "估计器",
          "它信任什么",
          "主要风险"
        ],
        "rows": [
          [
            "样本均值",
            "所有数值大小",
            "少数极端观测可以支配它。"
          ],
          [
            "样本中位数",
            "排序位置",
            "它估计的是中心位置，但不一定是均值目标。"
          ],
          [
            "Median-of-means",
            "大多数分组均值",
            "分组方式不好，或被污染的组太多时仍然会受影响。"
          ]
        ]
      },
      {
        "title": "和我笔记的连接",
        "text": "这篇文章来自我对 Cauchy distribution 和 heavy tails 的手写笔记整理。这里不公开原始手写图片，而是把其中的想法转成符号、解释和可交互检查。"
      },
      {
        "title": "实践提醒",
        "text": "遇到薪资 outlier、异常交易金额、长尾响应时间或爬取数据噪声时，我不应该只问均值是多少，而应该先问：什么假设能让这个均值稳定？Median-of-means 降低的是重尾噪声下的估计尾部风险，而不只是普通意义上的方差。"
      }
    ]
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
