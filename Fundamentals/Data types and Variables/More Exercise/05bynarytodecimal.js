function binaryToDecimal(input) {
    let decimal = 0;
    for (let i = 0; i < input.length; i++) {
        let pow = input.length - i - 1;
        let index = Number(input[i]);
        if (index === 1) {
            decimal += Math.pow(2, pow)
        }
    }
    console.log(decimal);
    
}
binaryToDecimal('00001001')