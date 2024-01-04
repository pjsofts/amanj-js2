const word = "madam"

let reverse = ""
for (const letter of word){
    reverse = letter + reverse ;
}

if (reverse ===word){
    console.log("This is a palindrome")
} else {
    console.log("This is  not a palindrome")
}