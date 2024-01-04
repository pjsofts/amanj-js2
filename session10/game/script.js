const square = document.getElementById("square");

square.onmousemove = (event)=>{
    if (event.buttons === 1){
        console.log("mouse moved", event);
        square.style.left =event.pageX-20 + "px";  
        square.style.top = event.pageY-20 + "px";  
    }
}