function addRemove(array) {
let output = [];
let number = 1;

    for (let command of array) {
        if (command === 'add') {
            output.push(number);
        } else {
            output.pop();
        }
        number++;
    }
    console.log(output.length > 0 ? output.join('\n') : 'Empty');
}
addRemove(['add',
    'add',
    'add',
    'add']
);
addRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);
addRemove(['remove',
    'remove',
    'remove']
);