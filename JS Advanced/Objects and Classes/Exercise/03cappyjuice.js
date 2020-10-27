function juice(array) {
    let juices = {};
    let bottles = {};
    array.forEach(line => {
        let [product, quantity] = line.split(' => ');
        if (!juices[product]) {
            juices[product] = Number(quantity);
        } else {
            juices[product] += Number(quantity);
        }
        if (juices[product] >= 1000) {

            bottles[product] = Math.floor(juices[product] / 1000);
        }
    });
    for (let juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }

}
juice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);