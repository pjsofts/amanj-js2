const word = "Salam khoobi"

let counter = 0;

for (const letter of word){
    if (letter ==="a" || letter ==="e" || letter==="i" || letter==="o"||letter==="u"){
        console.log("vowel", letter)
        counter++;
    }
}

console.log(counter);