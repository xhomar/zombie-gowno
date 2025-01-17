$(document).ready(function () {
  const settings = $("#settings");
  const start = $("#start");
  const buttons = $(".buttons");
  const horizontal = $(".horizontal");
  const popSound = document.getElementById("popSound");

  popSound.volume = "0.1";
  settings.on("click", function () {
    // not gonna do this crap
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