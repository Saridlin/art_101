
var mgr, bgM, bgT, bgJ, bgH, titleImg, blank, fN, fI, can;
var sTitle, sMain, sJoun, sHelp, sClick, sCol;
var bugs = [];


function preload(){
  bgM = loadImage("assets/bg-main.jpg");
  bgT = loadImage("assets/bg-title.jpg");
  bgJ = loadImage("assets/bg-journal.jpg");
  bgH = loadImage("assets/bg-help.jpg");
  titleImg = loadImage("assets/title.png");
  hid = loadImage("bug/none.png");
  sTitle = loadSound("assets/bg-loopTitle.mp3");
  sMain = loadSound("assets/bg-loop.mp3");
  sClick = loadSound("assets/click.mp3");
  sCol = loadSound("assets/collect.mp3");
  fN = loadFont("assets/ShantellSans-Light.ttf");
  fI = loadFont("assets/ShantellSans-LightItalic.ttf");
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

  textFont(fN);
  textSize(40);
  ellipseMode(CENTER);
  rectMode(CORNER);

  sClick.setVolume(0.4);
  sCol.setVolume(0.4);
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
    sClick.play();
    mgr.showScene( help );
  }
  if (key == 'j' || key == 'J'){
    //go to help page
    sClick.play();
    mgr.showScene( journal );
  }
  if (key == 'm' || key == 'M'){
    //go to help page
    sClick.play();
    mgr.showScene( main );
  }
  if (key == "Escape"){
    //go to help page
    sClick.play();
    mgr.showScene( title );
  }
  //console.log(key);
}
