function toJson(name, lastName, hairColor) {
    let result = {
        name,
        lastName,
        hairColor,
    };
    console.log(JSON.stringify(result));
}
toJson('George', 'Jones', 'Brown');