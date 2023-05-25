# Docker Command Game

This is a game made by Satisfraction where the player is given a series of command prompts and must enter the correct command. 
The game has a 30-second timer for each prompt. If the player enters the correct command before time runs out, they move on to the next prompt. 
If they enter an incorrect command, they can try again until time runs out. 

## How to Play

To start the game, click the "Start" button. The game will present you with a series of command prompts for Docker. 
For each prompt, enter the correct command in the input field and click "Submit Answer". 
If your answer is correct, the game will move on to the next prompt. 
If your answer is incorrect, the game will ask you to try again.

The game has a timer that starts at 30 seconds. 
If you take too long to input the correct command, the game will end.

## Code Explanation

The game is written in JavaScript and uses the Document Object Model (DOM) to interact with the HTML page.

### Variables

The game uses the following variables:

- `startButton`: The start button element from the DOM.
- `gameBoard`: The game board element from the DOM.
- `gameStarted`: A boolean indicating if the game has started.
- `timer`: A reference to the timer interval.

### Functions

- `startGame()`: A function to start the game. Updates game state variables, shows the first command prompt, and starts the timer.
- `showNextCommand()`: A function to show the next command prompt. Gets the next command and command prompt from the `commandsAndPrompts` array, creates elements to display the prompt and user input field, and adds event listener to the answer button.
- `showResultMessage()`: A function to show a message indicating if the user's answer was correct or incorrect. Creates a message element, adds it to the game board, and removes it after 1.5 seconds.
- `startTimer()`: A function to start the timer. Creates a timer element, updates it every second, and ends the game if time runs out.
- `resetTimer()`: A function to reset the timer to 30 seconds.
- `endGame()`: A function to end the game and reset game state variables.

## License

This code is released under the MIT License. 