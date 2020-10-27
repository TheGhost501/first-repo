function validity(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(x1, y1, x2, y2)}`);

    function isValid(x1, y1, x2, y2) {
        let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        let output = Number.isInteger(value) ? 'valid' : 'invalid';
        return output;
    }
}
validity([3, 0, 0, 4]);
validity([2, 1, 1, 1]);