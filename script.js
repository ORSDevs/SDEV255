// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
    let numberOfGuesses = 0;

    while (numberOfGuesses < totalGuesses) {
        let userInput = prompt(promptText);

        if (userInput === null) {
            return 0;
        }

        let userGuess = userInput.trim();

        if (userGuess === "") {
            promptText = "Please enter a number.";
            continue;
        }

        if (isNaN(userGuess)) {
            promptText = "Please enter a number.";
            continue;
        }

        userGuess = parseInt(userGuess);

        if (userGuess === numToGuess) {
            return numberOfGuesses + 1; 
        } else if (userGuess < numToGuess) {
            promptText = `${userGuess} is too small. Guess a larger number.`;
        } else {
            promptText = `${userGuess} is too large. Guess a smaller number.`;
        }

        numberOfGuesses++;
    }

    return 0;
}
