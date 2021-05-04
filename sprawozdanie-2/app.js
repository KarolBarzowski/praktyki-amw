class Task {
  constructor(value) {
    this.value = value;
    this.isCompleted = false;
  }
}

class List {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
    this.createForm();
    this.list = this.createList();
    this.renderTasks();
  }

  createForm() {
    const form = document.createElement("form");
    form.classList.add("form");

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("input");

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add";
    button.classList.add("button");

    form.addEventListener("submit", (e) => this.addTask(e, input));

    form.appendChild(input);
    form.appendChild(button);
    this.parentEl.appendChild(form);
  }

  createList() {
    const ul = document.createElement("ul");
    ul.classList.add("list");

    this.parentEl.appendChild(ul);
    return ul;
  }

  renderTasks() {
    while (this.list.lastElementChild) {
      this.list.removeChild(this.list.lastElementChild);
    }

    this.tasks.forEach((task, i) => {
      const li = document.createElement("li");

      const input = document.createElement("input");
      input.type = "text";
      input.value = task.value;
      input.addEventListener("keypress", (e) => {
        this.tasks[i].value = e.target.value;
      });
      if (task.isCompleted) input.classList.add("completed");

      const underline = document.createElement("span");

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.type = "button";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => this.removeTask(i));

      const checkboxContainer = document.createElement("label");
      checkboxContainer.classList.add("checkbox");

      const checkboxInput = document.createElement("input");
      checkboxInput.type = "checkbox";
      checkboxInput.checked = task.isCompleted;
      checkboxInput.classList.add("checkbox__input");

      const checkboxCheckmark = document.createElement("span");
      checkboxCheckmark.classList.add("checkmark");

      checkboxContainer.appendChild(checkboxInput);
      checkboxContainer.appendChild(checkboxCheckmark);

      checkboxInput.addEventListener("change", () => this.handleCheck(i));

      li.appendChild(input);
      li.appendChild(underline);
      li.appendChild(removeBtn);
      li.appendChild(checkboxContainer);
      this.list.appendChild(li);
    });
  }

  addTask(e, input) {
    e.preventDefault();

    if (input.value.length) {
      this.tasks.push(new Task(input.value.trim()));

      this.renderTasks();
      input.value = "";
      this.updateLocalStorage();
    }
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
    this.renderTasks();
    this.updateLocalStorage();
  }

  handleCheck(taskIndex) {
    this.tasks[taskIndex].isCompleted = !this.tasks[taskIndex].isCompleted;
    this.renderTasks();
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

const list = new List(document.querySelector("#app"));
