function tank(fuel, amount) {
    switch (fuel) {
        case 'Diesel':
            if (amount >= 25) {
                console.log(`You have enough diesel.`);
            } else {console.log(`Fill your tank with diesel!`)}
            ;break;
        case 'Gasoline':
            if (amount >= 25) {
                console.log(`You have enough gasoline.`);
            } else {console.log(`Fill your tank with gasoline!`)}
            ;break;
        case 'Gas': 
        if (amount >= 25) {
            console.log(`You have enough gas.`);
        } else {console.log(`Fill your tank with gas!`)}
        ;break;
        default: console.log('Invalid fuel!');break;
    }
}
tank('Diesel', 10 )