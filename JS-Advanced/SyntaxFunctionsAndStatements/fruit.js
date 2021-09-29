function fruits(fruit, weight, money) {
    const weightInKg = (weight / 1000);
    const moneyNeeded = (weight / 1000) * money;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80)