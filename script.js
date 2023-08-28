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
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
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

        let round = playRound(playerChoice)

        if (round.includes('win!') == true) {
            playerWins++;
        }
        else if (round.includes('lose!') == true) {
            computerWins++;
        }
    }

    console.log(playerWins, computerWins);


    if (playerWins > computerWins) {
        return "You win!"
    }
    else if (playerWins < computerWins) {
        return "You lose!"
    }
    else {
        return "Draw!"
    }
}

// Function to append results to the results container
function appendResults(results) {
    const resultsContainer = document.querySelector('.results')

    const content = document.createElement('div');
    content.classList.add('results-content');
    content.textContent = results;
    
    resultsContainer.appendChild(content);
}

// Function to remove previous results
function resetGame() {
    let resultsContainer = document.querySelector('.results')
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
}

// Add event listeners to the each button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Play the round and get the results
        let results = playRound(button.textContent);
        appendResults(results)

        // Count 5 rounds. Game is finished at 5 rounds
        let rounds = document.querySelector('.results').childElementCount;
        console.log(rounds)
        if (rounds >= 5) {
            prompt("okay game over");
            resetGame();
        }
    })
})
