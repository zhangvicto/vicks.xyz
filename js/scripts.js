//changing title as enter is pressed
let input = document.getElementById("userInput");
function btnAction (){

    //change title
    document.title = "Victor Zhang";

    //fading animation setup
    document.getElementById('loading').style.opacity = 1;
    document.getElementById('loading').style.transition = "opacity 2s";

    //show loading page 
    document.getElementById('loading').style.display ="block";
    setTimeout(function() {document.getElementById('loading').style.opacity = 1;}, 1000);

    //start progress bar and change the text 
    setTimeout(move(),1000);

    //hide the load page
    hideLoad();

    //reveal new page
    document.getElementById("main").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("content").style.display = "none";

    //add border to footer
    document.getElementById('foot').style.borderTop = "2px solid white";

    //add contact to footer
    document.getElementById('foot').innerHTML = "Vicks<strong>DEV </strong> 2020 &nbsp;&nbsp<strong><a href='/' style='text-decoration: none;color:white;'>Home</a></strong>";

    //disable parallax running in background
    parallax.disable();

}

 //countdown to fade out loading page while page 2 loads
 function hideLoad() {
     setTimeout(function() {document.getElementById('loading').style.opacity = 0;}, 2000);
     setTimeout(function() {document.getElementById('loading').style.display ="none";}, 4000);
    }

//simple loading bar animation
let width = 0;
let ii = 0;
function move() {
  if (ii == 0) {
    ii = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        ii = 0;
      } else {
        
        width++;
        elem.style.width = width + "%";
        document.getElementById('bartext').innerHTML = width + "%";
      }
    }
  }
}


//key pressed action
input.addEventListener("keydown",function(press){
    if (press.keyCode === 13) {
        press.preventDefault();

        //trigger same effects as hover
        document.getElementById("btn1").style.transform = "scale(0.8)";
        document.getElementById("btn1").style.boxShadow = "none";
        document.getElementById("btn1").style.transitionDuration = "400ms";

        //time delay for hover effect to show
        setTimeout(function(){btnAction()}, 400);
    }});


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


