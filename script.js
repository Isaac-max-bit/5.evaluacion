alert("Hola profe, aqui esta el ejercicio.");

function calcularPromedioPonderado(materias) {
    let sumaPonderada = 0;
    let sumaPesos = 0;

    for (let materia of materias) {
        sumaPonderada += materia.calificacion * materia.peso;
        sumaPesos += materia.peso;
    }

    return sumaPesos > 0 ? sumaPonderada / sumaPesos : 0; 
}


function evaluarEstudiante() {
    let materias = [];
    let continuar = true;

    
    while (continuar) {
        let nombreMateria = prompt("Ingrese el nombre de la materia:");
        let calificacion = parseFloat(prompt("Ingrese la calificación de la materia:"));
        let peso = parseFloat(prompt("Ingrese el peso de la materia:"));

    
        materias.push({ nombre: nombreMateria, calificacion: calificacion, peso: peso });

        
        continuar = confirm("¿Desea agregar otra materia?");
    }

    
    let promedio = calcularPromedioPonderado(materias);
    console.log(`El promedio ponderado es: ${promedio.toFixed(2)}`);

    
    if (promedio >= 3.5) {
        console.log("El estudiante aprueba.");
    } else if (promedio < 2.5) {
        console.log("El estudiante debe repetir el curso.");
    } else {
        console.log("El estudiante está en un rango intermedio.");
    }
}


evaluarEstudiante();
