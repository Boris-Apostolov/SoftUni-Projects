function basketballTournaments(input) {
    let index = 0;
    let command = input[index];
    index++;
    let winCount = 0;
    let loseCount = 0;
    let totalGame = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        let n = Number(input[index]);
        index++;
        totalGame += n;

        for (let i = 1; i <= n; i++) {
            let teamA = Number(input[index]);
            index++;
            let teamB = Number(input[index]);
            index++;

            if (teamA > teamB) {
                winCount++;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${teamA - teamB} points.`)
            } else {
                loseCount++;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${teamB - teamA} points.`)
            }
        }
        command = input[index];
        index++;
    }
    console.log(`${(winCount / totalGame * 100).toFixed(2)}% matches win`);
    console.log(`${(loseCount / totalGame * 100).toFixed(2)}% matches lost`);
}
basketballTournaments(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])