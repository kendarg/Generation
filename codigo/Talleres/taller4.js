    const propinasC ={
    p1: 0.10,
    p2: 0.15,
    p3: 0.20
    }
    const domicilio={
        d1:2500,
        d2:3000,
        d3:3500
    }
    let id={
        nombre:"Esteban",
        Ciudad: "Cali",
        propinas: "10%",
        valor: 80000
    }
    let{nombre, Ciudad, propinas,valor} = id;
    let productos=[
        "Hamburguesa","Pizza","Perro Caliente","Cocacola","Pepsi","Colombiana"
    ];
    switch (Ciudad){
        case"Bogota":
            switch(propinas){
            case "10%":
                total = valor * propinasC.p1 + valor + domicilio.d1;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d1} \n El valor de la Propina es de ${propinasC.p1}
                \n El valor total es de ${total}` );
                break
            case "15%":
                total = valor * propinasC.p2 + valor + domicilio.d1;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d1} \n El valor de la Propina es de ${propinasC.p2}
                \n El valor total es de ${total}` );
                break
            case "20%":
                total = valor * propinasC.p3 + valor + domicilio.d1;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d1} \n El valor de la Propina es de ${propinasC(p3)}
                \n El valor total es de ${total}` );
            break;
            default:
                console.log(`Opcion no valida`);
        }
        break
        case"Cali":
            switch(propinas){
        case "10%":
                total = valor * propinasC.p1 + valor + domicilio.d2;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d2} \n El valor de la Propina es de ${propinasC.p1}
                \n El valor total es de ${total}` );
                break
            case "15%":
                total = valor * propinasC.p2 + valor + domicilio.d2;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d2} \n El valor de la Propina es de ${propinasC.p2}
                \n El valor total es de ${total}` );
                break
            case "20%":
                total = valor * propinasC.p3 + valor + domicilio.d2;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d2} \n El valor de la Propina es de ${propinasC(p3)}
                \n El valor total es de ${total}` );
            break;
            default:
                console.log(`Opcion no valida`);
        }
        break
        case"San Gil":
            switch(propinas){
        case "10%":
                total = valor * propinasC.p1 + valor + domicilio.d3;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d3} \n El valor de la Propina es de ${propinasC(p1)}
                \n El valor total es de ${total}` );
                break
            case "15%":
                total = valor * propinasC.p2 + valor + domicilio.d3;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d3} \n El valor de la Propina es de ${propinasC.p2}
                \n El valor total es de ${total}` );
                break
            case "20%":
                total = valor * propinasC.p3 + valor + domicilio.d3;
                console.log(`Tu pedido \n${productos} \n Vale un total de ${valor}  \n El valor del domicio es de ${domicilio.d3} \n El valor de la Propina es de ${propinasC(p3)}
                \n El valor total es de ${total}` );
            break;
            default:
                console.log(`Opcion no valida`);
        }
        break
        default:
            console.log(`Opcion no valida`);
    }