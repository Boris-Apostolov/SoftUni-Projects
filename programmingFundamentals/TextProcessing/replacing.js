function replacing(text, word) {
    let found = text.includes(word);

    while(found) {
        text = text.replace(word, '*'.repeat(word.length));
        found = text.includes(word);
    }
    console.log(text);
}
replacing('A small sentence with some words small', 'small');

console.log(text.split(word).join('*'.repeat(word.length)));