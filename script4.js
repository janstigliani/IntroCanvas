let grid = [];
let canvas;
let ctx;
let image;

function setUp() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radii = [100, 200, 300]; // Different radii for concentric circles
    const baseSpeeds = [0.5, 1, 1.5]; // Base speeds for each circle

    for (let j = 0; j < radii.length; j++) {
        const radius = radii[j];
        const baseSpeed = baseSpeeds[j];

        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * 2 * Math.PI;
            const flower = {};

            flower.size = 48;
            flower.speed = baseSpeed + (Math.random() * 1.5 - 0.25); // Slightly different speed
            flower.originX = centerX + radius * Math.cos(angle);
            flower.originY = centerY + radius * Math.sin(angle);
            flower.initialX = flower.originX; // Store initial position
            flower.initialY = flower.originY; // Store initial position
            flower.angle = angle;

            grid.push(flower);
        }
    }

    image = new Image();
    image.src = 'assets/tinywow_change_bg_photo_76188933.png';
    image.onload = () => {
        requestAnimationFrame(gameLoop);
    };
}

function update() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < grid.length; i++) {
        const flower = grid[i];
        const dx = centerX - flower.originX;
        const dy = centerY - flower.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const moveX = (dx / distance) * flower.speed;
        const moveY = (dy / distance) * flower.speed;

        flower.originX += moveX;
        flower.originY += moveY;

        // Reset position if flower reaches the center
        if (distance < flower.speed) {
            flower.speed += 0.1; // Increment speed
            // Respawn from the border of the canvas
            const side = Math.floor(Math.random() * 4);
            switch (side) {
                case 0: // Top
                    flower.originX = Math.random() * canvas.width;
                    flower.originY = 0;
                    break;
                case 1: // Right
                    flower.originX = canvas.width;
                    flower.originY = Math.random() * canvas.height;
                    break;
                case 2: // Bottom
                    flower.originX = Math.random() * canvas.width;
                    flower.originY = canvas.height;
                    break;
                case 3: // Left
                    flower.originX = 0;
                    flower.originY = Math.random() * canvas.height;
                    break;
            }
            flower.initialX = flower.originX;
            flower.initialY = flower.originY;
        }
    }
}

function draw() {
    ctx.fillStyle = `rgba(22, 22, 67, 0.4)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < grid.length; i++) {
        const flower = grid[i];
        ctx.drawImage(image, flower.originX, flower.originY, flower.size, flower.size);
    }
}

function gameLoop(elapsedTime) {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function start() {
    setUp();
}

start();