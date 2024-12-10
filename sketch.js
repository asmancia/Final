let squares = []; 

function setup() {
  createCanvas(600, 400);

  
  for (let i = 0; i < 200; i++) {
    squares.push(new Square(random(width), random(height), random(30, 50)));
  }
}

function draw() {
  background(215,252,228);
  
 
  for (let i = 0; i < squares.length; i++) {
    squares[i].display(); // Call display function to draw the square
  }
}

class Square {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  
    this.color = color(random(255,115,92), random(255,144,110), random(255,196,92)); 
  }

  
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
    
    textSize(25)
  fill(103,92,255)
  text('Amara Mancia', 237,370)
  
  }
}

  
