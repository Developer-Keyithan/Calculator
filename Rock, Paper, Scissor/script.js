function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! You chose ${userChoice} and the computer chose ${computerChoice}.`;
    } else {
        result = `You lose! You chose ${userChoice} and the computer chose ${computerChoice}.`;
    }

    document.getElementById('result').textContent = result;
}