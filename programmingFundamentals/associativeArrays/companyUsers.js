function companyUsers(input) {
    let companies = {}

    for (let line of input) {
        let [company, workerId] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(workerId);
    }

    let sortedCompanies = Object.entries(companies);
    sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));

    for (let elem of sortedCompanies) {
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])