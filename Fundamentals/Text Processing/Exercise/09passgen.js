function passGenerator(stringArr) {
    let base = stringArr[0] + stringArr[1];
    let scrambleWord = stringArr[2];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let scrambleIndex = 0;
    for (let i = 0; i < base.length; i++) {
        let letter = base[i];
        if (vowels.includes(letter)) {
            if (scrambleIndex === scrambleWord.length) {
                scrambleIndex = 0;
            }
            let replacement = (scrambleWord[scrambleIndex]).toUpperCase();
            base = base.replace(letter, replacement);
            scrambleIndex++;
        }

    }
    let password = base.split('').reverse().join('');
    let output = `Your generated password is ${password}`;
    console.log(output);
    
}
passGenerator(
    [
        'ilovepizza', 'ihatevegetables',
        'orange'
    ]
);