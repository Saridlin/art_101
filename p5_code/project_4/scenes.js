//Scenes

var bugMain = [
  [250, 400, 0.07],
  [450, 530, 0.05],
  [670, 400, 0.06],
  [480, 730, 0.07],
  [200, 630, 0.07],
  [1090, 620, 0.05],
  [820, 570, 0.05],
  [640, 630, 0.06],
  [900, 700, 0.05],
  [1000, 480, 0.06]
];

var bugInfo = [
  ["Armadillidium vulgare", "\"Pill-bug\"", "The common pill-bug!", "Also referred to as a potato bug, doodle bug or roly-poly. The most common type of woodlouse to be kept as pet isopods for the various colors hobbyists have cultivated.\nYou might see these guys anywhere outside at this very moment!"],
  ["Armadillidium maculatum", "\"Zebra\"", "Not a horse!", "The naturally occurring stripey guy is native to France. It also stands out from the crowd for shedding its exoskeleton in two halves and not one complete piece. Also very popular amongst pet isopod hobbyists for being easy to take care of and interesting appearance."],
  ["Armadillidium vulgare", "\"Orange Vigor\"", "Drink some OJ!", "A variant of the common pill-bug known for its deep red to orange color morphs.\nThey actually are born white and slowly develop their deeper burgundy coloration as they shed to adulthood."],
  ["Armadillidium klugii", "\"Montenegro\"", "Just clowning around!", "A part of a naturally spotted pill-bug species also referred to as “clown isopods”. These spots are actually an adapted mimicry of the Mediterranean black widow which has many more spots than the American black widow with a red hourglass marking you are probably used to."],
  ["Cubaris sp.", "\"Rubber Ducky\"", "Quack!", "Part of a small genus of isopods which often contains undescribed species plopped into this identification. This pill-bug has brought more attention to the pet isopod hobby due to its striking and cute face resembling a rubber ducky! Hence its name."],
  ["Porcellio scaber", "\"Dalmation\"", "101 and counting!", "This pill-bug is an example of leucism, a partial loss of pigmentation, in isopod coloration. Unlike in albinism, leucistic isopods still have dark eyes.\nThey almost look like small wiggling chunks of cookies-and-cream ice cream!"],
  ["Porcellio laevis", "\"Dairy Cow\"", "Hope I lifted your moo-d!", "Often recommended as a great beginner species for new hobbyists due to their versatility in various environments and utility to reptile keepers as well. Their fun coloration as a piebald species makes them interesting visual additions to terrariums."],
  ["Porcellio scaber", "\"Orange Koi\"", "Blub?", "Although all isopods are crustacean, they are land creatures that live best in moist environments. These land koi exhibit a dalmatian-like gene that produces orange patches across the shell that intensify in color as they shed to adulthood."],
  ["Trichorhina tomentosa", "\"Dwarf White\"", "A women's world!", "A female-only species that reproduces through parthenogenesis, or cloning themselves.\nThey are very small (2-3 mm!) and are widely used in bioactive terrariums as great compostors or as a food source."],
  ["Porcellio laevis", "\"Orange\"", "Orange you glad I'm moo-ving?", "An orange-colored variant of the “dairy-cow” isopod species. Very resilient and exhibit a fun, bright morph.\nAs an aggressive species, they can prey on smaller sized isopods and even amphibians."],
];

let tHelp = [
  "Explore the terrarium and learn about the various species and morphs of isopods!",
  "Click on any bug to pull up their info page.",
  "Press \‘m\’ to return to the main terrarium.",
  "Press \‘esc\’ to return to title page.",
  "Press \‘j\’ to open up your Journal and see the isopods you\’ve recorded so far!",
  "Press \‘h\’ or \‘i\’ to bring up this help page at any time."
];

var bugFound = [];

//var cam = new Camera();

