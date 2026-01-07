const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
window.onload = () => {
  tasks.forEach(task => createTaskElement(task));
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  createTaskElement(task);

  taskInput.value = "";
}

function createTaskElement(task) {
  const li = document.createElement("li");

  if (task.completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = task.text;
  span.onclick = () => {
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveTasks();
  };

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    tasks = tasks.filter(t => t !== task);
    saveTasks();
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
