// Canvas and getContext

var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

// Load Image
var imageName = new Image();
imageName.src = "images/img.png";

// Load Sound
var audioName = new Audio();
audioName.src = "audio/audio.png";

// Draw Bird

ctx.drawImage(imageName, x, y, width, height);