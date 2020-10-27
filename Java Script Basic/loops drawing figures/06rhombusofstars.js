function rombus(n) {
    let string = '';
    for (let row = 1; row <= n; row++) {
        for (i = row; i < n; i++) {
            string += ' ';
        }
        string += '*';
        for (let k = 1; k <= row - 1; k++) {
            string += ' *';
        }
        console.log(string);
        string = '';
    }
    for (let row2 = 1; row2 <= n - 1; row2++) {
        for (let t = 1; t < row2; t++) {
            string += ' '; 
        }
        string += ' *';
        for (let w = n-1; w > row2; w--) {
            string += ' *';
        }
        console.log(string);
        string = '';

    }
}
rombus(4)