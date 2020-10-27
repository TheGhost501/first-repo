function floors(input) {
    let floor = +input.shift();
    let rooms = +input.shift();
    for (i = floor; i >= 1; i--) {
        let curFloor = '';
            for (y = 0; y < rooms; y++) {
                if (i == floor) { curFloor += `L${i}${y} ` }
                else if (i % 2 == 0) {curFloor += `O${i}${y} ` }
                else if (i % 2 !==0) {curFloor += `A${i}${y} ` }
            } console.log(curFloor)
    }
}
floors([6, 4 ])