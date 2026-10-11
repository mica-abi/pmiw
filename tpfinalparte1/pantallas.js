function mostrarPantallas() {

    if (pantallaActual ==50) {
   push()
    imageMode(CORNER)   
    mostrarPortada();
  pop();
  }
  if (pantallaActual ==30) {
    animacionCreditos();
  } else {

    push();
    imageMode(CORNER);

    if (pantallaActual == 0) {
      mostrarPantallaInicial();
    } else if (pantallaActual == 1) {
      mostrarPantallaPrimeraDecision();
    } else if (pantallaActual == 2) {
      mostrarPantallaQueso();
    } else if (pantallaActual == 3) {
      mostrarPantallaRatasYSplinter();
    } else if (pantallaActual == 4) {
      mostrarPantallaRatasYTortugas1();
    } else if (pantallaActual == 5) {
      mostrarPantallaRatasYTortugas2();
    } else if (pantallaActual == 6) {
      mostrarPantallaRatasYTortugas3();
    } else if (pantallaActual == 7) {
      mostrarPantallaEvadir();
    } else if (pantallaActual == 8) {
      mostrarPantallaSalame1();
    } else if (pantallaActual == 9) {
      mostrarPantallaSalame2();
    } else if (pantallaActual == 10) {
      mostrarPantallaSalame3();
    } else if (pantallaActual == 11) {
      mostrarPantallaSeguirDerecho1();
    } else if (pantallaActual == 12) {
      mostrarPantallaSeguirDerecho2();
    } else if (pantallaActual == 13) {
      mostrarPantallaCambiarCamino();
    } else if (pantallaActual == 14) {
      mostrarPantallaCloacas1();
    } else if (pantallaActual == 15) {
      mostrarPantallaCloacas2();
    } else if (pantallaActual == 16) {
      mostrarPantallaCloacas3();
    } else if (pantallaActual == 17) {
      mostrarPantallaCloacas4();
    } else if (pantallaActual == 18) {
      mostrarPantallaCalle();
    } else if (pantallaActual == 19) {
      mostrarPantallaLocal();
    } else if (pantallaActual == 20) {
      mostrarPantallaCallejon1();
    } else if (pantallaActual == 21) {
      mostrarPantallaCallejon2();
    } else if (pantallaActual == 22) {
      mostrarPantallaAnana();
    } else if (pantallaActual == 23) {
      mostrarPantallaKaraiNo1();
    } else if (pantallaActual == 24) {
      mostrarPantallaKaraiNo2();
    } else if (pantallaActual == 25) {
      mostrarPantallaKaraiSi1();
    } else if (pantallaActual == 26) {
      mostrarPantallaKaraiSi2();
    } else if (pantallaActual == 27) {
      mostrarPantallaQuedarse();
    } else if (pantallaActual == 28) {
      mostrarPantallaCorrer1();
    } else if (pantallaActual == 29) {
      mostrarPantallaCorrer2();
    } else if (pantallaActual == 31) {
      mostrarFinalMalo();
    } else if (pantallaActual == 32) {
      mostrarFinalHeroico();
    } else if (pantallaActual == 33) {
      mostrarFinalDecente();
    }
    pop();
  }
}

function cargarPantallas (imagen) {
  image (imagen, 0, 0, width, height);
}

function mostrarPortada(){
  
  cargarPantallas (portada);
  botonInicio();
}

function mostrarPantallaInicial() {

  cargarPantallas (pantallaInicial);
  controladordeDialogos(1, perfilLeonardo, dialogo1, 220, 410);
    controladordeDialogos(2, perfilDonatello, dialogo2, 220, 410);
    botonSiguiente();

  if (dialogoActual == 3) {
    pantallaActual = 1;
  }
}

function mostrarPantallaPrimeraDecision() {


  image(pantallaPrimeraDecision, 0, 0, width, height);



  if (dialogoActual == 3) {
    botonSiguiente();
  } else {
  }
  controladordeDialogos(4, perfilLeonardo, dialogo4, 360, 410);

  caminoQueso();
  caminoSalame();
  caminoAnana();
}


function mostrarPantallaQueso() {
  image(pantallaQueso, 0, 0, width, height);

  if (dialogoActual == 5) {
    botonSiguiente();
  } else {
  }
  controladordeDialogos(6, perfilLeonardo, dialogo6, 300, 410);

  if (dialogoActual == 6) {
    botonLlamarSplinter();
    botonPelearSolos();
    botonEvadir();
  }
}


function mostrarPantallaRatasYSplinter() {
  image(pantallaRatasYSplinter, 0, 0, width, height);

  controladordeDialogos(8, perfilSplinter, dialogo8, 380, 395);

  botonSiguiente();
}

