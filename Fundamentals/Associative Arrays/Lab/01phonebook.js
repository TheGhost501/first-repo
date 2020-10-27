function phoneBook(array) {
    let directory = {};
    for (let entry of array) {
        let [name, number] = entry.split(' ');
        directory[name] = number;
    }
    let output = '';
    for (let key in directory) {
        output += `${key} -> ${directory[key]}\n`
    }
    return output;
}
console.log(phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
));
