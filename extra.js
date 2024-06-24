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