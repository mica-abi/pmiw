function mostrarPantallas(){
  if (pantallaActual ==30){
  animacionCreditos();
  }
  else{
 
  push();
  imageMode(CORNER);
  
  if(pantallaActual == 0){
    mostrarPantallaInicial();
}
  
  else if(pantallaActual == 1){
    mostrarPantallaPrimeraDecision();
}

 else if(pantallaActual == 2){
    mostrarPantallaQueso();
}

 else if(pantallaActual == 3){
   mostrarPantallaRatasYSplinter();
}
  
 else if(pantallaActual == 4){
  mostrarPantallaRatasYTortugas1();
} 

else if(pantallaActual == 5){
  mostrarPantallaRatasYTortugas2();
} 

else if(pantallaActual == 6){
  mostrarPantallaRatasYTortugas3();
} 

else if(pantallaActual == 7){
  mostrarPantallaEvadir();
} 

else if(pantallaActual == 8){
  mostrarPantallaSalame1();
} 

else if(pantallaActual == 9){
  mostrarPantallaSalame2();
} 

else if(pantallaActual == 10){
  mostrarPantallaSalame3();
} 

else if(pantallaActual == 11){
  mostrarPantallaSeguirDerecho1();
}

else if(pantallaActual == 12){
  mostrarPantallaSeguirDerecho2();
}

else if(pantallaActual == 13){
  mostrarPantallaCambiarCamino();
}

else if(pantallaActual == 14){
  mostrarPantallaCloacas1();
}

else if(pantallaActual == 15){
  mostrarPantallaCloacas2();
}

else if(pantallaActual == 16){
  mostrarPantallaCloacas3();
}

else if(pantallaActual == 17){
  mostrarPantallaCloacas4();
}

else if(pantallaActual == 18){
  mostrarPantallaCalle();
}

else if(pantallaActual == 19){
  mostrarPantallaLocal();
}

else if(pantallaActual == 20){
  mostrarPantallaCallejon1();
}

else if(pantallaActual == 21){
  mostrarPantallaCallejon2();
}

else if(pantallaActual == 22){
  mostrarPantallaAnana();
}

else if(pantallaActual == 23){
  mostrarPantallaKaraiNo1();
}

else if(pantallaActual == 24){
  mostrarPantallaKaraiNo2();
}

else if(pantallaActual == 25){
  mostrarPantallaKaraiSi1();
}

else if(pantallaActual == 26){
  mostrarPantallaKaraiSi2();
}

else if(pantallaActual == 27){
  mostrarPantallaQuedarse();
}

else if(pantallaActual == 28){
  mostrarPantallaCorrer1();
}

else if(pantallaActual == 29){
  mostrarPantallaCorrer2();
}
else if (pantallaActual == 31){
mostrarFinalMalo();
}
  pop();
}
}



function mostrarPantallaInicial(){
  
  image(pantallaInicial, 0, 0, width, height);
    dialogo1();
    dialogo2();
    botonSiguiente();
    
    if(dialogoActual == 3){
      pantallaActual = 1;
    }
}

function mostrarPantallaPrimeraDecision(){
  
  
  image(pantallaPrimeraDecision, 0, 0, width, height);
  
  
  
  if(dialogoActual == 3){
    botonSiguiente();
  }else{

}
dialogo4();

  caminoQueso();
  caminoSalame();
  caminoAnana();
  
}


function mostrarPantallaQueso(){
  image(pantallaQueso, 0, 0, width, height);
  
  if(dialogoActual == 5){
    botonSiguiente();
  }else{
    
}

dialogo6();

  if(dialogoActual == 6){
    botonLlamarSplinter();
    botonPelearSolos();
    botonEvadir();
  }
}


function mostrarPantallaRatasYSplinter(){
  image(pantallaRatasYSplinter, 0, 0, width, height);
  
  dialogo8();
  
  botonSiguiente();
}

function mostrarPantallaRatasYTortugas1(){
  
 image(pantallaRatasYTortugas1, 0, 0, width, height);
  botonSiguiente(); 
}

