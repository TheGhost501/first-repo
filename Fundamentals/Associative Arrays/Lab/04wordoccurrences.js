function findWords(array) {
    let map = new Map();
    for (let word of array) {
        if (!map.has(word)) {
            map.set(word, 0);
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    let output = '';
    for (let word of sorted) {
        output += `${word[0]} -> ${word[1]} times\n`;
    }
    return output;
}
console.log(findWords(
    ["Here", "is", "the", "first", "sentence", "Here",
        "is", "another", "sentence", "And", "finally",
        "the", "third", "sentence"]));
