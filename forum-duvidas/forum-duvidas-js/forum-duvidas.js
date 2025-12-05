const modal = document.getElementById("modal");
const abreBtn = document.getElementById("abreModal");
const fechaBtn = document.getElementById("fechaModal");

abreBtn.addEventListener("click", () => {
  modal.classList.remove("someModal");
});

fechaBtn.addEventListener("click", () => {
  modal.classList.add("someModal");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("someModal");
  }
});

//MENU RESPONSIVO MENU RESPONSIVO MENU RESPONSIVO//
 const btnMenu = document.getElementById("btn-menu");
      const menu = document.getElementById("menu");
      const btnFecharMenu = document.getElementById("fechar-menu");
      const main = document.querySelector("main");

      btnMenu.addEventListener("click", () => {
        menu.classList.add("menu-show");
      });
      btnFecharMenu.addEventListener("click", () => {
        menu.classList.remove("menu-show");
      });

      main.addEventListener("click", () => {
        menu.classList.remove("menu-show");
      });