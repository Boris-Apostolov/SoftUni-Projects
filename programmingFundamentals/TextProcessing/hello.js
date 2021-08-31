function hello() {

    let myString = 'Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.';

    let found = myString.indexOf('john@');

    while (found != -1) {
        myString = myString.replace('john@', 'john.doe');
        found = myString.indexOf('john@');
    }
    console.log(myString);
}
hello()
