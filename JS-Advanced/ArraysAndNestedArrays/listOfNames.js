function listOfNames(arr) {
    const result = arr.sort((a, b) => a.localeCompare(b));
    result.forEach((el, index) => {
        console.log(`${++index}.${el}`);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);