function trainPassengers(input) {
    let train = (input.shift()).split(' ').map(Number);
    let maxCap = Number(input.shift());
    for (let action of input) {
        let [first, second] = action.split(' ');
        if (first == 'Add') {
            train.push(second);
        } else {
            first = Number(first);
            for (let i = 0; i < train.length; i++) {
                if (first + train[i] <= maxCap) {
                    train[i] = first + train[i];;
                    break;
                }

            }
        }
    }
    return train.join(' ');
}
console.log(trainPassengers(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));