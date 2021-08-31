function getCount(input) {
    let num = Number(input[0]);
    let searchedNum = Number(input[1]);
    let count = 0;

    while (num > 0) {
        let leftover = num % 2;
        if (leftover == searchedNum) {
            count++;
        }
        num = parseInt(num / 2);
    }
    console.log(count);
}
getCount([10, 0])