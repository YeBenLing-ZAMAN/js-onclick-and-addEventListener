// handling use function  
function makeRed() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
}


// funcion calling but handling with id or class

const yellowButton = document.getElementById("make-yellow");

yellowButton.onclick = makeYellow; // () ekhane ami function ke call kore parbo na, jokhon button ta click hobe tokhon auto-maticlly call hoye jabe.
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
}


// handling by function 
const pinkbutton = document.getElementById("make-pink");

pinkbutton.onclick = function makepink() {
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "white";
}

// handling by anonymous funcrion 

const blueButton = document.getElementById("make-blue");

blueButton.onclick = function () { // function has no name
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
}

