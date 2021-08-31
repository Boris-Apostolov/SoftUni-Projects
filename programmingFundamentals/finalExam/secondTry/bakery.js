function bakery(input) {

    let buyers = {};
    let distributors = {}

    let command = input.shift('');
    let totalMoney = 0;

    while (command != 'End') {

        let commands = command.split(' ');
        let action = commands[0];
        let name = commands[1];
        let money = commands[2];

        if (action == 'Deliver') {
            if (!distributors.hasOwnProperty(name)) {
                distributors[name] = Number(money);
            } else {
                distributors[name] += Number(money);
            }
        } else if (action == 'Sell') {
            if (!buyers.hasOwnProperty(name)) {
                buyers[name] = Number(money);
            } else {
                buyers[name] += Number(money);
            }

        } else if (action == 'Return') {
            if (!distributors.hasOwnProperty(name)) {
                continue;
            } else {
                distributors[name] -= Number(money);
            }
        }
        command = input.shift();
    }
    let sortedBuyers = Object.entries(buyers).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    });
    let sortedDistributors = Object.entries(distributors).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    });

    for (let [name, money] of sortedBuyers) {
        console.log(`${name}: ${money}`);
        totalMoney += money
    }
    console.log('-----------');
    for (let [name, money] of sortedDistributors) {
        console.log(`${name}: ${money}`);
    }
    console.log('-----------');
    console.log(`Total Income: ${totalMoney}`);
}

bakery(['Deliver Micro 10000.00',
    'Sell Nick 500.00',
    'Sell Antony 260.50',
    'Deliver Micro 2000.50',
    'End'])