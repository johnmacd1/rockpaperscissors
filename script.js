function getComputerChoice() {
    let computer = Math.random();
    
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
    return userChoice;
  
}

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        console.log("draw");
    }
}

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();


console.log(computerSelection);

playRound(humanSelection, computerSelection);

//playRound("rock", "rock");