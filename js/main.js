const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menuItems = document.querySelectorAll("#menu .lista-menu a");

abrir.addEventListener("click", () => {
  menu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("visible");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sectionInicio = document.querySelector(".section-inicio");

  const ajustarPadding = () => {
    const alturaHeader = header.offsetHeight;
    sectionInicio.style.paddingTop = `${alturaHeader}px`;
  };

  ajustarPadding();
  window.addEventListener("resize", ajustarPadding);
});
