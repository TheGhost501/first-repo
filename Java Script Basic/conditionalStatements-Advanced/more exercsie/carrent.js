function rentAcar(type1, season) {
    let budget = Number(type1);
    let carClass = '';
    let carType = '';
    let carPrice = 0;
    if (budget <= 100) {
        carClass = 'Economy class';
        switch (season) {
            case 'Summer':
                carType = 'Cabrio';
                carPrice = budget * 0.35;
                break;
            case 'Winter':
                carType = 'Jeep';
                carPrice = budget * 0.65;
                break;
        }
    } else if (budget <= 500) {
        carClass = 'Compact class';
        switch (season) {
            case 'Summer':
                carType = 'Cabrio';
                carPrice = budget * 0.45;
                break;
            case 'Winter':
                carType = 'Jeep';
                carPrice = budget * 0.80;
                break;

        }
    } else {
        carClass = 'Luxury class';
        carType = 'Jeep';
        carPrice = budget * 0.90;

    }
    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
    
}
rentAcar(450, 'Summer')