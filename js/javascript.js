const burger_icon = document.querySelector(".under-header__burger");
const burger = document.querySelector(".burger");

burger_icon.onclick = function(){
    const openAttr = 'main__burger burger burger_open';
    const closeAttr = 'main__burger burger';

    if(burger.getAttribute('class') == openAttr){
        burger.setAttribute('class', closeAttr);
    }
    else{
        burger.setAttribute('class', openAttr);
    }
}