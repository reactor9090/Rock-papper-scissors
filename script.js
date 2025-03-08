

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

    const scoreDisplayer = document.querySelector('#scoreDisplayer');

    function playRound(humanChoice, computerChoice) {
        finalScoreDisplayer.textContent = "";
        if (humanChoice === null) {
            scoreDisplayer.textContent = "You didn't enter anything. Enter: rock , paper or scissors";
            return;
        }

        if (humanChoice === computerChoice) {
            scoreDisplayer.textContent = "It's a tie!";
            
        } else if (humanChoice === 1 && computerChoice === 2) {
            scoreDisplayer.textContent = "Scissors beats Paper. Human Won!";
            humanScore++;
        } else if (humanChoice === 1 && computerChoice === 3) {
            scoreDisplayer.textContent = "Rock beats Scissors. Computer Won!";
            computerScore++;
        }  else if (humanChoice === 2 && computerChoice === 1) {
            scoreDisplayer.textContent = "Scissors beats Paper. Computer Won!";
            computerScore++;
        }  else if (humanChoice === 2 && computerChoice === 3) {
            scoreDisplayer.textContent = "Paper beats Rock. Human Won!";
            humanScore++;
        }  else if (humanChoice === 3 && computerChoice === 1) {
            scoreDisplayer.textContent = "Rock beats Scissors. Human Won!";
            humanScore++;
        }  else if (humanChoice === 3 && computerChoice === 2) {
            scoreDisplayer.textContent = "Paper beats Rock. Computer Won!";
            computerScore++;
        }

        const computerScoreDisplayer = document.querySelector('#computerScoreDisplayer');
        const humanScoreDisplayer = document.querySelector('#humanScoreDisplayer');

        computerScoreDisplayer.textContent = "Computer Score: " + computerScore;
        humanScoreDisplayer.textContent = "Human Score: " + humanScore;


        if (computerScore === 5 || humanScore === 5) {
            showFinalScore();
        }
        
    }

    const finalScoreDisplayer = document.querySelector('#finalScoreDisplayer');

    function showFinalScore () {    
        console.log("Game is OVER!")
        if (humanScore === computerScore) {
            finalScoreDisplayer.textContent = "IT'S A TIE!";
            finalScoreDisplayer.textContent = `FINAL SCORE: ${humanScore} : ${computerScore}`;
        } else if (humanScore > computerScore) {
            finalScoreDisplayer.textContent = "HUMAN WON!";
            finalScoreDisplayer.textContent = `FINAL SCORE: ${humanScore} : ${computerScore}`;
        } else if (humanScore < computerScore) {
            finalScoreDisplayer.textContent = "COMPUTER WON!";
            finalScoreDisplayer.textContent = `FINAL SCORE: ${humanScore} : ${computerScore}`;
        }
        humanScore = 0;
        computerScore = 0;  
    }

    const btnScissors = document.querySelector('#scissors');
    const btnPaper = document.querySelector('#paper');
    const btnRock = document.querySelector('#rock');

    btnScissors.addEventListener('click' , function () {
        playRound( 1 , getComputerChoice()); // 1 = 'scissors'
    })

    btnPaper.addEventListener('click' , function () {
        playRound( 2 , getComputerChoice()); // 2 = 'paper'
    })

    btnRock.addEventListener('click' , function () {
        playRound( 3 , getComputerChoice()); // 3 = 'rock'
    })

}

  
playGame();















