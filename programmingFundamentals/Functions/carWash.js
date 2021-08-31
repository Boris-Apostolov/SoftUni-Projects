function carWash(list) {
    let value = 0;

    for (let i = 0; i < list.length; i++) {
        let method = list[i];

        if (method === 'soap') {
            value += 10;
        } else if (method === 'water') {
            value *= 1.20;
        } else if (method === 'vacuum cleaner') {
            value *= 1.25;
        } else if (method === 'mud') {
            value *= 0.90;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])