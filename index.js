const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  todos.innerHTML += html;
};

const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    // addForm.add.value = null;
    addForm.reset();
  }
});

// delete todos
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter search
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();

  filterTodos(term);
});
