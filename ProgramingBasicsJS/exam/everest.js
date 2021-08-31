function everest(input) {
    let index = 0;
    let command = input[index];
    index++;

    let goal = 8848;
    let days = 0;
    let metersClimbed = 5364;
    let goalReached = false;

    while (goal > metersClimbed) {
        while (command !== "END") {
            if (command === "Yes") {
                days++;
            }
            let n = Number(input[index]);
            index++;
            metersClimbed += n;
            index++;
        }
    }
    if (metersClimbed >= goal) {
        goalReached = true;
    }
    if (goalReached === true) {
        console.log(`Goal reached for ${days} days!`)
        break;
    } else {
        console.log(`Failed!"
            "${metersClimbed}`)
        break;
    }
}
everest(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"])



