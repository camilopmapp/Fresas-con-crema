// Datos del proyecto de Firebase (no son secretos: la seguridad la dan las reglas de Firestore).
// Si firebaseConfig es null, los pedidos no se pueden guardar.
export const firebaseConfig = {
  apiKey: "AIzaSyD9liC5XOQPSMSwdNCwgdSgEjUc0GA1gRM",
  authDomain: "fresas-con-crema-f6fec.firebaseapp.com",
  projectId: "fresas-con-crema-f6fec",
  storageBucket: "fresas-con-crema-f6fec.firebasestorage.app",
  messagingSenderId: "147269591726",
  appId: "1:147269591726:web:42fb083eaebcb8857d033f"
};

// UID de las cuentas que pueden ver y gestionar pedidos (Authentication → Usuarios).
// Al agregar uno aquí, agréguelo también en firestore.rules y vuelva a publicar las reglas.
export const ADMIN_UIDS = [
  "1cWBOeSjxth6DGMUk8UhxcKWGuJ3",
  "uD4ehHLuorZpizrcgVkhNZTGIbk1"
];

// Menú inicial que ve el panel si aún no se ha guardado ninguno.
export const MENU_INICIAL = {
  toppings: [
    { nombre: "Arequipe", disponible: true },
    { nombre: "Queso", disponible: true },
    { nombre: "Sirope de chocolate", disponible: true },
    { nombre: "M&M's", disponible: true }
  ],
  precios: [10000, 12000, 14000, 15000, 16000],
  domicilio: 2000
};

export const FIREBASE_VERSION = "10.12.2";
