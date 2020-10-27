function minning(array) {

    let resources = new Map();
    let material;

    for (let i = 0; i < array.length; i++) {
        let input = array[i];

        if (i % 2 === 0) {
            if (!resources.has(input)) {
                resources.set(input, 0);
            }
            material = input;
        } else {
            resources.set(material, resources.get(material) + Number(input));

        }
    }

    let useable = Array.from(resources);
    let output = '';

    for (let material of useable) {
        output += `${material[0]} -> ${material[1]}\n`;
    }

    return output;
}
console.log(minning([
    'gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'gold',
    '15'

]
));
