function dollas(n) {
    string = '';
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            string += '$ '
        }
        console.log(string);
        string = '';
        
        
    }
}
dollas(6)