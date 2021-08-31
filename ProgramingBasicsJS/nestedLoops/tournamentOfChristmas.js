function tournamentOfChristmas(input) {
    let index = 0;
    let day = Number(input[index]);
    index++;
    let totalMoney = 0;
    let totalWin = 0;
    let totalLose = 0;

    for (let i = 1; i <= day; i++) {
        let command = input[index];
        index++;
        let tempMoney = 0;
        let tempCounterWin = 0;
        let tempCounterLose = 0;

        while (command !== "Finish") {
            let sportName = command;
            let result = input[index];
            index++;
            if (result === "win") {
                tempMoney += 20;
                tempCounterWin++;
            } else {
                tempCounterLose++;
            }
            command = input[index];
            index++;
        }
        if (tempCounterWin > tempCounterLose) {
            tempMoney *= 1.10
            totalWin++;
        } else {
            totalLose++;
        }
        totalMoney += tempMoney;
    }
    if (totalWin > totalLose) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
}
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])