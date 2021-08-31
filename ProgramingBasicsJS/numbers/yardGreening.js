function yardGreening(input) {

    let yardSpace = (input[0]);
    let Price = (input[0]) * 7.61;
    let discount = Price * 0.18
    let finalSum = Price - discount

    console.log(finalSum, discount)

}
yardGreening(["550"])