function animacion1() {
    PosX ++;
    contador = floor (frameCount/6)%animacionIsaac0.length;
    image(animacionIsaac0[contador], PosX, 300, 50, 50);
}
