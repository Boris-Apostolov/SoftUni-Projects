function deepCopy() {
    let obj1 = {
        name: 'Ivo',
        age: 28,
    }

    let obj2 = JSON.parse(JSON.stringify(obj1));

    console.log(obj2);
}
deepCopy();