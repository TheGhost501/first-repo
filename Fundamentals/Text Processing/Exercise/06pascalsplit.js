function pascalCase(string) {
    let output = '';
    let startIndex = 0;
    for (let i = 1; i < string.length; i++) {
        let char = string[i];
        if (char.toUpperCase() === char) {
            output += string.substring(startIndex, i) + ', ';
            startIndex = i;
        }

    }
    output += string.substring(startIndex);

    console.log(output);

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');