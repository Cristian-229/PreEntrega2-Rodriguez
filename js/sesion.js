document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tiendaLink').addEventListener('click', function (event) {
        event.preventDefault();

        // Verificar si hay sesión activa
        const sesionActiva = JSON.parse(localStorage.getItem('sesionActiva'));

        if (sesionActiva) {
            // Verificar si ya estamos en tienda.html
            if (window.location.pathname.includes('tienda.html')||window.location.pathname.includes('login.html')) {
                // Ya estamos en tienda, no hacer nada
                return;
            }
            else if (window.location.pathname.includes('nosotros.html')){
                window.location.href = 'tienda.html';
            }   
            else if (window.location.pathname.includes('register.html')){
                window.location.href = 'login.html';
            }   
         else {
                // Redirigir a tienda.html
                window.location.href = 'pages/tienda.html';
            }
        } else {
            // Redirigir a login.html si no hay sesión activa
            window.location.href = 'pages/login.html';
        }
    });
});
