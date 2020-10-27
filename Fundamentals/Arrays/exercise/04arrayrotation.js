function rotate(array, n) {
    let rotations = n % array.length;
    for (let i = 1; i <= rotations; i++) {
        array.push(array.shift());
    }
    return array.join(' ');

}
console.log(rotate([2, 4, 15, 31], 5));