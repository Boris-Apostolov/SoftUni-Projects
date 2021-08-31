function distinctArr(numbers) {
    let resultArr = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (!resultArr.includes(currentNum)) {
            resultArr.push(currentNum)
        }
    }
    console.log(resultArr.join(' '));
}
distinctArr([1, 2, 3, 4])