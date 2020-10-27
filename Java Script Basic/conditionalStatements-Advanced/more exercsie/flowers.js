function flower(type1, type2, type3, season, holiday) {
    let mums = Number(type1);
    let roses = Number(type2);
    let tulips = Number(type3);
    let bouquet = 0;
    if (holiday === 'Y') {
        if (season === 'Spring' || season === 'Summer') {
            bouquet = ((mums * 2) + (roses * 4.1) + (tulips * 2.5)) * 1.15;
            if (season === 'Spring' && tulips > 7) {
                bouquet *= 0.95;
            }
        } else {
            bouquet = ((mums * 3.75) + (roses * 4.5) + (tulips * 4.15)) * 1.15;
            if (season === 'Winter' && roses > 9) {
                bouquet *= 0.9;
            }
        }
    } else {
        if (season === 'Spring' || season === 'Summer') {
            bouquet = (mums * 2) + (roses * 4.1) + (tulips * 2.5);
            if (season === 'Spring' && tulips > 7) {
                bouquet *= 0.95;
            }
        } else {
            bouquet = (mums * 3.75) + (roses * 4.5) + (tulips * 4.15);
            if (season === 'Winter' && roses > 9) {
                bouquet *= 0.9;
            }
        }
    }
    if (mums + roses + tulips > 20) {
        bouquet *= 0.8;
    }
    console.log((bouquet+2).toFixed(2))
}
flower(2,4, 8, 'Spring', 'Y')
flower(3,10, 9, 'Winter', 'N')