function add(){
    let a = 1000;
    function sum(){
        a+=1;
        console.log(a);
    }
    return sum;
}

const plus = add();
plus();
plus();
plus();
plus();
plus();
plus();
const plus2 = add();
plus2();
plus2();