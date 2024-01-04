console.log("hello from script")
function add(){
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const result = document.getElementById("result");
    result.textContent = Number(number1) + Number(number2);
}