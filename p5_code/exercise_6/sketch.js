
var mgr, bgM, bgT, bgJ, bgH, can;
var bugs = [];
var fI, fN;
var sTitle, sMain;

//armadillidium vulgare - common
//armadillidium maculatum - zebra
//armadillidium vulgare - orange vigor
//armadillidium klugii - montenegro
//cubaris - rubber ducky
//porcellio scaber - dalmation
//porcellio laevis - dairy cow
//porcellio scaber - orange koi
//trichorhina tomentosa - dwarf white
//porcellio laevis - orange


function preload(){
  bgM = loadImage("assets/bg-main.jpg");
  bgT = loadImage("assets/bg-title.jpg");
  bgJ = loadImage("assets/bg-journal.jpg");
  bgH = loadImage("assets/bg-help.jpg");
  sTitle = loadSound("assets/bg-loopTitle.mp3");
  sMain = loadSound("assets/bg-loop.mp3");
  // fI = loadFont();
  // fN = loadFont();
}

function setup() {
  can = createCanvas(1280, 850);
  mgr = new SceneManager();

  //setting up all bug sprites
  //needs neutral position and sizeable hitbox related to original image size of sprite

  for (let i = 0; i < 10; i++){
    bugs[i] = createSprite(0, 0, 500, 500);
    bugs[i].addAnimation("idle", "bug/" + (i + 1) + "-3.png", "bug/" + (i + 1) + "-5.png");
    bugs[i].addAnimation("zoom", "bug/" + (i + 1) + "-1.png", "bug/" + (i + 1) + "-7.png");
    bugs[i].visible = false;
  }

  mgr.addScene(title);
  mgr.addScene(main);
  mgr.addScene(journal);
  mgr.addScene(help);
  mgr.addScene(bug0);
  mgr.addScene(bug1);
  mgr.addScene(bug2);
  mgr.addScene(bug3);
  mgr.addScene(bug4);
  mgr.addScene(bug5);
  mgr.addScene(bug6);
  mgr.addScene(bug7);
  mgr.addScene(bug8);
  mgr.addScene(bug9);
  mgr.showNextScene();

  textSize(40);
  ellipseMode(CENTER);

  sTitle.loop(true);
  sMain.loop(true);
  outputVolume(0.7);
}

function draw() {
  mgr.draw();
}

function mousePressed(){
  mgr.mousePressed();
}

function keyPressed(){
  if (key == 's' || key == 'S') {
    console.log("Saved canvas.");
    saveCanvas(can, 'untitled', '.png');
  }
  if (key == 'h' || key == 'H' || key == 'i' || key == 'I'){
    //go to help page
    mgr.showScene( help );
  }
  if (key == 'j' || key == 'J'){
    //go to help page
    mgr.showScene( journal );
  }
  if (key == 'm' || key == 'M'){
    //go to help page
    mgr.showScene( main );
  }
  if (key == "Escape"){
    //go to help page
    mgr.showScene( title );
  }
  //console.log(key);
}
