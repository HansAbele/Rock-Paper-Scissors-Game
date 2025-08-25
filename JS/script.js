function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  const whoWon = hasPlayerWonTheRound(userOption, computerResult);

   if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`
    }
   if (whoWon) {
    playerScore++
    return `Player wins! ${userOption} beats ${computerResult}`
  } else {
    computerScore++
    return `Player wins! ${computerResult} beats ${userOption}`
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
