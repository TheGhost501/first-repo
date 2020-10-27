function area(input) {
    let b1 = Number(input.shift());
    let b2 = Number(input.shift());
    let h = Number(input.shift());

    let results = (b1 + b2) * h / 2
    console.log(results.toFixed(2));
}
area([6,8,4])