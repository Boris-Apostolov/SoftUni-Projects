let myArr = [5, 8, -3, 11, 44, 55];
console.log('before', myArr);

let removed = myArr.splice(3, 0, 'yo');
console.log('after', myArr);
console.log(removed);
console.log('yo');

function mySlice(arr, start, end) {
    if (start == undefined) {
        start = 0;
    }
    if (end == undefined) {
        end = arr.length
    }
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIncludes(arr, value) {
    for (let element of arr) {
        if (element == value) {
            return true;
        }
    }
    return false;
}

function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}