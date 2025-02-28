let entities = [];
let canvas;
let ctx;

function setUp() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    for (let i = 0; i < 100; i++) {
        const rect = {};

        rect.width = Math.random() * 10;
        rect.height = Math.random() * 10;
        rect.originX = Math.random() * (600 - rect.width);
        rect.originY = Math.random() * (600 - rect.height);

        rect.colorR = Math.random() * 255;
        rect.colorG = Math.random() * 255;
        rect.colorB = Math.random() * 255;
        rect.colorA = Math.random();

        rect.speedX = Math.round(Math.random()*3 + 1);
        rect.speedY = Math.round(Math.random()*3 + 1);

        entities.push(rect);
    }
}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        rect.originX += rect.speedX;
        rect.originY +=  rect.speedY;

        rect.originX = rect.originX % 600;
        rect.originY = rect.originY % 600;
}
}

function draw() {

    // ctx.clearRect(0,0,600,600);

    ctx.fillStyle = `rgba( ${Math.random() * 55} ,${Math.random() * 55},${Math.random() * 255},${0.1})`
    ctx.fillRect(0,0,600,600)

    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
        ctx.fillStyle = `rgba( ${rect.colorR} ,${rect.colorG},${rect.colorB},${rect.colorA})`;
    }
}

function gameLoop(elapsedTime) {
    console.log(elapsedTime);
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function start() {
    setUp();
    requestAnimationFrame(gameLoop);
}

start();




