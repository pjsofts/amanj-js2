function add(){
    console.log("Add is calledd");
    
    const todotext = document.getElementById("todotext");

    const todos = document.getElementById("todos");

    const todo = document.createElement("li");

    todo.textContent = todotext.value;
    
    todos.appendChild(todo);

}