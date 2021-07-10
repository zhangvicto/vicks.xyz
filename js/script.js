let menuHover = document.getElementById("menu-container"); //new object from menuhover
menuHover.onmouseenter = function(){
    fadeIn(document.getElementById("menu"));
    topMarginDown(document.getElementById("menu-hover"), 25, 5, 1);
}
menuHover.onmouseleave = function(){
    fadeOut(document.getElementById("menu"));
    topMarginUp(document.getElementById("menu-hover"), 25, 5, 1);
}

// menu buttons
let menuRobotics = document.getElementById("menu-robotics");
let menuAbout = document.getElementById("menu-about-me");
let menuGraphics = document.getElementById("menu-graphics");
let menuWeb = document.getElementById("menu-web");
let menuHobby = document.getElementById("menu-hobby");
let menuCad = document.getElementById("menu-cad");
let menuOthers = document.getElementById("menu-others");

menuRobotics.addEventListener("click", function() {
    fadeOut(document.getElementById("page-about"));
    fadeOut(document.getElementById("page-graphics"));
    fadeOut(document.getElementById("page-web"));
    fadeOut(document.getElementById("page-hobby"));
    fadeOut(document.getElementById("page-cad"));
    fadeOut(document.getElementById("page-others"));
    fadeIn(document.getElementById("page-robotics"));
});

menuAbout.addEventListener("click", function() {
    fadeOut(document.getElementById("page-robotics"));
    fadeOut(document.getElementById("page-graphics"));
    fadeOut(document.getElementById("page-web"));
    fadeOut(document.getElementById("page-hobby"));
    fadeOut(document.getElementById("page-cad"));
    fadeOut(document.getElementById("page-others"));
    fadeIn(document.getElementById("page-about"));
});

menuGraphics.addEventListener("click", function() {
    fadeOut(document.getElementById("page-about"));
    fadeOut(document.getElementById("page-robotics"));
    fadeOut(document.getElementById("page-web"));
    fadeOut(document.getElementById("page-hobby"));
    fadeOut(document.getElementById("page-cad"));
    fadeOut(document.getElementById("page-others"));
    fadeIn(document.getElementById("page-graphics"));
});

menuWeb.addEventListener("click", function() {
    fadeOut(document.getElementById("page-about"));
    fadeOut(document.getElementById("page-graphics"));
    fadeOut(document.getElementById("page-robotics"));
    fadeOut(document.getElementById("page-hobby"));
    fadeOut(document.getElementById("page-cad"));
    fadeOut(document.getElementById("page-others"));
    fadeIn(document.getElementById("page-web"));
});

menuHobby.addEventListener("click", function() {
    fadeOut(document.getElementById("page-about"));
    fadeOut(document.getElementById("page-graphics"));
    fadeOut(document.getElementById("page-robotics"));
    fadeOut(document.getElementById("page-web"));
    fadeOut(document.getElementById("page-cad"));
    fadeOut(document.getElementById("page-others"));
    fadeIn(document.getElementById("page-hobby"));
});

menuCad.addEventListener("click", function() {
    fadeOut(document.getElementById("page-about"));
    fadeOut(document.getElementById("page-graphics"));
    fadeOut(document.getElementById("page-robotics"));
    fadeOut(document.getElementById("page-web"));
    fadeOut(document.getElementById("page-hobby"));
    fadeOut(document.getElementById("page-others"));
    fadeIn(document.getElementById("page-cad"));
});

menuOthers.addEventListener("click", function() {
    fadeOut(document.getElementById("page-about"));
    fadeOut(document.getElementById("page-graphics"));
    fadeOut(document.getElementById("page-robotics"));
    fadeOut(document.getElementById("page-web"));
    fadeOut(document.getElementById("page-hobby"));
    fadeOut(document.getElementById("page-cad"));
    fadeIn(document.getElementById("page-others"));
});

//project elements
let projectContent = document.getElementById("project-content");
let quadruped = document.getElementById("quadruped");


