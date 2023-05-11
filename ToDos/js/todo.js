const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const submitBtn = document.querySelector(".submitBtn");

let allToDos = [];
const TODOS_KEY = "allToDos";

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function submitAddTodo(event) {
  event.preventDefault(); //새로고침방지
  const input = document.getElementById("content");
  const newTodo = input.value;
  input.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  allToDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("allToDos", JSON.stringify(allToDos));
}

function deleteTodo(event) {
  //console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
  allToDos = allToDos.filter((allToDos) => allToDos.id !== parseInt(li.id));
  saveTodos();
}

todoForm.addEventListener("submit", submitAddTodo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  allToDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
