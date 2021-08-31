function pirates(input) {

    let citiesMap = {};
    let command = input.shift();
    while (command != 'Sail') {

        let townCommands = command.split('||');
        let town = townCommands[0];
        let population = Number(townCommands[1]);
        let gold = Number(townCommands[2]);

        if (!citiesMap.hasOwnProperty(town)) {// if there is not such city in the map, add it
            citiesMap[town] = { population, gold };
        } else {// if there is, update population and gold
            citiesMap[town].population += population;
            citiesMap[town].gold += gold;
        }
        command = input.shift();
    }
    command = input.shift();

    while (command !== 'End') {
        let townCommands = command.split('=>');

        if (townCommands[0] === 'Plunder') {// plunder the city
            let town = townCommands[1];
            let population = Number(townCommands[2]);
            let gold = Number(townCommands[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`)

            citiesMap[town].population -= population; //remove population from the city
            citiesMap[town].gold -= gold;// remove gold from the city

            if (citiesMap[town].population <= 0 || citiesMap[town].gold <= 0) {// if there is no population or gold destroy the city
                console.log(`${town} has been wiped off the map!`);
                delete citiesMap[town];
            }
        } else {
            let town = townCommands[1];
            let gold = Number(townCommands[2]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citiesMap[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesMap[town].gold} gold.`)
            }
        }
        command = input.shift(); //
    }
    let workArr = Object.entries(citiesMap)
    let sorted = workArr.sort((a, b) => {
        if (a[1].gold == b[1].gold) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].gold - a[1].gold;
        }
    })
    if (sorted.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    } else {
    }
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`)
    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`);
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Santo Domingo||240000||630",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])