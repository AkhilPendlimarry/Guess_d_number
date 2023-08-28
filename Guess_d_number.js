let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);



function checkGuess() {
    let guessedNUmber = parseInt(userInput.value);

    if (guessedNUmber > randomNumber) {
        gameResult.textContent = "Too high, Try again.";
        gameResult.style.backgroundColor = "#1e217c";
    } 
    else if (guessedNUmber < randomNumber) {
        gameResult.textContent = "Too low, Try again.";
        gameResult.style.backgroundColor = "#1e217c";
    } 
    else if (guessedNUmber === randomNumber) {
        gameResult.textContent = "Congratulations, you got it right.";
        gameResult.style.backgroundColor = "green";
    }


}