const burger_icon = document.querySelector(".nav__burger-icon");
const burger = document.querySelector(".header__menu");

burger_icon.onclick = function(){
    burger.classList.toggle('menu_open');
}