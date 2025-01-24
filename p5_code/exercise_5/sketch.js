/*
Exercise 5: Data & GridArray Mapping
Daria Orlova
*/

//my pixel art
var flowers = [
  [0,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [0,0,1,1,1, 1,1,1,2,0, 2,1,1,1,1, 1,1,1,1,1],
  [1,1,1,1,1, 1,1,1,0,0, 0,1,1,1,1, 1,1,0,0,0],
  [1,1,1,1,1, 1,1,1,2,0, 2,1,1,1,1, 1,0,0,0,0],
  [1,1,1,1,3, 3,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [1,1,1,3,3, 3,3,3,1,1, 1,1,1,1,1, 1,1,1,1,1],
  [1,1,3,3,3, 3,3,1,1,1, 1,1,1,1,3, 3,1,1,1,1],
  [1,1,1,3,3, 3,3,3,1,1, 1,1,3,3,3, 3,3,1,1,1],
  [4,4,4,3,5, 5,1,1,1,1, 1,3,3,6,6, 3,3,4,4,4],
  [4,4,4,4,6, 4,4,1,1,1, 1,3,3,3,3, 3,4,4,4,4],
  [4,4,4,6,5, 4,4,4,1,1, 4,4,3,5,5, 4,4,4,4,4],
  [4,4,4,4,5, 5,4,4,4,4, 4,4,4,4,5, 4,4,4,4,4],
  [7,7,7,7,7, 5,6,4,4,4, 4,4,4,4,5, 4,4,4,4,4],
  [7,7,7,7,6, 5,7,7,7,7, 7,7,4,4,5, 4,4,4,4,4],
  [7,7,7,7,7, 5,7,7,7,7, 7,7,7,7,5, 7,7,7,7,7],
  [7,7,7,7,7, 7,7,7,7,7, 7,5,5,7,5, 7,5,5,7,7],
  [7,7,5,7,7, 7,7,7,7,7, 7,7,5,7,5, 5,7,7,7,7],
  [7,5,7,7,7, 7,7,5,7,5, 7,7,7,5,5, 5,7,7,7,7],
  [7,7,7,7,7, 7,7,7,5,7, 7,7,7,7,7, 7,7,7,7,7],
  [7,7,7,7,7, 7,7,7,7,7, 7,7,7,7,7, 7,7,7,7,7]
];

//my text array
var land = [
  ["blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "grass", "grass",  "grass", "blue orchid", "blue orchid", "blue orchid", "blue orchid"],
  ["lily", "lily", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "dandelion", "dandelion",  "blue orchid", "blue orchid", "grass", "grass", "grass",  "grass", "grass", "blue orchid", "blue orchid", "blue orchid"],
  ["lily", "lily", "lily", "lily", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "dandelion", "dandelion",  "blue orchid", "blue orchid", "grass", "grass", "grass",  "grass", "grass", "blue orchid", "blue orchid", "blue orchid"],
  ["blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "dirt",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "lily"],
  ["blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "dirt",  "blue orchid", "blue orchid", "blue orchid", "blue orchid", "blue orchid"],
  ["blue orchid", "blue orchid", "blue orchid", "emerald", "emerald",  "emerald", "emerald", "emerald", "blue orchid", "blue orchid",  "blue orchid", "blue orchid", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass"],
  ["blue orchid", "emerald", "emerald", "emerald", "emerald",  "emerald", "emerald", "emerald", "emerald", "grass",  "grass", "cornflower", "cornflower", "cornflower", "cornflower",  "grass", "grass", "grass", "grass", "grass"],
  ["emerald", "emerald", "emerald", "emerald", "emerald",  "emerald", "emerald", "emerald", "grass", "grass",  "blue orchid", "cornflower", "cornflower", "grass", "grass",  "grass", "grass", "dirt", "dirt", "dirt"],
  ["emerald", "emerald", "grass", "emerald", "emerald",  "emerald", "emerald", "grass", "grass", "blue orchid",  "cornflower", "cornflower", "grass", "dirt", "dirt",  "dirt", "dirt", "dirt", "dirt", "dirt"],
  ["emerald", "grass", "grass", "grass", "emerald",  "emerald", "emerald", "grass", "dirt", "cornflower",  "cornflower", "dirt", "dirt", "dirt", "dirt",  "dirt", "dirt", "dirt", "stone", "stone"],
  ["emerald", "emerald", "dirt", "emerald", "emerald",  "emerald", "emerald", "emerald", "dirt", "cornflower",  "cornflower", "stone", "stone", "dirt", "stone",  "stone", "stone", "stone", "stone", "cobble"],
  ["grass", "grass", "dirt", "emerald", "emerald",  "emerald", "emerald", "emerald", "stone", "cornflower",  "cornflower", "stone", "stone", "stone", "stone",  "stone", "stone", "stone", "stone", "stone"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "stone", "cornflower",  "cornflower", "cobble", "stone", "stone", "stone",  "stone", "cobble", "cobble", "cobble", "stone"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "stone", "blue orchid",  "cornflower", "stone", "stone", "stone", "stone",  "cobble", "cobble", "ink", "ink", "cobble"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "stone", "blue orchid",  "cornflower", "stone", "stone", "stone", "cobble",  "cobble", "ink", "ink", "ink", "ink"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "grass", "blue orchid", "cornflower", "cornflower",  "cornflower", "stone", "stone", "cobble", "cobble",  "ink", "ink", "ink", "ink", "ink"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "blue orchid", "cornflower", "blue orchid", "cornflower",  "stone", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass"],
  ["cornflower", "cornflower", "cornflower", "cornflower", "cornflower",  "cornflower", "cornflower", "cornflower", "blue orchid", "stone",  "grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass"],
  ["grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass",  "grass", "grass", "grass", "grass", "grass"]
];

var landList = ["lily", "dandelion", "blue orchid", "cornflower", "emerald", "grass", "dirt", "stone", "cobble", "ink"];

//kyra's pixel art
var creeper = [
  [2,2,2,0,0, 0,4,4,0,0, 0,0,0,0,0, 5,5,0,3,3], 
  [2,2,2,0,0, 0,4,4,0,0, 0,0,0,0,0, 5,5,0,3,3], 
  [2,2,2,0,0, 0,0,0,0,0, 0,0,2,2,0, 0,0,0,0,0], 
  [0,0,0,1,1, 1,1,1,0,0, 3,3,1,1,1, 1,1,0,0,0], 
  [4,4,0,1,6, 6,6,1,0,0, 3,3,1,6,6, 6,1,0,0,0], 
  [4,4,0,1,6, 7,6,1,0,0, 0,0,1,6,7, 6,1,0,2,2], 
  [0,0,0,1,6, 6,6,1,2,2, 0,0,1,6,6, 6,1,0,2,2],
  [0,0,0,1,1, 1,1,1,2,2, 0,0,1,1,1, 1,1,0,0,0],
  [0,0,0,0,0, 0,3,3,1,1, 1,1,0,0,0, 0,0,0,0,0],
  [2,2,0,0,5, 0,3,3,1,1, 1,1,0,0,2, 2,0,4,4,0],
  [2,2,0,0,5, 0,0,0,1,1, 1,1,0,0,2, 2,0,4,4,0],
  [0,0,0,0,1, 1,1,1,1,1, 1,1,1,1,1, 1,0,0,0,0],
  [0,0,0,0,1, 1,1,1,1,1, 1,1,1,1,1, 1,0,0,3,3],
  [0,0,3,3,1, 1,1,1,1,1, 1,1,1,1,1, 1,0,0,3,3],
  [0,0,3,3,1, 1,1,1,0,0, 2,2,1,1,1, 1,0,0,0,0],
  [0,0,0,0,1, 1,1,1,0,0, 2,2,1,1,1, 1,0,0,0,0],
  [0,0,0,0,1, 1,1,1,0,0, 0,0,1,1,1, 1,0,0,0,0],
  [0,0,0,2,2, 0,0,0,0,0, 0,0,5,5,0, 0,0,2,2,2],
  [5,5,0,2,2, 0,0,0,3,3, 0,0,5,5,0, 0,0,2,2,2],
  [5,5,0,0,0, 0,0,0,3,3, 0,0,0,0,0, 0,0,2,2,2]
];

//alisha's pixel art
var pig = [
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0], 
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0], 
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0], 
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [4,4,4,4,3, 3,0,0,0,0, 0,0,0,0,3, 3,4,4,4,4],
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
  [0,1,1,1,1, 0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,0],
  [0,1,1,1,1, 5,5,5,5,5, 5,5,5,5,5, 1,1,1,1,0],
  [0,0,0,0,0, 5,2,2,2,5, 5,2,2,2,5, 0,0,0,0,0],
  [0,0,0,0,0, 5,2,2,2,5, 5,2,2,2,5, 0,0,0,0,0],
  [0,0,0,0,0, 5,2,2,2,5, 5,2,2,2,5, 0,0,0,0,0],
  [0,0,0,0,0, 5,5,5,5,5, 5,5,5,5,5, 0,0,0,0,0],
  [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0]
];

//minh's pixel art
var fox = [
  [2,2,2,2,2, 1,1,1,1,1, 1,1,1,1,1, 2,2,2,2,2],
  [2,2,2,2,2, 1,1,1,1,1, 1,1,1,1,1, 2,2,2,2,2],
  [2,2,8,8,8, 4,5,5,5,5, 5,5,5,5,5, 8,8,8,2,2],
  [2,2,8,8,8, 6,6,6,6,6, 6,6,6,6,6, 8,8,8,2,2],
  [2,2,8,8,8, 6,6,6,6,6, 6,6,6,6,6, 8,8,8,2,2],
  [8,7,7,6,6, 6,6,6,6,6, 6,6,6,6,6, 6,6,7,7,7],
  [7,7,7,6,6, 6,6,6,6,6, 6,6,6,6,6, 6,6,7,7,7],
  [7,7,7,6,6, 6,6,6,6,6, 6,6,6,6,6, 6,6,7,7,7],
  [7,7,7,6,6, 6,6,6,6,6, 6,6,6,6,6, 6,6,7,7,7],
  [7,7,7,6,6, 6,6,6,6,6, 6,6,6,6,6, 6,6,7,7,7],
  [7,7,7,7,7, 6,6,6,6,6, 6,6,6,6,6, 7,7,7,7,7],
  [7,7,7,7,7, 6,6,6,6,6, 6,6,6,6,6, 7,7,7,7,7],
  [7,7,7,8,8, 7,7,7,6,6, 6,6,7,7,7, 8,8,7,7,7],
  [1,1,2,2,2, 8,7,7,6,6, 6,6,7,7,7, 2,2,2,1,1],
  [1,1,2,2,3, 8,7,7,6,6, 6,6,7,7,7, 2,3,2,1,1],
  [7,7,7,7,7, 2,2,8,1,1, 1,1,7,2,2, 8,7,7,7,7],
  [7,7,7,7,7, 2,3,8,1,1, 1,1,7,2,3, 8,7,7,7,7],
  [8,7,8,8,8, 2,3,2,8,8, 7,8,8,2,3, 8,8,8,8,7],
  [2,8,2,2,2, 2,3,2,2,2, 2,2,2,3,3, 2,2,2,2,8],
  [2,2,2,2,2, 2,3,3,3,3, 2,3,3,3,3, 2,2,2,2,2]
];

//original color palettes for each map
let paletteFlower = [
  [255, 255, 255],
  [201, 244, 255],
  [255, 247, 186],
  [219, 56, 20],
  [115, 191, 147],
  [91, 143, 73],
  [33, 25, 8],
  [39, 69, 14]
];

let paletteLand = [
  [255, 255, 255],
  [252, 255, 201],
  [207, 243, 255],
  [49, 119, 204],
  [94, 167, 141],
  [43, 96, 15],
  [112, 90, 34],
  [139, 139, 139],
  [99, 99, 99],
  [0, 0, 0]
];

let paletteCreeper = [
  [50, 201, 44],
  [0, 0, 0],
  [126, 235, 122],
  [51, 135, 49],
  [179, 255, 186],
  [22, 54, 25],
  [255, 0, 0],
  [255, 255, 255]
];

let palettePig = [
  [255, 179, 198],
  [255, 195, 210],
  [200, 83, 112],
  [255, 255, 255],
  [0, 0, 0],
  [237, 159, 178]
];

let paletteFox = [
  [0, 0, 0],
  [6, 4, 14],
  [231, 217, 211],
  [249, 244, 244],
  [231, 143, 65],
  [226, 124, 33],
  [204, 105, 32],
  [176, 81, 34],
  [180, 143, 131]
]; 

let currentPage = 0;
let images = [];
let t = '';
let can, f, img;

function preload(){
  f = loadFont("assets/Minecraft.ttf");
  img = loadImage("assets/img1.png");
  for (let i = 0; i < 12; i++){
    images[i] = loadImage("assets/img" + (i+1) + ".png");
  }
}

function setup(){
  can = createCanvas(1000,1000);
  noStroke();
  ellipseMode(CORNER);
  textFont(f);
  textSize(40);
}

function draw(){
  background(40);

  //page Select

  if (currentPage == 1){
//simple arranged scene filled with rectangle-based pizel art
    textMaptoPalette(land, width/2, height/2, 5, 0, 'r', 255);
    numMapToPalette(creeper, paletteCreeper, 840, 770, 0.5, -10, 'r', 255);
    numMapToPalette(pig, palettePig, 700, 230, 0.3, 10, 'r', 400);
    numMapToPalette(pig, palettePig, 800, 230, 0.28, -5, 'r', 400);
    numMapToPalette(fox, paletteFox, 230, 650, 0.7, 3, 'r', 255);
    numMapToPalette(fox, paletteFox, 90, 730, 0.5, -9, 'r', 255);
    numMapToPalette(creeper, paletteCreeper, 270, 234, 0.18, -2, 'r', 60);
    numMapToPalette(pig, palettePig, 100, 284, 0.18, 7, 'r', 60);
    numMapToPalette(flowers, paletteFlower, 920, 235, 0.6, 0, 'r', 255);
    numMapToPalette(flowers, paletteFlower, 700, 885, 0.6, 0, 'r', 255);

    textAlign(LEFT);
    textSize(40);
    fill(255, 180);
    rect(40, 35, 540, 50, 10);
    rect(40, 98, 413, 55, 10);
    fill(20, 240);
    t = "Our theme was 'Minecraft'.";
    text(t, 50, 75);
    t = "Here, I have arranged a small scene with simple pixel art from the data maps.";
    textSize(20);
    text(t, 50, 120, 440);

  } else if (currentPage == 2){
//collage of switch color palettes and different shapes
    numMapToPalette(flowers, paletteLand, width/2, height/2, 5, 0, 'c', 120);
    textMaptoPalette(land, width/2, height/2, 5, 180, 's', 140);
    numMapToPalette(pig, paletteFox, 300, 600, 0.7, 60, 'r', 255);
    numMapToPalette(creeper, paletteFlower, 800, 800, 1.5, 40, 'c', 230);
    numMapToPalette(fox, paletteFlower, 250, 200, 1.3, -40, 'c', 230);
    numMapToPalette(creeper, palettePig, 600, 500, 3, 140, 's', 200);
    textMaptoPalette(land, 200, 800, 2, -100, 's', 140);
    numMapToPalette(pig, paletteCreeper, 800, 300, 1.7, 170, 'c', 240);

    textAlign(LEFT);
    textSize(20);
    fill(255, 180);
    rect(60, 390, 415, 120, 10);
    fill(0, 240);
    t = "Here I messed around with switching the color palettes between each of the mapped images and shapes that they are composed of.";
    text(t, 75, 420, 400);

  } else if (currentPage == 3){
//collage of monochromatic and image mapping
  monochromeMapNum(fox, paletteLand, width/2, height/2, 5, 90, 'r', 230);
  monochromeMapNum(flowers, paletteFlower, 300, 600, 2, -50, 's', 255);
  imageMapNum(pig, 500, 200, 1.3, 33, 255);
  imageMapNum(creeper, 800, 500, 3, 150, 120);
  imageMapText(land, width/2, height/2, 7, -120, 50);
  monochromeMapNum(pig, paletteFox, 200, 100, 1, -10, 'c', 120);
  monochromeMapText(land, paletteCreeper, 700, 300, 1.8, -70, 'c', 200);
  imageMapNum(flowers, 550, 800, 3, 270, 110);

  textAlign(LEFT);
  textSize(20);
  fill(255, 180);
  rect(586, 722, 312, 142, 10);
  fill(0, 240);
  t = "I also created 4 more functions that manipulate the data maps to display as monochrome or image-based grids.";
  text(t, 600, 750, 300);

  } else {
//HOME PAGE / pg 0
    numMapRaw(flowers, paletteFlower, 300, 470, 1.3, 0, 255);
    textMapRaw(land, 660, 425, 0.88, 0, 255);
    numMapRaw(creeper, paletteCreeper, 200, 825, 1.3, 0, 255);
    numMapRaw(pig, palettePig, 500, 825, 1.3, 0, 255);
    numMapRaw(fox, paletteFox, 800, 825, 1.3, 0, 255);

    textAlign(CENTER);
    textSize(30);
    fill(180);
    t = "My Data-based Map";
    text(t, 300, 320);
    t = "My Text-based Map";
    text(t, 700, 320);
    t = "Kyra's Creeper";
    text(t, 200, 675);
    t = "Alisha's Pig";
    text(t, 500, 675);
    t = "Minh's Fox";
    text(t, 800, 675);

    textSize(40);
    fill(220);
    t = "My group members were Kyra, Alisha, and Minh.\n \nThese are the original maps:";
    text(t, 150, 100, 700);
  }
}

//mapping Number Array to given Palette and displaying data
function numMapRaw(arr, pal, lx, ly, sc, rot, fade){
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      if (arr[i][j] < pal.length){
        let c = color(pal[arr[i][j]]);
        c.setAlpha(fade);
        fill(c);
      } else {
        fill(0, fade);
      }

      textSize(sc+10);
      text(arr[i][j].toString(), (j * 10)-100, (i * 10)-100);
    }
  }
  pop();
}

//mapping Text Array to given Palette and displaying data
function textMapRaw(arr, lx, ly, sc, rot, fade){
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      let n = arr[i][j];
      if (n == "lily"){
        fill(255, 255, 255, fade);
      } else if (n == "dandelion"){
        fill(252, 255, 201, fade);
      } else if (n == "blue orchid"){
        fill(207, 243, 255, fade);
      } else if (n == "cornflower"){
        fill(49, 119, 204, fade);
      } else if (n == "emerald"){
        fill(94, 167, 141, fade);
      } else if (n == "grass"){
        fill(43, 96, 15, fade);
      } else if (n == "dirt"){
        fill(112, 90, 34, fade);
      } else if (n == "stone"){
        fill(139, 139, 139, fade);
      } else if (n == "cobble"){
        fill(99, 99, 99, fade);
      } else {
        fill(0, 0, 0, fade);
      }

      textSize(5);
      text(arr[i][j], (j * 15)-100, (i * 15)-100);
    }
  }
  pop();
}

