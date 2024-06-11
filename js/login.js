

//Logueo

let userGenerico = 'pepe';
let passGenerico = 'pepe';

let estado = false;


function login(user, pass){
    if(userGenerico == user && passGenerico ==pass)
        {

     estado = true;
        }
        else{
        estado = false;
        }
        return estado;
    }
    

document.getElementById('iniciar').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener valores de los campos de usuario y contraseña
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    console.log(username, password);
    // Llama a la función de inicio de sesión y muestra el resultado
    if (login(username, password)) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'tienda.html';

        // Aquí podrías redirigir a otra página o realizar otras acciones necesarias después del inicio de sesión
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});