/*Make a Rock-Paper-Scissor game that takes input
from player and matches it againt random computer
generated output, the game last 5 rounds and is
played in console*/
//Define choices and store it in a variable array
const choices = ["rock", "paper", "scissors"]
//get random choice from the computer
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}
//get human choice from a prompt
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors")
    humanChoice = humanChoice.toLowerCase()
    if( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
       return humanChoice
    }
    else {
        alert(`Please enter the correct input (rock, paper or scissors)`)
        return getHumanChoice()
    }
}
//store scores
let playerScore = 0;
let computerScore = 0;
// make a round of the game and compare choices and increament scores
function playRound(humanChoice, computerChoice) {
    if ( humanChoice === "rock" && computerChoice === "scissors"
       ||humanChoice === "paper" && computerChoice === "rock"
       ||humanChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        alert(`You choose: ${humanChoice}\nComputer choose: ${computerChoice}\nYou win this round, Score: You- ${playerScore} Computer- ${computerScore}`)
       }
    else if( humanChoice === computerChoice) {
        alert(`You choose: ${humanChoice}\nComputer choose: ${computerChoice}\nIt's a draw, Score: You- ${playerScore} Computer- ${computerScore}`)
    }
    else {
        computerScore++
        alert(`You choose: ${humanChoice}\nComputer choose: ${computerChoice}\nComputer wins this round, Score: You- ${playerScore} Computer- ${computerScore}`)
    }
}

//make full game that plays 5 rounds

function playGame() {
    let start = confirm("Do you want to play rock paper and scissors?\nBest of 5 wins!")
    if (start == false) {
        return;
    }
 //loop rounds 5 times   
    for (let i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getComputerChoice())
    }
//compare final scores after loop ends and declare winner  
    if(playerScore > computerScore) {
        alert("Congrats you win!")
    }
    else if(playerScore === computerScore)
    {
        alert("It's a draw!")
    }
    else {
        alert("Computer wins! better luck next time!")
    }

}

playGame()