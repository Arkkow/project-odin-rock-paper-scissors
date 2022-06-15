let choices = [
    "rock",
    "paper",
    "scissors"
];

const roundScore = document.querySelector('#roundScore')
const gameScore = document.querySelector('#gameScore')
const selectors = document.querySelector('#selectors')


const rockChoose = document.querySelector('#rockChoose');
rockChoose.addEventListener('click', () => {
    roundScore.textContent = rockCase()
})

const paperChoose = document.querySelector('#paperChoose');
paperChoose.addEventListener('click', () => {
    roundScore.textContent = paperCase()
})


const scissorsChoose = document.querySelector('#scissorsChoose');
scissorsChoose.addEventListener('click', () => {
    roundScore.textContent = scissorsCase()
})


let computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

let playerScore = 0;
let computerScore = 0;

let checkWinner = () => {
    if (computerScore == 5 || playerScore == 5) {
        roundScore.remove();
        selectors.remove();
        gameScore.textContent = whoIsWinner()

    }
    else {
        gameScore.textContent = "Wynik komputera to: " + computerScore + "  " + "Wynik gracza to: " + playerScore
    }
}


let rockCase = () => {
    let computerSelection = computerPlay();
    if (computerSelection == "rock") {
        return "Draw!"
    }
    else if (computerSelection == "paper") {
        computerScore += 1;
        checkWinner();
        return "You Lose! Paper beats Rock"
    }
    else {
        playerScore += 1;
        checkWinner();
        return "You Win! Rock beats Scissors!"
    }

}

let paperCase = () => {
    let computerSelection = computerPlay();
    if (computerSelection == "rock") {
        playerScore += 1;
        checkWinner();
        return "You Win! Rock beats Paper!"
    }
    else if (computerSelection == "paper") {
        return "Draw!"
    }
    else {
        computerScore += 1;
        checkWinner();
        return "You Lose! Scissors beats Paper!"
    }
}

let scissorsCase = () => {
    let computerSelection = computerPlay();
    if (computerSelection == "rock") {
        computerScore += 1;
        checkWinner();
        return "You Lose! Rock beats Scissors!"
    }
    else if (computerSelection == "paper") {
        playerScore += 1;
        checkWinner();
        return "You Win! Scissors beats Paper!"
    }
    else {
        return "Draw!"
    }
}

// document.getElementById('rockChoose').onclick = function () {
// };

// let playRound = (computerSelection) => {
//     document.getElementById('rockChoose').onclick = function () {
//         return rockCase("rock", computerSelection)
//     }
//     document.getElementById('paperChoose').onclick = function () {
//         return paperCase("paper", computerSelection)
//     }
//     document.getElementById('paperChoose').onclick = function () {
//         return scissorsCase("scissosrs", computerSelection)
//     }
// }

// function game() {
//     let computerSelection = computerPlay()
//     playRound(computerSelection)
//     console.log(computerScore)
//     console.log(playerScore)
//     whoIsWinner()
//     computerScore = playerScore = 0
// }

function whoIsWinner() {
    if (computerScore == playerScore) {
        return "Draw!"
    }
    else if (computerScore > playerScore) {
        return "You Lose! Computer have more scores!"
    }
    else {
        return "You are a winner!"
    }
}