function sortGrades(array) {
    let map = new Map();
    for (let student of array) {
        let tokens = student.split(' ');
        let name = tokens[0];
        let grades = tokens.slice(1, tokens.length).map(Number);
        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades));
        }
    }
    let sorted = Array.from(map).sort((a, b) => average(a, b));
    let output = '';
    for (let student of sorted) {
        output += `${student[0]}: ${student[1].join(', ')}\n`;
    }
    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }
        let averageA = aSum / a[1].length;
        let averageB = bSum / b[1].length;
        return averageA - averageB;
    }
    return output;
}
console.log((sortGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)));
