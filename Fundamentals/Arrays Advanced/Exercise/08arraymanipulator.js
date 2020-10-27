function manipulate(array, actions) {
    let modified = array;
    function sumPairs(input) {
        for (let k = 0; k < input.length; k++) {
            let element = input[k] + (k + 1 < input.length ? input[k + 1] : 0);
            input.splice(k, 2, element)

        }
        return input;

    }
    function rotate(input, positions) {
        for (let i = 0; i < positions; i++) {
            let element = input.shift();
            input.push(element);
        }
        return input;
    }
    function addMany(input, positions) {
        let index = positions[1];
        for (let i = 2; i < positions.length; i++) {
            input.splice(index, 0, Number(positions[i]));
            index++;

        }
        return input;

    }
    for (let i = 0; i < actions.length; i++) {
        let commands = actions[i].split(' ');
        switch (commands[0]) {
            case 'add':
                modified.splice(Number(commands[1]), 0, Number(commands[2]));
                break;
            case 'addMany':
                addMany(modified, commands);
                break;
            case 'contains':
                console.log(modified.indexOf(Number(commands[1])));
                break;
            case 'remove':
                modified.splice(Number(commands[1]), 1);
                break;
            case 'shift':
                rotate(modified, Number(commands[1]));
                break;
            case 'sumPairs':
                sumPairs(modified);
                break;
            case 'print':
                return `[ ${modified.join(', ')} ]`;

        }

    }
}
console.log(manipulate([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'shift 2', 'print']));
