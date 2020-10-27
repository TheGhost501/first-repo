function boss(input) {

    let pattern = /\|([A-Z]{4,})\|\:\#([A-Za-z]+\ [A-Za-z]+)\#/g;
    let number = Number(input.shift());

    for (let i = 0; i < number; i++) {
        let person = pattern.exec(input[i]);
        if (person) {
            console.log(`${person[1]}, The ${person[2]}\n>> Strength: ${person[1].length}\n>> Armour: ${person[2].length}`);
        } else {
            console.log('Access denied!');
        }


    }
}

boss([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]
)