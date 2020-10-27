function oddsum(n) {
    let sum = 0;
    let counter = 1;
    for (i = 1; counter<=n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counter++;

        }
    } console.log(`Sum: ${sum}`)
}
oddsum(5)