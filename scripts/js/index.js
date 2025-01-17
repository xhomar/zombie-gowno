
let popSound;

$(document).ready(function () {
  const nameForm = $("#nameForm");
   const settings = $("#settings");
   const start = $("#start");
   const allButtons = $("#allButtons")
   const buttons = $(".buttons");
   const horizontal = $(".horizontal");
   const colorSection = $("#colorSection");
   const backSection = $("#backSection");

   popSound = document.getElementById("popSound");
  
  popSound.volume = "0.1";
  settings.on("click", function () {
    nameForm.fadeOut(300);
    settings.fadeOut(300);
    start.fadeOut(300);
    colorSection.fadeIn(300);
    backSection.fadeIn(300);
  });

  start.on("click", function () {
    console.log("test");
    window.location.href = "../html/game.html"; // goes to game.html
  });

  buttons.on("mouseover", function () {
    popSound.currentTime = 0; // Restarts the sound
    popSound.play(); // Plays the sound
  });
});