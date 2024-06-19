function login(user, pass) {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.usuario === user && usuario.pass === pass);

    //return usuarioEncontrado !== undefined;

    if (usuarioEncontrado) {
        localStorage.setItem('sesionActiva', JSON.stringify(true)); // Guarda el estado de sesión activa
        return true;
    } else {
        return false;
    }

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

