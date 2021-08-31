function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let nights = days - 1;
    let result = 0;

    if (type === "room for one person") {
        result = nights * 18;
    } else if (type === "apartment") {
        result = nights * 25;
        if (days < 10) {
            result = result * 0.70;
        } else if (days >= 10 && days <= 15) {
            result = result * 0.65;
        } else {
            result = result * 0.50;
        }
    } else {
        result = nights * 35;
        if (days < 10) {
            result = result * 0.90;
        } else if (days >= 10 && days <= 15) {
            result = result * 0.85;
        } else {
            result = result * 0.80;
        }
    }

    if (grade === "positive") {
        result = result * 1.25;
    } else {
        result = result * 0.90;
    }
    console.log(result.toFixed(2))
}
skiTrip(["12",
    "room for one person",
    "positive"])