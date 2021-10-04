function sortAnArrayBy2Criteria(arr) {
    const result = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;

        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    });
    console.log(result.join('\n'));
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma'])