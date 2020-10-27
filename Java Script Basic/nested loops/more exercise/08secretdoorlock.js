function lock(array) {
    let hundreds = Number(array.shift());
    let decimals = Number(array.shift());
    let ones = Number(array.shift());

    for (let i = 1; i <= hundreds; i++) {
        if (i % 2 == 0) {
            for (let k = 1; k <= decimals; k++) {
                if (k == 2 || k == 3 || k == 5 || k == 7) {
                    for (let j = 1; j <= ones; j++) {
                        if (j % 2 == 0) {
                            console.log(`${i} ${k} ${j}`);

                        } else {
                            ; continue;
                        }
                    }
                } else {
                    ; continue
                }
            }
        } else {
            ; continue;
        }

    }
}
lock([3,5,5])