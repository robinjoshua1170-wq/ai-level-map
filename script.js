const levels = [
  {
    id: 0,
    name: "AI新手村",
    icon: "00",
    goal: "把账号、工具入口、文件夹和基本概念弄清楚。",
    pass: ["能打开2个常用AI工具", "知道提示词不是咒语", "能保存自己的学习资料"],
    avoid: "不要一开始就追100个工具榜单。",
  },
  {
    id: 1,
    name: "提问基本功",
    icon: "01",
    goal: "学会给AI上下文、约束、样例和检查标准。",
    pass: ["同一任务能问出3版结果", "能让AI解释错误原因", "能把结果改成自己的语气"],
    avoid: "不要只问“帮我写一个”。",
  },
  {
    id: 2,
    name: "办公与内容工具",
    icon: "02",
    goal: "用AI完成文档、PPT、图片、视频和资料整理。",
    pass: ["做出一份可交付PPT", "写出一篇可发布图文", "完成一次资料总结"],
    avoid: "不要把“一键生成”当最终作品。",
  },
  {
    id: 3,
    name: "作品交付关",
    icon: "03",
    goal: "把工具输出变成别人愿意使用的成品。",
    pass: ["有交付清单", "能返工优化", "能解释你的制作流程"],
    avoid: "不要没有样品就谈变现。",
  },
  {
    id: 4,
    name: "工作流工坊",
    icon: "04",
    goal: "把重复步骤串成自动化流程。",
    pass: ["会触发器、节点、数据字段", "搭出一个表单到文档流程", "知道失败时怎么排查"],
    avoid: "不要把每个节点都做得太复杂。",
  },
  {
    id: 5,
    name: "AI编程与Codex",
    icon: "05",
    goal: "让AI读项目、改文件、跑测试并帮你部署。",
    pass: ["能安装并登录Codex", "能让它修改静态网页", "能看懂终端报错的大意"],
    avoid: "不要一上来就让AI做大型平台。",
  },
  {
    id: 6,
    name: "Agent塔",
    icon: "06",
    goal: "让智能体按目标调用工具、查询资料、生成结果。",
    pass: ["理解角色、工具、记忆、知识库", "搭出一个FAQ或资料助手", "知道何时不用Agent"],
    avoid: "不要把普通聊天框包装成Agent。",
  },
  {
    id: 7,
    name: "多Agent副本",
    icon: "07",
    goal: "让规划、执行、审核等多个角色协作完成复杂任务。",
    pass: ["能拆分角色边界", "能设置审核回路", "能控制成本和失败分支"],
    avoid: "不要为了炫技增加代理数量。",
  },
];

const goalConfig = {
  money: {
    target: 3,
    title: "先做可展示样品，再谈第一单变现",
    summary: "你现在需要的不是更多概念，而是用AI做出3个可展示作品：图文/PPT/视频/自动化任选其一。",
    filter: "money",
  },
  codex: {
    target: 5,
    title: "目标是跑通Codex，不是学完编程史",
    summary: "先用一个小型静态网站练习：读文件、改页面、启动服务、检查浏览器、部署上线。",
    filter: "codex",
  },
  workflow: {
    target: 4,
    title: "从一个重复流程开始，不要先学全套自动化理论",
    summary: "选一个你每天都在复制粘贴的任务，把输入、处理、输出拆成节点。",
    filter: "workflow",
  },
  efficiency: {
    target: 2,
    title: "先把AI变成日常助手，再升级到复杂工具",
    summary: "从提问、总结、改写、做PPT和资料整理开始，先让每天节省30分钟。",
    filter: "beginner",
  },
  agent: {
    target: 6,
    title: "Agent要等你理解工具调用和流程后再学",
    summary: "你要先补齐提示词、工作流和基础工具调用，再搭第一个能查资料和执行任务的智能体。",
    filter: "agent",
  },
};

const baseLevel = {
  zero: 0,
  chat: 1,
  tools: 2,
  build: 3,
};

