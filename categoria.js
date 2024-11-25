document.querySelectorAll('.food-category button').forEach(button => {
    button.addEventListener('click', function() {
        const foodType = this.getAttribute('data-food-type');

        // Remover clase 'active' de todos los botones
        document.querySelectorAll('.food-category button').forEach(btn => btn.classList.remove('active'));
        // Añadir clase 'active' al botón presionado
        this.classList.add('active');

        // Ocultar todos los productos
        document.querySelectorAll('.food-item').forEach(item => item.style.display = 'none');

        // Mostrar los productos de la categoría seleccionada
        document.querySelectorAll(`.${foodType}-item`).forEach(item => item.style.display = 'block');
    });
});
