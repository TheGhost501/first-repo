function city(cityName, cityAre, cityPopulation, cityCountry, cityPostCode) {
    let citytInfo = { name: cityName, area: cityAre, population: cityPopulation, country: cityCountry, postCode: cityPostCode };
    for (let key in citytInfo) {
        console.log(`${key} -> ${citytInfo[key]}`);
        
            
        }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");