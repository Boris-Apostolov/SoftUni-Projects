function puppyCare(input) {
    let allFoodHave = Number(input.shift());
    let allGramFood = allFoodHave * 1000;
    let eatenFood = 0;
    let totalFood = 0;
    let command = input.shift();

    while (command !== "Adopted") {
        eatenFood = input.shift();
        eatenFood++;
        totalFood += eatenFood;
        command = input.shift();
    }
    if (totalFood > allGramFood) {
        console.log(`Food is not enough. You need ${totalFood - allGramFood} grams more.`);
    } else if (totalFood < allGramFood) {
        console.log(`Food is enough! Leftovers: ${allGramFood - totalFood} grams.`);
    }
}
puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"])