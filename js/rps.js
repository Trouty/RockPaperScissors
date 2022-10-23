const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const outcome = document.querySelector('#outcome');
const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');

let currentRound = 0;
let oldColouredButtons = [];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function incrementScore(scoreElement) {
    let currentScore = scoreElement.textContent;
    currentScore++;
    scoreElement.textContent = currentScore;
};

function removeOldColours () {
    oldColouredButtons.forEach((button) => {
        button.style.removeProperty('background-color');
    });    
}

function changeButtonColours (changeToGreen, changeToRed) {
    removeOldColours();
    const greenButton = document.querySelector(`#${changeToGreen}`);
    const redButton = document.querySelector(`#${changeToRed}`);

    greenButton.style.backgroundColor = '#2a914b';
    redButton.style.backgroundColor = '#ad2c23';

    oldColouredButtons.length = 0; // clears array
    oldColouredButtons.push(greenButton);
    oldColouredButtons.push(redButton);
}

function tieColours (buttonOne, buttonTwo) {
    removeOldColours();
    const blueButtonOne = document.querySelector(`#${buttonOne}`);
    const blueButtonTwo = document.querySelector(`#${buttonTwo}`);

    blueButtonOne.style.backgroundColor = '#2a2a91';
    blueButtonTwo.style.backgroundColor = '#2a2a91';

    oldColouredButtons.length = 0; // clears array
    oldColouredButtons.push(blueButtonOne);
    oldColouredButtons.push(blueButtonTwo);
}

function decideWinner(userChoice, computerChoice) {
    if (userChoice.toLowerCase() === computerChoice) {
        outcome.textContent = `Tie! You both chose ${computerChoice}`;
        tieColours(userChoice, `computer-${computerChoice}`);

    } else if (userChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        outcome.textContent =`Computer wins! Computer chose ${computerChoice}`;
        incrementScore(computerScore);
        changeButtonColours(`computer-${computerChoice}`, userChoice);

    } else if (userChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        outcome.textContent = `Computer wins! Computer chose ${computerChoice}`;
        incrementScore(computerScore);
        changeButtonColours(`computer-${computerChoice}`, userChoice);

    } else if (userChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        outcome.textContent = `Computer wins! Computer chose ${computerChoice}`;
        incrementScore(computerScore);
        changeButtonColours(`computer-${computerChoice}`, userChoice);

    } else if (computerChoice === "rock" && userChoice.toLowerCase() === "paper") {
        outcome.textContent = `You win! Computer chose ${computerChoice}`;
        incrementScore(userScore);
        changeButtonColours(userChoice, `computer-${computerChoice}`);

    } else if (computerChoice === "paper" && userChoice.toLowerCase() === "scissors") {
        outcome.textContent = `You win! Computer chose ${computerChoice}`;
        incrementScore(userScore);
        changeButtonColours(userChoice, `computer-${computerChoice}`);

    } else if (computerChoice === "scissors" && userChoice.toLowerCase() === "rock") {
        outcome.textContent = `You win! Computer chose ${computerChoice}`;
        incrementScore(userScore);
        changeButtonColours(userChoice, `computer-${computerChoice}`);
    }
};

function playRound (userChoice) {
    let computerChoice = getComputerChoice();

    decideWinner(userChoice, computerChoice);    
    
    if (parseInt(userScore.textContent) === 5) {
        userScore.textContent = 0;
        computerScore.textContent = 0;

        outcome.textContent = 'Good job, you win!'
    } else if (parseInt(computerScore.textContent) === 5) {
        userScore.textContent = 0;
        computerScore.textContent = 0;

        outcome.textContent = 'Ouch! Computer wins!'
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});