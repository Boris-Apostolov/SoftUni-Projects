function number100(input) {
    let numA = Number(input[0]);

    if (numA < 100) {
        console.log("Less than 100");
    } else if (numA >= 100 & numA <= 200) {
        console.log("Between 100 and 200");
    } else if (numA > 200) {
        console.log("Greater than 200");
    }
}
number100(["200"])