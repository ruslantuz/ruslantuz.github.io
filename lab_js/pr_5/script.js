document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");

    function updateLocalStorage(tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(addTask);
    }

    function addTask(task) {
      const li = document.createElement("li");
      li.className = "task";
      li.innerHTML = `
        <input type="checkbox">
        <span class="task-text">${task.text}</span>
      `;
      taskList.appendChild(li);

      const checkbox = li.querySelector("input[type='checkbox']");
      const taskText = li.querySelector(".task-text");

      checkbox.checked = task.completed;
      li.classList.toggle("completed", task.completed);

      checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        li.classList.toggle("completed", checkbox.checked);
        updateLocalStorage(getTasks());
      });

      taskText.addEventListener("dblclick", function () {
        const input = document.createElement("input");
        input.type = "text";
        input.value = task.text;
        input.classList.add("edit-input");
        li.replaceChild(input, taskText);
        input.focus();

        input.addEventListener("keyup", function (event) {
            if (event.key === "Enter" && input.value.trim() !== "") {
                const newText = input.value;
                li.replaceChild(taskText, input);
                taskText.textContent = newText;
                updateLocalStorage(getTasks());
            }
        });
    });
    }

    function getTasks() {
      const tasks = [];
      const taskElements = document.querySelectorAll(".task");
      taskElements.forEach(function (taskElement) {
        const checkbox = taskElement.querySelector("input[type='checkbox']");
        const text = taskElement.querySelector(".task-text").textContent;
        const completed = taskElement.classList.contains("completed");
        tasks.push({ text, completed });
      });
      return tasks;
    }

    newTaskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter" && newTaskInput.value.trim() !== "") {
        const task = { text: newTaskInput.value, completed: false };
        addTask(task);
        updateLocalStorage(getTasks());
        newTaskInput.value = "";
      }
    });

    loadTasks();
  });
