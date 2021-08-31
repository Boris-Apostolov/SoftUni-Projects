function mergeArrays(firstArr, secondArr) {
    let resultArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let firstArrElement = firstArr[i];
        let secondArrElement = secondArr[i];

        if (i % 2 === 0) {
            let sum = Number(firstArrElement) + Number(secondArrElement);
            resultArr.push(sum)
        } else {
            let result = firstArrElement + secondArrElement;
            resultArr.push(result);
        }
    }
    let resultAsString = resultArr.join(' - ');
    console.log(resultAsString)
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);