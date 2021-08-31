function findTheString(input) {
    let string = input.shift();

    while (input[0] != 'Done') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == 'Change') {
            string = string.split(tokens[1]).join(tokens[2])
            console.log(string);

        } else if (command == 'Includes') {
            if (string.includes(tokens[1])) {
                console.log(`True`);
            } else {
                console.log(`False`);;
            }
        } else if (command == 'End') {
            if (string.substr(-tokens[1].length) == tokens[1]) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'Uppercase') {
            string = string.toUpperCase()
            console.log(string);
        } else if (command == 'FindIndex') {
            let letter = Number(string.indexOf(tokens[1]));
            console.log(letter);
        } else if (command == 'Cut') {
            let newString = string.substr(tokens[1], tokens[2]);
            console.log(newString);
        }
    }
}
findTheString(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])