function revealWords(words, text) {

    words = words.split(', ');
    let newText = text.split(' ');
    let result = [];

    for (let token of newText) {
        let replaced = false;
        for (let word of words) {
            if (token == '*'.repeat(word.length)) {
                result.push(word);
                replaced = true;
            }
        }
        if (replaced == false) {
            result.push(token);
        }
    }
    console.log(result.join(' '));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')