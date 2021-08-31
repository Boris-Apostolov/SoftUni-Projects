let myArr = [5, 8, -3, 11, 44, 13, -8];

let myFunc = x => x + 1;

let nums = myMap(myArr, myFunc);
console.log(nums);

function myMap(arr, operation) {
    let result = [];

    for (let element of arr) {
        result.push(operation(element));
    }
    return result;
}