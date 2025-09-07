
let x;
let y; 
const size = 600;
const step = 4;
const half = size / 2;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(241, 236, 228);
  strokeWeight(2);
  stroke(180, 154, 199);

  x = width / 2 - half;
  y = height / 2 - half;
}

function draw() {
  noFill();
  rect(x, y, size, size);

  line(x, y + half, x + size, y + half); 
//1
  for(let i = step; i < half; i += step) {
     //line(x, y + half+ i, x + half, y + half); 
     line(x, y + i, x + half, y + half); 


  }
//2
  for(let i = step; i < half; i += step) {
       line(x + size, y + i, x + half, y + half);

  }

  //3
  for (let i = 0; i < half; i += step) {
     line(x, y + half + i, x + half, y + half);    


  
  }
// 4
  for (let i = 0; i < half; i += step) {
    line(x + size , y-i + size, x + half, y + half);


  }

  noLoop(); 
}




