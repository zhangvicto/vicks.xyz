let menuHover = document.getElementById("menu-container"); //new object from menuhover
menuHover.onmouseenter = function(){
    fadeIn(document.getElementById("menu"));
    topMarginDown(document.getElementById("menu-hover"), 25, 5, 1);
}
menuHover.onmouseleave = function(){
    fadeOut(document.getElementById("menu"));
    topMarginUp(document.getElementById("menu-hover"), 25, 5, 1);
}

//menu buttons
//et menuRobotics = getElementById("menu-robotics");
//let menuAbout = getElementById("menu-about-me");
//let menuGraphics = getElementById("menu-graphics");
//let menuWeb = getElementById("menu-web");
//let menuHobby = getElementById("menu-hobby");
//let menuCad = getElementById("menu-cad");
//let menuOthers = getElementById("menu-others");




