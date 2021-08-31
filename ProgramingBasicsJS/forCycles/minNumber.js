function minNumber(input) {
    let numberCounter = Number(input[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;
    let i = 1;

    while (i <= numberCounter) {
        let num = Number(input[i]);
        if (minNumber > num) {
            minNumber = num;
        }
        i++;
    }
    console.log(minNumber)
}
minNumber(["3",
    "-10",
    "20",
    "-30"])