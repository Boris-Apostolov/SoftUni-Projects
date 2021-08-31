function books(list) {
    let initialList = list.shift().split(" | ");
    for (let i = 0; i != list.length; i++) {
        let command = list[i].split(" ");

        if (command[0] === "Stop!") {
            break;
        }
        if (command[0] === "Join") {
            if (!initialList.includes(command[1])) {
                initialList.push(command[1]);
            }

        } else if (command[0] === "Drop") {
            if (initialList.includes(command[1])) {
                let index = initialList.indexOf(command[1]);
                initialList.splice(index, 1);
            }
        } else if (command[0] === "Replace") {
            if (initialList.includes(command[1])) {
                let index = initialList.indexOf(command[1]);
                initialList.splice(index + 1, 0, command[2]);
                initialList.splice(index, 1);
            }
        }
    }
    console.log(initialList.join(" "));
}
books(["Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Stop!"
])