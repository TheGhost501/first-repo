function count(text, word) {
    let stringArr = text.split(' ');
    let count = 0;
    for (let curWord of stringArr) {
        if (curWord === word) {
            count++;
        }
    }

    return count;
}
console.log(count("This is a word and it also is a sentence",
    "is"
));
