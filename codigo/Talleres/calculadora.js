
const prompt = require('prompt-sync')();


console.log("--- CALCULADORA ---");
let n1 = Number(prompt("Ingresa el primer número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /): ");
let n2 = Number(prompt("Ingresa el segundo número: "));

let resultado;

switch (operacion) {
    case '+': resultado = n1 + n2; break;
    case '-': resultado = n1 - n2; break;
    case '*': resultado = n1 * n2; break;
    case '/': resultado = n2 === 0 ? "Error: División por cero" : n1 / n2; break;
    default: resultado = "Operación no válida";
}

console.log(`\nEl resultado es: ${resultado}`);