const missions = [
  {
    title: "AI账号与文件夹开局",
    level: "Lv0",
    tags: ["beginner"],
    time: "20分钟",
    outcome: "建立一个AI学习文件夹，保存账号、教程、作品和报错截图。",
    done: ["建好资料目录", "收藏3个固定入口", "记录第一个问题"],
  },
  {
    title: "提示词四件套",
    level: "Lv1",
    tags: ["beginner"],
    time: "45分钟",
    outcome: "用背景、目标、约束、样例让AI稳定输出你要的内容。",
    done: ["同一任务生成3版", "能指出哪版更好", "能让AI按标准重写"],
  },
  {
    title: "AI做PPT最低够用版",
    level: "Lv2",
    tags: ["beginner", "money"],
    time: "90分钟",
    outcome: "把一个主题做成10页结构清楚、能发给别人的PPT。",
    done: ["有大纲", "有页面结构", "有统一视觉"],
  },
  {
    title: "短视频脚本到剪辑包",
    level: "Lv2",
    tags: ["money"],
    time: "90分钟",
    outcome: "用AI生成脚本、标题、封面文案和剪辑清单。",
    done: ["脚本可拍", "标题不夸张", "剪辑素材列表完整"],
  },
  {
    title: "第一份AI交付样品",
    level: "Lv3",
    tags: ["money"],
    time: "90分钟",
    outcome: "做一个能展示给潜在客户的前后对比案例。",
    done: ["有原始需求", "有过程截图", "有最终交付物"],
  },
  {
    title: "自动化流程拆解",
    level: "Lv4",
    tags: ["workflow"],
    time: "45分钟",
    outcome: "把一个重复任务拆成触发器、输入、处理、输出和异常处理。",
    done: ["画出流程图", "标出字段", "写出失败分支"],
  },
  {
    title: "n8n/Coze/Dify入门选择",
    level: "Lv4",
    tags: ["workflow", "agent"],
    time: "45分钟",
    outcome: "知道低代码工作流、聊天智能体、知识库应用分别适合什么场景。",
    done: ["选定一个场景", "解释为什么选这个工具", "列出不做的功能"],
  },
  {
    title: "Codex第一次改网页",
    level: "Lv5",
    tags: ["codex"],
    time: "45分钟",
    outcome: "让Codex读一个静态项目，改一处文案或样式，并启动本地服务验证。",
    done: ["能打开项目", "能看终端输出", "能验证页面变化"],
  },
  {
    title: "Codex安装排错演练",
    level: "Lv5",
    tags: ["codex"],
    time: "45分钟",
    outcome: "学会处理权限、目录、Node、端口、登录态这些新手高频问题。",
    done: ["会截图报错", "会复述环境", "知道先查哪一步"],
  },
  {
    title: "第一个资料问答Agent",
    level: "Lv6",
    tags: ["agent"],
    time: "90分钟",
    outcome: "用知识库和工具调用做一个能回答固定资料问题的助手。",
    done: ["有资料源", "有角色边界", "能拒答资料外问题"],
  },
  {
    title: "Agent工具调用最小闭环",
    level: "Lv6",
    tags: ["agent", "workflow"],
    time: "90分钟",
    outcome: "让Agent接收需求、调用一个工具、返回可检查结果。",
    done: ["输入清楚", "工具权限清楚", "输出可复核"],
  },
  {
    title: "多Agent分工练习",
    level: "Lv7",
    tags: ["agent"],
    time: "90分钟",
    outcome: "设计规划者、执行者、审核者三角色，完成一个小型内容生产流程。",
    done: ["角色不重叠", "有审核标准", "失败能回退"],
  },
];

const tools = [
  ["ChatGPT", "chat", "通用对话、写作、研究、图片理解和项目协作入口。", "先学会给上下文和检查标准。"],
  ["Claude", "chat", "长文本阅读、改稿、分析和代码解释很适合。", "适合处理长文档和复杂推理。"],
  ["Gemini", "chat", "搜索、Google生态、图片视频理解和多模态任务。", "适合资料检索和办公生态。"],
  ["Perplexity", "chat", "带来源的搜索式问答，适合快速调研。", "用来查资料，不要直接当结论。"],
  ["Canva", "content", "海报、PPT、封面和社媒图形交付。", "适合小白做第一批视觉样品。"],
  ["剪映 / CapCut", "content", "短视频剪辑、字幕、模板和移动端交付。", "适合内容号与客户短视频。"],
  ["Gamma", "content", "快速生成PPT和网页式演示。", "先用来搭结构，再人工打磨。"],
  ["Midjourney / 即梦", "content", "图片生成和视觉风格探索。", "先学审美和提示词约束。"],
  ["Cursor", "code", "AI代码编辑器，适合会一点项目结构的人。", "适合持续写代码和调试。"],
  ["Codex", "code", "让AI在项目里读文件、改代码、跑命令、验证结果。", "适合从需求直接推进到可运行作品。"],
  ["Claude Code", "code", "终端里的AI编程助手，适合代码项目协作。", "需要理解命令行和文件结构。"],
  ["GitHub", "code", "版本管理、开源项目、部署和协作基础设施。", "不会Git也要先懂保存和回滚。"],
  ["n8n", "workflow", "把表单、表格、消息、API串成自动化流程。", "适合企业流程和重复任务。"],
  ["Zapier / Make", "workflow", "海外常用自动化工具，模板多，上手快。", "适合先理解触发器和动作。"],
  ["飞书多维表格", "workflow", "表格、流程、审批和团队协作入口。", "适合中文办公场景。"],
  ["Dify", "agent", "知识库、工作流和Agent应用搭建平台。", "适合做资料助手和企业内部工具。"],
  ["Coze", "agent", "低代码智能体、插件和工作流搭建。", "适合快速做聊天式Agent。"],
  ["LangGraph", "agent", "构建可控、多步骤、多Agent应用的开发框架。", "适合进阶开发，不适合零基础第一天。"],
];

