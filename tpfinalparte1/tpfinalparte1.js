let framesTotales = 3;
let tortugaActual = 0;
let pantallaActual = 50;
let dialogoActual = 0;

//dialogos 
let posX;
let perfilPersonaje;
let numerodeDialogo;
let dialogo;
let dialogo1 ="¿En dónde está Mikey?";
let dialogo2 ="Vamos a buscarlo.";
let dialogo4 ="A Mikey le gusta la pizza agridulce.";
let dialogo6 ="¡Ratas rabiosas!, ¿Qué hacemos?";
let dialogo8 ="¿De verdad no se animaron a combatir a esas ratitas?\nNi que fuera yo a quien se están enfrentando.";
let dialogo11 ="Estoy exhausto.";
let dialogo13 ="Jaja... Les pasa por descuidados.";
let dialogo15 ="Si queremos pasar desapercibidos tenemos que\ncambiar de recorrido.";
let dialogo18 ="¿No les parece que un rastro de salame es muy...\nPredecible?";
let dialogo20 ="A lo mejor podemos cambiar de dirección.";
let dialogo24 ="Se oye agua acá a la derecha.";
let dialogo25 ="Y en la escalera se escuchan las calles de la ciudad.";
let dialogo29 ="¡Corran!";
let dialogo31 ="¡¿Por qué siempre tengo que andar\nsalvándolos yo?!";
let dialogo33 ="Mikey no se atrevería a ir a comer sin invitarnos...";
let dialogo37 ="¿Acaso la rata no les enseñó que no deben\nentrar en callejones oscuros?";
let dialogo39 ="¿Buscan a Michelangelo?, puedo llevarlos hasta él.";
let dialogo40 ="¿Realmente podemos confiar en ella?";
let dialogo42 ="Perdón, todavía no podemos fiarnos de vos.";
let dialogo44 ="Tenemos que seguir.";
let dialogo47 ="*Susurro* Nos trajo hasta el maestro Splinter...";
let dialogo48 ="*Susurro* Les dije, nos engañó.";


//botones
let dentroDelBotonInicio = false;
let dentroDelBotonReiniciar = false;
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

//sonido
let sonidoActual;
let sonidoActivo;
let sonidoCreditosActivo = false;
let sonidoFinalMaloActivo = false;
let sonidoFinalBuenoActivo = false;
let sonidoFinalDecenteActivo = false;

//animaciones
let leonardoCaminando = [];
let donatelloCaminando = [];
let raphaelCaminando = [];
let mikeyCaminando = [];

//variables para animaciones
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

let sonidoCreditos;
let sonidoFinalBueno;
let sonidoFinalMalo;
let sonidoFinalDecente;


function preload() {
preL();
  
}

async function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
}


function draw() {
background(255,0,0);
mostrarPantallas();


} 
