// handling use function  
function makeRed(){
    document.body.style.backgroundColor="red";
    document.body.style.color="white";
}


// funcion calling but handling with id or class

const yellowButton = document.getElementById("make-yellow");

yellowButton.onclick = makeYellow;
function makeYellow(){
    document.body.style.backgroundColor="yellow";
    document.body.style.color="black";
}

