//Code by Angelique from Section 2

class Kirby {
  constructor(color, x, y, size) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawBody();
    this.drawBlush();
    this.drawEyes();
    this.drawMouth();
    this.drawFeet();
    this.drawArms();
    pop();
  }

  drawBody() {
    fill(this.color);
    stroke(0);
    strokeWeight(4);
    ellipse(0, 0, this.size, this.size);
  }

  drawBlush() {
    fill(150, 50, 50);
    noStroke();
    ellipse(-45, 0, 20, 10); // left blush
    ellipse(45, 0, 20, 10); // right blush
  }

  drawEyes() {
    this.drawEye(-35, -40, 0);
    this.drawEye(35, -40, random(-5, 5));
  }

  drawEye(lx, ly, offset) {
    push();
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(lx, ly, 40, 60);
    
    let bluePupilOffsetX = random(-5, 5);
    let bluePupilOffsetY = random(-3, 3);
    fill(0, 0, 255);
    ellipse(lx + bluePupilOffsetX, ly + bluePupilOffsetY, 15, 10);
    
    fill(0);
    ellipse(lx + bluePupilOffsetX, ly + bluePupilOffsetY, 7, 7);
    
    fill(0, 0, 255);
    ellipse(lx + bluePupilOffsetX, ly + bluePupilOffsetY + 4, 4, 4);
    pop();
  }

  drawMouth() {
    push();
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(2);
    arc(0, 20, 60, 40, 0, PI);
    pop();
  }

  drawFeet() {
    push();
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(-30, 80, 30, 20);
    ellipse(30, 80, 30, 20);
    fill(0);
    ellipse(-30, 85, 10, 10);
    ellipse(30, 85, 10, 10);
    pop();
  }

  drawArms() {
    push();
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    ellipse(-60, 20, 30, 20);
    ellipse(60, 20, 30, 20);
    pop();
  }
}

class SmallKirby extends Kirby {
  constructor(color, x, y, size) {
    super(color, x, y, size);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
    }

    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
    }
  }

  drawStarWand() {
    push();
    stroke(0);
    strokeWeight(2);
    
    let wandX = this.x - - 40;
    let wandY = this.y - 20;
    
    line(this.x, this.y, wandX, wandY);
    
    // Star 
    fill(255, 255, 0);
    noStroke();
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = TWO_PI / 5 * i;
      let xOffset = cos(angle) * 10;
      let yOffset = sin(angle) * 10;
      vertex(this.x + 40 + xOffset, this.y - 20 + yOffset);
    }
    endShape(CLOSE);
    pop();
  }

  display() {
    super.display();
    this.drawStarWand();
  }
}