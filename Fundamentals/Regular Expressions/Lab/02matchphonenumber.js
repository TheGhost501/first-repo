function phoneMatch(string) {
    let validPhones = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    while ((validPhone = pattern.exec(string)) !== null) {
        validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(', '));
    
}

phoneMatch("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");