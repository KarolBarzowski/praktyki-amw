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
      input.value = task.value;
      input.addEventListener("keypress", (e) => {
        this.tasks[i].value = e.target.value;
      });

      const underline = document.createElement("span");

      li.appendChild(input);
      li.appendChild(underline);
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
}

const list = new List(document.querySelector("#app"));