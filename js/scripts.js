//changing title as enter is pressed
var input = document.getElementById("userInput");

input.addEventListener("keydown",function(press){
    if (press.keyCode === 13) {
        press.preventDefault();
        document.title = "Victor Zhang";
        document.getElementById()
    }})