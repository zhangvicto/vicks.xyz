//changing title as enter is pressed
var input = document.getElementById("userInput");
function btnAction (){

    //change title
    document.title = "Victor Zhang";

    //reveal new page
    document.getElementById("main").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("content").style.display = "none";

    //add border to footer
    document.getElementById('foot').style.borderTop = "2px solid white";

    //add contact to footer
    document.getElementById('foot').innerHTML = "<div style="padding:10px;"> Vicks<strong>Dev</strong> 2020 <strong><a href="mailto:vzhang24@uwo.ca"
    style="text-decoration: none;color:white;">Contact</a></strong></div>";

    //disable parallax running in background
    parallax.disable();

    //create new parallax for main
    var scene2 = document.getElementById('main');
    var parallax2 = new Parallax(scene2, {relativeInput:true});

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


