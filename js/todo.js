const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let toDoListArr = [];

function saveToDo() {
    localStorage.setItem("todo", JSON.stringify(toDoListArr));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDoListArr = toDoListArr.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
    console.log(toDoListArr);
}

todoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoListArr.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

function handleToDo() {
    let toDos = todoInput.value;
    const newTodo = toDos;
}

function paintToDo(newTodo) {
    // let toDos = todoInput.value;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodo.id;
    span.innerText = `${newTodo.text}`;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
}

const savedToDo = localStorage.getItem("todo");
const parsedItem = JSON.parse(savedToDo);
if(savedToDo !==null) {
    parsedItem.forEach(paintToDo)
}