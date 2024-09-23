const screen = document.getElementById('screen');
let currentInput = '';
let operator = '';
let firstOperand = '';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'C') {
      currentInput = '';
      firstOperand = '';
      operator = '';
      screen.value = '';
    } else if (value === '=') {
      if (firstOperand !== '' && operator !== '' && currentInput !== '') {
        screen.value = eval(firstOperand + operator + currentInput);
        currentInput = '';
        firstOperand = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput !== '') {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
      }
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});
