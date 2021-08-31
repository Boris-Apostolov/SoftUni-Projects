function storeProvision(stock, products) {
    let store = [];

    for (let i = 0; i < stock.length - 1; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);

        let productObject = {
            product,
            quantity,
        };
        store.push(productObject);
    }
    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.product === product);

        if (indexOfProduct === -1) {
            store.push(productObject);
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }
    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])