import { fetchSesiones } from "../funciones/fetchSesiones.js";
import { añadirAlCarrito } from "../funciones/storage.js";
import { actualizarContadorCarrito } from "../componentes/header.js";
import { crearContenedor } from "../funciones/utils.js";

export async function renderSesiones(main) {
  main.innerHTML = "";

  const contenedor = crearContenedor("Sesiones disponibles");

  const sesiones = await fetchSesiones();
  const grid = document.createElement("section");
  sesiones.forEach((sesion) => {
    const card = document.createElement("article");

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

    card.append(nombre, descripcion, precio, btnAñadir);
    grid.append(card);
  });

  contenedor.append(grid);
  main.append(contenedor);
}
