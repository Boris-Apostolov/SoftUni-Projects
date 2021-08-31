function firstLast(arr) {
    let k = arr.shift();

    let forward = [];
    for (let i = 0; i < k; i++) {
        forward.push(arr[i]);
    }

    let backwards = [];
    for (let i = arr.length - k; i < arr.length; i++) {
        backwards.push(arr[i]);
    }
    console.log(forward.join(' '));
    console.log(backwards.join(' '));
}
firstLast([2, 7, 8, 9]);