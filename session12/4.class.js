class Car {
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }

    introduce(){
        console.log("make:", this.make, "model:", this.model, "color:",this.color )
    }
}

benz = new Car("benz", "mercedes", "black")
bmw  = new Car("bmw", "x3", "white")

benz.introduce();
bmw.introduce();

//inhertance
//polymorhphism
