function oddOccurrences(string) {
    let occurrences = {};
    let listOfString = string.split(' ');

    for (let string of listOfString) {
        let stringToLower = string.toLowerCase();
        if (!Object.keys(occurrences).includes(stringToLower)) {
            occurrences[stringToLower] = 0;
        }
        occurrences[stringToLower] += 1;
    }
    let resultString = '';

    for (let [key, value] of Object.entries(occurrences)) {

        if (value % 2 !== 0) {
            resultString += `${key} `;

        }
    }
    console.log(resultString);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')