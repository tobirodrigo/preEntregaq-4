document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcular-btn");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function () {
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const anio = parseInt(document.getElementById("anio").value);
        const precio = parseFloat(document.getElementById("precio").value);

        const cotizacion = calcularCotizacion(anio, precio);

        resultadoDiv.innerHTML += `La cotización para un ${marca} ${modelo} del año ${anio} es: $${cotizacion}<br>`;

        limpiarCampos();
    });

    function calcularCotizacion(anio, precio) {
        let cotizacion = precio;

        if (anio < 5) {
            cotizacion *= 1.2;
        } else if (anio >= 5 && anio < 10) {
            cotizacion *= 1.1;
        } else {
            cotizacion *= 1.05;
        }

        return cotizacion.toFixed(2);
    }

    function limpiarCampos() {
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("anio").value = "";
        document.getElementById("precio").value = "";
    }

    let continuar = true;
    while (continuar) {
        const respuesta = prompt("¿Deseas calcular otra cotización? (Sí/No)").toLowerCase();
        if (respuesta === "no") {
            continuar = false;
        }
    }
});