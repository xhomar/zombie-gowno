$(document).ready(function(){
    // set variables
    player = $("#player");
    player_position_left = ($(window).width() - $("#player").width()) / 2;
    player_position_top = ($(window).height() - $("#player").height()) / 2;
    // positioning player
    function player_centre(){
        player.css("margin-left", player_position_left);
        player.css("margin-top", player_position_top);
    }
    player_centre();
  });