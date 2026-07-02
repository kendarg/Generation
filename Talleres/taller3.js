let Cliente ={
nombre: "Esteban",
Ciudad: "Bogota",
productos:[
    "Hamburguesa","Pizza","Perro Caliente","Cocacola","Pepsi","Colombiana"
],
Estado: true,
}
let{nombre,Ciudad, productos,Estado} = Cliente;

//* Imprimir todo el pedido
console.log(productos);
//* Imprimir unicamente el nombre del cliente
console.log(`Tu nombre es: ${nombre}`);
//* Cambiar el estado del en camono e imprime el pedido de nuevo
if(Estado){
console.log(`Tu pedido esta en camino tu pedido es: \n${productos}`);
}else{
console.log(`Tu pedido se esta Preparando`)
}