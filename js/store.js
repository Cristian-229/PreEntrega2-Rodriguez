document.addEventListener('DOMContentLoaded', function() {
    let botonesAgregar = document.querySelectorAll('.producto__boton');
    let totalElement = document.getElementById('total');
    let total = 0;

    // Recorrer los botones y agregar el evento de clic a cada uno
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function() {
            // Acceder al elemento de unidades correspondiente al botón clickeado
            let unidadesElemento = boton.parentElement.querySelector('p');
            let unidades = parseInt(unidadesElemento.innerText, 10);

            // Acceder al elemento de precio correspondiente al producto del botón clickeado
            let precioElemento = boton.closest('.productos__listado').querySelector('.producto__precio p');
            let precioTexto = precioElemento.innerText.replace(' USD', '');
            let precio = parseInt(precioTexto, 10);

            // Incrementar o decrementar unidades según el botón clickeado
            if (boton.textContent === '+') {
                unidades++;
                total += precio; // Sumar el precio al total
            } else if (boton.textContent === '-' && unidades > 0) {
                unidades--;
                total -= precio; // Restar el precio del total
            }

            // Actualizar el texto del elemento de unidades
            unidadesElemento.innerText = unidades;
            // Actualizar el texto del total
            totalElement.innerText = total;
        });
    });
});





class Producto{
    constructor(nombre, precio, stock){
        this.nombre =nombre,
        this.precio =precio,
        this.stock =stock
    }
}


let bujia = new Producto('Bujia', 45, 20);
let cilindro = new Producto('Cilindro', 40, 20);
let piston = new Producto('Piston', 35, 20);

