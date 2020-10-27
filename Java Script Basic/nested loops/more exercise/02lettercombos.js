function letters(input) {
    let charStart = input.shift();
    let charEnd = input.shift();
    let exclude = input.shift();
    let start = charStart.charCodeAt();
    let ending = charEnd.charCodeAt();
    let skip = exclude.charCodeAt();
    let count = 0;
    let string = '';
    for (let i = start; i <= ending; i++) {
        if (i === skip) {
            ; continue;
        }
        for (let j = start; j <= ending; j++) {
            if (j === skip) {
                ; continue;
            }
            for (let k = start; k <= ending; k++) {
                if (k === skip) {
                    ; continue;
                }
                let a = String.fromCharCode(i);
                let b = String.fromCharCode(j);
                let c = String.fromCharCode(k);
                string += `${a}${b}${c} `
                count++;

            }

        }
    }
    string += count;
    console.log(string);


}
letters(['a', 'z', 'b'])