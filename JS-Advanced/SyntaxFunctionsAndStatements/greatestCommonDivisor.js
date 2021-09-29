function greatestCommonDivisor(a, b) {
    while (b != 0) {
        const temp = b;
        b = a % b;
        a = temp
    }
    return a;
}
console.log((greatestCommonDivisor(15, 5)))