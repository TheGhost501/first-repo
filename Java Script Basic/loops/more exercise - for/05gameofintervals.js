function intervals(input) {
    let moves = Number(input.shift());
    let number = Number(input.shift());
    let points = 0;
    let to9 = 0;
    let to19 = 0;
    let to29 = 0;
    let to39 = 0;
    let to50 = 0;
    let invalid = 0;
    for (let i = 0; i < moves; i++) {
        if (number < 0 || number > 50) {
            points /= 2;
            invalid++;

        } else if (number >= 0 && number <= 9) {
            points += number * 0.2;
            to9++
        } else if (number <= 19) {
            points += number * 0.3;
            to19++
        } else if (number <= 29) {
            points += number * 0.4
            to29++
        } else if (number <= 39) {
            points += 50;
            to39++
        } else if (number <= 50) {
            points += 100;
            to50++
        }
        number = Number(input.shift());

    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(to9 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(to19 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(to29 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(to39 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(to50 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid / moves * 100).toFixed(2)}%`);

}