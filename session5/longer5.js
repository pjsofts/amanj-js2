const words = ["hi", "salam1", "salam4", "alimohammadi", "yes"]
const words2 = []
for (let word of words){
    if (word.length > 5){
        words2.push(word)
    }
}
console.log(words2)
