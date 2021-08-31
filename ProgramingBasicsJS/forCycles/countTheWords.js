function countTheWords(input) {
    let message = input[0];
    let stringL = message.length;
    let spaceCounter = 0;

    for (let i = 0; i < stringL; i++) {
        if (message[i] === " ") {
            spaceCounter++;
        }
    }
    let wordsCount = spaceCounter + 1;
    if (wordsCount > 10) {
        console.log(`The message is too long to be send! Has ${wordsCount} words.`);
    } else {
        console.log("The message was sent successfully!")
    }
}
countTheWords(["This message has exactly eleven words. One more as it's allowed!"])