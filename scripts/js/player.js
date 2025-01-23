/*
IMPORTANT!!!!

use pull before you code anything!!!! -fuck you
*/

$(document).ready(function () {
    // set variables
    key_down_w = false, key_down_a = false, key_down_s = false, key_down_d = false;
    head = $("#head");
    weapon = $("#weapon");
    window.player_position = { x: 0, y: 0 }; // PLAYER POSITION !!!!!!!!!!!!!!!!
    mouse_position = { x: 0, y: 0 };
    window.head_position = { x: 0, y: 0 };
    weapon_position = { x: 0, y: 0 };
    nowy = true;
    // moving player to screen's centre
    player_centre();
    loop();
    // mouse
    $(document).mousemove(function (event) {
        // get cursor pos
        mouse_position.y = event.pageX;
        mouse_position.x = event.pageY;
        // count degree from xy(0,0) to cursor pos
        degree = Math.atan2((mouse_position.y - window.head_position.x), (mouse_position.x - window.head_position.y)) * (180 / Math.PI);
        if (degree < 0) {
            degree += 360;
        }
        // rotate player
        rotate(head, -degree);
        rotate(weapon, -degree);
    });
    function player_centre() {
        // move player to middle of screen
    
        // calculate player's pos
        window.head_position.x = ($(window).width() - head.width()) / 2;
        window.head_position.y = ($(window).height() - head.height()) / 2;
        weapon_position.x = ($(window).width() - weapon.width()) / 2;
        weapon_position.y = ($(window).height() - weapon.height()) / 2;
    }
    function rotate(object, degree) {
        // rotate object to degree
        object.css("transform", "rotate(" + degree + "deg)");
    }
    // key down
    $(document).keydown(function (event) {
        // checks if keys are hold down
        if(nowy){
            nowy=false;
            const sound = new Audio("../../sounds/wlecomtozombiegowno.m4a");
            sound.play();
        }
        switch (event.key) {
            case "w":
                key_down_w = true;
                break;
            case "a":
                key_down_a = true;
                break;
            case "s":
                key_down_s = true;
                break;
            case "d":
                key_down_d = true;
                break;
        }
    });
    // key up
    $(document).keyup(function (event) {
        // checks if keys are not longer hold down
        switch (event.key) {
            case 'w':
                key_down_w = false;
                break;
            case 'a':
                key_down_a = false;
                break;
            case 's':
                key_down_s = false;
                break;
            case 'd':
                key_down_d = false;
                break;
        }
    });
    kurwa_speed = 3;
    function loop() {
        // player movement
        if (key_down_w) {
            window.head_position.y -= kurwa_speed; //x+1
            weapon_position.y -= kurwa_speed;
        };
        if (key_down_a) {
            window.head_position.x -= kurwa_speed; //y-1
            weapon_position.x -= kurwa_speed;
        };
        if (key_down_s) {
            window.head_position.y += kurwa_speed; //x-1
            weapon_position.y += kurwa_speed;
        };
        if (key_down_d) {
            window.head_position.x += kurwa_speed; //y+1
            weapon_position.x += kurwa_speed;
        };
        // wtf its not rotate????
        head.css({"left": window.head_position.x, "top": window.head_position.y});
        weapon.css({"left": weapon_position.x, "top": weapon_position.y});
        requestAnimationFrame(loop);
    };
});
