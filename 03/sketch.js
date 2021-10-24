
const sphereR = 180;

function setup() {
    createCanvas(600, 600, WEBGL);
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    background(255)
    fill(random(0, 360), 100, 100)
    rotateY(millis() / 90)
    translate(0, 0, 80)
    sphere(sphereR, 20, 20);
}