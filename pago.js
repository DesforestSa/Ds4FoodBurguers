document.addEventListener('DOMContentLoaded', function () {
    const paymentOptions = document.querySelectorAll('.payment-option');
    const yapeSection = document.getElementById('yapeSection');
    const cashSection = document.getElementById('cashSection');
    const proceedButton = document.getElementById('proceedPayment');

    let selectedPayment = '';

    // Maneja la selección de método de pago
    paymentOptions.forEach(option => {
        option.addEventListener('click', function () {
            const paymentType = this.getAttribute('data-payment');
            selectedPayment = paymentType;

            // Oculta ambas secciones y luego muestra solo la correspondiente
            yapeSection.style.display = 'none';
            cashSection.style.display = 'none';

            if (paymentType === 'yape') {
                yapeSection.style.display = 'block';
            } else if (paymentType === 'cash') {
                cashSection.style.display = 'block';
            }

            // Muestra el botón "Proceder al Pago"
            proceedButton.style.display = 'inline-block';
        });
    });

    // Lógica cuando el usuario hace clic en "Proceder al Pago"
    proceedButton.addEventListener('click', function () {
        if (selectedPayment === 'yape') {
            // Datos de ejemplo para pago con Yape
            const paymentData = {
                qrCode: 'valid-qr-code', // Aquí iría el código QR escaneado
                amount: 100 // Supongamos que el monto a pagar es 100
            };

            // Llamada a la API para validar el pago con Yape
            fetch('http://localhost:3000/api/validate-yape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Pago con Yape realizado con éxito');
                    // Aquí puedes cerrar el modal o redirigir al usuario
                } else {
                    alert('Error en el pago con Yape');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        } else if (selectedPayment === 'cash') {
            // Datos de ejemplo para pago en efectivo
            const paymentData = {
                orderId: 'order1234' // Número de pedido simulado
            };

            // Llamada a la API para confirmar el pago en efectivo
            fetch('http://localhost:3000/api/validate-cash', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Pago en efectivo confirmado');
                    // Aquí puedes cerrar el modal o redirigir al usuario
                } else {
                    alert('Error en la confirmación de pago en efectivo');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});

