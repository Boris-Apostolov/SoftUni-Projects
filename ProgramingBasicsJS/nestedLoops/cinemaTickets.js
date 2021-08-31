function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalTicket = 0;
    let countStudentTicket = 0;
    let countStandardTicket = 0;
    let countKidTicket = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let type = input[index];
        index++;
        let counterTickets = 0;
        while (type !== "End") {
            counterTickets++;
            switch (type) {
                case "student": countStudentTicket++; break;
                case "standard": countStandardTicket++; break;
                case "kid": countKidTicket++; break;
            }
            if (counterTickets >= freeSpace) {
                break;
            }
            type = input[index];
            index++;
        }
        totalTicket += counterTickets
        let result = counterTickets / freeSpace * 100;
        console.log(`${name} - ${result.toFixed(2)}% full.`)
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicket}`);
    let totalStudentTicket = countStudentTicket / totalTicket * 100;
    console.log(`${totalStudentTicket.toFixed(2)}% student tickets.`);
    let totalStandardTicket = countStandardTicket / totalTicket * 100;
    console.log(`${totalStandardTicket.toFixed(2)}% standard tickets.`);
    let totalKidTicket = countKidTicket / totalTicket * 100;
    console.log(`${totalKidTicket.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])