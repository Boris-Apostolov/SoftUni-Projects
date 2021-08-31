function Calculator(firstNum, operator, secondNum) {
    console.log(eval(firstNum + operator + secondNum).toFixed(2));
}
Calculator(5, '+', 10)