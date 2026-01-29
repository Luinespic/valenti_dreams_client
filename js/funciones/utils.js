export function crearContenedor(titulo) {
  const contenedor = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.textContent = titulo;
  contenedor.append(h1);
  return contenedor;
}
