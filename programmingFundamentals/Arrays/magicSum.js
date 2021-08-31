function magicSum(arr, num) {

    let magicSums = Number(num);

    for (let i = 0; i < arr.length - 1; i++) {
        let firstNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let secondNum = arr[j];

            if (firstNum + secondNum === magicSums) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)