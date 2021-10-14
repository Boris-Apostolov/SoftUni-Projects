function townsToJSON(arr) {
    const result = [];
    const splitted = arr[0].split('|');
    const town = splitted[1].trim();
    const Latitude = splitted[2].trim();
    const Longitude = splitted[3].trim();

    for (let i = 1; i < arr.length; i++) {
        const obj = {};
        const splittedEntry = arr[i].split('|');
        obj[town] = splittedEntry[1].trim();
        obj[Latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[Longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));

        result.push(obj)
    };
    return JSON.stringify(result)
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));