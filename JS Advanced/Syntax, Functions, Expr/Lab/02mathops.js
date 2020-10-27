function mathOps(firstNum, secondNum, operator) {
    let result;

    switch (operator) {
        case '+': result = firstNum + secondNum;
            break;
        case '-': result = firstNum - secondNum;
            break;
        case '*': result = firstNum * secondNum;
            break;
        case '/': result = firstNum / secondNum;
            break;
        case '%': result = firstNum % secondNum;
            break;
        case '**': result = firstNum ** secondNum;
            break;
    }
    return result;
}

console.log(mathOps(5,6, '+'));