let myArr = [5, 8, -3, 11, 44, 13, -8];

//let removed = myArr.splice(3, 2, 'yo');
let result = mySplice(myArr, 3, 0, ['a', 'b', 'c', 'd']);
console.log('after', result);

function mySplice(arr, start, count, insert) {
    let left = arr.slice(0, start);
    let removed = arr.slice(start, start + count);
    let right = arr.slice(start + count);

    for (let element of insert) {
        left.push(element);
    }
    for (let element of right) {
        left.push(element);
    }
    return left;
}