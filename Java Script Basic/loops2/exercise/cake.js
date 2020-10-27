function cake(input) {
    let l = +input.shift();
    let w = +input.shift();
    let cakesize = l * w;
    let pieces = 0.0;
    let takenpieces = input.shift();
    while (cakesize > pieces) {
        if (takenpieces === 'STOP') { ; break; }
        else { pieces += Number(takenpieces); }
        takenpieces = input.shift();
    }
    let remain = Math.abs(cakesize - pieces);
    if (takenpieces === 'STOP' && cakesize > pieces) {
        console.log(`${remain} pieces are left.`);
    } else { console.log(`No more cake left! You need ${remain} pieces more.`) }
}
cake([10, 10, 20, 20, 20 , 20 , 21])
cake([10,2,  2,  4, 6, 'STOP', ])