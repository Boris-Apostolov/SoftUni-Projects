let myArr = [5, 8, -3, 11, 44, 13, -8];

let nums = myFilter(myArr, x => x > 4);
console.log(nums);

function myFilter(arr, predicate) {
    let result = [];

    for (let element of arr) {
        if (predicate(element)) {
            result.push(element)
        }
    }
    return result;
}