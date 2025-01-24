//Code by David from Section 1

let dgcentipede21;

class dgCentipede21 {
  constructor() {
    this.counter = 0;
    this.clickCount = 0;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.loX = height / 2;
    this.loY = width / 2;
    this.loX2 = height / 2;
    this.loY2 = width / 2;
    this.speedX2 = random(-5, 5);
    this.speedY2 = random(-5, 5);
    this.counter1 = 45;
    this.counter2 = -45;
    this.counterR = 0;
    this.value = 0;
    this.factor = 2;
    this.x = width;
    
    angleMode(DEGREES);
  }

  // setup() {
  //   createCanvas(500, 800);
  //   background(20);
  //   fill(255);
  // }

  All() {
    this.pair();
    this.dgdrawingaround();
    this.dgcentipederound();
    this.dgmousePressed();
  }

  dgnumbercount() {
    this.value += 1; 
  }
  
  pair() {
    this.dgCircleCentipedeWildChange();

    this.dgRedeyeSpin(410, 720, -this.counter, 0.75);
    fill(250, 0, 0);
    this.dgRedeyeSpin(450, 50, this.counter, 0.5);
    this.dgYelloweyeSpin(80, 60, -this.counter, 0.75);
    this.dgYelloweyeSpin(40, 750, this.counter, 0.5);
    this.dgLongColorfullcentipede(color(100, 200, random(400)), width / 4, height / 3, -40, 1);
    this.dgShortplaincentipede(color(200, 200, random(400)), width / 3, height - 150, -40, 1);
    
    this.counter += 5;

    if (this.loX < 0) this.loX = width;
    if (this.loX > width) this.loX = 0;
    if (this.loY < 0) this.loY = height;
    if (this.loY > height) this.loY = 0;

    if (this.loX2 < 0) this.speedX2 = -this.speedX2;
    if (this.loX2 > width) this.speedX2 = -this.speedX2;
    if ((this.loY < 0) || (this.loY > height)) this.speedY = -this.speedY;
    if ((this.loY2 < 0) || (this.loY2 > height)) this.speedY2 = -this.speedY2;

    this.loX += this.speedX;
    this.loY += this.speedY;
    this.loX2 += this.speedX2;
    this.loY2 += this.speedY2;

    this.dgmoonandcentipede(this.loX, this.loY);
    this.dgLongColorfullcentipede(color(200, 120, 20), this.loX, this.loY, 15, 0.5);
    this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, -180, 0.8);
    this.dgsunandcentipede(this.loX2, this.loY2);
    
    rotate(8);
  
