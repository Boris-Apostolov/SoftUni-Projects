function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];
    let money = 0;

    switch (season) {
        case "spring":
            if (people <= 5) {
                money = 50;
            } else {
                money = 48;
            }
            break;
        case "summer":
            if (people <= 5) {
                money = 48.50 * 0.85;
            } else {
                money = 45 * 0.85;
            }
            break;
        case "autumn":
            if (people <= 5) {
                money = 60;
            } else {
                money = 49.50;
            }
            break;
        case "winter":
            if (people <= 5) {
                money = 86 * 1.08;
            } else {
                money = 85 * 1.08;
            }
            break;
    }
    console.log(`${(money * people).toFixed(2)} leva.`)
}
excursionCalculator(["5",
    "spring"])