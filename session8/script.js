const students = [
    {name: "ali", score: 20},
    {name: "mohammad", score: 18},
    {name: "sara", score: 19},
    {name: "javad", score: 17},
]

function add(){
    const name = document.getElementById("name");
    const score = document.getElementById("score");
    students.push({name: name.value, score: Number(score.value)});
    show();
    name.value = "";
    score.value ="";
}

function show(){
    const studentsDiv = document.getElementById("students");
    studentsDiv.innerHTML="";
    for(let student of students){
        const div = document.createElement("div");
        div.textContent = `${student.name} ${student.score}`;
        studentsDiv.appendChild(div);
    }
}


function max(){
    let max_student = students[0];
    for (let student of students){
        if (student.score  > max_student.score){
            max_student = student;
        }
    }
    const maxDiv = document.getElementById("max");
    maxDiv.textContent = "max: "+ max_student.name
}

function average(){
    const count = students.length;
    let sum = 0;
    for (let student of students){
        sum += student.score;
    }
    const result = sum / count;

    const averageDiv = document.getElementById("average");
    averageDiv.textContent ="average: " + result;
}

show();