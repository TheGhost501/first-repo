function nonDecreasing(array) {
    let currentBiggest = array[0];
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current >= currentBiggest) {
            newArray.push(current);
            currentBiggest = current;
        }
        
    }

    return newArray.join(' ');
}
console.log(nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));