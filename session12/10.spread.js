function hello(x, y, z){
    console.log(x + y + z)
}

hello(10, 20, 30);

const myarray = [30, 40, 50];
hello(...myarray)

const array2 = [10, 20,
    ...myarray
]
console.log(array2)

const myobj = {name: "pouria", last:"j"}
const myobj2 = {job: "programmer", ...myobj}
console.log(myobj2)