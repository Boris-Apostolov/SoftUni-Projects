function giftsFromSanta(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let str = "";

    for (let i = m; i >= n; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == s) {
                break;
            } else {
                str += i + " ";
            }
        }
    }
    console.log(str);
}
giftsFromSanta(["1",
    "30",
    "15"])