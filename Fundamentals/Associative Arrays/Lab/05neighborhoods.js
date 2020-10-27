function neighborhoods(array) {
    let map = new Map();
    let hoods = array[0].split(', ');
    for (let hood of hoods) {
        map.set(hood, []);
    }
    for (let i = 1; i < array.length; i++) {
        let items = array[i].split(' - ');
        let hood = items[0];
        let person = items[1];
        if (map.has(hood)) {
            map.get(hood).push(person);
        }
    }
    let sorted = Array.from(map).sort((a, b) => {
        let aLenght = a[1].length;
        let bLenght = b[1].length;
        return bLenght - aLenght;
    });
    let output = '';
    for (let hood of sorted) {
        let current = hood[0];
        let inhabitans = '';
        for (let people of hood[1]) {
            if (inhabitans === '') {
                inhabitans += `--${people}`;
            } else {
                inhabitans += `\n--${people}`;
            }
        }
        output += `${current}: ${hood[1].length}\n${inhabitans}\n`;

    }

    return output;

}
console.log(neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
));
