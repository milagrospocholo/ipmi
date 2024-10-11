let imagenes = [];

let nombredefilas = ["data/img-0.jpg", "data/img-1.jpg", "data/img-2.jpg", " data/img-3.jpg", " data/img-4.jpg", " data/img-5.jpg", " data/img-6.jpg", " data/img-7.jpg", " data/img-8.jpg", " data/img-9.jpg", " data/img-10.jpg", " data/img-11.jpg"," data/img-12.jpg", " data/img-13.jpg", " data/img-14.jpg", " data/img-15.jpg", " data/img-16.jpg", " data/img-17.jpg", "data/img-18.jpg", "data/img-19.jpg","data/img-20.jpg", "data/img-21.jpg", "data/img-22.jpg", "data/img-23.jpg", "data/img-24.jpg","data/img-25.jpg",];

let estado = 0;

function preload() {
  for (let i = 0; i < nombredefilas.length; i++) {
    imagenes[i] = loadImage(nombredefilas[i]); // cargar imÃ¡genes
  }
}


function setup() {
 createCanvas(640, 480); //X es horizontal (640) Y es vertical (600) 
  textAlign(CENTER);
}


function draw() {
  background(0); // Limpiar el fondo
  image(imagenes[estado], 0, 0, 640, 480); // mostrar imagen actual
  circulodecontinuar(580, 420, 40);
    
  
if ( estado === 0) {
  textSize(25);
  fill(4, 3, 90); //color texto
  //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
  text("texto 1", 300, 100); 
    
    
  } else if  ( estado === 1) {
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40)  // los botones acomodalos como creas que quede mejor
    circulob(260, 410, 40);
    textSize(25);
    fill(4, 5, 90); //color del texto
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 2", 300, 100);


  } else if ( estado === 2) {  
     textSize(25);
    fill(4, 5, 90); // color del texto
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 3", 300, 100); 
    
    
  } else if  ( estado === 3){ 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 4", 300, 100);
    
    
  } else if  ( estado === 4) { 
    textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 5", 300, 100);
    
    
  } else if  (estado === 5) { 
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40)
     textSize(25);
     fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 6", 300, 100);
    
    
  } else if ( estado === 6){ 
    textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 7", 300, 100);
    
    
  } else if  ( estado === 7 ){
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 8", 300, 100);
    
    
  } else if  ( estado === 8){ 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 9", 300, 100); 
    
    
  } else if  ( estado === 9) { 
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40);
    textSize(25);
    fill(4, 5, 90);
   // rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 10", 300, 100);  
    
    
  } else if  ( estado === 10 ) {
     textSize(25);
     fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 11", 300, 100); 
    
    
  } else if  ( estado === 11) { 
     textSize(25);
     fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 12", 300, 100); 
    
    
  } else if  ( estado === 12) { 
     textSize(25);
     fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 13", 300, 100); 
    
    
  } else if  ( estado === 13) { 
     textSize(25);
     fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 14", 300, 100); 
    
    
  } else if  ( estado === 14) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 15", 300, 100); 
    
    
  } else if  ( estado === 15 ){
     textSize(25);
     fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 16", 300, 100); 
    
    
  } else if  ( estado === 16) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100);     
 
 
 
  } else if  ( estado === 17) {
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40);
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 18", 300, 100); 
    
  } else if  ( estado === 18) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 19) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 20) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100);  
    
    
     } else if  ( estado === 21) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 22) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 23) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 24) { 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 25) { 
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40);
    circuloc(90, 410, 40);
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
    
  }

}


