document.addEventListener('DOMContentLoaded', function () {
    let botonesAgregar = document.querySelectorAll('.producto__boton');
    let totalElement = document.getElementById('total');
    let total = 0;

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function () {

            let unidadesElemento = boton.parentElement.querySelector('p');
            let unidades = parseInt(unidadesElemento.innerText, 10);

            let precioElemento = boton.closest('.productos__listado').querySelector('.producto__precio p');
            let precioTexto = precioElemento.innerText.replace(' USD', '');
            let precio = parseInt(precioTexto, 10);

            if (boton.textContent === '+') {
                unidades++;
                total += precio;
            } else if (boton.textContent === '-' && unidades > 0) {
                unidades--;
                total -= precio;
            }

            unidadesElemento.innerText = unidades;
            totalElement.innerText = total;
        });
    });
});





