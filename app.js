let choices = [
    "rock",
    "paper",
    "scissors"
];


let computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const computerSelection = computerPlay();
const playerSelection = prompt().toLowerCase();

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Draw!"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Rock beats Paper!"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Draw!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper!"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper!"
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw!"
    }
}

console.log(playRound(playerSelection, computerSelection))

