function arena(array) {
    let tier = {};
    for (let line of array) {
        if (line === 'Ave Cesar') {
            printTier(tier);
            break;
        } else {
            let tokens = line.split(' ');
            if (tokens[1] === 'vs') {
                let firstGladiator = tokens[0];
                let secondGladiator = tokens[2];
                battle(firstGladiator, secondGladiator, tier);
            } else {
                fillTier(tokens, tier);
            }
        }
    }

    function fillTier(tokens, tier) {

        let gladName = tokens[0];
        let skill = tokens[2];
        let power = Number(tokens[4]);

        if (tier[gladName] === undefined) {
            tier[gladName] = {};
        } else if (tier[gladName][skill] > power) {
            power = tier[gladName][skill];
        }

        tier[gladName][`${skill}`] = power;
    }

    function battle(gladiator1, gladiator2, obj) {

        let arrayOfNames = Object.keys(obj);
        let indexOfFirst = arrayOfNames.indexOf(gladiator1);
        let indexOfSecond = arrayOfNames.indexOf(gladiator2);

        if (indexOfFirst != -1 && indexOfSecond != -1) {

            let invOfFirst = Object.keys(obj[gladiator1]);
            let invOfSecond = Object.keys(obj[gladiator2]);
            let commonTehnique = false;

            for (let move of invOfFirst) {
                if (commonTehnique) {
                    break;
                }

                for (let move2 of invOfSecond) {
                    if (move == move2) {
                        commonTehnique = true;
                        break;
                    }
                }
            }

            if (commonTehnique) {
                let points1 = 0;
                let points2 = 0;
                let power1 = Object.values(obj[gladiator1]);
                let power2 = Object.values(obj[gladiator2]);

                power1.forEach(element => {
                    points1 += element;
                });

                power2.forEach(element => {
                    points2 += element;
                });

                if (points1 > points2) {
                    delete obj[gladiator2];
                } else if (points2 > points1) {
                    delete obj[gladiator1];
                }


            }
        }
    }

    function printTier(obj) {
        let namePower = new Map();
        let names = Object.keys(obj);

        for (let gladiator of names) {
            let power = 0;
            let arrayOfPower = Object.values(obj[gladiator]);
            arrayOfPower.forEach(x => power += x);
            namePower.set(gladiator, power);

        }

        let sorted = Array.from(namePower).sort((a, b) => {
            if (a[1] === b[1]) {
                return a.localeCompare(b);
            } else {
                return b[1] - a[1];
            }
        });

        sorted.forEach(gladiator => {
            let name = gladiator[0];
            let power = gladiator[1];
            console.log(`${name}: ${power} skill`);
            let powers = Object.keys(obj[name]).sort((a, b) => {
                let powerA = obj[name][a];
                let powerB = obj[name][b];
                if (powerA == powerB) {
                    return a.localeCompare(b);
                } else {
                    return powerB - powerA;
                }
            })

            powers.forEach(power => console.log(`- ${power} <!> ${obj[name][power]}`));

        })


    }
}

arena([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Stefan -> Tiger -> 150',
    'Ave Cesar'
]
);

arena([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
);
