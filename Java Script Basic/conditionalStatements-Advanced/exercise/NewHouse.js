function flowers(input) {
    let flower = input.shift();
    let value = Number(input.shift());
    let budget = Number(input.shift());
    let sum = 0.0;
    switch (flower) {
        case 'Roses':
            if (value > 80){sum = (value * 5) * 0.9;}
            else {sum = value * 5;};break;
        case 'Dahlias':
            if (value > 90){sum = (value * 3.8) * 0.85;}
            else {sum = value * 3.8;};break;
        case 'Tulips':
            if (value > 80){ sum = (value * 2.8) * 0.85;}
            else {sum = value * 2.8;};break;
        case 'Narcissus':
            if (value < 120){sum = (value * 3) * 1.15;}
            else {sum = value * 3;};break;
        case 'Gladiolus':
            if (value < 80) {sum = (value * 2.5) * 1.2;}
            else {sum = value * 2.5;};break;
    }
    let difference = Math.abs(budget - sum).toFixed(2);
    if (budget >= sum) {console.log(`Hey, you have a great garden with ${value} ${flower} and ${difference} leva left.`);
}   else {console.log(`Not enough money, you need ${difference} leva more.`)}
}
flowers(['Roses', '55', '250'])
flowers(['Tulips','88','260'])