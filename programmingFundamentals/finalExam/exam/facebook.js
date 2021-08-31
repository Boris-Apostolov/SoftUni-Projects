function facebook(input) {

    let followers = {};
    let command = input.shift('');
    let count = 0;

    while (command != 'Log out') {
        let facebookCommands = command.split(': ');
        let action = facebookCommands[0];
        let name = facebookCommands[1];
        let likes = facebookCommands[2];

        if (action == 'New follower') {
            if (!followers.hasOwnProperty(name)) {
                followers[name] = 0;
                count++;
            }
        } else if (action == 'Like') {
            if (!followers.hasOwnProperty(name)) {
                followers[name] = Number(likes);
                count++;
            } else {
                followers[name] += Number(likes);
            }
        } else if (action == 'Comment') {
            if (!followers.hasOwnProperty(name)) {
                followers[name] = 1;
                count++;
            } else {
                followers[name]++;
            }

        } else if (action == 'Blocked') {
            if (!followers.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                delete followers[name];
            }
        }
        command = input.shift();
    }
    let sorted = Object.entries(followers).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        let likeA = a[1];
        let likeB = b[1];

        return likeB - likeA || nameA.localeCompare(nameB);
    });
    console.log(`"${sorted.length} followers"`);
    for (let [name, likes] of sorted) {
        console.log(`${name}: ${likes}`);
    }
}
facebook(["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])