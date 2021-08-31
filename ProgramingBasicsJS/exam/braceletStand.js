function braceletStand(input) {
    let dailyMoney = Number(input[0]);
    let salesMoney = Number(input[1]);
    let costs = Number(input[2]);
    let presentPrice = Number(input[3]);
    let allDailyMoney = dailyMoney * 5;
    let earnedSalesMoney = salesMoney * 5;
    let allMoney = (allDailyMoney + earnedSalesMoney) - costs;

    if (allMoney >= presentPrice) {
        console.log(`Profit: ${allMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(presentPrice - allMoney).toFixed(2)} BGN.`);
    }
}
braceletStand(["5.12",
    "32.05",
    "15",
    "150"])