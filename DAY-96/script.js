const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const todosEl = document.querySelector("#todos");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = inputEl.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      setTimeout(() => {
        todoEl.classList.add("completed");
      }, 250);
      setTimeout(() => {
        todoEl.remove();
      }, 500);
    });

    todoEl.innerText = todoText;

    todosEl.appendChild(todoEl);

    inputEl.value = "";
  }
}
