function tour(input) {
    let destionations = input.shift();
    let endIndex = input.indexOf('Travel');
    for (let i = 0; i < endIndex; i++) {
        let line = input[i];
        let lineArray = line.split(':');
        let command = lineArray[0];
        switch (command) {
            case 'Add Stop':
                let index = Number(lineArray[1]);
                if (destionations.length >= index && index >= 0) {
                    let firstPart = destionations.substring(0, index);
                    let secondPart = destionations.substring(index);
                    destionations = firstPart + lineArray[2] + secondPart;
                    console.log(destionations);
                }
                break;
            case 'Remove Stop':
                let startIndex = Number(lineArray[1]);
                let endIndex = Number(lineArray[2]);
                if ((startIndex >= 0 && startIndex < endIndex) && (endIndex < destionations.length && endIndex > startIndex)) {
                    let subString = destionations.substring(startIndex, endIndex + 1);
                    destionations = destionations.replace(subString, '');
                    console.log(destionations)
                }
                break;
            case 'Switch':
                let oldString = lineArray[1];
                let newString = lineArray[2];
                if (oldString.length > 0 && newString.length > 0) {
                    let operation = false;
                    if (destionations.includes(oldString)) {
                        let regex = new RegExp(oldString, 'g');
                        operation = true;
                        destionations = destionations.replace(regex, newString);

                    }
                    if (operation) {
                        console.log(destionations);
                    }
                    break;
                }
        }
    }
    console.log('Ready for world tour! Planned stops: ' + destionations);
}
tour([
    'Hawai::Cyprys-Greece',
    'Add Stop:20:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])