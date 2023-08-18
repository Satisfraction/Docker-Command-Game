// Get the start button and game board elements from the DOM
const startButton = document.getElementById("start-button");
const gameBoard = document.getElementById("game-board");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("high-score");
const timerElement = document.getElementById("timer");
const learnModeButton = document.getElementById("learn-mode-button");
const exitLearnModeButton = document.getElementById("exit-learn-mode-button");
const applySettingsButton = document.getElementById("apply-settings-button");
const durationInput = document.getElementById("duration-input");
const maxWrongInput = document.getElementById("max-wrong-input");
const wrongAnswerCountElement = document.getElementById("wrong-answer-count"); // Add wrong answer count element

// Initialize game state variables
let gameStarted = false;
let timer;
let score = 0;
let currentCommandIndex = 0;
let highScore = 0; // Add highScore variable
let timerDuration = 30; // Default timer duration
let maxWrongAnswers = 3; // Default maximum wrong answers allowed
let wrongAnswerCount = 0; // Initialize wrong answer count

// Add event listener to start button
startButton.addEventListener("click", () => {
  // If game has not started, start it
  if (!gameStarted) {
    startGame();
  }
});

// Function to display high score
function showHighScore() {
  const savedHighScore = localStorage.getItem("highScore");
  if (savedHighScore) {
    highScore = parseInt(savedHighScore); // Convert the saved high score to an integer
  }
  highScoreElement.textContent = `High Score: ${highScore}`;
}

// Function to start game
function startGame() {
  // Update game state variables
  gameStarted = true;
  startButton.disabled = true;
  // Show the first command prompt
  showNextCommand();
  // Start the timer
  startTimer();
  // Display high score
  showHighScore();
}

// Function to show the next command prompt
function showNextCommand() {
  // Get the next command and command prompt from the commandsAndPrompts array
  const nextCommand = commandsAndPrompts[currentCommandIndex].command;
  const commandPrompt = commandsAndPrompts[currentCommandIndex].prompt;
  const hint = commandsAndPrompts[currentCommandIndex].hint;

  // Create elements to display the command prompt and user input field
  const commandElement = document.createElement("div");
  commandElement.textContent = nextCommand;
  commandElement.style.display = "none";

  const promptElement = document.createElement("p");
  promptElement.textContent = commandPrompt;

  const answerInput = document.createElement("input");
  answerInput.type = "text";

  const answerButton = document.createElement("button");
  answerButton.textContent = "Submit Answer";

  // Add event listener to answer button
  answerButton.addEventListener("click", () => {
    // Get user input and check if it matches the correct answer
    const userAnswer = answerInput.value.trim();
    const result = userAnswer === nextCommand;

    // If the answer is correct, move on to the next command prompt
    if (result) {
      currentCommandIndex++;

      if (currentCommandIndex < commandsAndPrompts.length) {
        gameBoard.innerHTML = "";
        showNextCommand();
        resetTimer();
      } else {
        // If all command prompts have been completed, end the game
        endGame();
      }

      // Update score
      scoreAnswer();
    } else {
      // If the answer is incorrect, increment the wrong answer count
      wrongAnswerCount++;

      // Check if the maximum wrong answers have been reached
      if (wrongAnswerCount >= maxWrongAnswers) {
        endGame();
      } else {
        // Clear the input field
        answerInput.value = "";
      }
    }

    // Show message indicating if the answer was correct or incorrect
    showResultMessage(result);
  });

  // Add elements to the game board
  gameBoard.appendChild(promptElement);
  gameBoard.appendChild(answerInput);
  gameBoard.appendChild(answerButton);

  // call the addHintButton function, passing the hint as a parameter
  if (hint !== undefined) {
    addHintButton(hint);
  }

  gameBoard.appendChild(commandElement);
}

// This function creates and returns an object that contains elements for a command prompt interface.
// The function takes two parameters: `command` and `prompt`, both of which are strings.
function createCommandPromptElements(command, prompt) {
  // Create a new `div` element to hold the `command` text.
  const commandElement = document.createElement("div");
  // Set the `textContent` of the `commandElement` to `command`.
  commandElement.textContent = command;
  // Hide the `commandElement` by setting its `display` style to `none`.
  commandElement.style.display = "none";

  // Create a new `p` element to hold the `prompt` text.
  const promptElement = document.createElement("p");
  // Set the `textContent` of the `promptElement` to `prompt`.
  promptElement.textContent = prompt;

  // Create a new `input` element for the user to input their answer.
  const answerInput = document.createElement("input");
  // Set the `type` of the `answerInput` to `text`.
  answerInput.type = "text";

  // Create a new `button` element for the user to submit their answer.
  const answerButton = document.createElement("button");
  // Set the `textContent` of the `answerButton` to `'Submit Answer'`.
  answerButton.textContent = "Submit Answer";

  // Return an object containing the created elements.
  return {
    commandElement,
    promptElement,
    answerInput,
    answerButton,
  };
}

