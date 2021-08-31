function projectCreation(input) {

    let name = (input[0]);
    let projectCounts = (input[1]);
    let requiredHours = (input[1] * 3)

    console.log(`The architect ${name} will need ${requiredHours} hours to complete ${projectCounts} project/s.`);
}
projectCreation(["Sanya", "9"])

