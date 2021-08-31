function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananasKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let strawberriesKg = Number(input[4]);
    let raspberryPriceKg = (input[0] / 2);
    let orangePriceKg = raspberryPriceKg - (raspberryPriceKg * 0.4);
    let banansPriceKg = raspberryPriceKg - (raspberryPriceKg * 0.8);
    let billSum = bananasKg * banansPriceKg + orangesKg * orangePriceKg + raspberriesKg * raspberryPriceKg + strawberriesKg * strawberryPrice;
    
    console.log(billSum);
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"])