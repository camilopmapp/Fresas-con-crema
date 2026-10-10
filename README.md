# Fresas con Crema · Pedidos

Página de pedidos: el cliente arma su vaso, elige toppings, ve el precio, llena sus datos y confirma. El pedido se guarda en Firebase y aparece en el panel (admin.html). Pagos por efectivo, Nequi o llave Bre-B; el comprobante se envía por WhatsApp desde la pantalla de confirmación.

Para cambiar precios, toppings, fecha, domicilio, horas o datos de pago, edite el bloque `CONFIG` al inicio del `<script>` en `index.html`.

Sitio: https://camilopmapp.github.io/Fresas-con-crema/

## Panel de pedidos

- `admin.html`: panel con usuario y contraseña para ver los pedidos en vivo, marcarlos como pagados, entregados o cancelados, activar alertas con sonido y descargar Excel (Pedidos, Detalle y Resumen).
- `firebase-config.js`: datos del proyecto de Firebase y UID de la cuenta administradora.
- `firestore.rules`: reglas de seguridad para pegar en Firestore → Reglas.