const codexSteps = [
  {
    title: "确认入口和账号",
    detail: "先确认你用的是桌面端、网页版还是CLI；登录状态和订阅权限要能正常进入。",
    checks: ["能打开Codex", "知道当前工作区文件夹", "知道自己用哪个账号"],
  },
  {
    title: "准备一个小项目",
    detail: "不要一开始丢大型项目。先用一个HTML/CSS/JS静态站，方便观察每一步变化。",
    checks: ["项目文件少于10个", "能本地打开", "有明确修改目标"],
  },
  {
    title: "让Codex先读再改",
    detail: "第一句话不要直接“帮我做完整网站”，先让它查看结构、说明理解，再改小范围。",
    checks: ["读过关键文件", "列出改动范围", "没有覆盖无关文件"],
  },
  {
    title: "跑命令看证据",
    detail: "每次改完都要启动本地服务、看终端、打开浏览器检查，而不是只相信回答。",
    checks: ["知道端口", "能复制报错", "能截图页面"],
  },
  {
    title: "处理权限和路径",
    detail: "Windows新手最常见是目录、权限、空格路径、Node版本和端口占用。",
    checks: ["知道项目绝对路径", "知道端口是否被占用", "知道不要乱删文件"],
  },
  {
    title: "部署前做最小验收",
    detail: "检查首页、手机布局、按钮、图片路径、README和部署配置，再发公网链接。",
    checks: ["本地页面正常", "图片能加载", "公网链接能访问"],
  },
];

const blockers = [
  ["安装教程看了很多还是不行", "不要继续换教程。先固定一个入口，把系统、路径、报错原文、你做过的步骤整理成排查单。大多数问题都卡在权限、环境变量、Node或端口。"],
  ["Codex不知道我的项目在哪", "把项目放进一个简单英文路径，明确告诉它工作目录。让它先列文件，不要先改代码。"],
  ["AI回答很泛，没法直接用", "补四件事：背景、目标、限制、验收标准。要求它先问缺失信息，再给结果。"],
  ["工具太多不知道先学谁", "按任务选工具。写作研究先对话工具，PPT海报先Canva/Gamma，自动化先n8n/飞书，Agent再Dify/Coze。"],
  ["Agent概念越学越乱", "先问它有没有工具调用、记忆、知识库、流程控制和失败处理。没有这些，多半只是聊天机器人。"],
];

const moneyRoutes = [
  {
    title: "内容号增长",
    min: "Lv2",
    output: "选题库、脚本、标题、封面、剪辑清单。",
    first: "连续发7条同主题内容，记录完播和评论问题。",
  },
  {
    title: "PPT/文档交付",
    min: "Lv2",
    output: "企业汇报、课程讲义、招商PPT、总结报告。",
    first: "找一个真实旧PPT，做前后对比样品。",
  },
  {
    title: "短视频素材包",
    min: "Lv3",
    output: "脚本、字幕、封面、分镜、剪辑版本。",
    first: "给一个本地商家或个人IP做一条样片。",
  },
  {
    title: "自动化搭建",
    min: "Lv4",
    output: "表单收集、自动回复、资料归档、报表生成。",
    first: "把一个手动复制粘贴流程节省30分钟。",
  },
  {
    title: "AI小工具/Agent",
    min: "Lv6",
    output: "网页工具、资料问答助手、内部流程Agent。",
    first: "做一个只解决单一问题的小助手并让3个人试用。",
  },
];

