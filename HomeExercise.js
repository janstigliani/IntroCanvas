//1) data una variabile che chiamata gridSize
//  disegnare una scacchiera di dimensioni gridSize * gridSize 
// 2)fate nevicare nella canvas
// 3) a) dei rettangoli di altezza uguale ad altezze diverse
// che si muovono verso destra a velocità diversa
// b) righe pari verso destra, righe dispari verso sinistra
// c)più rettangoli per riga

//esercizio 1 scacchiera

// let grid = [];
// let canvas;
// let ctx;
// let size; 

// function setUp(){
//     canvas = document.getElementById("myCanvas");
//     ctx = canvas.getContext("2d");
//     size = 7;
//     let incrementX = 0;
//      for (let row = 0; row < size; row++) {

//         let incrementY = 0;

//         for (let column = 0; column < size; column++) {
//             const rect = {};
//         rect.width = 600/size;
//         rect.height = 600/size;
//         rect.originX = incrementX;
//         rect.originY = incrementY ;
//         incrementY += 600/size;
//         grid.push(rect);

//         }
//        incrementX += 600/size;
//      }

//     console.log(grid)
// }




// function update() {
//     for (let i = 0; i < grid.length; i++) {
//         const rect = grid[i];

//     }



// }

// function draw(){
//     for (let i = 0; i < grid.length; i++) {
//         const rect = grid[i];
//         if(i % 2 === 0){
//              ctx.fillStyle = "black"

//         }else{
//             ctx.fillStyle = "white"

//         }
//         ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);

//     }


// }

// function gameLoop(elapsedTime){

//     update()

//     draw()

//     requestAnimationFrame(gameLoop)
// }

// function start(){
//     setUp()
//     requestAnimationFrame(gameLoop);
// }

// start()

//////ESERCIZIO 2 fiocchi

// let grid = [];
// let canvas;
// let ctx;
// let size;
// let image;

// function setUp() {
//     canvas = document.getElementById("myCanvas");
//     ctx = canvas.getContext("2d");

//     for (let i = 0; i < 200; i++) {
//         const snowFlake = {};

//         snowFlake.size = Math.random() * 12 + 3;
//         snowFlake.speedX = Math.random()*0.8-0.3;
//         snowFlake.speedY = Math.random() *0.5+0.5;
//         snowFlake.originX = Math.random() * canvas.width;
//         snowFlake.originY = Math.random() * canvas.height;

//         grid.push(snowFlake);
//     }

//     image = new Image();
//     image.src = 'assets/6f53cef9f34faf51382b2cb6c268d60c.png'; // Replace with the correct path to your image
// }

// function update() {

//     rollDice = Math.random()*10;
//     for (let i = 0; i < grid.length; i++) {
//         const snowFlake = grid[i];

//         if (rollDice>6) {
//             snowFlake.originX += snowFlake.speedX;
//         }

//         snowFlake.originY += snowFlake.speedY;

//         if (snowFlake.originX > canvas.width) {
//             snowFlake.originX = 0;
//         }
//         if (snowFlake.originY > canvas.height) {
//             snowFlake.originY = 0;
//         }
//     }
// }

// function draw() {
//     ctx.fillStyle = `rgba(22, 22, 67, 0.4)`;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     for (let i = 0; i < grid.length; i++) {
//         const snowFlake = grid[i];
//         ctx.imageStyle = `rgba(101, 182, 204, 0.64)`;
//         ctx.drawImage(image, snowFlake.originX, snowFlake.originY, snowFlake.size, snowFlake.size);
//     }
// }

// function gameLoop(elapsedTime) {
//     update();
//     draw();
//     requestAnimationFrame(gameLoop);
// }

// function start() {
//     setUp();
//     requestAnimationFrame(gameLoop);
// }

// start();

//////ESERCIZIO 3 righe con quadrati moventi

let grid = [];
let grid1 = [];
let canvas;
let ctx;
let size;

function setUp() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    size = 600;

    let incrementY = 0;
    let incrementX = 0;

    for (let row = 0; row < size; row++) {
        incrementX = 0;

        for (let i = 0; i < Math.round(Math.random() * 6 + 3); i++) {
            const rect = {};

            rect.width = Math.random() * 180 + 10;
            rect.height = 600 / size; 
            rect.originX = incrementX;
            rect.originY = incrementY;

            rect.red = Math.random() * 120;
            rect.green = Math.random() * 120;
            rect.blue = Math.random() * 120;

            rect.row = row;
            rect.speedX = Math.random() + 1.5;

            if (rect.row % 2 === 1) {
                rect.speedX = -rect.speedX;
            }

            grid.push(rect);

            incrementX += rect.width + (Math.random() * 20); 
        }
        incrementY += 600 / size;
    }

    for (let i = 0; i < 100; i++) {
        const glitter = {};
        glitter.size = 3;
        glitter.originX = Math.random() * 600;
        glitter.originY = Math.random() * 600;
        glitter.speedX = Math.random() * 20+60;
        glitter.speedY = Math.random() * 8 - 1;
        grid1.push(glitter);
    }
}

function update() {
    for (let i = 0; i < grid.length; i++) {
        const rect = grid[i];
        rect.originX += rect.speedX;

        if (rect.originX > 600 + rect.width) {
            rect.originX = -rect.width;
        }
        if (rect.originX < -rect.width) {
            rect.originX = 600 + rect.width;
        }
        rect.originY = rect.originY % 600;
    }

    for (let i = 0; i < grid1.length; i++) {
        const glitter = grid1[i];
        glitter.originX += glitter.speedX;

        if (glitter.originX > 600) {
            glitter.originX = 0;
        }
        if (glitter.originY > 600) {
            glitter.originY = 0;
        }
        if (glitter.originX < 0) {
            glitter.originX = 600;
        }
        if (glitter.originY < 0) {
            glitter.originY = 600;
        }
    }
}

function draw() {
    ctx.fillStyle = `rgba(21, 123, 118, 0.20)`;
    ctx.fillRect(0, 0, 600, 600);

    for (let i = 0; i < grid.length; i++) {
        const rect = grid[i];
        ctx.fillStyle = `rgba(16, 72, 106, 0.7)`;
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
    }

    for (let i = 0; i < grid1.length; i++) {
        const glitter = grid1[i];
        ctx.fillStyle = `rgba(140, 171, 190, ${Math.random()})`;
        ctx.fillRect(glitter.originX, glitter.originY, glitter.size, glitter.size);
    }
}

function gameLoop(elapsedTime) {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function start() {
    setUp();
    requestAnimationFrame(gameLoop);
}

start();