function processors(input) {
    let neededProcessors = Number(input[0]);
    let workers = Number(input[1]);
    let workDays = Number(input[2]);
    let allHours = workers * workDays * 8;
    let finishedProcessors = Math.floor(allHours / 3);

    if (finishedProcessors < neededProcessors) {
        let badDiff = neededProcessors - finishedProcessors;
        let loss = badDiff * 110.10;
        console.log(`Losses: -> ${loss.toFixed(2)} BGN`)
    } else {
        let goodDiff = finishedProcessors - neededProcessors;
        let win = goodDiff * 110.10;
        console.log(`Profit: -> ${win.toFixed(2)} BGN`)
    }
}
processors(["500",
    "8",
    "20"])