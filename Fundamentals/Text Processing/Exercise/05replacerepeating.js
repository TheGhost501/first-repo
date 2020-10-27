function repeating(string) {
    let stringArr = string.split('');
    let count = 1;
    for (let i = 0; i < stringArr.length; i++) {
        let curChar = stringArr[i];
        let char = stringArr[i + 1];
        if (curChar === char) {
            count++;
        } else if (curChar != char && count > 1) {
            string = string.replace(curChar.repeat(count), curChar);
            count = 1;
        }
    }

    return string;
}
console.log(repeating('aaaaabbbbbcdddeeeedssaa'));
