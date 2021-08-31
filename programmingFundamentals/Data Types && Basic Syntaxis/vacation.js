function vacation(number, type, day) {
    let price = 0;

    if (type === "Business" && number >= 100) {
        number -= 10;
    }
    if (type === "Students" && day === "Friday") {
        price = 8.45 * number;
    } else if (type === "Business" && day === "Friday") {
        price = 10.90 * number;
    } else if (type === "Regular" && day === "Friday") {
        price = 15 * number;
    } else if (type === "Students" && day === "Saturday") {
        price = 9.80 * number;
    } else if (type === "Business" && day === "Saturday") {
        price = 15.60 * number;
    } else if (type === "Regular" && day === "Saturday") {
        price = 20 * number;
    } else if (type === "Students" && day === "Sunday") {
        price = 10.46 * number;
    } else if (type === "Business" && day === "Sunday") {
        price = 16 * number;
    } else if (type === "Regular" && day === "Sunday") {
        price = 22.50 * number;
    }
    if (type === "Students" && number >= 30) {
        price = 0.85 * price;
    } else if (type === "Regular" && number >= 10 && number <= 20) {
        price = 0.95 * price
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}
vacation(30, "Students", "Sunday");