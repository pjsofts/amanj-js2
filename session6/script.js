console.log("Loaded Javascript");

const students = [];

function add(){
    const student_name = document.getElementById("name").value;
    const score = document.getElementById("score").value;
    students.push({name: student_name, score: Number(score)})
}

function score(){
    for (const student of students){
        let message;
        if (student.score > 10){
            message = `student ${student.name} passed by ${student.score}`;
            add_student(true, message);
        } else {
            message = `student ${student.name} failed by ${student.score}`;
            add_student(false, message);
        }
    }
}

function add_student(passed, message){
    let scores = document.getElementById("scores");

    const div = document.createElement("div");
    div.textContent = message;
    if (passed){
        div.classList.add("pass")
    } else {
        div.classList.add("fail")
    }
    scores.appendChild(div);

}