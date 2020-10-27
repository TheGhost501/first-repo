function smallest(input) {
    let n = +input.shift();
    let count = 0;
    let min = Number.MAX_SAFE_INTEGER;
    while (count < n) {
        let number = +input.shift();
        count++;
        if (number < min) {min = number ;}

    }
    console.log(min)
}