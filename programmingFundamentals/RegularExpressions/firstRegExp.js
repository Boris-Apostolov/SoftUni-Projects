let text = 'Peter: 123, Mark: 456';
let pattern = /\d+/;

let match1 = text.match(pattern);
let match2 = pattern.exec(text);
console.log(match1);
console.log(match2);
