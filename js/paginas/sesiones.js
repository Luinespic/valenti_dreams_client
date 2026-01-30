import { fetchSesiones } from "../funciones/fetchSesiones.js";
import { añadirAlCarrito } from "../funciones/storage.js";
import { actualizarContadorCarrito } from "../componentes/header.js";
import { crearContenedor } from "../funciones/utils.js";

export async function renderSesiones() {
  const contenedor = crearContenedor("main", "Sesiones disponibles");

  const section = document.createElement("section");
  section.classList.add("sesiones-lista");

  const sesiones = await fetchSesiones();
  sesiones.forEach((sesion) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-sesion");

    const nombre = document.createElement("h3");
    nombre.textContent = sesion.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = sesion.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${sesion.precio} €`;

    const btnAñadir = document.createElement("button");
    btnAñadir.textContent = "Añadir al carrito";
    btnAñadir.addEventListener("click", () => {
      añadirAlCarrito(sesion);
      actualizarContadorCarrito();
    });

    tarjeta.append(nombre, descripcion, precio, btnAñadir);
    section.append(tarjeta);
    contenedor.append(section);
  });
}
