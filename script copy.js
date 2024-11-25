document.addEventListener('DOMContentLoaded', function() {
    const buttonsComprar = document.querySelectorAll('.btn-comprar');
    const modalImage = document.getElementById('img');
    const modalModelo = document.getElementById('modelo');
    const modalDescripcion = document.getElementById('descripcion');
    const modalPrecio = document.getElementById('precio');

    buttonsComprar.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.offer-card');
            const imgSrc = card.querySelector('.card-img-top').getAttribute('src');
            const producto = card.querySelector('.card-title').innerText;
            const descripcion = card.querySelector('.card-img-top').getAttribute('data-descripcion');
            const precio = card.querySelector('.discounted-price').innerText;
            
            modalImage.setAttribute('src', imgSrc);
            modalModelo.innerText = producto;
            modalDescripcion.innerText = descripcion;
            modalPrecio.innerText = precio;
        });
    });
});
