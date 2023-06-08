/*
// Serie A
// A1
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);

// Réalisation
forward(200);
faceRight();
forward(100);
*/

/*
// A2
// Initialisation
faceLeft();//position de départ
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);

//Réalisation

forward(100); //avancer
faceDown(); //tourner
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
*/

/*
//A3 Croix
// Initialisation

faceLeft();
setPos(300,300);
changeColor(color.red);
setLineWidth(10);

//Réalisation

forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);
*/

/*
//A4 S
// Initialisation

faceRight();
setPos(150,500);
changeColor(color.green);
setLineWidth(10);

//Réalisation

forward(200);
faceRight();
arcLeft(100,180);
forward(100);
faceLeft();
arcRight(100,180);
forward(200);
*/

/*
//A5 Yin et Yang
// Initialisation

faceRight();
setPos(100,100);
changeColor(color.fuchsia);
setLineWidth(10);

//Réalisation
faceRight();
arcRight(200,180);
arcRight(200,180);
arcRight(100,180);
arcLeft(100,180);
*/




/*
// Série B
// B1 Escalier
// Initialisation
faceRight();
setPos(100,100);
changeColor(color.green);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 4 ; i++) {
        forward(100);
        faceDown();
        forward(100);
        faceRight();
}
*/

/*
//B2 Créneaux
//Initialisation
faceUp();
setPos(100,300);
changeColor(color.red);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 4 ; i++) {
        forward(50);
        faceRight();
        forward(50);
        faceDown();
        forward(50);
        faceRight();
        forward(50);
        faceUp();
}
*/

/*
//B3 Carré
// Initialisation
faceUp();
setPos(100,300);
changeColor(color.blue);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 4 ; i++) {
    right(90);
    forward(100);
}
*/

/*
//B4 Triangle
// Initialisation
faceRight();
setPos(300,300);
changeColor(color.blue);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 3 ; i++) {
    left(120); //Ne pas oublier de faire la conversion (120=180-60)
    forward(200);
}
*/

/*
//B5 Drapeau
//Initialisation

setPos(300,400);
faceUp();
changeColor(color.blue);
setLineWidth(10);

//Réalisation

forward(200);
changeColor(color.red);

for(let i = 0 ; i < 3 ; i++) {
    forward(100);
    right(120); 
    
}
*/

//B Escalier bicolore
//Initialisation


/*
//C1 Dent
//Initialisation

setPos(100,200);
faceRight();
changeColor(color.aqua);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 4 ; j++){
        forward(100);
        right(120);
    }
    left(120);
}
*/

/*
//C2 fenêtre
//Initialaisation

setPos(200,500);
faceUp();
changeColor(color.fuchsia);
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 5 ; i++) {
    for(let j = 0 ; j < 4 ; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}
*/

/*
//C3 Couleurs décalées
//Initialisation

setPos(50,500);
faceRight();
shiftColor(1/3);
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 3 ; i++) {
    for(let j = 0 ; j < 8 ; j++){
        forward(100);
        left(135);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}
*/

/*
//C4 Pâte de maison
//Initialisation

setPos (50,200);
faceRight();
changeColor(color.red);
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 5 ; i++) {
    for(let j = 0 ; j < 3 ; j++){
        forward(100);
        left(180-60);
    }
    for(let j = 0 ; j < 4 ; j++){
        changeColor(color.orange);
        forward(100);
        right(180-90);
    }
    up ();
    forward(200);
    down();
    changeColor(color.red);
}
*/

/*
//C5 Quariétoile
//Initialisation

setPos (250,300);
faceRight();
shiftColor(1/6);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 8 ; j++){
        forward(200);
        left(180-45);
    }
    right(180-90)
    shiftColor(0.25);
}
*/

/*
//C6 Triangle doré
//Initialisation

setPos (250,500);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 3 ; i++) {
    for(let j = 0 ; j < 5 ; j++){
        forward(200);
        left(180-60);
    }
    right(180-60)
}
*/

/*
//C7 Soleil
//Initialisation

setPos (250,500);
faceRight();
changeColor(color.orange);
setLineWidth(10);

//Réalisation

for(let i = 0 ; i < 8 ; i++) {
    forward(100);
    left(180-135)
    for(let j = 0 ; j < 3 ; j++){
        forward(100);
        left(180-300);
    }
}
*/

/*
//D9 Spirale triangulaire
//Initialisation
 setPos (300,300);
 faceRight();
 changeColor(color.blue);
 setLineWidth(10);

 //Réalisation

 let length = 100;
 for (let i = 0 ; i < 6 ; i++){
        forward(length);
        right(120);
        // length = length+100;
        length += 100;
 }
*/

//D10 Grande spirale
//Initialisation
setPos (300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

//Réalisation

let length= 100;
for (let i = 0 ; i < 10 ; i++){
    forward(length);
    right(90);
    length += 50;
}