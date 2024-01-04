const word = "madam"

let palindrome = true;
for (let i =0; i< Math.floor(word.length/2); i++){
    if(word[i] !== word[word.length-i-1]){
        palindrome = false;
    }
}

console.log(palindrome)