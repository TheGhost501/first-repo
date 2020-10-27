function users(array) {
    let data = new Map();

    for (let user of array) {
        let [program, userName] = user.split(' -> ');
        if (!data.has(program)) {
            data.set(program, []);
        }

        if (!data.get(program).includes(userName)) {
            data.set(program, (data.get(program)).concat(userName));
        }
    }

    let sorted = Array.from(data).sort((a, b) => a[0].localeCompare(b[0]));
    let output = '';
    for (let program of sorted) {
        output += `${program[0]}\n`;

        for (let user of program[1]) {
            output += `-- ${user}\n`;
        }
    }
    return output;
}
console.log(users([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

));
