function lastKs(numbers, kS) {
    let array = [1];
    for (let index = 1; index < numbers; index++) {
        let start = Math.max(0, index - kS);
        let end = index;
        let sum = sumed(array.slice(start, end));
        array[index] = sum;
    }
    console.log(array.join(' '));
    function sumed(arr) {
        let total = 0;
        for (let num of arr) {

            total += num;
        }
        return total;
    }
}
lastKs(6, 3)