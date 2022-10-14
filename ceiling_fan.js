status=" ";
img = " ";
objects = [];

function preload(){
    img = loadImage('ceiling_fan.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
