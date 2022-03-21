const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// const playerSelection = ROCK;

game();

function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  let choice;
  if (random === 0) choice = ROCK;
  if (random === 1) choice = PAPER;
  if (random === 2) choice = SCISSORS;
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result;
  if (playerSelection === computerSelection) result = "Tie!";
  else if (playerSelection === ROCK && computerSelection === PAPER)
    result = "Computer Wins!";
  else if (playerSelection === PAPER && computerSelection === SCISSORS)
    result = "Computer Wins!";
  else if (playerSelection === SCISSORS && computerSelection === ROCK)
    result = "Computer Wins!";
  else result = "Player Wins!";
  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("rock, paper, or scissors?");
    computerSelection = computerPlay();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    if (result === "Computer Wins!") computerScore++;
    if (result === "Player Wins!") playerScore++;
    console.log(result);
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  }
}