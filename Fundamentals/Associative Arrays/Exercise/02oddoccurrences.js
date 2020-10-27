function odds(string) {
    let array = string.toLowerCase().split(' ');
    let map = new Map();
    for (let word of array) {
        if (!map.has(word)) {
            map.set(word, 0);
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    let output = [];
    let counted = Array.from(map);
    for (let current of counted) {
        if (current[1] % 2 != 0){
            output.push(current[0]);
        }
    }
    return output.join(' ');
}
console.log(odds('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
