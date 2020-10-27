function party(input) {
    let list = [];
    for (let string of input) {
        let arr = string.split(' ', 3);
        let name = arr[0];
        let action = arr[2];
        let position = list.indexOf(name);        
        let check = position == -1 ? false : true;
        if (action === 'going!') {
            if (check) {
                console.log(`${name} is already in the list!`);

            } else {
                list.push(name);
            }
        } else if (action === 'not') {
            if (!check) {
                console.log(`${name} is not in the list!`);

            } else {
                list.splice(position, 1)
            }
        }
    }
    return list.join('\n');

}
console.log(party(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']));