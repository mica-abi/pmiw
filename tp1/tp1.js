let escenaActual;
let fondoAnimacion;
let fondofinal;
let luz;
let animacionIsaac0 = [];
let animacionIsaac1 = [];
let isaacVolando = [];
let transformacionIsaac = [];
let luzdelSotano = [];
let estadoAnimacion = 0;
let tiempo = 1;
let frames4 =8;
let frames3 =5;
let frames2 = 3;
let frames1 = 13;
let frames0 =3;
let contador;
let PosX = 0;
let PosY =0;
let pintar =0;
function preload() {
  fondoAnimacion = loadImage ('images/fondo.png');
  luz = loadImage('images/luz_7.png');
  logo = loadImage('images/logo.png');
  fondofinal = loadImage('images/fondo_final.png');
  //isaac caminando aqui
  for (let j = 0; j< frames0; j++) {
    animacionIsaac0.push(loadImage('images/isaac_caminando_'+j+'.png'))
  }
  //isaac llorando aqui
  for (let i = 0; i< frames1; i++)
  {
    animacionIsaac1.push(loadImage('images/isaac_'+i+'.png'))
  }
  //isaac se transforma en angel aqui
  for (let k = 0; k< frames2; k++)
  {
    isaacVolando.push(loadImage('images/isaacVolando_'+k+'.png'))
  }
  for (let h = 0; h< frames3; h++)
  {
    transformacionIsaac.push(loadImage('images/transformacion_'+h+'.png'))
  }
  for (let l = 0; l< frames4; l++)
  {
    luzdelSotano.push(loadImage('images/luz_'+l+'.png'))
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
  else if (tiempo == 470 ){
    estadoAnimacion = 2;
  } else if (tiempo == 481){
  estadoAnimacion = 3;
  } else if (tiempo == 570){
  estadoAnimacion = 4;
  }else if (tiempo == 595){
  estadoAnimacion = 5;
  } else if (tiempo == 780){
  estadoAnimacion = 0
  tiempo = 0
  PosX =0
  PosY = 0
  pintar = 0
  }
   image (fondoAnimacion, width/2, height/2, width, height);
   
  if (estadoAnimacion == 0 ) {
   controladordeAnimaciones(animacionIsaac0,6,PosX,50,50);
   PosX ++;
  }
  else if (estadoAnimacion == 1) {
     controladordeAnimaciones(animacionIsaac1,6,400,50,50);
  }
  else if (estadoAnimacion == 2){
    otrasAnimaciones(luzdelSotano,400,100,100,450);
    controladordeAnimaciones(isaacVolando,6,400,75,75);
  } 
  else if (estadoAnimacion == 3){
   
    image (luz, 400,100,100,450);
  
   controladordeAnimaciones(isaacVolando,10,400,75,75);
  }   else if (estadoAnimacion == 4){
    image (fondoAnimacion, width/2, height/2, width, height);
   image (luz, 400,100,100,450);
  
   controladordeAnimaciones(transformacionIsaac,6,400,50,75);
  } else if (estadoAnimacion == 5){
    pintar++;
    PosY++;
    tint(pintar);
    image(fondofinal,width/2,height/2,width,height);
    image(logo,width/2,PosY,500,100);
    if (PosY >= 100) {
    PosY= PosY -1;
    }
  } 
  
  
  
}