// This function takes in two parameters, a command and a prompt
function displayCommandPrompt(command, prompt) {
  // create four elements using the createCommandPromptElements function and store them in variables using destructuring
  const { commandElement, promptElement, answerInput, answerButton } =
    createCommandPromptElements(command, prompt);

  // add an event listener to the answerButton that listens for a click
  answerButton.addEventListener("click", () => {
    // When the button is clicked, get the trimmed value of the answerInput and store it in the userAnswer variable
    const userAnswer = answerInput.value.trim();
    // set the correctAnswer variable to the command parameter passed into the function
    const correctAnswer = command;

    // call the checkAnswer function and pass in the userAnswer and correctAnswer variables as parameters
    checkAnswer(userAnswer, correctAnswer);
  });

  // append the promptElement, answerInput, answerButton, and commandElement to the gameBoard element
  gameBoard.appendChild(promptElement);
  gameBoard.appendChild(answerInput);
  gameBoard.appendChild(answerButton);
  gameBoard.appendChild(commandElement);

  // call the addHintButton function
  addHintButton();
}

// Function to show a message indicating if the user's answer was correct or incorrect
function showResultMessage(result) {
  const resultElement = document.createElement("p");
  resultElement.textContent = result
    ? "Correct!"
    : "Incorrect. Please try again.";
  resultElement.className = result ? "correct" : "incorrect";
  gameBoard.appendChild(resultElement);
  // Remove the message after 1.5 seconds
  setTimeout(() => {
    resultElement.remove();
  }, 1500);
}

// Function to start the timer
function startTimer() {
  let timeLeft = timerDuration;

  timerElement.textContent = `Time left: ${timeLeft}s`;

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
  gameBoard.innerHTML = "";

  // Check if current score is higher than previous high score
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore); // Save the new high score in local storage
  }

  score = 0; // Reset score to 0
  currentCommandIndex = 0;
}

// This function creates and appends a button to the gameBoard element
function addHintButton() {
  const hintButton = document.createElement("button");
  hintButton.textContent = "Get Hint"; // Sets the text content of the button to "Get Hint"

  // Adds an event listener to the button that gets the hint for the current command when clicked
  hintButton.addEventListener("click", () => {
    const hint = commandsAndPrompts[currentCommandIndex].hint; // Gets the hint for the current command index

    // If there is a hint available, creates and appends a p element with the hint to the gameBoard element
    if (hint) {
      const hintElement = document.createElement("p");
      hintElement.textContent = hint;
      hintElement.className = "hint";
      gameBoard.appendChild(hintElement);

      // Removes the hint element after 3 seconds
      setTimeout(() => {
        hintElement.remove();
      }, 3000);
    }
  });

  gameBoard.appendChild(hintButton); // Appends the hint button to the gameBoard element
}

// Declare a function called scoreAnswer
function scoreAnswer() {
  // Add one to the variable score
  score += 1;
  // Call the showScore function
  showScore();
}

// Declare a function called showScore
function showScore() {
  // Get the DOM element with the ID "score"
  const scoreElement = document.getElementById("score");
  // Set the text content of the scoreElement to include the word "Score:" and the value of the score variable
  scoreElement.textContent = `Score: ${score}`;
}

// Function to show the wrong answer count
function showWrongAnswerCount() {
  wrongAnswerCountElement.textContent = `Wrong Answers: ${wrongAnswerCount}`;
}

// Function to set game settings
function setGameSettings(duration, maxWrong) {
  timerDuration = duration;
  maxWrongAnswers = maxWrong;
}

// Function to enable learning mode
function enableLearningMode() {
  currentCommandIndex = 0;
  gameBoard.innerHTML = "";
  gameStarted = true;
  showNextCommand();
  startTimer();
  showHighScore();
  scoreElement.style.display = "none";
  timerElement.style.display = "none";
}

// Function to reset to default settings and exit learning mode
function resetSettingsAndExitLearningMode() {
  currentCommandIndex = 0;
  gameBoard.innerHTML = "";
  gameStarted = false;
  startButton.disabled = false;
  timerElement.textContent = "";
  scoreElement.style.display = "block";
  timerElement.style.display = "block";
  score = 0;
}

// Add event listener to "Learn Mode" button
learnModeButton.addEventListener("click", () => {
  enableLearningMode();
});

// Add event listener to "Exit Learning Mode" button
exitLearnModeButton.addEventListener("click", () => {
  resetSettingsAndExitLearningMode();
});

// Add event listener to "Apply Settings" button
applySettingsButton.addEventListener("click", () => {
  const newDuration = parseInt(durationInput.value);
  const newMaxWrong = parseInt(maxWrongInput.value);

  if (!isNaN(newDuration) && !isNaN(newMaxWrong)) {
    setGameSettings(newDuration, newMaxWrong);
    alert("Settings applied successfully!");
  } else {
    alert("Invalid input. Please enter numbers for duration and max wrong answers.");
  }
});

// Initialize high score display
showHighScore();
