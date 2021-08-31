function greaterNumber(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);

    if (numA > numB) {
        console.log(numA);
    } else {
        console.log(numB);
    }
}
greaterNumber(["5", "10"])