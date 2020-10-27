function pyramid(input) {
    let n = +input.shift();
    let counter = 1;
    flag = false;
    for ( row = 1; row <= n; row++) {
        let current = '';
        for (col = 1; col <= row; col ++) {
            current +=`${counter} `;
            counter++;
            if (counter > n) {
                flag = true;
                break;
            }
        }console.log(current)
        if (flag) {break;}
    
    }
}
pyramid([15])