
/*
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.*/

//Calcular costo total de productos y/o servicios seleccionados por el usuario.
let rta = "si"

while (rta == "si") {
    console.log("productos: televisor, celular, computadora, camara fotografica")
    let producto = prompt("ingrese el producto que desee: ")
    let precio = parseInt(prompt("ingrese el precio del producto: "))
    let cantidad = parseInt(prompt("ingrse la cantidad que desa comprar: "))
    let costo = precio * cantidad
    console.log("el costo total es de: " + costo)
    let rta = prompt("desea cargar otro producto(si/no): ")
}

//