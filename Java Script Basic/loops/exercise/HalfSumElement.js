function totalSumNumber(input) {
    let n = +input.shift();
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
        if (num > max) { max = num; }

    }

    let totalSum = sum - max;
    let final = Math.abs(totalSum - max);
    if (final === 0) {
        console.log('Yes');
        console.log('Sum = ' + max);
    } else {
        console.log('No');
        console.log('Diff = ' + final);
    }
}
totalSumNumber([7, 3, 4, 1, 1, 2, 12, 1])