const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".input-box");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;
  if (inputValue) {
    const newLi = document.createElement("li");
    const liInnerHtml = ` 
    <span class="task">${inputValue}</span>
    <div class="todo-buttons">
      <i class="done fa-solid fa-check" style="color: #000000"></i>
      <i class="Remove fa-solid fa-trash" style="color: #000000"></i>
    </div>`;
    newLi.innerHTML = liInnerHtml;
    todoInput.value = "";
    todoList.append(newLi);
  } else {
    alert("please Enter Your Work");
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("Remove")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("task")) {
    e.target.setAttribute("contenteditable", "true");
  }
  if (e.target.classList.contains("done")) {
    e.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
  }
});