function title(){

  this.setup = function(){
    console.log("setup for title");
    image(bgT, 0, 0);

    for (let i = 0; i < 10; i++){
      bugFound[i] = false;
    }
  }

  this.enter = function(){
    console.log("entering title screen");

    if(sMain.isPlaying()){
      sMain.pause();
    }

    if (!sTitle.isPlaying()){
      sTitle.play();
    }
  }

  this.draw = function(){

    image(bgT, 0, 0);
    imageMode(CENTER);
    image(titleImg, width/2, 270);
    imageMode(CORNER);


    btnMain = checkButtonPress("Main", 35, width/2 - 75, height/2, 150, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    btnHelp = checkButtonPress("Help", 35, width/2 - 75, height/2 + 100, 150, 50, color(255, 255, 255), color(130), color(50));
    if (btnHelp){
      sClick.play();
      this.sceneManager.showScene(help);
    }

    hideBugs();

  }

  this.mousePressed = function(){

  }
}

function main(){

  this.setup = function(){
    console.log("setup for main");
    image(bgM, 0, 0);
  }

  this.enter = function(){
    console.log("entering main screen");

    if (sTitle.isPlaying()){
      sTitle.stop();
    }
    if (!sMain.isPlaying()){
      sMain.play();
    }

    //bug positioning
    for(let i = 0; i < 10; i++){
      bugs[i].position.x = bugMain[i][0];
      bugs[i].position.y = bugMain[i][1];
      bugs[i].scale = bugMain[i][2];
      bugs[i].visible = true;
    }
  }

  this.draw = function(){

    image(bgM, 0, 0);
    //background(255, 30);

    btnJournal = checkButtonPress("Journal", 35, 20, 780, 150, 50, color(255, 255, 255), color(130), color(50));
    if (btnJournal){
      sClick.play();
      this.sceneManager.showScene(journal);
    }

    btnHelp = checkButtonPress("?", 35, 1190, 20, 70, 50, color(255, 255, 255), color(130), color(50));
    if (btnHelp){
      sClick.play();
      this.sceneManager.showScene(help);
    }

    if (bugs[0].mouse.pressing()){
      sCol.play();
      bugFound[0] = true;
      this.sceneManager.showScene(bug0);
    }

    if (bugs[1].mouse.pressing()){
      sCol.play();
      bugFound[1] = true;
      this.sceneManager.showScene(bug1);
    }

    if (bugs[2].mouse.pressing()){
      sCol.play();
      bugFound[2] = true;
      this.sceneManager.showScene(bug2);
    }

    if (bugs[3].mouse.pressing()){
      sCol.play();
      bugFound[3] = true;
      this.sceneManager.showScene(bug3);
    }

    if (bugs[4].mouse.pressing()){
      sCol.play();
      bugFound[4] = true;
      this.sceneManager.showScene(bug4);
    }

    if (bugs[5].mouse.pressing()){
      sCol.play();
      bugFound[5] = true;
      this.sceneManager.showScene(bug5);
    }

    if (bugs[6].mouse.pressing()){
      sCol.play();
      bugFound[6] = true;
      this.sceneManager.showScene(bug6);
    }

    if (bugs[7].mouse.pressing()){
      sCol.play();
      bugFound[7] = true;
      this.sceneManager.showScene(bug7);
    }

    if (bugs[8].mouse.pressing()){
      sCol.play();
      bugFound[8] = true;
      this.sceneManager.showScene(bug8);
    }

    if (bugs[9].mouse.pressing()){
      sCol.play();
      bugFound[9] = true;
      this.sceneManager.showScene(bug9);
    }

  }

  this.mousePressed = function(){

  }
}

function journal(){

  this.setup = function(){
    console.log("setup for journal");
    image(bgJ, 0, 0);
  }

  this.enter = function(){
    console.log("entering journal screen");

    if (sTitle.isPlaying()){
      sTitle.stop();
    }
    if(!sMain.isPlaying()){
      sMain.play();
    }
  }

  this.draw = function(){
    image(bgJ, 0, 0);

    //boxes
    fill(255, 220);
    noStroke();
    rectMode(CENTER);
    rect(width/2, 60, 320, 90, 20);
    rectMode(CORNER);

    for(let i = 1; i < 6; i++){
      rect(60, 140*i, 550, 120, 20);
      rect(650, 140*i, 550, 120, 20);
      ellipse(150, 60+(i*140), 140, 90);
      ellipse(740, 60+(i*140), 140, 90);
    }

    hideBugs();

    fill(107, 78, 11);
    textSize(70);
    text("Journal", width/2-130, 83);
    fill(0);
    textSize(30);
    for(let i = 0; i < 10; i++){
      if(bugFound[i]){
        if (i % 2 == 0){
          bugs[i].position.x = 150;
          bugs[i].position.y = 200+(i*70);
          bugs[i].visible = true;
          bugs[i].scale = 0.05;
          textFont(fI);
          text(bugInfo[i][0], 250, 190+(i*70), 350, 50);
          textFont(fN);
          text(bugInfo[i][1], 250, 230+(i*70), 350, 50);

        } else {
          bugs[i].position.x = 740;
          bugs[i].position.y = 130+(i*70);
          bugs[i].visible = true;
          bugs[i].scale = 0.05;
          textFont(fI);
          text(bugInfo[i][0], 840, 120+(i*70), 350, 50);
          textFont(fN);
          text(bugInfo[i][1], 840, 160+(i*70), 350, 50);
        }
      } else {
        if (i % 2 == 0){
          image(hid, 100, 175+(i*70), 100, 50);
          text("N/A", 300, 190+(i*70), 350, 50);
        } else {
          image(hid, 690, 105+(i*70), 100, 50);
          text("N/A", 890, 120+(i*70), 350, 50);
        }
      }
    }
    

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    btnHelp = checkButtonPress("?", 35, 1190, 20, 70, 50, color(255, 255, 255), color(130), color(50));
    if (btnHelp){
      sClick.play();
      this.sceneManager.showScene(help);
    }

    if (bugs[0].mouse.pressing()){
      sCol.play();
      bugFound[0] = true;
      this.sceneManager.showScene(bug0);
    }

    if (bugs[1].mouse.pressing()){
      sCol.play();
      bugFound[1] = true;
      this.sceneManager.showScene(bug1);
    }

    if (bugs[2].mouse.pressing()){
      sCol.play();
      bugFound[2] = true;
      this.sceneManager.showScene(bug2);
    }

    if (bugs[3].mouse.pressing()){
      sCol.play();
      bugFound[3] = true;
      this.sceneManager.showScene(bug3);
    }

    if (bugs[4].mouse.pressing()){
      sCol.play();
      bugFound[4] = true;
      this.sceneManager.showScene(bug4);
    }

    if (bugs[5].mouse.pressing()){
      sCol.play();
      bugFound[5] = true;
      this.sceneManager.showScene(bug5);
    }

    if (bugs[6].mouse.pressing()){
      sCol.play();
      bugFound[6] = true;
      this.sceneManager.showScene(bug6);
    }

    if (bugs[7].mouse.pressing()){
      sCol.play();
      bugFound[7] = true;
      this.sceneManager.showScene(bug7);
    }

    if (bugs[8].mouse.pressing()){
      sCol.play();
      bugFound[8] = true;
      this.sceneManager.showScene(bug8);
    }

    if (bugs[9].mouse.pressing()){
      sCol.play();
      bugFound[9] = true;
      this.sceneManager.showScene(bug9);
    }
  }

  this.mousePressed = function(){

  }
}

function help(){

  this.setup = function(){
    console.log("setup for help");
    image(bgH, 0, 0);
  }

  this.enter = function(){
    console.log("entering help screen");

    if (sTitle.isPlaying()){
      sTitle.stop();
    }
    if(!sMain.isPlaying()){
      sMain.play();
    }
  }

  this.draw = function(){
    image(bgH, 0, 0);
    push();

    fill(255);
    noStroke();
    rect(200, 30, 990, 200, 20);
    fill(255, 225);
    rect(200, 270, 990, 70, 20);
    rect(200, 370, 990, 70, 20);
    rect(200, 470, 990, 70, 20);
    rect(200, 570, 990, 120, 20);
    rect(200, 720, 990, 70, 20);

    fill(0);
    textAlign(LEFT, TOP);
    textSize(45);
    text(tHelp[0], 230, 70, 990, 590);
    textSize(33);
    text(tHelp[1], 230, 285, 990, 100);
    text(tHelp[2], 230, 385, 990, 100);
    text(tHelp[3], 230, 485, 990, 100);
    text(tHelp[4], 230, 585, 930, 100);
    text(tHelp[5], 230, 735, 990, 100);
    pop();

    btnTitle = checkButtonPress("Title", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnTitle){
      sClick.play();
      this.sceneManager.showScene(title);
    }

    btnMain = checkButtonPress("Main", 35, 20, 120, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs();
  }

  this.mousePressed = function(){

  }
}

function bug0(){
  var btnMain = false;

  this.setup = function(){
    console.log("setup for bug1");
  }

  this.enter = function(){
    console.log("entering bug1");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    push();
    //larger sprite
    bugs[0].changeAnimation("zoom");
    bugs[0].position.x = 370;
    bugs[0].position.y = 320;
    bugs[0].scale = 0.7;

    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[0][0], 980, 48);
    textFont(fN);
    textSize(70);
    text(bugInfo[0][1], 980, 136);
    textSize(30);
    text(bugInfo[0][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[0][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(0);
  }

  this.mousePressed = function(){

  }
}

function bug1(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug1");
  }

  this.enter = function(){
    console.log("entering bug1");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    push(); 
    //larger sprite
    bugs[1].changeAnimation("zoom");
    bugs[1].position.x = 370;
    bugs[1].position.y = 320;
    bugs[1].scale = 0.3;

    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[1][0], 980, 48);
    textFont(fN);
    textSize(70);
    text(bugInfo[1][1], 980, 136);
    textSize(30);
    text(bugInfo[1][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[1][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(1);
  }

  this.mousePressed = function(){

  }
}

function bug2(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug2");
  }

  this.enter = function(){
    console.log("entering bug2");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    //larger sprite
    bugs[2].changeAnimation("zoom");
    bugs[2].position.x = 370;
    bugs[2].position.y = 320;
    bugs[2].scale = 0.4;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[2][0], 980, 48);
    textFont(fN);
    textSize(65);
    text(bugInfo[2][1], 980, 136);
    textSize(30);
    text(bugInfo[2][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[2][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }
    hideBugs(2);
  }

  this.mousePressed = function(){

  }
}

function bug3(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug3");
  }

  this.enter = function(){
    console.log("entering bug3");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    //larger sprite
    bugs[3].changeAnimation("zoom");
    bugs[3].position.x = 370;
    bugs[3].position.y = 320;
    bugs[3].scale = 0.5;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[3][0], 980, 48);
    textFont(fN);
    textSize(68);
    text(bugInfo[3][1], 980, 136);
    textSize(30);
    text(bugInfo[3][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(32);
    text(bugInfo[3][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(3);
  }

  this.mousePressed = function(){

  }
}

function bug4(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug4");
  }

  this.enter = function(){
    console.log("entering bug4");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    push();
    //larger sprite
    bugs[4].changeAnimation("zoom");
    bugs[4].position.x = 370;
    bugs[4].position.y = 320;
    bugs[4].scale = 0.45;

    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[4][0], 980, 48);
    textFont(fN);
    textSize(64);
    text(bugInfo[4][1], 980, 136);
    textSize(30);
    text(bugInfo[4][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[4][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(4);
  }

  this.mousePressed = function(){

  }
}

function bug5(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug5");
  }

  this.enter = function(){
    console.log("entering bug5");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    bugs[5].changeAnimation("zoom");
    bugs[5].position.x = 370;
    bugs[5].position.y = 320;
    bugs[5].scale = 0.35;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[5][0], 980, 48);
    textFont(fN);
    textSize(70);
    text(bugInfo[5][1], 980, 136);
    textSize(30);
    text(bugInfo[5][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[5][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(5);
  }

  this.mousePressed = function(){

  }
}

function bug6(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug6");
  }

  this.enter = function(){
    console.log("entering bug6");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    bugs[6].changeAnimation("zoom");
    bugs[6].position.x = 370;
    bugs[6].position.y = 320;
    bugs[6].scale = 0.35;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[6][0], 980, 48);
    textFont(fN);
    textSize(70);
    text(bugInfo[6][1], 980, 136);
    textSize(30);
    text(bugInfo[6][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[6][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(6);
  }

  this.mousePressed = function(){

  }
}

function bug7(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug7");
  }

  this.enter = function(){
    console.log("entering bug7");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    bugs[7].changeAnimation("zoom");
    bugs[7].position.x = 370;
    bugs[7].position.y = 320;
    bugs[7].scale = 0.5;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[7][0], 980, 48);
    textFont(fN);
    textSize(70);
    text(bugInfo[7][1], 980, 136);
    textSize(30);
    text(bugInfo[7][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[7][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(7);
  }

  this.mousePressed = function(){

  }
}

function bug8(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug8");
  }

  this.enter = function(){
    console.log("entering bug8");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    bugs[8].changeAnimation("zoom");
    bugs[8].position.x = 370;
    bugs[8].position.y = 320;
    bugs[8].scale = 0.5;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[8][0], 980, 48);
    textFont(fN);
    textSize(68);
    text(bugInfo[8][1], 980, 136);
    textSize(30)
    text(bugInfo[8][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[8][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(8);
  }

  this.mousePressed = function(){

  }
}

function bug9(){
  var btn = false;

  this.setup = function(){
    console.log("setup for bug9");
  }

  this.enter = function(){
    console.log("entering bug9");
  }

  this.draw = function(){
    image(bgM, 0, 0);

    bugs[9].changeAnimation("zoom");
    bugs[9].position.x = 370;
    bugs[9].position.y = 320;
    bugs[9].scale = 0.4;

    push();
    //label boxes
    fill(255,225);
    noStroke();
    rect(740, 50, 480, 50, 20);
    rect(740, 130, 480, 100, 20);
    rect(740, 260, 480, 500, 20);
    //textbubble!
    ellipse(200, 630, 50);
    ellipse(180, 570, 25);
    ellipse(450, 700, 450, 150);

    //info text
    textFont(fI);
    fill(0);
    textSize(36);
    textAlign(CENTER, TOP);
    text(bugInfo[9][0], 980, 48);
    textFont(fN);
    textSize(70);
    text(bugInfo[9][1], 980, 136);
    textSize(26);
    text(bugInfo[9][2], 450, 685);
    textAlign(LEFT, TOP);
    textSize(34);
    text(bugInfo[9][3], 760, 280, 460, 500);
    pop();

    btnMain = checkButtonPress("Main", 35, 20, 20, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      sClick.play();
      this.sceneManager.showScene(main);
    }

    hideBugs(9);
  }

  this.mousePressed = function(){

  }
}

//hides all sprites besides given
function hideBugs(num){
  for (let i = 0; i < 10; i++){
    bugs[i].visible = false;
  }
  if(num != undefined){
    bugs[num].visible = true;
  }
}

//creates button
function checkButtonPress(str,sz,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(sz);
  textAlign(CENTER);
  text (str,boxW/2,sz);

    pop();

    return btnstate;

}
