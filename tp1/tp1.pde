//tp1 Milagros pocholo
//95736/5
//comision 2

PImage paisaje;

void setup(){
size(800, 400); 
background(219,170,91);
paisaje = loadImage("paisaje.jpg");

}
void draw(){
image(paisaje,0,0,400,400);
fill(150,162,206);
noStroke();
quad(400,240,800,240,800,400,400,400);
fill(113,110,109);
triangle(600,70,400,240,800,240);
fill(48,139,37);
quad(400,210,800,210,800,240,400,240);
fill(237,229,227);
triangle(600,70,550,110,650,110);
fill(113,110,109,100);
triangle(600,370,420,240,770,240);
fill(237,229,227,100);
triangle(600,370,560,340,640,340);

}
