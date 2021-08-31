function catLife(input) {
    let type = input[0];
    let gender = input[1];
    let catMonths = 0;

    switch (type) {
        case "British Shorthair":
            if (gender == "m") {
                catMonths = (13 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            } else {
                catMonths = (14 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            }
            break;
        case "Siamese":
            if (gender == "m") {
                catMonths = (15 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            } else {
                catMonths = (16 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            }
            break;
        case "Persian":
            if (gender == "m") {
                catMonths = (14 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            } else {
                catMonths = (15 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            }
            break;
        case "Ragdoll":
            if (gender == "m") {
                catMonths = (16 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            } else {
                catMonths = (17 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            }
            break;
        case "American Shorthair":
            if (gender == "m") {
                catMonths = (12 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            } else {
                catMonths = (13 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            }
            break;
        case "Siberian":
            if (gender == "m") {
                catMonths = (11 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            } else {
                catMonths = (12 * 12) / 6;
                console.log(`${Math.floor(catMonths)} cat months`);
            }
            break;
        default: console.log(`${type} is invalid cat!`);
            break;
    }
}
catLife(["Tom",
    "m"])