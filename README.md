# Docker Command Game

This is a game made by Satisfraction where the player is given a series of command prompts and must enter the correct command. 
The game has a 30-second timer for each prompt. If the player enters the correct command before time runs out, they move on to the next prompt. 
If they enter an incorrect command, they can try again until time runs out. 

## How to Play

To start the game, click the "Start" button. The game will present you with a series of command prompts for Docker. 
For each prompt, enter the correct command in the input field and click "Submit Answer". 
If your answer is correct, the game will move on to the next prompt. 
If your answer is incorrect, the game will ask you to try again.

You can also use the "Get Hint" button to get a hint for the current command prompt. Click the "Get Hint" button and a hint will be displayed to help you find the correct command.

The game has a timer that starts at 30 seconds. 
If you take too long to input the correct command, the game will end.

## Code Explanation

The game is written in JavaScript and uses the Document Object Model (DOM) to interact with the HTML page.

### Variables

The game uses the following variables:

- `startButton`: The start button element from the DOM.
- `gameBoard`: The game board element from the DOM.
- `scoreElement`: The score element from the DOM.
- `gameStarted`: A boolean indicating if the game has started.
- `timer`: A reference to the timer interval.
- `score`: The player's score.
- `currentCommandIndex`: The index of the current command in the `commandsAndPrompts` array.

### Functions

- `startGame()`: A function to start the game. Updates game state variables, shows the first command prompt, and starts the timer.
- `showNextCommand()`: A function to show the next command prompt. Gets the next command, command prompt, and hint from the       `commandsAndPrompts` array, creates elements to display the prompt and user input field, and adds event listener to the answer button.
- `showResultMessage()`: A function to show a message indicating if the user's answer was correct or incorrect. Creates a message element, adds it to the game board, and removes it after 1.5 seconds.
- `startTimer()`: A function to start the timer. Creates a timer element, updates it every second, and ends the game if time runs out.
- `resetTimer()`: A function to reset the timer to 30 seconds.
- `endGame()`: A function to end the game and reset game state variables.
- `addHintButton()`: A function to add a hint button for the current command prompt. When clicked, it displays the hint for the command.
- `createCommandPromptElements(command, prompt)`: A helper function to create and return an object containing elements for a command prompt interface.
- `displayCommandPrompt(command, prompt)`: A function to display a command prompt. Creates elements for the prompt, user input field, and answer button, and adds event listener to the answer button.
- `checkAnswer(userAnswer, correctAnswer)`: A function to check if the user's answer matches the correct answer.
- `scoreAnswer()`: A function to score the player's answer. Increases the score by 1 and calls the `showScore()` function.
- `showScore()`: A function to display the player's score.

## License

This code is released under the MIT License. 
