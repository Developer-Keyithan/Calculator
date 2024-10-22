const display = document.getElementById('display');
const expression = document.getElementById('expression');
let currentInput = '';
let previousInput = '';
let operator = '';

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'C'];

    if (validKeys.includes(key)) {
        if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Backspace') {
            clearDisplay(); // Clear input if backspace is pressed
        } else if (key === 'C') {
            clearDisplay(); // Clear display when 'C' is pressed
        } else {
            handleInput(key); // Handle number or operator input
        }
    }
});

// Handle button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        handleInput(value);
    });
});

// Function to handle inputs from both keyboard and buttons
function handleInput(value) {
    if (!isNaN(value) || value === '.') {
        handleNumber(value);
    } else if (value === 'C') {
        clearDisplay();
    } else if (value === '±') {
        toggleSign();
    } else if (value === '%') {
        convertToPercentage();
    } else if (value === '=') {
        calculate();
    } else {
        handleOperator(value);
    }
}

function handleNumber(value) {
    if (currentInput === '0' && value === '0') return; // Prevent leading zeros
    currentInput += value; // Append pressed key to current input
    updateDisplay(currentInput); // Show current input
}

function handleOperator(op) {
    if (operator && currentInput) {
        calculate(); // Calculate if operator already exists
    }
    previousInput = currentInput; // Store current input as previous
    currentInput = ''; // Clear current input
    operator = op; // Set new operator
}

function calculate() {
    if (!previousInput || !currentInput || !operator) return; // Check for valid inputs
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // Perform calculation based on operator
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }

    const fullExpression = `${previousInput} ${operator} ${currentInput}`;
    currentInput = result.toString(); // Convert result to string for display
    operator = ''; // Reset operator
    previousInput = ''; // Reset previous input
    updateDisplay(currentInput); // Update display with result
    updateExpression(fullExpression); // Update expression display
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0'); // Reset display to 0
    updateExpression('0'); // Reset expression to default
}

function toggleSign() {
    if (currentInput) {
        currentInput = (-parseFloat(currentInput)).toString(); // Toggle sign
        updateDisplay(currentInput); // Update display
    }
}

function convertToPercentage() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString(); // Convert to percentage
        updateDisplay(currentInput); // Update display
    }
}

function updateDisplay(value) {
    display.textContent = value || '0'; // Display value or '0'
}

function updateExpression(value) {
    expression.textContent = `= ${value}`; // Display expression
}
