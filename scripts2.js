// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    // Inicializar EmailJS con tu Public Key
    emailjs.init('4Qi6AEkUF8c1G1hrL'); // Reemplaza con tu Public Key

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario para demostración

        // Usar EmailJS para enviar el correo
        emailjs.sendForm('filozofia1234567', 'template_q8q0uwl', contactForm)
            .then(function(response) {
                formResponse.innerHTML = '<div class="alert alert-success" role="alert">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</div>';
                contactForm.reset();
            }, function(error) {
                formResponse.innerHTML = '<div class="alert alert-danger" role="alert">Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.</div>';
            });
    });
});
