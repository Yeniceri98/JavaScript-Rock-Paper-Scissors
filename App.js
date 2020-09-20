const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Starting The Game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            // playButton'a tıklandığı zaman
            introScreen.classList.add("fadeOut");   // Rock - Paper - Scissors ve Play butonları silinecek (opacity: 0)
            match.classList.add("fadeIn");          // Choose an option yazıs, eller ve rock-paper-scissors butonları gözükecek
        })
    }

    // Playing Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // Computer Options
        const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option => {
            option.addEventListener("click", function() {   // rock - paper - scissors butonlarına bastığımız zaman
                // Computer Choice
                const computerRandom = Math.floor(Math.random() * 3);    // 0 ile 3 arası (3 hariç) sayılar döndürecek. Bu index'lere değerler atayacağız. 0'da rock, 1'de paper, 2'de scissors yazdıracak
                const computerChoice = computerOptions[computerRandom];
                console.log(computerChoice);

                // Compare Hands
                compareHands(this.textContent, computerChoice);

                // Update Images
                playerHand.src = `./Images/${this.textContent}.png`;
                computerHand.src = `./Images/${computerChoice}.png`;
            })
        })
    }

    // Updating Score
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
    
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // Check the Winner
    const compareHands = (playerChoice, computerChoice) => {
        // Updating the text (Choose an option)
        const winner = document.querySelector(".winner");

        // Checking for a Tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie!";
            return;
        }

        // Checking for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins!"
                pScore++
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }

        // Checking for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player Wins!"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }

        // Checking for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player Wins!"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    // Invoking Inner Functions
    startGame();
    playMatch();
}

// Starting the game function
game();