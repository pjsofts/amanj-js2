
function hello(){
    console.log(name)
    let last = "j"
    {
        var name = "saeed"    
        let last ="a"
        console.log(last)
    }
    console.log(last)
}


hello()