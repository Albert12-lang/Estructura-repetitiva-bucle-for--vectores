function procesarNotas() {
    let notas = [];
    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;
    const totalEstudiantes = 12;

    let cuerpoTabla = document.getElementById("tablaNotas");
    let spanPromedio = document.getElementById("prom");
    let spanAprobados = document.getElementById("aprob");
    let spanReprobados = document.getElementById("reprob");

    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < totalEstudiantes; i++) {
        let notaInput = parseFloat(prompt("Ingrese la nota del estudiante " + (i + 1)));

        notas.push(notaInput);

        suma += notaInput;

        if (notaInput >= 7) {
            aprobados++;
        } else {
            reprobados++;
        }

        let fila = "<tr><td>Alumno " + (i + 1) + "</td><td>" + notaInput + "</td></tr>";
        cuerpoTabla.innerHTML += fila;
    }

    let promedioGeneral = suma / totalEstudiantes;

    spanPromedio.innerText = promedioGeneral.toFixed(2);
    spanAprobados.innerText = aprobados;
    spanReprobados.innerText = reprobados;
}