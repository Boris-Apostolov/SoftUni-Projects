function substitute(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let counter = 0;

    for (let i = K; i <= 8; i++) {
        for (let j = 9; j >= L; j--) {
            for (let o = M; o <= 8; o++) {
                for (let p = 9; p >= N; p--) {
                    if (counter >= 6) {
                        break;
                    }
                    if (i % 2 === 0 && o % 2 === 0 && j % 2 === 1 && p % 2 === 1 && i + "" + j === o + "" + p) {
                        console.log("Cannot change the same player.");
                    } else if (i % 2 === 0 && o % 2 === 0) {
                        if (j % 2 === 1 && p % 2 === 1) {
                            console.log(`${i}${j} - ${o}${p}`);
                            counter++;
                        }
                    }
                }
            }
        }
    }
}
substitute(["7", "6", "8", "5"]);
substitute(["6", "7", "5", "6"]);