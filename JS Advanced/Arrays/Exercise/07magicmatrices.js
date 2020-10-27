function magic(array) {
    let magicSum = array[0].reduce((acc, a) => acc += a);
    let output = false;
    for (let i = 0; i < array.length; i++) {
        let curSumLine = array[i].reduce((acc, a) => acc += a);
        let curSumRow = 0;
        for (let item of array) {
            curSumRow += item[i];
        }
        if (magicSum === curSumRow && magicSum === curSumLine) {
            output = true;
        } else {
            output = false;
            break;
        }

    }
    return output;
}