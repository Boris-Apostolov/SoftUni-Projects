function printCity(city) {
    console.log(`name -> ${city.name}`);
    console.log(`area -> ${city.area}`);
    console.log(`population -> ${city.population}`);
    console.log(`country -> ${city.country}`);
    console.log(`postcode -> ${city.postCode}`);

}

let myCity = {
    name: 'Varna',
    area: 238,
    population: 336505,
    country: 'Bulgaria',
    postCode: '9000'

}
printCity(myCity);