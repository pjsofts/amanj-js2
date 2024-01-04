console.log("todos")

const url = "https://api.todoist.com/rest/v2/tasks"
const token = "052fc523d1a84f13d06ef40bb8210d7466796230";
async function getTodos(){
    const response = await fetch(url, {
        "headers": {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    console.log(data)
    const ul = document.getElementById("todos");
    ul.innerHTML = "";
    for (let item of data){
        const li = document.createElement("li");
        li.textContent = item.content
        ul.appendChild(li);
    }
}

async function addTodo(){
    const newInput = document.getElementById("new");

    console.log(newInput.value);

    await fetch(url, {
        method: "POST", 
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({content: newInput.value})
    });
    getTodos()
}

getTodos();