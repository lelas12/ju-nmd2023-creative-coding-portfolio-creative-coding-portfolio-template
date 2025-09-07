function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    
  }
  
  function draw() {
    strokeWeight(3);
    
    for (let i = 0; i < 5000; i++) {
      let x = random(width);   
      let y = random(height);  
      let r = random(10, 500); 
      let c = color(random(25), random(250), random(250), 100);
      fill(c);
      noStroke();
      circle(x, y, r);
    }
  }
  