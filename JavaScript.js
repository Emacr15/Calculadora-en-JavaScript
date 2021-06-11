function borrar() {
    document.getElementById("calculadora").reset();
}
function Suma() {
    var x = parseInt(document.getElementById("valor1").value); 
    var y = parseInt(document.getElementById("valor2").value); 
    document.getElementById("elResultado").innerHTML = x+y;
}
function Resta() {
    var x = parseInt(document.getElementById("valor1").value); 
    var y = parseInt(document.getElementById("valor2").value); 
    document.getElementById("elResultado").innerHTML = x-y;
}
function Multiplicacion() {
    var x = parseInt(document.getElementById("valor1").value); 
    var y = parseInt(document.getElementById("valor2").value); 
    document.getElementById("elResultado").innerHTML = x*y;
}
function Division() {
    var x = parseInt(document.getElementById("valor1").value); 
    var y = parseInt(document.getElementById("valor2").value); 
    document.getElementById("elResultado").innerHTML = x/y;
}
