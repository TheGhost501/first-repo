function heroic(array) {
    let output = [];

    for (let line of array) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let object = { name: name, level: level, items: items };
        output.push(object);
    }

    console.log(JSON.stringify(output));
}
heroic(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);