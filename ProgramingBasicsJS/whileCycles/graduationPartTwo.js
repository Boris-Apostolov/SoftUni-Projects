function graduationPartTwo(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grade = 1;
    let avgGrade = 0;
    let excludedCounter = 0;
    let isExcluded = false;
    while (grade <= 12) {
        let yearGrade = Number(input[index]);
        index++;

        if (yearGrade >= 4.00) {
            grade++;
            avgGrade += yearGrade;
            continue;
        } else {
            excludedCounter++;
        }
        if (excludedCounter === 2) {
            console.log(`${name} has been excluded at ${grade} grade`)
            isExcluded = true;
            break;
        }
    }
    avgGrade = avgGrade / 12;
    if (isExcluded === false) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
}
graduationPartTwo(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])