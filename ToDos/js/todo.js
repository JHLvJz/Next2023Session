const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const submitBtn = document.querySelector(".submitBtn");

function handleTodoSubmit(event) {
  event.preventDeFault();
  console.log("diq");
}

todoForm.addEventListner("submit", handleTodoSubmit);
