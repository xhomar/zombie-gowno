
let popSound;

$(document).ready(function () {
  const startSection = $("#startSection");
  const settingsSection = $("#settingsSection")
  const nameForm = $("#nameForm");
  const back = $("#back");
   const settings = $("#settings");
   const start = $("#start");
   const allButtons = $("#allButtons")
   const buttons = $(".buttons");
   const horizontal = $(".horizontal");
   const colorSection = $("#colorSection");
   const backSection = $("#backSection");
   popSound = document.getElementById("popSound");

   colorSection.fadeOut(5); 
   backSection.fadeOut(5); // i'm too lazy to actually do this right so it just fades out at the start

  popSound.volume = "0.1"; // changes the volume of popSound cause it's loud as fuck

  // clicking settings button -> fades out some buttons and fades in the others
  settings.on("click", function () {
    nameForm.fadeOut(300);
    settingsSection.fadeOut(300);
    startSection.fadeOut(300);
    colorSection.fadeIn(300);
    backSection.fadeIn(300);
    
  });

    // clicking back button -> fades out some buttons and fades in the others
  back.on("click", function () {
    colorSection.fadeOut(300);
    backSection.fadeOut(300);
    startSection.fadeIn(300);
    nameForm.fadeIn(300);
    settingsSection.fadeIn(300);
    
  });

  // clicking start button -> sends to game.html
  start.on("click", function () {
    window.location.href = "../html/game.html"; // goes to game.html
  });

  buttons.on("mouseover", function () {
    popSound.currentTime = 0; // Restarts the sound
    popSound.play(); // Plays the sound
  });
});