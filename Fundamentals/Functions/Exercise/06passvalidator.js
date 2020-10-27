function validator(string) {
    let array = string.split('');
    let digitCounter = 0;
    let onlyLet = true;
    let regxpLetters = /[A-Z]/gi;
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (Number(item) >= 0 && Number(item) <= 9) {
            digitCounter++;
        } else if (!item.match(regxpLetters)) {
            onlyLet = false;
        }
    }
    if (onlyLet && digitCounter >= 2 && (string.length >= 6 && string.length <= 10)) {
        console.log('Password is valid');
    } else {
        if (string.length < 6 || string.length > 10) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!onlyLet) {
            console.log('Password must consist only of letters and digits');
        }
        if (digitCounter < 2) {
            console.log('Password must have at least 2 digits');

        }
    }

}
validator('Pa$s$s');