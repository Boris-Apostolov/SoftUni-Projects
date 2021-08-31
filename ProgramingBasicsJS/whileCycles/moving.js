function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let totalFreeCubic = w * l * h;

    let command = input[index];
    index++;

    let isfreeSpace = true;

    while (command !== "Done") {
        let box = Number(command);
        totalFreeCubic -= box;
        if (totalFreeCubic < 0) {
            isfreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(totalFreeCubic)} Cubic meters more.`)
            break;
        }
        command = input[index];
        index++;
    }
    if (isfreeSpace) {

        console.log(`${totalFreeCubic} Cubic meters left.`)
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])