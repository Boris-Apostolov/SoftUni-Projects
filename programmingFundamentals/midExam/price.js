function prices(list, start, price) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = start + 1; i < list.length; i++) {
        sumRight += list[i];
    }
    for (let j = 0; j < start; j++) {
        sumLeft += list[j];
    }
    if (price == "cheap") {
        if (sumRight < start && sumRight < sumLeft) {
            console.log(`Right - ${sumRight}`);
        } else if (sumLeft < start && sumRight > sumLeft) {
            console.log(`Left - ${sumLeft}`);
        } else if (sumRight = sumLeft) {
            console.log(`Left - ${sumLeft}`);
        }
    }
    if (price == "expensive") {
        if (sumLeft >= start && sumLeft > sumRight) {
            console.log(`Left - ${sumLeft}`);
        } else if (sumRight >= start && sumRight > sumLeft) {
            console.log(`Right - ${sumRight}`);
        } else if (sumRight = sumLeft) {
            console.log(`Left - ${sumLeft}`);
        }
    }
}
prices([1, 5, 1],
    1,
    "cheap")