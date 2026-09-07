const YEAR = 2026;
const STORAGE_KEY = "design-calendar-2026-v3";
const THEME_KEY = "design-calendar-theme-v2";
const MENU_KEY = "design-calendar-menu-v2";
const VIEW_KEY = "design-calendar-view-v1";
const EMBEDDED_SNAPSHOT_KEY = "__DESIGN_CALENDAR_SNAPSHOT__";
const PALETTE_VERSION = 3;
const DEFAULT_THEME = "fresh";
const CAN_EDIT = false;
const IS_EDITORIAL_PREVIEW = true;

document.body.classList.toggle("style-editorial", IS_EDITORIAL_PREVIEW);

const monthNames = [
  "1 月", "2 月", "3 月", "4 月", "5 月", "6 月",
  "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"
];

const brandColors = {
  green: "#70d900",
  orange: "#ff8a00",
  yellow: "#ffe900",
  pink: "#ffa8ea",
  purple: "#9189ff",
  blue: "#77c9f2",
  black: "#111111",
  gray: "#eeeeee"
};

const projectColorMap = {
  "Deepclaw": brandColors.purple,
  "Deepclaw初稿": brandColors.purple,
  "Deepclaw（加班）": brandColors.black,
  "DeepWorks": brandColors.green,
  "DeepWorks-加班": brandColors.black,
  "FastAGI": brandColors.yellow,
  "FastAGI chat": brandColors.yellow,
  "AGI产品设计系统规范": brandColors.yellow,
  "DeepNova": brandColors.blue,
  "DeepexiFoil": brandColors.green,
  "DeepexiFoil 个人版": brandColors.green,
  "DeepexiLab": brandColors.blue,
  "FastData": brandColors.orange,
  "FastData（加班）": brandColors.black,
  "DIC北区丰台园项目": brandColors.orange,
  "DIC南区交通项目": brandColors.orange,
  "人力需求：DIC简讯长图": brandColors.pink,
  "人力需求：内推海报": brandColors.pink,
  "滴普官网": brandColors.purple,
  "假期": brandColors.gray,
  "端午假期": brandColors.gray,
  "请假半天": brandColors.gray
};

const initialProjects = [
  ["Deepclaw", projectColorMap.Deepclaw],
  ["Deepclaw初稿", projectColorMap.Deepclaw初稿],
  ["Deepclaw（加班）", projectColorMap["Deepclaw（加班）"]],
  ["DeepWorks", projectColorMap.DeepWorks],
  ["DeepWorks-加班", projectColorMap["DeepWorks-加班"]],
  ["FastAGI", projectColorMap.FastAGI],
  ["FastAGI chat", projectColorMap["FastAGI chat"]],
  ["AGI产品设计系统规范", projectColorMap.AGI产品设计系统规范],
  ["DeepNova", projectColorMap.DeepNova],
  ["DeepexiFoil", projectColorMap.DeepexiFoil],
  ["DeepexiFoil 个人版", projectColorMap["DeepexiFoil 个人版"]],
  ["DeepexiLab", projectColorMap.DeepexiLab],
  ["FastData", projectColorMap.FastData],
  ["FastData（加班）", projectColorMap["FastData（加班）"]],
  ["DIC北区丰台园项目", projectColorMap.DIC北区丰台园项目],
  ["DIC南区交通项目", projectColorMap.DIC南区交通项目],
  ["人力需求：DIC简讯长图", projectColorMap["人力需求：DIC简讯长图"]],
  ["人力需求：内推海报", projectColorMap["人力需求：内推海报"]],
  ["滴普官网", projectColorMap.滴普官网],
  ["假期", projectColorMap.假期],
  ["端午假期", projectColorMap.端午假期],
  ["请假半天", projectColorMap.请假半天]
];

const initialPlans = {
  "05": {
    "1": ["假期"],
    "2": ["假期"],
    "3": ["假期"],
    "4": ["假期"],
    "5": ["假期"],
    "6": ["FastAGI chat"],
    "7": ["FastAGI chat", "Deepclaw初稿"],
    "8": ["Deepclaw初稿"],
    "9": ["FastAGI", "请假半天"],
    "11": ["AGI产品设计系统规范", "Deepclaw"],
    "12": ["AGI产品设计系统规范", "Deepclaw"],
    "13": ["FastAGI", "人力需求：DIC简讯长图"],
    "14": ["Deepclaw", "人力需求：DIC简讯长图"],
    "15": ["Deepclaw"],
    "16": ["Deepclaw（加班）"],
    "18": ["Deepclaw", "FastAGI"],
    "19": ["滴普官网"],
    "20": ["滴普官网"],
    "21": ["Deepclaw", "DeepexiLab"],
    "22": ["Deepclaw", "人力需求：内推海报"],
    "25": ["FastAGI", "Deepclaw"],
    "26": ["FastAGI", "滴普官网"],
    "27": ["FastAGI", "Deepclaw"],
    "28": ["FastAGI", "DeepexiLab", "DeepNova"],
    "29": ["DeepexiFoil 个人版", "FastAGI"],
    "30": ["FastData（加班）"]
  },
  "06": {
    "1": ["DeepexiFoil 个人版"],
    "2": ["DeepexiFoil", "FastAGI"],
    "3": ["DeepexiFoil", "Deepclaw", "FastAGI"],
    "4": ["DeepexiFoil", "DeepNova"],
    "5": ["DIC南区交通项目", "DeepexiFoil"],
    "6": ["Deepclaw（加班）"],
    "8": ["Deepclaw", "DeepexiFoil"],
    "9": ["Deepclaw"],
    "10": ["DeepNova"],
    "11": ["FastAGI"],
    "15": ["FastAGI"],
    "16": ["FastAGI", "Deepclaw"],
    "17": ["Deepclaw"],
    "18": ["DeepNova"],
    "19": ["端午假期"],
    "22": ["FastData", "FastAGI"],
    "23": ["FastAGI", "Deepclaw"],
    "24": ["DeepNova"],
    "25": ["Deepclaw", "FastAGI", "滴普官网"],
    "26": ["Deepclaw", "FastAGI"],
    "29": ["FastAGI", "DIC北区丰台园项目"],
    "30": ["Deepclaw", "DIC北区丰台园项目"]
  },
  "07": {
    "1": ["Deepclaw"],
    "2": ["DeepWorks"],
    "3": ["DeepWorks"],
    "4": ["DeepWorks-加班"],
    "6": ["DeepWorks", "DIC北区丰台园项目"],
    "7": ["Deepclaw", "DeepWorks", "FastAGI"],
    "8": ["Deepclaw", "DeepWorks", "DIC北区丰台园项目", "滴普官网"],
    "9": ["DeepWorks"],
    "10": ["DeepWorks"],
    "11": ["DeepWorks-加班"],
    "13": ["DeepNova", "DIC南区交通项目"],
    "14": ["DeepWorks"],
    "15": ["DeepWorks", "DIC北区丰台园项目"],
    "16": ["DeepWorks"],
    "17": ["DeepWorks"],
    "20": ["DeepWorks", "Deepclaw", "滴普官网"],
    "21": ["DeepNova", "Deepclaw", "滴普官网"],
    "22": ["Deepclaw", "DeepNova", "滴普官网"],
    "23": ["DeepWorks", "DeepNova"],
    "24": ["DeepWorks"],
    "25": ["DeepWorks-加班"],
    "27": ["Deepclaw", "DeepNova"],
    "28": ["DeepWorks", "Deepclaw", "DeepNova"],
    "29": ["DeepWorks", "Deepclaw"],
    "30": ["Deepclaw"],
    "31": ["Deepclaw", "DeepNova"]
  }
};

