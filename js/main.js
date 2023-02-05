import localstorage from "./localStore.js";
import displayTodo from "./displayTodo.js";

let todos;
let todoItems = [];
(function () {
  const todoInput = document.querySelector(".todoInput"),
    display = document.getElementById("display"),
    addBtn = document.querySelector(".addBtn");


  addBtn.addEventListener("click", () => {
    if (todoInput.value !== '') {
      display.innerHTML = '';
      localstorage(todos, todoItems, todoInput);
      displayTodo();
    } else {
      alert('Please enter a task to to add ❓❓❓')
    }
  });

})();


window.addEventListener('load', () => {
  displayTodo();
})
