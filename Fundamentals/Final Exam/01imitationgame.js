function imitation(input) {

    let text = input.shift();

    for (let line of input) {
        if (line === 'Decode') {
            console.log(`The decrypted message is: ${text}`);
            break;
        }
        let lineArr = line.split('|');
        let command = lineArr[0];

        if (command === 'Move') {
            let numLetters = Number(lineArr[1]);
            if (numLetters <= text.length) {
                let moved = text.substr(0, numLetters);
                let secondPart = text.substring(numLetters);
                text = secondPart + moved;
            }

        } else if (command === 'Insert') {
            let index = Number(lineArr[1]);
            let value = lineArr[2];

            if (index >= 0 && index <= text.length) {
                let firstPart = text.substring(0, index);
                let secondPart = text.substring(index);
                text = firstPart + value + secondPart;
            }
        } else if (command === 'ChangeAll') {
            let substring = lineArr[1];
            let replacement = lineArr[2];
            while (text.includes(substring)) {
                text = text.replace(substring, replacement);

            }
        }
    }

}
imitation(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
imitation([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);