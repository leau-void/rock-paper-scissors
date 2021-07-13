let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

function computerPlay() {
    pick = Math.floor(Math.random() * 3);
    pick = (pick == 0) ? "rock" : (pick == 1) ? "paper" : "scissors";
    return pick;
}

function playerPlay() {
    pick = prompt("Pick Rock, Paper or Scissors.");

    return (pick ?? invalidSelection());
}

function invalidSelection() {
    alert('Your input was not valid. Try again.');
    playRound(playerPlay(), computerPlay());
}

function playerWin() {
console.log("player win");
}

function computerWin() {
console.log("computer win");
}

function tie() {
console.log("tie")
}

function game() {
    playRound(playerPlay(), computerPlay());
}

function playRound(playerSelection, computerSelection) {
    let result;
console.log(`${playerSelection}, ${computerSelection}`);
if (playerSelection === computerSelection) {
    result = tie;
} else {
    if (playerSelection == "rock") {
        if (computerSelection === "scissors") {
            result = playerWin;
        } else if (computerSelection === "paper") {
            result = computerWin;
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = playerWin;
        } else if (computerSelection === "scissors") {
            result = computerWin;
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result = playerWin;
        } else if (computerSelection === "rock") {
            result = computerWin;
        }

    } else {
        result = invalidSelection;
    }
}
return result();
}