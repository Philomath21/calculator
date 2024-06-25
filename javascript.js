let display = document.getElementById('display'); // Calculator display element
let inputArray = []; // format: [num1, operator, num2]. array to store the two numbers & operator (expression to calculate) entered by the user 
let num = 0; // to store the user entered number
let decimalPlaceCounter = 0; // to know if '.' button has been clicked, and to store the decimal place count
let lastClicked = "digit"; // ("digit", "operator" or "=") to know whether last clicked button is digit, operator, or "="

// operates on two numbers as per the operator passed
function operate (num1, operator, num2){
  switch (operator){
    case '+':
      return num1+num2;
    case '-' :
      return num1-num2;
    case '*' :
      return num1*num2;
    case '/' :
      return num1/num2;
    default :
      break ;
  }
}

function onClickingClear() {
  inputArray = [];
  num = 0;
  decimalPlaceCounter = 0;
  display.textContent = num;
}

function onClickingBack (){
  if (lastClicked == "operator") {
    num = inputArray[0];
    inputArray = [];
    lastClicked = "digit";
  }
  decimalPlaceCounter ? decimalPlaceCounter -- : null;
  num = num.toString().slice(0,-1);
  num = Number(num);
  display.textContent = num;
}

// to update number and display it on clicking the digit buttons
function onClickingDigit (digit) {
  (lastClicked == "=") ? onClickingClear() : null;
  num = decimalPlaceCounter ? (num + digit/(10**decimalPlaceCounter++))
                            : (num*10 + digit);
  display.textContent = `${num}`;
  lastClicked = "digit";
}

function onClickingEvaluate () {
  if (lastClicked == "digit" && inputArray.length == 2){
    inputArray.push(num);
    num = operate(...inputArray);
    num = Math.round(num*100000000)/100000000;
    display.textContent = (isNaN(num)|| !isFinite(num)) ? `Zero division error` : `${num}`;
    inputArray = [];
    lastClicked = "=";
  } 
}

// to update expression on clicking the operator buttons
function onClickingOperator (operator) {
  if (lastClicked == "operator"){ //if last clicked button was also an operator, change it in input array with new operator
    inputArray[1]= operator;
  } else if (lastClicked == "digit"){
    onClickingEvaluate(); // Evaluates earlier expression if present, and result is stored in num
    inputArray.push(num);
    inputArray.push(operator);
    num = 0;
    decimalPlaceCounter = 0;
  }
  lastClicked = "operator";
};

function onClickingDot () {
  if (!decimalPlaceCounter){
    display.textContent = `${num}.`;
    decimalPlaceCounter++;
  }
}

// Keyboard functionality
document.addEventListener('keyup', (event) => {
  if (event.key == 'Delete') {onClickingClear()}
  else if (event.key == 'Backspace') {onClickingBack()}
  else if (event.key == '.') {onClickingDot()}
  else if (event.key == '0') {onClickingDigit(0)}
  else if (event.key == '1') {onClickingDigit(1)}
  else if (event.key == '2') {onClickingDigit(2)}
  else if (event.key == '3') {onClickingDigit(3)}
  else if (event.key == '4') {onClickingDigit(4)}
  else if (event.key == '5') {onClickingDigit(5)}
  else if (event.key == '6') {onClickingDigit(6)}
  else if (event.key == '7') {onClickingDigit(7)}
  else if (event.key == '8') {onClickingDigit(8)}
  else if (event.key == '9') {onClickingDigit(9)}
  else if (event.key == '/') {onClickingOperator('/')}
  else if (event.key == '*') {onClickingOperator('*')}
  else if (event.key == '-') {onClickingOperator('-')}
  else if (event.key == '+') {onClickingOperator('+')}
  else if (event.key == '=') {onClickingEvaluate()}
  else if (event.key == 'Enter') {onClickingEvaluate()}
})

// On screen buttons functionality
let clear = document.querySelector('#clear');
clear.addEventListener('click', onClickingClear);

let back = document.querySelector('#back');
back.addEventListener('click', onClickingBack);

let dot = document.querySelector(`#dot`);
dot.addEventListener('click', onClickingDot);

let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {onClickingDigit(0)})

let one = document.querySelector('#one');
one.addEventListener('click', () => {onClickingDigit(1)})

let two = document.querySelector('#two');
two.addEventListener('click', () => {onClickingDigit(2)})

let three = document.querySelector('#three');
three.addEventListener('click', () => {onClickingDigit(3)})

let four = document.querySelector('#four');
four.addEventListener('click', () => {onClickingDigit(4)})

let five = document.querySelector('#five');
five.addEventListener('click', () => {onClickingDigit(5)})

let six = document.querySelector('#six');
six.addEventListener('click', () => {onClickingDigit(6)})

let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {onClickingDigit(7)})

let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {onClickingDigit(8)})

let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {onClickingDigit(9)})

let division= document.querySelector('#division');
division.addEventListener('click', () => {onClickingOperator('/')})

let multiplication= document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {onClickingOperator('*')})

let subtraction= document.querySelector('#subtraction');
subtraction.addEventListener('click', () => {onClickingOperator('-')})

let addition= document.querySelector('#addition');
addition.addEventListener('click', () => {onClickingOperator('+')})

let evaluate= document.querySelector('#evaluate');
evaluate.addEventListener('click', onClickingEvaluate)

