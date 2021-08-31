function oddAndEvenSum(num) {
    let numAssString = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of numAssString) {
        if (Number(digit) % 2 === 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }
    let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return resultString
}
let result = oddAndEvenSum(1000435);
console.log(result);