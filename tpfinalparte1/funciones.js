function controladordeAnimaciones(escenaActual,velocidad,PosX,tamX,tamY){
  let  contador = floor (frameCount/velocidad)%escenaActual.length;
  image(escenaActual[contador], PosX, 300,tamX, tamY);
  
}
