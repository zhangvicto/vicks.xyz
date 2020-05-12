//changing title as enter is pressed
var input = document.getElementById("userInput");
function btnAction (){
    //change title
    document.title = "Victor Zhang";

    //reveal new page
    document.getElementById("main").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("front").style.display = "none";
}

//key pressed action
input.addEventListener("keydown",function(press){
    if (press.keyCode === 13) {
        press.preventDefault();
        btnAction();
    }})


//hover on box to show animation and text change
var box1 = document.getElementById("card1");
box1.addEventListener("mouseover",function(){
    document.getElementById("person").style.backgroundImage = "url(/img/person/1.png)";
    document.getElementById("text").innerHTML = "Made these back in '15. Low poly art based on real images.";
}); 

box1.addEventListener("mouseout",function(){
    document.getElementById("person").style.backgroundImage = "url(/img/person5.gif)";
    document.getElementById("text").innerHTML = "Keep going!";
}); 
//box1 show gallery
box1.addEventListener("click",function(){
    document.getElementById("gallery").style.display = "block";
})
var exitGallery = document.getElementById("close");
exitGallery = addEventListener("click", function(){
    document.getElementById("gallery").style.display = "none";
})

var box2 = document.getElementById("card2");
box2.addEventListener("mouseover",function(){
    document.getElementById("person").style.backgroundImage = "url(/img/person/1.png)";
    document.getElementById("text").innerHTML = "MasterMenu - a new solution to your food needs! (inProgress - Click to see)";
}); 

box2.addEventListener("mouseout",function(){
    document.getElementById("person").style.backgroundImage = "url(/img/person5.gif)";
    document.getElementById("text").innerHTML = "Next!";
}); 


//slidimation
//warpper = wrapper, slide = card, slides = box
var slider = document.getElementById("slider"),
    sliderItems = document.getElementById("slider"),
    prev = document.getElementById("slider"),
    prev = document.getElementById("slider");

slide(slider,sliderItems,prev,next);

function slide(wrapper, items, prev, next) {
    var posX1 = 0;
        posX2 = 0;
        posInitial,
        posFinal,
        threshhold = 100,
        slides = items.getElementsByClassName('card'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('card')[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLAst = lastSlide.cloneNode(true),
        index = 0;
        allowShift = true;

        items.appendChild(cloneFirst);
        items.insertBefore(cloneLast, firstSlide);
}


function timing() {
    setInterval(5000);

}