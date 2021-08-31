function invalidNumber(input) {
    let numA = Number(input[0]);

    if (numA >= 100 && numA <= 200 || numA === 0) {
        console.log();
    } else {
        console.log("invalid")
    }
}
invalidNumber(["0"])