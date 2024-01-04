const students = [
    {name: "ali", score: 20},
    {name: "mohammad", score: 1800},
    {name: "sara", score: 190},
    {name: "javad", score: 1700},
]

max_student = students[0]


for (let student of students){
    if (student.score > max_student.score){
        max_student = student;
    }
}

console.log(max_student);