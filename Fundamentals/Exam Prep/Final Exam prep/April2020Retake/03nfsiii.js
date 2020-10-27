function garage(input) {
    let numberOfCars = Number(input.shift());
    let storage = {};
    for (let i = 0; i < numberOfCars; i++) {
        let car = input[i].split('|');
        storage[car[0]] = { mileage: Number(car[1]), fuel: Number(car[2]) };

    }

    let commandsArray = input.slice(numberOfCars, input.indexOf('Stop'));

    for (const line of commandsArray) {
        let [command, car, arg1, arg2] = line.split(' : ');
        let distance = Number(arg1);
        let neededFuel = Number(arg2);
        if (command === 'Drive') {
            let curFuel = Number(storage[car].fuel);
            let curMileage = Number(storage[car].mileage);
            if (curFuel >= neededFuel) {
                storage[car].fuel = curFuel - neededFuel;
                storage[car].mileage = curMileage + distance;
                console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            }
            if (storage[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete storage[car];
            }

        } else if (command === 'Refuel') {
            let refuel = distance;
            let carFuel = storage[car].fuel;
            if (carFuel + refuel > 75) {
                refuel = 75 - carFuel;
            }
            storage[car].fuel += refuel;
            console.log(`${car} refueled with ${refuel} liters`);
        } else if (command === 'Revert') {
            let decrease = distance;
            let currMilleage = storage[car].mileage;
            if (currMilleage - decrease < 10000) {
                storage[car].mileage = 10000;
            } else {
                storage[car].mileage -= decrease;
                console.log(`${car} mileage decreased by ${decrease} kilometers`);
            }
        }
    }

    let sorted = Object.keys(storage).sort((a, b) => {
        if (storage[a].mileage === storage[b].mileage) {
            return a.localeCompare(b);
        } else {
            return storage[b].mileage - storage[a].mileage
        }
    })
        sorted.forEach(car => {
            console.log(`${car} -> Mileage: ${storage[car].mileage} kms, Fuel in the tank: ${storage[car].fuel} lt.`);
        })
}
garage([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)