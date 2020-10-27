function pairs(input) {
    let count = Number(input.shift());
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let sum1;
    let sum2;
    let maxDiff = 0;
    for (let i = 0; i < count; i++) {
        sum1 = num1 + num2;
        num1 = Number(input.shift());
        num2 = Number(input.shift());
        sum2 = num1 + num2;
        let difference = Math.abs(sum1 - sum2);
        if (sum1 === sum2) {
            continue;
        } else {
            if (maxDiff < difference) {
                maxDiff = difference;
            }
        }
    }
    if (maxDiff != 0) {
        console.log(`No, maxdiff=` + maxDiff);
    } else {
        console.log('Yes, value=' + sum1);

    }


}
pairs([3, 1, 2, 0, 3, 4, -1])
pairs([4, 1, 1, 3, 1, 2, 2, 0, 0])