const numbers = [10, 11, 15, 160, 20, 2, 18, 19];
let max = numbers[0];

for (let number of numbers){
    if(number > max){
        max = number;
    }
}

console.log(max);