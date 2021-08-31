function rounding(n, p) {
    if (p > 15) {
        p = 15;
    }
    let rounded = n.toFixed(p);
    let withoutZeros = parseFloat(rounded);
    console.log(withoutZeros);
}
rounding(10.5, 3);