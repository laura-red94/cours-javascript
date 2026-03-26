//Pour faire un commentaire monoligne
/*commentaires sur plusieurs lignes
document.write bien qu'elle fonctionne toujours est devenu obsolhete
et est remplacée par la fonction document.writeln */
document.writeln("<h2>2. Premiers pas :</h2>");
document.writeln("Je suis du JS externe (recommandé).");
//------------------les variables-------------------
document.writeln("<h2>3. Les variables :</h2>");
var A = 5; //déclare la variable a et l'affecte avec la valeur 5
document.writeln("la valeur de A : ", A);
//Depuis Ecma5 on déclare avec let
let a = 'coucou';
document.writeln("<br>la valeur de a : ", a);
A='toto';
a = 120;
document.writeln("<br>la valeur de A : ", A);
document.writeln("<br>la valeur de a : ", a);
let b = 12.5;
let c = true;
document.writeln("<br>la valeur de a : ", a, " le type de a : ", typeof(a));
document.writeln("<br>la valeur de A : ", A, " le type de A : ", typeof(A));
document.writeln("<br>la valeur de b : ", b, " le type de b : ", typeof(b));
document.writeln("<br>la valeur de c : ", c, " le type de c : ", typeof(c));
//Pour nommer les variables , le camelCase ou kamelCase reste la recommandation
let prenomNom = "jean Dujardin";
document.writeln("<br>la valeur de prenomNom : ", prenomNom, " le type de prenomNom : ", typeof(prenomNom));
//------------------les constantes-------------------
document.writeln("<h3>3.5. Les constantes :</h3>");
const drapeuDeFrance = "Bleu Blanc Rouge"; //On déclare une constante avec l'instruction const
//drapeuDeFrance = "Black Blanc Beurre"; Ne jamais changer la valeur d'une constante
document.writeln("les couleurs du drapeau de la France sont : ", drapeuDeFrance);
//--------constante prédéfini de la librairie Math---------------
document.writeln("<br>la valeur de PI est de : ", Math.PI);
document.writeln("<br>la valeur de Epsilon est de : ", Math.E);
let nbr1 = Math.random(); //renvoie un nombre aleatoire entre 0 et 1
let nbr2 = Math.random()*100; //pour avoir un nombre entre 0 et 100
document.writeln("<br>nbr1 : ", nbr1);
document.writeln("<br>nbr2 : ", nbr2);
//les methodes pour arrondir
document.writeln("<br>nbr1 : ", Math.ceil(nbr1));
document.writeln("<br>nbr2 : ", Math.floor(nbr2));
document.writeln("<br>nbr2 : ", Math.round(nbr2));
//------------------les actions sur le navigateur-----------------
document.writeln("<h2>4. Actions sur le navigateur :</h2>");
//les instructions de lecture
//let prenom1 = prompt("Entrez votre prénom"); //pour recuperer la saisie de l'utilisateur
//confirm("Vous confirmez que votre prenom est bien "+prenom1); //obtenir une confirmation utilisateur
//les intructions d'écriture
//document.writeln("Bonjour ", prenom1); //ecrire sur la page html
//alert("Bonjour "+prenom1); //popup pour afficher un message
//console.log("Bonjour "+prenom1); //Pour les tests
//------------------5. Les opérateurs-----------------
document.writeln("<h2>5. Les opérateurs :</h2>");
document.writeln("<h3>5.1. Les opérateurs de concaténation :</h3>");
//Opérateurs de concaténation
prenom = "Jean";
nom = "Dujardin";
let age = 42;
let infos = prenom+" "+nom+" "+age+"ans<br>";
document.writeln(infos);
document.writeln(prenom, " ", nom, " ", age, "ans");
document.writeln("<h3>5.2. Les opérateurs arithmétiques :</h3>");
//Opérateurs arithmétiques
nbr1 = 20;
nbr2 = 100;
document.writeln(nbr1, " + ", nbr2, " = ", nbr1+nbr2, "<br>");
document.writeln(nbr1, " - ", nbr2, " = ", nbr1-nbr2, "<br>");
document.writeln(nbr1, " * ", nbr2, " = ", nbr1*nbr2, "<br>");
document.writeln(nbr1, " / ", nbr2, " = ", nbr1/nbr2, "<br>");
//% c'est le reste de la division
document.writeln(nbr1, " % ", nbr2, " = ", nbr1%nbr2, "<br>");
//puissance
document.writeln(nbr1, " ^ ", nbr2, " = ", nbr1**nbr2, "<br>");
//incrémentation
nbr1++; //nbr1 = nbr1+1
document.writeln("incrementation de nbr1 ", nbr1, "<br>");
//décrémentation
nbr2--; //nbr2 = nbr2-1
document.writeln("décrementation de nbr2 ", nbr2, "<br>");
//-------------------------------------------------------
document.writeln("<h3>5.3. Les opérateurs d'affectation' :</h3>");
//Opérateurs d'affectation
document.writeln("la valeur initiale de nbr1 est de : ", nbr1, "<br>");
nbr1+=nbr2; //nbr1 = nbr1 + nbr2
document.writeln("la nouvelle valeur de nbr1 est de : ", nbr1, "<br>");
nbr1-=nbr2;
document.writeln("la nouvelle valeur de nbr1 est de : ", nbr1, "<br>");
nbr1/=nbr2;
document.writeln("la nouvelle valeur de nbr1 est de : ", nbr1, "<br>");
nbr1*=nbr2;
document.writeln("la nouvelle valeur de nbr1 est de : ", nbr1, "<br>");
nbr1%=nbr2;
document.writeln("la nouvelle valeur de nbr1 est de : ", nbr1, "<br>");
//-------------------------------------------------------
document.writeln("<h3>5.4. Les opérateurs de comparaison et ternaire' :</h3>");
//Opérateurs de comparaison et ternaire
document.writeln((nbr1>nbr2)? nbr1/nbr2 : nbr2/nbr1);
/*EXO: écrire un programme qui demande à l'utilisateur de saisir son age et une confirmation de son age. Le programme affiche bienvenue s'il a plus de 18 ans, accès refusé s'il a moins de 18ans ou aurevoir s'il ne confirme pas son age.
*/
// age = prompt("Saisissez votre age");
// let conf = confirm("Confirmez que vous avez "+age+" ans");
// (conf==true) ? alert((age>=18) ? "Bienvenue" : "Accès refusé") : alert("Aurevoir");
a = 5;
b = 6;
c = 2;
document.writeln("<br>");
document.writeln((a>b)?"a est superieur à b <br>" : "a est inferieur à b <br>");
document.writeln((a>=c)?"a est superieur ou égale à c <br>" : "a est inferieur à c <br>");
document.writeln((a==b)?"a est égale à b <br>" : "a est different de b <br>");
document.writeln((a!=b)?"a est different de b<br>" : "a est égale à b <br>");
//------------------6. Les conversions-----------------
document.writeln("<h2>6. Les conversions :</h2>");
b = "5.1";
c = 2.8;
document.writeln("la valeur de a :", a, " son type : ", typeof(a), "<br>");
document.writeln("la valeur de b :", b, " son type : ", typeof(b), "<br>");
document.writeln("la valeur de c :", c, " son type : ", typeof(c), "<br>");
document.writeln("la somme de :", a, " + ", b, " = ", a+b, " son type : ", typeof(a+b), "<br>");
//changer une chaine de caractères en nombre
document.writeln("la somme de :", a, " + Number(", b, ") = ", a+Number(b), " son type : ", typeof(a+b), "<br>");
document.writeln("la somme de :", a, " + parseFloat(", b, ") = ", a+parseFloat(b), " son type : ", typeof(a+b), "<br>");
document.writeln("la somme de :", a, " + parseInt(", b, ") = ", a+parseInt(b), " son type : ", typeof(a+b), "<br>");
//changer un nombre en chaine de caractères
c=c+"";
document.writeln("la valeur de c :", c, " son type : ", typeof(c), "<br>");
a = String(a);
document.writeln("la valeur de a :", a, " son type : ", typeof(a), "<br>");
//------------------7. Les chaines de caractères-----------------
document.writeln("<h2>7. Les chaines de caractères :</h2>");
let chaine = "LE javascript EsT uN LAngaGe VraiMENT troP CoOl ! <br>";
document.writeln(chaine);
document.writeln(chaine.toLocaleLowerCase()); //mettre en miniscule
document.writeln(chaine.toUpperCase()); //mettre en majuscule
document.writeln(chaine.strike()); //barrer le texte
document.writeln(chaine.bold()); //mettre en gras
document.writeln(chaine.small()); //diminuer la taille
document.writeln(chaine.fontcolor("blue")); //ajouter une couleur
document.writeln(chaine.fontsize("6px")); //ajuster la taille
document.writeln(chaine.length); //la longueur du texte
//------------------8. Les conditions-----------------
document.writeln("<h2>8. Les conditions :</h2>");
document.writeln("<h3>8.1. condition simple:</h3>");
//condition simple
let e = 200;
let f = 200;
if(e<=f){
    document.writeln(e, " est inférieur à ",f, '<br>');
}
if(f>=e){
    document.writeln(f, " est supérieur à ",e, '<br>');
}
document.writeln("<h3>8.2. condition alternative :</h3>");
//condition alternative
if(e<=f){
    document.writeln(e, " est inférieur à ",f, '<br>');
}else{
    document.writeln(e, " est supérieur à ",f, '<br>');
}
document.writeln("<h3>8.3. conditions multiples :</h3>");
//conditions multiples
if(e<f){
    document.writeln(e, " est inférieur à ",f, '<br>');
}else if(e==f){
    document.writeln(e, " est égale à ",f, '<br>');
}else{
    document.writeln(e, " est supérieur à ",f, '<br>');
}
/*EXO1: ecrire un programme qui demande à l'utilisateur de saisir sa moyenne et affiche un message d'erreur si la moyenne est inférieur à zero ou supérieur à 20
sinon affiche moyenne insuffisante si <10, passable si <12, à bien si <14, bien si <16, très bien si <18 et félicitations si >=18
*/
// let moyenne = prompt("Saisissez votre moyenne");
// if(moyenne < 0 || moyenne > 20){
//     alert("Erreur, la moyenne doit etre comprise entre 0 et 20")
// }else if(moyenne<10){
//     alert("Moyenne insuffisante");
// }else if(moyenne<12){
//     alert("Mention passable");
// }else if(moyenne<14){
//     alert("Mention à bien");
// }else if(moyenne<16){
//     alert("Mention bien");
// }else if(moyenne<18){
//     alert("Mention très bien");
// }else{
//     alert("FELICITATIONS !");
// }