const faqs = [
  ["我完全零基础，应该先学编程吗？", "不用。先学会提问、做内容、整理资料和看懂文件结构。等你明确想做网站或自动化，再学最小必要编程。"],
  ["学到什么程度可以开始变现？", "能稳定做出别人看得懂、愿意用、能返工的样品时。不是学完所有工具，而是有可交付成果。"],
  ["为什么我照着教程做总失败？", "教程通常省略环境差异。你要记录系统、版本、路径、报错和每一步动作，先学会排查。"],
  ["AI工具会不会很快过时？", "单个工具会变，任务结构不会变。研究、写作、视觉、自动化、编程、Agent这些能力会继续存在。"],
  ["Agent和工作流先学哪个？", "大多数人先学工作流。你先理解输入、节点、输出和异常处理，再学Agent会少很多幻觉。"],
  ["每天只有20分钟怎么学？", "只做一个闭环：看一个概念，做一个小任务，保存一个结果。不要刷长课不产出。"],
];

const pathForm = document.querySelector("#pathForm");
const goalSelect = document.querySelector("#goalSelect");
const baseSelect = document.querySelector("#baseSelect");
const timeSelect = document.querySelector("#timeSelect");
const trackSelect = document.querySelector("#trackSelect");
const currentLevelChip = document.querySelector("#currentLevelChip");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const progressLabel = document.querySelector("#progressLabel");
const progressFill = document.querySelector("#progressFill");
const levelMap = document.querySelector("#levelMap");
const missionGrid = document.querySelector("#missionGrid");
const toolGrid = document.querySelector("#toolGrid");
const toolSearch = document.querySelector("#toolSearch");
const codexChecklist = document.querySelector("#codexChecklist");
const blockerList = document.querySelector("#blockerList");
const moneyGrid = document.querySelector("#moneyGrid");
const faqGrid = document.querySelector("#faqGrid");

let activeMissionFilter = "all";
let activeToolCategory = "all";
let currentPath = loadSavedPath();

renderAll();
applySavedForm();
updateDiagnosis(currentPath, false);

pathForm.addEventListener("submit", (event) => {
  event.preventDefault();
  currentPath = readPath();
  localStorage.setItem("ai-map-path", JSON.stringify(currentPath));
  updateDiagnosis(currentPath, true);
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeMissionFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMissions();
  });
});

document.querySelectorAll(".tool-tab").forEach((button) => {
  button.addEventListener("click", () => {
    activeToolCategory = button.dataset.category;
    document.querySelectorAll(".tool-tab").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTools();
  });
});

toolSearch.addEventListener("input", renderTools);

function renderAll() {
  renderLevels(0, goalConfig.money.target);
  renderMissions();
  renderTools();
  renderCodex();
  renderMoney();
  renderFaq();
}

function readPath() {
  return {
    goal: goalSelect.value,
    base: baseSelect.value,
    time: Number(timeSelect.value),
    track: trackSelect.value,
  };
}

function loadSavedPath() {
  try {
    const saved = JSON.parse(localStorage.getItem("ai-map-path"));
    if (saved?.goal && saved?.base) return saved;
  } catch {
    return null;
  }
  return { goal: "money", base: "zero", time: 20, track: "unsure" };
}

function applySavedForm() {
  goalSelect.value = currentPath.goal;
  baseSelect.value = currentPath.base;
  timeSelect.value = String(currentPath.time);
  trackSelect.value = currentPath.track;
}

