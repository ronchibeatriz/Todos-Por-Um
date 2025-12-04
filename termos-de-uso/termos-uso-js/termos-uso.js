const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-hamburguer");

btnMenu.addEventListener('click', () => {
    menu.classList.add("menu-show");
});