/*EXO2: Ecrire un programme qui demande à l'utilisateur de saisir un jour de la semaine
et affiche par exemple : lundi est le 1er jour de la semaine. Ce programme doit etre insensible à la casse.
*/
// let jour = prompt("Saisissez un jour de la semaine");
// jour = jour.toLocaleLowerCase();
// if(jour == 'lundi'){
//     alert(jour+ ' est le 1er jour de la semaine');
// }else if(jour == 'mardi'){
//     alert(jour+ ' est le 2ème jour de la semaine');
// }else if(jour == 'mercredi'){
//     alert(jour+ ' est le 3ème jour de la semaine');
// }else if(jour == 'jeudi'){
//     alert(jour+ ' est le 4ème jour de la semaine');
// }else if(jour == 'vendredi'){
//     alert(jour+ ' est le 5ème jour de la semaine');
// }else if(jour == 'samedi'){
//     alert(jour+ ' est le 6ème jour de la semaine');
// }else if(jour == 'dimanche'){
//     alert(jour+ ' est le 7ème jour de la semaine');
// }else{
//     alert(jour+ ' est un jour inexistant, ERREUR');
// }
document.writeln("<h3>8.4 condition multiple (switch case) :</h3>");
//switch case
// let civilite = prompt("Entrez votre civilite Mr, Mme, ...");
// nom = prompt("Saisissez votre nom");
// civilite = civilite.toLowerCase();
// nom = nom.toUpperCase();
// switch(civilite){
//     case 'mr':
//         alert("Bonjour Monsieur "+nom);
//         break;
//     case 'mme':
//         alert("Bonjour Madame "+nom);
//         break;
//     default :
//         alert("je ne comprends pas");
// }

