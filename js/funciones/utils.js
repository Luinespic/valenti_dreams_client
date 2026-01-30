export function crearContenedor(name, titulo) {
  if (document.querySelector(name)) {
    const contenedor = document.querySelector(name);
    contenedor.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = titulo;
    h1.classList.add("titulo-pagina");
    contenedor.append(h1);
    return contenedor;
  }

  const contenedor = document.createElement(name);
  const h1 = document.createElement("h1");
  h1.textContent = titulo;
  h1.classList.add("titulo-pagina");
  contenedor.append(h1);
  return contenedor;
}
