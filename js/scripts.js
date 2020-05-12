//changing title as enter is pressed
var input = document.getElementById("userInput");
function btnAction (){
    document.title = "Victor Zhang";
    //reveal new page
    document.getElementById("main").style.display = "block";
}

//key pressed action
input.addEventListener("keydown",function(press){
    if (press.keyCode === 13) {
        press.preventDefault();
        btnAction();
    }})
