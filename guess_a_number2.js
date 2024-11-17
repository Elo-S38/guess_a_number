//fonction pour demander un nombre à l'user et stocker dans une variable givenNumber
let guessNumber =0
let givenNumber =0

function askToUser (){        
    givenNumber= prompt ("Joueur 2, Choisis un nombre entre 0 et 50: ")
    // givenNumber= parseInt (givenNumber)                                     //pour convertir le string du prompt en number 
    if (isNaN(givenNumber)||givenNumber <0|| givenNumber>50){
        alert ("Erreur, Recommence")
        askToUser()
}else{
   return 
}  
    
    return givenNumber
   }

 //fonction qui affiche la comparaison avec le nombre à deviner et le nombre de l'user
function didIWin() {                                      //?????????????????OURQUOI pas de paramètre givenNumber?
   /*   (etape 2)
       switch (true){
        case (givenNumber===guessNumber):
            alert ("bravo");
            break;
        case (givenNumber > guessNumber):
            alert ("plus petit");
            break;
        default:
            alert ("plus grand");

    } */
   //etape 3
   while (givenNumber!=guessNumber){
    return alert ("Perdu! Rejoues!")
   }
   return alert ("Bravo! tu as gagné!!")
 
        }
/* function didIWin(givenNumber){
if (givenNumber == guessNumber) {
 alert("Bravo vous avez deviné le nombre");
}
if (givenNumber < guessNumber){
 alert("Plus grand");
}
if (givenNumber > guessNumber){
 alert( "Plus petit" );

}} */




 //fonction qui gere les appels de fonctions
 function gamePlay(){
    while (givenNumber!==guessNumber){
            askToUser()
            didIWin()
             }
     }

//fonction qui demande au joueur un nombre de 0 à 50
function Player(){
    let askPlayer1=0
      askPlayer1 = prompt ("Joueur 1, choisis un nombre à deviner entre 0 et 50: ")
      guessNumber=askPlayer1
      if (isNaN(askPlayer1)||askPlayer1 <0|| askPlayer1>50){
                 alert ("Erreur, Recommence")
                 Player()
      }else{
            return 
      }
      
}

Player()
gamePlay()
