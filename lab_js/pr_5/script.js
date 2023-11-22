document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");
    const sortButton = document.getElementById("sortButton");
    sortButton.addEventListener("click", sortTasks);
    
    function sortTasks() {
        const tasks = getTasks();
        tasks.sort((b, a) => {
            if (a.completed && !b.completed) {
                return -1;
            } else if (!a.completed && b.completed) {
                return 1;
            }
            return 0;
        });

        taskList.innerHTML = "";
        tasks.forEach(addTask);
        updateLocalStorage(tasks);
    }

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
      if (task.taskDate === undefined){
        const now = new Date();
        const date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
        task.taskDate = date;
      }
      li.innerHTML = `
            <input type="checkbox">
            <span class="task-text">${task.text}</span>
            <div>
            <span class="task-date">${task.taskDate}</span>
            <button class="delete-btn">X</button>
            </div>
      `;
      taskList.appendChild(li);

      const checkbox = li.querySelector("input[type='checkbox']");
      const taskText = li.querySelector(".task-text");
      const deleteBtn = li.querySelector(".delete-btn");

      checkbox.checked = task.completed;
      if (checkbox.checked){
        checkbox.classList.toggle("checkbox-hidden");
      }
      li.classList.toggle("completed", task.completed);

      checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        li.classList.toggle("completed", checkbox.checked);
        checkbox.classList.toggle("checkbox-hidden");
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
                location.reload()
            }
        });
        });

        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li);
            updateLocalStorage(getTasks());
          });
    }

    function getTasks() {
      const tasks = [];
      const taskElements = document.querySelectorAll(".task");
      taskElements.forEach(function (taskElement) {
        const checkbox = taskElement.querySelector("input[type='checkbox']");
        const text = taskElement.querySelector(".task-text").textContent;
        const date = taskElement.querySelector(".task-date").textContent;
        const completed = taskElement.classList.contains("completed");
        tasks.push({ text,taskDate: date, completed });
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