let nbr = Math.round(Math.random()*5);
switch(nbr){
    case 0 :
        document.writeln("le nombre aléatoire est 0 <br>");
        break;
    case 1 :
        document.writeln("le nombre aléatoire est 1 <br>");
        break;
    case 2 :
        document.writeln("le nombre aléatoire est 2 <br>");
        break;
    case 3 :
        document.writeln("le nombre aléatoire est 3 <br>");
        break;
    case 4 :
        document.writeln("le nombre aléatoire est 4 <br>");
        break;
    default :
        document.writeln("le nombre aléatoire est 5 <br>");
}
//EXO : Ecrire le meme programme des jours de la semaine pour les mois de l'année avec un switch case. exemple: l'utilisateur saisit fevrier et le programme affiche; "fevrier est le 2eme mois de l'année."
// let mois = prompt("Saisissez un mois de l'année");
// mois = mois.toLowerCase();
// switch(mois){
//     case 'janvier':
//         alert(mois+" est le 1er mois de l'année");
//         break;
//     case 'fevrier':
//     case 'février':
//         alert(mois+" est le 2eme mois de l'année");
//         break;
//     case 'mars':
//         alert(mois+" est le 3eme mois de l'année");
//         break;
//     case 'avril':
//         alert(mois+" est le 4eme mois de l'année");
//         break;
//     case 'mai':
//         alert(mois+" est le 5eme mois de l'année");
//         break;
//     case 'juin':
//         alert(mois+" est le 6eme mois de l'année");
//         break;
//     case 'juillet':
//         alert(mois+" est le 7eme mois de l'année");
//         break;
//     case 'aout':
//     case 'août':
//         alert(mois+" est le 8eme mois de l'année");
//         break;
//     case 'septembre':
//         alert(mois+" est le 9eme mois de l'année");
//         break;
//     case 'octobre':
//         alert(mois+" est le 10eme mois de l'année");
//         break;
//     case 'novembre':
//         alert(mois+" est le 11eme mois de l'année");
//         break;
//     case 'decembre':
//     case 'décembre':
//         alert(mois+" est le dernier mois de l'année");
//         break;
//     default :
//         alert(mois+" est un mois inexistant dans l'année terrienne");
// }
//----------------les boucles-------------------------------------
document.writeln("<h2>9. Les boucles:</h2>");
document.writeln("<h3>9.1. La boucle for :</h3>");
//Boucle for pour incrementer
for(i=0; i<=10; i++){
    if(i==5){
        break; // pour arreter la boucle
    }
    document.writeln(i,"eme passage de la boucle <br>");
}
document.writeln("<hr>");
//Boucle for pour décrementer
for(i=10; i>=0; i--){
    if(i==5){
        continue; //pour sauter une iteration
    }
    document.writeln(i,"eme passage de la boucle <br>");
}
document.writeln("<h3>9.2. La boucle for in  :</h3>");
let tab = [1, 5, 9, 6, 3, 2, 7, 4];
for(i in tab){ //parcours les indices du tableau
    document.writeln("indice : ", i, " / valeur : ", tab[i], "<br>");
}
document.writeln("<h3>9.3. La boucle for of :</h3>");
i=0;
for(val of tab){ //Parcours les valeurs du tableau
    //document.writeln(" valeur : ", val, "<br>");
    document.writeln("indice : ", i, " / valeur : ", tab[i], "<br>");
    i++;
}
document.writeln("<h3>9.4. La boucle foreach :</h3>");
tab.forEach((valeur, indice)=>{ //parcours les valeurs et les indices
    document.writeln("indice : ", indice, " / valeur : ", valeur, "<br>");
});
document.writeln("<hr>");
tab.forEach((valeur)=>{ //parcours les valeurs uniquement
    document.writeln("valeur : ", valeur, "<br>");
});
document.writeln("<h3>9.5. La boucle while :</h3>");
i=20;
while(i<=10){
    document.writeln("Je suis le passage numero ", i, "<br>");
    i++;
}

document.writeln("<h3>9.6. La boucle do while :</h3>");
i=20;
do{
    document.writeln("Je suis le passage numero ", i, "<br>");
    i++;
}while(i<=10)

//Exo1: Ecrire un programme qui permet d'afficher la table de mutiplication de 5 ex: 5x1=5 jusqu'à 5x12=60

//EXO2: Ecrire un programme qui permet d'afficher tous les nombres premiers entre 0 à 100

//EXO3: Ecrire le programme du juste prix qui fait deviner à l'utilisateur un nombre compris entre 0 et 10,000. Il affiche "plus grand" si le nombre saisi est plus petit et "plus petit" si le nombre saisi est plus grand. Le programme affiche bravo si le nombre saisi correspond et le nombre de tentatives pour y arriver.
document.writeln("<br>EXOS<br>----Table de multiplication------<br>");
let m = 5;
for(i=1; i<=12;i++){
    document.writeln(m, " x ", i, " = ", m*i, "<br>");
}
document.writeln("<br>----Nombre premier entre 0 et 100------<br>");
//methode 1
for(i=2; i<=100; i++){
    for(j=2; j<=i; j++){
        if(i%j==0){
            break;
        }
    }
    if(i==j){
        document.writeln(i, ', ');
    }
}
//methode 2
document.writeln('<br> ');
let premier;
for(i=1; i<=100; i++){
    premier = 0;
    for(j=1; j<=i; j++){
        if(i%j==0){
            premier++;
        }
    }
    if(premier == 2){
        document.writeln(i, ', ');
    }
}
document.writeln("<br>----Le juste prix------<br>");
// let prix, tentatives, saisi;
// tentatives = 0;
// prix = Math.round(Math.random()*10000);
// do{
//     saisi = Number(prompt("Saisissez un prix entre 0 et 10,000"));
//     if(saisi < prix){
//         alert("Plus grand");
//     }else if(saisi == prix){
//         alert("Bravo");
//     }else{
//         alert("Plus petit");
//     }
//     tentatives++;
// }while(saisi != prix);
// alert("Vous avez trouvé au bout de "+ tentatives+ " tentatives.");
//--------------------------les tableaux--------------------------------------
document.writeln("<h2>10. Les tableaux :</h2>");
document.writeln("<h3>10.1 les tableaux à une dimension :</h3>");
//Déclaration d'un tableau
//premiere methode
let tab1 = [];
//Deuxieme methode
let tab2 = new Array();
// console.log(typeof(tab1));
// console.log(typeof(tab2));

//Initialisation d'un tableau
//Premiere methode
tab1 = [1, 5, 9, 6, 3, 2, 7, 4];
//Deuxieme methode
tab2 = new Array("Yanis", "Adam", "Emna", "Myriam", "Jordan");

