//Calcular edad promedio de personas registradas.

let contador = 0
let sumaEdades = 0
const promedio = (sumaEdades, contador) => { return sumaEdades / contador };


let registrar = prompt("desea regitrar una nueva persona(si/no): ")
while (registrar == "si") {
    let contador = contador + 1
    let edad = parseInt(prompt("ingrese la edad: "))
    let sumaEdades = sumaEdades + edad
    registrar = prompt("desea regitrar una nueva persona(si/no): ")
}

console.log("el promedio de las edades de las personas ingresadas es de: " + promedio(sumaEdades, contador))