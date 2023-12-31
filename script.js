let num = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let gameOver = false;

function checkGuess() {
    if (gameOver) {
        setMessage('Game over. Please restart to play again.');
        return;
    }

    let guessInput = document.getElementById('guess');
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    chances++;

    if (guess === num) {
        setMessage(`Congratulations! You guessed the right number in ${chances} ${chances === 1 ? 'attempt' : 'attempts'}. Your score is ${100 - chances}.`);
        disableInput();
        gameOver = true;
    } else if (guess < num) {
        setMessage('You guessed a smaller number. Please try again.');
    } else {
        setMessage('You guessed a larger number. Please try again.');
    }
}

function setMessage(message) {
    document.getElementById('message').innerText = message;
}

function disableInput() {
    document.getElementById('guess').disabled = true;
}

function restartGame() {
    num = Math.floor(Math.random() * 100) + 1;
    chances = 0;
    gameOver = false;
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
    setMessage('');
}


function checkGuess() {
    if (gameOver) {
        setMessage('Game over. Please restart to play again.');
        return;
    }

    let guessInput = document.getElementById('guess');
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    chances++;

    if (guess === num) {
        setMessage(`Congratulations! You guessed the right number in ${chances} ${chances === 1 ? 'attempt' : 'attempts'}. Your score is ${100 - chances}.`);
        disableInput();
        gameOver = true;
        celebrate();
    } else if (guess < num) {
        setMessage('You guessed a smaller number. Please try again.');
    } else {
        setMessage('You guessed a larger number. Please try again.');
    }
}

function celebrate() {
    const container = document.querySelector('.container');
    const winMessage = document.createElement('p');
    winMessage.classList.add('win-message');
    winMessage.innerText = '🎉 Congratulations! You Win! 🎉';
    container.appendChild(winMessage);

    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}
