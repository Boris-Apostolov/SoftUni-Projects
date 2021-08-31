function coffeeMachine(input) {
    let type = input[0];
    let sugar = input[1];
    let count = Number(input[2]);
    let money = 0;

    switch (type) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    money = count * 0.90;
                    money = money * 0.65;
                    break;
                case "Normal":
                    money = count * 1.00;
                    break;
                case "Extra":
                    money = count * 1.20;
                    break;
            }
            if (count >= 5) {
                money = money * 0.75;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    money = count * 1.00;
                    money = money * 0.65;
                    break;
                case "Normal":
                    money = count * 1.20;
                    break;
                case "Extra":
                    money = count * 1.60;
                    break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without":
                    money = count * 0.50;
                    money = money * 0.65;
                    break;
                case "Normal":
                    money = count * 0.60;
                    break;
                case "Extra":
                    money = count * 0.7;
                    break;
            }
            break;
    }
    if (money > 15) {
        money = money * 0.80;
    }
    console.log(`You bought ${count} cups of ${type} for ${money.toFixed(2)} lv.`)
}
coffeeMachine(["Espresso",
    "Without",
    "10"])