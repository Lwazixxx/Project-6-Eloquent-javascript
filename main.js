// ============================
// DATE DISPLAY
// ============================
document.getElementById("date").innerText = new Date().toDateString();

// ============================
// GLOBAL VARIABLES
// ============================
let tasks = [];
let currentFilter = 'undone';
let searchQuery = '';

// ============================
// DOM ELEMENTS
// ============================
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveTask");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// ============================
// FILTER BUTTONS
// ============================
const filterBtns = document.querySelectorAll('.filter');

filterBtns.forEach(btn => {
  btn.onclick = () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    // Update current filter
    const text = btn.textContent.toLowerCase();
    if (text === 'undone') currentFilter = 'undone';
    else if (text === 'completed') currentFilter = 'completed';
    else if (text === 'top priority') currentFilter = 'top';
    renderTasks();
  };
});

// Set default active filter
document.querySelector('.filter').classList.add('active');

// ============================
// SEARCH FUNCTIONALITY
// ============================
searchInput.oninput = () => {
  searchQuery = searchInput.value.toLowerCase();
  renderTasks();
};

// ============================
// MODAL CONTROLS
// ============================
openBtn.onclick = () => modal.classList.remove("hidden");
closeBtn.onclick = () => modal.classList.add("hidden");

// ============================
// SAVE TASK
// ============================
saveBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;

  // Get selected priority
  const priorityRadios = document.querySelectorAll('input[name="p"]:checked');
  const priority = priorityRadios.length > 0
    ? priorityRadios[0].nextSibling.textContent.trim().toLowerCase()
    : 'medium';

  const task = {
    id: Date.now(),
    title: text,
    completed: false,
    priority: priority
  };

  tasks.push(task);

  // Reset form
  input.value = "";
  modal.classList.add("hidden");
  document.querySelectorAll('input[name="p"]').forEach(r => r.checked = false);

  renderTasks();
};

// ============================
// DELETE TASK
// ============================
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

// ============================
// TOGGLE COMPLETED
// ============================
function toggleCompleted(task) {
  task.completed = !task.completed;
  renderTasks();
}

// ============================
// RENDER TASKS
// ============================
function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks;

  // Apply status filter
  if (currentFilter === 'undone') {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(t => t.completed);
  } else if (currentFilter === 'top') {
    filteredTasks = tasks.filter(t => t.priority === 'high');
  }

  // Apply search filter
  if (searchQuery) {
    filteredTasks = filteredTasks.filter(t =>
      t.title.toLowerCase().includes(searchQuery)
    );
  }

  // Render filtered tasks
  filteredTasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <input type="checkbox" class="completed" ${task.completed ? 'checked' : ''}>
      <span class="priority-${task.priority}">${task.title}</span>
      <button class="delete">×</button>
    `;

    div.querySelector(".completed").onchange = () => toggleCompleted(task);
    div.querySelector(".delete").onclick = () => deleteTask(task.id);

    taskList.appendChild(div);
  });
}




