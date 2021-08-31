function scholarship(input) {
    let income = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minimumIncome = Number(input[2]);
    let socialScholarship = 0;
    let excellentGradeScholarship = 0;

    if (income < minimumIncome && averageGrade > 4.5) {
        socialScholarship = minimumIncome * 0.35;
    }
    if (averageGrade >= 5.5) {
        excellentGradeScholarship = averageGrade * 25;
    }
    if (socialScholarship == 0 && excellentGradeScholarship == 0) {
        console.log("You cannot get a scholarship!");
    } else if (socialScholarship > excellentGradeScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentGradeScholarship)} BGN`);
    }
}
scholarship(["300.00",
    "5.65",
    "420.00"])



