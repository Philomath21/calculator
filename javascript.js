function add (num1, num2){
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2){
  return num1 * num2;
}

function divide (num1, num2)  {
  return num1/ num2;
}

let display = document.getElementById('display');


function operate (num1, operator, num2){
  switch (operator){
    case '+':
      return add(num1, num2);
    case '-' :
      return subtract (num1, num2);
    case '*' :
      return multiply(num1, num2);
    case '/' :
      if (num2 == 0){
        console.log ('Zero division error')
        break;
      }
      return divide(num1, num2);
    default :
      console.log('you have messed up');
      break ;
  }
}


let inputArray = [];

function updateInputArray (){
  let num = 0;
  let isThisNum; // to check whether latest clicked is digit or operator
  
  function onClickingDigit (digit) {
    num = num*10 + digit;
    display.textContent = `${num}`;
    isThisNum = true;
  }
  
  function onClickingOperator (operator) {
    switch (inputArray.length){
      case 0:
        inputArray.push(num);
        // moves to case 1
        inputArray.push(operator)
        num = 0;
        break;
      case 1:
        inputArray.push(operator)
        num = 0;
        break;
      case 2:
        if (isThisNum) {
          inputArray.push(num);
          num = operate(...inputArray);
          if (isNaN(num)){
            display.textContent = `Zero division error. E cholbe na!`
          } else {
            num = Math.round(num*100000000)/100000000;
            display.textContent = `${num}`
          }
          inputArray = [];
          inputArray.push(num);
          // moves to case 1
          inputArray.push(operator)
          num = 0;
          break;
        } else if (operator == `=`){
          inputArray.pop();
          break;
        } else {
          inputArray[1]= operator;
          break;
        }
      default:
        console.log('You have messed up');
    }
    isThisNum = false
    console.log("operator");
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
