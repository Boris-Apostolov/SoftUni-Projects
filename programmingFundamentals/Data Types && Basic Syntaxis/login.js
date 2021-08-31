function login(list) {
    let username = list.shift();
    let passwordList = username.split('');
    let PasswordListReversed = passwordList.reverse();
    let password = PasswordListReversed.join('');

    let counter = 0;

    while (true) {
        let enteredPassword = list.shift();
        counter++;

        if (enteredPassword === password) {
            console.log(`User ${username} logged in.`)
            break;
        }
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.")
        }
    }
}
// login(['Acer','login','go','let me in','recA'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])