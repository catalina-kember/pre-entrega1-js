//Calcular costo total de productos y/o servicios seleccionados por el usuario.

let rta = prompt("desea cargar un producto(si/no): ")

while (rta == "si") {
    alert("productos: televisor, celular, computadora")
    let producto = prompt("ingrese el producto que desee: ")
    let cantidad = parseInt(prompt("ingrse la cantidad que desa comprar: "))
    switch (producto) {
        case "televisor":
            let costoTelevisor = 1000 * cantidad
            console.log("el costo total es de: " + costoTelevisor);
            break;
        case "celular":
            let costoCelular = 2000 * cantidad
            console.log("el costo total es de: " + costoCelular);
        case "computadora":
            let costoComputadora = 3000 * cantidad
            console.log("el costo total es de: " + costoComputadora);
            break;
        default:
            alert("el producto ingresado es incorrecto");
            break;
    }
    rta = prompt("desea cargar otro producto(si/no): ")
}


