function arrayRotation(list, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = list[0];

        for (let j = 0; j < list.length - 1; j++) {
            list[j] = list[j + 1];
        }
        let lastIndex = list.length - 1;
        list[lastIndex] = firstElement
    }
    console.log(list.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)