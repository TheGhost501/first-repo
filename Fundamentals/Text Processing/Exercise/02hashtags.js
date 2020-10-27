function hashtags(string) {
    let stringArr = string.split(' ');
    for (let word of stringArr) {
        if (word.startsWith('#') && word.length > 1) {
            let onlyLetters = true;
            let marked = word.replace('#', '');
            for (let char of marked) {
                let utf = char.charCodeAt();
                if ((utf < 65 || utf > 90) && (utf < 97 || utf > 122)) {
                    onlyLetters = false;
                    break;
                }
            }

            if(onlyLetters) {
                console.log(marked);
                
            }
        }
    }
}
hashtags('Nowadays everyone uses # to tag a #special word in #socialMedia');