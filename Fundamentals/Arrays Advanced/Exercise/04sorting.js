function sorting(input) {
    let sorted = [];
    input.sort((a, b) => a - b);
    let first = 0;
    let last = input.length - 1;
    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            sorted[i] = input[last];
            last--;
        } else {
            sorted[i] = input[first];
            first++;
        }

    }
    console.log(sorted.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
