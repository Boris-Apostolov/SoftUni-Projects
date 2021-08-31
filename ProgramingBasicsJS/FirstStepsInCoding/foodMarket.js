function foodMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);
    let raspberriesPrice = (input[0] / 2);
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);
    let totalRaspberries = raspberriesPrice * raspberries;
    let totalOranges = orangesPrice * oranges;
    let totalBananas = bananasPrice * bananas;
    let totalStarwberries = strawberriesPrice * strawberries;

    let final = totalRaspberries + totalBananas + totalStarwberries + totalOranges;
    console.log(final.toFixed(2));
}
foodMarket(["48", "10", "3.3", "6.5", "1.7"])