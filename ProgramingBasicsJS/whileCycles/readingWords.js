function readingWords(input) {
    let index = 0
    let command = input[index];
    index++;

    while (command !== "Stop") {
        let name = command;
        console.log(name);

        command = input[index];
        index++;
    }
}
readingWords(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])