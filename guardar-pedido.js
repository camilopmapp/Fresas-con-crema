// Guarda cada pedido en Firestore antes de abrir WhatsApp.
import { firebaseConfig, FIREBASE_VERSION } from "./firebase-config.js";

if (firebaseConfig) {
  const base = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;
  const { initializeApp } = await import(`${base}/firebase-app.js`);
  const { getFirestore, doc, setDoc, serverTimestamp } = await import(`${base}/firebase-firestore.js`);
  const db = getFirestore(initializeApp(firebaseConfig));

  window.guardarPedido = (p) =>
    setDoc(doc(db, "pedidos", p.codigo), { ...p, estado: "nuevo", creado: serverTimestamp() });
}
