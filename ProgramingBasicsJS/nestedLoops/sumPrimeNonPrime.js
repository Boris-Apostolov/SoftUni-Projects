function sumPrimeNonPrime(input) {
    let index = 0;
    let primeNums = 0;
    let nonPrimeNums = 0;

    while (input[index] != "stop") {
        let num = Number(input[index]);
        if (num < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNums += num;
            } else {
                nonPrimeNums += num;
            }
        }
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeNums}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNums}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])