function demo(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let targetDays = Number(input[2]);
    let neededHours = pages / pagesPerHour;
    let finalResult = neededHours / targetDays

    console.log(finalResult);
}
demo(["212",
    "20",
    "2"])
