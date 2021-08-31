function summerOutfit(input) {

    let temperature = Number(input[0]);
    let period = input[1];
    let outfit;
    let shoes;

    if (temperature >= 10 && temperature <= 18) {

        if (period === "Morning") {
            Outfit = "Sweatshirt"
            Shoes = "Sneakers"
        }
        else if (period === "Afternoon" || period === "Evening") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
    }
    else if (temperature > 18 && temperature <= 24) {
        if (period === "Morning") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
        else if (period === "Afternoon") {
            Outfit = "T-Shirt"
            Shoes = "Sandals"
        }
        else if
            (period === "Evening") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
    } else if (temperature >= 25) {
        if (period === "Morning") {
            Outfit = "T-Shirt"
            Shoes = "Sandals"
        }
        else if (period === "Afternoon") {
            Outfit = "Swim Suit"
            Shoes = "Barefoot"
        }
        else if (period === "Evening") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
    }
    console.log(`It's ${temperature} degrees, get your ${Outfit} and ${Shoes}.`);
}