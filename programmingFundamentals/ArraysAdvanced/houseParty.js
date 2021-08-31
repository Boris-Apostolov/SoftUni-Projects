function houseParty(arr) {
    let guestList = [];
    arr.forEach(token => {
        let a = token.split(` `);
        let name = a[0];
        if (token.includes(`not`)) {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    });
    guestList.forEach(element => {
        console.log(element);
    });
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])