function onTimeForTheExam(input) {

    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArrive = Number(input[2]);
    let minuteOfArrive = Number(input[3]);
    let examTotalMinute = hourOfExam * 60 + minuteOfExam;
    let arriveTotalMinute = hourOfArrive * 60 + minuteOfArrive;

    if (arriveTotalMinute > examTotalMinute) {
        console.log("Late");
    } else if ((examTotalMinute - arriveTotalMinute) <= 30) {
        console.log("On Time");
    } else {
        console.log("Early");
    }

    result = Math.abs(examTotalMinute - arriveTotalMinute);
    if ((examTotalMinute - arriveTotalMinute) > 0) {
        if (result < 60) {
            console.log(`${result} minutes before the start`);
        } else {
            if (result % 60 < 10) {
                console.log(`${parseInt(result / 60)}:0${(result % 60)} hours before the start`);
            } else {
                console.log(`${parseInt(result / 60)}:${(result % 60)} hours before the start`);
            }
        }
    } else if ((arriveTotalMinute - examTotalMinute) > 0) {
        if (result < 60) {
            console.log(`${result} minutes after the start`);
        } else {
            if (result % 60 < 10) {
                console.log(`${parseInt(result / 60)}:0${(result % 60)} hours after the start`);
            } else {
                console.log(`${parseInt(result / 60)}:${(result % 60)} hours after the start`);
            }
        }
    }
}
onTimeForTheExam(["11", "30", "8", "12"]);