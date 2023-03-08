const burger_icon = document.querySelector("#burger-icon");
const burger = document.querySelector(".header__burger-container");

burger_icon.onclick = function(){
    burger.classList.toggle('header__burger-container_open');
}