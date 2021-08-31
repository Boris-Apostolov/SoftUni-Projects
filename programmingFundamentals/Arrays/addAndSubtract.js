function addAndSubtract(array) {
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let newNumber = 0;

        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
            array[i] = newNumber;
        } else {
            newNumber = currentNumber - i;
            array[i] = newNumber;
        }
        oldSum += currentNumber;
        newSum += newNumber;
    }
    console.log(array);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])