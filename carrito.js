let cart = [];
let selectedExtras = {}; // Objeto para almacenar las cremas por producto

// Función para generar un código interno de pedido
function generateOrderCode() {
    const date = new Date();
    const code = `PED-${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;
    return code;
}

// Función para agregar un producto al carrito desde el modal
function addToCart(productName, productPrice, productId) {
    const product = {
        uniqueId: Date.now(), // Usamos un identificador único para cada producto agregado
        id: productId,
        name: productName,
        price: parseFloat(productPrice) // Asegurar que el precio siempre sea un número
    };

    // Agregar el producto al carrito
    cart.push(product);

    // Guardar las cremas seleccionadas (extras)
    const selectedCreams = getSelectedCreams(); // Obtenemos las cremas seleccionadas
    if (selectedCreams.length > 0) {
        selectedExtras[product.uniqueId] = selectedCreams; // Asociamos las cremas seleccionadas al producto usando el uniqueId
    }

    // Actualizar el carrito en el DOM
    updateCartUI();
}

// Función para obtener las cremas seleccionadas
function getSelectedCreams() {
    const creams = [];
    const checkboxes = document.querySelectorAll('.form-check-input');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            creams.push(checkbox.name); // Agregamos el nombre de la crema si está seleccionada
        }
    });

    return creams;
}

// Función para actualizar el carrito en el DOM
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Limpiar el contenido anterior del carrito
    cartItems.innerHTML = '';

    // Mostrar los productos en el carrito
    let total = 0;
    cart.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        // Crear el contenido del producto y agregar botón de eliminar
        li.innerHTML = `
            ${product.name} - S/ ${product.price.toFixed(2)}
            <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(${product.uniqueId})">Eliminar</button>
        `;

        cartItems.appendChild(li);
        total += product.price; // Sumar el precio al total
    });

    // Actualizar el total del carrito
    cartTotal.textContent = `S/ ${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(uniqueId) {
    // Filtrar el carrito para eliminar el producto con el uniqueId correspondiente
    cart = cart.filter(product => product.uniqueId !== uniqueId);

    // Eliminar las cremas seleccionadas del producto
    delete selectedExtras[uniqueId];

    // Actualizar la interfaz del carrito
    updateCartUI();
}

// Función para limpiar el carrito
function clearCart() {
    cart = [];
    selectedExtras = {};

    // Actualizar el carrito en el DOM
    updateCartUI();
}

// Función para enviar el pedido por correo electrónico
function sendEmailOrder(orderCode, message, total) {
    emailjs.send("service_16mours", "template_4mge0ol", {
        from_name: "Foodburgers", // Nombre del remitente
        message: message, // Detalles del pedido
        order_code: orderCode, // Código de pedido
        order_total: total // Total del pedido
    })
    .then(function(response) {
        console.log('Pedido enviado correctamente al correo', response.status, response.text);
    }, function(error) {
        console.error('Error al enviar el correo', error);
    });
}

// Función para enviar el pedido por WhatsApp y correo
document.getElementById('sendToWhatsapp').addEventListener('click', function() {
    const phoneNumber = '+51923755078'; // Cambia por el número al que enviarás el pedido

    // Generar código interno del pedido
    const orderCode = generateOrderCode();

    // Obtener los productos del carrito
    let message = `Pedido Código: ${orderCode}\n`;
    let total = 0;

    cart.forEach(product => {
        const productName = product.name;
        const productPrice = product.price.toFixed(2);
        message += `Producto: ${productName} - Precio: S/ ${productPrice}\n`;

        // Si el producto tiene cremas seleccionadas, las agregamos al mensaje
        if (selectedExtras[product.uniqueId]) {
            message += `Cremas: ${selectedExtras[product.uniqueId].join(', ')}\n`;
        }
        
        total += parseFloat(productPrice);
    });

    // Agregar el total al mensaje
    message += `\nTotal: S/ ${total.toFixed(2)}`;

    // Enviar el pedido al correo electrónico
    sendEmailOrder(orderCode, message, total.toFixed(2));

    // Codificar el mensaje para incluirlo en la URL de WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Redirigir a WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Limpiar el carrito después de enviar el pedido
    clearCart();
});

// Función para restablecer las cremas seleccionadas
function resetCreamSelection() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach(checkbox => {
      checkbox.checked = false; // Desmarcar todas las cremas
  });
}

// Escuchar cuando se cierra el modal para restablecer las cremas
$('#productModal').on('hidden.bs.modal', function () {
  resetCreamSelection(); // Llamar a la función cuando se oculta el modal
  document.getElementById('drinkQuantity').value = 1; // Restablecer la cantidad de gaseosas
});

// Función para actualizar el modal basado en el tipo de comida
function updateModalBasedOnFoodType(foodType) {
  const creamsOptions = document.getElementById('creamsOptions');
  const drinkOptions = document.getElementById('drinkOptions');

  if (foodType === 'pollo') {
      // Ocultar opciones de cremas y mostrar opciones de gaseosa
      creamsOptions.classList.add('d-none');
      drinkOptions.classList.remove('d-none');
  } else {
      // Mostrar opciones de cremas y ocultar opciones de gaseosa
      creamsOptions.classList.remove('d-none');
      drinkOptions.classList.add('d-none');
  }
}

// Evento para abrir el modal con el tipo correcto de comida
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
  button.addEventListener('click', function() {
      const foodType = this.getAttribute('data-food-type'); // Obtener el tipo de comida del botón
      updateModalBasedOnFoodType(foodType); // Actualizar el modal según el tipo de comida
  });
});
