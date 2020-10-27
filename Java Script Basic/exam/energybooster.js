function gels(input) {
    let fruit = input.shift();
    let set = input.shift();
    let totalsets = +input.shift();
    let price = 0;
    switch (fruit) {
        case 'Watermelon':
            if (set === 'small') { price = totalsets * (56 * 2); }
            else { price = totalsets * (28.70 * 5); }; break;
        case 'Mango':
            if (set === 'small') { price = totalsets * (36.66 * 2); }
            else { price = totalsets * (19.60 * 5); }; break;
        case 'Pineapple':
            if (set === 'small') { price = totalsets * (42.10 * 2); }
            else { price = totalsets * (24.80 * 5); }; break;
        case 'Raspberry':
            if (set === 'small') { price = totalsets * (20 * 2); }
            else { price = totalsets * (15.20 * 5); }; break;
    }if (price > 1000) {price *= 0.5;}
     else if (price >= 400 && price <= 1000) {price *= 0.85;}
     else {price}
     console.log(`${price.toFixed(2)} lv.`)
}
gels(['Watermelon',
    'big',
    4
    ])