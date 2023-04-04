const calculator = {
	displayNumber: '0',
	operator: null,
	firstNumber: null,
	waitingForSecondNumber: false
};

function updateDisplay() {
	document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
	calculator.displayNumber = '0';
	calculator.operator = null;
	calculator.firstNumber = null;
	calculator.waitingForSecondNumber = false;
}

function inputDigit(digit){
	if(calculator.displayNumber === '0') {
		calculator.displayNumber = digit;
	} else {
		calculator.displayNumber += digit;
	}
}

function handleOperator(operator) {
	if(!calculator.waitingForSecondNumber){
		calculator.operator = operator;
		calculator.waitingForSecondNumber = true;
		calculator.firstNumber = calculator.displayNumber;
		// mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
		calculator.displayNumber = '0';
	} else {
		alert('Operator sudah ditetapkan')
	}
}

function performCalculation() {
	if(calculator.firstNumber == null || calculator.operator == null) {
		alert("Anda belum menetapkan operator");
		return;
	}

	let result = 0;
	
	if(calculator.operator === "+") {
		result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
	}

	if (calculator.operator === "-") {
		result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
	}

	if(calculator.operator === "x") {
		result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
	}

	if(calculator.operator === "/") {
		result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber)
	}

	calculator.displayNumber = result;
}

const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
	button.addEventListener('click', function(event) {

		// mendapatkan objek elemen yang diklik
		const target = event.target;

		if(target.classList.contains('clear')) {
			clearCalculator();
			updateDisplay();
			return;
		}

		if(target.classList.contains('equals')) {
			performCalculation();
			updateDisplay();
			return;
		}

		if(target.classList.contains('operator')) {
			handleOperator(target.innerText);
			return;
		}

		inputDigit(target.innerText);
		updateDisplay();
	});
}