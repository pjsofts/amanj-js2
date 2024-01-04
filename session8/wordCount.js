const sentence = "Salam Hi khoobi Chetori Hi Salam";
const words = sentence.split(" ")
const wordCount = {};
console.log(words);
for (let word of words){
    if (!wordCount[word]){
        wordCount[word] = 1;
    } else {
        wordCount[word] += 1;
    }
}

console.log(wordCount)