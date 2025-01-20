
let popSound;
let currentPickedColor;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} // waiting function



$(document).ready(function () {
  const alphabet ="abcdefghijklmnopqrstuvwxyz";
  const startSection = $("#startSection");
  const settingsSection = $("#settingsSection");
  const nameForm = $("#nameForm");
  const back = $("#back");
   const settings = $("#settings");
   const start = $("#start");
   const allButtons = $("#allButtons");
   const buttons = $(".buttons");
   const horizontal = $(".horizontal");
   const colorSection = $("#colorSection");
   const backSection = $("#backSection");
   const soundSection = $("#soundSection");
   const soundLeveljq = $("#soundLevel");
   const volumeIcon = $("#volumeIcon");
   const background = $("#background");
   const colors = $(".colorsChild");
   const soundLevel = document.getElementById("soundLevel");
   popSound = document.getElementById("popSound");

   let isHeld = false;
   let prevColor = "eColor";
   currentPickedColor = $("#" + prevColor).css("background-color");
   let prevSoundLvl;

   soundLevel.value = 20;
   popSound.volume = soundLevel.value/100; // changes the volume of pop sound cause it's loud as fuck


   colorSection.fadeOut(0); 
   soundLeveljq.fadeOut(0);
   volumeIcon.fadeOut(0)
   backSection.fadeOut(0); // i'm too lazy to actually do this right so it just fades out at the start

  

  // clicking settings button -> fades out some buttons and fades in the others
  settings.on("click", function () {
    nameForm.fadeOut(300);
    settingsSection.fadeOut(300);
    startSection.fadeOut(300);
    backSection.fadeOut(300);
    volumeIcon.fadeIn(300);
    colorSection.fadeIn(300);
    backSection.fadeIn(300);
    
  });

    // clicking back button -> fades out some buttons and fades in the others
  back.on("click", function () {
    colorSection.fadeOut(300);
    backSection.fadeOut(300);
    volumeIcon.fadeOut(200)
    startSection.fadeIn(300);
    nameForm.fadeIn(300);
    settingsSection.fadeIn(300);
    
  });

  // clicking button -> plays pop sound (omg good coding)
  buttons.on("click", function(){
    if($(this).attr("id") != "colors"){

      popSound.currentTime = 0; // Restarts the sound
      popSound.play(); // Plays the sound
    }
    

});

colors.on("click", function(){


    popSound.currentTime = 0; // Restarts the sound
    popSound.play(); // Plays the sound
  
  

});

  // clicking start button -> sends to game.html
  start.on("click", function () {
    window.location.href = "../html/game.html"; // goes to game.html
  });

  // clicking volume icon -> depending on what the volume is it changes the volume to 0 or to the previous volume
  volumeIcon.on("click", function(){
    if(soundLevel.value!=0){
      prevSoundLvl = soundLevel.value;
      soundLevel.value = 0;
      popSound.volume = soundLevel.value/100; // changes the volume of pop sound cause it's loud as fuck
    }else{
      soundLevel.value = prevSoundLvl;
      popSound.volume = soundLevel.value/100;
    }
    
    
  });

  soundLeveljq.on("change", function(){
    popSound.volume = soundLevel.value/100;

  })

  colors.on("click", function(){

    let currentColor = $(this).attr("id");
    if(currentColor!=prevColor){
      $("#" + currentColor).css("border", "4px solid rgb(97, 255, 29)");
      $("#"+prevColor).css("border", "");
      prevColor = currentColor;
      currentPickedColor = $("#" + prevColor).css("background-color");
      console.log(currentPickedColor);
    }else{


    }
    
  });

// I FIXED THIS TRASH DSADEWRTHY^%WREFD

//the code below basically checks when something is mouse overed (volume Icon) and then shows the volume meter to change volume

  volumeIcon.on("mouseover", function(){
  
    soundLeveljq.fadeIn(500);
  back.animate({marginLeft: "13vmin"}, 300);
  if(!isHeld){
    isHeld=true;
    
      }


  });

  soundLeveljq.on("mouseover", function(){
    soundLeveljq.fadeIn(500);
  back.animate({marginLeft: "13vmin"}, 300);
  if(!isHeld){
isHeld=true;

  }

  });

   volumeIcon.on("mouseout", async function(){
    isHeld=false;
    await sleep(200); // goes afk for 200ms
    if(!isHeld){
      soundLeveljq.fadeOut(200);
      back.animate({marginLeft: "0vmin"}, 300);

    }
    

  });

  soundLeveljq.on("mouseout", async function(){
    isHeld=false;
    await sleep(200); // goes afk for 200ms
    if(!isHeld){ //if the button is still not held the bar thingy disappears
      soundLeveljq.fadeOut(200);
      back.animate({marginLeft: "0vmin"}, 300);

    }

  });

  


  

});



