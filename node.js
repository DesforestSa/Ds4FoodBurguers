const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Simularemos un sistema de validación para Yape y Pago en Efectivo
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint para validar el pago de Yape
app.post('/api/validate-yape', (req, res) => {
    const { qrCode, amount } = req.body;

    // Simulamos la validación del código QR y el monto
    if (qrCode === "valid-qr-code" && amount > 0) {
        res.status(200).json({ message: "Pago con Yape validado con éxito", success: true });
    } else {
        res.status(400).json({ message: "Error al validar el pago con Yape", success: false });
    }
});

// Endpoint para confirmar pago en efectivo
app.post('/api/validate-cash', (req, res) => {
    const { orderId } = req.body;

    // Simulamos que un pago en efectivo siempre es válido al recibir el pedido
    res.status(200).json({ message: "Pago en efectivo confirmado", success: true });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de validación de pagos corriendo en el puerto ${PORT}`);
});
