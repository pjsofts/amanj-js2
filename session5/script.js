function add(){
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const result = number1 + number2;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}