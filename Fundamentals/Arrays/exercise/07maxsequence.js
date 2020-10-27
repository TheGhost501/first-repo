function sequence(array) {

    let string = [];
    let lastArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1] && string.length === 0) {
            string.push(array[i]);
        } else if (array[i - 1] === array[i]) {
            string.push(array[i]);
        }
        if (array[i] != array[i + 1]) {
            if (string.length > lastArray.length) {
                lastArray = string;

            }
            string = [];
        }
    }
    console.log(lastArray.join(' '));

}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
sequence([4, 4, 4, 4])