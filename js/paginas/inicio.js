import { crearContenedor } from "../funciones/utils.js";

export function renderInicio() {
  const contenedor = crearContenedor("main", "Sesiones Interactivas");

  const descripcion = document.createElement("p");
  descripcion.textContent =
    "Explora sesiones de supra consciencia y gestiona tu experiencia espiritual.";

  contenedor.append(descripcion);
}
