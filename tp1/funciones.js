function controladordeAnimaciones(escenaActual,velocidad,PosX,tamX,tamY){
  let  contador = floor (frameCount/velocidad)%escenaActual.length;
  
  image(escenaActual[contador], PosX, 300,tamX, tamY);
}
function otrasAnimaciones(escenaActual,PosX,PosY,TamX,TamY){
  let  contador = floor (frameCount/6)%escenaActual.length;
  image(escenaActual[contador], PosX,PosY, TamX, TamY);
}