const embeddedSnapshot = loadEmbeddedSnapshot();
const state = loadState();
const savedView = loadView();
const systemToday = new Date();
const opensInCurrentMonth = systemToday.getFullYear() === YEAR;
const systemMonth = systemToday.getMonth() + 1;
const systemDay = systemToday.getDate();
const view = opensInCurrentMonth
  ? {
      ...savedView,
      currentMonth: systemMonth,
      selected: { month: systemMonth, day: systemDay },
      batchMode: false,
      selectedDays: [systemDay]
    }
  : savedView;
let currentMonth = view.currentMonth;
let selected = view.selected;
let batchMode = Boolean(view.batchMode);
let selectedDays = normalizeSelectedDays(view.selectedDays, selected);
let selectionAnchor = selectedDays[0] || selected.day;

const monthGrid = document.getElementById("monthGrid");
const calendarGrid = document.getElementById("calendarGrid");
const monthTitle = document.getElementById("monthTitle");
const selectedDateTitle = document.getElementById("selectedDateTitle");
const daySummary = document.getElementById("daySummary");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const projectList = document.getElementById("projectList");
const projectForm = document.getElementById("projectForm");
const projectNameInput = document.getElementById("projectNameInput");
const projectColorInput = document.getElementById("projectColorInput");
const projectSuggestions = document.getElementById("projectSuggestions");
const sidebar = document.querySelector(".sidebar");
const editorPanel = document.querySelector(".editor");
const sidebarToggle = document.getElementById("sidebarToggle");
const toast = document.getElementById("toast");
const accessNote = document.getElementById("accessNote");
const taskSubmitButton = taskForm.querySelector('button[type="submit"]');
const batchToggleButton = document.getElementById("batchToggle");
const clearSelectionButton = document.getElementById("clearSelectionButton");
const exportImageButton = document.getElementById("exportImageButton");
const exportPackageButton = document.getElementById("exportPackageButton");
const copyExcelButton = document.getElementById("copyExcelButton");
const dataActionSelect = document.getElementById("dataActionSelect");
const viewerDialog = document.getElementById("viewerDialog");
const viewerDialogTitle = document.getElementById("viewerDialogTitle");
const viewerDialogSummary = document.getElementById("viewerDialogSummary");
const viewerDialogList = document.getElementById("viewerDialogList");
const viewerDialogClose = document.getElementById("viewerDialogClose");

function loadState() {
  const saved = CAN_EDIT ? localStorage.getItem(STORAGE_KEY) : null;
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.plans && parsed.projects) {
        if (parsed.paletteVersion !== PALETTE_VERSION) {
          parsed.projects = normalizeProjectColors(parsed.projects);
          parsed.paletteVersion = PALETTE_VERSION;
        }
        return parsed;
      }
    } catch (error) {
      console.warn("Saved data could not be parsed", error);
    }
  }

  if (embeddedSnapshot?.data?.plans && embeddedSnapshot.data.projects) {
    const seeded = structuredClone(embeddedSnapshot.data);
    if (seeded.paletteVersion !== PALETTE_VERSION) {
      seeded.projects = normalizeProjectColors(seeded.projects);
      seeded.paletteVersion = PALETTE_VERSION;
    }
    return seeded;
  }

  return {
    paletteVersion: PALETTE_VERSION,
    plans: structuredClone(initialPlans),
    projects: normalizeProjectColors(initialProjects.map(([name, color]) => ({ name, color })))
  };
}

function loadEmbeddedSnapshot() {
  if (typeof window === "undefined") return null;
  const snapshot = window[EMBEDDED_SNAPSHOT_KEY];
  if (!snapshot || typeof snapshot !== "object") return null;
  return snapshot;
}

function isLocalEditMode() {
  if (typeof window === "undefined") return false;
  const localHosts = new Set(["localhost", "127.0.0.1", "::1", ""]);
  const params = new URLSearchParams(window.location.search);
  if (params.get("readonly") === "1") return false;
  return window.location.protocol === "file:" || localHosts.has(window.location.hostname) || params.get("edit") === "wanqing";
}

function loadView() {
  const fallback = {
    currentMonth: 8,
    selected: { month: 8, day: 1 },
    batchMode: false,
    selectedDays: [1]
  };
  const saved = localStorage.getItem(VIEW_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const month = Number(parsed?.currentMonth);
      const selectedMonth = Number(parsed?.selected?.month);
      const selectedDay = Number(parsed?.selected?.day);
      if (!Number.isInteger(month) || month < 1 || month > 12) return fallback;
      if (!Number.isInteger(selectedMonth) || selectedMonth < 1 || selectedMonth > 12) {
        return { currentMonth: month, selected: { month, day: 1 }, batchMode: false, selectedDays: [1] };
      }
      const safeDay = Number.isInteger(selectedDay) && selectedDay > 0 ? selectedDay : 1;
      return {
        currentMonth: month,
        selected: { month: selectedMonth, day: safeDay },
        batchMode: CAN_EDIT && Boolean(parsed?.batchMode),
        selectedDays: CAN_EDIT && Array.isArray(parsed?.selectedDays) ? parsed.selectedDays : [safeDay]
      };
    } catch (error) {
      console.warn("Saved view could not be parsed", error);
    }
  }

  const embeddedView = embeddedSnapshot?.view;
  if (embeddedView) {
    const month = Number(embeddedView.currentMonth);
    const selectedMonth = Number(embeddedView.selected?.month);
    const selectedDay = Number(embeddedView.selected?.day);
    if (Number.isInteger(month) && month >= 1 && month <= 12) {
      return {
        currentMonth: month,
        selected: {
          month: Number.isInteger(selectedMonth) && selectedMonth >= 1 && selectedMonth <= 12 ? selectedMonth : month,
          day: Number.isInteger(selectedDay) && selectedDay > 0 ? selectedDay : 1
        },
        batchMode: CAN_EDIT && Boolean(embeddedView.batchMode),
        selectedDays: CAN_EDIT && Array.isArray(embeddedView.selectedDays) ? embeddedView.selectedDays : [Number.isInteger(selectedDay) && selectedDay > 0 ? selectedDay : 1]
      };
    }
  }

  return fallback;
}

