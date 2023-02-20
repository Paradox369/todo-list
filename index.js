const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");
const delBtn = todos.querySelector(".delete");

const generateTemplate = (todo) => {
  const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  todos.innerHTML += html;
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
