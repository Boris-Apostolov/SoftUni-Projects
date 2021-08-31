function catWalking(input){
    let min = Number(input[0]);
    let count = Number(input[1]);
    let calories = Number(input[2]);
    let totalBurnedCalories = min * count * 5;

    if(totalBurnedCalories >= calories / 2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`)
    }
}
catWalking(["30",
"3",
"600"])