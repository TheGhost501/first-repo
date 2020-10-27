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
console.log(magic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(magic(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

));
console.log(magic([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

));