function mostrarPantallaRatasYTortugas2(){
  
  image(pantallaRatasYTortugas2, 0, 0, width, height);
  dialogo11();
  botonSiguiente();
}

function mostrarPantallaRatasYTortugas3(){
  
  image(pantallaRatasYTortugas3, 0, 0, width, height);
  dialogo13();
  botonSiguiente();
}

function mostrarPantallaEvadir(){
  
  image(pantallaEvadir, 0, 0, width, height);
  dialogo15();
  botonSiguiente();
}

function mostrarPantallaSalame1(){
  
  image(pantallaSalame1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaSalame2(){
  
  image(pantallaSalame2, 0, 0, width, height);
  dialogo18();
  botonSiguiente();
}

function mostrarPantallaSalame3(){
  
  image(pantallaSalame3, 0, 0, width, height);
  
  if(dialogoActual == 19){
    botonSiguiente();
  }else{
    dentroDelBotonSiguiente = false;
}

dialogo20();
if(dialogoActual == 20){
    botonBuscarOtrosCaminos();
    botonSeguirDerecho();
  }
}


function mostrarPantallaSeguirDerecho1(){
  
  image(pantallaSeguirDerecho1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaSeguirDerecho2(){
  
  image(pantallaSeguirDerecho2, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCambiarCamino(){
  
  image(pantallaCambiarCamino, 0, 0, width, height);


if(dialogoActual == 23 || dialogoActual == 24){
  dialogo24();  
  botonSiguiente();
    
  }else{
    dialogo25();
    caminoAgua();
    escalera1();
}
}

function mostrarPantallaCloacas1(){
  
  image(pantallaCloacas1, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaCloacas2(){
  
  image(pantallaCloacas2, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaCloacas3(){
  
  image(pantallaCloacas3, 0, 0, width, height);
  dialogo29();
  botonSiguiente();
  
  
}

function mostrarPantallaCloacas4(){
  
  image(pantallaCloacas4, 0, 0, width, height);
  dialogo31();
  botonSiguiente();
  
  
}

function mostrarPantallaCalle(){
  
  image(pantallaCalle, 0, 0, width, height);
 
 if(dialogoActual == 32){  
  botonSiguiente();
    
  }else{
    dialogo33();
    local();
    callejon();
}
  
}

function mostrarPantallaLocal(){
  
  image(pantallaLocal, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaCallejon1(){
  
  image(pantallaCallejon1, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaCallejon2(){
  
  image(pantallaCallejon2, 0, 0, width, height);
  dialogo37();
  botonSiguiente();
  
}

function mostrarPantallaAnana(){
  
  image(pantallaAnana, 0, 0, width, height);
  
  if(dialogoActual == 38 || dialogoActual == 39){  
  dialogo39();
  botonSiguiente();
    
  }else{
    dialogo40();
    botonSeguirAKarai();
    botonRechazar();
   
}
  
}

function mostrarPantallaKaraiNo1(){
  
  image(pantallaKaraiNo1, 0, 0, width, height);
  dialogo42();
  botonSiguiente();
  
}

function mostrarPantallaKaraiNo2(){
  
  image(pantallaKaraiNo2, 0, 0, width, height);
  
  if(dialogoActual == 43){  
  botonSiguiente();
    
  }else{
    dialogo44();
    escalera2();
   
}
}


function mostrarPantallaKaraiSi1(){
  
  image(pantallaKaraiSi1, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaKaraiSi2(){
  
  image(pantallaKaraiSi2, 0, 0, width, height);
  
  if(dialogoActual == 47){ 
   dialogo47();
   botonSiguiente();
    
  }else if (dialogoActual == 48){
    dialogo48();
    botonCorrer();
    botonQuedarse();
    
}else{ 
  botonSiguiente();
  
}
}

function mostrarPantallaQuedarse(){
  
  image(pantallaQuedarse, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaCorrer1(){
  
  image(pantallaCorrer1, 0, 0, width, height);
  botonSiguiente();
  
}

function mostrarPantallaCorrer2(){
  
  image(pantallaCorrer2, 0, 0, width, height);
  botonSiguiente();
  
}
function mostrarFinalMalo () {
image(finalMalo,0,0,width,height);
}
