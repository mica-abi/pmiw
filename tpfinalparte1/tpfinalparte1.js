let escenaActual;
let frames0 = 3;
let tortugaCaminando = [];
let contador;
let PosX = 0;

function preload() {


  for (let j = 0; j< frames0; j++) {
    tortugaCaminando.push(loadImage('images/donatello_'+j+'.png'))
  }
}
async function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}


function draw() {
background(200);
  controladordeAnimaciones(tortugaCaminando, 6, PosX, 20,46 );
  PosX ++;
}
