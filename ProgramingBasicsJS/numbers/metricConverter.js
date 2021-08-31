function metricConverter(input) {
    let numberToConvert = Number(input[0])
    let inputMetric = input[1];
    let outputMetric = input[2];

    if (inputMetric === 'mm') {
        numberToConvert = numberToConvert / 1000;
    } else if (inputMetric === 'cm') {
        numberToConvert = numberToConvert / 100;
    } else {
        numberToConvert = numberToConvert;
    }
    if (outputMetric === 'mm') {
        console.log((numberToConvert * 1000).toFixed(3));
    } else if (outputMetric === 'cm') {
        console.log((numberToConvert * 100).toFixed(3));
    } else if (outputMetric === 'm') {
        console.log(numberToConvert.toFixed(3));
    }
}
metricConverter(["150", "m", "cm"])