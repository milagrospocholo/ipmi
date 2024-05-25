// tp 2
// comicion 2 
//Milagros Pocholo


int movimiento;
int segundos; 
int contador; 
int sumacontador;

int botonX= 280;
int botonY= 420;
int botonAncho= 80;
int botonAlto= 30;

PFont font;
PImage imagen1;
PImage imagen2; 
PImage imagen3; 

void setup(){
size(640, 480);
segundos= 0;
movimiento = 300;
contador= 0; 
sumacontador= 1;

background(255);
textAlign(CENTER);
textSize(60);
font= loadFont("Perpetua-Bold-32.vlw"); 
imagen1= loadImage("imagen1.jpg");
imagen2= loadImage("imagen2.jpg");
imagen3= loadImage("imagen3.jpg");
}
void draw(){
  contador=contador+sumacontador; 
 if(contador%60==0){
 segundos++;
 }
 if(segundos<=3){
 fill(0,255,255);
 movimiento = contador;
 
 println(movimiento);
 background(0);
 image(imagen1,0,0,640,480);
 fill(0);
 textFont(font);
 text("The Last of Us es un\n videojuego de terror, acción y aventura",320,movimiento);
 
 }
 //pantalla 2
 
 else if(segundos>3 && segundos <6){
 movimiento = contador;
 fill(255);
 image(imagen2,0,0,640,480);
 textSize(40);
 text("desata una pandemia\n en Estados Unidos\n ocasionada por una\n cepa del hongo Cordyceps",movimiento, height/3);
 
 }
 //pantalla 3
 else{
 movimiento = contador/2;
 fill(0,244);
 image(imagen3,0,0,640,480);
 textSize(25);
 text("que al infectar a los humanos\n los convierte en criaturas\n caníbales, y que se transmite\n a través de una\n simple mordedura",310,movimiento);
 fill(255);
 rect(botonX, botonY, botonAncho, botonAlto);
 fill(25,15,30);
 textSize(20);
 textAlign(CENTER,CENTER);
 text("reiniciar",botonX + botonAncho/2, botonY + botonAlto/2);
 }
 
}

void mousePressed(){
segundos= 0;
contador= 0;
sumacontador= 1;
movimiento= 300;

if(segundos == 3 && mouseX >= botonX && mouseX <= botonX + botonAncho && mouseY >= botonY && mouseY <= botonY + botonAlto){
}
}
