function timeToWalk(steps, stepMeters, speed) {
    let distance = steps * stepMeters;
    let meterPerSec = speed / 3.6;
    let time = distance / meterPerSec;
    let rest = Math.floor(distance / 500);

    let min = Math.floor(time / 60);
    let sec = Math.round(time - (min * 60));
    let hr = Math.floor(time / 3600);

    console.log((hr < 10 ? "0" : "") + hr + ":" + (min + rest < 10 ? "0" : "") + (min + rest) + ":" + (sec < 10 ? "0" : "") + sec);
}
timeToWalk(4000, 0.60, 5)
