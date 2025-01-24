/*
DO_roomba Class made by Daria Orlova
Exercise 4 - Industrious Code
Art 101 Sec 2, Fall 2024
*/

let size = 60;

class DO_Roomba {

  //intial variables
  rc; //current roomba color
  oc; //original color
  lx;
  ly;
  speedX;
  speedY;
  scale;
  radius;
  name;
  dec; //decoration var
  rbow; //rainbow status
  rAngle; //roomba angle
  rDance; //spinning status
  elem; //toString concat

  // needs: color(), 'name', scaleInt, 'decoration' ('spoon', 'knife' or 'hat')
  constructor(c, n, s, d){
    //populating vars
    this.name = n;
    this.oc = c;
    this.setColor(c);
    this.scale = s;
    this.radius = size/2 * this.scale;
    this.lx = random(0+this.radius,width-this.radius);
    this.ly = random(0+this.radius,height-this.radius);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.dec = d;
    this.rbow = false;
    this.rAngle = atan2(this.speedX,-this.speedY);
    this.rDance = false;
    this.elem = '';
  }

  //** DISPLAY METHODS

  //update position of Roomba
  update(){
    push();

    translate(this.lx, this.ly);
    rotate(this.rAngle);
    scale(this.scale);
    stroke(30); //setting outline color
    fill(this.rc);
    ellipse(0, 0, 60, 60); //body w/ custom color
    fill(0);
    ellipse(0, 0, 27, 27); //outer button - static
    fill(220);
    ellipse(0, 0, 9, 9); //inner button - static
    noFill();
    strokeWeight(4);
    arc(0, 0, 60, 60, PI, 2*PI); //large bumper - static
    arc(0, 0, 40, 40, PI+0.4, (2*PI)-0.4); //handle - static
    strokeWeight(1);
    fill(0);
    ellipse(0, -28, 5, 5); //front bumper button

    //checking accessory
    switch(this.dec){
      case 'knife':
        //knife vector graphic
        push();
        translate(27,0);
        rotate(radians(20));
        this.addKnife();
        pop();
        this.elem = this.elem + " equipped Knife!";
        break;
      case 'hat':
        //hat vector graphic
        push();
        scale(-1,1);
        translate(-22,-22);
        rotate(radians(-40));
        this.addHat();
        pop();
        this.elem = this.elem + " equipped Hat!";
        break;
      case 'spoon':
        //spoon vector graphic
        push();
        translate(35,-20);
        rotate(radians(30));
        this.addSpoon();
        pop();
        this.elem = this.elem + " equipped Spoon!";
        break;
      default:
        //holding nothing
        this.elem = "has nothing."
    }


    fill(255);
    textAlign(CENTER);
    text(this.name, 0, 23); //Roomba name
    pop();

  }

  //** ACTION METHODS

  //sets new color of Roomba object
  setColor(c){
    this.rc = c;
    console.log("Color of " + this.name + " set to " + this.rc.toString('rgb'));
  }

  //sets new angle of Roomba based on direction it is facing
  setAngle(){
    if (!this.rDance){
      this.rAngle = atan2(this.speedX,-this.speedY);
    }
  }

  //rotates roomba to spin
  //happens when keyIsPressed
  dance(){
    if (keyIsPressed){
      if (frameCount % 7 == 0){
        this.rAngle = this.rAngle + QUARTER_PI;
      }
      this.rDance = true;
    } else {
      this.rDance = false;
    }
  }

  //changes color of roomba to shift through rainbow hues
  //happens when mouseIsPressed
  rainbow(){
    if (mouseIsPressed){
      if (frameCount % 4 == 0){
        colorMode(HSB);
        this.setColor(color(random(360), 100, 100));
        colorMode(RGB);
      }
      this.rbow = true;
    } else {
      this.setColor(this.oc);
      this.rbow = false;
    }
  }

  //moves roomba's position based on speed
  move(){
    if(this.lx < this.radius || this.lx > (width - this.radius)){
      this.speedX = -this.speedX;
      this.setAngle();
    }
    if(this.ly < this.radius || this.ly > (height - this.radius)){
      this.speedY = -this.speedY;
      this.setAngle();
    }

    this.lx += this.speedX;
    this.ly += this.speedY;
  }

  //add a knife graphic
  addKnife(){
    stroke(0);
    fill(220);
    arc(0, 0, 10, 40, PI+HALF_PI, 0);
    line(0, 0, 0, -20);
    fill(0);
    rect(0, 0, 6, 20);
  }

  //add a hat graphic
  addHat(){
    fill(100);
    ellipse(0,0,30,7);
    noStroke();
    rect(-9,-6,18,6);
    stroke(0);
    line(9,0,9,-6);
    line(-9,0,-9,-6);
    ellipse(0,-6,18,5);
  }

  //add a spoon graphic
  addSpoon(){
    stroke(0);
    fill(220);
    rect(3, 10, 4, 30);
    ellipseMode(CORNER);
    ellipse(0, 0, 10, 15);
    ellipseMode(CENTER);
    noStroke();
    rect(3.75, 10, 2.5, 10);
    stroke(0);
  }

  //toString, displays below canvas in a formatted table of: "Name: rainbow status and dancing status"
  toString(){
    let rb = 'is normal ';
    let d = 'and not spinning.';
    if (this.rbow){
      rb = 'is now vibrant! ';
    }
    if (this.rDance){
      d = 'and is now spinning!'
    }
    describeElement(this.name, rb + d, LABEL);
  }

}