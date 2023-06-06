//Calcular pagos en cuotas sobre un monto determinado. 

let rta = prompt("desea calcular un pago (si/no): ")

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
    rta = prompt("desea calcular otro pago (si/no): ")
}
