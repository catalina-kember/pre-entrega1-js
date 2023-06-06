//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.


let precioTotal = 0
let desc = 0
const impuestoIva = (precioTotal) => {return 21 * precioTotal / 100} ;
const descuento = (precioTotal, desc) => {return  desc * precioTotal / 100};
const precioFinal = (precioTotal, impuestoIva, descuento) => {return precioTotal + impuestoIva - descuento} ;
const averiguar = () => {
    let pregBuscar = prompt("ingrese eque valor desea conocer(impuesto-IVA, descuento, precio final). En caso de querer terminar ingrese 'no': ")
    while (pregBuscar != "no") {
        if (pregBuscar == "impuesto-IVA") {
            console.log("el monto del impuesto del iVA es de: " + impuestoIva(precioTotal))
            console.log("el precio final con el impuesto del IVA agregado es de: ")
        } else if (pregBuscar == "descuento") {
            console.log("el monto descontado es de: " + descuento(precioTotal, desc))
        } else if (pregBuscar == "precio final") {
            console.log("el precio final en fincion del iva y del descuento es de: " + precioFinal(precioTotal, impuestoIva(precioTotal), descuento(precioTotal, desc)))
        } else {
            console.log("ingreso una opcion invalida")
        }
        pregBuscar = prompt("ingrese eque valor desea conocer(impuesto-IVA, descuento, precio final). En caso de querer terminar ingrese 'no': ")
    }

}

let cargar = prompt("desea calcular el valor final se un producto(si/no): ")
while (cargar == "si") {
    alert("productos: mani, pasta de mani, garrapiñada")
    let producto = prompt("ingrese el producto: ")
    let precio = parseInt(prompt("ingrese el precio del producto por unidad: "))
    let cantidad = parseInt(prompt("ingrese la cantidad: "))
    precioTotal = precio * cantidad
    desc = parseInt(prompt("ingrese le porcentaje del descuento a realizar: "))
    console.log(averiguar());
    cargar = prompt("desea calcular el valor final de un producto(si/no): ")
}
