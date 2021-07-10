let prev = document.getElementById('previous');
let next = document.getElementById('nextup');
var slideItems = document.getElementById('slides').getElementsByClassName('slide');

function shiftLeft() {
    for (i = 0; i < slideItems.length; i++) {
        let index = slideItems[i].style.left;
        console.log(index);
        console.log(index.substr(0,3));
        let result = parseFloat(index.substr(0,3))
        console.log(result);
        index = result + 100 + "%";
        console.log(index);
    }
}

function shiftRight() {
    for (let i = 0, len = slideItems.length; i < len; i++) {
        let index = slideItems[i].style.left;
        index = index - 100 + "%";
    }
}

next.addEventListener("click", function(){shiftRight();});
prev.addEventListener("click", function(){shiftLeft();});

//append new element to list