//mapping Number Array to given Palette
function numMapToPalette(arr, pal, lx, ly, sc, rot, shape, fade){
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      if (arr[i][j] < pal.length){
        let c = color(pal[arr[i][j]]);
        c.setAlpha(fade);
        fill(c);
      } else {
        fill(0, fade);
      }

      selectShape(shape, j , i);
    }
  }
  pop();
}

//mapping Text Array to set Palette
function textMaptoPalette(arr, lx, ly, sc, rot, shape, fade){
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      let n = arr[i][j];
      if (n == "lily"){
        fill(255, 255, 255, fade);
      } else if (n == "dandelion"){
        fill(252, 255, 201, fade);
      } else if (n == "blue orchid"){
        fill(207, 243, 255, fade);
      } else if (n == "cornflower"){
        fill(49, 119, 204, fade);
      } else if (n == "emerald"){
        fill(94, 167, 141, fade);
      } else if (n == "grass"){
        fill(43, 96, 15, fade);
      } else if (n == "dirt"){
        fill(112, 90, 34, fade);
      } else if (n == "stone"){
        fill(139, 139, 139, fade);
      } else if (n == "cobble"){
        fill(99, 99, 99, fade);
      } else {
        fill(0, 0, 0, fade);
      }

      selectShape(shape, j , i);
    }
  }
  pop();
}

