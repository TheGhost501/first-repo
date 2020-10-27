function quest(input) {
    let skill = input.shift();
    let comArray = input.slice(0, input.indexOf('For Azeroth'));
    for (let command of comArray) {
        let lineArr = command.split(' ');
        let action = lineArr[0];
        let subAction = lineArr[1];
        let substring = lineArr[2];
        if (action === 'GladiatorStance') {
            skill = skill.toUpperCase();
            console.log(skill);
        } else if (action === 'DefensiveStance') {
            skill = skill.toLowerCase();
            console.log(skill);
        } else if (action === 'Dispel') {
            let index = Number(lineArr[1]);
            let letter = lineArr[2];
            if (index >= 0 && index < skill.length) {
                let start = skill.substring(0, index);
                let end = skill.substring(index + 1);
                skill = start + letter + end;
                console.log('Success!');
            } else {
                console.log('Dispel too weak.');
            }
        } else if ([action, subAction].join(' ') === 'Target Change') {
            let newSubstring = lineArr[3];
            let regex = new RegExp(substring, 'g');
            skill = skill.replace(regex, newSubstring);
            console.log(skill);

        } else if ([action, subAction].join(' ') === 'Target Remove') {
            let regex = new RegExp(substring, 'g');
            skill = skill.replace(regex, '');
            console.log(skill);
        } else {
            console.log(`Command doesn't exist!`);
        }
    }
}

quest([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
]);
quest([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
]);  