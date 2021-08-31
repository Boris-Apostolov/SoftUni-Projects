function numbersDivisibleBy9(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log("The sum: " + sum);
    for (let x = a; x < b; x++) {
        if (x % 9 === 0) {
            console.log(x)
        }
    }
}
numbersDivisibleBy9(["100", "200"])