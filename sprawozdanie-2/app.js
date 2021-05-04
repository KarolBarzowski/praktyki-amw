class Task {
  constructor(value) {
    this.value = value;
    this.isCompleted = false;
  }
}

class List {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.tasks = [new Task("lorem"), new Task("ipsum")];
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

      const underline = document.createElement("span");

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.type = "button";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => this.removeTask(i));

      li.appendChild(input);
      li.appendChild(underline);
      li.appendChild(removeBtn);
      this.list.appendChild(li);
    });
  }

  addTask(e, input) {
    e.preventDefault();

    if (input.value.length) {
      this.tasks.push(new Task(input.value.trim()));

      this.renderTasks();
      input.value = "";
    }
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
    this.renderTasks();
  }
}

const list = new List(document.querySelector("#app"));