function mousePressed() {

  if (estado == 0 && mouseEnCirculo(580, 420, 40)) {
    estado = 1;  // la foto 1 pasa a la foto 2
    
    
    } else if (estado == 1 && mouseEnCirculo(410, 410, 40)) {
    estado = 2; // la foto 2 pasa a la foto 3 
  
    
  } else if (estado == 1 && mouseEnCirculo(260, 410, 40)) {
    estado = 3; //la foto 2 pasa a la foto 4
    
    
  } else if (estado == 2 && mouseEnCirculo(580, 420, 40)) {
    estado = 4; // la foto 3 pasa a la foto 5
    
    
  } else if (estado == 3 && mouseEnCirculo(580, 420, 40)) {
    estado = 4; // la foto 4 pasa a la foto 5
    
    
  } else if (estado == 4 && mouseEnCirculo(580, 420, 40)) {
    estado = 5; // Va al primer final (modificar segun tu boton) 
    
    
  } else if (estado == 5 && mouseEnCirculo(410, 410, 40)) {
    estado = 6; //sigue con la historia 
    
    
  } else if (estado == 5 && mouseEnCirculo(260, 410, 40)) {
    estado = 7; //Va al segundo final 
    
    
  } else if (estado == 6 && mouseEnCirculo(580, 420, 40)) {
    estado = 8; //ultimo final y va a los creditos 
    
    
     } else if (estado == 7 && mouseEnCirculo(580, 420, 40)) {
    estado = 8; //ultimo final y va a los creditos 
    
    
     } else if (estado == 8 && mouseEnCirculo(580, 420, 40)) {
    estado = 9; //ultimo final y va a los creditos 
    
    
     } else if (estado == 9 && mouseEnCirculo(410, 410, 40)) {
    estado = 10; //ultimo final y va a los creditos 
    
    
     } else if (estado == 9 && mouseEnCirculo(260, 410, 40)) {
    estado = 11; //ultimo final y va a los creditos 
    
    
     } else if (estado == 10 && mouseEnCirculo(580, 420, 40)) {
    estado = 15; //ultimo final y va a los creditos 
    
    
     } else if (estado == 11 && mouseEnCirculo(580, 420, 40)) {
    estado = 12; //ultimo final y va a los creditos 
    
    
    
     } else if (estado == 12 && mouseEnCirculo(580, 420, 40)) {
    estado = 13 ; //ultimo final y va a los creditos 
    
    
     } else if (estado == 13 && mouseEnCirculo(580, 420, 40)) {
    estado = 14; //ultimo final y va a los creditos 
    
    
    
       } else if (estado == 14 && mouseEnCirculo(580, 420, 40)) {
    estado = 17; //ultimo final y va a los creditos 
    
      } else if (estado == 15 && mouseEnCirculo(580, 420, 40)) {
    estado = 16; //ultimo final y va a los creditos 
    
       } else if (estado == 16 && mouseEnCirculo(580, 420, 40)) {
    estado = 17; //ultimo final y va a los creditos 
    
    
    
        } else if (estado == 17 && mouseEnCirculo(410, 410, 40)) {
    estado = 18 ; //ultimo final y va a los creditos 
    
    
       } else if (estado == 17 && mouseEnCirculo( 260,410,40 )) {
    estado = 19 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 18 && mouseEnCirculo( 580, 420, 40)) {
    estado = 21 ; //ultimo final y va a los creditos 
     
     
       } else if (estado == 19 && mouseEnCirculo( 580, 420, 40)) {
    estado = 20 ; //ultimo final y va a los creditos 
    
    
     
      
       } else if (estado == 20 && mouseEnCirculo( 580, 420, 40)) {
    estado = 25 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 25 && mouseEnCirculo( 90, 410, 40)) {
    estado = 22 ; //ultimo final y va a los creditos 
    
      } else if (estado == 25 && mouseEnCirculo( 410, 410, 40)) {
    estado = 23 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 25 && mouseEnCirculo( 580, 420, 40)) {
    estado = 24 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 22 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; //ultimo final y va a los creditos 
      
      
      } else if (estado == 23 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 24 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; //ultimo final y va a los creditos 
    
    
    
     
   
  
    
    
    
    
    
    
    
    

  }
  


}



function mouseEnCirculo(x, y, r) { //Evento de click 
  return dist(mouseX, mouseY, x, y) <= r;
}

function circulodecontinuar(h, i, j) {
  stroke(255);
  fill(227, 124, 124);
  circle(h, i, j);
}

function circuloa(h, i, j) {
  stroke(255);
  fill(224, 0, 245);
  circle(h, i, j);
}

function circulob(h, i, j) {
  stroke(255);
  fill(224, 0, 245); 
  circle(h, i, j);
}


function circuloc(h, i, j) {
  stroke(255);
  fill(224, 0, 245); 
  circle(h, i, j);
}
 
 
