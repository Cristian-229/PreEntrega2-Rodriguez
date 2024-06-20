

//Va a capturar en el panel.html dos paneles. Uno en el que se mostraran usuarios y el otro los admins.
//Es necesario que te registres algunas veces para testearlo.

const contenedorUsuarios = document.querySelector('#usuarios');
const contenedorAdmins = document.querySelector('#admins');

//Busqueda de usuarios registrados
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

//Funcion que creara los divs con usuarios y admins, ademas nos va a permitir cambiarlos de user a admins segun haga falta

function renderUsuarios() {
    contenedorUsuarios.innerHTML = '';
    contenedorAdmins.innerHTML = '';

    usuariosRegistrados.forEach((element, index) => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.className = 'elementosUsuarios';
        usuarioDiv.textContent = `${element.usuario} (${element.email})`;
        usuarioDiv.dataset.index = index;

        if (!element.admin) {
            usuarioDiv.addEventListener('click', () => cambiarEstadoAdmin(index));
            contenedorUsuarios.appendChild(usuarioDiv);
        } else {
            usuarioDiv.addEventListener('click', () => cambiarEstadoAdmin(index));
            contenedorAdmins.appendChild(usuarioDiv);
        }
    });
}


function cambiarEstadoAdmin(index) {
    usuariosRegistrados[index].admin = !usuariosRegistrados[index].admin;
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
    renderUsuarios();
}

// Renderizar los usuarios inicialmente
renderUsuarios();