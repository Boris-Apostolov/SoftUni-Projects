function goldMine(input) {
    let locations = Number(input[0]);
    let index = 1;

    for (let i = 0; i < locations; i++) {
        let avgGoldIncome = Number(input[index]);
        index++;
        let days = Number(input[index]);
        let goldIncome = 0;
        index++;
        for (let j = 0; j < days; j++) {
            goldIncome += Number(input[index]);
            index++;
        }
        let average = goldIncome / days;
        if (average >= avgGoldIncome) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`)
        } else {
            console.log(`You need ${(avgGoldIncome - average).toFixed(2)} gold.`)
        }
    }
}
goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])