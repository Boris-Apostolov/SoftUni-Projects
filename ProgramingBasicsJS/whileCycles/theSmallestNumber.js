function theSmallestNumber(input) {
    let index = 0;
    let command = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (minNumber > num) {
            minNumber = num;
        }
        command = input[index];
        index++;
    }
    console.log(minNumber)
}
theSmallestNumber(["-30",
    "20",
    "-10",
    "Stop"])