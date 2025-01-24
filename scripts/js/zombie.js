$(document).ready(function () {
    let zombies = []; // Array to hold zombie objects
    let points = 0; // Initialize points

    // Define zombie speed
    const zombie_speed = 2;

    // Create a points display at the top-left corner
    const pointsDisplay = $('<div id="points">Piupiu zajebanych: 0</div>');
    $("body").append(pointsDisplay);
    pointsDisplay.css({
        position: "absolute",
        draggable: "false",
        top: "0",
        left: "0",
        margin: "0", // No margin
        padding: "5vmin",
        fontSize: "20px",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Background for visibility
        borderRadius: "5px"
    });

    // Function to update points display
    function updatePoints() {
        pointsDisplay.text("Piupiu: " + points);
    }

    function spawnZombie() {
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
    
        // Randomly choose an edge
        const edge = Math.floor(Math.random() * 4);
    
        let x, y;
    
        // Position the zombie at one of the four edges
        switch (edge) {
            case 0: // Top edge
                x = Math.random() * windowWidth;
                y = 0;
                break;
            case 1: // Right edge
                x = windowWidth;
                y = Math.random() * windowHeight;
                break;
            case 2: // Bottom edge
                x = Math.random() * windowWidth;
                y = windowHeight;
                break;
            case 3: // Left edge
                x = 0;
                y = Math.random() * windowHeight;
                break;
        }
    
        const zombie = $('<div class="zombie"></div>');
        $("body").append(zombie);
        zombie.css({
            position: "absolute",
            width: "50px", // Adjust size
            height: "50px",
            background: "url('../../assets/heads/index-zombie.svg') no-repeat center center", // Set zombie image
            backgroundSize: "contain", // Ensure the image fits properly
            left: x,
            top: y
        });
        
        // Add click event for zombie
        zombie.on("click", function () {
            // Play sound
            const sound = new Audio("../../sounds/piupiu.m4a");
            sound.play();
        
            // Remove zombie from the DOM
            zombie.remove();
        
            // Optionally, also remove it from the zombies array if you're tracking them
            zombies = zombies.filter(z => z.element[0] !== zombie[0]);
        
            // Increment points
            points++;
            updatePoints(); // Update the points display
        });
    
        zombies.push({
            element: zombie,
            position: { x: x, y: y }
        });
    }

    function spawnPlayer(x, y) {
        const player = $('<div class="player"></div>');
        $("body").append(player);
        player.css({
            position: "absolute",
            width: "50px",
            height: "50px",
            background: "red", // Set player color or image
            borderRadius: "50%",
            left: x,
            top: y
        });
    }

    // Spawn zombies every 0.5 seconds
    setInterval(spawnZombie, 500);

    function moveZombies() {
        zombies.forEach((zombie, index) => {
            // Calculate direction vector from zombie to player
            const dx = window.head_position.x - zombie.position.x;
            const dy = window.head_position.y - zombie.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Normalize direction vector and move zombie
            if (distance > 1) { // Avoid jitter when very close
                const moveX = (dx / distance) * zombie_speed;
                const moveY = (dy / distance) * zombie_speed;
                zombie.position.x += moveX;
                zombie.position.y += moveY;

                // Update zombie position on screen
                zombie.element.css({
                    left: zombie.position.x,
                    top: zombie.position.y
                });
            }

            // Check collision with player
            if (
                Math.abs(zombie.position.x - window.head_position.x) < 50 &&
                Math.abs(zombie.position.y - window.head_position.y) < 50
            ) {
                // Multiply player forever at random positions
                const sound = new Audio("../../sounds/alatykurwofasztt.m4a");
                sound.play();
                setInterval(() => {
                    const x = Math.random() * $(window).width();
                    const y = Math.random() * $(window).height();
                    spawnPlayer(x, y);
                }, 10);
            }
        });

        requestAnimationFrame(moveZombies);
    }

    // Start the zombie movement loop
    moveZombies();
});
