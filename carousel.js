function updateProductModal(title, description, price, imageUrl) {
    document.getElementById('productModalLabel').textContent = title;
    document.getElementById('modalProductDescription').textContent = description;
    document.getElementById('modalProductPrice').textContent = `S/ ${price}`;
    document.getElementById('modalProductImage').src = imageUrl;
}