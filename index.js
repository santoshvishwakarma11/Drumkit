
//Detecting Button Press
for(var i = 0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML)
      });   
  }
    /*  
        Using Loops to select all the button.   
        this.style.color ="white";  ---'this' is basically the identity of the button that triggered the events listener.

        document.querySelectorAll("button").addEventListener("click",handleClick);    ----Selected Only one button
        The above LOC does is it finds the first button in our document and 
        that adds a Events Listener to that button so that it listens for clicks that happen on that button.

        document.querySelector("button").addEventListener("click",function(){
        alert("I got clicked"); 
        });  
        This is another way of adding events listener using anonymous.
        Says What to do when click detected

     */


  
//Detecting Keyboard Press 
document.addEventListener("keydown",function(event){
  makeSound(event.key);
 });


 function makeSound (key){
  
  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();  
        break;

    case "a":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();  
          break;
    case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();  
          break;    
    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();  
        break; 

     case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();  
         break;
         
     case "k":
       var crash = new Audio('sounds/crash.mp3');
       crash.play();  
         break;    
     case "l":
       var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();  
       break;
         default: console.log(buttonInnerHTML);
        break;
   }

 }




 


 