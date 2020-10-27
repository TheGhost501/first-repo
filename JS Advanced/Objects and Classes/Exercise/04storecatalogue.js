function catalogue(inputArray) {
    let storage = {};

    for (let line of inputArray) {
        let [product, quantity] = line.split(' : ');
        storage[product] = Number(quantity);
    }

    let sorted = Object.keys(storage).sort((a, b) => a.localeCompare(b));
    let output = '';
    let letter = '';
    for (let product of sorted) {

        if (product[0] !== letter) {
            letter = product[0];
            output += `${letter}\n`;
        }
        output += ` ${product}: ${storage[product]}\n`;
    }
    console.log(output);
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);