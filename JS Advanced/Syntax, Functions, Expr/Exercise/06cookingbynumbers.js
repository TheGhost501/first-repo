function cookNums(array) {
    let startNum = Number(array[0]);

    function operation(input, number) {
        let output;
        switch (input) {
            case 'chop':
                output = number / 2;
                break;
            case 'dice':
                output = Math.sqrt(number);
                break;
            case 'spice':
                output = number + 1;
                break;
            case 'bake':
                output = number * 3;
                break;
            case 'fillet':
                output = (number * 0.8).toFixed(1);
                break;

        }

        console.log(output);
        return output;
    }

    for (let i = 1; i < 6; i++) {
        let line = array[i];
        startNum = operation(line, startNum);
    }

}
cookNums(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']); 