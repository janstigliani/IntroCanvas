let entities = [];
let rect = [];
let canvas;
let ctx;

function setUp() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    for (let i = 0; i < 100; i++) {
        const rect = {};
        
        rect.width = 2;
        rect.height = 2;
        rect.originX = 299;
        rect.originY = 299;
    
        rect.speedX = (Math.random() * 4) - 2;
        rect.speedY = (Math.random() * 4) - 2;

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

    // ctx.fillStyle = `rgba( ${Math.random() * 55} ,${Math.random() * 55},${Math.random() * 255},${0.1})`
    // ctx.fillRect(0,0,600,600)

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
