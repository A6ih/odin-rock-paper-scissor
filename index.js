//Define choices and store it in a variable array
const defaultDomState = document.body.innerHTML;
const choices = ["🗿", "📃", "✂️"]
const displayPlayerScore = document.querySelector("#player-score")
const displayPlayerSelection = document.querySelector("#player-selection")
const displayComputerScore = document.querySelector("#computer-score")
const displayComputerSelection = document.querySelector("#computer-selection")
const buttons = document.querySelector("#buttons");
let humanChoice = "";

buttons.addEventListener ("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case "#🗿":
        break;
        case "#📃":
        break;
        case "#✂️":
        break;
    }
    if(target.id === "buttons") {
        return;
    }
       humanChoice = target.id
       playRound(getHumanChoice(), getComputerChoice())
      } )

//get random choice from the computer
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function getHumanChoice() {
   return humanChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ( humanChoice === "🗿" && computerChoice === "✂️"
       ||humanChoice === "📃" && computerChoice === "🗿"
       ||humanChoice === "✂️" && computerChoice === "📃") {
        playerScore++;
       }
    else if( humanChoice === computerChoice) {
    }
    else {
        computerScore++
    }
    displayPlayerSelection.textContent = humanChoice;
    displayComputerSelection.textContent = computerChoice
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    if(playerScore === 5 || computerScore === 5) {
        generateWinMessage()
        reset()
    }
}

function generateWinMessage() {
    let winMessage = document.createElement("p")
    if(playerScore === 5) {
        winMessage.textContent = "Congrats You win!";
    }
    else {
        winMessage.textContent = "Computer wins! better luck next time!";
    }
    let displayMessage = document.querySelector("#display-selections")
    displayMessage.innerHTML = ""
    displayMessage.append(winMessage)
}



function reset() {
    let resetBtn = document.createElement("button")
    resetBtn.textContent = "Play again";
    buttons.innerHTML = ""
    buttons.append(resetBtn);
    resetBtn.addEventListener ("click", function() {
        location.reload();
    })
}

