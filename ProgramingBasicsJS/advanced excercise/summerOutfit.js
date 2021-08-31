function summerOutfit(input) {

    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {

        if (timeOfDay === "Morning") {
            Outfit = "Sweatshirt"
            Shoes = "Sneakers"
        }
     else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
        Outfit = "Shirt"
        Shoes = "Moccasins"
     }
    }  
    else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay === "Morning") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
        else if (timeOfDay === "Afternoon") {
            Outfit = "T-Shirt"
            Shoes = "Sandals"
        }
        else if
            (timeOfDay === "Evening") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
    } 
    if (degrees >= 25) {
        if (timeOfDay === "Morning") {
            Outfit = "T-Shirt"
            Shoes = "Sandals"
        }
        else if (timeOfDay === "Afternoon") {
            Outfit = "Swim Suit"
            Shoes = "Barefoot"
        }
        else if (timeOfDay === "Evening") {
            Outfit = "Shirt"
            Shoes = "Moccasins"
        }
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}

summerOutfit(["22",
    "Afternoon"])