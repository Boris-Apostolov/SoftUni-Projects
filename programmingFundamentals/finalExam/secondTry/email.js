function email(input) {
    let firstEmail = input.shift();
    let isValid = true;
    let firstPattern = /[A-Z]/g;
    let secondPattern = /[a-z]/g;
    let thirdPattern = /(\w+|\d+|@)+/g;
    let fourthPattern = /\d/g;

    while (input[0] != 'Valid') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let changeOne = tokens[1];
        let changeTwo = tokens[2];

        if (command == 'Validation') {
            if (firstEmail.length < 6) {
                console.log("Email must be at least 6 characters long!");
                isValid = false;
            } else if (firstEmail.match(firstPattern) == null) {
                console.log("Email must consist at least one uppercase letter!");
                isValid = false;
            } else if (firstEmail.match(secondPattern) == null) {
                console.log("Email must consist at least one lowercase letter!");
                isValid = false;
            } else if (firstEmail.match(fourthPattern) == null) {
                console.log("Email must consist at least one digit!");
                isValid = false;
            } else if (firstEmail.match(thirdPattern).length > 1) {
                console.log("Email must consist only of letters, digits and @!");
                isValid = false;
            } else {
                isValid = true;
            }
        } else if (command == 'Upper') {
            let index = Number(changeOne);
            let string = firstEmail[Number(changeOne)].toUpperCase();
            let left = firstEmail.substring(0, index);
            let right = firstEmail.substring(index);
            firstEmail = left + string + right;

        } else if (command == 'Lower') {
            firstEmail = firstEmail[Number(changeOne)].toLowerCase;
            console.log(firstEmail);
        } else if (command == 'Insert') {
            let firstEmail = [firstEmail.slice(0, Number(changeOne)), changeTwo, firstEmail.slice(changeOne)].join('');
            console.log(firstEmail);
        } else if (command == 'Change') {
            let asci1 = firstEmail.charCodeAt(changeOne);
            let char = Number(asci1) + Number(changeTwo);
            let newChar = String.fromCharCode(char)

            firstEmail = firstEmail.split(changeOne).join(newChar);
            console.log(firstEmail);
        }
    }
}
email(["invalidEmai@l",
    "Validation",
    "Add 2 p",
    "Change i 7",
    "Change n -1",
    "Change * 6",
    "Upper 6",
    "Valid"])