//monochrome mapping for Number Arrays
function monochromeMapNum(arr, pal, lx, ly, sc, rot, shape, fade){
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      if (arr[i][j] < pal.length){
        let c = color(pal[arr[i][j]][0]*0.3 + pal[arr[i][j]][1]*0.59 + pal[arr[i][j]][2]*0.11);
        c.setAlpha(fade);
        fill(c);
      } else {
        fill(0, fade);
      }

      selectShape(shape, j, i);
    }
  }

  pop();
}

//monochrome mapping for Text Array
function monochromeMapText(arr, pal, lx, ly, sc, rot, shape, fade){
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      let n = checkText(arr[i][j], landList);
      if (n < pal.length){
        let c = color(pal[n][0]*0.3 + pal[n][1]*0.59 + pal[n][2]*0.11);
        c.setAlpha(fade);
        fill(c);
      } else {
        fill(0);
      }

      selectShape(shape, j, i);
    }
  }

  pop();
}

//mapping Number Array to Images
function imageMapNum(arr, lx, ly, sc, rot, fade){
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      
      tint(255, fade);
      image(images[arr[i][j]], (j * 10)-100, (i * 10)-100, 10, 10);
    }
  }
  pop();
}

//mapping Text Array to Images
function imageMapText(arr, lx, ly, sc, rot, fade){
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){

      let n = arr[i][j];
      if (n == "lily"){
        img = images[0];
      } else if (n == "dandelion"){
        img = images[1];
      } else if (n == "blue orchid"){
        img = images[2];
      } else if (n == "cornflower"){
        img = images[3];
      } else if (n == "emerald"){
        img = images[4];
      } else if (n == "grass"){
        img = images[5];
      } else if (n == "dirt"){
        img = images[6];
      } else if (n == "stone"){
        img = images[7];
      } else if (n == "cobble"){
        img = images[8];
      } else {
        img = images[9];
      }

      tint(255, fade);
      image(img, (j * 10)-100, (i * 10)-100, 10, 10);
    }
  }
  pop();
}


//match text to color palette
function checkText(t, list){
  for(let i = 0; i < list.length; i++){
    if (t == list[i]){
      return i;
    }
  }
}

//determining shape generated in mapping grid
function selectShape(shape, x, y){
  if(shape == 'c'){
    ellipse((x * 10)-100, (y * 10)-100, 11, 11);
  } else if (shape == 'r'){
    rect((x * 10)-100, (y * 10)-100, 11, 11);
  } else if (shape == 's'){
    star((x * 10)-100, (y * 10)-100, 7, 3, 5)
  }
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

//Page Selection and Key Functionality
function keyPressed(){
  if ( key == '1' ) { 
    console.log("Page 1");
    currentPage = 1;

  } else if ( key == '2' ) { 
    console.log("Page 2");
    currentPage = 2;

  } else if ( key == '3' ) { 
    console.log("Page 3");
    currentPage = 3;   
  } else if ( key == '4' ) { 
    console.log("Page 4");
    currentPage = 4;   
  } else if (key == 's' || key == 'S') {
    //console.log("Saved canvas.");
    //saveCanvas(can, 'untitled', '.png');
  } else {
    console.log("Home Page");
    currentPage = 0;
  }
}
