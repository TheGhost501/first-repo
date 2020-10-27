function key(array) {
    let control = Number(array.shift());
    let string = '';
    let password;
    let counter = 0;
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (a < b && c > d && a*b + c*d === control) {
                        counter++;
                        string += `${a}${b}${c}${d} `;
                        if (counter === 4) {
                            password = `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }
    if (counter >= 4) {
        console.log(string);
        console.log(`Password: ${password}`);          
    } else {
        if (string != '') {
            console.log(string);          
        }
        console.log('No!');
        
    }
}
key([55])