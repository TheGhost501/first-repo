function glasses(n) {
    string = '';
    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
    for (let i = 0; i < n - 2; i++) {
        if (i === parseInt((n - 1) / 2 - 1)) {
            string = '*' + '/'.repeat(2 * n - 2) + '*' + '|'.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*';
            console.log(string);
        } else {
            string = '*' + '/'.repeat(2 * n - 2) + '*' + ' '.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*';
            console.log(string);
        }
    }
    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
}
glasses(31)
