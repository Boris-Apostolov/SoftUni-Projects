function firstMap() {
    let person = new Map();
    person.set('name', 'Ivo');
    person.set('age', 20);

    let personName = person.get('name');

    if (person.has('car')) {
        console.log('GOOD JOB');
    } else {
        person.set('car', 'red');
    }
    console.log(person);
}
firstMap();