$(document).ready(function () {
  const settings = $("#settings");
  const start = $("#start");
  const allButtons = $("#allButtons")
  const buttons = $(".buttons");
  const horizontal = $(".horizontal");

  const popSound = document.getElementById("popSound");

  popSound.volume = "0.1";
  settings.on("click", function () {
    console.log("test");
    allButtons.fadeOut(300);
    
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