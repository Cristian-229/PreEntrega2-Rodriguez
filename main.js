class Producto {
    constructor(nombre, precio, stock, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

const productos = [
    new Producto('Bujia', 45, 20, '../assets/img/bujia.png'),
    new Producto('Cilindro', 40, 20, '../assets/img/cilindro.png'),
    new Producto('Piston', 35, 20, '../assets/img/piston.png')
];

const productosContainer = document.querySelector('.productos');

function crearProductoElementos(productos) {
    const productosContainer = document.querySelector('.productos');
    productosContainer.innerHTML = ''; 

    productos.forEach(producto => {
        const productoListado = document.createElement('div');
        productoListado.classList.add('productos__listado');

        const productoFoto = document.createElement('div');
        productoFoto.classList.add('producto__foto');
        const img = document.createElement('img');
        img.classList.add('producto__item');
        img.src = producto.img;
        productoFoto.appendChild(img);

        const productoDescripcion = document.createElement('div');
        productoDescripcion.classList.add('producto__descripcion');
        const descripcion = document.createElement('p');
        descripcion.textContent = `Esto es un(a) ${producto.nombre}`;
        productoDescripcion.appendChild(descripcion);

        const productoPrecio = document.createElement('div');
        productoPrecio.classList.add('producto__precio');
        const precio = document.createElement('p');
        precio.id = `precio__${producto.nombre.toLowerCase()}`;
        precio.textContent = producto.precio;
        productoPrecio.appendChild(precio);

        const productoStock = document.createElement('div');
        productoStock.classList.add('producto__stock');
        const stock = document.createElement('p');
        stock.textContent = producto.stock;
        productoStock.appendChild(stock);

        const productoCantidad = document.createElement('div');
        productoCantidad.classList.add('producto__cantidad');
        const agregarSacar = document.createElement('div');
        agregarSacar.classList.add('producto__agregarSacar');
        const botonSacar = document.createElement('button');
        botonSacar.classList.add('producto__boton');
        botonSacar.textContent = '-';
        const unidades = document.createElement('p');
        unidades.id = `unidades__${producto.nombre.toLowerCase()}`;
        unidades.textContent = '0';
        const botonAgregar = document.createElement('button');
        botonAgregar.classList.add('producto__boton');
        botonAgregar.textContent = '+';
        agregarSacar.appendChild(botonSacar);
        agregarSacar.appendChild(unidades);
        agregarSacar.appendChild(botonAgregar);
        productoCantidad.appendChild(agregarSacar);

    

        productoListado.appendChild(productoFoto);
        productoListado.appendChild(productoDescripcion);
        productoListado.appendChild(productoPrecio);
        productoListado.appendChild(productoStock);
        productoListado.appendChild(productoCantidad);
  

        productosContainer.appendChild(productoListado);
    });
}

crearProductoElementos(productos);


document.getElementById('busqueda').addEventListener('input', function() {
    const textoBusqueda = this.value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(textoBusqueda));
    crearProductoElementos(productosFiltrados);
});