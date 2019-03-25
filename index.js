// Canvas and getContext

var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');


// Load Images

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

// pipe vars

var gap = 100;
var constant = pipeTop.height+gap;

// bird vars

var bX = 10;
var bY = 150;

// Gravity

var gravity = 1;

// draw images

window.onload = function draw() {
    


    ctx.drawImage(bg,0,0);

    ctx.drawImage(pipeTop, 100, 0);
    ctx.drawImage(pipeBottom, 100, 0+constant);
    ctx.drawImage(fg,0, cvs.height - fg.height);

    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    requestAnimationFrame(draw);
};

draw();