//Déclaration + initialisation
let tab3 = ["Sofiane", "stephane", "Laura", "Taylan"];
let tab4 = new Array("Sophie", "Mirana", "Siham", "Nizar");
//Affichage d'un tableau
document.writeln("tab1 : ", tab1, "<br>");
document.writeln("tab2 : ", tab2, "<br>");
document.writeln("tab3 : ", tab3, "<br>");
document.writeln("tab4 : ", tab4, "<br>");
//parcourir un tableau
for(i=0;i<tab1.length;i++){
    document.writeln("indice : ", i, " / valeur : ", tab1[i], "<br>");
}
document.writeln("<hr>");
//Modifier un tableau
tab1[7] = 24;
tab1[0] = 12
for(i=0;i<tab1.length;i++){
    document.writeln("indice : ", i, " / valeur : ", tab1[i], "<br>");
}
//Ajouter une valeur à un tableau
tab1[tab1.length] = 8;
document.writeln(tab1);
//Exo: copier tab3 et tab4 dans tab2
document.writeln("<hr>");
for(val of tab3){
    tab2[tab2.length] = val;
}
for(val of tab4){
    tab2[tab2.length] = val;
}
document.writeln(tab2);
//Exo: Permuter Adam et Siham dans le tableau
let pos1, pos2, temp;
for(i in tab2){
    if(tab2[i]== "Adam"){
        pos1 = i;
    }
    if(tab2[i]== "Siham"){
        pos2 = i;
    }
}
temp = tab2[pos1];
tab2[pos1] = tab2[pos2];
tab2[pos2] = temp;
document.writeln("<br>-------------Apres permutation---------------<br>");
document.writeln(tab2);

//EXO1 : creer un tableau avec les jours de la semaine et un autre avec les mois de l'année. Ensuite écrivez un programme qui demande à l'utilisateur de saisir un jour entre 1 et 7 et un mois entre 1 et 12 et le programme affiche par exemple : Mardi 28 Octobre 2025 grace aux tableaux déjà créés. Le jj et l'année peuvent rester fixe ou générer aléatoirement.

//EXO2 : écrire un programme qui donne le minimum et le maximum du tableau tab1

//EXO3: écrire un programme qui demande à l'utilisateur de saisir un nombre d'élèves ensuite la moyenne de chaque élève. Affiche le tableau puis calcule la moyenne générale de la classe et l'affiche.
//cherche la meilleure note et l'affiche
//Affiche toutes les notes supèrieures à 10 

document.writeln("<br>-----------------EXO1--------------------<br>");
// jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
// mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet","aout", "septembre", "octobre", "novembre", "decembre"];
// let joursaisi = Number(prompt("Saisissez un jour entre 1 et 7"));
// let moisaisi = Number(prompt("Saisissez un mois entre 1 et 12"));
// let jj = Math.round(Math.random()*30)+1;
// document.writeln(jours[joursaisi-1], " ", jj, " ", mois[moisaisi-1], " 2025<br>");
document.writeln("<br>-----------------EXO2--------------------<br>");
document.writeln(tab1, "<br>");
// let posmin, posmax;
// posmin = 0;
// posmax = 0;
// for(i in tab1){
//     if(tab1[i]<tab1[posmin]){
//         posmin = i;
//     }
//     if(tab1[i]>tab1[posmax]){
//         posmax = i;
//     }
// }
// document.writeln("la valeur minimale du tableau est : ",tab1[posmin], "<br>");
// document.writeln("la valeur maximale du tableau est : ",tab1[posmax], "<br>");
// document.writeln("<br>-----------------EXO3--------------------<br>");
// let nbreleves = parseInt(prompt("Saisisez le nombre d'eleves"));
// let eleves = [];
// for(i=0; i<nbreleves;i++){
//     eleves[i] = Number(prompt("Entrez la moyenne de l'eleve " + Number(i)+1));
// }
// document.writeln(eleves);
// //Calcule la moyenne de la classe
// let moyenne, somme;
// somme =0;
// for(notes of eleves){
//     somme+=notes;
// }
// moyenne = somme/nbreleves;
// document.writeln("<br>La moyenne de la classe est de : ", moyenne, "<br>");
// //cherche la meilleure note
// let bnote = 0;
// for(notes of eleves){
//     if(notes > bnote){
//         bnote = notes;
//     }
// }
// document.writeln("<br>La meilleure note de la classe est : ", bnote, "<br>");
// //Affiche les notes >= 10
// document.writeln("<br>Les notes supérieures à 10 : <br>");
// for(notes of eleves){
//     if(notes >= 10){
//         document.writeln(notes, ", ");
//     }
// }
//-------------------les methodes de l'objet Array-------------------------
document.writeln("<h3>10.2 les méthodes de l'objet Array :</h3>");
document.writeln("<br>", tab2, "<br>");
tab2.pop(); //permet de supprimer le dernier element du tableau
document.writeln(tab2, "<br>");
tab2.shift(); //permet de supprimer le premier element du tableau
document.writeln(tab2, "<br>");
tab2.push("Nizar"); //ajoute à la fin du tableau
document.writeln(tab2, "<br>");
tab2.unshift("Yanis"); //ajoute au debut du tableau
document.writeln(tab2, "<br>");
tab2.splice(3, 0, "Jade", "victor", "Emma", "Claude"); //ajoute des elements à partir d'un indice donné
document.writeln(tab2, "<br>");
tab2.splice(3,4); //supprime des elements à partir d'un indice donné
document.writeln(tab2, "<br>");
//----------------------------tableaux multidimentionnels---------------------
document.writeln("<h3>10.3 les tableaux multidimentionnels :</h3>");
//Déclaration et initialisation
//premiere methode
let users = [
    ["Prenom", "Identifiant", "Mdp", "Age"],
    ["Yanis", "yanis@gmail.com", "12345", 25],
    ["Adam", "adam@outlook.fr", "12345", 22],
    ["Emna", "emna@yahoo.fr", "12345", 28],
    ["Myriam", "myriam@orange.fr", "12345", 18],
    ["Jordan", "jordan@free.fr", "12345", 20],
    ["Taylan", "taylan@wanadoo.fr", "12345", 40]
];
//deuxieme methode
let client1 = new Array("Laura", "laura@gmail.com", "12345", 17);
let client2 = new Array("Stephane", "stephane@gmail.com", "12345", 37);
let client3 = new Array("Sofiane", "sofiane@gmail.com", "12345", 28);
let client4 = new Array("Siham", "siham@gmail.com", "12345", 15);
let client5 = new Array("Mirana", "mirana@gmail.com", "12345", 12);
let client6 = new Array("Nizar", "nizar@gmail.com", "12345", 45);
let clients = new Array(client1, client2, client3, client4, client5, client6);4
//Affichage des tableaux
document.writeln(users, "<br>");
document.writeln(clients, "<br>");
//Parcourir et afficher un tableau multidimentionnel
for(client of clients){
    for(info of client){
        document.writeln(info, " ");
    }
    document.writeln("<br>");
}
//Autre affichage
// for(i=1; i<=users.length;i++){
//     document.writeln("<b>",users[0][0], " : </b>" ,users[i][0], "<br>");
//     document.writeln("<b>",users[0][1], " : </b>" ,users[i][1], "<br>");
//     document.writeln("<b>",users[0][2], " : </b>" ,users[i][2], "<br>");
//     document.writeln("<b>",users[0][3], " : </b>" ,users[i][3], "<br><br>");
// }
//Avec 2 boucles
// document.writeln("<br>Affichage avec 2 boucles<br>");
// for(i=1; i<=users.length;i++){
//     for(j=0; j<=users[i].length;j++){
//         switch(j){
//             case 0 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             case 1 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             case 2 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             case 3 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             default :
//                 document.writeln("<br>");
//         }
//     }
// }
/*EXO1: copier le tableau clients dans le tableau users et afficher le nouveau tableau users

EXO2: Ecrire un programme qui permet d'ajouter un user au tableau si seulement son identifiant n'existe pas déjà dans le tableau

EXO3: Ecrire un programme pour la connexion, affiche connexion réussie si l'identifiant et la mot de passe saisis correspondent aux données du tableau et identifiant ou mot de passe incorrect sinon

EXO4 : Ecrire un programme qui calcule la moyenne d'age du tableau users

EXO5: Ecrire un programme qui permet de supprimer un utilisateur du tableau grace à son idenfiant.
*/
document.writeln("<br>----------------EXO1-----------------------<br>");
for(client of clients){
    users.push(client);
}
document.writeln("<br>Affichage du nouveau tableau users<br>");
// for(i=1; i<=users.length;i++){
//     for(j=0; j<=users[i].length;j++){
//         switch(j){
//             case 0 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             case 1 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             case 2 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             case 3 :
//                 document.writeln("<b>",users[0][j], " : </b>" ,users[i][j], "<br>");
//                 break;
//             default :
//                 document.writeln("<br>");
//         }
//     }
// }
document.writeln(users, "<br>");
document.writeln("<br>----------------EXO2-----------------------<br>");
// let id = prompt("Saisissez votre mail");
// let exist = 0;
// for(user of users){
//     for(info of user){
//         if(id==info){
//             alert("cet identifiant existe déjà");
//             exist++;
//             break;
//         }
//     }
// }
// if(exist == 0){
//     prenom = prompt("Saisissez votre prenom");
//     mdp = prompt("Saisissez votre mot de passe");
//     age = Number(prompt("Saisissez votre age"));
//     let ajout = [prenom, id, mdp, age];
//     users.push(ajout);
//     alert("Vous etes bien inscrit");
// }
//document.writeln(users, "<br>");
document.writeln("<br>----------------EXO3-----------------------<br>");
//id = prompt("Saisissez votre mail");
// mdp = prompt("Saisissez votre mot de passe");
// let connexion = false;
// for(i=0;i<users.length;i++){
//         if((id==users[i][1]) && (mdp==users[i][2])){
//             alert("connexion réussie");
//             connexion = true;
//             break;
//         }
// }
// if(connexion == false){
//     alert("identifiant ou mot de passe incorrect");
// }
// document.writeln(users, "<br>");
document.writeln("<br>----------------EXO4-----------------------<br>");
somme = 0;
for(i=1;i<users.length;i++){
    somme+=users[i][3];
}
moyenne = Math.ceil(somme/users.length);
document.writeln("la moyenne d'age est de : ", moyenne, "ans.<br>");
document.writeln("<br>----------------EXO5-----------------------<br>");
// id = prompt("Saisissez votre mail");
// let supp = false;
// for(i=0;i<users.length;i++){
//         if(id==users[i][1]){
//             conf = confirm("confirmez la suppression de votre compte");
//             if(conf == true){
//                 users.splice(i,1);
//                 alert("suppression réussie");
//             }else{
//                 alert("Suppression annulée")
//             }
//             supp = true;
//             break;
//         }
// }
// if(supp == false){
//     alert("identifiant incorrect");
// }
document.writeln(users, "<br>");
//Modification
users[1][1] = "yanis@yahoo.fr";
users[0][0] = "";
users[0][1] = "";
users[0][2] = "";
users[0][3] = "";
document.writeln(users, "<br>");
//-------------------------------Les fonctions--------------------------------
document.writeln("<h2>11. Les fonctions :</h2>");
//1 fonction simple sans arguments ni return
function bonjour(){ //creation de la fonction
    document.writeln("Bonjour, il fait pas beau aujourd'hui !<br>");
}
//Une fonction ne s'execute qu'à son appel
bonjour(); //appel de la fonction

