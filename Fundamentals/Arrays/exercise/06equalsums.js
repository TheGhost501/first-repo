function equal(array) {
    let leftSum = 0;
    let rightSum = 0;
    let element = undefined;

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < i; k++) {
            leftSum += array[k];
        }
        for (let t = i + 1; t < array.length; t++) {
            rightSum += array[t];
        }
        if (rightSum === leftSum) {
            element = i;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (element === undefined) {
        console.log('no');
    } else {
        console.log(element);
    }
}
equal([1, 2, 3, 3])
equal([1, 2])
equal([1])
equal([1, 2, 3])
equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
