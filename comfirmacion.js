function agregarAlCarrito() {
    // Mostrar alerta personalizada
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('show');

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}
