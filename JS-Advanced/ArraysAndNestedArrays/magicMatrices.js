function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumOne = matrix[i].reduce((a, b) => a + b, 0);
        let sumTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumThree = 0;
        let sumFour = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumThree += matrix[i][j];
            sumFour += matrix[i + 1][j];
        }

        if (sumOne !== sumTwo || sumThree !== sumFour) {
            return false;
        }
    }

    return true;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]))