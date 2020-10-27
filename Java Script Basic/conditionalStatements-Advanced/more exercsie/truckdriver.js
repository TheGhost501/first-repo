function driver(season, km) {
    let kilometer = Number(km);
    let money = 0;
    if (kilometer <= 5000) {
        if (season == 'Spring' || season == 'Autumn') {
            money = (kilometer * 4) * 0.75;
        } else if (season == 'Summer') {
            money = (kilometer * 4) * 0.9;
        } else {
            money = (kilometer * 4) * 1.05;
        }
    } else if (kilometer <= 10000) {
        if (season == 'Spring' || season == 'Autumn') {
            money = (kilometer * 4) * 0.95;
        } else if (season == 'Summer') {
            money = (kilometer * 4) * 1.1;
        } else {
            money = (kilometer * 4) * 1.25;
        }
    } else if (kilometer <= 20000) {
        money = (kilometer * 4) * 1.45;
    }
    console.log((money * 0.9).toFixed(2))
}
driver('Summer', 3455 )