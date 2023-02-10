var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
widthofline=2;

canvas.addEventListener("mouseDown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
    console.log("Mouse is down");
}
canvas.addEventListener("mouseUp",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
    console.log("Mouse is up");
}
canvas.addEventListener("mouseLeave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
    console.log("Mouse is beyond the canvas");
}
canvas.addEventListener("mouseMove",my_mousemove);
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;

    console.log("last position of X ="+last_position_of_x+",last position of Y ="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("Current position of X ="+current_position_of_x+",Current position of Y ="+current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
    }
    
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}

