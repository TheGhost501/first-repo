function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let side = base;
    for (i = 1; side > 0; i++) {
        if (side - 2 <= 0) {
            gold = side * side * increment;
        } else if (i % 5 === 0) {
            stone += ((side - 2) * (side - 2)) * increment;
            lapisLazuli += ((side * 4) - 4) * increment;
        } else {
            stone += ((side - 2) * (side - 2)) * increment;
            marble += ((side * 4) - 4) * increment;
        }
        height += increment;
        side -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
pyramid(11,1)