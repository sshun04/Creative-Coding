
let num = 100; //円の数 
let vecLocation = []; //円の中心の位置ベクトル 
let vecVelocity = []; //円の速度ベクトル 
let colorList = [] //円の色の配列
let sizeList = []
function setup() {
    createCanvas(windowWidth, windowHeight); //画面を生成 frameRate(60); //フレームレート
    colorMode(HSB, 360, 100, 100); 
    for (let i = 0; i < num; i++) {
        vecLocation[i] = createVector(width / 2, height / 2);
        vecVelocity[i] = createVector(random(-10, 10), random(-10, 10));
        colorList[i] = [random(0, 360), random(80,100), random(80,100)]
    }
}

function draw() {
    background(0); //背景を描画 
    noStroke(); //枠線なし 
    //円の数だけくりかえす 
    for (let i = 0; i < num; i++) {
        vecLocation[i].add(vecVelocity[i]); //円の座標を更新 
        fill(colorList[i]); // 円の色を設定
        ellipse(vecLocation[i].x, vecLocation[i].y, 20, 20); //指定した位置に円を描画 
        if (vecLocation[i].x < 0 || vecLocation[i].x > width) { //もし画面の左端、または右端に到達したら 
            vecVelocity[i].x = vecVelocity[i].x * -1; //X方向のスピードを反転 
        }
        if (vecLocation[i].y < 0 || vecLocation[i].y > height) { //もし画面の下端、または上端に到達したら 
            vecVelocity[i].y = vecVelocity[i].y * -1; //Y方向のスピードを反転 
        }
    }
}
