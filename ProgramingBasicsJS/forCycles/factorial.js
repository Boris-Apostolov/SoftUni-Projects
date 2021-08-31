function factorial(input) {
    let number = Number(input[0]);
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    console.log(result)
}
factorial(["8"])