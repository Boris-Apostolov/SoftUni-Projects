function nationalCourt(arr) {

    let answersPerHour = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let peopleCount = Number(arr[3]);
    let hours = 0;

    for (let i = 0; i < peopleCount; i += answersPerHour) {
        hours++;
        if (hours % 4 == 0) {
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
nationalCourt(['5', '6', '4', '20'])