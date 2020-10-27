function race(junior, senior, racetype) {
    let tickets = 0;
    let racer1 = Number(junior);
    let racer2 = Number(senior);
    let racers = racer1 + racer2;
    switch (racetype) {
        case 'trail':
            tickets = (racer1 * 5.5) + (racer2 * 7);
            break;
        case 'cross-country':
            if (racers < 50) {
                tickets = (racer1 * 8) + (racer2 * 9.5);
            }
            else { tickets = (racer1 * 6) + (racer2 * 7.125);
             }
            ; break;
        case 'downhill':
            tickets = (racer1 * 12.25) + (racer2 * 13.75); break;
        case 'road':
            tickets = (racer1 * 20) + (racer2 * 21.5); break;
    }
    let total = tickets * 0.95;

    console.log(total.toFixed(2))
}
race(10, 20, 'trail')
race(20, 25, 'cross-country')
race(10, 10, 'downhill')