function catalogue(products) {
    let newCatalogue = {}

    for (let line of products) {
        let [product, price] = line.split(' : ');
        newCatalogue[product] = price;
    }
    let sortedCatalogue = Object.entries(newCatalogue)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let result = '';
    let currentName = '';
    for (let line of sortedCatalogue) {
        let name = line[0];
        let price = line[1];
        let firstChar = name.charAt(0);

        if (firstChar !== currentName[0]) {
            result += `${firstChar}\n`;
        }
        currentName = name;
        result += `  ${name}: ${price}\n`;
    }
    return result;
}
console.log(catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));




