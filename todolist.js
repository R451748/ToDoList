const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = taskInput.value;
  li.classList.add("task-item");

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-btn");
  removeButton.onclick = () => taskList.removeChild(li);
  li.appendChild(removeButton);
  taskList.appendChild(li);
  taskInput.value = "";
}


addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
