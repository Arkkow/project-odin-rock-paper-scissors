let choices = [
    "rock",
    "paper",
    "scissors"
];


let computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

let playerScore = 0;
let computerScore = 0;

let rockCase = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Draw!"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock"
    }
    else {
        playerScore += 1;
        return "You Win! Rock beats Scissors!"
    }
}

let paperCase = (playerSelection, computerSelection) => {
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You Win! Rock beats Paper!"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Draw!"
    }
    else {
        computerScore += 1;
        return "You Lose! Scissors beats Paper!"
    }
}

let scissorsCase = (playerSelection, computerSelection) => {
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper!"
    }
    else {
        return "Draw!"
    }
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock") {
        return rockCase(playerSelection, computerSelection)
    }
    else if (playerSelection == "paper") {
        return paperCase(playerSelection, computerSelection)
    }
    else {
        return scissorsCase(playerSelection, computerSelection)
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = prompt().toLowerCase()
        console.log(playRound(playerSelection, computerSelection))
        console.log(computerScore)
        console.log(playerScore)
    }
    whoIsWinner()
    computerScore = playerScore = 0
}

function whoIsWinner() {
    if (computerScore == playerScore) {
        console.log("Draw!")
    }
    else if (computerScore > playerScore) {
        console.log("You Lose! Computer have more scores!")
    }
    else {
        console.log("You are a winner!")
    }
}