function tradeComissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let comission = 0;

    if (town === "Sofia") {
        if (0 <= sales && sales <= 500) {
            comission = sales * 0.05;
        } else if (500 < sales && sales <= 1000) {
            comission = sales * 0.07;
        } else if (1000 < sales && sales <= 10000) {
            comission = sales * 0.08;
        } else if (10000 < sales) {
            comission = sales * 0.12;
        }
    }
    if (town === "Plovdiv") {
        if (0 <= sales && sales <= 500) {
            comission = sales * 0.055;
        } else if (500 < sales && sales <= 1000) {
            comission = sales * 0.08;
        } else if (1000 < sales && sales <= 10000) {
            comission = sales * 0.12;
        } else if (10000 < sales) {
            comission = sales * 0.145;
        }
    }
    if (town === "Varna") {
        if (0 <= sales && sales <= 500) {
            comission = sales * 0.045;

        } else if (500 < sales && sales <= 1000) {
            comission = sales * 0.075;

        } else if (1000 < sales && sales <= 10000) {
            comission = sales * 0.10;

        } else if (10000 < sales) {
            comission = sales * 0.13;
        } else {
        }
    }
    if (town === "Sofia" || town === "Varna" || town === "Plovdiv" && sales > 0) {
        console.log(comission.toFixed(2));
    } else {
        console.log("error")
    }
}
tradeComissions(["Plovdiv", "1000"])