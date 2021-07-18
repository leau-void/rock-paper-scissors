let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let resultRound;

let gameText = document.querySelector("#game-text");
let againText = document.querySelector("#again-text");
let scoreHuman = document.querySelector("#score-human");
let scoreCpu = document.querySelector("#score-cpu");
let humanImg = document.querySelector("#human-img");
let cpuImg = document.querySelector("#cpu-img");
let playerBtns = document.querySelectorAll(".playBtns")

playerBtns.forEach(
    (button) => {
        button.addEventListener("click", () => {
            game(button.id);
        });
})

function game(playerSelection) {
    scoreCpu.textContent = computerScore;
    scoreHuman.textContent = playerScore;
    againText.textContent = "";
    computerSelection = "";

    if (playerScore < 5 && computerScore < 5) {
        playRound(computerPlay(), playerSelection);
    }

    if (playerScore > computerScore) {
         scoreHuman.classList.add("leading");
         scoreCpu.classList.remove("leading");
        } else if (computerScore > playerScore) {
        scoreCpu.classList.add("leading");
        scoreHuman.classList.remove("leading");
        } else if (playerScore === computerScore) {
        scoreHuman.classList.add("leading");
        scoreCpu.classList.add("leading");
        }   

    if (playerScore === 5 || computerScore === 5) {
        gameEnd();
    }
}

function playRound(computerSelection, playerSelection) {
(playerSelection === "rock") ? humanImg.setAttribute("src", "images/rock-human.png") : (playerSelection === "paper") ?
humanImg.setAttribute("src", "images/paper-human.png") : humanImg.setAttribute("src", "images/scissors-human.png");

(computerSelection === "rock") ? cpuImg.setAttribute("src", "images/rock-cpu.png") : (computerSelection === "paper") ? 
cpuImg.setAttribute("src", "images/paper-cpu.png") : cpuImg.setAttribute("src", "images/scissors-cpu.png");


 (playerSelection === computerSelection) ? resultRound = tieRound : evaluateSelections();
    
    function evaluateSelections() { 
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                resultRound = playerWinRound;
        } else if (computerSelection === "paper") {
            resultRound = computerWinRound;
        }
    
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultRound = playerWinRound;
        } else if (computerSelection === "scissors") {
            resultRound = computerWinRound;
        }
    
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            resultRound = playerWinRound;
        } else if (computerSelection === "rock") {
            resultRound = computerWinRound;
        }
    
    }
    }

    return resultRound(capitalize(playerSelection), capitalize(computerSelection));
}

function computerPlay() {
    pick = Math.floor(Math.random() * 3);
    pick = (pick == 0) ? "rock" : (pick == 1) ? "paper" : "scissors";
    return pick;
}

function playerWinRound(playerSelection, computerSelection) {
    gameText.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.\r\n`  + `${playerSelection} beats ${computerSelection}.\r\n` + ` You win this round.\r\n`;
    scoreHuman.textContent = ++playerScore;
}

function computerWinRound(playerSelection, computerSelection) {
    gameText.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.\r\n` + `${computerSelection} beats ${playerSelection}.\r\n` + ` You lose this round.\r\n`;
    scoreCpu.textContent = ++computerScore;
}

function tieRound(playerSelection, computerSelection) {
    gameText.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.\r\n` + ` This is a tie.`;
}

function gameEnd() {

    let endMessage = (playerScore > computerScore) ?
     () => gameText.textContent += ` Wow! You win the game!` :
     () => gameText.textContent += ` Ooof! You lose the game!`;
    endMessage();

     againText.textContent = "Make a choice to play again!";
     computerScore = 0;
     playerScore = 0;
}

function capitalize(x) {
    return (x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase())
}