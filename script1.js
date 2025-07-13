function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    let li = document.createElement("li");
    li.textContent = task;
    li.onclick = function () {
      this.remove();
    };
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }  