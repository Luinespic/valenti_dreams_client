const CLAVE_CARRITO = "carrito";

export function obtenerCarrito() {
  const carrito = localStorage.getItem(CLAVE_CARRITO);
  return carrito ? JSON.parse(carrito) : [];
}

export function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

export function añadirAlCarrito(sesion) {
  const carrito = obtenerCarrito();
  const existente = carrito.find((s) => s.id === sesion.id);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...sesion, cantidad: 1 });
  }

  guardarCarrito(carrito);
}

export function eliminarDelCarrito(id) {
  const carrito = obtenerCarrito();
  const sesion = carrito.find((s) => s.id === id);

  if (!sesion) return;

  if (sesion.cantidad > 1) {
    sesion.cantidad -= 1;
  } else {
    const nuevoCarrito = carrito.filter((s) => s.id !== id);
    guardarCarrito(nuevoCarrito);
    return;
  }

  guardarCarrito(carrito);
}

export function vaciarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
}
