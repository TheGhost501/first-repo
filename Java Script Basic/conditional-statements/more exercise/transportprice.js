function transport(km,time) {
    let price = 0;
    if (km < 20 && time === 'day') {
        price = (70 +(79 * km)) / 100;
    } else if (km < 20 && time === 'night') {
        price = (70 +(90 * km)) / 100;
    } else if (km < 100) {
        price = km * 0.09;
    } else {price = km * 0.06;}
    console.log(price.toFixed(2))
}
transport(5, 'day')
transport(7, 'night')
transport(25, 'day')
transport(180, 'night')