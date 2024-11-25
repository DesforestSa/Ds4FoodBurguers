// Function to load product details into the modal
function cargarProducto(productId) {
    const productDetails = {
        1: {
            title: 'FOOD CLASICO',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            
            price: 'S/ 10.00'
        },
        2: {
            title: 'FOOD ESPECIAL ',
            image: 'assets/z1.PNG',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            description: 'FOOD ESPECIAL CHULETA AHUMADA',
            price: 'S/ 14.00'
        },
        3: {
            title: 'ROYAL',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            
            description: 'Tomate Lechuga Cebolla en aros Queso fundido Tocino Papas Cremas',
            price:'S/ 14.00'
        },
        4: {
            title: 'FOOD ESPECIAL CHULETA AHUMADA ',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            description: '----------------------------',
            price: 'S/ 14.00'
        },
        5: {
            title: 'FOOD DOBLE CARNE',
            image: 'img/c1.png',
            image1: 'img/c2.png',
            image2: 'img/c3.png',
            description: '--------------------------------------------.',
            price:'S/ 14.00'
        },
        6: {
            title: 'FOOD MIXTA',
            image: 'img/d1.png',
            image1: 'img/d2.png',
            image2: 'img/d3.png',
            description: '----------------------------------------------------------------',
            price: 'S/ 17.00'
        },
        7: {
            title: 'FOOD TRIPLE',
            image: 'img/e1.png',
            image1: 'img/e2.png',
            image2: 'img/e3.png',
            description: '------------------------------------------------------',
            price: 'S/ 22.00'
        },
        8: {
            title: 'FOOD EXPLOSIVA',
            image: 'img/f1.png',
            image1: 'img/f2.png',
            image2: 'img/f3.png',
            description: '---------------------------------------------------------',
            price: 'S/ 28.00'
        },
        9: {
            title: 'A LO POBRE',
            image: 'img/g1.png',
            image1: 'img/g2.png',
            image2: 'img/g2.png',
            description: 'Este polo oversize es de seda y traspirable con un diseo minimalista, diseñado para un estilo cómodo y moderno.',
            price: 'S/ 12.00'
        },
        10: {
            title: 'POLLO CRISPY',
            image: 'img/h1.png',
            image1: 'img/h2.png',
            image2: 'img/h3.png',
            description: 'Polo tela de seda traspirable sin diseño para el baico de tus otfits, ideal para destacar entre la multitud.',
            price: 'S/ 15.00'
        },
        11: {
            title: 'PEPITO MIXTO',
            image: 'img/i1.png',
            image1: 'img/i2.png',
            image2: 'img/i3.png',
            
            description: 'Polo de alta calidad con un toque de lujo y exclusividad .',
            price: 'S/ 28.00'
        },
        12: {
            title: 'PEPITO ESPECIAL',
            image: 'img/j1.png',
            image1: 'img/j2.png',
            image2: 'img/j3.png',
            description: 'Polo basico para combinar, perfecto para un estilo casual y práctico.',
            price: 'S/ 36.00'
        },
        13: {
            title: 'PEPITO PRIMAVERA',
            image: 'img/K1.png',
            image1: 'img/K2.png',
            image2: 'img/K3.png',
            description: 'POLO NEW DORK CIRY exclusibo y moderno.',
            price: 'S/ 36.00'
        },
        14: {
            title: 'SALCHIPAPA CLASICA',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            description: 'Tomate Lechuga Cebolla en aros Papas y cremas..',
            price: 'S/ 11.00'
        },
        15: {
            title: 'SALCHIPOLLO',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            description: 'Tomate Lechuga Cebolla en aros Papas y cremas..',
            price: 'S/ 13.00'
        },
        16: {
            title: 'SALCHICARNE',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            description: 'Tomate Lechuga Cebolla en aros Papas y cremas..',
            price: 'S/ 13.00'
        },
        17: {
            title: 'SALCHIPAPA CON TOCINO',
            image: 'img/ñ1.png',
            image1: 'img/ñ2.png',
            image2: 'img/ñ3.png',
            description: 'Este pantalon JEAN oversize es perfecto para cualquier ocasión, diseñado para un estilo cómodo y moderno.',
            price: 'S/ 15.00'
        },
        18: {
            title: 'PECHO',
            image: 'assets/z1.png',
            image1: 'assets/z2.png',
            image2: 'assets/z3.png',
            description: 'Tomate Lechuga Cebolla en aros Papas y cremas..',
            price: 'S/ 9.00'
        },
        19: {
            title: 'ALITA',
            image: 'img/p1.png',
            image1: 'img/p2.png',
            image2: 'img/p3.png',
            
            description: 'Pantalon carpintero estilo retro y exclusividad.',
            price: 'S/ 10.00'
        },
        20: {
            title: 'Perro Caliente Clasico',
            image: 'img/q1.png',
            image1: 'img/q2.png',
            image2: 'img/q3.png',
            description: 'Pantalón cargo con múltiples bolsillos, perfecto para un estilo casual y práctico.',
            price: 'S/ 5.00'
       
        },
        21: {
            title: 'Pepiperro de Carne',
            image: 'img/5.png',
            image1: 'img/5.png',
            image2: 'img/5.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 9.00'
        },
        22: {
            title: 'Pepiperro de Pollo',
            image: 'img/6.png',
            image1: 'img/6.png',
            image2: 'img/6.png',
            description: 'Polera negra para  un máximo confort.',
            price: 'S/ 10.00'
        },
        23: {
            title: 'Pepiperro de Chorizo',
            image: 'img/7.png',
            image1: 'img/7.png',
            image2: 'img/7.png',
            description: 'Casaca de manga larga y estilo oversize para un look relajado.',
            price: 'S/ 8.00'
        },
        24: {
            title: 'Pepiperro Mixto',
            image: 'img/8.png',
            image1: 'img/8.png',
            image2: 'img/8.png',
            description: 'Este polo oversize es perfecto para cualquier ocasión, diseñado para un estilo cómodo y moderno.',
            price: 'S/ 13.00'
        },
        25: {
            title: 'Coca Cola',
            image: 'img/1.png',
            image1: 'img/1.png',
            image2: 'img/1.png',
            description: 'Polera con un diseño único y sicodélico, ideal para destacar entre la multitud.',
            price: 'S/ 4.00'
        },
        26: {
            title: 'Coca Cola Zero',
            image: 'img/2.png',
            image1: 'img/2.png',
            image2: 'img/2.png',
            
            description: 'Polo de alta calidad con un toque de lujo y exclusividad.',
            price: 'S/ 4.00'
        },
        27: {
            title: 'Inka Cola',
            image: 'img/3.png',
            image1: 'img/3.png',
            image2: 'img/3.png',
            description: 'Pantalón cargo con múltiples bolsillos, perfecto para un estilo casual y práctico.',
            price: 'S/ 4.00'
        },
        28: {
            title: 'Pepsi',
            image: 'img/4.png',
            image1: 'img/4.png',
            image2: 'img/4.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 5.00'
        },
        29: {
            title: 'Concordia Piña',
            image: 'img/9.png',
            image1: 'img/9.png',
            image2: 'img/9.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 3.00'
        },
        30: {
            title: 'Concordia Fresa',
            image: 'img/10.png',
            image1: 'img/10.png',
            image2: 'img/10.png',
            description: 'Casaca Nike con tecnología Air Zoom para un máximo confort.',
            price: 'S/ 3.00'
        },
        31: {
            title: 'Fanta Naranja',
            image: 'img/11.png',
            image1: 'img/11.png',
            image2: 'img/11.png',
            description: 'Polo de manga larga y estilo oversize para un look relajado.',
            price: 'S/ 3.00'
        },
        32: {
            title: 'Guarana',
            image: 'img/12.png',
            image1: 'img/12.png',
            image2: 'img/12.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 3.00'
        },
        33: {
            title: 'Chicha Morada 1 L',
            image: 'img/12.png',
            image1: 'img/12.png',
            image2: 'img/12.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 6.00'
        },
        34: {
            title: 'Chicha de Arroz',
            image: 'img/12.png',
            image1: 'img/12.png',
            image2: 'img/12.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 8.00'
        },
        35: {
            title: 'Pepiperro Especial',
            image: 'img/12.png',
            image1: 'img/12.png',
            image2: 'img/12.png',
            description: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.',
            price: 'S/ 10.00'
        }

    };

    const product = productDetails[productId];

    if (product) {
        document.getElementById('productModalLabel').innerText = product.title;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductImage1').src = product.image1;
        document.getElementById('modalProductImage2').src = product.image2;
        
        document.getElementById('modalProductDescription').innerText = product.description;
        document.getElementById('modalProductPrice').innerText = product.price;
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }
}

