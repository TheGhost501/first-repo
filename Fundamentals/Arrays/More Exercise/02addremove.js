function combine(commands) {
    let currentNumber = 1;
    let numbers = [];
    for (let command of commands) {

        switch (command) {
            case 'add':
                numbers.push(currentNumber); break;
            case 'remove':
                numbers.pop(); break;
        }
        currentNumber++;
    }
    if (numbers.length > 0) {
        return numbers.join(' ');
    } else {
        return 'Empty';
    }

}
console.log(combine(['remove', 'remove', 'remove']));