function normalizeSelectedDays(days, selectedDayInfo) {
  const fallbackDay = Number(selectedDayInfo?.day) || 1;
  const month = Number(selectedDayInfo?.month) || currentMonth;
  const totalDays = daysInMonth(month);
  const clean = Array.from(new Set(
    Array.isArray(days)
      ? days.map((day) => Number(day)).filter((day) => Number.isInteger(day) && day >= 1 && day <= totalDays)
      : []
  )).sort((a, b) => a - b);
  return clean.length ? clean : [Math.min(fallbackDay, totalDays)];
}

function saveView() {
  localStorage.setItem(VIEW_KEY, JSON.stringify({
    currentMonth,
    selected,
    batchMode,
    selectedDays: normalizeSelectedDays(selectedDays, selected)
  }));
}

function normalizeProjectColors(projects) {
  const accentCycle = [
    brandColors.green,
    brandColors.orange,
    brandColors.yellow,
    brandColors.pink,
    brandColors.purple,
    brandColors.blue
  ];
  return projects.map((project, index) => ({
    ...project,
    color: project.color || projectColorMap[project.name] || accentCycle[index % accentCycle.length]
  }));
}

function saveState() {
  if (!CAN_EDIT) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function padMonth(month) {
  return String(month).padStart(2, "0");
}

function getMonthData(month) {
  const key = padMonth(month);
  if (!state.plans[key]) state.plans[key] = {};
  return state.plans[key];
}

function getTasks(month, day) {
  return getMonthData(month)[String(day)] || [];
}

function setTasks(month, day, tasks) {
  if (!CAN_EDIT) return;
  const monthData = getMonthData(month);
  const cleanTasks = tasks.map((task) => task.trim()).filter(Boolean);
  if (cleanTasks.length) {
    monthData[String(day)] = cleanTasks;
  } else {
    delete monthData[String(day)];
  }
  saveState();
}

function getProjectColor(name) {
  const project = state.projects.find((item) => item.name === name);
  return project ? project.color : brandColors.gray;
}

function monthTaskCount(month) {
  return Object.values(getMonthData(month)).reduce((sum, list) => sum + list.length, 0);
}

function getSelectedDays() {
  return normalizeSelectedDays(selectedDays, selected);
}

function setSelectedDay(month, day) {
  selected = { month, day };
  currentMonth = month;
  selectedDays = [day];
  selectionAnchor = day;
}

function setSelectedDays(days, day = selected.day) {
  const cleanDays = Array.from(new Set(days.map((value) => Number(value)).filter((value) => Number.isInteger(value) && value >= 1 && value <= daysInMonth(currentMonth)))).sort((a, b) => a - b);
  selectedDays = cleanDays.length ? cleanDays : [day];
  selectionAnchor = day;
  selected = { month: currentMonth, day };
}

function updateBatchMode(nextValue) {
  batchMode = typeof nextValue === "boolean" ? nextValue : !batchMode;
  if (!batchMode) {
    selectedDays = [selected.day];
  } else {
    selectedDays = getSelectedDays();
  }
  saveView();
  renderAll();
}

function daysInMonth(month) {
  return new Date(YEAR, month, 0).getDate();
}

function mondayBasedDay(date) {
  return (date.getDay() + 6) % 7;
}

function buildCalendarDays(month) {
  const first = new Date(YEAR, month - 1, 1);
  const startOffset = mondayBasedDay(first);
  const total = daysInMonth(month);
  const prevTotal = daysInMonth(month - 1 || 12);
  const cells = [];

  for (let i = startOffset; i > 0; i -= 1) {
    cells.push({
      day: prevTotal - i + 1,
      month: month === 1 ? 12 : month - 1,
      outside: true
    });
  }

  for (let day = 1; day <= total; day += 1) {
    cells.push({ day, month, outside: false });
  }

  let nextDay = 1;
  while (cells.length % 7 !== 0 || cells.length < 42) {
    cells.push({
      day: nextDay,
      month: month === 12 ? 1 : month + 1,
      outside: true
    });
    nextDay += 1;
  }

  return cells;
}

function renderMonths() {
  monthGrid.innerHTML = "";
  monthNames.forEach((label, index) => {
    const month = index + 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `month-button${month === currentMonth ? " active" : ""}`;
    button.textContent = label;
    button.setAttribute("aria-label", `${label}，${monthTaskCount(month)} 个任务`);
    button.addEventListener("click", () => {
      currentMonth = month;
      selected = { month, day: Math.min(selected.day, daysInMonth(month)) };
      selectedDays = [selected.day];
      selectionAnchor = selected.day;
      renderAll();
    });
    monthGrid.appendChild(button);
  });
}

function renderCalendar() {
  monthTitle.textContent = `设计月度规划 · ${String(YEAR).slice(2)}年${currentMonth}月`;
  calendarGrid.innerHTML = "";
  const today = new Date();
  const activeSelectedDays = getSelectedDays();
  const batchActive = CAN_EDIT && (batchMode || activeSelectedDays.length > 1);

  buildCalendarDays(currentMonth).forEach((cell, index) => {
    const button = document.createElement("button");
    const tasks = getTasks(cell.month, cell.day);
    const isWeekend = index % 7 >= 5;
    const isActive = selected.month === cell.month && selected.day === cell.day;
    const isSelected = batchActive && cell.month === currentMonth && activeSelectedDays.includes(cell.day);
    const isToday = !cell.outside
      && today.getFullYear() === YEAR
      && today.getMonth() + 1 === cell.month
      && today.getDate() === cell.day;
    button.type = "button";
    button.className = [
      "day-cell",
      cell.outside ? "outside" : "",
      isWeekend ? "weekend" : "",
      isToday ? "today" : "",
      isActive ? "active" : "",
      isSelected ? "selected" : ""
    ].filter(Boolean).join(" ");
    button.setAttribute("aria-label", `${cell.month}月${cell.day}日，${tasks.length} 个任务`);
    if (isToday) {
      button.setAttribute("aria-current", "date");
      if (!CAN_EDIT) {
        button.classList.add("viewable");
        button.title = "查看今日任务";
        button.setAttribute("aria-label", `${cell.month}月${cell.day}日，${tasks.length} 个任务，点击查看`);
      }
    }

    const number = document.createElement("div");
    number.className = "day-number";
    number.innerHTML = `<span>${cell.day}</span><span class="day-count">${tasks.length ? `${tasks.length}项` : ""}</span>`;
    button.appendChild(number);

    const preview = document.createElement("div");
    preview.className = "task-preview";
    tasks.slice(0, 3).forEach((task) => {
      preview.appendChild(createTaskChip(task));
    });
    if (tasks.length > 3) {
      const more = document.createElement("span");
      more.className = "more-tasks";
      more.textContent = `还有 ${tasks.length - 3} 项`;
      preview.appendChild(more);
    }
    button.appendChild(preview);

    button.addEventListener("click", (event) => {
      if (!CAN_EDIT) {
        if (isToday) openViewerDialog(cell.month, cell.day);
        return;
      }
      if (CAN_EDIT && batchMode) {
        const dayMonth = cell.outside ? cell.month : currentMonth;
        currentMonth = dayMonth;
        if (event.shiftKey && !cell.outside) {
          const anchor = selectionAnchor || cell.day;
          const start = Math.min(anchor, cell.day);
          const end = Math.max(anchor, cell.day);
          const range = Array.from({ length: end - start + 1 }, (_, index) => start + index);
          setSelectedDays(range, cell.day);
        } else {
          const existing = getSelectedDays();
          const nextDays = existing.includes(cell.day)
            ? existing.filter((day) => day !== cell.day)
            : [...existing, cell.day];
          setSelectedDays(nextDays, cell.day);
        }
      } else {
        selected = { month: cell.month, day: cell.day };
        if (!cell.outside) currentMonth = cell.month;
        selectedDays = [cell.day];
        selectionAnchor = cell.day;
      }
      if (!cell.outside && cell.month === currentMonth) {
        selected = { month: cell.month, day: cell.day };
      }
      setEditorCollapsed(false);
      renderAll();
    });

    calendarGrid.appendChild(button);
  });
}

function createTaskChip(task) {
  const chip = document.createElement("div");
  chip.className = "task-chip";
  chip.style.setProperty("--chip-color", getProjectColor(task));
  const text = document.createElement("span");
  text.textContent = task;
  chip.appendChild(text);
  return chip;
}

function openViewerDialog(month, day) {
  const tasks = getTasks(month, day);
  viewerDialogTitle.textContent = `${YEAR} 年 ${month} 月 ${day} 日`;
  viewerDialogSummary.textContent = tasks.length ? `当天共有 ${tasks.length} 项任务` : "当天暂无任务";
  viewerDialogList.innerHTML = "";

  tasks.forEach((task) => {
    const row = document.createElement("div");
    row.className = "viewer-dialog-task";

    const swatch = document.createElement("span");
    swatch.className = "viewer-dialog-swatch";
    swatch.style.background = getProjectColor(task);

    const text = document.createElement("span");
    text.textContent = task;
    row.append(swatch, text);
    viewerDialogList.appendChild(row);
  });

  if (!viewerDialog.open) viewerDialog.showModal();
  viewerDialogClose.focus();
}

function renderEditor() {
  const tasks = getTasks(selected.month, selected.day);
  const activeSelectedDays = getSelectedDays();
  const batchActive = CAN_EDIT && (batchMode || activeSelectedDays.length > 1);
  selectedDateTitle.textContent = batchActive
    ? `${YEAR} 年 ${selected.month} 月 · 已选 ${activeSelectedDays.length} 天`
    : `${YEAR} 年 ${selected.month} 月 ${selected.day} 日`;
  daySummary.textContent = batchActive
    ? `已选 ${activeSelectedDays.length} 天`
    : (tasks.length ? `当天已有 ${tasks.length} 项任务。` : CAN_EDIT ? "这一天还没有任务，可以直接添加。" : "这一天暂无任务。");
  taskList.innerHTML = "";

  if (!tasks.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "暂无任务";
    taskList.appendChild(empty);
    return;
  }

  tasks.forEach((task, index) => {
    const row = document.createElement("div");
    row.className = "task-row";
    row.style.setProperty("--chip-color", getProjectColor(task));

    const input = document.createElement("input");
    input.value = task;
    input.setAttribute("aria-label", `编辑第 ${index + 1} 项任务`);
    input.readOnly = !CAN_EDIT;
    if (CAN_EDIT) {
      input.addEventListener("change", () => {
        const next = [...tasks];
        next[index] = input.value;
        setTasks(selected.month, selected.day, next);
        addProjectIfNeeded(input.value);
        renderAll();
        showToast("已保存");
      });
    }

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.title = "删除任务";
    remove.addEventListener("click", () => {
      const next = tasks.filter((_, taskIndex) => taskIndex !== index);
      setTasks(selected.month, selected.day, next);
      renderAll();
      showToast("已删除");
    });

    row.append(input);
    if (CAN_EDIT) row.append(remove);
    taskList.appendChild(row);
  });
}

function renderProjects() {
  projectList.innerHTML = "";
  projectSuggestions.innerHTML = "";
  state.projects.forEach((project, index) => {
    const item = document.createElement("div");
    item.className = CAN_EDIT ? "project-item" : "project-item read-only-project";

    if (!CAN_EDIT) {
      const swatch = document.createElement("span");
      swatch.className = "project-swatch";
      swatch.style.background = project.color;

      const name = document.createElement("span");
      name.className = "project-name";
      name.textContent = project.name;

      item.append(swatch, name);
      projectList.appendChild(item);

      const option = document.createElement("option");
      option.value = project.name;
      projectSuggestions.appendChild(option);
      return;
    }

    const colorInput = document.createElement("input");
    colorInput.className = "project-color";
    colorInput.type = "color";
    colorInput.value = project.color;
    colorInput.title = "编辑项目颜色";

    const nameInput = document.createElement("input");
    nameInput.className = "project-name-input";
    nameInput.value = project.name;
    nameInput.setAttribute("aria-label", "编辑项目名称");

    const save = document.createElement("button");
    save.type = "button";
    save.className = "project-action";
    save.title = "保存修改";
    save.setAttribute("aria-label", "保存修改");
    save.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
    save.addEventListener("click", () => {
      updateProject(index, nameInput.value, colorInput.value);
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "project-action danger";
    remove.title = "删除项目";
    remove.setAttribute("aria-label", "删除项目");
    remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>';
    remove.addEventListener("click", () => {
      removeProject(index);
    });

    nameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        updateProject(index, nameInput.value, colorInput.value);
      }
    });

    colorInput.addEventListener("change", () => {
      updateProject(index, nameInput.value, colorInput.value);
    });

    item.append(colorInput, nameInput, save, remove);
    projectList.appendChild(item);

    const option = document.createElement("option");
    option.value = project.name;
    projectSuggestions.appendChild(option);
  });
}

