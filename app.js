let choices = [
    "Rock",
    "Paper",
    "Scissors"
];


let computerPlay = () => choices[Math.round(Math.random() * choices.length)];
