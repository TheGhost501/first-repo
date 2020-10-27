function check(num1, num2, num3) {
    negative = 0;
    let result = '';
    if (num1 < 0) {
        negative++;
    }
    if (num2 < 0) {
        negative++;
    }
    if (num3 < 0) {
        negative++;
    }
    if (num2 == 0 || num1 == 0 || num3 == 0) {
        result = 'Positive';
    } else if (negative % 2 === 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);

}
check(-6, -12, 14)
check(5, 12, - 15)
check(-1, - 2, - 3)
check(-1, 0, 1)