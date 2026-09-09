document.getElementById('formContacto').addEventListener('submit', function(event) {
    // Evita el envio del formulario si no pasa las validaciones
    event.preventDefault();

    // Obtencion de los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const mensajeEstado = document.getElementById('mensajeEstado');

    // Comprobacion de campos vacios
    if (nombre === '' || correo === '' || telefono === '' || mensaje === '') {
        mensajeEstado.textContent = 'Error: Llena todos los campos que estan en blanco.';
        mensajeEstado.style.color = 'red';
        return;
    }

    // Comprobacion de formato basico de correo electronico
    if (!correo.includes('@') || !correo.includes('.')) {
        mensajeEstado.textContent = 'Error: Por favor escribe un correo electronico valido (ejemplo@dominio.com).';
        mensajeEstado.style.color = 'red';
        return;
    }

    // Confirmacion exitosa si cumple las condiciones
    mensajeEstado.textContent = 'Se envio la solicitud con exito. Nos pondremos en contacto contigo lo antes posible.';
    mensajeEstado.style.color = 'green';

    
});