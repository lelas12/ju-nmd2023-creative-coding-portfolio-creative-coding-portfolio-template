
let x;
let y; 
const size = 600;
const step = 6;
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

  line(x + half, y, x + half, y + size); 
  line(x, y + half, x + size, y + half); 
//1
  for(let i = step; i < half; i += step) {
    line(x, y + i, x + i, y + half);
    line(x + i, y, x + half, y + i);
  }
//2
  for(let i = step; i < half; i += step) {
    //line(x, y + half + i, x + half, y + half);
   // line(x + half , y + i, x + half + i, y + half );
    // AI help
    line(x + half, y + half - i, x + half + i, y);         
    line(x + half + i, y + half, x + size, y + half - i);  
    


 //   line(x + half - i, y + half, x + half, y + half + i);

   // line(x + half + i, y, x + half + i, y + i);
  }

  //3
  for (let i = 0; i < half; i += step) {
    //AI help
    line(x + half, y + half + i, x + half - i, y + size);  
    line(x + half - i, y + half, x, y + half + i);         
    
    //line(x + i, y  + half, x, y + half + i);

   // line(x + half + i, y, x + half, y + half); 
  }
// 4
  for (let i = 0; i < half; i += step) {
    line(x + half, y + half + i, x + half + i, y + size);
    line(x + half + i, y + half, x + size, y + half + i);
  }

  noLoop(); 
}