function updateDiagnosis(path, shouldScroll) {
  const config = goalConfig[path.goal];
  const start = baseLevel[path.base] ?? 0;
  const target = Math.max(config.target, start);
  const gap = Math.max(target - start, 0);
  const progress = Math.round((start / target) * 100) || 8;
  const nextLevel = levels[Math.min(start + 1, target)];
  const nextText =
    gap === 0
      ? `你已经达到这个目标的最低等级，下一步应该做真实作品验证。`
      : `建议先冲 ${nextLevel.name}。当前到目标还差 ${gap} 关。`;
  const timeText = path.time === 20 ? "每天20分钟" : path.time === 45 ? "每天45分钟" : "每天90分钟";
  const trackText = trackLabel(path.track);

  currentLevelChip.textContent = `Lv${start} ${levels[start].name}`;
  resultTitle.textContent = config.title;
  resultSummary.textContent = `${timeText}，${nextText}变现方向：${trackText}。${config.summary}`;
  progressLabel.textContent = `路线匹配度 ${Math.max(progress, 12)}%`;
  progressFill.style.width = `${Math.max(progress, 12)}%`;

  renderLevels(start, target);
  setMissionFilter(config.filter);

  if (shouldScroll) {
    document.querySelector(".result-band").scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function trackLabel(track) {
  return {
    unsure: "先探索",
    content: "内容号",
    delivery: "交付服务",
    automation: "自动化",
    product: "小工具/Agent",
  }[track];
}

function setMissionFilter(filter) {
  activeMissionFilter = filter;
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderMissions();
}

function renderLevels(start, target) {
  levelMap.innerHTML = levels
    .map((level) => {
      const state = level.id === start ? "active" : level.id > target ? "locked" : "";
      const status = level.id < start ? "已掌握" : level.id === start ? "当前关卡" : level.id <= target ? "目标路径" : "后续进阶";
      return `
        <article class="level-card ${state}">
          <div class="level-number">
            <strong>Lv${level.id}</strong>
            <span class="level-icon">${level.icon}</span>
          </div>
          <h3>${level.name}</h3>
          <p>${level.goal}</p>
          <span class="tag">${status}</span>
          <ul>${level.pass.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p><strong>别踩坑：</strong>${level.avoid}</p>
        </article>
      `;
    })
    .join("");
}

function renderMissions() {
  const filtered = missions.filter((mission) => {
    return activeMissionFilter === "all" || mission.tags.includes(activeMissionFilter);
  });
  missionGrid.innerHTML = filtered
    .map(
      (mission) => `
        <article class="mission-card">
          <div class="mission-meta">
            <span class="mission-level">${mission.level}</span>
            <span class="tag">${mission.time}</span>
          </div>
          <h3>${mission.title}</h3>
          <p>${mission.outcome}</p>
          <ul>${mission.done.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderTools() {
  const query = toolSearch.value.trim().toLowerCase();
  const filtered = tools.filter(([name, category, description, note]) => {
    const matchCategory = activeToolCategory === "all" || category === activeToolCategory;
    const text = `${name} ${description} ${note}`.toLowerCase();
    return matchCategory && (!query || text.includes(query));
  });

  toolGrid.innerHTML = filtered.length
    ? filtered
        .map(
          ([name, category, description, note]) => `
            <article class="tool-card">
              <div class="tool-meta">
                <span class="tool-category">${categoryLabel(category)}</span>
              </div>
              <h3>${name}</h3>
              <p>${description}</p>
              <p><strong>学习重点：</strong>${note}</p>
            </article>
          `,
        )
        .join("")
    : `<article class="tool-card"><h3>没有匹配工具</h3><p>换一个关键词，比如“Agent”“视频”“PPT”或“自动化”。</p></article>`;
}

function categoryLabel(category) {
  return {
    chat: "对话研究",
    content: "内容创作",
    code: "AI编程",
    workflow: "工作流",
    agent: "Agent",
  }[category];
}

function renderCodex() {
  codexChecklist.innerHTML = codexSteps
    .map(
      (step) => `
        <li class="check-item">
          <h3>${step.title}</h3>
          <p>${step.detail}</p>
          <ul>${step.checks.map((item) => `<li>${item}</li>`).join("")}</ul>
        </li>
      `,
    )
    .join("");

  blockerList.innerHTML = blockers
    .map(
      ([title, answer], index) => `
        <article class="accordion-item ${index === 0 ? "open" : ""}">
          <button class="accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span>${title}</span>
            <span>+</span>
          </button>
          <div class="accordion-content">
            <p>${answer}</p>
          </div>
        </article>
      `,
    )
    .join("");

  blockerList.querySelectorAll(".accordion-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderMoney() {
  moneyGrid.innerHTML = moneyRoutes
    .map(
      (route) => `
        <article class="money-card">
          <div class="money-meta"><strong>${route.min}</strong><span>最低起点</span></div>
          <h3>${route.title}</h3>
          <p><strong>交付物：</strong>${route.output}</p>
          <p><strong>第一单验证：</strong>${route.first}</p>
        </article>
      `,
    )
    .join("");
}

function renderFaq() {
  faqGrid.innerHTML = faqs
    .map(
      ([question, answer]) => `
        <article class="faq-card">
          <h3>${question}</h3>
          <p>${answer}</p>
        </article>
      `,
    )
    .join("");
}
