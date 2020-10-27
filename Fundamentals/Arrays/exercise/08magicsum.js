function magicSum(array, magic) {
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] + array[k] === magic) {
                console.log(`${array[i]} ${array[k]}`);

            }
        }

    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)