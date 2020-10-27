function sums(input) {
    let number1 = +input.shift();
    let number2 = +input.shift();
    let magicNum = +input.shift();
    let combinations = 0.0;
    let flag = false;
    for (i = number1; i <= number2; i++) {
        for (y = number1; y <= number2; y++) {
            combinations++;
            if (i + y === magicNum) {
                flag = true;
                break;

            }
        } if (flag) {break;}
    } if (flag) {console.log (`Combination N:${combinations} (${i} + ${y} = ${magicNum})`)}
    else {console.log(`${combinations} combinations - neither equals ${magicNum}`)}
}
sums([1,10,5])