console.log("Hello world this is script");

function sayHello(){
    alert("Hello everyone");
}

function add(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = document.getElementById('result');
    result.textContent = Number(number1) + Number(number2);    
}