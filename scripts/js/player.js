function player_centre(){
    // move player to middle of screen

    // calculate player's pos
    head_position_left = ($(window).width() - head.width()) / 2;
    head_position_top = ($(window).height() - head.height()) / 2;
    weapon_position_left = ($(window).width() - weapon.width()) / 2;
    weapon_position_top = ($(window).height() - weapon.height()) / 2;
    // rotate
    head.css("left", head_position_left);
    head.css("top", head_position_top);
    weapon.css("left", weapon_position_left);
    weapon.css("top", weapon_position_top);
}
function rotate(object, degree){
    // rotate object to degree
    object.css("transform", "rotate(" + degree + "deg)");
}
function move(position, amount){
    position += amount;
    console.log(player_position.x, player_position.y)
}

$(document).ready(function(){
    // set variables
    head = $("#head");
    weapon = $("#weapon");
    player_position = {x:0, y:0}; // PLAYER POSITION !!!!!!!!!!!!!!!!
    key = "";
    // positioning player
    player_centre();
    // mouse
    $(document).mousemove(function(event) {
        player_centre();
        // get cursor pos
        mouse_position_top = event.pageX;
        mouse_position_left = event.pageY;
        // count degree from xy(0,0) to cursor pos
        degree = (Math.atan2((mouse_position_top - ($(window).width() / 2)), (mouse_position_left - ($(window).height()) / 2))) * (180 / Math.PI);
        if (degree < 0) {
            degree += 360;
        }
        // rotate player
        rotate(head, -degree);
        rotate(weapon, -degree);
    });
    $(document).keydown(function (key) { 
        if (key = "W"){
            move(player_position.x, 1);
        }
        if (key = "S"){
            move(player_position.x, -1);
        }
        if (key = "A"){
            move(player_position.y, -1);
        }
        if (key = "D"){
            move(player_position.y, 1);
        }
    });
  });