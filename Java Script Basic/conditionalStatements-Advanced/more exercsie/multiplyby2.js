function by2() {
    for (i = 0; i < arguments.length; i++) {
        let number = arguments[i];
        if (number < 0) {
            console.log('Negative number!'); break;
        } else {
            console.log(`Result: ${(number * 2).toFixed(2)}`);
        }
    }
}
by2(12, 43.2144, 12.3, 543.23, -20)