function addProjectIfNeeded(name, color = projectColorInput.value) {
  if (!CAN_EDIT) return false;
  const cleanName = name.trim();
  if (!cleanName) return false;
  const exists = state.projects.some((project) => project.name === cleanName);
  if (exists) return false;
  state.projects.push({ name: cleanName, color });
  saveState();
  return true;
}

function updateProject(index, nextName, nextColor) {
  if (!CAN_EDIT) return;
  const project = state.projects[index];
  if (!project) return;
  const cleanName = nextName.trim();
  if (!cleanName) {
    showToast("名称不能为空");
    return;
  }
  const exists = state.projects.some((item, itemIndex) => itemIndex !== index && item.name === cleanName);
  if (exists) {
    showToast("项目已存在");
    return;
  }
  const oldName = project.name;
  project.name = cleanName;
  project.color = nextColor;
  if (oldName !== cleanName) {
    renameTasks(oldName, cleanName);
  }
  state.paletteVersion = PALETTE_VERSION;
  saveState();
  renderAll();
  showToast("项目已保存");
}

function renameTasks(oldName, nextName) {
  Object.values(state.plans).forEach((monthData) => {
    Object.keys(monthData).forEach((day) => {
      monthData[day] = monthData[day].map((task) => task === oldName ? nextName : task);
    });
  });
}

