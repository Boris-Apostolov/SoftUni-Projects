function coffee(list) {
    let orders = Number(list[0]);
    let price = Number(list[1]);
    let days = Number(list[2]);
    let count = Number(list[3]);
    let sum = Number((count * days * price).toFixed(2));
    let totalSum = sum;

    console.log(`The price for the coffee is: $${sum.toFixed(2)}`);

    if (orders == 2) {
        let price1 = Number(list[4]);
        let days1 = Number(list[5]);
        let count1 = Number(list[6]);
        let sum1 = Number((count1 * days1 * price1).toFixed(2));

        console.log(`The price for the coffee is: $${sum1.toFixed(2)}`);
        totalSum += sum1
    }
    console.log(`Total: $${totalSum.toFixed(2)}`);
}
coffee(["2",
    "4.99",
    "31",
    "3",
    "0.35",
    "31",
    "5"])