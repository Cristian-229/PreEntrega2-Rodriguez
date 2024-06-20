

//Funcion que buscara el usuario ingresado con los dos parametros que registrara del usuario y contraseña
//de la pagina del login y establecera una sesion activa. A futuro se mostrara el panel.admin solo si el user es admin

function login(user, pass) {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.usuario === user && usuario.pass === pass);

    if (usuarioEncontrado) {

        if (usuarioEncontrado.admin) {
            document.querySelector('#panelAdmin').style.display = 'block'; //En construccion para proxima entrega
            localStorage.setItem('sesionActiva', JSON.stringify(true));

        } else {
            localStorage.setItem('sesionActiva', JSON.stringify(true)); 
        }
        return true;
    } else {
        return false;
    }
}

//Captura los elementos ingresados al seleccionar iniciar en login, para luego evaluarlos en la funcion.

document.getElementById('iniciar').addEventListener('click', function (event) {
    event.preventDefault();

    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    console.log(username, password);

    if (login(username, password)) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'tienda.html';

    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

