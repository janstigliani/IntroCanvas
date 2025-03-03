let grid = [];
let grid1 = [];
let canvas;
let ctx;
let image;
let incrementX = 0;
let incrementY = 0;

function setUp() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    for (let i = 0; i < 200; i++) {
        const flower = {};

        flower.size = 24;
        flower.speedX = 8;
        flower.speedY = 8;
        flower.originX = 30 + incrementX;
        flower.originY = 30 + incrementY;

        grid.push(flower);

        incrementX += 30;
        incrementY += 30;
    }

    for (let i = 0; i < 200; i++) {
        const flower = {};

        flower.size = 24;
        flower.speedX = 8;
        flower.speedY = 8;
        flower.originX = 40 + incrementX;
        flower.originY = 40 + incrementY;

        grid1.push(flower);

        incrementX += 40;
        incrementY += 40;
    }

    image = new Image();
    image.src = 'assets/tinywow_change_bg_photo_76188933.png';
    image.onload = () => {
        requestAnimationFrame(gameLoop);
    };
}

function update() {
    const rollDice = Math.random() * 10;
    for (let i = 0; i < grid.length; i++) {
        const flower = grid[i];

        if (rollDice > 6) {
            flower.originY += flower.speedY;
        }

        flower.originX += flower.speedX;

        if (flower.originX > canvas.width) {
            flower.originX = 0;
        }
        if (flower.originY > canvas.height) {
            flower.originY = 0;
        }
    }

    for (let i = 0; i < grid1.length; i++) {
        const flower = grid[i];

        if (rollDice > 6) {
            flower.originY += flower.speedY;
        }

        flower.originX += flower.speedX;

        if (flower.originX > canvas.width) {
            flower.originX = 0;
        }
        if (flower.originY > canvas.height) {
            flower.originY = 0;
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

    for (let i = 0; i < grid1.length; i++) {
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