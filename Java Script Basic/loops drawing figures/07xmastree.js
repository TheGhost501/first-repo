function xmas(n) {
    let string = '';
    for (let i = 0; i <= n; i++) {
        for (let k = 0; k < n - i; k++) {
            string += ' ';
        }
        for (let j = 0; j < i; j++) {
            string += '*';
        }
        string += ' | ';
        for (let b = 0; b < i; b++) {
            string += '*';
        }
        console.log(string);
        string = '';
        
    }
}
xmas(1)