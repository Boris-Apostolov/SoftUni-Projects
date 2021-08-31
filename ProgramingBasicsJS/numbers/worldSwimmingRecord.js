function swimming(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForMeter = Number(input[2]);
    let distanceSeconds = distance * secondsForMeter;
    let delay = (distance / 15) * 12.5;
    let totalTime = distanceSeconds + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
swimming(["55555.67",
    "3017",
    "5.03"])

