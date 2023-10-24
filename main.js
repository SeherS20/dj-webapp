song = "";
function preload(){
    song = loadSound("")
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function PlaySound(){
 song.play();
}
function StopSound(){
    song.stop();
}
function draw(){
 image(video, 0,-20, 600,450 )
}