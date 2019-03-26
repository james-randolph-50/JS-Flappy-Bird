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

// Pressing Keys

document.addEventListener("keydown", moveUp)

function moveUp() {
    bY -= 30;
}

// pipe coordinates

var pipe = [];

    pipe[0] = {
        x : cvs.width,
        y : 0
    }
// draw images

window.onload = function draw() {

    ctx.drawImage(bg,0,0);

    for(var i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y+constant);

        pipe[i].x--;

        if(pipe[i].x == 125){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeTop.height)-pipeTop.height
            });
        }
    }

    // Detect Collision

    if(bX + bird.width ? pipe[i].x && bX <= pipe[i].x + pipeTop.width && (bY <= pipe[i].y + pipeTop.height || bY+bird.height >= pipe[i].y+constant)){
        alert("You Crashed!");
        location.reload();
    }

    ctx.drawImage(fg,0, cvs.height - fg.height);

    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    requestAnimationFrame(draw);
};

draw();