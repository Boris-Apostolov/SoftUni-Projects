function oddNums(n) {
    let sum = 0;
    let num = 1;
    for (let i = 0; i < n; i++) {
        console.log(num);

        sum += num;
        num += 2;
    }
    console.log('Sum:', sum);
}
oddNums(5)