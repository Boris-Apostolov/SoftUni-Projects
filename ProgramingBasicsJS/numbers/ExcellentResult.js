function excellentResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log("Excellent!");
    } else {
        console.log("Not excellent!")
    }
}
excellentResult(["6.00"]);