const myobj = {
    name: "pouria",
    lastname:"j",
    occupation: {
        name: "programmer"
    },
    sds: {
        name: "salm"
    }
}


let {name:hi, lastname, sds: {name}} = myobj;


console.log(name);