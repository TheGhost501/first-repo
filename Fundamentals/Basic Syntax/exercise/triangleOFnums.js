function triangle(num) {
    let string = '';
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= i; j++) {
            string += `${i} `
        }
        console.log(string);
        string = '';
    }
}
triangle(6)