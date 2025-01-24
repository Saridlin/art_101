
let imgHour = [];
let sky = [];
let drop = [];
let fMyn, fSarB, fSarM, teacup, teatag, caff, caff2, decaf, decaf2, kStill, kBoil
let can;
let tagC = [];
let h, hh, m, s, ms;
let skyStat, tagStat, teaStat, kettStat, dropStat, sparkStat;

function preload(){
  for (let i = 1; i < 13; i++){
    imgHour[i-1] = loadImage("assets/hour" + i + ".png");
  }
  for (let i = 1; i < 4; i++){
    drop[i-1] = loadImage("assets/drop" + i + ".png");
  }

  sky[0] = loadImage("assets/back-night.png");
  sky[1] = loadImage("assets/back-dawn.png");
  sky[2] = loadImage("assets/back-day.png");
  sky[3] = loadImage("assets/back-sunset.png");

  teacup = loadImage("assets/teacup.png");
  teatag = loadImage("assets/teatag.png");
  caff = loadImage("assets/caff.png");
  decaf = loadImage("assets/decaf.png");
  caff2 = loadImage("assets/caff2.png");
  decaf2 = loadImage("assets/decaf2.png");
  kStill = loadImage("assets/kettle-still.png");
  kBoil = loadImage("assets/kettle-boil.png");

  fMyn = loadFont("assets/Mynerve-Regular.ttf");
  fSarB = loadFont("assets/Sarpanch-Bold.ttf");
  fSarM = loadFont("assets/Sarpanch-Medium.ttf");
}


function setup() {
  can = createCanvas(1900,1250);
  textAlign(LEFT, TOP);
  noStroke();
  stat = "";
  colorMode(HSB);

  for (let i = 0; i < 12; i++){
    tagC[i] = color(random(360), random(20, 60), random(40, 80));
  }
}

function draw() {
  //checking time
  h = hour(); //23
  if (h > 12){
    hh = h - 12;
  } else {
    hh = h;
  }
  m = minute(); //59
  s = second(); //59
  ms = millis(); //999

  setSky();
  kettle();
  teaLevel();
  image(teacup, 0, 0, width, height);
  teaTagCount();
  sparkle();

  alarms();

  clockStatus();
}

//current reminders through out the day
function alarms(){
  push();
  fill(0, 0, 100);
  rect(100, 70, 500, 150, 20);
  textFont(fSarB);
  textSize(40);
  fill(0, 80, 60);
  let t = ": Reminders :";
  text(t, 120, 70);
  t = '';

  textFont(fMyn);
  textSize(40);
  fill(0, 0, 0);
  if (h == 9){
    t = "quick coffee!"
  } 
  if (h > 10 && h < 13){
    t = "makeshift breakfast.."
  }
  if (h > 18 && h < 21){
    t = "whats for dinner?"
  }
  if (h == 22 || h == 23){
    t = "check your TCG packs!"
  }
  if (h < 2){
    t = "go to sleep!!"
  }
  text(t, 140, 140);
  pop();
}

//setting tea level determined by minute
function teaLevel(){
  let rh = map(m, 0, 59, 0, 770);
  push();
  colorMode(RGB);
  if (m < 4){
    fill(153, 156, 109, 120);

  } else {
    fill(52, 59, 6, 200);
  }
  translate(1100,1130);
  rotate(radians(180));
  rect(0, 0, 440, 770-rh);
  colorMode(HSB);
  teaStat = m + " sips taken.";
  pop();
}

//sparkle motion based on millis
function sparkle(){
  rot = map(ms, 0, 999, 0, 360);
  push();
  translate(980, 230);
  rotate(radians(rot));
  fill(0, 0, 100);
  star(0, 0, 10, 40, 10);
  pop();

  push();
  translate(980, 270);
  rotate(radians(rot));
  fill(0, 0, 100);
  star(0, 0, 5, 20, 8);
  pop();

  sparkStat = "Sparkle is currently at: " + rot + " degrees";
}

//boiling water on the hour
function kettle(){
  if (m > 56){
    image(kBoil, 0, 0, width, height);
    kettStat = "boiling";
  } else {
    image(kStill, 0, 0, width, height);
    kettStat = "still";
  }
}

//setting up hour indicator through tea tags
//current tea bag moves every second
function teaTagCount(){
  push();
  let n = 0;
  for (let i = 0; i < hh; i++){
    tint(tagC[i]);
    image(imgHour[i], 0, 0, width, height);
  }
  tagStat = h + " hours";

  tint(tagC[hh]);
  image(teatag, 0, 0, width, height);
  if (h > 12){
    if (s % 2 == 0){
      image(decaf2, 0, 0, width, height);
    } else {
      image(decaf, 0, 0, width, height);
    }
    tagStat = tagStat + "\nDrinking decaf tea.";
  } else {
    if (s % 2 == 0){
      image(caff2, 0, 0, width, height);
    } else {
      image(caff, 0, 0, width, height);
    }
    tagStat = tagStat + "\nDrinking caffinated tea.";
  }
  pop();

}

//sets day/night sky according to the hour
function setSky(){
//night 21pm - 4am
  if (h > 20 || h <= 4){
    image(sky[0], 0, 0, width, height);
    skyStat = "night";
  }
//dawn 5am - 9am
  if (h > 4 && h <= 9){
    image(sky[1], 0, 0, width, height);
    skyStat = "dawn";
  }
//day 10am - 16pm
  if (h > 9 && h <= 16){
    image(sky[2], 0, 0, width, height);
    skyStat = "day";
  }
//sunset 17pm - 20pm
  if (h > 16 && h <= 20){
    image(sky[3], 0, 0, width, height);
    skyStat = "sunset";
  }
}

//sending status of items to console
function clockStatus(){
  let sky = "Current Sky Set: " + skyStat + "\n";
  let kett = "Kettle is: " + kettStat + "\n";
  let tag = "Currently: " + tagStat + "\n";
  console.log(sky + kett + tag + teaStat + "\n" + sparkStat);
}

//drawing a star shape
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed(){
  if (key == 's' || key == 'S') {
    console.log("Saved canvas.");
    saveCanvas(can, 'untitled', '.png');
  }
}