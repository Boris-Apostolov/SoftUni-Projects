function puppyCare(input) {
  let allFood = Number(input[0]) * 1000;
  let index = 1;

  while (input[index] !== 'Adopted') {
    let eatenFood = Number(input[index]);
    allFood -= eatenFood;
    index++
  }
  if (allFood >= 0) {
    console.log(`Food is enough! Leftovers: ${allFood} grams.`);
  } else {
    console.log(`Food is not enough. You need ${-allFood} grams more.`);
  }
}
puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"])