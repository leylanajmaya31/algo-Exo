// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
// TODO
console.log("Exercice 1");
for(let i = 0 ; i < 50 ; i++){
    console.log ("Bonjour");
}


// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
// TODO
console.log("Exercice 2"); //Solution numero 1
for(let i = 0 ; i < 5 ; i++){
    console.log("A");
    console.log("B");
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// TODO
console.log("Exercice 3");
for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 5 ; j++){
        console.log("A");
    }
    console.log("B");
}
// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// TODO

/*
console.log("Exercice 4");
//solution 1
let number4 = 0;
for(let i=0 ; i < 10; i++){
    console.log(number4);
    number4++;
}
*/


//solution 2
for(let i=0 ; i < 10; i++){
    console.log(i);
}



// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// TODO
console.log("Exercice 5");
let number5 = 3;
for(let i=3; i < 13; i++){
    console.log(i);
}

//solution 2
console.log("Exo 3 bis");
let exo5 = 3;
for(let i=0; i < 10; i++){
    console.log(exo5);
    exo5++;
}

//solution 3
console.log("Exo 5 ter");
for(let i=0; i < 10; i++){
    console.log(i+3);
}

//solution 4
console.log("Exo 5 quater");
//Pareil que la même version, mais avec un while
let exo5Quater = 3;
let i = 0;
while(i < 10) {
        console.log(exo5Quater);
        exo5Quater++;
        i++;
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
// TODO
console.log("Exercice 6");
// Solution 1
for(let i = 0 ; i < 2 ; i++){
    for(let j = 0 ; j < 2 ; j++){
        console.log(j);
    }
}
console.log(0);
console.log(1);

console.log("exo 6 bis");
//solution 2
for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 4 ; j++){
        console.log(j);
    }
}
for(let i = 0 ; i < 1 ; i++){
    console.log(i);
}

console.log("exo 6 ter");
//solution 3
for (let i=0 ; i<10 ; i++){
    console.log(i%4);
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
//Solution 1
for (let i=0 ; i<10 ; i++){
    if (i == 5){
        console.log("A");
    } else {
        if (i == 6) {
            console.log("A");
        } else {
            if (i == 7) {
                console.log("A");
            } else {
                console.log(i);
            }
        }
    }
}
 
//Solution 3 Suppression d'accolades facultative et simplification du code
console.log("Exo 7 Bis");
for (let i=0 ; i<10 ; i++){
    if (i == 5){
            console.log("A");
    } else if (i == 6) {
            console.log("A");
    } else if (i == 7) {
            console.log("A");
    } else {
            console.log(i);
    }
}

console.log("Exo 7 Ter");
//Solution 3
for(let i = 0; i <10; i++){
        if(1 > 4) {
            if(i < 8) {
                console.log("A");
            } else {
                console.log(i);
            }
        } else {
            console.log(i);
        }
}

console.log("Exercice 7 quater")
//Solution 4
for(let i = 0; i <10; i++){
    if(i > 4 && i < 8) { //Si i est compris entre 4 et 8
        console.log("A");
    } else {
        console.log(i);
    }
}

console.log("Exo 7 quinquies")
for(let i = 0; i <10; i++){
    if(i == 5 || i == 6 || i == 7 ) { //Si i vaut 5 ou i vaut 6 ou i vaut 7
        console.log("A");
    } else {
        console.log(i);
    }
}

// TODO

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
//solution 1
for(let i = 0; i <10 ; i++){
    if(i%3 == 0){ //si i est un multiple de 3
        console.log(i+100);
    } else {
console.log(i);
    }
     
}
// TODO

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) {
        console.log(i);
    } else {
        if(i%3 == 1) {
            console.log(i+100);
        } else {
            console.log(i+200)
        }
    }
}

//Solution 2
console.log("Exercice 9 bis");
for(let i = 0; i < 10 ; i ++) {
    console.log(i + (i%3)*100);
}


// TODO

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
// TODO

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
// TODO

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
// TODO

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
// TODO

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
// TODO

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
// TODO

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
// TODO

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
// TODO

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
// TODO

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
// TODO

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
// TODO

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
// TODO

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
// TODO

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO
