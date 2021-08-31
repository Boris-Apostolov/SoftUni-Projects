function trekkingMania(input) {
    let index = 0;
    let totalGroup = Number(input[index]);
    index++;
    let totalPeopleCount = 0;

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;

    for (let i = 0; i < totalGroup; i++) {
        let currentGroup = Number(input[index]);
        index++;
        totalPeopleCount += currentGroup;

        if (currentGroup <= 5) {
            n1 += currentGroup
        } else if (currentGroup >= 6 && currentGroup <= 12) {
            n2 += currentGroup
        } else if (currentGroup >= 13 && currentGroup <= 25) {
            n3 += currentGroup
        } else if (currentGroup >= 26 && currentGroup <= 40) {
            n4 += currentGroup
        } else {
            n5 += currentGroup
        }
    }
    console.log(`${(n1 / totalPeopleCount * 100).toFixed(2)}%`)
    console.log(`${(n2 / totalPeopleCount * 100).toFixed(2)}%`)
    console.log(`${(n3 / totalPeopleCount * 100).toFixed(2)}%`)
    console.log(`${(n4 / totalPeopleCount * 100).toFixed(2)}%`)
    console.log(`${(n5 / totalPeopleCount * 100).toFixed(2)}%`)
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])