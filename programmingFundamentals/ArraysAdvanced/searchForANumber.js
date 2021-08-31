function searchForANumber(arr1, arr2) {
    let removed = arr1.splice(0, arr2[0])
    let newRemoved = removed.splice(0, arr2[1]);
    let specialNum = arr2[2];
    let specialCount = 0;

    for (let i = 0; i < removed.length; i++) {
        if (removed[i] == specialNum) {
            specialCount++
        }
    }
    console.log(`Number ${specialNum} occurs ${specialCount} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])