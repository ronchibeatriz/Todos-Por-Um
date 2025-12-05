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