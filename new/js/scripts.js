let menuHover = document.getElementById("menu-container"); //new object from menuhover
menuHover.onmouseenter = function(){
    fadeIn(document.getElementById("menu"));
    topMarginDown(document.getElementById("menu-hover"), 25, 5, 1);
}
menuHover.onmouseleave = function(){
    fadeOut(document.getElementById("menu"));
    topMarginUp(document.getElementById("menu-hover"), 25, 5, 1);
}

