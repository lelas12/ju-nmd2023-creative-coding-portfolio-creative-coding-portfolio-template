
let x;
let y; 
const size = 600;
const step = 10;
const half = size / 2;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(241, 236, 228);
  strokeWeight(3);
  stroke(180, 154, 199);

  x = width / 2 - half;
  y = height / 2 - half;
}

function draw() {
  noFill();
  rect(x, y, size, size);

      //help from AI with the matematic thinking, change by me

  line(x + half, y, x + half, y + size); 
  line(x, y + half, x + size, y + half); 

  for(let i = step; i < half; i += step) {
    line(x, y + i, x + i, y + half);
    line(x + i, y, x + half, y + i);
  }

  for(let i = step; i < half; i += step) {
    line(x, y + half + i, x + half, y + half + i);
  }

  for (let i = 0; i < half; i += step) {
    line(x + half + i, y, x + half + i, y + half);
  }

  for (let i = 0; i < half; i += step) {
    line(x + half, y + half + i, x + half + i, y + size);
    line(x + half + i, y + half, x + size, y + half + i);
  }

  noLoop(); 
}




