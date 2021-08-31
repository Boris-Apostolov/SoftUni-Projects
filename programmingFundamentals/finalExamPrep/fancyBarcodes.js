function fancyBarcodes(input) {

    let pattern = /(@)(#+)([A-Z][a-z]+)(\d+|[A-Za-z]+)+(\1)(\2)/g;
    let num = input.shift();

    for (let i = 0; i < num; i++) {
        if (input[i].match(pattern)) {
            let product = input[i].match(/\d+/g);
            let productId = product;

            if (productId != null && product.length > 1) {
                for (let j = 0; j < productId.length; j++) {
                    productId + productId[j];
                }
                productId = (productId.join(''));
            } else if (productId == null) {
                productId = '00';
            }
            console.log(`Product group: ${productId}`);

        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])