const numbers = [2,5,10,5,1];
const numbers2 = [];
for (let number of numbers){
    if (!numbers2.includes(number)){
        numbers2.push(number)
    } else {
        console.log(number, "is duplicate")
    }
}

console.log(numbers2);