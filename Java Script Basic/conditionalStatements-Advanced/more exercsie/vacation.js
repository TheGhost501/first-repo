function vacation(type1, season) {
    let budget = Number(type1);
    let location = '';
    let accom = '';
    let hotelPrice = 0;
    if (budget <= 1000) {
        accom = 'Camp';
        switch (season) {
            case 'Summer':
                location = 'Alaska';
                hotelPrice = budget * 0.65;
                break;
            case 'Winter':
                location = 'Morocco';
                hotelPrice = budget * 0.45;
                break;
        }
    } else if (budget <= 3000) {
        accom = 'Hut';
        switch (season) {
            case 'Summer':
                location = 'Alaska';
                hotelPrice = budget * 0.80;
                break;
            case 'Winter':
                location = 'Morocco';
                hotelPrice = budget * 0.60;
                break;

        }
    } else {
        accom = 'Hotel';
        hotelPrice = budget * 0.90;
        switch (season) {
            case 'Summer':
                location = 'Alaska';
                break;
            case 'Winter':
                location = 'Morocco';
                break;
        }
    }
    console.log(`${location} - ${accom} - ${hotelPrice.toFixed(2)}`);

}