const inputDivisores = document.getElementById('inputDivisores');
const btnBuscar = document.getElementById('btnBuscar');
const txtPosicion = document.getElementById('txtPosicion');
const txtFibonacci = document.getElementById('txtFibonacci');
const txtTotalDivisores = document.getElementById('txtTotalDivisores');

// Función para contar divisores
function calcularDivisores(numero) {
    let totalDivisores = 1;
    let contador = 0;

    while (numero % 2 === 0) {
        numero /= 2;
        contador++;
    }
    if (contador > 0) totalDivisores *= (contador + 1);

    for (let i = 3; i * i <= numero; i += 2) {
        contador = 0;
        while (numero % i === 0) {
            numero /= i;
            contador++;
        }
        if (contador > 0) totalDivisores *= (contador + 1);
    }

    if (numero > 1) totalDivisores *= 2;

    return totalDivisores;
}

btnBuscar.addEventListener("click", function () {

    const limiteDivisores = parseInt(inputDivisores.value);

    if (isNaN(limiteDivisores) || limiteDivisores < 1) {
        alert("Ingresa un número válido");
        return;
    }

    let fibAnterior = 1;
    let fibActual = 1;
    let posicion = 2;

    let encontrado = false;

    while (posicion < 1000) {
        let siguienteFib = fibAnterior + fibActual;
        posicion++;

        let cantidadDivisores = calcularDivisores(siguienteFib);

        if (cantidadDivisores > limiteDivisores) {
            txtPosicion.value =  posicion;
            txtFibonacci.value = siguienteFib;
            txtTotalDivisores.value = cantidadDivisores;

            encontrado = true;
            break;
        }

        fibAnterior = fibActual;
        fibActual = siguienteFib;
    }

    if (!encontrado) {
        txtPosicion.value = "No encontrado";
        txtFibonacci.value = "-";
        txtTotalDivisores.value = "-";
    }
});