function removeProject(index) {
  if (!CAN_EDIT) return;
  const project = state.projects[index];
  if (!project) return;
  state.projects.splice(index, 1);
  state.paletteVersion = PALETTE_VERSION;
  saveState();
  renderAll();
  showToast("项目已删除");
}

function renderThemes() {
  const activeTheme = DEFAULT_THEME;
  document.body.classList.remove("theme-fresh", "theme-warm");
  document.body.classList.add(`theme-${activeTheme}`);
  localStorage.setItem(THEME_KEY, activeTheme);
}

function renderBatchControls() {
  const activeSelectedDays = getSelectedDays();
  const batchActive = CAN_EDIT && (batchMode || activeSelectedDays.length > 1);
  document.body.classList.toggle("batch-mode", batchActive);
  batchToggleButton.hidden = !CAN_EDIT;
  clearSelectionButton.hidden = !CAN_EDIT;
  batchToggleButton.setAttribute("aria-pressed", String(batchActive));
  batchToggleButton.textContent = batchActive ? "多选中" : "多选";
  clearSelectionButton.disabled = !batchActive;
  taskSubmitButton.textContent = "添加";
}

function renderAccessMode() {
  document.body.classList.toggle("read-only-mode", !CAN_EDIT);
  if (accessNote) {
    accessNote.textContent = CAN_EDIT ? "本地编辑模式" : "外部访问模式 · 只读";
  }
  taskForm.hidden = !CAN_EDIT;
  projectForm.hidden = !CAN_EDIT;
  document.querySelector(".compact-actions").hidden = !CAN_EDIT;
  document.getElementById("clearDayButton").hidden = !CAN_EDIT;
  editorPanel.hidden = !CAN_EDIT;
}

