//changing title as enter is pressed
let clickEnter = false;
let input = document.getElementById("i");
input.addEventListener("keyup",function(press){
    if (press.keyCode === 13) {
        clickEnter = true;
    }})

let t = document.title;
console.log(t);
if (clickEnter = true) {
    t = "Victor Zhang";
}