
//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.


//Calcular costo total de productos y/o servicios seleccionados por el usuario.
//NO ENTRA AL SWITCH
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
//FUNCIONA
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
let contador = 0
let sumaEdades = 0
const promedio = (sumaEdades, contador) => {return sumaEdades / contador};
let registrar = prompt("desea regitrar una nueva persona(si/no): ")
while (registrar == "si"){
    let contador = contador + 1
    let edad = parseInt(prompt("ingrese la edad: "))
    let sumaEdades = sumaEdades + edad
    let registrar = prompt("desea regitrar una nueva persona(si/no): ")
}

console.log("el promedio de las edades de las personas ingresadas es de: " + promedio(sumaEdades, contador))

//Calcular nota final de alumnos ingresados

//NO FUNCIONA

/*function cargarNotas() {
    let contador = 0
    let sumaNota = 0
    let cargar = prompt("desea cargar nota del alumno(si/no): ")
    while (cargar == "si") {
        let contador = contador + 1
        let nota = parseInt(prompt("ingrese la nota: "))
        let sumaNota = sumaNota + nota
        let cargar = prompt("desea cargar nota del alumno(si/no): ")
    }
    return sumaNota
    return contador
}

const promedio = (sumaNota, contador) => { return sumaNota / contador }

let ingreso = prompt("desea ingresar a un alumno(si/no): ")
while (ingreso == "si") {
    cargarNotas();
    console.log("la nota fiinal del alumno ingresado es de: " + promedio(sumaNota, contador))
    let ingreso = prompt("desea ingresar a un alumno(si/no): ")
}*/