function fishTank(input) {

    let volume = (input[0]) * (input[1]) * (input[2])
    let liters = volume * 0.001
    let percent = (input[3]) * 0.01
    let litersNeeded = liters * (1 - percent)

    console.log(litersNeeded)
}

fishTank(["85", "75", "47", "17"])