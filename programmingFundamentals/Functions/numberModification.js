function numberModification2(number) {
    const getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;
    while (getDigitsAverage(number) < 5) number += '9';
    console.log(number);
}
numberModification2(101)