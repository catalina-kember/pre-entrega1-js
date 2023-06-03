
/*
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.*/

//Calcular costo total de productos y/o servicios seleccionados por el usuario.

/*let rta = prompt("desea cargar un producto(si/no): ")
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
    let rta = prompt("desea cargar otro producto(si/no): ")
}*/

//Calcular pagos en cuotas sobre un monto determinado.

/*let rta = prompt("desea calcular un pago (si/no): ")

while (rta == "si"){
    let precio = parseInt(prompt("ingrese el precio a pagar: "))
    let cuotas = parseInt(prompt("ingrese en cuantas cuotas lo va a pagar(1/2/3): "))
    if (cuotas == 1){
        alert("el precio final a pagar es de: " + precio)
    }
    else{
        let precioCuota = precio / cuotas
        alert("el monto total a pagar por cuota es de: " + precioCuota)
    }
    let rta = prompt("desea calcular otro pago (si/no): ")
}*/

//Calcular edad promedio de personas registradas.

/*let sumaEdades = 0
let cant = 0
let num = parseInt(prompt("ingrese la cantidad de personas que quiere registrar: "))
//no me entra al for
for (let i = 0; i == num; i++) {
    let edad = parseInt(prompt("ingrese la edad de la persona que quiere registrar: "))
    let sumaEdades = sumaEdades + edad
    let cant = cant + 1
    break;
}
let promedio = sumaEdades / cant
alert("el promedio de edades ingresadas es de: " + promedio)*/

//Calcular nota final de alumnos ingresados

function cargarNotas (){
    let cargar = prompt("desea cargar nota del alumno(si/no): ")
    while (cargar == "si"){
        
    }
}

let ingreso = prompt("desea ingresar a un alumno(si/no): ")
while (ingreso == "si"){
    
}