//2 fonction sans arguments mais avec un return
function bonsoir(){ //décalration de la fonction
    m = "Bonsoir, ça caille en ce moment !<br>";
    return m;
}
let bons = bonsoir(); //Attention le return n'affiche pas de message, c'est un stockage en memoire
document.writeln(bons); //Affichage

//3 fonction avec arguments (parametres) et sans return
function comparer(a, b){ //Déclaration de la fonction
    if(a>b){
        document.writeln(a, " est superieur à ", b, "<br>");
    }else if(a == b){
        document.writeln(a, " est égale à ", b, "<br>");
    }else{
        document.writeln(a, " est inferieur à ", b, "<br>");
    }
}
comparer(5, 4);
comparer(3, 3);
comparer(2, 6);

//4 fonction avecs arguments(parametres) et return
function perimetrerectangle(L, l){//Déclaration de la fonction
    return (L+l)*2;
}
let rectangle = perimetrerectangle(7, 4);
document.writeln("<br> le perimetre du rectangle est de : ", rectangle, "m<br>");
//les fonctions flechees
document.writeln("<br>-------------- Les fonctions flechees ----------------<br>");
let ff = ()=>{ //la fonction flechee est anonyme donc on utilise soit une variable ou une constante pour la stocker afin de pouvoir l'appeler
    document.writeln("Je suis une fonction flechee sans arguments ni return<br>");
}
ff(); //appel à la fonction

// fonction flechee avec argument et return
const carre = (a)=>{
    return a*a;
}
let car = carre(8);
document.writeln("Le carré de 8 est : ", car, "<br>");

