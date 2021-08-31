function agencyProfit(input) {
    let name = input[0];
    let countTicket = Number(input[1]);
    let countKidsTicket = Number(input[2]);
    let price = Number(input[3]);
    let profit = Number(input[4]);
    let priceKidsTicket = price * 0.30 + profit;
    let priceTicket = price + profit;
    let totalPrice = priceKidsTicket * countKidsTicket + priceTicket * countTicket;
    let totalProfit = totalPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${totalProfit.toFixed(2)} lv.`)
}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])