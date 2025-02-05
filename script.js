function getComputerChoice() {
    let computer = Math.random();
  //  console.log(computer);
    if(computer>0.33 && computer<=0.66){
        return "rock"
    }
    else if(computer<=0.33) {
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors");
    console.log(userChoice);
}

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
}

const humanChoice = getUserChoice();
const computerChoice = getComputerChoice();




console.log(getComputerChoice());