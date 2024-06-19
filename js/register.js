class Usuarios{
    constructor(usuario, email, pass){
        this.usuario = usuario,
        this.email = email,
        this.pass = pass
    }
}


const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

document.getElementById('cancelar').addEventListener('click', function() {
    window.location.href = 'login.html';
});

registro = document.querySelector('#registro');

registro.addEventListener('click', ()=>{
    usuario_nuevo = document.querySelector('#user_register').value;

    email_nueva = document.querySelector('#email_register').value;
    
    pass_nueva = document.querySelector('#pass_register').value;

    const nuevoUsuario = new Usuarios(usuario_nuevo, email_nueva, pass_nueva);

    usuariosRegistrados.push(nuevoUsuario)
    
    localStorage.setItem('usuariosRegistrados',JSON.stringify(usuariosRegistrados ));


    alert('¡Te registraste correctamente!');

    window.location.href = '../index.html';


})




