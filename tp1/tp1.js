let tiempo = 1;
let fondoAnimacion;
let animacionIsaac0 = [];
let animacionIsaac1 = [];
let TransformacionIsaac = [];
let estadoAnimacion = 0;
let frames2 = 8;
let frames1 = 11;
let frames0 =3;
let contador2;
let contador1;
let contador;
let PosX = 0;

function preload() {
  fondoAnimacion = loadImage ('images/fondo.png');
  //isaac caminando aqui
  for (let j = 0; j< frames0; j++) {
    animacionIsaac0.push(loadImage('images/isaac_caminando_'+j+'.png'))
  }
  //isaac llorando aqui
  for (let i = 0; i< frames1; i++)
  {
    animacionIsaac1.push(loadImage('images/isaac_'+i+'.png'))
  }
  for (let k = 0; k< frames2; k++)
  {
    TransformacionIsaac.push(loadImage('images/transformacion_'+k+'.png'))
  }
}



async function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  tiempo ++;
  print(tiempo);
  if (tiempo == 400) {
    estadoAnimacion = 1;
  }
  else if (tiempo == 490 ){
    estadoAnimacion = 2;
  }
  image (fondoAnimacion, width/2, height/2, width, height);
  
  
  
  
  
  if (estadoAnimacion == 0 ) {
   animacion1();
  }
  if (estadoAnimacion == 1) {
    image (fondoAnimacion, width/2, height/2, width, height);
    contador1 = floor(frameCount/6)% animacionIsaac1.length;
    image(animacionIsaac1[contador1], 400, 300, 50, 50);
  }
  if (estadoAnimacion == 2){
    image (fondoAnimacion, width/2, height/2, width, height);
    contador2 = floor(frameCount/16)% TransformacionIsaac.length;
    image(TransformacionIsaac[contador2], 400, 300, 80, 50);
  }
}
