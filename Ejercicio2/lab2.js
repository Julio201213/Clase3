// Ejercicio 2 Laboratorio 1
// inicio
// Variables

let Juan;
let Jose;
let Carlos;
let suma=0;
let total
let sumaJuan
let sumaJose
let sumaCarlos

// leer Datos

Juan = Number(prompt('Valor a invertir Juan'));
Jose = Number(prompt('Valor a invertir Jose'));
Carlos = Number(prompt('Valor a invertir Carlos'));

// operacion

suma = Juan+Jose+Carlos;
total = suma;
sumaJuan = Juan/suma*100;
sumaJose = Jose/suma*100;
sumaCarlos = Carlos/suma*100;

// imprimir

alert("Inversion Total " +total);
document.write(" Inversion Total " +total);
alert("Inversion Juan % " +sumaJuan);
document.write(" Inversion Juan % " +sumaJuan);
alert("Inversion Jose % " +sumaJose);
document.write(" Inversion Jose % " +sumaJose);
alert("Inversion Carlos % " +sumaCarlos);
document.write(" Inversion Carlos % " +sumaCarlos);

// Final