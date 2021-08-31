function mapTask(nums) {
    let predicate = (x, i) => i % 2 == 1;
    let filtered = nums.filter(predicate);

    let operation = x => x * 2;
    let mapped = filtered.map(operation);
    mapped.reverse();
    console.log(mapped.join(' '));
}
mapTask([10, 15, 20, 25])