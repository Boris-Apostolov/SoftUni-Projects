function moon(input) {
    let speed = Number(input[0]);
    let litersPer100 = Number(input[1]);
    let distance = 768800;

    let timeTraveled = Math.ceil(distance / speed);
    let allTime = timeTraveled + 3;
    let fuel = (litersPer100 * distance) / 100;
    console.log(allTime);
    console.log(fuel)
}
moon(["10000",
    "5"])