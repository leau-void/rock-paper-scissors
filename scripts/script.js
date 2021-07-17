let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let result;

let text = document.querySelector("#text");
let textAgain = document.querySelector("#again");
let scoreHuman = document.querySelector("#score-human");
let scoreCpu = document.querySelector("#score-cpu");
let human = document.querySelector("#human-img");
let cpu = document.querySelector("#cpu-img");
let buttons = document.querySelectorAll("button");
let playerBtns = document.querySelectorAll(".playBtns")

const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

console.log(width, height);

playerBtns.forEach(
    (button) => {
        button.addEventListener("click", () => {
            game(button.id);
        });
})

function game(playerSelection) {
    scoreCpu.textContent = computerScore;
    scoreHuman.textContent = playerScore;
    textAgain.textContent = "";
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
        end();
    }
}

function playRound(computerSelection, playerSelection) {
(playerSelection === "rock") ? human.setAttribute("src", "images/rock-human.png") : (playerSelection === "paper") ?
human.setAttribute("src", "images/paper-human.png") : human.setAttribute("src", "images/scissors-human.png");

(computerSelection === "rock") ? cpu.setAttribute("src", "images/rock-cpu.png") : (computerSelection === "paper") ? 
cpu.setAttribute("src", "images/paper-cpu.png") : cpu.setAttribute("src", "images/scissors-cpu.png");


 (playerSelection === computerSelection) ? result = tie : evaluate();
    
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
    
    }
    }

    return result(capitalize(playerSelection), capitalize(computerSelection));
}

function computerPlay() {
    pick = Math.floor(Math.random() * 3);
    pick = (pick == 0) ? "rock" : (pick == 1) ? "paper" : "scissors";
    return pick;
}

function playerWin(playerSelection, computerSelection) {
    text.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.\r\n`  + `${playerSelection} beats ${computerSelection}.\r\n` + ` You win this round.\r\n`;
    scoreHuman.textContent = ++playerScore;
return "player win";
}

function computerWin(playerSelection, computerSelection) {
    text.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.\r\n` + `${computerSelection} beats ${playerSelection}.\r\n` + ` You lose this round.\r\n`;
    scoreCpu.textContent = ++computerScore;
return "computer win";
}

function tie(playerSelection, computerSelection) {
    text.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.\r\n` + ` This is a tie.`;
return "tie";
}

function end() {
    console.log(`player score : ${playerScore} // computer score : ${computerScore}`);
    let endmessage = (playerScore > computerScore) ?
     () => text.textContent += ` Wow! You win the game!` :
     () => text.textContent += ` Ooof! You lose the game!`;
    endmessage();

     textAgain.textContent = "Make a choice to play again!";
     computerScore = 0;
     playerScore = 0;
}

function capitalize(x) {
    return (x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase())
}