function numbers(input) {
    let n1 = +input.shift();
    let n2 = +input.shift();
    let printline = '';
    for (i = n1; i <= n2; i++) {
        let currentNum = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        for (item = 0; item <currentNum.length; item++) {
            let currentDigit = currentNum.charCodeAt(item);
            if (item % 2 === 0) {evenSum += currentDigit;}
            else {oddSum += currentDigit}
        }
        if (oddSum === evenSum) {
            printline += i + ' ';
        }
    }
    console.log(printline)
}
numbers([123456, 124000])