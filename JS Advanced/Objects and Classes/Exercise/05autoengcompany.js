function carCatalogue(input) {

    let catalogue = {};

    for (let line of input) {

        let [brand, model, quantity] = line.split(' | ');
        if (!catalogue[brand]) {
            catalogue[brand] = {};
        }
        if (!catalogue[brand][model]) {
            catalogue[brand][model] = Number(quantity);
        } else {
            catalogue[brand][model] += Number(quantity);
        }

    }
    let output = '';
    Object.keys(catalogue).forEach(brand => {
        output += `${brand}\n`;
        Object.keys(catalogue[brand]).forEach(model => {
            output += `###${model} -> ${catalogue[brand][model]}\n`;
        });
    });

    console.log(output);
}
carCatalogue(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);