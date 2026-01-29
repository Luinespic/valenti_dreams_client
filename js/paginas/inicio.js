import { crearContenedor } from "../funciones/utils.js";

export function renderInicio(main) {
  main.innerHTML = "";

  const contenido = crearContenedor("Sesiones Interactivas");

  const descripcion = document.createElement("p");
  descripcion.textContent =
    "Explora sesiones de supra consciencia y gestiona tu experiencia espiritual.";
  contenido.append(descripcion);

  main.append(contenido);
}
