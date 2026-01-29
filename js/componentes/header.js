import { renderInicio } from "../paginas/inicio.js";
import { renderSesiones } from "../paginas/sesiones.js";
import { renderCarrito } from "../paginas/carrito.js";
import { obtenerCarrito } from "../funciones/storage.js";

let btnInicio, btnSesiones, btnCarrito;

export function renderHeader(app, main) {
  const header = document.createElement("header");

  const titulo = document.createElement("h2");
  titulo.textContent = "Sueños Valenti";

  const nav = document.createElement("nav");
  btnInicio = document.createElement("button");
  btnInicio.textContent = "Inicio";

  btnSesiones = document.createElement("button");
  btnSesiones.textContent = "Ver sesiones";

  btnCarrito = document.createElement("button");
  btnCarrito.id = "btnCarrito";
  actualizarContadorCarrito();

  nav.append(btnInicio, btnSesiones, btnCarrito);
  header.append(titulo, nav);
  app.prepend(header);

  btnInicio.addEventListener("click", () => renderInicio(main));
  btnSesiones.addEventListener("click", () => renderSesiones(main));
  btnCarrito.addEventListener("click", () => renderCarrito(main));
}

export function actualizarContadorCarrito() {
  const carrito = obtenerCarrito();
  const total = carrito.reduce(
    (acc, sesion) => acc + (sesion.cantidad || 1),
    0,
  );
  btnCarrito.textContent = `Carrito (${total})`;
}
