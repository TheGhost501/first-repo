function pIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let number = String(array[i]);
        let reverse = number.split('').reverse().join('');
        if (number === reverse) {
            console.log('true');
            
        } else {
            console.log('false');
            
        }
    }
}
pIntegers([123,323,421,121])