// Datos del proyecto de Firebase (no son secretos: la seguridad la dan las reglas de Firestore).
// Mientras firebaseConfig sea null, la página de pedidos funciona solo por WhatsApp.
export const firebaseConfig = {
  apiKey: "AIzaSyD9liC5XOQPSMSwdNCwgdSgEjUc0GA1gRM",
  authDomain: "fresas-con-crema-f6fec.firebaseapp.com",
  projectId: "fresas-con-crema-f6fec",
  storageBucket: "fresas-con-crema-f6fec.firebasestorage.app",
  messagingSenderId: "147269591726",
  appId: "1:147269591726:web:42fb083eaebcb8857d033f"
};

// UID de la cuenta que puede ver los pedidos (Authentication → Usuarios).
export const ADMIN_UID = "";

export const FIREBASE_VERSION = "10.12.2";
