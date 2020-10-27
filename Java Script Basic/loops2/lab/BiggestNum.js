function biggest(input) {
    let n = +input.shift();
    let count = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while (count < n) {
        let number = +input.shift();
        count++;
        if (number > max) {max = number ;}

    }
    console.log(max)
}
biggest([3,-10, 20,-30])