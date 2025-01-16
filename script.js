

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    let result = prompt("Enter your choice" , "");
    result = result.toLowerCase();
    if (result === "scissors") {return 1};
    if (result === "paper") {return 2};
    if (result === "rock") {return 3};
    return null;
}

// 1 - scissors
// 2 - paper
// 3 - rock

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === null) {
            console.log("You didn't enter anything. Enter: rock , paper or scissors");
            return;
        }

        if (humanChoice === computerChoice) {
            console.log("It's a tie.")
        } else if (humanChoice === 1 && computerChoice === 2) {
            console.log("Scissors beats Paper. Human Won!")
            humanScore++;
        } else if (humanChoice === 1 && computerChoice === 3) {
            console.log("Rock beats Scissors. Computer Won!")
            computerScore++;
        }  else if (humanChoice === 2 && computerChoice === 1) {
            console.log("Scissors beats Paper. Computer Won!")
            computerScore++;
        }  else if (humanChoice === 2 && computerChoice === 3) {
            console.log("Paper beats Rock. Human Won!")
            humanScore++;
        }  else if (humanChoice === 3 && computerChoice === 1) {
            console.log("Rock beats Scissors. Human Won!")
            humanScore++;
        }  else if (humanChoice === 3 && computerChoice === 2) {
            console.log("Paper beats Rock. Computer Won!")
            computerScore++;
        }
        console.log(`Computer Score: ${computerScore} `);
        console.log(`Human Score: ${humanScore}`);
        console.log(" ");
    }
    playRound(getHumanChoice() , getComputerChoice());
    playRound(getHumanChoice() , getComputerChoice());
    playRound(getHumanChoice() , getComputerChoice());
    playRound(getHumanChoice() , getComputerChoice());
    playRound(getHumanChoice() , getComputerChoice());

    if (humanScore === computerScore) {
        console.log("IT'S A TIE!");
        console.log(`FINAL SCORE: ${humanScore} : ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log("HUMAN WON!");
        console.log(`FINAL SCORE: ${humanScore} : ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log("COMPUTER WON!");
        console.log(`FINAL SCORE: ${humanScore} : ${computerScore}`);
    }


}


  
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
  
playGame();

// playRound(humanSelection, computerSelection);













