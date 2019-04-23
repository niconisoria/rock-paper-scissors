// CONST
const buttons = Array.from(document.querySelectorAll(`button`));
const playerScoreText = document.querySelector(`.player-score`);
const computerScoreText = document.querySelector(`.computer-score`);

// VAR
let playerScore = 0;
let computerScore = 0;

// SELECTORS
buttons.forEach(button => button.addEventListener('click', playRound));
const result = document.querySelector('.result');

// FUNCTIONS

// Calculate a random number between 0 and 10 to choose 'rock', 'paper' or 'scissors'
function computerPlay() {
    let random = Math.floor(Math.random() * 10 + 1);
    if (random >= 1 && random < 3) {
        return 'rock';
    } else if (random >= 3 && random < 6) {
        return 'paper';
    }
    return 'scissors';
}

// Choose a winner, modificate scores
function playRound() {
    let playerSelection = this.id.toString();
    let computerSelection = computerPlay();
    if (playerSelection.localeCompare(computerSelection) != 0) {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'scissors') {
                   result.textContent = "You win! Rock beats Scissors"
                   playerScore++;
                } else {
                result.textContent = "You lose! Paper beats Rock"
                computerScore++;
                }
                break;
            case 'paper':
                if (computerSelection == 'rock') {
                    result.textContent = "You win! Paper beats Rock"
                    playerScore++;
                } else {
                    result.textContent = "You lose! Scissors beats Paper"
                    computerScore++;
                }
                break;
            case 'scissors':
                if (computerSelection == 'paper') {
                    result.textContent = "You win! Scissors beats Paper"
                    playerScore++;
                } else { 
                    result.textContent = "You lose! Rock beats Scissors"
                    computerScore++;
                }
                break;
        }
    } else {
        result.textContent = "Draw!";
    }
    updateScore();
    checkScore();
}

//Update scores on the screen
function updateScore(){
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
}

//Check score for a winner of the game
function checkScore(){
    if(playerScore == 5 || computerScore == 5){
        if (playerScore > computerScore) {
            result.textContent = "WINNER!";
        } else if (playerScore < computerScore) {
            result.textContent = "LOOSER!";
        } else if (playerScore == computerScore) {
            result.textContent = "DRAW!";
        }
        resetScore();
    }
}

//Reset the score to start a new game
function resetScore(){
    playerScore = 0;
    computerScore = 0;
}
    


