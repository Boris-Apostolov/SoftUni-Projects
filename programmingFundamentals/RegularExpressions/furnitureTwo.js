function divisibleByThree(input) {
    let index = 0;
    const boughtFurniture = [];
    let rgx = new RegExp('>{2}([A-z]+)<{2}([0-9.]+)!([0-9]+)');
    let sum = 0;

    while (true) {
        if (input[index] === "Purchase") break;

        let match = input[index].match(rgx);

        if (match !== null && match !== undefined) {
            let townName = match[1];
            let price = Number(match[2]);
            let quantity = Number(match[3]);

            boughtFurniture.push(townName);
            sum += price * quantity;
        }
        index++;
    }

    console.log('Bought furniture:');

    if (boughtFurniture.length > 0) {
        console.log(boughtFurniture.join('\n'));
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

} divisibleByThree([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"])