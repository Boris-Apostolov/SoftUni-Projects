function petShop(input) {

    let dogFood = 2.5;
    let otherFood = 4;
    let dogs = (input[0]);
    let otherAnimals = (input[1]);

    console.log(dogFood * dogs + otherAnimals * otherFood);
}
petShop(["5", "4"])