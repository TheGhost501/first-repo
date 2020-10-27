function twoCriteria(input) {

    let firstArray = input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });
    console.log(firstArray.join('\n'));

}
twoCriteria(["alpha", "beta", "gamma"])