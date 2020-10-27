function moving(input) {
    let l = +input.shift();
    let w = +input.shift();
    let h = +input.shift();
    let freespace = l * w * h;
    let needspace = 0;
    let box = input.shift();
    while (box !== 'Done') {
        needspace += Number(box);
        if (needspace > freespace) {break;}
        else {box = input.shift();}

    }
    let diff = Math.abs(needspace - freespace)
    if (freespace >= needspace) {
        console.log(`${diff} Cubic meters left.`)
    } else { console.log(`No more free space! You need ${diff} Cubic meters more.`) }
}
moving([10, 10, 2, 20, 20, 20, 20, 122])