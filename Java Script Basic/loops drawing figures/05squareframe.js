function frame(n) {
    let up = '+ ';
    let middle = '| ';
    let down = '+ ';
    for (let i = 0; i < n - 2; i++) {
        up += '- ';
    }
    up += '+';
    console.log(up);
        for (let k = 0; k < n -2; k++) {
            middle += '- ';    
        }
        middle += '|';
        for (let j = 0; j < n - 2; j++) {
            console.log(middle);
            
    }
    for (let i = 0; i < n - 2; i++) {
        down += '- ';
    }
    down += '+';
    console.log(down);

    
}
frame(6)