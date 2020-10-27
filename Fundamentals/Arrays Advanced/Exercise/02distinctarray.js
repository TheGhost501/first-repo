function distinct(input) {
    for (let i = 0; i < input.length; i++) {
        for (let k = i + 1; k < input.length; k++) {
            if (input[k] == input[i]) {
                input.splice(k,1);
                i--;
            }
            

        }

    }
    return input.join(' ');
}
console.log(distinct([20, 8, 12, 13, 4, 4, 8, 5]));
