function censored(text, word) {

    while (text.indexOf(word) != -1) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    return text;
}
console.log(censored("A small sentence with some words", "small"));
