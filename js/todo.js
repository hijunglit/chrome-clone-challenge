const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");


todoForm.addEventListener("submit", handleToDoSubmit);
function handleToDoSubmit(event) {
    event.preventDefault();
    
    const toDos = todoInput.value;
    paintTodo();
}

    function paintTodo() {
        todoList.innerText = toDos;
}
