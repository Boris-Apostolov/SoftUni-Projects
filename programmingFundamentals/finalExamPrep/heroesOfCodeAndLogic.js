function heroes(input) {
    let n = input.shift()
    let characters = {};

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        characters[name] = {
            hp,
            mp,
        };
    }
    while (input[0] != 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let required = tokens[2];

        if (command == 'CastSpell') {
            if (Number(characters[name].mp) >= Number(required)) {
                let newMp = Number(characters[name].mp) - Number(required);
                characters[name].mp = newMp;
                console.log(`${name} has successfully cast ${tokens[3]} and now has ${characters[name].mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${tokens[3]}!`);
            }
        } else if (command == 'TakeDamage') {
            let hpLeft = Number(characters[name].hp) - Number(required);
            if (hpLeft >= 0) {
                characters[name].hp = hpLeft;
                console.log(`${name} was hit for ${required} HP by ${tokens[3]} and now has ${hpLeft} HP left!`);
            } else {
                console.log(`${name} has been killed by ${tokens[3]}!`);
                delete characters[name];
            }
        } else if (command == 'Recharge') {
            let cap = 200;
            let newMp = Number(characters[name].mp) + Number(required);

            if (newMp >= cap) {
                console.log(`${name} recharged for ${cap - Number(characters[name].mp)} MP!`);
                characters[name].mp = 200;
            } else {
                characters[name].mp = newMp;
                console.log(`${name} recharged for ${required} MP!`);
            }

        } else if (command == 'Heal') {
            let cap = 100;
            let newHp = Number(characters[name].hp) + Number(required)
            if (newHp >= cap) {
                console.log(`${name} healed for ${cap - Number(characters[name].hp)} HP!`);
                characters[name].hp = 100;
            } else {
                characters[name].hp = newHp;

                console.log(`${name} healed for ${required} HP!`);
            }
        }
    }
    let sorted = Object.entries(characters).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        let hpA = a[1].hp;
        let hpB = b[1].hp;

        return hpB - hpA || nameA.localeCompare(nameB);
    });
    for (let [name, hp] of sorted) {
        console.log(`${name}
  HP: ${hp.hp}
  MP: ${hp.mp}`);
    }
}
heroes(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
