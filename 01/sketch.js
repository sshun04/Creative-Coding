
let shapesArray = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    noStroke()
}

function draw() {
    const time = frameCount / 60;
    for (let shape of shapesArray) {
        shape.update(frameCount);
        shape.display()
    }
}

class Shape {
    constructor() {
        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);

        this.posX = random(0, width);
        this.posY = random(0, height);

        this.initialangle = random(0, 2 * PI);
        this.size = random(10, 50)

        this.radius = sqrt(random(pow(width / 2, 2)));
    }

    update(time) {
        let w = 1.2; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);

        this.posY += pow(this.size, 0.5);

        if (this.posY > height) {
            let index = dotsArray.indexOf(this);
            shapesArray.splice(index, 1);
        }
    }

    display() {
        fill(this.r, this.g, this.b,)
        ellipse(this.posX, this.posY, this.size);
    }
}

function keyPressed() {
    let keyIndex = -1;
    if (key >= 'a' && key <= 'z') {
        keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    if (keyIndex === -1) {
        // If it's not a letter key, clear the screen
        background(230);
    } else {
        shapesArray.push(new Shape())
    }
}