let block;
let quilt = [];

function preload() {
  block = loadJSON('staderna.json', gotData, 'json');
}

function setup() {
  createCanvas(500, 750);
  background(220);
  setInterval(makeQuilt, 1000);

}

function gotData(stad) {
  
}

function makeQuilt() {
  let rando = random(0, 1900)
  for (let i = 0; i < rando; i++) {
    for (let c = 0; c <= width; c += 125) {
      // rows
      for (let r = 0; r <= height; r += 125) {
        stroke(150, 220, 210);
        strokeWeight(1);
        fill(140, 190, 190);
        rect(c, r, 125, 125);
        let x = floor(block[i].Longitude) + random(0, 25);
        let y = floor(block[i].Latitude) + random(0, 25);
        let z = PI / (x + y) + random(0, height);
        noStroke();
        fill(x, y, z);
        ellipseMode(CENTER);
        ellipse(c + 60, r + 60, x * 1.5, x * 1.5);
      }
    }
  }
}