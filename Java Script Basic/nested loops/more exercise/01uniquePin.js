function pins(input) {
    let one = Number(input.shift());
    let two = Number(input.shift());
    let three = Number(input.shift());
    let end;
    if (two > 7) {
        end = 7;
    } else {
        end = two;
    }

    for (let i = 2; i <= one; i++) {

        if (i % 2 === 0) {
            for (let j = 2; j <= end; j++) {
                if (j === 4 || j === 6) {
                    continue
                } else {
                    for (let k = 2; k <= three; k++) {
                        if (k % 2 === 0) {
                            console.log(`${i} ${j} ${k}`);

                        }

                    }
                }

            }
        }

    }
}
pins([3, 5, 5])
