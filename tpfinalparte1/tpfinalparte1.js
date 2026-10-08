let framesTotales = 3;
let tortugaActual = 0;
let pantallaActual = 30;
let dialogoActual = 0;

let dentroDelBotonSiguiente = false;
let dentroDelBotonSplinter = false;
let dentroDelBotonPelearSolos = false;
let dentroDelBotonEvadir = false;
let dentroDelBotonBuscarOtrosCaminos = false;
let dentroDelBotonSeguirDerecho = false;
let dentroDelBotonSeguirAKarai = false;
let dentroDelBotonRechazar = false;
let dentroDelBotonCorrer = false;
let dentroDelBotonQuedarse = false;

let dentroDelCaminoQueso = false;
let dentroDelCaminoSalame = false;
let dentroDelCaminoAnana = false;
let dentroDelCaminoAgua = false;
let dentroDeEscalera1 = false;
let dentroDeEscalera2 = false;
let dentroDeLocal = false;
let dentroDeCallejon = false;

let leonardoCaminando = [];
let donatelloCaminando = [];
let raphaelCaminando = [];
let mikeyCaminando = [];

let posXLeonardo = 0;
let posXDonatello = 0;
let posXRaphael = 0;
let posXMikey = 0;
let xPiso = 0;
let xFondo = 0;
let yLogo = 0;
let xAutoras = 1500;
let xCreadores = 3000;
let xMancha1 = 1500;
let xMancha2 = 3000;


function preload() {
preL();
  
}

async function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
}


function draw() {
background(200);
mostrarPantallas();

} 
