function generate(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let string = '';
    for (num1 = 1; num1 < n; num1++) {
        for (num2 = 1; num2 < n; num2++) {
            for (symb1 = 97; symb1 < 97 + l; symb1++) {
                for (symb2 = 97; symb2 < 97 + l; symb2++) {
                    for (num3 = 1; num3 <= n; num3++) {
                        if (num3 > num1 && num3 > num2) {
                            string += `${num1}${num2}${String.fromCharCode(symb1)}${String.fromCharCode(symb2)}${num3} `
                        }
                    }
                }
            }
        }
    }
    console.log(string)
}
generate([2,4])
generate([3,1])
generate([3,2])
generate([4,2])