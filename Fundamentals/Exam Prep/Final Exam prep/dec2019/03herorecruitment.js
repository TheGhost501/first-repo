function heroes(input) {
    let heroes = {};
    let comArr = input.slice(0, input.indexOf('End'));

    for (let line of comArr) {
        let lineArr = line.split(' ');
        let command = lineArr[0];
        let heroName = lineArr[1];
        let spellName = lineArr[2];
        switch (command) {
            case 'Enroll':
                if (heroes[heroName] === undefined) {
                    heroes[heroName] = [];
                } else {
                    console.log(`${heroName} is already enrolled.`);
                }
                break;

            case 'Learn':
                if (heroes[heroName] === undefined) {
                    console.log(`${heroName} doesn't exist.`);
                } else if (heroes[heroName].includes(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                } else {
                    heroes[heroName].push(spellName);
                }
                break;
            case 'Unlearn':
                if (heroes[heroName] === undefined) {
                    console.log(`${heroName} doesn't exist.`);
                } else if (!heroes[heroName].includes(spellName)) {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                } else {
                    heroes[heroName].splice(heroes[heroName].indexOf(spellName), 1);
                }
                break;

        }
    }

    let sorted = Object.keys(heroes).sort((a, b) => {
        let spellsA = heroes[a].length;
        let spellsB = heroes[b].length;
        if (spellsA === spellsB) {
            return a.localeCompare(b);
        } else {
            return spellsB - spellsA;
        }
    })
    console.log('Heroes:');
    for (let name of sorted) {
        console.log(`== ${name}: ${heroes[name].join(', ')}`);
    }
}
heroes([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]);
heroes([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
]
);