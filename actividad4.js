//Calcular nota final de alumnos ingresados

let contador = 0
let sumaNota = 0


function cargarNotas() {
    let nota = parseInt(prompt("ingrese la nota. Si no desea cargar mas notas ingrese '0':  "))
    while (nota != 0) {
        contador++;
        sumaNota = sumaNota + nota;
        nota = parseInt(prompt("ingrese la nota. Si no desea cargar mas notas ingrese '0':  "))
    }
}


const promedio = (sumaNota, contador) => { return sumaNota / contador }


let ingreso = prompt("desea ingresar a un alumno(si/no): ")
while (ingreso == "si") {
    let nombre = prompt("ingrese el nombre del alumno: ")
    cargarNotas();
    console.log("la nota final del alumno " + nombre + " es de: " + promedio(sumaNota, contador))
    ingreso = prompt("desea ingresar otro alumno(si/no): ")
}
