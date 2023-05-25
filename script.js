// Get the start button and game board elements from the DOM
const startButton = document.getElementById('start-button');
const gameBoard = document.getElementById('game-board');

// Initialize game state variables
let gameStarted = false;
let timer;
let currentCommandIndex = 0;

// Add event listener to start button
startButton.addEventListener('click', () => {
    // If game has not started, start it
    if (!gameStarted) {
        startGame();
    }
});

// Function to start game
function startGame() {
    // Update game state variables
    gameStarted = true;
    startButton.disabled = true;
    // Show the first command prompt
    showNextCommand();
    // Start the timer
    startTimer();
}

// Function to show the next command prompt
function showNextCommand() {
    // Get the next command and command prompt from the commandsAndPrompts array
    const nextCommand = commandsAndPrompts[currentCommandIndex].command;
    const commandPrompt = commandsAndPrompts[currentCommandIndex].prompt;

    // Create elements to display the command prompt and user input field
    const commandElement = document.createElement('div');
    commandElement.textContent = nextCommand;
    commandElement.style.display = 'none';

    const promptElement = document.createElement('p');
    promptElement.textContent = commandPrompt;

    const answerInput = document.createElement('input');
    answerInput.type = 'text';

    const answerButton = document.createElement('button');
    answerButton.textContent = 'Submit Answer';

    // Add event listener to answer button
    answerButton.addEventListener('click', () => {
        // Get user input and check if it matches the correct answer
        const userAnswer = answerInput.value.trim();
        const result = userAnswer === nextCommand;

        // If the answer is correct, move on to the next command prompt
        if (result) {
            currentCommandIndex++;

            if (currentCommandIndex < commandsAndPrompts.length) {
                gameBoard.innerHTML = '';
                showNextCommand();
                resetTimer();
            } else {
                // If all command prompts have been completed, end the game
                endGame();
            }
        } else {
            // If the answer is incorrect, clear the input field
            answerInput.value = '';
        }

        // Show message indicating if the answer was correct or incorrect
        showResultMessage(result);
    });

    // Add elements to the game board
    gameBoard.appendChild(promptElement);
    gameBoard.appendChild(answerInput);
    gameBoard.appendChild(answerButton);

    gameBoard.appendChild(commandElement);
}

// Function to show a message indicating if the user's answer was correct or incorrect
function showResultMessage(result) {
    const resultElement = document.createElement('p');
    resultElement.textContent = result ? 'Correct!' : 'Incorrect. Please try again.';
    resultElement.className = result ? 'correct' : 'incorrect';
    gameBoard.appendChild(resultElement);
    // Remove the message after 1.5 seconds
    setTimeout(() => {
        resultElement.remove();
    }, 1500);
}

// Function to start the timer
function startTimer() {
    let timeLeft = 30;

    const timerElement = document.createElement('p');
    timerElement.textContent = `Time left: ${timeLeft}s`;
    gameBoard.appendChild(timerElement);

    timer = setInterval(() => {
        timeLeft--;

        // If time is up, end the game
        if (timeLeft <= 0) {
            endGame();
        } else {
            // Update the timer element with remaining time
            timerElement.textContent = `Time left: ${timeLeft}s`;
        }
    }, 1000);
}

// Function to reset the timer to 30 seconds
function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Function to end the game and reset game state variables
function endGame() {
    clearInterval(timer);
    gameStarted = false;
    startButton.disabled = false;
    gameBoard.innerHTML = '';

    currentCommandIndex = 0;
}
