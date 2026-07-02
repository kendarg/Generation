const prompt = require('prompt-sync')();
console.log(`Hola por favor ingresa los datos \n`);
let nombre = prompt(`Ingresa tu nombre: `);

let saldo = 1000000; 
let opeOpcion;
let resul;
let continuar = true;

while(continuar){
    console.log(`\n¿Qué quieres hacer hoy?: \n 1) Retiro \n 2) Ver saldo \n 3) Ingresar saldo`);
    let opcines = Number(prompt("Ingrese la opción: "));
    
    switch(opcines){
        case 1 :
            opeOpcion = "Retiro";
            console.log(`\nIngresaste a: Hacer Retiro`);
            let siRetiro = prompt(`Ingresar a Retiro: si/no (Solo en minúsculas): `);
            switch(siRetiro){
                case "si":
                    let retiro = Number(prompt("Ingrese el valor a retirar: "));
                    if(retiro > saldo){
                        console.log(`El saldo a retirar no se puede hacer (Fondos insuficientes)`);
                        resul = saldo;
                    } else {
                        saldo = saldo - retiro;
                        resul = saldo;
                    }
                    break;
                case "no":
                    console.log("Operación cancelada");
                    resul = saldo;
                    break;
                default:
                    console.log("Opción no válida");
                    resul = saldo;
            }
            break;
            
        case 2 :
            opeOpcion = "Ver Saldo";
            console.log(`\nIngresaste a: Ver Saldo`);
            let siSaldo = prompt(`Ingresar a Ver Saldo: si/no (Solo en minúsculas): `);
            switch(siSaldo){
                case "si":
                    console.log(`Tu saldo es: $${saldo}`);
                    resul = saldo;
                    break;
                case "no":
                    console.log("Operación cancelada");
                    resul = saldo;
                    break;
                default:
                    console.log("Opción no válida");
                    resul = saldo;
            }
            break;
            
        case 3:
            opeOpcion = "Ingresar Saldo";
            console.log(`\nIngresaste a: Ingresar Saldo`);
            let siIngreso = prompt(`Ingresar a Ingresar Saldo: si/no (Solo en minúsculas): `);
            switch(siIngreso){
                case "si":
                    let ingreso = Number(prompt("Ingrese el valor a depositar: "));
                    saldo = saldo + ingreso;
                    resul = saldo;
                    console.log("Depósito exitoso.");
                    break;
                case "no":
                    console.log("Operación cancelada");
                    resul = saldo;
                    break;
                default:
                    console.log("Opción no válida");
                    resul = saldo;
            }
            break;

        default:
            opeOpcion = "Ninguna (Opción Inválida)";
            resul = saldo;
            console.log("La opción ingresada en el menú no existe.");
    }


    console.log(`\nHola, tu nombre es: ${nombre}`);
    console.log(`La operación que realizaste es: ${opeOpcion}`);
    console.log(`Tu saldo final es: $${resul}\n`);
    
    let volver = prompt(`¿Quieres volver al menú? si/no (Solo en minúsculas): `);
    if(volver !== "si"){
        continuar = false;
        console.log(`\nGracias por usar este cajero. ¡Hasta luego!`);
    }
}
