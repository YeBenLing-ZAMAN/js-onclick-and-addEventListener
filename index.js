// handling use function  
function makeRed(){
    document.body.style.backgroundColor="red";
    document.body.style.color="white";
}


// funcion calling but handling with id or class

const yellowButton = document.getElementById("make-yellow");

yellowButton.onclick = makeYellow; // () ekhane ami function ke call kore parbo na, jokhon button ta click hobe tokhon auto-maticlly call hoye jabe.
function makeYellow(){
    document.body.style.backgroundColor="yellow"; 
    document.body.style.color="black";
}



