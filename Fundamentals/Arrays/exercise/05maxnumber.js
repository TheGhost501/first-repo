function max(array) {
    let topIntegers = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] <= array[k]) {
                isBigger = false;
            }

        }
        if (isBigger) {
            topIntegers.push(array[i]);
        }
    }
    console.log(topIntegers.join(' '));
    
}
max([1, 4, 3, 2])
max([14, 24, 3, 19, 15, 17])
max([41, 41, 34, 20])
max([27, 19, 42, 2, 13, 45, 48])