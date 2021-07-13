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
    pick = prompt("Pick Rock, Paper or Scissors.").toLowerCase();
    return pick;
}
