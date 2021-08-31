function printAndSum(start, end) {
    let resultString = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        resultString += ` ${i}`;
        sum += i;
    }
    console.log(resultString);
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)