//milagros pocholo
//comicion2
//https://youtu.be/sQbt1qEeQQs
PImage img;

void setup(){
size(800,400);
img = loadImage("optica.jpg");
}

String estado = "reiniciar" ;

float colores(String est){   //funcion que retorna valor 
  float val=0;
  
     if(est == "col"){
       if(mousePressed){  //evento mousePressed, cambia de color el blanco 
         val = mouseY/2;
       }else{
           val = random(255); //el value del color es random
     }
     }
  return val; //aca retorna valor 
}

void draw(){

background(255); // Fondo blanco

stroke(0); // Color del borde negro
push();  //para que lo que afecta a la grilla no afecte a lo demas 
grilla(400); 
pop(); 
image(img,0,0,400,400);
//dibujarCuadrados(); 

}
void grilla (int x) { //función de la grilla 

int l = 200; 

  for ( int c = 0; c<2; c += 1) { //for anidado para hacer la grilla 
   for (int f = 0; f<2; f+=1) {
     rect(x+f*l, c*l, l ,l);
     dibujarCuadrados(100,100); //cuadrados sobre la grilla
     dibujarCuadrados(300,100);
     dibujarCuadrados(100, -100); 
     dibujarCuadrados(300, -100); 
     dibujarCuadrados (200, 0); //cuadrado del medio
  }
} 
}

void dibujarCuadrados(int an, int al) {
  int size = 200; // Tamaño inicial del cuadrado
  int decrement = 40; // Decremento del tamaño de cada cuadrado
  
  // Coordenadas para centrar los cuadrados
  int x = (width - size) / 2 + an;
  int y = (height - size) / 2 - al;
  
  // Dibujar 5 cuadrados uno dentro del otro
  for (int i = 0; i < 5; i++) {
    //condicionales que marcan el relleno del cuadrado
    if(i % 2 == 0){ //color blanco o negro          
     fill(0);  
    }else if (estado=="col"){
      fill(colores(estado), 50, 50); 
   }else{
     fill(255);
  }
  
    rect(x, y, size, size); // Dibujar el cuadrado
    size -= decrement; // Reducir el tamaño del cuadrado
    x += decrement / 2; // Ajustar coordenada x
    y += decrement / 2; // Ajustar coordenada y
    
    if (estado == "movimiento") {
      frameRate(5); //baja el framerate para que se vea lento el movimiento 
      rotate (PI/random(0,2));  //hace que los cuadrados roten de manera random o aleatoria 
    }
   
}
}

void keyPressed (){ //funcion que no retorna valor
  if (key == 'm'){
  estado = "movimiento";
  }else if (key == 'c') {
  estado = "col"; 
  }else if (key == 'r') {
  estado = "reiniciar";    //sistema de estados manejada con las teclas, reiniciar con r 
  } 
}
