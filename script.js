/*

1. Get input (rock, paper or scissors) 
2. Make the computer chose rock paper or scissors
3. Compare the two chosen to see who wins
4. print a message stating who won

*/

// Defines valid choices
const choices = ["rock", "paper", "scissors"];

// Gets input from the user
function getUserChoice() {
    return prompt("Chose one. Paper, scissors or rock: ");
};

// Choses one for the computer 
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

// Checks if the input is valid
function isValidInput(userChoice) {
    if (!choices.includes(userChoice.toLowerCase())) {
        console.log("Sorry, that is not a valid choice.")
        return false;
    } else {
        return true;
    }    
};

// Decides who the winner is
function decideWinner(userChoice, computerChoice) {
    if (userChoice.toLowerCase() === computerChoice) {
        console.log(`Tie! You both chose ${computerChoice}`);
    } else if (userChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        console.log(`Computer wins! Computer chose ${computerChoice}`)
    } else if (userChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log(`Computer wins! Computer chose ${computerChoice}`)
    } else if (userChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log(`Computer wins! Computer chose ${computerChoice}`)
    } else if (computerChoice === "rock" && userChoice.toLowerCase() === "paper") {
        console.log(`You win! Computer chose ${computerChoice}`)
    } else if (computerChoice === "paper" && userChoice.toLowerCase() === "scissors") {
        console.log(`You win! Computer chose ${computerChoice}`)
    } else if (computerChoice === "scissors" && userChoice.toLowerCase() === "rock") {
        console.log(`You win! Computer chose ${computerChoice}`)
    }
};


function playRound () {
    let userChoice = getUserChoice();

    if (!isValidInput(userChoice)) {
        playRound();
    };

    let computerChoice = getComputerChoice();

    decideWinner(userChoice, computerChoice);
};

for (let i = 0; i < 5; i++) {
    playRound();
};