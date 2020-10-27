function mirwords(input) {
    let string = input.shift();
    let regex = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let validPairs = [];
    let valid = null;
    let match = false;

    while ((valid = regex.exec(string)) !== null) {
        match = true;
        validPairs.push([valid[2], valid[3]]);
    }
    if (match) {
        console.log(`${validPairs.length} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    let mirrorArray = [];
    for (let pair of validPairs) {
        let word1 = pair[0];
        let word2 = pair[1].split('').reverse().join('');
        if (word1 === word2) {
            mirrorArray.push(pair.join(' <=> '));
        }
    }

    if (mirrorArray.length > 0) {
        console.log('The mirror words are:')
        console.log(mirrorArray.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirwords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);