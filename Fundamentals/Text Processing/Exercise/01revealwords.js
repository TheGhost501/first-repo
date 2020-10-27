function reveal(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let word of textArr) {
        if (word.includes('*')) {
            let length = word.length;
            for (let replace of wordsArr) {
                let replaceLength = replace.length;
                if (length === replaceLength) {
                    textArr.splice(textArr.indexOf(word), 1, replace);
                }
            }
        }
    }

    console.log(textArr.join(' '));
    
}
reveal('great',
    'softuni is ***** place for learning new programming languages'
);