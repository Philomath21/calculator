switch (inputArray.length){
    case 0:
      inputArray.push(num);
      inputArray.push(operator)
      num = 0;
      break;
    case 2:
      if (isThisNum) {
        inputArray.push(num);
        num = operate(...inputArray);
        console.log("isFinite(num)");
        if (isNaN(num) || !isFinite(num)){
          display.textContent = `Zero division error.`
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
      } else {
        inputArray[1]= operator;
        break;
      }
    default:
      console.log('You have messed up');
  }


switch (true) {
  case '.': ;
  case 0: onClickingDigit(0);
  case 1: onClickingDigit(1);
  case 2: onClickingDigit(2);
  case 3: onClickingDigit(3);
  case 4: onClickingDigit(4);
  case 5: onClickingDigit(5);
  case 6: onClickingDigit(6);
  case 7: onClickingDigit(7);
  case 8: onClickingDigit(8);
  case 9: onClickingDigit(9);
  case '/': ;
  case '*': onClickingOperator('*');
  case '-': onClickingOperator('-');
  case '+': onClickingOperator('+');
  case "=": onClickingOperator('=');
}