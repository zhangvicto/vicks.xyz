//changing title as enter is pressed
var input = document.getElementById("userInput");
function btnAction (){
    //change title
    document.title = "Victor Zhang";

    //reveal new page
    document.getElementById("main").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementsByClassName("front").style.display = "none";
}

//key pressed action
input.addEventListener("keydown",function(press){
    if (press.keyCode === 13) {
        press.preventDefault();
        btnAction();
    }})


//sliding boxes
var i= 0;
var images = [];
var time = 3000;
images[0] = document.getElementById("card1");
images[1] = document.getElementById("card2");
images[2] = document.getElementById("card3");
images[3] = document.getElementById("card4");

function changeImg() {
    

setTimeout("changeImg()",time);

}

window.onload = changeImg();