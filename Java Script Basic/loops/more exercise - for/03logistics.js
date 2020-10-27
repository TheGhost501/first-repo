function logistics(input) {
    let ammount = Number(input.shift());
    let cargo = Number(input.shift());
    let price = 0;
    let totalCargo = 0;
    let van = 0;
    let truck = 0;
    let train = 0;
    for (i = 1; i <= ammount; i++) {
        if (cargo <= 3) {
            price += cargo * 200;
            van += cargo;
        } else if (cargo < 12) {
            price += cargo * 175;
            truck += cargo;
        } else {
            price += cargo * 120;
            train += cargo;
        }
        totalCargo += cargo;
        cargo = Number(input.shift());
    }
    console.log((price / totalCargo).toFixed(2));
    console.log(`${(van / totalCargo * 100).toFixed(2)}%`);
    console.log(`${(truck / totalCargo * 100).toFixed(2)}%`);
    console.log(`${(train / totalCargo * 100).toFixed(2)}%`);

}