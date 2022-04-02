
let cards = []; //array //values shd get assigned after starting game , so keep it null before.
let sum = 0 ;

let hasBlackJack=false; //21 = blackJack [A=1, (2 to 10) , J=11 , Q=12 , K=13 in regulatr card game]. but in blackJack A= 1 or 11 , J=Q=K=10 .
let isAlive =false;     //still in game. //before starting its value shd be false

let message="";
let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {      //object
    name: "Per",   // key: value 
    chips: 200
}
//let playerName = "Per";
//let playerChips = 145 ;

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips ;

function getRandomCard(){
    
     let randomNumber = Math.floor(Math.random() * 13) + 1;  //random numbers = 0.000 to 0.999
                                                 //(0 to 12 ) + 1 = upto 13
     if (randomNumber > 10){
         return 10;
     } else if (randomNumber === 1){
         return 11;
     } else {
         return randomNumber;
     }

} 

function startGame(){
    isAlive = true ;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard] ;
    sum = firstCard + secondCard ;

    renderGame();
}

function renderGame(){    // startGame fun is renamed to renderGame.
    cardsEl.textContent = "Cards : ";
    
    for (let i = 0 ; i < cards.length ; i++)
    {
        cardsEl.textContent += cards[i] + " " ;                         //firstcard + secondcard

    }
    sumEl.textContent =  "Sum : " + sum ;
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "Wohoo! you've got a BlackJack!"
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game !"
        isAlive = false;
    }

    messageEl.textContent = message;

}

  function newCard(){

    if ( isAlive === true && hasBlackJack === false ){
      let card = getRandomCard();  //btwn ( 2 - 11 )
      sum += card ;

      cards.push(card);  //to push new card to cardArray

      renderGame();
  }
}



/*topics used
arrays
objects
booleans
if else statements
comparison operators
logical operators
for loops
the Math object
return statements */