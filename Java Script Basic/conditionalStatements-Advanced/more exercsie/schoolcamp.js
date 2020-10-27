function trip(season, gender, students, nights) {
    students = Number(students);
    nights = Number(nights);
    let price = 0;
    let sport;
    if (gender === 'mixed') {
        if (season === 'Winter') {
            price = 10 * students * nights;
            sport = 'Ski';
        } else if (season === 'Spring') {
            price = 9.5 * students * nights;
            sport = 'Cycling'
        } else {
            price = 20 * students * nights;
            sport = 'Swimming';
        }
    } else {
        if (season === 'Winter') {
            price = 9.6 * students * nights;
            if (gender === 'boys') {
                sport = 'Judo';
            } else {
                sport = 'Gymnastics';
            }
        } else if (season === 'Spring') {
            price = 7.2 * students * nights;
            if (gender === 'boys') {
                sport = 'Tennis';
            } else {
                sport = 'Athletics';
            }
        } else {
            price = 15 * students * nights;
            if (gender === 'boys') {
                sport = 'Football';
            } else {
                sport = 'Volleyball';
            }
        }
    }
    if (students >= 50) {
        price *= 0.5;
    } else if (students >= 20) {
        price *= 0.85;
    } else if (students >= 10) {
        price *= 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`)
}
trip('Spring', 'girls', 20, 7)
trip('Winter', 'mixed', 9, 15)
trip('Summer', 'boys', 60, 7)
trip('Spring', 'mixed', 17, 14)