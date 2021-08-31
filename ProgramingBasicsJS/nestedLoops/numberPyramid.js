function numberPyramid(input) {
    let n = Number(input[0]);
    let count = 0;
    let flag = false;

    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            count++;
            str += count + " ";
            if (count === n) {
                flag = true;
                break;
            }
        }
        console.log(str);
        if (flag) {
            break;
        }
    }
}
numberPyramid(["1"])