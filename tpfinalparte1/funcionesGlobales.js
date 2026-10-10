
function controladorDeAnimaciones(escenaActual, velocidad, PosX) {
  let  contador = floor (frameCount/velocidad)%escenaActual.length;
  let escala = 2;
  image(escenaActual[contador], PosX, 348, escenaActual[contador].width * escala, escenaActual[contador].height * escala); //calcula el ancho y alto de cada escena para que se pueda modificar el tamaño sin cambiar la escala
}

function controladordeDialogos(numerodeDialogo, perfilPersonaje, dialogo,posX) {
  if (dialogoActual == numerodeDialogo) {
    fill(0, 0, 0, 150);
    rect(0, 350, width, 100);
    image(perfilPersonaje, 10, 360, 80, 80);

    textAlign(CENTER);
    textFont(fuenteConsola);
    textSize(20);
    fill(255);
    text(dialogo, posX , 410);
  }
}

function reproducirSonido (sonidoActivo,sonidoActual){
if(sonidoActivo == false) {
sonidoActual.setVolume(0.5);  
sonidoActual.play();
sonidoActivo = true;
} 
}
  
