function modify(array) {

    let first = array.shift();

    let sequence = first.split(' ').map(x => Number(x));



    for (let string of array) {
        let input = string.split(' ');
        let command = input[0];
        switch (command) {
            case 'swap':
                let firstIndex = Number(input[1]);
                let secondIndex = Number(input[2]);
                let numberA = sequence[firstIndex];
                sequence[firstIndex] = sequence[secondIndex];
                sequence[secondIndex] = numberA;

                break;

            case 'multiply':
                let one = Number(input[1]);
                let two = Number(input[2]);
                sequence[one] = sequence[one] * sequence[two];

                break;
            case 'decrease':
                decrease();
                break;
            case 'end':
                console.log(sequence.join(', '));
                break;

        }
    }
    function decrease() {
        for (let i = 0; i < sequence.length; i++) {
            let num = sequence[i];
            sequence[i] = num - 1;

        }
    }
}
modify([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'

])