function printsum(start, end) {
    let string = '';
    let sum = 0;
    for (i = start; i <= end; i++) {
        string += `${i} `
        sum += i;
    }
    console.log(string)
    console.log('Sum: ' + sum)
}
printsum(5, 10)