// Function to load product details into the modal
function cargarProducto(productId) {
    const productDetails = {
        1: { title: 'FOOD CLASICO', descripcion: 'Esta es una hamburguesa clásica.', price: '10.00' },
2: { title: 'FOOD ESPECIAL', descripcion: 'FOOD ESPECIAL CHULETA AHUMADA.', price: '14.00' },
3: { title: 'ROYAL', descripcion: 'Tomate Lechuga Cebolla en aros Queso fundido Tocino Papas Cremas.', price: '14.00' },
4: { title: 'FOOD ESPECIAL CHULETA AHUMADA', descripcion: '----------------------------', price: '14.00' },
5: { title: 'FOOD DOBLE CARNE', descripcion: '--------------------------------------------.', price: '14.00' },
6: { title: 'FOOD MIXTA', descripcion: '----------------------------------------------------------------.', price: '17.00' },
7: { title: 'FOOD TRIPLE', descripcion: '------------------------------------------------------.', price: '22.00' },
8: { title: 'FOOD EXPLOSIVA', descripcion: '---------------------------------------------------------.', price: '28.00' },
9: { title: 'A LO POBRE', descripcion: 'Este polo oversize es de seda y traspirable con un diseño minimalista, diseñado para un estilo cómodo y moderno.', price: '12.00' },
10: { title: 'POLLO CRISPY', descripcion: 'Polo tela de seda traspirable sin diseño para el básico de tus outfits, ideal para destacar entre la multitud.', price: '15.00' },
11: { title: 'PEPITO MIXTO', descripcion: 'Polo de alta calidad con un toque de lujo y exclusividad.', price: '28.00' },
12: { title: 'PEPITO ESPECIAL', descripcion: 'Polo básico para combinar, perfecto para un estilo casual y práctico.', price: '36.00' },
13: { title: 'PEPITO PRIMAVERA', descripcion: 'POLO NEW DORK CITY exclusivo y moderno.', price: '36.00' },
14: { title: 'SALCHIPAPA CLASICA', descripcion: 'Tomate Lechuga Cebolla en aros Papas y cremas.', price: '11.00' },
15: { title: 'SALCHIPOLLO', descripcion: 'Tomate Lechuga Cebolla en aros Papas y cremas.', price: '13.00' },
16: { title: 'SALCHICARNE', descripcion: 'Tomate Lechuga Cebolla en aros Papas y cremas.', price: '13.00' },
17: { title: 'SALCHIPAPA CON TOCINO', descripcion: 'Este pantalón JEAN oversize es perfecto para cualquier ocasión, diseñado para un estilo cómodo y moderno.', price: '15.00' },
18: { title: 'PECHO', descripcion: 'Tomate Lechuga Cebolla en aros Papas y cremas.', price: '9.00' },
19: { title: 'ALITA', descripcion: 'Pantalón carpintero estilo retro y exclusividad.', price: '10.00' },
20: { title: 'Perro Caliente Clasico', descripcion: 'Pantalón cargo con múltiples bolsillos, perfecto para un estilo casual y práctico.', price: '5.00' },
21: { title: 'Pepiperro de Carne', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '9.00' },
22: { title: 'Pepiperro de Pollo', descripcion: 'Polera negra para un máximo confort.', price: '10.00' },
23: { title: 'Pepiperro de Chorizo', descripcion: 'Casaca de manga larga y estilo oversize para un look relajado.', price: '8.00' },
24: { title: 'Pepiperro Mixto', descripcion: 'Este polo oversize es perfecto para cualquier ocasión, diseñado para un estilo cómodo y moderno.', price: '13.00' },
25: { title: 'Coca Cola', descripcion: 'Polera con un diseño único y psicodélico, ideal para destacar entre la multitud.', price: '4.00' },
26: { title: 'Coca Cola Zero', descripcion: 'Polo de alta calidad con un toque de lujo y exclusividad.', price: '4.00' },
27: { title: 'Inka Cola', descripcion: 'Pantalón cargo con múltiples bolsillos, perfecto para un estilo casual y práctico.', price: '4.00' },
28: { title: 'Pepsi', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '5.00' },
29: { title: 'Concordia Piña', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '3.00' },
30: { title: 'Concordia Fresa', descripcion: 'Casaca Nike con tecnología Air Zoom para un máximo confort.', price: '3.00' },
31: { title: 'Fanta Naranja', descripcion: 'Polo de manga larga y estilo oversize para un look relajado.', price: '3.00' },
32: { title: 'Guarana', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '3.00' },
33: { title: 'Chicha Morada 1 L', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '6.00' },
34: { title: 'Chicha de Arroz', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '8.00' },
35: { title: 'Pepiperro Especial', descripcion: 'Casaca Nike de estilo low-top, ideal para un look deportivo y moderno.', price: '10.00' }

        // Agrega más productos aquí...
    };

    const product = productDetails[productId];

    if (product) {
        // Cargar los datos del producto en el modal
        document.getElementById('productModalLabel').innerText = product.title;
        document.getElementById('modalProductDescription').innerText = product.descripcion; // Añadir la descripción
        document.getElementById('modalProductPrice').innerText = `S/ ${product.price}`;

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();

        // Evento para añadir al carrito desde el modal
        const addToCartButton = document.getElementById('addToCartButton');
        addToCartButton.onclick = function() {
            // Solo añadimos el título y el precio al carrito
            addToCart(product.title, product.price);
            modal.hide(); // Cerrar el modal después de añadir
        };
    }
}