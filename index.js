function fibonacciCounter(maxValue) {
  let firstNumber = 0;
  let secondNumber = 1;
  let fibonacciArray = [];
  while (secondNumber <= maxValue) {
      fibonacciArray.push(secondNumber + firstNumber);
      let temp = secondNumber;
      secondNumber += firstNumber;
      firstNumber = temp;
  }

  fibonacciArray.forEach((num) => {
    console.log(num)
  })
}

fibonacciCounter(121)