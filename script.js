//console.log(window, {document});
// setTimeout(() => {
//     document.location = 'https://google.com';
// }, 5000);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 10;
let y = 10;
setInterval(() => {
    ctx.reset();
    ctx.fillRect(x, y, 30, 30);
    
},16);

canvas.addEventListener('keydown', event => {
    console.log(event);
    if(event.code == 'KeyW'){
        y-=5;
    }
    if(event.code == 'KeyS'){
        y+=5;
    }
    if(event.code == 'KeyD'){
        x+=5;
    }
    if(event.code == 'KeyA'){
        x-=5;
    }
});