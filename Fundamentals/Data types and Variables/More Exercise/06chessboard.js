function chess(input) {
    console.log('<div class="chessboard">');
    let start = 'black';
    for (let i = 0; i < input; i++) {
        console.log('  <div>');
        let color = start;
        for (let k = 0; k < input; k++) {
            console.log(`    <span class="${color}"></span>`);
            if (color === 'black') {
                color = 'white';
            } else {
                color = 'black';
            }
        }
        if (start === 'black') {
            start = 'white';
        } else {
            start = 'black';
        }
        console.log('  </div>');
    }
    console.log('</div>');
}
chess(4)