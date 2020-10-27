function challenge(input) {
    let men = Number(input.shift());
    let women = Number(input.shift());
    let tablesMax = Number(input.shift());
    let string = '';
    let tables = 1;
    for (let man = 1; man <= men; man++) {
        for (let woman = 1; woman <= women; woman++) {
            if (tables > tablesMax) {
                ; break;
            } else {
                string += `(${man} <-> ${woman}) `;
                tables++;
            }
        }
    }
    console.log(string);
}
challenge([2, 2, 3])