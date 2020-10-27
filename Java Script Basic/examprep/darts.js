function darts(input) {
    let startingPoints = +input.shift();
    let bullseye = false;
    let moves = 0;

    while (startingPoints > 0) {
        let sector = input.shift();
        let points = +input.shift();
        moves++;
        if (sector === 'bullseye') {
            bullseye = true; break;
        } else if (sector === 'triple ring') {
            points *= 3;
        } else if (sector === 'double ring') {
            points *= 2;
        } else { points *= 1; }
        startingPoints -= points;

    }
    let difference = Math.abs(0 - startingPoints)

    if (bullseye) {
        console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`)
    } else if (startingPoints === 0) {
        console.log(`Congratulations! You won the game in ${moves} moves!`)
    } else { console.log(`Sorry, you lost. Score difference: ${difference}.`) }
}
darts([150, 'double ring', 20, 'triple ring', 10, 'number section', 20, 'triple ring', 20])
darts([101, 'triple ring', 7, 'double ring', 19, 'bullseye'])
darts([75, 'triple ring', 17, 'number section', 16, 'triple ring', 13, 'double ring', 10])