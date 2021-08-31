function trainTheTrainers(input) {
    let n = Number(input[0]);
    let index = 1;
    let allGradeCount = 0;
    let allGradesum = 0;

    while (input[index] != "Finish") {
        let presentation = input[index];
        let gradesSum = 0;
        for (let i = 1; i <= n; i++) {
            let grade = Number(input[index + i]);
            gradesSum += grade;
            allGradesum += grade;
            allGradeCount++;
        }
        console.log(`${presentation} - ${(gradesSum / n).toFixed(2)}.`);
        index += n + 1;
    }
    console.log(`Student's final assessment is ${(allGradesum / allGradeCount).toFixed(2)}.`)
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])