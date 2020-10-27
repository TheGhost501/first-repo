function cals(array) {
    let object = {};

    for (let i = 0; i < array.length; i += 2) {
        let item = array[i];
        let value = array[i + 1];
        object[item] = Number(value);

    }

    console.log(object);
}
cals(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
cals(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);