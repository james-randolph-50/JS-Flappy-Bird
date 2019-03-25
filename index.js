// Canvas and getContext

var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

// Load Image

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeTop = new Image();
var pipeBottom = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeTop.src = "images/pipeTop.png";
pipeBottom.src = "images/pipeBottom.png";

var imageName = new Image();
imageName.src = "images/img.png";

// Load Sound
var audioName = new Audio();
audioName.src = "audio/audio.png";

// Pipes

var pipe = [];

    pipe[0] = {
        x: cvs.width,
        y: 0
    };

// Draw Bird

ctx.drawImage(imageName, x, y, width, height);

function draw() {
    ctx.drawImage(bg, 0 , 0);
    ctx.drawImage(pipeTop, pX, pY)
}