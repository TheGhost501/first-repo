function hotelRoom(input) {
    let month = input.shift();
    let nights = +input.shift();
    let apartment = 0;
    let studio = 0;
    if (month == 'May' || month == 'October')
        {apartment = nights * 65;
        studio = nights * 50;
        if (nights > 14) {studio *= 0.7;}
        else if (nights > 7) {studio *= 0.95}
        else {studio}
}   else if (month == 'June' || month == 'September')
        {apartment = nights * 68.70;
        studio = nights * 75.20;
        if (nights > 14) {studio *= 0.8;}
        else {studio}
}   else 
        {apartment = nights * 77;
         studio = nights * 76;}
    if (nights > 14) {apartment *= 0.9}
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}