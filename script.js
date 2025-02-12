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



function playGame() {
    let humanScore = 0;
    let computerScore= 0;

    function playRound(humanChoice, computerChoice) {

        if(humanChoice === computerChoice) {
            console.log("draw");
        }
    
        else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            console.log("user wins");
            humanScore++;
        }
        else {
            console.log("computer wins")
            computerScore++;
        }
    }

    playRound();
    playRound();
    console.log(humanScore);
    console.log(computerScore);
}

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();


console.log(computerSelection);

playGame();

//playRound(humanSelection, computerSelection);


//playRound("rock", "rock");