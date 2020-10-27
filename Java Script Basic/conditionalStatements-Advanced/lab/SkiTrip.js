function ski(input) {
    let nights = Number(input.shift()) - 1;
    let room = input.shift();
    let rating = input.shift();
    let price = 0.0;
    switch (room) {
        case 'room for one person': price = nights * 18;break;
        case 'apartment':
            if (nights < 10) {price = (nights * 25) * 0.7;
            } else if (nights >= 10 && nights <= 15) { price = (nights * 25) * 0.65;
            } else {price = (nights * 25) * 0.5;};break;
        case 'president apartment':
            if (nights < 10) {price = (nights * 35) * 0.9;
            } else if (nights >= 10 && nights <= 15) { price = (nights * 35) * 0.85;
            } else {price = (nights * 35) * 0.8;} ; break;      b
    }
    if (rating =='positive') {console.log((price * 1.25).toFixed(2));}
    else (console.log((price * 0.9).toFixed(2)))
}
ski(['14', 'apartment', 'positive'])
ski(['30', 'president apartment', 'negative'])