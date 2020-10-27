function removeOccurr(word, string) {
    let text = string;
    let old;
    while (old !== text) {

        old = text;
        text = text.replace(word, '');
    }

    return text;

}
console.log(removeOccurr('ice', 'kicegiciceeb'));
