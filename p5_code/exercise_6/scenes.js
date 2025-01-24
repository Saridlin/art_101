//Scenes

/*
- Splash/Title Screen
- Main Screen with isopods
- Journal Entries
- Zoom in for each bug (8)
- Help Screen
*/

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
  ["Armadillidium vulgare", "Pill-bug", "The common pill-bug!", "Also referred to as a potato bug, doodle bug or roly-poly. The most common type of woodlouse to be kept as pet isopods for the various colors hobbyists have cultivated. You might see these guys anywhere outside at this very moment!"],
  ["Armadillidium maculatum", "Zebra", "Not a horse!", "The naturally occurring stripey guy is native to France. It also stands out from the crowd for shedding its exoskeleton in two halves and not one complete piece. Also very popular amongst pet isopod hobbyists for being easy to take care of and interesting appearance."],
  ["Armadillidium vulgare", "Orange Vigor", "Drink some OJ!", "A variant of the common pill-bug known for its deep red to orange color morphs. They actually are born white and slowly develop their deeper burgundy coloration as they shed to adulthood."],
  ["Armadillidium klugii", "Montenegro", "Just clowning around!", "A part of a naturally spotted pill-bug species also referred to as “clown isopods”. These spots are actually an adapted mimicry of the Mediterranean black widow which has many more spots than the American black widow with a red hourglass marking you are probably used to."],
  ["Cubaris sp.", "Rubber Ducky", "Quack!", "Part of a small genus of isopods which often contains undescribed species plopped into this identification. This pill-bug has brought more attention to the pet isopod hobby due to its striking and cute face resembling a rubber ducky! Hence its name."],
  ["Porcellio scaber", "Dalmation", "101 and counting!", "This pill-bug is an example of leucism, a partial loss of pigmentation, in isopod coloration. Unlike in albinism, leucistic isopods still have dark eyes. They almost look like small wiggling chunks of cookies-and-cream ice cream!"],
  ["Porcellio laevis", "Dairy Cow", "Hope I lifted your moo-d!", "Often recommended as a great beginner species for new hobbyists due to their versatility in various environments and utility to reptile keepers as well. Their fun coloration as a piebald species makes them interesting visual additions to terrariums."],
  ["Porcellio scaber", "Orange Koi", "Blub?", "Although all isopods are crustacean, they are land creatures that live best in moist environments. These land koi exhibit a dalmatian-like gene that produces orange patches across the shell that intensify in color as they shed to adulthood."],
  ["Trichorhina tomentosa", "Dwarf White", "A women's world!", "A female-only species that reproduces through parthenogenesis, or cloning themselves. They are very small (2-3 mm!) and are widely used in bioactive terrariums as great compostors or as a food source."],
  ["Porcellio laevis", "Orange", "Orange you glad I'm moo-ving?", "An orange-colored variant of the “dairy-cow” isopod species. Very resilient and exhibit a fun, bright morph. As an aggressive species, they can prey on smaller sized isopods and even amphibians."],
];

//var cam = new Camera();

function title(){
  var btnMain = false;
  var btnHelp = false;

  this.setup = function(){
    console.log("setup for title");
    image(bgT, 0, 0);
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
    //background(255, 0, 0);
    image(bgT, 0, 0);
    push();
    textSize(70);
    textAlign(CENTER, TOP);
    text("I-Spy-Pods!", width/2, height/2-100);
    pop();

    describeElement("Currently on", "Title Screen", LABEL);

    btnMain = checkButtonPress("main", width/2, height/2, 200, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      this.sceneManager.showScene(main);
    }

    btnHelp = checkButtonPress("help", width/2, 600, 200, 50, color(255, 255, 255), color(130), color(50));
    if (btnHelp){
      this.sceneManager.showScene(help);
    }

    hideBugs();

  }

  this.mousePressed = function(){

  }
}

function main(){
  var btnJournal = false;
  var btnHelp = false;

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

    describeElement("Currently on", "Main Screen", LABEL);

    btnJournal = checkButtonPress("Journ", 10, 760, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnJournal){
      this.sceneManager.showScene(journal);
    }

    btnHelp = checkButtonPress("?", 890, 10, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnHelp){
      this.sceneManager.showScene(help);
    }

    if (bugs[0].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug0);
    }

    if (bugs[1].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug1);
    }

    if (bugs[2].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug2);
    }

    if (bugs[3].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug4);
    }

    if (bugs[4].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug4);
    }

    if (bugs[5].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug5);
    }

    if (bugs[6].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug6);
    }

    if (bugs[7].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug7);
    }

    if (bugs[8].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug8);
    }

    if (bugs[9].mouse.pressing()){
      console.log("click!");
      this.sceneManager.showScene(bug9);
    }

  }

  this.mousePressed = function(){

  }
}

function journal(){
  var btnMain = false;
  var btnHelp = false;

  this.setup = function(){
    console.log("setup for journal");
    image(bgJ, 0, 0);
  }

  this.enter = function(){
    console.log("entering journal screen");

    if (sTitle.isPlaying()){
      sTitle.stop();
    }
    if (!sMain.isPlaying()){
      sMain.play();
    }
  }

  this.draw = function(){
    image(bgJ, 0, 0);
    background(255, 150);

    describeElement("Currently on", "Journal Screen", LABEL);

    btnMain = checkButtonPress("main", 10, 10, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
      this.sceneManager.showScene(main);
    }

    btnHelp = checkButtonPress("?", 890, 10, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnHelp){
      this.sceneManager.showScene(help);
    }

    hideBugs();
  }

  this.mousePressed = function(){

  }
}

function help(){
  var btnTitle = false;
  var btnMain = false;

  this.setup = function(){
    console.log("setup for help");
    image(bgH, 0, 0);
  }

  this.enter = function(){
    console.log("entering help screen");

    if (sTitle.isPlaying()){
      sTitle.stop();
    }
    if (!sMain.isPlaying()){
      sMain.play();
    }
  }

  this.draw = function(){
    //background(0, 255, 0);
    image(bgH, 0, 0);

    describeElement("Currently on", "Help Screen", LABEL);

    btnTitle = checkButtonPress("title", 10, 10, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnTitle){
      this.sceneManager.showScene(title);
    }

    btnMain = checkButtonPress("main", 10, 100, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
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

    bugs[0].changeAnimation("zoom");
    bugs[0].position.x = 400;
    bugs[0].position.y = 300;
    bugs[0].scale = 0.7;
  }

  this.enter = function(){
    console.log("entering bug1");
  }

  this.draw = function(){
    background(100, 100, 0);

    describeElement("Currently on", "bug0", LABEL);

    noFill();
    strokeWeight(5);
    stroke(255);
    ellipse(400, 300, 550, 550);

    fill(255);
    noStroke();


    fill(0);

    

    btnMain = checkButtonPress("main", 10, 10, 100, 50, color(255, 255, 255), color(130), color(50));
    if (btnMain){
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
    background(100, 100, 0);

    describeElement("Currently on", "bug1", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug2", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug3", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug4", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug5", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug6", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug7", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug8", LABEL);

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
    background(100, 100, 0);

    describeElement("Currently on", "bug9", LABEL);

    hideBugs(9);
  }

  this.mousePressed = function(){

  }
}

function hideBugs(num){
  //console.log("hiding " + num);
  for (let i = 0; i < 10; i++){
    bugs[i].visible = false;
  }
  if(num != undefined){
    bugs[num].visible = true;
  }
}

function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

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
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}
