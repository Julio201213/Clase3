//inicio
//variables

let nota1;
let nota2;
let nota3;
let examenFinal;
let trabajoFinal;
let suma=0;

//leer datos

nota1 = Number(prompt('Ingresar Nota 1'));
nota2 = Number(prompt('Ingresar Nota 2'));
nota3 = Number(prompt('Ingresar Nota 3'));
ExamenFinal = Number(prompt('Ingresar Nota Examen Final'));
trabajoFinal = Number(prompt('Ingresar Nota Trabajo Final'));

//operacion

suma = (nota1+nota2+nota3)/3*0.55 + ExamenFinal*0.30 + trabajoFinal*0.15;

//imprimir

alert("calificación final en la materia de lógica y programación " +suma);
document.write("calificación final en la materia de lógica y programación " +suma);
console.log("calificación final en la materia de lógica y programación  " +suma);

