

const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(10, 10, 100, 50);

// ctx.fillStyle = "green"
// ctx.fillRect(250, 200, 100, 200);

// ctx.strokeStyle = "crimson"
// ctx.lineWidth = 4
// ctx.strokeRect(450,50,150,300)ù

// for (let i = 0; i < 100; i++) {
//     const originX= Math.random()*600;
//     const originY= Math.random()*600;
//     const width= Math.random()*200;
//     const height= Math.random()*200;

//     ctx.fillRect(originX, originY, width, height);

//     const colorR = Math.random()*255;
//     const colorG = Math.random()*255;
//     const colorB = Math.random()*255;
//     const colorA = Math.random();

//     ctx.fillStyle = `rgba( ${colorR} ,${colorG},${colorB},${colorA})`;
// }

setInterval(() => {
    ctx.fillStyle = `rgba(255,255,255,0.1)`;
    ctx.fillRect(0,0,600,600);


    const width = Math.random() * 200;
    const height = Math.random() * 200;

    const originX = Math.random() * (600 - width);
    const originY = Math.random() * (600 - height);

    const colorR = Math.random() * 255;
    const colorG = Math.random() * 255;
    const colorB = Math.random() * 255;
    const colorA = Math.random();

    ctx.fillStyle = `rgba( ${colorR} ,${colorG},${colorB},${colorA})`;
    ctx.fillRect(originX, originY, width, height);
}, 1);