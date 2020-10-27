function area(input) {
    let a = Number(input.shift());
    let h = Number(input.shift());

    let results = a * h / 2
    console.log(results.toFixed(2));
}
area([6,8])