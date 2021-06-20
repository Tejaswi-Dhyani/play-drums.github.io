var numberofdrumbutton=document.querySelectorAll(".drum").length;
for (var i=0; i<numberofdrumbutton; i++){
    // document.querySelectorAll(".drum")[i].addEventListener("click",buttclick);
    // function buttclick(){
    //     alert("I got clicked");
    // } 
// **********************************or***********************************
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
            
     });
}
// ******************************button press******************************

// document.addEventListener("keypress", function () {alert("key pressed!"); });
document.addEventListener("keypress", function(event) {

    makesound(event.key);
  
    buttonanimation(event.key);
  
  });
  function makesound(key) {
    switch (key) {
        case "W":
        case "w":    
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "A":
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "S":
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;        
        case "D":
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  
            case "J":
            case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
            case "K":
            case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
            case "L":
            case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;    
        default:console.log(buttoninnerhtml);
    }    
  }
//  ****************************keyboard press****************** 

function buttonanimation(currentkey) {
var activebutton = document.querySelector("." + currentkey);
activebutton.classList.add("pressed");

setTimeout(function() {
  activebutton.classList.remove("pressed");  
},200);
}
//*******200 means 2 second********


