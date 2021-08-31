function addAndSubtract(n1, n2, n3) {
    function add(n1, n2) {
        let result = n1 + n2;
        return result;
    }

    function subtract(n1, n2) {
        let result = n1 - n2;
        return result;
    }

    let sum = add(n1, n2);
    let result = subtract(sum, n3);
    return result;
}

let result = addAndSubtract(23, 6, 10);
console.log(result);