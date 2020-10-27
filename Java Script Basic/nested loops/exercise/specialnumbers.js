function special(input) {
    let number = Number(input.shift());
    let string = '';
    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            for (k = 1; k <= 9; k++) {
                for (l = 1; l <= 9; l++) {
                    if (number % i === 0 && number % j === 0 && number % k === 0 && number % l === 0) {
                        string += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    } console.log(string)
}
special([3])