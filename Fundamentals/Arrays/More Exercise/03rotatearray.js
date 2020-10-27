function rotate(array) {
    let rotations = Number(array.pop()) % array.length;
    
    for (let i = 0; i < rotations; i++) {
        let current = array.pop ();
        array.unshift(current);
        
    }

    return array.join(' ');

}
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']));