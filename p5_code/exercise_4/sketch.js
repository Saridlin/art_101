
let names = ["L4W" , "Z16Z46" , "BL4D3" , "4N7" , "470M" , "74L15M4N" , "P13RC3" , "53N71N3L" , "QU4K3" , "PR1M4 D0NN4" , "BL4NK" , "W0LF" , "F4C3" , "D4N73" , "C47CH-22" , "7R41L" , "N16H7H4WK" , "6H0UL" , "P47R14RCH" , "H4B17" , "7RU57" , "B3H3M07H" , "CH4RM" , "CL0UD" , "M1M3" , "BURN" , "N3UR0515" , "V1510N" , "C0WB0Y" , "1ND13" , "V01D" , "M4N14" , "W17CH3R" , "4L4K4Z4M" , "CH1M3R4" , "K1D"];
let items = ['knife', 'spoon', 'hat', ''];
let roombas;
let amoguses;
let aColor;
let oCount = 15;
let faces;
let kirby;
let centis;

function setup() {
    createCanvas(2000, 1800);
    background(255);

    ellipseMode(CENTER);
    rectMode(CORNER);

    roombas = new Array(60);
    amoguses = new Array(oCount);
    aColor = new Array(oCount);
    faces = new Array(oCount);
    kirby = new Array(oCount);
    centis = new Array(oCount);


    for (let i = 0; i < roombas.length; i++){
      roombas[i] = new DO_Roomba(color(random(255), random(255), random(255)), names[int(random(names.length))], random(1,2.5), items[int(random(items.length))]);
    }

    for (let i = 0; i < oCount; i++){
      amoguses[i] =  new Amogus(random(width), random(height), random(60,120), random(70,130), random(-2,2), random(-2, 2), random(360));
      aColor[i] = {r:random(255), g: random(255), b: random(255)};

      faces[i] = new ibgFace(color(random(255),random(255),random(255)),random(width),random(height),random(-3, 3),random(-3, 3),0,10,0,random(0.3,0.7));

      if (i % 2 == 0){
        kirby[i] = new SmallKirby(color(random(255),random(255),random(255)), random(width), random(height), 150);
      } else {
        kirby[i] = new Kirby(color(random(255), random(255), random(255)), random(width), random(height), 150);
      }

      push();
      centis[i] = new dgCentipede21();
      angleMode(RADIANS);
      pop();
    }
}

function draw() {
    background(255);

    for (let i = 0; i < roombas.length; i++){
      roombas[i].move();
      roombas[i].update();
      roombas[i].rainbow();
      roombas[i].dance();
      roombas[i].toString();
    }

    for (let i = 0; i < amoguses.length; i++){
      amoguses[i].update();
      if (i % 2 == 0){
        amoguses[i].drawSussy(aColor[i]);
      } else {
        amoguses[i].drawSussy2(aColor[i]);
      }
    }

    if (mouseIsPressed){
      for(let i = 0; i < amoguses.length; i++){
        amoguses[i].sus();
      }
    }

    for (let i = 0; i < faces.length; i++){
      faces[i].display();
      faces[i].twitch();
      faces[i].jump();
    }

    for (let i = 0; i < kirby.length; i++){
      kirby[i].display();
      if (i % 2 == 0){
        kirby[i].move();
      }
    }

    for (let i = 0; i < centis.length; i++){
      push();
      centis[i].pair();
      angleMode(RADIANS);
      pop();
    }

}
