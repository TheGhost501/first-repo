function tracker(array) {
    let map = new Map();
    let words = array[0].split(' ');
    for (let word of words) {
        map.set(word, 0);
    }
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        if (map.has(current)) {
            map.set(current, map.get(current) + 1);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    let output = '';
    sorted.forEach(element => {
        output += `${element[0]} - ${element[1]}\n`;
    });
    return output;
}

console.log(tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
));
