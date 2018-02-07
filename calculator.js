function add (a,b) {return a + b;}

function subtract (a,b) {return a - b;}

function multiply (a,b) {return a * b;}

function divide (a,b) {return a / b;}

function operate(a, operator, b) {
	switch (operator) {
  	case '+':
    		return add(a, b);
     	break;
    case '-':
    		return subtract(a,b);
    	break;
    case '*':
    		return multiply(a,b);
    	break;
    case '/':
    		return divide(a,b);
    	break;
    default: 
    	resultNum = currentNum;	
  }
}

const display = document.querySelector('.input-text');
const answerBox = document.querySelector('.Ans-text');
const numbersButtons = document.querySelectorAll('.numbers');
const operatorsButtons = document.querySelectorAll('.operators');
const decimalButton = document.getElementById('decimal-button');
const equalsButton = document.getElementById('equals-button');
const backButton = document.getElementById('back-button');
const clearButton = document.getElementById('clr-button');

display.textContent = '';
let equation = '';
let operators = ['+', '-', 'x', '/'];
let currentOperator;
let firstNum = ''; // first number
let currentNum = ''; // current number
let resultNum;
let isCalculated = false;


function modeNumbers () {
	// if a result was displayed, reset number
	if (resultNum) {
		resultNum = '';
		currentNum = this.innerHTML;
		display.textContent = currentNum;
		answerBox.textContent = 'Ans = 0';

	// store number to global variable
	} else {
		currentNum += this.innerHTML;

	// store in equation
		equation += this.innerHTML;

	// display current number
		display.textContent = currentNum;
	}
}

function modeOperators () {
	// current number now is stored in firstNum variable
	// so next number can be stored in currentNum variable
	firstNum = currentNum;
	currentNum = '';

	// store operator to global variable;
	currentOperator = this.innerHTML;

	//store in equation
	equation += this.innerHTML;

	// EDGE CASE: if operator is clicked and there exists an operator in
	// equation, update to the newly clicked operator
	/* if (operators.indexOf(currentOperator) > -1) {
		let lastChar = equaton[equation.length - 1];

		if (operators.indexOf(lastChar) > -1 && equation.length > 1) {
			equation = equation.replace(/.$/, currentOperator);
			console.log(equation);
		}

		// if equation is not empty and no operator exists
		// add to equation
		if (equation != '' && equation.indexOf(currentOperator) == -1) {
			equation += currentOperator
		}

		// if equation is empty, adding minus is allowed
		if (equation == '' && currentOperator = '-') {
			equation += currentOperator;
		} 
	} */
}

function modeDecimal () {
	// in case the num already contains a decimal we do not want to add another
	if (currentNum.indexOf('.') > -1) {return;}

	// store to global variable currentNum
	currentNum += this.innerHTML;

	// store in equation
	equation += this.innerHTML;

	// update display
	display.textContent += this.innerHTML;
}

function modeResult () {
	// when equals is clicked
	// calculate
	console.log(firstNum);
	console.log(currentOperator);
	console.log(currentNum);

	// convert strings to numbers
	firstNum = parseFloat(firstNum);
	currentNum = parseFloat(currentNum);

	resultNum = operate(firstNum, currentOperator, currentNum);
	resultNum = resultNum.toPrecision(3);
	console.log(resultNum);
	// for cases where resultNum is infinity: display ERROR
	if (resultNum === Infinity) {
		display.textContent = 'ERROR';
	} else {
		display.textContent = resultNum;
		answerBox.textContent = `${equation} = ${resultNum}`;
	}

	// for the case that the calculation continues
	// resultNum is now stored in currentNum
	currentNum = resultNum;
	equation = resultNum;

	// set global variable to true
	// that a result was just calculated 
	isCalculated = true;
}

function modeBack () {
	isEqualsPressed = false;
	// remove last character if string is not empty
	if (display.textContent !== '' && display.textContent.length > 1) {
		display.textContent = display.textContent
									 .slice
									 (0, display.textContent.length - 1);
	}
}

function updateDisplay (num) {
	display.innerHTML = '';
	display.textContent = num.substring(0,10);
}

function modeClear () {
	updateDisplay('');
	equation = '';
	currentOperator;
	currentNum = '';
	firstNum = '';
	resultNum;
}

numbersButtons.forEach(button => {
	button.addEventListener('click', modeNumbers);
});

operatorsButtons.forEach(button => {
	button.addEventListener('click', modeOperators);
});

decimalButton.addEventListener('click', modeDecimal);
equalsButton.addEventListener('click', modeResult);
backButton.addEventListener('click', modeBack);
clearButton.addEventListener('click', modeClear);

