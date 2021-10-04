function extractIncreasingSubsetFromArray(arr) {
    let biggest = Number.MIN_SAFE_INTEGER
    const result = arr.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
        return false
    })
    return result;
}
console.log(extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))