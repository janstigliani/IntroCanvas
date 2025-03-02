let entities = [];
let entities1 = [];
let rect = {};
let canvas;
let ctx;

function setUp() {

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    for (let i = 0; i < 50; i++) {
        const rect = {};
        rect.width = 2;
        rect.height = 2;
        rect.originX = 299;
        rect.originY = 299;

        rect.speedX = (Math.random() * 4) - 2; 
        rect.speedY = (Math.random() * 4) - 2; 

        rect.red = Math.random() * 255;
        rect.green = Math.random() * 255;
        rect.blue = Math.random() * 255;
        entities.push(rect);
    }

    for (let i = 0; i < 100; i++) {
        const rect = {};
        rect.width = 2;
        rect.height = 2;
        rect.originX = 299;
        rect.originY = 299;

        rect.speedX = (Math.random() * 4) - 2; 
        rect.speedY = (Math.random() * 4) - 2; 

        rect.red = Math.random() * 255;
        rect.green = Math.random() * 255;
        rect.blue = Math.random() * 255;
        entities1.push(rect);
    }
}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        rect.originX += rect.speedX;
        rect.originY += rect.speedY;

        // rect.speedX = (Math.random() * 4) - 2; 
        // rect.speedY = (Math.random() * 4) - 2; 
        
        const rollX = Math.random();
        const rollY = Math.random();

        if (rollX > 0.5) {
            const deltaX = (Math.random()*0.4) - 0.2;
            rect.speedX -= deltaX;
        }

        if (rollY > 0.7) {
            const deltaY = (Math.random()*0.4) - 0.2;
            rect.speedY -= deltaY;
        }

        if (rect.originX < 0 || rect.originX > 600) {
            rect.speedX *= -1;
        }

        if (rect.originY < 600 || rect.originY > 0) {
            rect.speedY *= -1;
        }
    }

    for (let i = 0; i < entities1.length; i++) {
        const rect = entities1[i];
        rect.originX += rect.speedX;
        rect.originY += rect.speedY;

        // rect.speedX = (Math.random() * 4) - 2; 
        // rect.speedY = (Math.random() * 4) - 2; 
        
        const rollX = Math.random();
        const rollY = Math.random();

        if (rollX > 0.2) {
            const deltaX = (Math.random()*20) - 10;
            rect.speedX -= deltaX;
        }

        if (rollY > 0.3) {
            const deltaY = (Math.random()*20) - 10;
            rect.speedY -= deltaY;
        }

        if (rect.originX < 600 || rect.originX > 0) {
            rect.speedX *= -1;
        }

        if (rect.originY < 0 || rect.originY > 600) {
            rect.speedY *= -1;
        }
    }
}

function draw() {
    ctx.fillStyle = `rgba( ${31} ,${31},${31},${0.2})`
    ctx.fillRect(0,0,600,600)
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        ctx.fillStyle = `rgb(${rect.red}, ${rect.green}, ${rect.blue})`
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
    }

    for (let i = 0; i < entities1.length; i++) {
        const rect = entities1[i];
        ctx.fillStyle = `rgb(${rect.red}, ${rect.green}, ${rect.blue})`
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
    }
}  

function gameLoop(elapsedTime){

    update()

    draw()

    requestAnimationFrame(gameLoop);
}

function start(){
    setUp()
    requestAnimationFrame(gameLoop);
}

start()