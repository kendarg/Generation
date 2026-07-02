//* Para hacer una lista se usan las matizes para que estas se guarden dentro de ellas

let productos = [
    "Hamburguesa","Pizza","Perro Caliente","Cocacola","Pepsi","Colombiana"
]
//! Comandos de Uso 
// Añadir al final: Usa .push().
// Eliminar del final: Usa .pop().
// Añadir al principio: Usa .unshift().
// Eliminar del principio: Usa .shift().
console.log(productos);
console.log(productos[0]);
productos.push("Merengon")
console.log(productos);
productos.pop();
console.log(productos);
console.log(productos.length);
