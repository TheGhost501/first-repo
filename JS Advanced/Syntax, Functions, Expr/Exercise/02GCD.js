function divisor(firstNum, secondNum) {
    let start = Math.min(firstNum, secondNum);
    let greatestCD = 1;
    for (let i = start; i > 0; i--) {
        let firstDivision = firstNum % i;
        let secondDivision = secondNum % i;
        if (firstDivision === 0 && secondDivision === 0) {
            greatestCD = i;
            break;
        } 

    }
    return greatestCD;
}
console.log(divisor(2154, 458));