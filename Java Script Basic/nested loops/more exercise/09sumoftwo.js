function sum(array) {
    let start = Number(array.shift());
    let end = Number(array.shift());
    let magicNum = Number(array.shift());
    let combinations = 0;
    let flag = false;

    for (let i = start; i <= end; i++) {
        if (flag) {
            ; break;
        }
        for (let j = start; j <= end; j++) {
            combinations++;
            if (i + j === magicNum) {
                flag = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                ; break;
            }
        }
    }
    if (!flag) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
}
sum([23, 24, 20])