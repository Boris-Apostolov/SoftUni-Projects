function theImitationGame(input) {

    let message = input.shift();

    while (input[0] != 'Decode') {
        let tokens = input.shift().split('|');
        let command = tokens[0];

        if (command == 'Move') {
            let index = Number(tokens[1]);
            let left = message.substring(0, index);
            let right = message.substring(index);

            message = right + left;

        } else if (command == 'Insert') {
            let index = Number(tokens[1]);
            let left = message.substring(0, index);
            let right = message.substring(index);

            message = left + tokens[2] + right;

        } else if (command == 'ChangeAll') {
            message = message.split(tokens[1]).join(tokens[2])
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])


