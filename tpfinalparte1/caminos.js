function caminoQueso(){
  let distancia = dist(mouseX, mouseY, 270, 167);
  let radio = 95/2;
  
  dentroDelCaminoQueso = (distancia < radio);
  if(dentroDelCaminoQueso && dialogoActual == 4){
    noStroke();
    fill(0, 255, 0, 70);
    circle(270, 167, 95);
  }else{
    
}
}

function caminoSalame(){
  let distancia = dist(mouseX, mouseY, 398, 167);
  let radio = 95/2;
  
  dentroDelCaminoSalame = (distancia < radio);
  if(dentroDelCaminoSalame && dialogoActual == 4){
    noStroke();
    fill(0, 255, 0, 70);
    circle(398, 167, 95);
  }else{
    
}
}

function caminoAnana(){
  let distancia = dist(mouseX, mouseY, 530, 167);
  let radio = 95/2;
  
  dentroDelCaminoAnana = (distancia < radio);
  if(dentroDelCaminoAnana && dialogoActual == 4){
    noStroke();
    fill(0, 255, 0, 70);
    circle(530, 167, 95);
  }else{
    
}
}


function caminoAgua(){
  let distancia = dist(mouseX, mouseY, 705, 180);
  let radio = 70/2;
  
  dentroDelCaminoAgua = (distancia < radio);
  if(dentroDelCaminoAgua && dialogoActual == 25){
    noStroke();
    fill(0, 255, 0, 70);
    circle(705, 180, 75);
  }else{
    
}
}



function escalera1(){
  
  dentroDeEscalera1 = (mouseX > 180 && mouseX < 240 && mouseY > 0 && mouseY < 190);
  
  if(dentroDeEscalera1){
    
  noStroke();
  fill(0, 255, 0, 70);
  rect(180, 0, 60, 190);
  
}else{
  
} 
}


function escalera2(){
  
  dentroDeEscalera2 = (mouseX > 380 && mouseX < 420 && mouseY > 60 && mouseY < 260);
  
  if(dentroDeEscalera2){
    
  noStroke();
  fill(0, 255, 0, 70);
  rect(380, 60, 40, 200);
  
}else{
  
} 
}


function local(){
  
  dentroDeLocal = (mouseX > 670 && mouseX < 710 && mouseY > 175 && mouseY < 255);
  
  if(dentroDeLocal){
    
  noStroke();
  fill(0, 255, 0, 70);
  rect(670, 175, 40, 80);
  
}else{
  
}
}


function callejon(){
  
  dentroDeCallejon = (mouseX > 105 && mouseX < 290 && mouseY > 0 && mouseY < 255);
  
  if(dentroDeCallejon){
    
  noStroke();
  fill(0, 255, 0, 70);
  rect(105, 0, 185, 255);
  
}else{
  
}
}
