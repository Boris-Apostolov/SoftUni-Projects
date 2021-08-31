function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quntity = Number(input[2]);
    let result = 0;

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": result = quntity * 0.50; break;
                case "water": result = quntity * 0.80; break;
                case "beer": result = quntity * 1.20; break;
                case "sweets": result = quntity * 1.45; break;
                case "peanuts": result = quntity * 1.60; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": result = quntity * 0.40; break;
                case "water": result = quntity * 0.70; break;
                case "beer": result = quntity * 1.15; break;
                case "sweets": result = quntity * 1.30; break;
                case "peanuts": result = quntity * 1.50; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": result = quntity * 0.45; break;
                case "water": result = quntity * 0.70; break;
                case "beer": result = quntity * 1.10; break;
                case "sweets": result = quntity * 1.35; break;
                case "peanuts": result = quntity * 1.55; break;
            }
    }
    console.log(result.toFixed(2));
}
smallShop(["water",
    "Sofia",
    "6"])