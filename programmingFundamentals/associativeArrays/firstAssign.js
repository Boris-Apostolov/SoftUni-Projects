function firstAssign() {
    let obj1 = {
        name: 'Ivo',
        age: 28,
    }
    let obj2 = Object.assign({}, obj1);

    obj1.age = 50

    console.log(obj2);
}
firstAssign();