function mostrarPantallaRatasYTortugas1() {

  image(pantallaRatasYTortugas1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaRatasYTortugas2() {

  image(pantallaRatasYTortugas2, 0, 0, width, height);
  controladordeDialogos(11, perfilDonatello, dialogo11, 200, 410);
  botonSiguiente();
}

function mostrarPantallaRatasYTortugas3() {

  image(pantallaRatasYTortugas3, 0, 0, width, height);
  controladordeDialogos(13, perfilBebop, dialogo13, 300, 410);
  botonSiguiente();
}

function mostrarPantallaEvadir() {

  image(pantallaEvadir, 0, 0, width, height);
  controladordeDialogos(15, perfilRaphael, dialogo15, 380, 395);
  botonSiguiente();
}

function mostrarPantallaSalame1() {

  image(pantallaSalame1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaSalame2() {

  image(pantallaSalame2, 0, 0, width, height);
  controladordeDialogos(18, perfilDonatello, dialogo18, 390, 395);
  botonSiguiente();
}

function mostrarPantallaSalame3() {

  image(pantallaSalame3, 0, 0, width, height);

  if (dialogoActual == 19) {
    botonSiguiente();
  } else {
    dentroDelBotonSiguiente = false;
  }

  controladordeDialogos(20, perfilLeonardo, dialogo20, 320, 410);
  if (dialogoActual == 20) {
    botonBuscarOtrosCaminos();
    botonSeguirDerecho();
  }
}


function mostrarPantallaSeguirDerecho1() {

  image(pantallaSeguirDerecho1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaSeguirDerecho2() {

  image(pantallaSeguirDerecho2, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCambiarCamino() {

  image(pantallaCambiarCamino, 0, 0, width, height);


  if (dialogoActual == 23 || dialogoActual == 24) {
    controladordeDialogos(24, perfilRaphael, dialogo24, 280, 410);
    botonSiguiente();
  } else {
    controladordeDialogos(25, perfilLeonardo, dialogo25, 400, 410);
    caminoAgua();
    escalera1();
  }
}

function mostrarPantallaCloacas1() {

  image(pantallaCloacas1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCloacas2() {

  image(pantallaCloacas2, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCloacas3() {

  image(pantallaCloacas3, 0, 0, width, height);
  controladordeDialogos(29, perfilLeonardo, dialogo29, 160, 410);
  botonSiguiente();
}

function mostrarPantallaCloacas4() {

  image(pantallaCloacas4, 0, 0, width, height);
  controladordeDialogos(31, perfilSplinter, dialogo31, 380, 395);
  botonSiguiente();
}

function mostrarPantallaCalle() {

  image(pantallaCalle, 0, 0, width, height);

  if (dialogoActual == 32) {
    botonSiguiente();
  } else {
    controladordeDialogos(33, perfilDonatello, dialogo33, 390, 410);
    local();
    callejon();
  }
}

function mostrarPantallaLocal() {

  image(pantallaLocal, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCallejon1() {

  image(pantallaCallejon1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCallejon2() {

  image(pantallaCallejon2, 0, 0, width, height);
  controladordeDialogos(37, perfilRocksteady, dialogo37, 385, 395);
  botonSiguiente();
}

function mostrarPantallaAnana() {

  image(pantallaAnana, 0, 0, width, height);

  if (dialogoActual == 38 || dialogoActual == 39) {
    controladordeDialogos(39, perfilKarai, dialogo39, 385, 410);
    botonSiguiente();
  } else {
    controladordeDialogos(40, perfilRaphael, dialogo40, 300, 410);
    botonSeguirAKarai();
    botonRechazar();
  }
}

function mostrarPantallaKaraiNo1() {

  image(pantallaKaraiNo1, 0, 0, width, height);
  controladordeDialogos(42, perfilLeonardo, dialogo42, 340, 410);
  botonSiguiente();
}

function mostrarPantallaKaraiNo2() {

  image(pantallaKaraiNo2, 0, 0, width, height);

  if (dialogoActual == 43) {
    botonSiguiente();
  } else {
    controladordeDialogos(44, perfilDonatello, dialogo44, 220, 410);
    escalera2();
  }
}


function mostrarPantallaKaraiSi1() {

  image(pantallaKaraiSi1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaKaraiSi2() {

  image(pantallaKaraiSi2, 0, 0, width, height);

  if (dialogoActual == 47) {
    controladordeDialogos(47, perfilDonatello, dialogo47, 375, 410);
    botonSiguiente();
  } else if (dialogoActual == 48) {
    controladordeDialogos(48, perfilRaphael, dialogo48, 280, 410);
    botonCorrer();
    botonQuedarse();
  } else {
    botonSiguiente();
  }
}

function mostrarPantallaQuedarse() {

  image(pantallaQuedarse, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCorrer1() {

  image(pantallaCorrer1, 0, 0, width, height);
  botonSiguiente();
}

function mostrarPantallaCorrer2() {

  image(pantallaCorrer2, 0, 0, width, height);
  botonSiguiente();
}
function mostrarFinalMalo () {
  cargarPantallas(finalMalo);
  push();
  image(mancha, 250, 10, 350, 50);
  textSize(35);
  text('Final Tragico', 400, 45);
  pop();
  botonReiniciar();
}
function mostrarFinalHeroico () {
  cargarPantallas(finalHeroico);
  image(mancha, 250, 10, 350, 50);
  push();
  textSize(35);
  text('Final Heroico', 400, 45);
  pop();
  botonReiniciar();
}
function mostrarFinalDecente () {
  cargarPantallas(finalDecente);
  image(mancha, 250, 10, 350, 50);
  push();
  textSize(35);
  text('Final Decente', 400, 45);
  pop();
  botonReiniciar();
}
