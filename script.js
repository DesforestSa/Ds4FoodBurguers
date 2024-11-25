document.addEventListener('DOMContentLoaded', function () {
    const paymentOptions = document.querySelectorAll('.payment-option');
    const yapeSection = document.getElementById('yapeSection');
    const cashSection = document.getElementById('cashSection');
    const proceedButton = document.getElementById('proceedPayment');

    paymentOptions.forEach(option => {
        option.addEventListener('click', function () {
            const paymentType = this.getAttribute('data-payment');

            // Ocultar secciones de pago
            yapeSection.style.display = 'none';
            cashSection.style.display = 'none';

            // Mostrar la sección correspondiente según el método de pago seleccionado
            if (paymentType === 'yape') {
                yapeSection.style.display = 'block';
            } else if (paymentType === 'cash') {
                cashSection.style.display = 'block';
            }

            // Mostrar el botón "Proceder al Pago" una vez seleccionada una opción
            proceedButton.style.display = 'inline-block';
        });
    });
});
