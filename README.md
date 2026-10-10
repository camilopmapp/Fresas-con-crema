# Fresas con Crema · Pedidos

Página de pedidos: el cliente arma su vaso, elige toppings, ve el precio, llena sus datos y envía el pedido por WhatsApp. Pagos por efectivo, Nequi o llave Bre-B.

Para cambiar precios, toppings, fecha, domicilio, horas o datos de pago, edite el bloque `CONFIG` al inicio del `<script>` en `index.html`.

Sitio: https://camilopmapp.github.io/Fresas-con-crema/

## Panel de pedidos

- `admin.html`: panel con usuario y contraseña (Firebase Authentication) para ver los pedidos en vivo y marcarlos como pagados, entregados o cancelados.
- `firebase-config.js`: datos del proyecto de Firebase y UID de la cuenta administradora.
- `firestore.rules`: reglas de seguridad para pegar en Firestore → Reglas.
