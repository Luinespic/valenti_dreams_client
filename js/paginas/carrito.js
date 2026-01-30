import {
  obtenerCarrito,
  eliminarDelCarrito,
  vaciarCarrito,
} from "../funciones/storage.js";
import { actualizarContadorCarrito } from "../componentes/header.js";
import { crearContenedor } from "../funciones/utils.js";

export function renderCarrito() {
  const contenedor = crearContenedor("main", "Tu Carrito");

  const section = document.createElement("section");
  section.classList.add("carrito-lista");
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay sesiones en el carrito.";
    contenedor.append(mensaje);
  } else {
    let total = 0;

    carrito.forEach((sesion) => {
      total += sesion.precio * sesion.cantidad;

      const item = document.createElement("article");
      item.classList.add("item-carrito");

      const info = document.createElement("div");
      info.innerHTML = `<span class="nombre">${sesion.nombre}</span> x${sesion.cantidad} - <span class="precio">${sesion.precio * sesion.cantidad} €</span>`;

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        eliminarDelCarrito(sesion.id);
        renderCarrito();
        actualizarContadorCarrito();
      });

      item.append(info, btnEliminar);
      section.append(item);
    });

    const section2 = document.createElement("section");
    section2.classList.add("total-carrito");
    const totalTexto = document.createElement("h3");
    totalTexto.textContent = `Total: ${total} €`;

    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar carrito";
    btnVaciar.addEventListener("click", () => {
      vaciarCarrito();
      renderCarrito();
      actualizarContadorCarrito();
    });

    contenedor.append(section);
    contenedor.append(section2);
    section2.append(totalTexto, btnVaciar);
  }
}
