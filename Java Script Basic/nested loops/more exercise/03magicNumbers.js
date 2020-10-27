function magic(input) {
    let n = Number(input.shift());
    let string = '';

    for (let i = 1; i < 10; i ++) {
        for (let k = 1; k < 10; k++) {
            for (let j = 1; j < 10; j++) {
                for (let t = 1; t < 10; t++) {
                    if (i + k === j + t && n % (i + k) === 0) {
                        string += `${i}${k}${j}${t} `;
                    }

                }
            }
        }
    }
    console.log(string);
    
}
magic([24])