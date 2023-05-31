const todoForm=document.querySelector('.todo-form');
const todoInput=document.querySelector('.text');
const todoUl=document.querySelector('.todo-list');

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

const inputValue=todoInput.value;
const newLi=document.createElement("li");
const liInnerHtml=`<span class="task">${inputValue}</span>
<div class="todo-buttons">
    <button class="done">Done</button>
    <button class="Remove">Remove</button>`
    newLi.innerHTML=liInnerHtml;
    todoInput.value="";
    todoUl.append(newLi);
})

todoUl.addEventListener("click",(e)=>{
   if(e.target.classList.contains("Remove")){
    const targetSpan=e.target.parentNode.parentNode;
    targetSpan.remove();
   }

   if(e.target.classList.contains("done")){
     const liSpan=e.target.parentNode.previousElementSibling;
     liSpan.style.textDecoration="line-through";  
   }
     
})