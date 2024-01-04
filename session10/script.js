const inputs = document.querySelectorAll("input")

for (let i=0; i<inputs.length; i++){
    inputs[i].onkeydown = (event)=>{
        const nextIndex = (i+1)%inputs.length;

        if (event.code ==="ArrowDown"){
           inputs[nextIndex].focus(); 
        }
    }
}


function change(event){
    console.log("input changed", event.target.value)
}