function heroInventory(array) {
    let heroes = [];
    for (let current of array) {
        let line = current.split(' / ');
        let objectHero = {
            name: line[0],
            level: Number(line[1]),
            items: line[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        };
        heroes.push(objectHero);
    }
    heroes.sort((hero1, hero2) => {
        return hero1.level - hero2.level;
    });
    let output = [];
    for (let hero of heroes) {
        let string = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`;
        output.push(string);
    }
    return output.join('\n');
    

}
console.log(heroInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
));
