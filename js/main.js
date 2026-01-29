import { renderHeader } from "./componentes/header.js";
import { renderFooter } from "./componentes/footer.js";
import { renderInicio } from "./paginas/inicio.js";

const app = document.getElementById("app");

let main = document.querySelector("main");
if (!main) {
  main = document.createElement("main");
  app.append(main);
}

renderHeader(app, main);
renderFooter(app);

renderInicio(main);
