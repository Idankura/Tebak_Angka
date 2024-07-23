let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById('guessInput').value;
    let resultText = document.getElementById('result');
    attempts++;

    if (userGuess == randomNumber) {
        resultText.textContent = `Selamat! Anda menebak angka yang benar dalam ${attempts} percobaan.`;
        resultText.style.color = 'green';
        resetGame();
    } else if (userGuess < randomNumber) {
        resultText.textContent = 'Terlalu rendah!';
        resultText.style.color = 'red';
    } else if (userGuess > randomNumber) {
        resultText.textContent = 'Terlalu tinggi!';
        resultText.style.color = 'red';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
}