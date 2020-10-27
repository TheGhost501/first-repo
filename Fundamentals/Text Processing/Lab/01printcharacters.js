function charPrint(string) {
    let output = '';

    for (let char of string) {
        output += `${char}\n`;
    }

    return output;
}
console.log(charPrint('AWord'));
