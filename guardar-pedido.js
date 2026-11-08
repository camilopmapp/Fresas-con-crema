// Guarda cada pedido en Firestore.
import { firebaseConfig, FIREBASE_VERSION } from "./firebase-config.js";

if (firebaseConfig) {
  const base = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;
  const { initializeApp } = await import(`${base}/firebase-app.js`);
  const { getFirestore, doc, setDoc, onSnapshot, serverTimestamp } = await import(`${base}/firebase-firestore.js`);
  const db = getFirestore(initializeApp(firebaseConfig));

  // Abierto / cerrado: si no se puede leer, la página queda abierta para no bloquear ventas.
  onSnapshot(doc(db, "config", "tienda"),
    snap => window.ponerTienda?.(snap.exists() ? snap.data().abierto !== false : true),
    () => window.ponerTienda?.(true));

  // Menú (toppings, precios, domicilio): si no existe o falla, la página usa su menú de respaldo.
  onSnapshot(doc(db, "config", "menu"), snap => { if (snap.exists()) window.ponerMenu?.(snap.data()); }, () => {});

  window.guardarPedido = (p) =>
    setDoc(doc(db, "pedidos", p.codigo), { ...p, estado: "nuevo", creado: serverTimestamp() });
}
