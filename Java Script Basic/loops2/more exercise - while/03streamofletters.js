function stream(array) {
    let input = array.shift();
    let string = '';
    let counterN = 0;
    let counterO = 0;
    let counterC = 0;
    let currentWord = '';
    while (input !== 'End') {
        let code = input.charCodeAt();

        if (code === 99) {
            if (counterC === 0) {
                counterC++;
            } else {
                currentWord += input;
            }

        } else if (code === 110) {
            if (counterN === 0) {
                counterN++;
            } else {
                currentWord += input;
            }

        } else if (code === 111) {
            if (counterO === 0) {
                counterO++;
            } else {
                currentWord += input;
            }
        } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            currentWord += input;
        }
        if (counterN + counterO + counterC === 3) {
            string += `${currentWord} `;
            counterN = 0;
            counterO = 0;
            counterC = 0;
            currentWord = '';
        }
        input = array.shift();
    }
    console.log(string);

}
stream(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End'])