function renderMenuState() {
  const collapsed = localStorage.getItem(MENU_KEY) !== "open";
  document.body.classList.toggle("menu-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.title = collapsed ? "展开设置" : "收起设置";
  sidebarToggle.querySelector(".toggle-label").textContent = collapsed ? "设置" : "收起";
}

function setEditorCollapsed(collapsed) {
  document.body.classList.toggle("editor-collapsed", collapsed);
  const closeButton = document.getElementById("closeEditor");
  closeButton.textContent = collapsed ? "↑" : "×";
  closeButton.title = collapsed ? "展开编辑区" : "收起编辑区";
}

function renderAll() {
  saveView();
  renderThemes();
  renderAccessMode();
  renderMenuState();
  renderBatchControls();
  setEditorCollapsed(document.body.classList.contains("editor-collapsed"));
  renderMonths();
  renderCalendar();
  renderEditor();
  renderProjects();
}

function buildSnapshot() {
  return {
    data: {
      year: YEAR,
      ...state,
      paletteVersion: PALETTE_VERSION
    },
    theme: DEFAULT_THEME,
    menu: localStorage.getItem(MENU_KEY) || "collapsed",
    view: JSON.parse(localStorage.getItem(VIEW_KEY) || "{}")
  };
}

function buildDataScript(snapshot) {
  return `window.${EMBEDDED_SNAPSHOT_KEY} = ${JSON.stringify(snapshot).replace(/</g, "\\u003c")};\n`;
}

function buildPortableHtml() {
  return document.documentElement.outerHTML;
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  if (typeof ctx.roundRect === "function") {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, r);
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function fillRoundRect(ctx, x, y, width, height, radius, fillStyle, strokeStyle = null, lineWidth = 1) {
  ctx.save();
  drawRoundRect(ctx, x, y, width, height, radius);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  if (strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
  ctx.restore();
}

function fitCanvasText(ctx, text, maxWidth) {
  const clean = String(text).trim();
  if (ctx.measureText(clean).width <= maxWidth) return clean;
  let clipped = clean;
  while (clipped && ctx.measureText(`${clipped}...`).width > maxWidth) {
    clipped = clipped.slice(0, -1);
  }
  return `${clipped}...`;
}

function canvasToBlob(canvas, type = "image/png") {
  return new Promise((resolve) => {
    if (typeof canvas.toBlob === "function") {
      canvas.toBlob((blob) => resolve(blob), type);
      return;
    }
    resolve(null);
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function makeCrcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
}

const crcTable = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let index = 0; index < bytes.length; index += 1) {
    crc = crcTable[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function toDosDateTime(date = new Date()) {
  const year = Math.max(date.getFullYear(), 1980);
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

function writeUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeUint32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true);
}

function concatBytes(chunks, totalLength) {
  const output = new Uint8Array(totalLength);
  let offset = 0;
  chunks.forEach((chunk) => {
    output.set(chunk, offset);
    offset += chunk.length;
  });
  return output;
}

function createZip(files) {
  const encoder = new TextEncoder();
  const { dosDate, dosTime } = toDosDateTime();
  const localChunks = [];
  const centralChunks = [];
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const dataBytes = typeof file.content === "string" ? encoder.encode(file.content) : file.content;
    const checksum = crc32(dataBytes);

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    writeUint32(localView, 0, 0x04034b50);
    writeUint16(localView, 4, 20);
    writeUint16(localView, 6, 0x0800);
    writeUint16(localView, 8, 0);
    writeUint16(localView, 10, dosTime);
    writeUint16(localView, 12, dosDate);
    writeUint32(localView, 14, checksum);
    writeUint32(localView, 18, dataBytes.length);
    writeUint32(localView, 22, dataBytes.length);
    writeUint16(localView, 26, nameBytes.length);
    writeUint16(localView, 28, 0);
    localHeader.set(nameBytes, 30);

    localChunks.push(localHeader, dataBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    writeUint32(centralView, 0, 0x02014b50);
    writeUint16(centralView, 4, 20);
    writeUint16(centralView, 6, 20);
    writeUint16(centralView, 8, 0x0800);
    writeUint16(centralView, 10, 0);
    writeUint16(centralView, 12, dosTime);
    writeUint16(centralView, 14, dosDate);
    writeUint32(centralView, 16, checksum);
    writeUint32(centralView, 20, dataBytes.length);
    writeUint32(centralView, 24, dataBytes.length);
    writeUint16(centralView, 28, nameBytes.length);
    writeUint16(centralView, 30, 0);
    writeUint16(centralView, 32, 0);
    writeUint16(centralView, 34, 0);
    writeUint16(centralView, 36, 0);
    writeUint32(centralView, 38, 0);
    writeUint32(centralView, 42, offset);
    centralHeader.set(nameBytes, 46);
    centralChunks.push(centralHeader);

    offset += localHeader.length + dataBytes.length;
  });

  const centralSize = centralChunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const endHeader = new Uint8Array(22);
  const endView = new DataView(endHeader.buffer);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 4, 0);
  writeUint16(endView, 6, 0);
  writeUint16(endView, 8, files.length);
  writeUint16(endView, 10, files.length);
  writeUint32(endView, 12, centralSize);
  writeUint32(endView, 16, offset);
  writeUint16(endView, 20, 0);

  const chunks = [...localChunks, ...centralChunks, endHeader];
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  return concatBytes(chunks, totalLength);
}

async function readTextAsset(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error("asset unavailable");
    return await response.text();
  } catch (error) {
    return fallback;
  }
}

async function exportLatestPackage() {
  const snapshot = buildSnapshot();
  const dataScript = buildDataScript(snapshot);
  const indexHtml = await readTextAsset("./index.html", `<!doctype html>\n${document.documentElement.outerHTML}`);
  const styles = await readTextAsset("./styles.css", "");
  const appScript = await readTextAsset("./app.js", "");
  const snapshotJson = JSON.stringify(snapshot, null, 2);
  const readme = [
    "设计月度规划使用说明",
    "",
    "1. 解压这个文件夹。",
    "2. 双击打开 index.html。",
    "3. 已填写的数据在 design-calendar-data.js 里，会作为另一台设备的初始数据。",
    "4. 后续继续填写时，数据仍会自动保存在当前浏览器；换设备前请再次点击“导出最新整包”。"
  ].join("\n");

  const zipBytes = createZip([
    { name: "index.html", content: indexHtml },
    { name: "styles.css", content: styles },
    { name: "app.js", content: appScript },
    { name: "design-calendar-data.js", content: dataScript },
    { name: "design-calendar-snapshot.json", content: snapshotJson },
    { name: "README.txt", content: readme }
  ]);
  const blob = new Blob([zipBytes], { type: "application/zip" });
  downloadBlob(blob, `design-calendar-latest-${YEAR}.zip`);
}

async function exportCalendarImage() {
  const month = currentMonth;
  const cells = buildCalendarDays(month);
  const selectedDaysSet = new Set(getSelectedDays());
  const isBatch = batchMode || selectedDaysSet.size > 1;
  const title = `设计月度规划 · ${String(YEAR).slice(2)}年${month}月`;
  const width = 1680;
  const pad = 36;
  const titleHeight = 92;
  const weekdayHeight = 48;
  const cols = 7;
  const rows = cells.length / 7;
  const gap = 10;
  const cellWidth = (width - pad * 2 - gap * (cols - 1)) / cols;
  const cellHeight = 160;
  const height = pad * 2 + titleHeight + weekdayHeight + rows * cellHeight + (rows - 1) * gap;
  const canvas = document.createElement("canvas");
  const scale = Math.max(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);

  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, width, height);

  fillRoundRect(ctx, pad / 2, pad / 2, width - pad, height - pad, 28, "#ffffff");

  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillStyle = "#111111";
  ctx.font = "700 44px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  ctx.fillText(title, pad, pad + 2);

  ctx.fillStyle = "#666666";
  ctx.font = "600 16px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  ctx.fillText(isBatch ? `已选 ${selectedDaysSet.size} 天` : "当前月视图", pad, pad + 54);

  const badgeText = `${monthTaskCount(month)} 项任务`;
  const badgeWidth = Math.max(112, ctx.measureText(badgeText).width + 28);
  fillRoundRect(ctx, width - pad - badgeWidth, pad + 8, badgeWidth, 34, 17, "#f5f5f5", "#e9e9e9");
  ctx.fillStyle = "#111111";
  ctx.font = "600 15px Arial, PingFang SC, Microsoft YaHei, sans-serif";
  ctx.fillText(badgeText, width - pad - badgeWidth + 14, pad + 16);

  const weekdays = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
  const weekdayY = pad + titleHeight;
  weekdays.forEach((label, index) => {
    const x = pad + index * (cellWidth + gap);
    fillRoundRect(ctx, x, weekdayY, cellWidth, weekdayHeight, 12, "#111111");
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 16px Arial, PingFang SC, Microsoft YaHei, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x + cellWidth / 2, weekdayY + weekdayHeight / 2);
  });

  const cellStartY = weekdayY + weekdayHeight + gap;
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 7);
    const col = index % 7;
    const x = pad + col * (cellWidth + gap);
    const y = cellStartY + row * (cellHeight + gap);
    const tasks = getTasks(cell.month, cell.day);
    const isOutside = cell.outside;
    const isWeekend = col >= 5;
    const isSelected = selectedDaysSet.has(cell.day) && cell.month === currentMonth;
    const base = isOutside ? "#f0f0f0" : isWeekend ? "#edf6ff" : "#ffffff";
    const fill = isSelected ? "#f4efff" : base;
    const stroke = isSelected ? "#9189ff" : "#ececec";

    fillRoundRect(ctx, x, y, cellWidth, cellHeight, 16, fill, stroke, isSelected ? 3 : 1);

    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = isOutside ? "#9b9b9b" : "#111111";
    ctx.font = "700 18px Arial, PingFang SC, Microsoft YaHei, sans-serif";
    ctx.fillText(String(cell.day), x + 12, y + 10);

    ctx.fillStyle = "#8a8a8a";
    ctx.font = "600 12px Arial, PingFang SC, Microsoft YaHei, sans-serif";
    ctx.fillText(tasks.length ? `${tasks.length}项` : "", x + cellWidth - 52, y + 14);

    let taskY = y + 40;
    const maxTasks = 3;
    tasks.slice(0, maxTasks).forEach((task) => {
      const pillX = x + 12;
      const pillWidth = cellWidth - 24;
      const pillHeight = 26;
      fillRoundRect(ctx, pillX, taskY, pillWidth, pillHeight, 8, getProjectColor(task));
      ctx.fillStyle = "#111111";
      ctx.font = "600 12px Arial, PingFang SC, Microsoft YaHei, sans-serif";
      ctx.textBaseline = "middle";
      ctx.fillText(fitCanvasText(ctx, task, pillWidth - 16), pillX + 8, taskY + pillHeight / 2 + 0.5);
      taskY += pillHeight + 6;
    });

    if (tasks.length > maxTasks) {
      ctx.fillStyle = "#666666";
      ctx.font = "600 12px Arial, PingFang SC, Microsoft YaHei, sans-serif";
      ctx.textBaseline = "top";
      ctx.fillText(`还有 ${tasks.length - maxTasks} 项`, x + 12, y + cellHeight - 22);
    }
  });

  const fileName = `design-calendar-${YEAR}-${padMonth(month)}.png`;
  const blob = await canvasToBlob(canvas);
  if (blob) {
    downloadBlob(blob, fileName);
    return;
  }

  const fallbackBlob = await (await fetch(canvas.toDataURL("image/png"))).blob();
  downloadBlob(fallbackBlob, fileName);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function taskChipHtml(task) {
  const color = getProjectColor(task);
  return `
    <div style="display:inline-block; margin:2px 6px 2px 0; padding:3px 8px; border-radius:8px; background:${color}; color:#111111; font-size:12px; line-height:1.35; font-weight:600;">
      ${escapeHtml(task)}
    </div>
  `;
}

