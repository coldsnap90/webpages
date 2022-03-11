let bank = 0;
let bet;
document.getElementById("start").addEventListener("onclick",startGame);

function startGame(bank){
  bank+=100
  document.getElementById("bankbox").innerHTML=
  "Amount available:"+bank+"$";

document.getElementById("betbox").addEventListener
("mouseenter",mouseEnterBet)

function mouseEnterBet(){
  let bet = prompt("How much would you like to bet?");
  if(bet > bank){
    document.getElementById("betbox").innerHTML=
    "You do not have that amount available, please enter a valid amount"
    let bet = prompt("How much would you like to bet?");
  }
 
        while (bank !=0 ){
           document.getElementById("bankbox").innerHTML=
  "Amount available:"+ (bank - bet )+"$";
  document.getElementById("info").innerHTML =
  "You have bet"+bet+"$"



        
  }
  
}
document.getElementById("info").addEventListener("mouseenter", nameInput);
function nameInput(){
let i = 0
let playerName = prompt("Please enter your name");

if ((playerName!= null) && (i < 1)){

    document.getElementById("info").innerHTML =
    "Hello " + playerName + "! Are you read to play?";
     i+=1
}
console.log("mouseenter");
document.getElementById("info").removeEventListener("mouseenter", nameInput);
}
}
startGame(bank);