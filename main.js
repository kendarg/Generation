let usuario = {
    nombre: "Esteban",
    ciudad: "Bogota"
};

let {nom, ciu} = usuario;


let rappiPro = true;
//* El uso de "\n" es para hacer hacer una separacion de texto de imprecion
if (rappiPro){
console.log(`Hola tu nombre es: ${nombre} \nvives en la ciudad: ${ciudad} \nEres de Rappi Pro`);
}else{
console.log(`Hola tu nombre es: ${nombre} \nvives en la ciudad: ${ciudad}`);
}
