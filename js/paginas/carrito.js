import {
  obtenerCarrito,
  eliminarDelCarrito,
  vaciarCarrito,
} from "../funciones/storage.js";
import { actualizarContadorCarrito } from "../componentes/header.js";
import { crearContenedor } from "../funciones/utils.js";

export function renderCarrito(main) {
  main.innerHTML = "";

  const contenedor = crearContenedor("Carrito espiritual");

  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay sesiones en el carrito.";
    contenedor.append(mensaje);
  } else {
    const lista = document.createElement("ul");

    carrito.forEach((sesion) => {
      const item = document.createElement("li");

      const nombre = document.createElement("span");
      nombre.textContent = sesion.nombre;

      const cantidadPrecio = document.createElement("span");
      cantidadPrecio.textContent = `${sesion.cantidad} x ${sesion.precio} €`;

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        eliminarDelCarrito(sesion.id);
        renderCarrito(main);
        actualizarContadorCarrito();
      });

      item.append(nombre, cantidadPrecio, btnEliminar);
      lista.append(item);
    });

    contenedor.append(lista);

    const total = carrito.reduce((acc, s) => acc + s.precio * s.cantidad, 0);
    const totalTexto = document.createElement("h3");
    totalTexto.textContent = `Total: ${total} €`;

    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar carrito";
    btnVaciar.addEventListener("click", () => {
      vaciarCarrito();
      renderCarrito(main);
      actualizarContadorCarrito();
    });

    contenedor.append(totalTexto, btnVaciar);
  }

  main.append(contenedor);
}
