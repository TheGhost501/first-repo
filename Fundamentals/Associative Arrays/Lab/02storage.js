function storage(input) {
    let map = new Map();
    for (let product of input) {
        let [name, amount] = product.split(' ');
        if (map.has(name)) {
            let currentAmount = map.get(name);
            let newAmount = Number(currentAmount) + Number(amount)
            map.set(name, newAmount);
        } else {
            map.set(name, amount);
        }
    }
    let mapArray = Array.from(map.entries());
    let output = '';
    for (let entry of mapArray) {
        let name = entry[0];
        let value = entry[1];
        output += `${name} -> ${value}\n`;
    }
    return output;
}
console.log(storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
));
