/*
Your game is going to play against the computer, so begin with a function 
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ 
or ‘Scissors’. We’ll use this function in the game to make the computer’s 
play. Tip: use the console to make sure this is returning 
the expected output before moving to the next step!
*/

function game(){

    function getComputerChoice() {
        return options[Math.floor(Math.random() * options.length)];
    }

    function askForPlayersChoice() {
        let choiceNotValid = true;
        let choice;
        while (choiceNotValid) {
            choice = prompt("Choose (type) rock, paper or scissors");
            choice = choice.toLowerCase();
            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                choiceNotValid = false;
            } else {
                alert("Invalid choice. Please type rock, paper or scissors.");
            }
        }
        return choice;
    }

    function playRound() {
        const playerChoice = askForPlayersChoice();
        const computerChoice = getComputerChoice();
    
        if (playerChoice === computerChoice) {
            console.log("TIE!");
        } else if (playerChoice === "rock" && computerChoice === "scissors"
                    || playerChoice === "paper" && computerChoice === "rock"
                    || playerChoice === "scissors" && computerChoice === "paper") {
            console.log(`You WIN, ${playerChoice} beats ${computerChoice}`);
            playerScore++;
        } else {
            console.log(`You LOSE, ${computerChoice} beats ${playerChoice}`);
            computerScore++;
        }
        console.log(`PLAYER: ${playerScore}\nCOMPUTER: ${computerScore}`);
    }

    const options = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        playRound();
    }

    if (playerScore === 5) {
        console.log("YOU WIN!");
    } else {
        console.log("COMPUTER WINS!");
    }
}

game();