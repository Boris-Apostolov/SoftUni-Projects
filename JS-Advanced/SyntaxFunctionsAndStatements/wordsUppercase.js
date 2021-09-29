function wordsUppercase(text) {
    let newText = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ")
    console.log(newText);
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello')

