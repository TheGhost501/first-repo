function calculate(number1, number2, operation) {

    switch (operation) {
        case 'multiply':
            let multiply = (number1, number2) => number1 * number2;
            console.log(multiply(number1, number2));
            break;
        case 'divide':
            let divide = (number1, number2) => number1 / number2;
            console.log(divide(number1, number2));
            break;
        case 'add':
            let add = (number1, number2) => number1 + number2;
            console.log(add(number1, number2));
            break;
        case 'subtract':
            let subtract = (number1, number2) => number1 - number2;
            console.log(subtract(number1, number2));
            break;
    }
}
calculate(50, 13, 'subtract')