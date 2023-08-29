const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".input-box");
const todoList = document.querySelector(".todo-list");
let localStorageItems = JSON.parse(localStorage.getItem("list"));

if (!localStorageItems) {
  localStorageItems = [];
}
function addItemToDom(item) {
  const newLi = document.createElement("li");

  const liInnerHtml = `
    <span class="task">${item}</span>
    <div class="todo-buttons">
    <i class="done fa-solid fa-check" style="color: #000000"></i>
    <i class="Remove fa-solid fa-trash" style="color: #000000"></i>
    </div>`;
  newLi.innerHTML = liInnerHtml;

  // Alternative

  // task = document.createElement("span");
  // task.textContent = item;

  // btnDiv = document.createElement("div");
  // btnDiv.classList.add("todo-buttons")
  // doneBtn = document.createElement("i");
  // doneBtn.classList.add("done" , "fa-solid", "fa-check");
  // doneBtn.style.color = "#000000";

  // removeBtn = document.createElement("i");
  // removeBtn.classList.add("Remove", "fa-solid" ,"fa-trash");
  // removeBtn.style.color = "#000000";

  // btnDiv.append(doneBtn);
  // btnDiv.append(removeBtn);
  // newLi.append(task);
  // newLi.append(btnDiv);

  todoInput.value = "";
  todoList.prepend(newLi);
}

function setItemToLocaleStorage(item) {
  localStorageItems.push(item);
  localStorage.setItem("list", JSON.stringify(localStorageItems));
}

function deleteItemFromLocaleStorage(item) {
  if (localStorageItems) {
    localStorageItems = localStorageItems.filter((val) => val != item);
    localStorage.setItem("list", JSON.stringify(localStorageItems));
  }
}

function addListFromLocalStorageToUI() {
  localStorageItems.forEach((item) => {
    addItemToDom(item);
  });
}

let alertMsg = document.createElement("div");
alertMsg.classList.add("alert");
let p = document.createElement("p");
alertMsg.append(p);

function addAlert(msg) {
  p.textContent = msg;
  document.body.prepend(alertMsg);
  setTimeout(() => {
    alertMsg.remove();
  }, 2000);
}
// -------------------------Events-----------------

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (localStorageItems.includes(inputValue)) {
    addAlert("Already Added");
  } else {
    if (inputValue) {
      addItemToDom(inputValue);
      setItemToLocaleStorage(inputValue);
    } else {
      addAlert("Please Enter Your Work");
    }
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("Remove")) {
    deleteItemFromLocaleStorage(
      e.target.parentElement.previousElementSibling.textContent
    );
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

addListFromLocalStorageToUI();

// Clear Your Browser storage after test this app
// localStorage.clear();
