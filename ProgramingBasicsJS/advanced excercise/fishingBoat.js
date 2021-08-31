function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherCounter = Number(input[2]);

    let rentPrice = 0;

    switch (season) {
        case "Spring": rentPrice = 3000; break;
        case "Summer":
        case "Autumn": rentPrice = 4200; break;
        case "Winter": rentPrice = 2600; break;
    }
    if (fisherCounter <= 6) {
        rentPrice *= 0.90;
    } else if (fisherCounter <= 11) {
        rentPrice *= 0.85;
    } else if (fisherCounter >= 12) {
        rentPrice *= 0.75;
    }
    if (fisherCounter % 2 === 0 && season !== "Autumn") {
        rentPrice *= 0.95;
    }
    if (rentPrice <= budget) {
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["3000",
    "Summer",
    "11"])