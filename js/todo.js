const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let toDoList = [];

todoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
    event.preventDefault();
    paintToDo();
    handleToDo();
    todoInput.value = '';
}

function paintToDo() {
    let toDos = todoInput.value;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = toDos;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
    const targetTodo = event.target.parentElement;
    targetTodo.remove();
}

function handleToDo() {
    let toDos = todoInput.value;
    toDoList.push(toDos);
    JSON.stringify(toDoList);
    localStorage.setItem("todo", JSON.stringify(toDoList));
}

function deleteItemToLocalStorage() {

}