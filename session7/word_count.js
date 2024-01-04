const sentence = "salam how hi how you hi hi you"
const words = sentence.split(" ");
console.log(words);
const word_count = {};

for (let word of words){
    if (word_count[word]){
        word_count[word] +=1
    } else {
        word_count[word] = 1
    }
}

console.log(word_count);