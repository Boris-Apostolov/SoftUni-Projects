function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quntity = Number(input[2]);
    let result = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana": result = quntity * 2.50; break;
                case "apple": result = quntity * 1.20; break;
                case "orange": result = quntity * 0.85; break;
                case "grapefruit": result = quntity * 1.45; break;
                case "kiwi": result = quntity * 2.70; break;
                case "pineapple": result = quntity * 5.50; break;
                case "grapes": result = quntity * 3.85; break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana": result = quntity * 2.70; break;
                case "apple": result = quntity * 1.25; break;
                case "orange": result = quntity * 0.90; break;
                case "grapefruit": result = quntity * 1.60; break;
                case "kiwi": result = quntity * 3.00; break;
                case "pineapple": result = quntity * 5.60; break;
                case "grapes": result = quntity * 4.20; break;
            }
    }
    if ((day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday") && (product === "banana" || product === "apple" || product === "orange" || product === "grapefruit" || product === "kiwi" || product === "pineapple" || product === "grapes")) {
        console.log(result.toFixed(2));
    }
    else {
        console.log("error")
    }
}
fruitShop(["orange",
    "Sunday",
    "3"])