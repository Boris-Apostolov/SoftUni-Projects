function loadingBar(num) {
    let str = '';
    let newNum = (num / 10);
    for (i = 0; i < 10; i++) {
        if (i < newNum) {
            str += '%';
        } else {
            str += '.'
        }
    }
    if (num != 100) {
        console.log(`${num}% [${str}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`${num}% Complete!`);
        console.log(`[${str}]`);
    }
}
loadingBar(21)