
let myObject = { name: 'Peter', age: 20, hairColor: 'Black' }
console.log(myObject.name);


function getValue(propName) {
    console.log(myObject[propName]);
}
getValue('age');
getValue('name')