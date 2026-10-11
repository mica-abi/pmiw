function controladordeDialogos(numerodeDialogo, perfilPersonaje, dialogo, posX, posY) {
  if (dialogoActual == numerodeDialogo) {
    fill(0, 0, 0, 150);
    rect(0, 350, width, 100);
    image(perfilPersonaje, 10, 360, 80, 80);

    textAlign(CENTER);
    textFont(fuenteConsola);
    textSize(20);
    fill(255);
    text(dialogo, posX , posY);
  }
}

function reproducirSonido (sonidoActivo,sonidoActual){
if(sonidoActivo == false) {
sonidoActual.setVolume(0.5);  
sonidoActual.play();
} 
}
  