/*EXO : 1 Ecrire une fonction saisie () qui demande à l'utilisateur de saisir un nombre et retourne le nombre saisi.
2 Ecrire les fonctions addition, soustraction, multiplication et divison qui font appel à la fonction saisie et affiche le resultat.
3 ecrire une fonction operation() qui demande à l'utilisateur de choisir une operation parmi celle déjà développé et appelle la fonction associée. L'utilisateur peut saisir q pour quitter.
4 Faites appel à la fonction operation() dans une boucle pour que l'utilisateur puisse faire autant d'opération qu'il le souhaite tant qu'il n'a pas appuyer sur q pour quitter.
*/
//1
function saisie(){
    let saisie = Number(prompt("Saisissez un nombre"));
    return saisie;
}
//2
function addition(){
    let a = saisie();
    let b = saisie();
    res = a+b;
    alert(a+" + "+b+" = "+ res);
}
function soustraction(){
    let a = saisie();
    let b = saisie();
    res = a-b;
    alert(a+" - "+b+" = "+ res);
}
function multiplication(){
    let a = saisie();
    let b = saisie();
    res = a*b;
    alert(a+" * "+b+" = "+ res);
}
function division(){
    let a = saisie();
    let b = saisie();
    res = a/b;
    if(b==0){
        alert("Division impossible")
    }else{
        alert(a+" / "+b+" = "+ res);
    }
}
//3
function operation(){
    let operateur = prompt("Saisissez votre opération + - / * ou q");
    switch(operateur){
        case '+':
            addition();
            return true;
            break;
        case '-':
            soustraction();
            return true;
            break;
        case '*':
            multiplication();
            return true;
            break;
        case '/':
            division();
            return true;
            break;
        case 'q':
            alert("Au revoir et à bientot");
            return false;
            break;
        default:
            alert("Erreur, veuillez saisir une opération correcte");
    }
}
//4
//let ope;
// do{
//     ope = operation();
// }while(ope==true);

/*EXO : 1 Ecrire une fonction qui permet d'afficher la table de multiplication de son argument.
2 utiliser cette fonction dans une boucle pour afficher les tables de 1 à 10
*/
function table(a){
    document.writeln("<br>----------TABLE DE ", a,"------------<br>");
    for(i=1;i<=12;i++){
        document.writeln(a, " x ",i, " = ", a*i, "<br>");
    }
}
n = 1;
while(n<=10){
    table(n);
    n++;
}
//--------------------------Les objets--------------------------
document.writeln("<h2>12. Les objets :</h2>");
//Les objets avant ECMA6 (2015) sur javascript
//Premiere methode pour creer un objet
let personne = {
    //les proprietes sont les variables, constantes ou tableau de l'objet
    nom : "Doe", 
    prenom : "John",
    taille : 190,
    poids : 95,
    age : 35,
    passions : ["voyage", "lecture", "cuisine"],
    //les methodes sont les fonctions de l'objet
    presentation : function (){
        document.writeln("Je m'appelle ", this.prenom, " ", this.nom, ", je mesure ", this.taille, "cm et je pèse ", this.poids, "kg.<br>", "J'ai ", this.age, "ans et je suis passionné de ", this.passions, ".<br>");
    }
}//On utilise l'instruction this à l'interieur de l'objet ou de la class
//En dehors de l'objet ou de la classe, on utilise le nom de l'objet suivi d'un point et du nom de la methode ou de la propriete.
// console.log(personne.nom);
// console.log(personne.prenom);
// console.log(personne.age);
// console.log(personne.poids);
// console.log(personne.taille);
// for( a of personne.passions){
//     console.log(a);
// }
personne.presentation();

//Deuxieme methode creer un constructeur d'objet grace aux fonctions
function employe(nom, prenom, salaire){
    //les proprietes
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
    //les methodes
    this.changerSalaire = changerSalaire; // declarer la methode comme propriete avant de l'utiliser
    function changerSalaire(nouveauSalaire){
        this.salaire = nouveauSalaire;
    }
}
//On utilise l'instruction new pour creer de nouveaux objets
e1 = new employe("Van damme", "Jean Claude", 3000);
e2 = new employe("Li", "Jet", 4000);
e3 = new employe("Hang", "Samo", 2500);
// console.log(e3.nom);
// console.log(e3.prenom);
// console.log(e3.salaire);
// e3.changerSalaire(5000);
// console.log(e3.nom);
// console.log(e3.prenom);
// console.log(e3.salaire);
//______________________________________class__________________________________________
//Depuis ECMA6 on peut utiliser l'instruction class comme dans tous les autres langages de programmation
//Il est recommandé de commencer par une majuscule pour nommmer une class
class Rectangle {
    constructor(longueur, largeur){ //constructeur de la class à ne jamais oublier
        this.longueur = longueur;
        this.largeur = largeur;
    }
    perimetreRectangle(){
        return (this.longueur + this.largeur)*2;
    }
    superficieRectangle(){
        return this.longueur*this.largeur
    }
    infosRectangle(){
        document.writeln("<br>je suis un rectangle de ", this.longueur, "cm de longueur et ", this.largeur, "cm de largeur. <br>");
    }
}
//On peut maintenant creer des objets à partir de cette class
rec1 = new Rectangle(7, 4);
rec2 = new Rectangle(30, 25);
rec3 = new Rectangle(50, 40);
rec1.infosRectangle();
document.writeln("le perimetre du rectangle 2 est de : ", rec2.perimetreRectangle(), "cm <br>");
document.writeln("la superficie du rectangle 3 est de : ", rec3.superficieRectangle(), "cm2 <br>");

//Il est recommandé dans la POO d'utiliser des accesseurs (geteur et seteur) pour manipuler les proprietes de l'objet
class Carre{
    constructor(cote){
        this.cote = cote;
    }
    get getCote(){ //geteur
        return this.cote;
    }
    set setCote(nouveaucote){ //seteur
        this.cote = nouveaucote;
    }
    perimetreCarre(){
        return this.cote*4;
    }
    superficieCarre(){
        return this.cote*this.cote;
    }
    infosCarre(){
        document.writeln("<br>je suis un carré de ", this.cote, "cm. <br>");
    }
}
carre1 = new Carre(8);
carre1.infosCarre();
document.writeln("Le coté du caré est de ", carre1.getCote);
carre1.setCote = 15; //le set fonctionne avec le =
carre1.infosCarre();
document.writeln("Le perimetre du caré est de ", carre1.perimetreCarre(), "cm2 <br>");
document.writeln("La superficie du caré est de ", carre1.superficieCarre(), "cm2 <br>");

