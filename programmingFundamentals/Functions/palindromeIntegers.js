function palindromeIntegers(list) {
    for (let number of list) {
        let numAsString = number.toString();
        let reversedNumAsString = numAsString.split('').reverse().join('');

        if (numAsString === reversedNumAsString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])