    this.dgLongColorfullcentipede(color(200, 120, 20), this.loX2, this.loY2, 15, 0.5);
    scale(1);
    this.dgShortplaincentipede(color(200, 200, random(400)), this.loX2, this.loY2, -180, 0.8);
  }

  dgdrawingaround() {

    push();
    translate(mouseX, mouseY);
    scale(0.3);
    this.dgLongColorfullcentipede(color(200, 120, 20));
    this.dgcentipederound((this.clickCount % 50) + 2);
    pop();
  }

  dgmousePressed() {
    this.clickCount++;
  }

  dgcentipederound(eyeCount) {
    let eyeDistance = 1000.0 / (eyeCount - 1);
    for (let i = 0; i < eyeCount; i++) {
      angleMode(DEGREES);
      rotate(100);

      fill(250, 0, 0);
      this.dgLongColorfullcentipede(-40, (i * eyeDistance), 0.1); 
      this.dgLongColorfullcentipede(80, (i * eyeDistance), 0.1);
    }
  }

  dgRedeyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter2));
    scale(sc);
    fill(250, 0, 0);
    ellipse(0, 0, 200, 200);  
    fill(60);
    ellipse(0, 0, 160, 160);
    fill(250, 0, 0);
    ellipse(0, 0, 159, 159);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(0);
    circle(-59, 50, 30);
    circle(2, -78, 30);
    circle(58, 50, 30);
  

    if (20 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);
      arc(-20, 68, 50, 30, 0, 100);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);  
      arc(-20, 70, 50, 30, 0, 100);
    }
    if (15 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);   
      arc(-10, 70, 50, 30, 0, 100);
    }
    pop();
    this.counter2--;
  }

  dgYelloweyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter1));
    scale(sc);
    fill(255, 204, 0);
    circle(0, 0, 150);
    rotate(radians(this.counter1));
    fill(0);
    ellipse(0, 0, 110, 40);
    ellipse(0, 0, 25, 150);
    pop();
    this.counter1++;
  }

  dgLongColorfullcentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx + 100, ly);
    rotate(rot);
    scale(sc + 0.1);
    this.dgbody1();
    this.dghead(k, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k, -50, 10); 
    this.dgarm(k, 30, 10); 
    this.dgbody2(k);
    this.dgbody3(k);
    this.dgbody4andtoysword(70, 0, 2, k);
    this.dgbody5andcirclefood(k);
    

    if (20 > 19) {
      angleMode(DEGREES);
      rotate(-10);
      this.dgarm2(k, -105, 90);
      this.dgarm2(k, -20, 90);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(22);
      this.dgarm3(k, -50, 160);
      this.dgarm3(k, 38, 160);
    }
    if (101 > 1) {
      angleMode(DEGREES);
      rotate(40);
      this.dgarm4(k, 95, 150);
      this.dgarm4(k, 157, 150);    
    }
    if (95 > 1) {
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, 70);
      angleMode(DEGREES);
      rotate(40);
      this.dgfinger(k, 85, 25);
    }
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (961 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(90);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (9161 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    
    textSize(32);
    angleMode(DEGREES);
    rotate(-70);
    this.value += this.factor;
    text(this.value, -90, 70);

    pop();
  }

  dgShortplaincentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx - 50, ly + 60);
    angleMode(DEGREES);
    rotate(270);
    let k2 = color(30);
    rotate(rot);
    scale(sc - 0.4);
    this.dgbody1();
    this.dghead(k2, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k2, -50, 10); 
    this.dgarm(k2, 30, 10); 
    translate(-115, -70);
    angleMode(DEGREES);
    rotate(-40);
    this.dgbody4andtoysword(k2);
    this.dgbody5andcirclefood(70, 0, 2, k2);

    if (101 > 1) {
      angleMode(DEGREES);
      rotate(50);
      this.dgarm4(k2, 90, 150);
      this.dgarm4(k2, 150, 150);    
    }
  
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(180);
      scale(0.80);
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k2, 80, 90);
      this.dgfinger(k2, 270, 60);
    } 
    pop();
  }

  dgbody1() {
    fill(250, 0, 50);
    rect(0, 0, 40, 80, 15, 15, 25, 25);
  }

  dghead(c, lx, ly) {
    push();
    fill(c);
    translate(lx, ly);
    ellipse(0, 0, 40, 40);
    ellipse(45, -42.5, 40, 40);
    ellipse(-45, -42.5, 40, 40);
    fill(250);
    ellipse(45, -42.5, 30, 30);
    ellipse(-45, -42.5, 30, 30);
    fill(0, 100, 255);
    angleMode(DEGREES);
    rotate(-45);
    ellipse(1, -21, 10, 44);
    angleMode(DEGREES);
    rotate(95);
    ellipse(1, -21, 10, 44);
    pop();
  }

  dgarm(c, lx, ly) {
    fill(250, 100, 0);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm2(c, lx, ly) {
    fill(200, 200, 0);
    rect(lx, ly, 60, 15, 10);
  }

  dgarm3(c, lx, ly) {
    fill(c);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm4(c, lx, ly) {
    fill(0, 250, 100);
    rect(lx, ly, 40, 15, 10);
  }

  dgfinger(c, lx, ly) {
    fill(250, 0, 0);
    rect(lx, ly, 20, 8, 10);
  }

  dgbody2() {
    this.x -= 1222;
    ellipse(this.x, 10, 50, 50);
    if (this.x < 0) {
      this.x = width; 
    }
    angleMode(DEGREES);
    rotate(-45);
    fill(200, 50, 150);
    rect(-59, 58, 40, 80, 15, 15, 25, 25);
  }

  dgbody3() {
    angleMode(DEGREES);
    rotate(24);
    fill(200, 200, 100);
    rect(-3, 128, 40, 80, 15, 15, 25, 25);
  }

  dgbody4andtoysword(xpos, ypos, circlefood) {
    angleMode(DEGREES);
    rotate(44);
    fill(200, 100, 200);
    rect(130, 120, 40, 80, 15, 15, 25, 25);

    if (circlefood == 2) {
      fill(20, 20, 200);
      rect(width / 2 + xpos - 240, height / 2 - 430 + ypos, 50, 8, 7);
      fill(250, 0, 0);
      rect(width / 2 + xpos - 227, height / 2 - 490 + ypos, 25, 60, 7);
      fill(300, 100, 0);
      rect(width / 2 + xpos - 224, height / 2 - 420 + ypos, 18, 30);
    }
  }

  dgbody5andcirclefood(xpos, ypos, circlefood) {
    if (circlefood == 2) {
      fill(20, 20, 200);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 40, 50, 7);
      fill(250, 0, 0);
      circle(width / 2 + xpos - 151, height / 2 - 150 + ypos, 30, 10, 7);
      fill(300, 100, 0);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 25, 50, 7);
    }
    angleMode(DEGREES);
    rotate(-54);
    fill(100, 200, 100);
    arc(-80, 250, 80, 80, 160, 95);
    arc(-80, 250, 80, 80, -this.counter, this.counter);
  }

  dgmoonandcentipede(lx, ly) {
    strokeWeight(4);
    fill(250);
    point(lx - 10, ly - 10, 20);
    fill(0);
    circle(lx, ly, 70);
    fill(180);
    ellipse(lx, ly, 25, 25);
    fill(0);
    ellipse(lx - 4, ly - 4, 17, 17);
    fill(250);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgsunandcentipede(lx, ly) {
    strokeWeight(4);
    fill(300, 100, 0);
    point(lx - 10, ly - 10, 20);
    fill(200, 200, 0);
    circle(lx, ly, 70);
    fill(300, 10, 10);
    ellipse(lx, ly, 25, 25);
    fill(300, 10, 10);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgCircleCentipedeWildChange() {
    let g = random(0.1);
    let m = mouseX;
    let q = mouseY;
    
    if (m < width / 2) {
      this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, g * 5, g * 2);
    }
    if (q < height / 2) {
      this.dgLongColorfullcentipede(color(200, 200, random(400)), this.loX, this.loY + 10, g * 20, g * 4.5);
    }
  }
}
