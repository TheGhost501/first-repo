function sortNums(input) {
    let array = [];
    for (let num of input) {
        if (num < 0) {
            array.unshift(num);
        } else {
            array.push(num);
        }
    }
    console.log(array.join('\n'));
}
sortNums([7, -2, 8, 9])