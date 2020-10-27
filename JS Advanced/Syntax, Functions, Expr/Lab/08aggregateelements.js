function aggregate(array) {
    let sum = array.reduce((acc, i) => { return acc += i });
    let inverseSum = 0;
    array.forEach(element => {
        inverseSum += 1 / element;
    });
    let concatSum = '';
    array.forEach(element => {
        concatSum += element;
    });
    console.log(sum);
    console.log(inverseSum);
    console.log(concatSum);
}
aggregate([1, 2, 3]);