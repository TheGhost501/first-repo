function piccolo(array) {
    let map = new Map();
    for (let car of array) {
        let direction = car.split(', ')[0];
        let plates = car.split(', ')[1];
        if (direction === 'IN') {
            map.set(plates);
        } else if (direction === 'OUT') {
            map.delete(plates);
        }
    }
    let sorted = Array.from(map.keys()).sort((a, b) => a.localeCompare(b));

    let otuput = '';
    if (sorted.length === 0) {
        otuput = `Parking Lot is Empty`;
    } else {
        otuput = sorted.join('\n');
    }
    return otuput;
}
console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
));
