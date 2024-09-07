const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const choices = ["rock", "paper", "scissors"];
let computer;
let result;
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;



function playGame(player){

    resultDisplay.classList.remove("green","red");
  
    computer = choices[Math.floor(Math.random() * 3)];

    if(player === computer){

        result = "It is a draw!";
    }

    else{
        switch(player){
            case "rock":
                result = computer === "scissors" ? "You won!" : "You lose!";
                break;

            case "paper":
                result = computer === "rock" ? "You won!" : "You lose!";
                break;

            case "scissors":
                result = computer === "paper" ? "You won!" : "You lose!";
                break;
            
        }
    }
     
    if(result ==="You won!"){
        resultDisplay.classList.add("green");
        playerScore++;
    }

   else if(result ==="You lose!"){
        resultDisplay.classList.add("red");
        computerScore++;
    }
    playerChoice.textContent = `Player: ${player}`;
    computerChoice.textContent = `Computer: ${computer}`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    
}
