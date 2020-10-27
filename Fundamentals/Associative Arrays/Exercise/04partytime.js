function party(array) {
    let [guests, indexOfParty] = guestList(array, 'PARTY');

    function guestList(array, stop) {
        let list = { vip: [], regular: [] };
        let indexOfStop = undefined;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === stop) {
                indexOfStop = i; break;
            }
        }

        for (let i = 0; i < indexOfStop; i++) {
            let guestName = array[i];
            if (isNaN(Number(guestName[0]))) {
                list.regular.push(guestName);
            } else {
                list.vip.push(guestName);
            }
        }
        return [list, indexOfStop];
    }

    for (i = indexOfParty + 1; i < array.length; i++) {

        if (guests.vip.includes(array[i])) {
            let index = guests.vip.indexOf(array[i]);
            guests.vip.splice(index, 1);
        } else if (guests.regular.includes(array[i])) {
            let index = guests.regular.indexOf(array[i]);
            guests.regular.splice(index, 1);
        }
    }

    let removed = guests.vip.concat(guests.regular);

    let output = `${removed.length}\n`;

    for (let guest of removed) {
        output += `${guest}\n`;
    }

    return output;

}
console.log(party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    '4Asen'
]
));
