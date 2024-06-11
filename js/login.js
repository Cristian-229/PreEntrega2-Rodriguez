

//Logueo

let userGenerico = 'pepe';
let passGenerico = 'pepe';

let estado = false;


function login(user, pass) {
    if (userGenerico == user && passGenerico == pass) {

        estado = true;
    }
    else {
        estado = false;
    }
    return estado;
}


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