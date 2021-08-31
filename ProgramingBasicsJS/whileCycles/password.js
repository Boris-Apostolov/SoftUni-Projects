function password(input) {
    let index = 0;
    let name = input[index];
    index++;
    let password = input[index];
    index++;
    let temPassword = input[index];
    index++;

    while (password !== temPassword) {
        console.log("Wrong password");  // mahni toza za judge
        temPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])