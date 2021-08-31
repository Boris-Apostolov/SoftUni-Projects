function spiceMustFlow(starting) {
    let days = 0;
    let daylyIncome = starting;
    let allSpices = 0;

    while (daylyIncome >= 100) {
        allSpices += daylyIncome - 26;
        daylyIncome -= 10;
        days++;
    }
    if (allSpices == 0) {
        daylyIncome -= 26;
        if (daylyIncome < 0) {
            daylyIncome = 0;
        }
        console.log(days);
        console.log(allSpices);
    } else if (allSpices < 26) {
        allSpices = 0;
        console.log(days);
        console.log(allSpices);
    } else {
        allSpices -= 26;
        console.log(days);
        console.log(allSpices);
    }
}
spiceMustFlow(111)