//-------------------------------------HERITAGE-----------------------------------
document.writeln("<h3>HERITAGE</h3>");
class Animal{
    constructor(nom){
        this.nom = nom;
    }
    get getNom(){
        return this.nom;
    }
    set setNom(newName){
        this.nom = newName;
    }
    parler(){
        document.writeln("Je suis un ", this.nom, " et je parle langue des ", this.nom, "s .<br>");
    }
}
chat = new Animal("chat");
homme = new Animal("homme");
chat.parler();
homme.parler();
class Chien extends Animal{ //on utilise l'instruction extends pour l'heritage
    parler(){
        document.writeln("Je suis un chien donc j'aboie .<br>");
    }
    deplacer(){
        document.writeln("Je suis un chien je me déplace à 4 pattes .<br>");
    }
}
filou = new Chien("Filou");
filou.parler();
filou.deplacer();
document.writeln("Le nom du chien est ", filou.getNom, "<br>"); //le get sans les parentheses.
// chat.deplacer(); Impossible, une classe mère n'a pas accès aux proprietes et aux methodes de la classe enfant.
//Retenez bien, l'heritage est descendant et unidirectionnel
//pas de limite pour les heritiers et les generations d'heritiers
class Reptile extends Animal{
    constructor(nom, type){
        super(nom); //Pour garder le constructeur de la class mere
        this.type= type;
    }
    parler(){
        document.writeln("Je suis un reptile donc je siffle .<br>");
    }
    deplacer(){
        document.writeln("Je suis un reptile je me déplace en rampant .<br>");
    }
}
reptile = new Reptile("Reptile", "Lézard");
reptile.parler();
reptile.deplacer();

class Serpent extends Reptile{
    constructor(nom, type, couleur){
        super(nom, type);
        this.couleur = couleur;
    }
    deplacer(){
        document.writeln("Je suis un reptile ", this.couleur," je me déplace en rampant .<br>");
    }
}
let serpent = new Serpent("Serpent", "Boa", "Noir");
document.writeln("<br>");
serpent.parler();
serpent.deplacer();
document.writeln("Le nom du serpent est : ", serpent.getNom, "<br>");

//EXO : créer la class voiture avec son contructeur(marque, model, couleur) , ses accesseurs et la methode afficherVehicule()
//Creer un tableau avec les vehicules suivants : citroen c4 rouge, renault megane noir, peugeot 3008 bleu
//Creer la class trotinette qui herite de la class voiture et rajouter l'autonomie à son constructeur et ensuite creer un objet trotinette

class Voiture{
    constructor(marque, modele, couleur){
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
    }
    get getMarque(){
        return this.marque;
    }
    get getModele(){
        return this.modele;
    }
    get getCouleur(){
        return this.couleur;
    }
    set setMarque(newMarque){
        this.marque = newMarque;
    }
    set setModele(newModele){
        this.modele = newModele;
    }
        set setCouleur(newCouleur){
        this.couleur = newCouleur;
    }
    afficherVehicule(){
        document.writeln("<b>Marque : </b>", this.marque, "<br>",
                        "<b>Modele : </b>", this.modele, "<br>",
                        "<b>Couleur : </b>", this.couleur, "<br><br>"
        );
    }
}

v1 = new Voiture("citroen", "c4", "rouge");
v2 = new Voiture("renault", "megane", "noir");
v3 = new Voiture("peugeot", "3008", "bleu");
let voitures = [v1, v2, v3];
for(voiture of voitures){
    voiture.afficherVehicule();
}
class Trotinette extends Voiture{
    constructor(marque, modele, couleur, autonomie){
        super(marque, modele, couleur);
        this.autonomie = autonomie;
    }
    afficherVehicule(){
        document.writeln("<b>Marque : </b>", this.marque, "<br>",
                        "<b>Modele : </b>", this.modele, "<br>",
                        "<b>Couleur : </b>", this.couleur, "<br>",
                        "<b>Autonomie : </b>", this.autonomie, "<br><br>"
        );
    }
}
trot1 = new Trotinette("Suziki", "vm3", "gris", "60km");
trot1.afficherVehicule();
//--------------Manipulation du DOM-----------------------------------
document.writeln("<h2>13. Manipulation du DOM</h2>");
//querySelector ne renvoit qu'un seul element
// console.log(document.querySelector('h1')); //balise
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('p'));
// console.log(document.querySelector('#deuzio')); //id
// console.log(document.querySelector('.trois')); //class
// console.log(document.querySelector('main p span')); //chemin
// console.log(document.querySelector('ul li:first-child')); //pseudo selecteur

//querySelectorAll pour tout selectionner
//console.log(document.querySelectorAll('h2'));
// let h2s = document.querySelectorAll('.trois');
// for(h2 of h2s){
//     console.log(h2);
// }

//getElementById pour selection un element par son id
// console.log(document.getElementById("deuzio"));

//getElementsByClassName permet de selectionner des elements par leur class
//console.log(document.getElementsByClassName("trois"));

//getElementsByTagName permet de selectionner des elements par le nom de la balise
//console.log(document.getElementsByTagName("p"));

//ajout de proprietes css
let h1 = document.querySelector('h1');
h1.style.fontSize = '40px';
h1.style.color = 'blue';
h1.style.textAlign = 'center';
h1.style.backgroundColor = 'yellow';

//Ajout d'une class Css
let premierh2 = document.querySelector('h2');
premierh2.classList.add('visuel'); //add pour ajouter et remove pour effaceer

//Ajout de texte ou de contenu à un element
h1.textContent += " REMPLACEMENT DEPUIS LE JS"; //ne prend en charge que du text
premierh2.innerHTML += "<span> Je suis le span du h2</span>";

//----------------------------LES EVENEMENTS------------------------------
//le click et dblclick
//Premiere methode
// h1.addEventListener("click", ()=>{
//     h1.style.visibility = "hidden";
// });
// premierh2.addEventListener("dblclick", ()=>{
//     h1.style.visibility = "visible";
// });

//Deuxieme methode activation coté html
function afficher(){
    h1.style.visibility = "visible";
}
function cacher(){
    h1.style.visibility = "hidden";
}

//mouseenter mouseleave
h1.addEventListener("mouseenter", ()=>{
    h1.style.backgroundColor = "red";
    h1.style.padding = "20px";
});
h1.addEventListener("mouseleave", ()=>{
    h1.style.backgroundColor = "transparent";
    h1.style.padding = "4px";
});

//mousedown mouseup
premierh2.addEventListener("mousedown", ()=>{
    premierh2.style.backgroundColor = "green";
    premierh2.style.padding = "20px";
});
premierh2.addEventListener("mouseup", ()=>{
    premierh2.style.backgroundColor = "aqua";
    premierh2.style.padding = "5px";
});

//mouseover mouseout
let pp = document.querySelector('p');
pp.addEventListener("mouseover",()=>{
    pp.style.backgroundColor = "purple";
    pp.style.padding = "10px";
});
pp.addEventListener("mouseout",()=>{
    pp.style.backgroundColor = "transparent";
    pp.style.padding = "5px";
});

//LES evenements claviers keypress, keydown, keyup
let body = document.querySelector('body');
// body.addEventListener('keypress', (element)=>{
//     if(element.key == 'p' || element.key == 'P'){
//         body.style.backgroundColor = 'purple';
//     }
// });

