function sums(numN, numM) {
    let firstNum = Number(numN);
    let secondNum = Number(numM);
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
        
    }

    return sum;
}
console.log(sums('-8', '20' ));