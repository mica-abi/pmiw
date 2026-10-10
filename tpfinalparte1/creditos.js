function cargarAnimacionLeonardo() {

  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    leonardoCaminando.push(loadImage('images/leonardo_'+frameActual+'.png'))
  }
}

function cargarAnimacionDonatello() {

  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    donatelloCaminando.push(loadImage('images/donatello_'+ frameActual +'.png'))
  }
}

function cargarAnimacionRaphael() {

  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    raphaelCaminando.push(loadImage('images/raphael_'+frameActual+'.png'))
  }
}

function cargarAnimacionMikey() {

  for (let frameActual = 0; frameActual < framesTotales; frameActual++) {
    mikeyCaminando.push(loadImage('images/mikey_'+frameActual+'.png'))
  }
}


function animacionCreditos() {

  dibujarFondo();
  dibujarLogo();
  manchas();
  datosCreditos();
  dibujarPiso();
  mostrarTortugas();
}

function mostrarTortugas() {

  if (tortugaActual == 0 && posXLeonardo < 807) {

    controladorDeAnimaciones(leonardoCaminando, 10, posXLeonardo);
    posXLeonardo += 2;
  } else if (tortugaActual == 0 && posXLeonardo >= 807) {
    tortugaActual = 1;
  }

  if (tortugaActual == 1 && posXDonatello < 807) {
    controladorDeAnimaciones(donatelloCaminando, 10, posXDonatello);
    posXDonatello += 2;
  } else if (tortugaActual == 1 && posXDonatello >= 807) {
    tortugaActual = 2;
  }

  if (tortugaActual == 2 && posXRaphael < 807) {
    controladorDeAnimaciones(raphaelCaminando, 10, posXRaphael);
    posXRaphael += 2;
  } else if (tortugaActual == 2 && posXRaphael >= 807) {
    tortugaActual = 3;
  }

  if (tortugaActual == 3 && posXMikey < 807) {
    controladorDeAnimaciones(mikeyCaminando, 10, posXMikey);
    posXMikey += 2;
  } else if (tortugaActual == 3 && posXMikey >= 807) {
    tortugaActual = 4;
  }

  if (tortugaActual <= 3) {
    xPiso-=2;
    xFondo--;
  }
}

function dibujarPiso() {

  image(piso, xPiso, 510);
  image(piso, xPiso + 523, 510); //para que se siga dibujado
  image(piso, xPiso + 1046, 510);
  image(piso, xPiso + 1569, 510);
  image(piso, xPiso + 2092, 510);
  image(piso, xPiso + 2615, 510);
  image(piso, xPiso + 3138, 510);
  image(piso, xPiso + 3661, 510);
  image(piso, xPiso + 4184, 510);
}

function dibujarFondo() {

  image(fondo, xFondo, 440, 1852, 884);
  image(fondo, xFondo + 1252, 440, 1852, 884);
  image(fondo, xFondo + 2504, 440, 1852, 884);
}

function dibujarLogo() {

  if (yLogo <= 100) {

    yLogo++;
  }

  image(logo, 396, yLogo, 376, 176);
}

function datosCreditos() {

  if (xAutoras >= -200) {
    xAutoras-=2;
  }

  if (xCreadores >= -200) {
    xCreadores-=2;
  }

  textAlign(CENTER);
  textFont(fuenteConsola);
  textSize(15);
  fill(0);
  text("Autoras de la historia:\nCamila D'Urbano Brescia y\nMicaela Abigail Fernández", xAutoras, 200);
  text("Creadores del juego:\nKevin Eastman y\nPeter Laird", xCreadores, 200);
}

function manchas() {

  if (xMancha1 >= -200) {
    xMancha1-=2;
  }

  if (xMancha2 >= -200) {
    xMancha2-=2;
  }
  tint(255, 210);
  image(mancha, xMancha1, 215, 250, 100);
  image(mancha, xMancha2, 215, 250, 100);
  noTint();

  if (xMancha2 <= -202 && pantallaActual == 30) {
    pantallaActual = 0;
    sonidoCreditos.pause();
  }
}
