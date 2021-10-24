const sphereR = 40;
var particlesArray = []

function setup() {
    createCanvas(800, 800, WEBGL);
    colorMode(HSB, 360, 100, 100);
    noStroke()
    for (var i = 0; i < 70; i++) {
        particlesArray.push(new Particle(i))
    }
    background(0, 20, 20)
}

function draw() {
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(50);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, locX, locY, 250)

    for (let particle of particlesArray) {
        particle.update()
    }
}

class Particle {
    constructor(index) {
        this.x = random(-300, 300)
        this.y = random(-300, 300)
        this.z = random(-300, 300)
        this.index = index
        this.detail = min(max(5, index, 24))
        this.hue = random(160, 200)
    }

    update() {
        push()
        fill(this.hue, 100, 100)
        translate(this.x, this.y, this.z)
        sphere(sphereR, this.detail, this.detail);
        pop()
    }
}
