function hello(){
    this.name = "ali"
    this.lastname = "ahmadi"

    const that = this;
    setTimeout( function(){
        console.log(this.name)
        console.log(this.lastname)
    }, 100)
    
}

hello();
