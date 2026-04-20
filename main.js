// ============================
// DATE
// ============================
document.getElementById("date").innerText =
  new Date().toDateString();


// ============================
// ELEMENTS
// ============================
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveTask");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];


// ============================
// OPEN / CLOSE MODAL
// ============================
openBtn.onclick = () => modal.classList.remove("hidden");
closeBtn.onclick = () => modal.classList.add("hidden");


// ============================
// SAVE TASK
// ============================
saveBtn.onclick = () => {
  const text = input.value;

  if (!text) return;

  const task = {
    id: Date.now(),
    title: text
  };

  tasks.push(task);

  input.value = "";
  modal.classList.add("hidden");

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
// RENDER TASKS
// ============================
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <span>${task.title}</span>
      <button class="delete">×</button>
    `;

    div.querySelector(".delete").onclick =
      () => deleteTask(task.id);

    taskList.appendChild(div);
  });
}

//========================================
// FiLTer tasks by completed and priority 
//========================================
