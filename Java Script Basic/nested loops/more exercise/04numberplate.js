function plates(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let string = '';

    for (let i = start; i <= end; i++) {
        for (let k = start; k <= end; k++) {
            for (let j = start; j <= end; j++) {
                for (let t = start; t <= end; t++) {
                    if (((i % 2 === 0 && t % 2 != 0) || (i % 2 != 0 && t % 2 === 0))
                     && (i > t) && (k + j) % 2 === 0) {
                        string += `${i}${k}${j}${t} `;
                    }

                }
            }
        }
    }
    console.log(string);

}
plates([2, 3])