function buildExcelCellHtml(cell) {
  const tasks = getTasks(cell.month, cell.day);
  const isOutside = cell.outside;
  const isWeekend = mondayBasedDay(new Date(YEAR, cell.month - 1, cell.day)) >= 5;
  const background = isOutside
    ? "#f0f0f0"
    : isWeekend
      ? "#eaf6ff"
      : "#ffffff";
  const borderColor = isOutside ? "#dddddd" : "#ececec";
  const numberColor = isOutside ? "#9b9b9b" : "#111111";
  const content = tasks.length
    ? tasks.map((task) => taskChipHtml(task)).join("")
    : `<div style="min-height:18px; color:#9b9b9b; font-size:12px;">&nbsp;</div>`;

  return `
    <td style="width:132px; min-width:132px; vertical-align:top; padding:8px; border:1px solid ${borderColor}; background:${background}; color:#111111; font-family:Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:6px; font-size:14px; font-weight:700; color:${numberColor};">
        <span>${cell.day}</span>
        <span style="font-size:11px; font-weight:600; color:#777777;">${tasks.length ? `${tasks.length}项` : ""}</span>
      </div>
      <div style="font-size:0; line-height:0;">
        ${content}
      </div>
    </td>
  `;
}

function buildExcelCopyPlainText(month) {
  const rows = [];
  rows.push(`设计月度规划 · ${String(YEAR).slice(2)}年${month}月`);
  rows.push(["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"].join("\t"));
  const cells = buildCalendarDays(month);
  for (let index = 0; index < cells.length; index += 7) {
    const week = cells.slice(index, index + 7).map((cell) => {
      const tasks = getTasks(cell.month, cell.day);
      const taskText = tasks.length ? ` ${tasks.join(" / ")}` : "";
      return `${cell.day}${taskText}`;
    });
    rows.push(week.join("\t"));
  }
  return rows.join("\n");
}

function buildExcelCopyHtml(month) {
  const cells = buildCalendarDays(month);
  const title = `设计月度规划 · ${String(YEAR).slice(2)}年${month}月`;
  const tableRows = [];
  tableRows.push(`
    <tr>
      <td colspan="7" style="padding:10px 8px; border:1px solid #e8e8e8; background:#111111; color:#ffffff; font-size:16px; font-weight:700;">
        ${escapeHtml(title)}
      </td>
    </tr>
  `);
  tableRows.push(`
    <tr>
      ${["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"].map((label) => `
        <th style="padding:8px; border:1px solid #e8e8e8; background:#111111; color:#ffffff; font-size:12px; font-weight:700;">
          ${label}
        </th>
      `).join("")}
    </tr>
  `);
  for (let index = 0; index < cells.length; index += 7) {
    tableRows.push(`<tr>${cells.slice(index, index + 7).map((cell) => buildExcelCellHtml(cell)).join("")}</tr>`);
  }
  return `
    <table style="border-collapse:collapse; table-layout:fixed; font-family:Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif; font-size:13px; color:#111111;">
      <tbody>
        ${tableRows.join("")}
      </tbody>
    </table>
  `;
}

async function copyHtmlToClipboard(html, text) {
  if (navigator.clipboard && window.ClipboardItem) {
    const item = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html;charset=utf-8" }),
      "text/plain": new Blob([text], { type: "text/plain;charset=utf-8" })
    });
    await navigator.clipboard.write([item]);
    return;
  }

  const container = document.createElement("div");
  container.contentEditable = "true";
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.innerHTML = html;
  document.body.appendChild(container);

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(container);
  selection.removeAllRanges();
  selection.addRange(range);

  const ok = document.execCommand("copy");
  selection.removeAllRanges();
  container.remove();

  if (!ok) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    throw new Error("copy failed");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1400);
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!CAN_EDIT) return;
  const value = taskInput.value.trim();
  if (!value) return;
  addProjectIfNeeded(value);
  const activeSelectedDays = getSelectedDays();
  const multiSelect = batchMode || activeSelectedDays.length > 1;
  const targetDays = multiSelect ? activeSelectedDays : [selected.day];
  const month = selected.month;
  targetDays.forEach((day) => {
    setTasks(month, day, [...getTasks(month, day), value]);
  });
  taskInput.value = "";
  setEditorCollapsed(false);
  renderAll();
  showToast(multiSelect && targetDays.length > 1 ? "已批量添加" : "已添加");
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!CAN_EDIT) return;
  const added = addProjectIfNeeded(projectNameInput.value, projectColorInput.value);
  projectNameInput.value = "";
  renderAll();
  showToast(added ? "项目已添加" : "项目已存在");
});

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  selected = { month: currentMonth, day: Math.min(selected.day, daysInMonth(currentMonth)) };
  renderAll();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  selected = { month: currentMonth, day: Math.min(selected.day, daysInMonth(currentMonth)) };
  renderAll();
});

