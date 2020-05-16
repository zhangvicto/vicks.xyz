

function shiftLeft() {
    console.log("wowowowowow");
}

function shiftRight() {
    let x = 0;
    x++;
    console.log(x);
}

let sliderItems = document.getElementById('slides');
let prev = document.getElementById('previous');
let next = document.getElementById('nextup');

next.addEventListener("click", shiftRight());
prev.addEventListener("click", shiftLeft());