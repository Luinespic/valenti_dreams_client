export async function fetchSesiones() {
  const respuesta = await fetch("js/data/sesiones.json");
  const datos = await respuesta.json();
  return datos;
}