body.addEventListener('keydown', (element)=>{
    if(element.key == 'b' || element.key == 'B'){
        body.style.backgroundColor = 'black';
    }
});

body.addEventListener('keyup', (element)=>{
    if(element.key == 'w' || element.key == 'W'){
        body.style.backgroundColor = 'white';
    }
});

//Evenements formulaire
let euro = document.getElementById('c1');
let dollar = document.getElementById('c2');
let conver = document.getElementById('conv');
let changer = document.querySelector('form button');
let eurosVersDollar = 1.12;
let dollarVersEuro = 0.89;

euro.addEventListener("input", ()=>{
    let resultat = Number(euro.value)*eurosVersDollar;
    dollar.value = resultat; //input fonctionne avec value pas de innerhtml ou de textcontent
});
dollar.addEventListener("input", ()=>{
    let resultat = Number(dollar.value)*dollarVersEuro;
    euro.value = resultat; 
});
changer.addEventListener("click", ()=>{
    let temp = euro.value;
    euro.value = dollar.value;
    dollar.value = temp;
});
euro.addEventListener("focus", ()=>{
    euro.style.backgroundColor = 'yellow';
});
euro.addEventListener("blur", ()=>{
    euro.style.backgroundColor = 'gray';
});

dollar.addEventListener("focus", ()=>{
    dollar.style.backgroundColor = 'yellow';
});
dollar.addEventListener("blur", ()=>{
    dollar.style.backgroundColor = 'gray';
});
conver.addEventListener("click", ()=>{
    alert(euro.value+"€ = "+dollar.value+"$");
});

//evenement ecran scroll s'applique à window
window.addEventListener("scroll", ()=>{
    (window.scrollY> 80) ? body.style.backgroundColor = 'pink' : body.style.backgroundColor = 'gray';
});
//----------------------------DATE ET HEURE--------------------------------
document.writeln("<h2>14. Date et Heure</h2>");
let date = new Date();
// console.log(date);
// console.log(date.getDay()); //renvoie le jour de la semaine de 0 à 6
// console.log(date.getDate()); //renvoie le jour du mois de 1 à 31
// console.log(date.getMonth()); //renvoie le mois de 0 à 11
// console.log(date.getFullYear()); //renvoie l'année au format YYYY
// console.log(date.getHours()); //renvoie l'heure
// console.log(date.getMinutes()); //renvoie les minutes
// console.log(date.getSeconds()); //renvoie les secondes

const affdate = document.getElementById("affdate");
function afficherDateHeure(){
    let date = new Date();
    let JOURS = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi","Samedi"];
    let MOIS = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    let jour = date.getDay();
    let jj = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();
    let dateComplete = JOURS[jour]+" "+jj+ " "+MOIS[mois]+" "+annee+"<br>";
    affdate.innerHTML = dateComplete;
    let h = date.getHours();
    (h<10)? h = '0'+h : h;
    let m = date.getMinutes();
    (m<10)? m = '0'+m : m;
    let s = date.getSeconds();
    (s<10)? s = '0'+s : s;
    let heureComplete = h+":"+m+":"+s;
    affdate.innerHTML+= heureComplete;
}
setInterval(afficherDateHeure, 1000);

//----------------------------15. Les API--------------------------------
document.writeln("<h2>15. Les API</h2>");
//premiere methode ancienne
async function testApi(){//async pour les fonctions asynchrone des API
    let promesse = await fetch("https://jsonplaceholder.typicode.com/users");
    let reponse = await promesse.json();
    for (user of reponse){
        console.log("id : ", user.id);
        console.log("Nom : ", user.name);
        console.log("Pseudo : ", user.username);
        console.log("Mail : ", user.email);
        console.log("------------------");
    }
    
}
// testApi();

//Deuxieme methode moderne 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(reponse=>reponse.json())
// .then(data=>{
//     for (user of data){
//         console.log("id : ", user.id);
//         console.log("Nom : ", user.name);
//         console.log("Pseudo : ", user.username);
//         console.log("Mail : ", user.email);
//         console.log("------------------");
//     }
// });

//EXO: "https://restcountries.com/v3.1/all" cette API fournit la liste des pays du monde et d'autres informations.
//Afficher tous les pays avec leurs noms, capitales et populations
//Afficher les pays avec une population > 100 millions
//Calculer la population mondiale
//calculer la population de chaque continent

fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region")
.then(reponse=>reponse.json())
.then(data=>{
        let populationMondiale = 0;
        let popAmericas = 0;
        let popfrica = 0;
        let popEurope = 0;
        let popOceania = 0;
        let popAsia = 0;
        for (pays of data){
            //Afficher tous les pays
            // document.writeln("Nom : ", pays.name.common, "<br>");
            // document.writeln("Capitale : ", pays.capital, "<br>");
            // document.writeln("Population : ", pays.population, "<br>");
            // document.writeln("Population : ", pays.region, "<br>");
            // document.writeln("<br>");

            //Afficher les pays avec une population > 100 millions
            // if(pays.population > 100000000){
            //     document.writeln("Nom : ", pays.name.common, "<br>");
            //     document.writeln("Capitale : ", pays.capital, "<br>");
            //     document.writeln("Population : ", pays.population, "<br>");
            //     document.writeln("<br>");
            // }

            //population mondiale
            populationMondiale+=pays.population;
            if(pays.region == "Americas"){
                popAmericas+=pays.population;
            }else if(pays.region == "Oceania"){
                popOceania+=pays.population;
            }else if(pays.region == "Asia"){
                popAsia+=pays.population;
            }else if(pays.region == "Europe"){
                popEurope+=pays.population;
            }else{
                popfrica+=pays.population;
            }
    }
    document.writeln("La population mondiale est de : ", populationMondiale, "<br>");
    document.writeln("La population de l'Europe est de : ", popEurope, " soit : ", ((popEurope/populationMondiale)*100).toFixed(2), "% de la population mondiale<br>");
    document.writeln("La population de l'Amerique est de : ", popAmericas, " soit : ", ((popAmericas/populationMondiale)*100).toFixed(2), "% de la population mondiale<br>");
    document.writeln("La population de l'Asie est de : ", popAsia, " soit : ", ((popAsia/populationMondiale)*100).toFixed(2), "% de la population mondiale<br>");
    document.writeln("La population de l'Afrique est de : ", popfrica, " soit : ", ((popfrica/populationMondiale)*100).toFixed(2), "% de la population mondiale<br>");
    document.writeln("La population de l'Oceanie est de : ", popOceania, " soit : ", ((popOceania/populationMondiale)*100).toFixed(2), "% de la population mondiale<br>");
});


document.writeln("<br><br><br><br><br><br><br>");