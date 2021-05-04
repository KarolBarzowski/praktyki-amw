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

    form.addEventListener("submit", null);

    const input = document.createElement("input");
    input.type = "text";

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add";

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
    this.tasks.forEach((task) => {
      const el = document.createElement("li");
      el.textContent = task.value;
      this.list.appendChild(el);
    });
  }
}

const list = new List(document.querySelector("#app"));
