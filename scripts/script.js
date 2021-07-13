let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let result;
let exit = 0;

document.getElementById("play").onclick = game;


function computerPlay() {
    pick = Math.floor(Math.random() * 3);
    pick = (pick == 0) ? "rock" : (pick == 1) ? "paper" : "scissors";
    return pick;
}

function playerPlay() {
    pick = prompt("Pick Rock, Paper or Scissors.");
    (pick != undefined && pick != null) ? pick = pick.toLowerCase() : pick = (confirm("Do you want to quit?") ? "exit" : playerPlay()); // check if pick is defined (not null or undef)
     // lowercare if it is defined (error if done before, bc attempts to lowercase null)
    return pick;
}

function invalidSelection() {
    alert('Your input was not valid. Try again.');
}

//function undefSelection() {
 //   return ((confirm("Do you want to quit?")) ? 
  //  () => return "exit" : 
   // () => playerPlay());
// }
// could not get the return to work so i put this in playerPlay()


function playerWin(playerSelection, computerSelection) {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}. ${playerSelection} beats ${computerSelection}.`)
    playerScore = ++playerScore;
    console.log(`${playerScore}, ${computerScore}`);
return "player win";
}

function computerWin(playerSelection, computerSelection) {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}. ${computerSelection} beats ${playerSelection}.`)
    computerScore = ++computerScore;
    console.log(`${playerScore}, ${computerScore}`);
return "computer win";
}

function tie(playerSelection, computerSelection) {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}. This is a tie.`)
    console.log(`${playerScore}, ${computerScore}`);
return "tie";
}

function showScore() {
    if (exit === 0) {
        if (playerScore < 5 && computerScore < 5){
    alert(`Your score is ${playerScore} and the computer's score is ${computerScore}. First one to 5 wins!`);
        } else {
            alert(`Your score is ${playerScore} and the computer's score is ${computerScore}.`);
        }
    } 
}

function end() {
    console.log(`player score : ${playerScore} // computer score : ${computerScore}`);
    let endmessage = (playerScore > computerScore) ?
     () => alert("You win!") :
     () => alert("You lose!");
     return endmessage();
}

function playAgain() {
    let again = (confirm("Do you want to play again?")) ?
    () => game() :
    () => alert("Goodbye, thank you for playing! Feel free to provide any feedback!");

    again();
}

function exitLoop() {
    exit = 1;
    pick = "exit";
    alert("Goodbye, thank you for playing! Feel free to provide any feedback!");
}

function game() {
    exit = 0;
    computerScore = 0;
    playerScore = 0;
    playerSelection = "";
    computerSelection = "";

    while (computerScore < 5 && playerScore < 5 && exit === 0) {
    playRound(computerPlay(), playerPlay());
    showScore();
    }

    if (exit === 0) {
    end(computerScore, playerScore);
    playAgain();
    }
}

function playRound(computerSelection, playerSelection) {
   console.log(`${playerSelection}`);
    (playerSelection === "exit") ? result = exitLoop : (playerSelection === computerSelection) ? result = tie : evaluate();
    
    function evaluate() { 
        if (playerSelection === "rock") {
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

    console.log(`${playerSelection}, ${computerSelection}`);
    return result(playerSelection, computerSelection);
}