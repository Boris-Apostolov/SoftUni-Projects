function sumDigits(num) {
    let numAssString = num.toString();
    let sum = 0;

    for (let digit of numAssString) {
        sum += Number(digit);
    }
    console.log(sum);
}
sumDigits(245678)