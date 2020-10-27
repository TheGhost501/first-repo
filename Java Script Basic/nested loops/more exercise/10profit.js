function coins(array) {
    let oneLev = Number(array.shift());
    let twoLev = Number(array.shift());
    let fiveLev = Number(array.shift());
    let amount = Number(array.shift());

    for (let i = 0; i <= oneLev; i++) {
        for (let k = 0; k <= twoLev; k++) {
            for (let j = 0; j <= fiveLev; j++) {
                if (i * 1 + k * 2 + j * 5 === amount) {
                    console.log(`${i} * 1 lv. + ${k} * 2 lv. + ${j} * 5 lv. = ${amount} lv.`);

                }

            }
        }
    }
}
coins([5, 3, 1, 7])