//Code by Dat from Section 1

class Amogus {
  bx;
  by;
  bw;
  bh;
  lw;
  lh;
  moveX;
  moveY;
  ra;

  constructor(bx, by, bw, bh, moveX, moveY, ra) {
    this.bx = bx;      // Body X position
    this.by = by;      // Body Y position
    this.bw = bw;      // Body width
    this.bh = bh;      // Body height
    this.lw = bw / 3;  // Leg width (calculated as one-third of body width)
    this.lh = bh / 2;  // Leg height (calculated as half of body height)
    this.moveX = moveX;  // Horizontal movement speed
    this.moveY = moveY;  // Vertical movement speed
    this.ra = ra;      // Rotation angle
  }

  // Update the position with wraparound behavior
  update() {
    this.bx += this.moveX;
    this.by += this.moveY;

    // Bounce off edges
    if (this.bx > width || this.bx < 0) this.moveX *= -1;
    if (this.by > height || this.by < 0) this.moveY *= -1;
  }

  // Function to draw the AMOGUS
  drawSussy(color) {
    // Calculate positions relative to the body
    let hx = this.bx + this.bw / 2;    // Head X position relative to body
    let lsx = this.bx + this.bw - this.lw;  // Right leg position relative to body
    let ly = this.by + this.bh;        // Leg Y position relative to body

    this.drawBody(this.bx, this.by, this.bw, this.bh, color);
    this.drawHead(hx, this.by, this.bw, this.bh + 60, color);  // Head
    this.drawLegs(this.bx, ly, this.lw, this.lh, lsx, color);  // Legs
    this.drawBackpack(this.bx + this.bw / 1.5, this.by + 20, 40, 80, color); // Backpack
    this.drawFace(hx, this.by + 20, 75, 50); // Face
  }

  // Function for drawing AMOGUS with a hat
  drawSussy2(color) {
    let hx = this.bx + this.bw / 2;  // Head X position
    let lsx = this.bx + this.bw - this.lw;  // Right leg position
    let ly = this.by + this.bh;  // Leg Y position

    this.drawBody(this.bx, this.by, this.bw, this.bh, color);
    this.drawHead(hx, this.by, this.bw, this.bh + 60, color);
    this.drawLegs(this.bx, ly, this.lw, this.lh, lsx, color);
    this.drawBackpack(this.bx + this.bw / 1.5, this.by + 20, 40, 80, color);
    this.drawFace(hx, this.by + 20, 75, 50);
    this.drawHat(hx - 5, this.by - 110, 70, 50);  // Draw a hat
  }

  // Function for drawing the body
  drawBody(x, y, w, h, color) {
    fill(color.r, color.g, color.b);
    noStroke();
    //stroke(color.r, color.g, color.b);
    rect(x, y, w, h);
  }

  // Function for drawing the head
  drawHead(x, y, w, h, color) {
    fill(color.r, color.g, color.b);
    noStroke();
    //stroke(color.r, color.g, color.b);
    arc(x, y, w, h, 600, 360);
  }

  // Function for drawing the legs
  drawLegs(x1, y, w, h, x2, color) {
    fill(color.r, color.g, color.b);
    noStroke();
    //stroke(color.r, color.g, color.b);
    rect(x1, y, w, h);  
    rect(x2, y, w, h);  
  }

  // Function for drawing the backpack
  drawBackpack(x, y, w, h, color) {
    fill(color.r, color.g, color.b);
    noStroke();
    //stroke(color.r, color.g, color.b);
    ellipse(x + 35, y - 5, w + 40, h + 15);
  }

  // Function for drawing the face
  drawFace(x, y, w, h) {
    fill(250);
    stroke(0);
    ellipse(x - 30, y - 20, w, h);
  }

  //Function for drawing the hat
  drawHat(x, y, w, h) {
    fill(0);  // Black hat
    stroke(0);
    rect(x - w / 2, y, w, h);  // Draw the hat as a rectangle
    rect(x - w / 1.5, y + h, w * 1.5, h / 3);  // Hat brim
  }

  // Function for moving on click
  // Function for moving and scaling on click
  sus() {
    this.bx += random(-10, 10); // Apply some random movement to x position
    this.by += random(-10, 10); // Apply some random movement to y position
  
    // If the character goes out of bounds, reverse the direction
    if (this.bx < 0 || this.bx > width) {
      this.bx = constrain(this.bx, 0, width);  // Keep within bounds
    }
    if (this.by < 0 || this.by > height) {
      this.by = constrain(this.by, 0, height);  // Keep within bounds
    }
  }  
}