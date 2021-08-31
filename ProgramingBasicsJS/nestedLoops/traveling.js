function traveling(input) {
    let index = 0;
    let command = input[index++];
    let budget = Number(input[index++]);

    while (command !== "End") {
        let totalMoney = 0;
        while (totalMoney < budget) {
            let moneyToAdd = Number(input[index++]);
            totalMoney += moneyToAdd;
        }
        console.log(`Going to ${command}!`);
        command = input[index++];
        budget = Number(input[index++]);
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);