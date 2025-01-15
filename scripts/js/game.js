function player_centre(){
    // move player to middle of screen
    player.css("margin-left", player_position_left);
    player.css("margin-top", player_position_top);
}
function rotate(object, degree){
    object.css("transform", "rotate(" + degree + "deg)");
}

$(document).ready(function(){
    // set variables
    player = $("#player");
    player_position_left = ($(window).width() - $("#player").width()) / 2;
    player_position_top = ($(window).height() - $("#player").height()) / 2;
    // positioning player
    // mouse
    $(document).mousemove(function(event) {
        player_centre();
        mouse_position_top = event.pageX;
        mouse_position_left = event.pageY;
        let degree = (Math.atan2((mouse_position_top - ($(window).width() / 2)), (mouse_position_left - ($(window).height()) / 2))) * (180 / Math.PI);
        if (degree < 0) {
            degree += 360;
        }
        rotate(player, -degree + 180);
    });
  });