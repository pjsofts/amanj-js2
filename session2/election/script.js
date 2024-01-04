function canVote(){
    const age = Number(document.getElementById("age").value);
    const result = document.getElementById("result");

    if (age >= 18){
        result.textContent = "You can vote";
    } else {
        result.textContent = "You can't vote";
        result.textContent += " You can vote in " + (18-age) + " years.";

    }
}