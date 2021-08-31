function charRange(n1, n2) {
    let min = n1.charCodeAt(0);
    let max = n2.charCodeAt(0);

    let firstCharAsNum = n1.charCodeAt(0);
    let secondCharAsNum = n2.charCodeAt(0);

    if (firstCharAsNum > secondCharAsNum) {
        min = n2.charCodeAt(0);
        max = n1.charCodeAt(0);
    }

    let result = '';

    for (let i = min + 1; i < max; i++) {
        let char = String.fromCharCode(i);
        result += char + ' ';
    }
    return result;
}
let result = charRange('a', 'd');
console.log(result);