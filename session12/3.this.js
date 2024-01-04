function hello(){
    console.log(this.name)
    this.lastname = "j"
}

// hello();

const myobj = {
    name: "pouria"
}

// hello2 = hello.bind(myobj)
// hello2()

hello.call(myobj)
console.log(myobj)