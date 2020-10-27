function cruise(input) {
    let sea = input.shift();
    let cabin = input.shift();
    let nights = +input.shift();
    let price = 0.0;
    switch (sea) {
        case 'Mediterranean':
            if (cabin == 'standard cabin') {
                price = 27.5 * nights;
            } else if (cabin == 'cabin with balcony') {
                price = 30.2 * nights;
            } else { price = 40.5 * nights; }
            ; break;
        case 'Adriatic':
            if (cabin == 'standard cabin') {
                price = 22.99 * nights;
            } else if (cabin == 'cabin with balcony') {
                price = 25 * nights;
            } else { price = 34.99 * nights; }; break;
        case 'Aegean':
            if (cabin == 'standard cabin') {
                price = 23 * nights;
            } else if (cabin == 'cabin with balcony') {
                price = 26.6 * nights;
            } else { price = 39.8 * nights; }; break;
    }
    if (nights > 7) { price *= 0.75; }
    console.log(`Annie's holiday in the ${sea} sea costs ${(price * 4).toFixed(2)} lv.`)
}
cruise(['Aegean', 'standard cabin', 10])