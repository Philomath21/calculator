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

// Calculator display
let display = document.getElementById('display');
// array to store the two numbers & operator (expression to calculate) entered by the user 
let inputArray = []; // format: [num1, operator, num2]


function updateInputArray (){
  let num = 0; // to store the user entered number
  let isThisNum; // to know whether last clicked button is a digit or an operator
  
  // to update number and display it on clicking the digit buttons
  function onClickingDigit (digit) {
    num = num*10 + digit;
    display.textContent = `${num}`;
    isThisNum = true;
  }
  
  // to update expression on clicking the operator buttons
  function onClickingOperator (operator) {
    if (!isThisNum){ //if last clicked button was also an operator, change it in input array with new operator
      inputArray[1]= operator;
    } else {
      inputArray.push(num);
      if (inputArray.length == 3){ //calculate the previous expression first
        num = operate(...inputArray);
        num = Math.round(num*100000000)/100000000;
        display.textContent = (isNaN(num)) ? `Zero division error. E cholbe na!` : `${num}`;
        inputArray = [];
        inputArray.push(num);
      }
      inputArray.push(operator)
      num = 0;
    }
    isThisNum = false
  }


  let clear = document.querySelector('#clear');
  clear.addEventListener('click', ()=> {
    inputArray = [];
    num = 0;
    display.textContent = num;
  })

  
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

  let zero = document.querySelector('#zero');
  zero.addEventListener('click', () => {onClickingDigit(0)})
  
  
  let addition= document.querySelector('#addition');
  addition.addEventListener('click', () => {onClickingOperator('+')})

  let subtraction= document.querySelector('#subtraction');
  subtraction.addEventListener('click', () => {onClickingOperator('-')})

  let multiplication= document.querySelector('#multiplication');
  multiplication.addEventListener('click', () => {onClickingOperator('*')})

  let division= document.querySelector('#division');
  division.addEventListener('click', () => {onClickingOperator('/')})

  let evaluate= document.querySelector('#evaluate');
  evaluate.addEventListener('click', () => {onClickingOperator('=')})
}


updateInputArray()