document.getElementById("todayButton").addEventListener("click", () => {
  const today = new Date();
  currentMonth = today.getFullYear() === YEAR ? today.getMonth() + 1 : 8;
  selected = { month: currentMonth, day: today.getFullYear() === YEAR ? today.getDate() : 1 };
  selectedDays = [selected.day];
  selectionAnchor = selected.day;
  renderAll();
});

document.getElementById("closeEditor").addEventListener("click", () => {
  const collapsed = document.body.classList.contains("editor-collapsed");
  setEditorCollapsed(!collapsed);
});

viewerDialogClose.addEventListener("click", () => viewerDialog.close());

viewerDialog.addEventListener("click", (event) => {
  if (event.target !== viewerDialog) return;
  const rect = viewerDialog.getBoundingClientRect();
  const clickedOutside = event.clientX < rect.left
    || event.clientX > rect.right
    || event.clientY < rect.top
    || event.clientY > rect.bottom;
  if (clickedOutside) viewerDialog.close();
});

document.getElementById("clearDayButton").addEventListener("click", () => {
  if (!CAN_EDIT) return;
  const activeSelectedDays = getSelectedDays();
  const multiSelect = batchMode || activeSelectedDays.length > 1;
  const targetDays = multiSelect ? activeSelectedDays : [selected.day];
  targetDays.forEach((day) => {
    setTasks(selected.month, day, []);
  });
  renderAll();
  showToast(multiSelect && targetDays.length > 1 ? "已清空选中日期" : "当天已清空");
});

batchToggleButton.addEventListener("click", () => {
  if (!CAN_EDIT) return;
  updateBatchMode();
});

clearSelectionButton.addEventListener("click", () => {
  if (!CAN_EDIT) return;
  batchMode = false;
  selectedDays = [selected.day];
  selectionAnchor = selected.day;
  saveView();
  renderAll();
});

sidebarToggle.addEventListener("click", () => {
  const collapsed = document.body.classList.contains("menu-collapsed");
  localStorage.setItem(MENU_KEY, collapsed ? "open" : "collapsed");
  renderMenuState();
});

document.addEventListener("click", (event) => {
  const menuOpen = !document.body.classList.contains("menu-collapsed");
  if (!menuOpen || sidebar.contains(event.target)) return;
  localStorage.setItem(MENU_KEY, "collapsed");
  renderMenuState();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (document.body.classList.contains("menu-collapsed")) return;
  localStorage.setItem(MENU_KEY, "collapsed");
  renderMenuState();
});

document.getElementById("exportButton").addEventListener("click", () => {
  const payload = JSON.stringify(buildSnapshot(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "design-calendar-2026.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast("已导出");
});

document.getElementById("exportHtmlButton").addEventListener("click", () => {
  const snapshot = buildSnapshot();
  const dataBlob = new Blob([buildDataScript(snapshot)], { type: "text/javascript;charset=utf-8" });
  const dataUrl = URL.createObjectURL(dataBlob);
  const dataLink = document.createElement("a");
  dataLink.href = dataUrl;
  dataLink.download = "design-calendar-data.js";
  dataLink.click();

  const html = buildPortableHtml();
  const blob = new Blob(["<!doctype html>\n", html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `design-calendar-${YEAR}.html`;
  link.click();
  URL.revokeObjectURL(dataUrl);
  URL.revokeObjectURL(url);
  showToast("已导出HTML和数据");
});

exportImageButton.addEventListener("click", async () => {
  try {
    await exportCalendarImage();
    showToast("已导出图片");
  } catch (error) {
    console.error(error);
    showToast("导出失败");
  }
});

exportPackageButton.addEventListener("click", async () => {
  try {
    await exportLatestPackage();
    showToast("已导出最新整包");
  } catch (error) {
    console.error(error);
    showToast("导出失败");
  }
});

copyExcelButton.addEventListener("click", async () => {
  try {
    const month = currentMonth;
    const html = buildExcelCopyHtml(month);
    const text = buildExcelCopyPlainText(month);
    await copyHtmlToClipboard(html, text);
    showToast("已复制，可直接粘贴到 Excel");
  } catch (error) {
    showToast("复制失败");
  }
});

dataActionSelect.addEventListener("change", (event) => {
  if (!CAN_EDIT) return;
  const action = event.target.value;
  event.target.value = "";
  const actionTargets = {
    "export-data": "exportButton",
    "export-html": "exportHtmlButton",
    "export-image": "exportImageButton",
    "export-package": "exportPackageButton",
    "copy-excel": "copyExcelButton",
    "import-data": "importInput"
  };
  const targetId = actionTargets[action];
  if (targetId) document.getElementById(targetId).click();
});

document.getElementById("importInput").addEventListener("change", async (event) => {
  if (!CAN_EDIT) return;
  const file = event.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const imported = JSON.parse(text);
    const payload = imported.data && imported.data.plans && imported.data.projects ? imported.data : imported;
    if (!payload.plans || !payload.projects) throw new Error("Invalid data");
    state.plans = payload.plans;
    state.projects = payload.projects;
    if (payload.paletteVersion !== PALETTE_VERSION) {
      state.projects = normalizeProjectColors(state.projects);
      state.paletteVersion = PALETTE_VERSION;
    } else {
      state.paletteVersion = payload.paletteVersion || PALETTE_VERSION;
    }
    localStorage.setItem(THEME_KEY, DEFAULT_THEME);
    if (imported.menu) localStorage.setItem(MENU_KEY, imported.menu);
    if (imported.view && imported.view.currentMonth) {
      const month = Number(imported.view.currentMonth);
      const day = Number(imported.view.selected?.day);
      currentMonth = Number.isInteger(month) && month >= 1 && month <= 12 ? month : currentMonth;
      selected = {
        month: Number.isInteger(Number(imported.view.selected?.month)) && Number(imported.view.selected?.month) >= 1 && Number(imported.view.selected?.month) <= 12
          ? Number(imported.view.selected.month)
          : currentMonth,
        day: Number.isInteger(day) && day > 0 ? day : 1
      };
      selectedDays = Array.isArray(imported.view.selectedDays) ? imported.view.selectedDays : [selected.day];
      batchMode = Boolean(imported.view.batchMode);
      selectionAnchor = selectedDays[0] || selected.day;
    }
    saveState();
    renderAll();
    showToast("已导入");
  } catch (error) {
    showToast("导入失败");
  } finally {
    event.target.value = "";
  }
});

renderAll();
