function wash(input) {
    let detergent = input.shift() * 750;
    let plate = input.shift();
    let plateCount = 0;
    let panCount = 0;
    let count = 1;
    let notEnough = false;
    while (plate !== 'End') {

        if (count % 3 === 0) {
            let required = Number(plate) * 15;
            if (required > detergent) {
                notEnough = required;
                ; break;
            } else {
                detergent -= required;
                panCount += Number(plate);
            }
        } else {
            let required = Number(plate) * 5;
            if (required > detergent) {
                notEnough = required;
                ; break;
            } else {
                detergent -= required;
                plateCount += Number(plate);
            }
        }
        count++;
        plate = input.shift();
    }
    if (notEnough === false) {
        console.log('Detergent was enough!');
        console.log(`${plateCount} dishes and ${panCount} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else { console.log(`Not enough detergent, ${notEnough - detergent} ml. more necessary!`); 
}

}
wash([2, 53, 65, 55, 'End'])
wash([1, 10, 15, 10, 12, 13, 30])