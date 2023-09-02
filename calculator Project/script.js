//this function shows the number you choose on the screen

function add(valor) {
  document.getElementById("screen").value += valor;
}

// this function will delete all the numbers on the screen
function borrar() {
  document.getElementById("screen").value = "";
}

// this function will do the math
function calc(){
  const screenValue = document.getElementById("screen").value;
  const result = eval(screenValue);
  document.getElementById("screen").value = result;
}
