function shoppingList(list) {
    let initialList = list.shift().split('!');
    for (let i = 0; i < list.length - 1; i++) {
        let command = list[i].split(' ');
        if (command[0] === 'Urgent') {
            if (!initialList.includes(command[1])) {
                initialList.unshift(command[1]);
            }
        } else if (command[0] === 'Unnecessary') {
            if (initialList.includes(command[1])) {
                let index = initialList.indexOf(command[1]);
                initialList.splice(index, 1);
            }
        } else if (command[0] === 'Correct') {
            if (initialList.includes(command[1])) {
                let index = initialList.indexOf(command[1]);
                initialList.splice(index + 1, 0, command[2]);
                initialList.splice(index, 1);
            }
        } else if (command[0] === 'Rearrange') {
            if (initialList.includes(command[1])) {
                let index = initialList.indexOf(command[1]);
                let removed = initialList.splice(index, 1);
                initialList.push(removed);
            }
        }
    }
    console.log(initialList.join(', '));
}
shoppingList(["Milk!Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])