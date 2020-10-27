function tank2(fuel, amount, discountcard) {
    let price = 0;
    switch (fuel) {
        case 'Diesel':
            if (discountcard === 'Yes') {
                price = 2.21 * amount;
            } else { price = 2.33 * amount }; break;
        case 'Gasoline':
            if (discountcard === 'Yes') {
                price = 2.04 * amount;
            } else { price = 2.22 * amount }; break;
        case 'Gas':
            if (discountcard === 'Yes') {
                price = 0.85 * amount;
            } else { price = 0.93 * amount }; break;
    }
    if (amount < 20) {
        console.log(`${price.toFixed(2)} lv.`)
    } else if (amount <= 25) {
        price *= 0.92;
        console.log(`${price.toFixed(2)} lv.`)
    } else {
        price *= 0.9;
        console.log(`${price.toFixed(2)} lv.`)
    }
}
tank2('Gas', 30, 'Yes')
tank2('Gasoline', 25, 'No')