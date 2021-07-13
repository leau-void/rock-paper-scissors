let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let result;

function computerPlay() {
    pick = Math.floor(Math.random() * 3);
    pick = (pick == 0) ? "rock" : (pick == 1) ? "paper" : "scissors";
    return pick;
}

function playerPlay() {
    pick = prompt("Pick Rock, Paper or Scissors.");
    (pick != undefined && pick != null) ? pick = pick.toLowerCase() : pick = undefSelection(); // check if pick is defined (not null or undef)
     // lowercare if it is defined (error if done before, bc attempts to lowercase null)
    return pick;
}

function invalidSelection() {
    alert('Your input was not valid. Try again.');
}

function undefSelection() {
    let undef = (confirm("Do you want to quit?")) ? 
    () => pick = "exit" : 
    () => pick = playerPlay;
    return pick;
}

function playerWin() {
    playerScore = ++playerScore;
    console.log(`${playerScore}, ${computerScore}`);
return "player win";
}

function computerWin() {
    computerScore = ++computerScore;
    console.log(`${playerScore}, ${computerScore}`);
return "computer win";
}

function tie() {
    console.log(`${playerScore}, ${computerScore}`);
return "tie";
}

function showScore() {
    console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}. First one to 5 wins!`)
}

function end() {
    console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}. First one to 5 wins!`);
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

function exit() {
    alert("Goodbye, thank you for playing! Feel free to provide any feedback!");
}

function game() {
    computerScore = 0;
    playerScore = 0;

    while (computerScore < 3 && playerScore < 3) {
    playRound(computerPlay(), playerPlay());
    showScore();
    }

    end(computerScore, playerScore);
    playAgain();
}

function playRound(computerSelection, playerSelection) {
   
    (playerSelection === "exit") ? result = exit : (playerSelection === computerSelection) ? result = tie : evaluate();


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
    return result();
}