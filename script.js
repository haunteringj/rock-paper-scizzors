// To run rock paper sizzors in the vscode terminal, run: Node script.js game

// Global variables
const ROCK = 0;
const PAPER = 1;
const SIZZORS = 2;

// Randomly select a choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case ROCK:
            return 'rock';
        case PAPER:
            return 'paper';
        case SIZZORS:
            return 'sizzors';
        default:
            return 'Error: Computer has not made a selection'
    }
}

// Compare player and computer inputs, and determine game results
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    
    // Cases where player wins
    if (playerChoice == 'rock' && computerChoice == 'sizzors') {
        return "You win! Rock beats Sizzors"
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You win! Paper beats Rock"
    }
    else if (playerChoice == 'sizzors' && computerChoice == 'paper') {
        return "You win! Sizzors beats Paper"
    }
    // Cases where computer wins
    else if (playerChoice == 'sizzors' && computerChoice == 'rock') {
        return "You lose! Rock beats Sizzors"
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "You lose! Paper beats Rock"
    }
    else if (playerChoice == 'paper' && computerChoice == 'sizzors') {
        return "You lose! Sizzors beats Paper"
    }
    else {
        return "Draw! There was no winner"
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    // Play 5 rounds a choose a winner
    for (let i = 0; i < 5; i++) {
        // The Prompt function requires a browser to be ran
        let playerChoice = prompt('Please select: Rock, Paper, or Sizzors');

        let round = playRound(playerChoice, getComputerChoice())
        console.log(round)

        if (round.includes('win!') == true) {
            playerWins++;
        }
        else if (round.includes('lose!') == true) {
            computerWins++;
        }
    }

    console.log(playerWins, computerWins);
    return 42;
}

console.log(game())