function hello(a,b){
    console.log("hello", a+b)
    return a + b
}




const hello = a => ({salam: a+10})

const myobject = {
    name: "pouria",
    lastname: "j",
    print: function (){
        console.log(this.name + " " + this.lastname)
    }
}


let c = hello(20, 30)
console.log(c)


myobject.print()