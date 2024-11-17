// let givenNumber = 0


// function askToUser (){
    
//     givenNumber = prompt ("Please, choose a number");
//     return givenNumber
// }
// const numb = 22

// function didIWin(givenNumber){

// if (givenNumber == numb) {
//  alert("Bravo vous avez deviné le nombre");
// }
// if (givenNumber < numb){
//  alert("Plus grand");
// }
// if (givenNumber > numb){
//  alert( "Plus petit" );

// }
// }

/////////////Etape 1////////////////////////////
// function askToUser (){      
//     return  prompt ("Please, choose a number");
// }
// givenNumber =askToUser()

//////////////Etape 2///////////////////////////
/* function didIWin(givenNumber){
if (givenNumber == 22) {
 alert("Bravo vous avez deviné le nombre");
}
if (givenNumber < 22){
 alert("Plus grand");
}
if (givenNumber > 22){
 alert( "Plus petit" );
}
 } */
 
// didIWin(givenNumber)

/* function gamePlay (){
    let givenNumber =askToUser();
    return didIWin(givenNumber)
    
}
gamePlay() */

// ///////////////Etape 3///////////////////


// function didIWin(givenNumber){
//     if (givenNumber==22){
//         return true
//     } else {
//         return false
//     }
    
// }
 
// // didIWin(givenNumber)
// // alert (didIWin(givenNumber))


// function gamePlay (){    
//     givenNumber=askToUser();
//    return didIWin(givenNumber)    
// }

// while(gamePlay()!= true){
//     alert (didIWin(givenNumber) + " : you loose, try again")
// }
// alert ("You Win")


////////////////////////////////////////////////
/* givenNumber=askToUser();
while(givenNumber != 22){
    alert ("you loose, try again")
    givenNumber=askToUser();
}
alert ("You Win") */


///////////////////Etape 4//////////////////////////////
function givenNumber2 (){
    return prompt ("Please choose a given number between 0 et 50 ")
}

while (givenNumber2() > 50){
    givenNumber2()
}

function askToUser (){      
    return  prompt ("Please, choose a number");
    askToUser=parseInt(askToUser);
}
givenNumber =askToUser()

function didIWin(){
        if (givenNumber2!=givenNumber){
            return false
        } else {
            return true
        }
    }  

didIWin()
alert (didIWin())

// function gamePlay (){    
//     givenNumber=askToUser();
//    return didIWin(givenNumber)    
// }

// while(gamePlay()!= true){
//     alert (didIWin(givenNumber) + " : you loose, try again")
// }
// alert ("You Win")
