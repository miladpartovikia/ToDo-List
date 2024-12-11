// To-Do List Logic
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn";
  deleteBtn.style.background = "#FF5C5C";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => li.remove());

  li.addEventListener("click", () => li.classList.toggle("done"));

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

// Mouse Tracker Logic
const mouseTracker = document.getElementById("mouseTracker");
document.addEventListener("mousemove", (event) => {
  mouseTracker.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
  mouseTracker.style.top = `${event.clientY}px`;
  mouseTracker.style.left = `${event.clientX}px`;
});
