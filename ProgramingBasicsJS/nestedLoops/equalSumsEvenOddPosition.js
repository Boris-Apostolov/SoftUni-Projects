function equalSumsEvenOddPosition(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let str = "";

    for (let i = a; i <= b; i++) {
        let currentNum = i.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let num = Number(currentNum[j]);
            if (j % 2 == 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
        }
        if (oddSum == evenSum) {
            str += currentNum + " ";
        }
    }
    if (str.length > 0) {
        console.log(str);
    }
}
equalSumsEvenOddPosition(["100000",
    "100050"])