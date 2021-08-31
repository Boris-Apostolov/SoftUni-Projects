function employees(list) {
    for (let employee of list) {
        let employeeData = {
            name: employee,
            personalNumber: employee.length
        };
        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`);
    }
};
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])