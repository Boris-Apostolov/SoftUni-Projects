function pcStore(input) {
    let processorPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let processorLv = processorPrice * 1.57;
    let videocardLv = videoCardPrice * 1.57;
    let ramLv = ramPrice * 1.57;

    let allRam = ramLv * ramCount;
    let processorFinalPrice = processorLv - (discount * processorLv);
    let videoCardFinalPrice = videocardLv - (discount * videocardLv);
    let money = allRam + processorFinalPrice + videoCardFinalPrice;
    console.log(`Money needed - ${money.toFixed(2)} leva.`);
}
pcStore(["1200",
    "850",
    "120",
    "4",
    "0.1"])